import { ArrowLeft, BriefcaseBusiness, CalendarRange, GraduationCap, Languages, Star, Users } from 'lucide-react';

const teachers = [
  {
    id: 't1',
    full_name: 'Anne Koné',
    email: 'anne@deutschpro.ml',
    specialization: 'Deutsch B1 - B2',
    status: 'permanent',
    hourly_rate: 12000,
    courses: 4,
    students: 18,
    next_session: 'Lundi 18h - A2 / B1',
  },
  {
    id: 't2',
    full_name: 'Mamadou Sangaré',
    email: 'mamadou@deutschpro.ml',
    specialization: 'A1 - A2 & oral',
    status: 'vacataire',
    hourly_rate: 10500,
    courses: 3,
    students: 12,
    next_session: 'Mardi 17h - Conversation',
  },
  {
    id: 't3',
    full_name: 'Zeinab Traoré',
    email: 'zeinab@deutschpro.ml',
    specialization: 'Préparation examen, écriture',
    status: 'independant',
    hourly_rate: 13500,
    courses: 2,
    students: 9,
    next_session: 'Jeudi 19h - Goethe / TestDaF',
  },
];

const statusLabels: Record<string, string> = {
  permanent: 'Permanent',
  vacataire: 'Vacataire',
  independant: 'Indépendant',
  intermittent: 'Intermittent',
};

export default async function TeachersPage() {
  const totalTeachers = teachers.length;
  const totalHours = teachers.reduce((sum, teacher) => sum + teacher.courses * 2, 0);
  const totalStudents = teachers.reduce((sum, teacher) => sum + teacher.students, 0);

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Gestion professeurs</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Deutsch Pro Bamako</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#0f1115] px-4 py-2 text-sm text-gray-200 hover:border-gray-600"
            >
              <ArrowLeft size={16} /> Retour admin
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-400">Personnel</p>
            <h2 className="text-3xl font-black text-white">Suivi des professeurs</h2>
          </div>
          <a href="/admin/professeurs/nouveau" className="rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-400">
            Ajouter un professeur
          </a>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Professeurs</span>
              <Users className="h-4 w-4 text-amber-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{totalTeachers}</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Heures / semaine</span>
              <CalendarRange className="h-4 w-4 text-cyan-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{totalHours}</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Apprenants suivis</span>
              <Languages className="h-4 w-4 text-violet-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{totalStudents}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-lg font-bold text-white">
                    {teacher.full_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{teacher.full_name}</h3>
                    <p className="text-xs text-gray-400">{teacher.email}</p>
                  </div>
                </div>
                <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase text-amber-300">
                  {statusLabels[teacher.status]}
                </div>
              </div>

              <div className="mb-5 space-y-3">
                <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-3">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Spécialités</p>
                  <p className="font-medium text-gray-200">{teacher.specialization}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-3">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Cours</p>
                    <p className="font-bold text-white">{teacher.courses}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-3">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">Tarif/h</p>
                    <p className="font-bold text-white">{teacher.hourly_rate.toLocaleString('fr-FR')} FCFA</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-gray-800 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span className="flex items-center gap-2"><Users size={14} className="text-emerald-400" /> Étudiants</span>
                  <span className="font-semibold text-white">{teacher.students}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span className="flex items-center gap-2"><BriefcaseBusiness size={14} className="text-cyan-400" /> Prochaine séance</span>
                </div>
                <div className="rounded-xl border border-gray-800 bg-[#0f1115] p-3 text-sm text-gray-200">
                  {teacher.next_session}
                </div>
                <div className="flex items-center justify-between rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-amber-200">
                  <span className="inline-flex items-center gap-2"><Star size={14} /> Évaluation</span>
                  <span className="font-bold">4.8/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
