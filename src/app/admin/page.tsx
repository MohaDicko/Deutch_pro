import { PrismaClient } from '@prisma/client';
import { Mail, Briefcase, Calendar, User, Phone, Building2, MessageSquare, ArrowLeft, CheckCircle2, Inbox, Search, SlidersHorizontal } from 'lucide-react';
import { updateB2bStatus, updateContactStatus } from '@/app/actions';

// Prevent caching to always see fresh data
export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

type AdminSearchParams = {
  q?: string | string[];
  status?: string | string[];
  tab?: string | string[];
  dateRange?: string | string[];
};

const toSingleValue = (value?: string | string[]) => {
  if (Array.isArray(value)) return value[0] ?? '';
  return value ?? '';
};

const normalizeText = (value?: string | null) => (value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams?: Promise<AdminSearchParams> | AdminSearchParams;
}) {
  const params = searchParams ? await Promise.resolve(searchParams) : {};
  const query = toSingleValue(params.q).trim();
  const selectedStatus = toSingleValue(params.status) || 'all';
  const selectedTab = toSingleValue(params.tab) || 'all';
  const selectedDateRange = toSingleValue(params.dateRange) || 'all';

  const contacts = await prisma.contacts.findMany({
    orderBy: { created_at: 'desc' }
  });

  const b2bRequests = await prisma.b2b_requests.findMany({
    orderBy: { created_at: 'desc' }
  });

  const matchesQuery = (value?: string | null) => {
    if (!query) return true;
    return normalizeText(value).includes(normalizeText(query));
  };

  const matchesStatus = (status?: string | null) => {
    if (selectedStatus === 'all' || !selectedStatus) return true;
    return normalizeText(status) === normalizeText(selectedStatus);
  };

  const matchesDateRange = (createdAt: Date | string | null | undefined) => {
    if (!createdAt || selectedDateRange === 'all') return true;

    const days = Number(selectedDateRange);
    if (Number.isNaN(days)) return true;

    const createdDate = new Date(createdAt);
    if (Number.isNaN(createdDate.getTime())) return true;

    const diffMs = Date.now() - createdDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays <= days;
  };

  const filteredContacts = contacts.filter((contact) =>
    (matchesQuery(contact.name) ||
      matchesQuery(contact.email) ||
      matchesQuery(contact.phone) ||
      matchesQuery(contact.message)) &&
    matchesStatus(contact.status) &&
    matchesDateRange(contact.created_at)
  );

  const filteredB2bRequests = b2bRequests.filter((request) =>
    (matchesQuery(request.company) ||
      matchesQuery(request.contact_name) ||
      matchesQuery(request.email) ||
      matchesQuery(request.phone) ||
      matchesQuery(request.message)) &&
    matchesStatus(request.status) &&
    matchesDateRange(request.created_at)
  );

  const totalMessages = filteredContacts.length + filteredB2bRequests.length;
  const showContacts = selectedTab === 'all' || selectedTab === 'contacts';
  const showB2b = selectedTab === 'all' || selectedTab === 'b2b';

  const exportCsv = (() => {
    const rows = [
      ['Type', 'Nom', 'Email', 'Téléphone', 'Entreprise', 'Secteur', 'Candidats', 'Message', 'Statut', 'Date'],
      ...filteredContacts.map((contact) => [
        'Contact',
        contact.name,
        contact.email,
        contact.phone ?? '',
        '',
        '',
        '',
        contact.message,
        contact.status ?? 'nouveau',
        new Date(contact.created_at).toISOString(),
      ]),
      ...filteredB2bRequests.map((req) => [
        'B2B',
        req.contact_name,
        req.email,
        req.phone,
        req.company,
        req.sector,
        req.candidates_count,
        req.message ?? '',
        req.status ?? 'nouveau',
        new Date(req.created_at).toISOString(),
      ]),
    ];

    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    return `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
  })();

  const buildHref = (nextStatus: string, nextTab = selectedTab, nextDateRange = selectedDateRange) => {
    const params = new URLSearchParams();

    if (query) params.set('q', query);
    if (nextStatus && nextStatus !== 'all') params.set('status', nextStatus);
    else if (nextStatus === 'all') params.delete('status');

    if (nextTab && nextTab !== 'all') params.set('tab', nextTab);
    else params.delete('tab');

    if (nextDateRange && nextDateRange !== 'all') params.set('dateRange', nextDateRange);
    else params.delete('dateRange');

    const suffix = params.toString();
    return suffix ? `/admin?${suffix}` : '/admin';
  };

  const filters = [
    { label: 'Tous', value: 'all' },
    { label: 'Nouveau', value: 'nouveau' },
    { label: 'En cours', value: 'en cours' },
    { label: 'Traité', value: 'traite' },
  ];

  const dateOptions = [
    { label: 'Toutes les dates', value: 'all' },
    { label: '7 derniers jours', value: '7' },
    { label: '30 derniers jours', value: '30' },
    { label: '90 derniers jours', value: '90' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100 font-sans selection:bg-red-500/30">
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
          <div className="flex items-center gap-3">
            <a
              href={exportCsv}
              download="deutsch-pro-demandes.csv"
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-full text-sm font-medium transition-all hover:bg-emerald-500/20"
            >
              Exporter CSV
            </a>
            <a href="/" className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition-all shadow-md">
              <ArrowLeft size={16} /> Retour au site
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 bg-[#161920] border border-gray-800 rounded-3xl p-5 shadow-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <form method="get" action="/admin" className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Rechercher..."
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
              />
              <button type="submit" className="rounded-xl bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-400 transition-colors">
                OK
              </button>
            </form>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <SlidersHorizontal size={16} className="text-gray-500" />
              <span>Filtres</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = normalizeText(selectedStatus) === normalizeText(filter.value);
              const href = buildHref(filter.value, selectedTab, selectedDateRange);

              return (
                <a
                  key={filter.value}
                  href={href}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'border-red-500 bg-red-500/10 text-red-300'
                      : 'border-gray-700 bg-[#0f1115] text-gray-300 hover:border-gray-600 hover:text-white'
                  }`}
                >
                  {filter.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <label htmlFor="date-filter" className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Filtrer par date
            </label>
            <select
              id="date-filter"
              name="dateRange"
              defaultValue={selectedDateRange}
              className="rounded-xl border border-gray-700 bg-[#0f1115] px-3 py-2 text-sm text-gray-200 outline-none focus:border-red-500"
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

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
            <p className="text-4xl font-extrabold text-white">{filteredContacts.length}</p>
          </div>

          <div className="bg-[#161920] border border-gray-800 p-6 rounded-3xl shadow-xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h3 className="text-gray-400 font-medium">Partenariats B2B</h3>
            </div>
            <p className="text-4xl font-extrabold text-white">{filteredB2bRequests.length}</p>
          </div>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-6">
          <a href="/admin/apprenants" className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition hover:border-emerald-500/40 hover:bg-emerald-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-300">Apprenants</p>
            <h3 className="text-xl font-bold text-white">Suivi académique</h3>
          </a>

          <a href="/admin/professeurs" className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-5 transition hover:border-amber-500/40 hover:bg-amber-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-300">Professeurs</p>
            <h3 className="text-xl font-bold text-white">Ressources humaines</h3>
          </a>

          <a href="/admin/planning" className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5 transition hover:border-cyan-500/40 hover:bg-cyan-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">Planning</p>
            <h3 className="text-xl font-bold text-white">Cours & groupes</h3>
          </a>

          <a href="/admin/evaluations" className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-5 transition hover:border-violet-500/40 hover:bg-violet-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-violet-300">Évaluations</p>
            <h3 className="text-xl font-bold text-white">Résultats</h3>
          </a>

          <a href="/admin/paie" className="rounded-3xl border border-teal-500/20 bg-teal-500/5 p-5 transition hover:border-teal-500/40 hover:bg-teal-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-teal-300">Paie</p>
            <h3 className="text-xl font-bold text-white">Salaires</h3>
          </a>

          <a href="/admin/presences" className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-5 transition hover:border-rose-500/40 hover:bg-rose-500/10">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-rose-300">Présences</p>
            <h3 className="text-xl font-bold text-white">Assiduité</h3>
          </a>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            { label: 'Tous', value: 'all' },
            { label: 'Contacts', value: 'contacts' },
            { label: 'Entreprises', value: 'b2b' },
          ].map((tab) => {
            const isActive = selectedTab === tab.value;
            const href = buildHref(selectedStatus, tab.value, selectedDateRange);

            return (
              <a
                key={tab.value}
                href={href}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'border-blue-500 bg-blue-500/10 text-blue-200'
                    : 'border-gray-700 bg-[#161920] text-gray-300 hover:border-gray-600 hover:text-white'
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {showContacts && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <MessageSquare className="text-blue-500" /> Messages
                </h2>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full">{filteredContacts.length}</span>
              </div>

              <div className="space-y-4">
                {filteredContacts.length === 0 ? (
                  <div className="bg-[#161920] border border-gray-800 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                    <Inbox size={48} className="text-gray-700 mb-4" />
                    <p className="text-gray-500">Aucun message pour le moment.</p>
                  </div>
                ) : (
                  filteredContacts.map((contact) => (
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

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                          <CheckCircle2 size={12} /> {contact.status}
                        </span>

                        <form action={updateContactStatus} className="flex items-center gap-2">
                          <input type="hidden" name="id" value={contact.id} />
                          <select
                            name="status"
                            defaultValue={contact.status ?? 'nouveau'}
                            className="rounded-xl border border-gray-700 bg-[#0f1115] px-3 py-2 text-xs text-gray-200 outline-none focus:border-red-500"
                          >
                            <option value="nouveau">Nouveau</option>
                            <option value="en cours">En cours</option>
                            <option value="traité">Traité</option>
                          </select>
                          <button
                            type="submit"
                            className="rounded-xl bg-red-500 px-3 py-2 text-xs font-semibold text-white hover:bg-red-400 transition-colors"
                          >
                            Mettre à jour
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {showB2b && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="text-purple-500" /> Entreprises (B2B)
                </h2>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full">{filteredB2bRequests.length}</span>
              </div>

              <div className="space-y-4">
                {filteredB2bRequests.length === 0 ? (
                  <div className="bg-[#161920] border border-gray-800 border-dashed rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                    <Briefcase size={48} className="text-gray-700 mb-4" />
                    <p className="text-gray-500">Aucune demande d'entreprise.</p>
                  </div>
                ) : (
                  filteredB2bRequests.map((req) => (
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

                      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                          <CheckCircle2 size={12} /> {req.status}
                        </span>

                        <form action={updateB2bStatus} className="flex items-center gap-2">
                          <input type="hidden" name="id" value={req.id} />
                          <select
                            name="status"
                            defaultValue={req.status ?? 'nouveau'}
                            className="rounded-xl border border-gray-700 bg-[#0f1115] px-3 py-2 text-xs text-gray-200 outline-none focus:border-purple-500"
                          >
                            <option value="nouveau">Nouveau</option>
                            <option value="en cours">En cours</option>
                            <option value="traité">Traité</option>
                          </select>
                          <button
                            type="submit"
                            className="rounded-xl bg-purple-500 px-3 py-2 text-xs font-semibold text-white hover:bg-purple-400 transition-colors"
                          >
                            Mettre à jour
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
