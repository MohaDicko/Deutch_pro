import { PrismaClient } from '@prisma/client';

// Prevent caching to always see fresh data
export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const contacts = await prisma.contacts.findMany({
    orderBy: { created_at: 'desc' }
  });

  const b2bRequests = await prisma.b2b_requests.findMany({
    orderBy: { created_at: 'desc' }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-12 border-b border-gray-200 pb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Espace Administrateur</h1>
            <p className="text-gray-500 mt-2">Gérez les demandes de contact et les partenariats d'entreprises.</p>
          </div>
          <a href="/" className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
            Retour au site
          </a>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contacts Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">{contacts.length}</span>
              Messages de Contact
            </h2>
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">Aucun message pour le moment.</div>
              ) : (
                contacts.map(contact => (
                  <div key={contact.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{contact.name}</h3>
                        <a href={`mailto:${contact.email}`} className="text-red-600 hover:underline text-sm">{contact.email}</a>
                        {contact.phone && <div className="text-gray-500 text-sm mt-1">📞 {contact.phone}</div>}
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {new Date(contact.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">{contact.message}</p>
                    <div className="mt-4 flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded uppercase tracking-wider font-bold ${contact.status === 'nouveau' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* B2B Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{b2bRequests.length}</span>
              Demandes Entreprises (B2B)
            </h2>
            <div className="space-y-4">
              {b2bRequests.length === 0 ? (
                <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">Aucune demande d'entreprise.</div>
              ) : (
                b2bRequests.map(req => (
                  <div key={req.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{req.company}</h3>
                        <div className="text-gray-600 text-sm mt-1">👤 {req.contact_name}</div>
                        <a href={`mailto:${req.email}`} className="text-blue-600 hover:underline text-sm inline-block mt-1">✉️ {req.email}</a>
                        <div className="text-gray-500 text-sm mt-1">📞 {req.phone}</div>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {new Date(req.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm bg-blue-50 p-3 rounded-lg">
                      <div><strong>Secteur :</strong> {req.sector}</div>
                      <div><strong>Candidats :</strong> {req.candidates_count}</div>
                    </div>

                    {req.message && <p className="text-gray-700 text-sm mb-4">"{req.message}"</p>}
                    
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded uppercase tracking-wider font-bold ${req.status === 'nouveau' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {req.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
