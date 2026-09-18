import { ArrowLeft, Award, CheckCircle2, ClipboardCheck, Users } from 'lucide-react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fallbackAssessments = [
  { id: 'a1', student: 'Awa Diallo', level: 'B1', course: 'B1 - Intensif', score: 82, status: 'valide', date: '12 sept. 2026', comment: 'Bonne progression à l’oral.' },
  { id: 'a2', student: 'Moussa Traoré', level: 'B1', course: 'B1 - Oral', score: 74, status: 'en_cours', date: '10 sept. 2026', comment: 'Renforcer la compréhension orale.' },
  { id: 'a3', student: 'Sofia Koné', level: 'A1', course: 'A1 - Débutants', score: 68, status: 'renforcement', date: '08 sept. 2026', comment: 'Revoir les bases grammaticales.' },
];

const statusLabels: Record<string, string> = {
  en_cours: 'En cours',
  valide: 'Validé',
  refuse: 'Refusé',
  renforcement: 'Renforcement',
};

export default async function AssessmentsPage() {
  let assessments = fallbackAssessments;

  try {
    const records = await prisma.assessments.findMany({
      orderBy: { assessed_on: 'desc' },
      take: 50,
      include: { student: true, level: true, course: true },
    });

    if (records.length > 0) {
      assessments = records.map((assessment) => ({
        id: assessment.id,
        student: assessment.student.full_name,
        level: assessment.level?.code ?? 'N/A',
        course: assessment.course?.title ?? 'Évaluation générale',
        score: Number(assessment.total_score ?? 0),
        status: assessment.status,
        date: new Date(assessment.assessed_on).toLocaleDateString('fr-FR'),
        comment: assessment.comment ?? 'Aucun commentaire.',
      }));
    }
  } catch {
    // The demo data keeps the operational view available before database setup.
  }

  const average = Math.round(assessments.reduce((sum, assessment) => sum + assessment.score, 0) / assessments.length);
  const validated = assessments.filter((assessment) => assessment.status === 'valide').length;
  const followUp = assessments.filter((assessment) => assessment.status === 'renforcement').length;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600">
              <ClipboardCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Évaluations</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Suivi pédagogique</p>
            </div>
          </div>
          <a href="/admin" className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#0f1115] px-4 py-2 text-sm text-gray-200 hover:border-gray-600">
            <ArrowLeft size={16} /> Retour admin
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-violet-400">Résultats</p>
            <h2 className="text-3xl font-black text-white">Évaluations des apprenants</h2>
          </div>
          <a href="/admin/evaluations/nouveau" className="rounded-full bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-400">Saisir une évaluation</a>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-4">
          <Metric icon={<ClipboardCheck size={16} />} label="Évaluations" value={assessments.length} />
          <Metric icon={<Award size={16} />} label="Moyenne" value={`${average}%`} />
          <Metric icon={<CheckCircle2 size={16} />} label="Validées" value={validated} />
          <Metric icon={<Users size={16} />} label="À accompagner" value={followUp} />
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#161920]">
          <div className="hidden grid-cols-[1.5fr_0.7fr_1.3fr_0.7fr_1fr] gap-4 border-b border-gray-800 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 md:grid">
            <span>Apprenant</span><span>Niveau</span><span>Formation</span><span>Score</span><span>Statut</span>
          </div>
          <div className="divide-y divide-gray-800">
            {assessments.map((assessment) => (
              <div key={assessment.id} className="grid gap-4 px-6 py-5 md:grid-cols-[1.5fr_0.7fr_1.3fr_0.7fr_1fr] md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 font-bold text-violet-300">{assessment.student.charAt(0)}</div>
                    <div><p className="font-semibold text-white">{assessment.student}</p><p className="text-xs text-gray-500">{assessment.date}</p></div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 md:hidden">{assessment.comment}</p>
                </div>
                <span className="w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">{assessment.level}</span>
                <div><p className="text-sm text-gray-200">{assessment.course}</p><p className="mt-1 hidden text-xs text-gray-500 md:block">{assessment.comment}</p></div>
                <span className="text-xl font-black text-white">{assessment.score}%</span>
                <span className="w-fit rounded-full border border-gray-700 bg-[#0f1115] px-3 py-1 text-xs font-semibold text-gray-200">{statusLabels[assessment.status] ?? assessment.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6"><div className="mb-3 flex items-center justify-between text-gray-400"><span className="text-sm">{label}</span><span className="text-violet-400">{icon}</span></div><p className="text-4xl font-extrabold text-white">{value}</p></div>;
}
