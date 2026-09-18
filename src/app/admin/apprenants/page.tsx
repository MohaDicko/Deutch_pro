import { PrismaClient } from '@prisma/client';
import { ArrowLeft, Award, BookOpenText, GraduationCap, TrendingUp } from 'lucide-react';

const prisma = new PrismaClient();

const fallbackStudents = [
  {
    id: 's1',
    full_name: 'Awa Diallo',
    email: 'awa@demo.fr',
    phone: '+223 00 00 00 00',
    status: 'actif',
    objective: 'Passer du niveau A2 au B1',
    created_at: new Date(),
    level: { code: 'A2', label: 'A2' },
    assessments: [{ total_score: 82, status: 'valide' }],
    enrollments: [{ id: 'e1' }],
  },
  {
    id: 's2',
    full_name: 'Moussa Traoré',
    email: 'moussa@demo.fr',
    phone: '+223 11 11 11 11',
    status: 'actif',
    objective: 'Renforcer la compréhension orale',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    level: { code: 'B1', label: 'B1' },
    assessments: [{ total_score: 74, status: 'en_cours' }],
    enrollments: [{ id: 'e2' }, { id: 'e3' }],
  },
  {
    id: 's3',
    full_name: 'Sofia Koné',
    email: 'sofia@demo.fr',
    phone: '+223 22 22 22 22',
    status: 'inscrit',
    objective: 'Débuter le niveau A1',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    level: { code: 'A1', label: 'A1' },
    assessments: [{ total_score: 68, status: 'renforcement' }],
    enrollments: [{ id: 'e4' }],
  },
];

const statusLabels: Record<string, string> = {
  inscrit: 'Inscrit',
  actif: 'Actif',
  suspendu: 'Suspendu',
  termine: 'Terminé',
  abandon: 'Abandon',
  en_cours: 'En cours',
  valide: 'Validé',
  refuse: 'Refusé',
  renforcement: 'Renforcement',
};

export default async function LearnersPage({
  searchParams,
}: {
  searchParams?: Promise<{ created?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  let students: any[] = [];

  try {
    students = await prisma.students.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        level: true,
        assessments: {
          orderBy: { assessed_on: 'desc' },
          take: 1,
        },
        enrollments: true,
      },
    });
  } catch {
    students = fallbackStudents;
  }

  const totalStudents = students.length;
  const activeStudents = students.filter((student) => student.status === 'actif').length;
  const averageProgress = students.length
    ? Math.round(
        students.reduce((sum, student) => {
          const latest = student.assessments?.[0]?.total_score ?? 0;
          return sum + Number(latest || 0);
        }, 0) / students.length
      )
    : 0;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Gestion apprenants</h1>
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
        {params.created === '1' && (
          <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
            L’apprenant a été enregistré avec succès.
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">Académie</p>
            <h2 className="text-3xl font-black text-white">Suivi des apprenants</h2>
          </div>
          <a href="/admin/apprenants/nouveau" className="rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400">
            Ajouter un apprenant
          </a>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Total apprenants</span>
              <GraduationCap className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{totalStudents}</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Actifs</span>
              <BookOpenText className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{activeStudents}</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Moyenne générale</span>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <p className="text-4xl font-extrabold text-white">{averageProgress}%</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#161920]">
          <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1.2fr] gap-4 border-b border-gray-800 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            <span>Apprenant</span>
            <span>Niveau</span>
            <span>Statut</span>
            <span>Progression</span>
            <span>Évaluation</span>
          </div>

          {students.map((student) => {
            const latestAssessment = student.assessments?.[0]?.total_score ?? 0;
            const assessmentStatus = student.assessments?.[0]?.status ?? 'en_cours';
            const levelCode = student.level?.code ?? 'A1';

            return (
              <div key={student.id} className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1.2fr] gap-4 border-b border-gray-800 px-6 py-5 last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 font-bold text-white">
                    {student.full_name?.charAt(0)?.toUpperCase() ?? 'A'}
                  </div>
                  <div>
                    <a href={`/admin/apprenants/${student.id}`} className="font-semibold text-white hover:text-emerald-300 transition-colors">
                      {student.full_name}
                    </a>
                    <p className="text-sm text-gray-400">{student.email ?? 'Email non renseigné'}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {levelCode}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="rounded-full border border-gray-700 bg-[#0f1115] px-3 py-1 text-xs font-medium text-gray-200">
                    {statusLabels[student.status] ?? student.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-gray-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      style={{ width: `${Math.min(100, Number(latestAssessment) || 0)}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-300">{latestAssessment}%</span>
                </div>

                <div className="flex items-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    <Award size={12} />
                    {statusLabels[assessmentStatus] ?? assessmentStatus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
