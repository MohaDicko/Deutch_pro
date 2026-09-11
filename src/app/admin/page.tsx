import { PrismaClient } from '@prisma/client';
import { Mail, Briefcase, Calendar, User, Phone, Building2, MessageSquare, ArrowLeft, CheckCircle2, Inbox } from 'lucide-react';

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

  const totalMessages = contacts.length + b2bRequests.length;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 font-sans selection:bg-red-500/30">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#161920]/80 border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
              <span className="font-bold text-white text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Admin Portal</h1>
              <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">Deutsch Pro Bamako</p>
            </div>
          </div>
          <a href="/" className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition-all shadow-md">
            <ArrowLeft size={16} /> Retour au site
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#161920] border border-gray-800 p-6 rounded-3xl shadow-xl relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                <Inbox size={24} />
              </div>
              <h3 className="text-gray-400 font-medium">Total Messages</h3>
            </div>
            <p className="text-4xl font-extrabold text-white">{totalMessages}</p>
          </div>
          
          <div className="bg-[#161920] border border-gray-800 p-6 rounded-3xl shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                <Mail size={24} />
              </div>
              <h3 className="text-gray-400 font-medium">Contacts Simples</h3>
            </div>
            <p className="text-4xl font-extrabold text-white">{contacts.length}</p>
          </div>

          <div className="bg-[#161920] border border-gray-800 p-6 rounded-3xl shadow-xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h3 className="text-gray-400 font-medium">Partenariats B2B</h3>
            </div>
            <p className="text-4xl font-extrabold text-white">{b2bRequests.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contacts Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <MessageSquare className="text-blue-500" /> Messages
              </h2>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full">{contacts.length}</span>
            </div>
            
            <div className="space-y-4">
              {contacts.length === 0 ? (
                <div className="bg-[#161920] border border-gray-800 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                  <Inbox size={48} className="text-gray-700 mb-4" />
                  <p className="text-gray-500">Aucun message pour le moment.</p>
                </div>
              ) : (
                contacts.map(contact => (
                  <div key={contact.id} className="bg-[#161920] border border-gray-800 p-6 rounded-3xl hover:border-gray-700 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white shadow-sm">
                          {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-100 text-lg">{contact.name}</h3>
                          <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300 text-sm transition-colors">{contact.email}</a>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
                        <Calendar size={12} />
                        {new Date(contact.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                    
                    {contact.phone && (
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <Phone size={14} className="text-gray-500" /> {contact.phone}
                      </div>
                    )}
                    
                    <div className="bg-[#0f1115] border border-gray-800 p-4 rounded-2xl text-gray-300 text-sm leading-relaxed relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-2xl"></div>
                      <p className="pl-2">{contact.message}</p>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                        <CheckCircle2 size={12} /> {contact.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* B2B Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Building2 className="text-purple-500" /> Entreprises (B2B)
              </h2>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full">{b2bRequests.length}</span>
            </div>
            
            <div className="space-y-4">
              {b2bRequests.length === 0 ? (
                <div className="bg-[#161920] border border-gray-800 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                  <Briefcase size={48} className="text-gray-700 mb-4" />
                  <p className="text-gray-500">Aucune demande d'entreprise.</p>
                </div>
              ) : (
                b2bRequests.map(req => (
                  <div key={req.id} className="bg-[#161920] border border-gray-800 p-6 rounded-3xl hover:border-gray-700 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center font-bold text-white shadow-sm">
                          <Building2 size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-100 text-lg leading-tight">{req.company}</h3>
                          <div className="flex items-center gap-1 text-purple-400 text-sm mt-1 font-medium">
                            <User size={14} /> {req.contact_name}
                          </div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
                        <Calendar size={12} />
                        {new Date(req.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <a href={`mailto:${req.email}`} className="flex items-center gap-2 text-gray-400 hover:text-gray-200 text-sm transition-colors">
                        <Mail size={14} className="text-gray-500" /> {req.email}
                      </a>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Phone size={14} className="text-gray-500" /> {req.phone}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-[#0f1115] border border-gray-800 p-3 rounded-xl flex flex-col">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Secteur</span>
                        <span className="text-sm text-gray-200 font-semibold">{req.sector}</span>
                      </div>
                      <div className="bg-[#0f1115] border border-gray-800 p-3 rounded-xl flex flex-col">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Candidats</span>
                        <span className="text-sm text-gray-200 font-semibold">{req.candidates_count}</span>
                      </div>
                    </div>

                    {req.message && (
                      <div className="bg-[#0f1115] border border-gray-800 p-4 rounded-2xl text-gray-300 text-sm leading-relaxed relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-2xl"></div>
                        <p className="pl-2">{req.message}</p>
                      </div>
                    )}
                    
                    <div className="mt-4 flex gap-2">
                      <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                        <CheckCircle2 size={12} /> {req.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
