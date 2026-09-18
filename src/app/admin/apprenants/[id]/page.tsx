import { PrismaClient } from '@prisma/client';
import { ArrowLeft, Award, CalendarDays, CheckCircle2, ClipboardList, GraduationCap, Sparkles, TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

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

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = await prisma.students.findUnique({
    where: { id },
    include: {
      level: true,
      assessments: {
        orderBy: { assessed_on: 'desc' },
        include: { criteria: true },
      },
      enrollments: {
        include: { course: true },
      },
      attendances: {
        orderBy: { attended_on: 'desc' },
        take: 5,
        include: { course: true },
      },
    },
  });

  if (!student) {
    notFound();
  }

  const latestAssessment = student.assessments[0];
  const averageScore = latestAssessment?.criteria.length
    ? Math.round(
        latestAssessment.criteria.reduce((sum, criterion) => sum + Number(criterion.score), 0) /
          latestAssessment.criteria.length
      )
    : 0;

  const attendanceRate = student.attendances.length
    ? Math.round(
        (student.attendances.filter((attendance) => attendance.status === 'present').length /
          student.attendances.length) *
          100
      )
    : 0;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Fiche apprenant</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Suivi académique</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/admin/apprenants"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#0f1115] px-4 py-2 text-sm text-gray-200 hover:border-gray-600"
            >
              <ArrowLeft size={16} /> Retour liste
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-gray-800 bg-[#161920] p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 text-2xl font-bold text-white">
              {student.full_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{student.full_name}</h2>
              <p className="text-sm text-gray-400">{student.email ?? 'Email non renseigné'}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
              {student.level?.code ?? 'A1'}
            </span>
            <span className="rounded-full border border-gray-700 bg-[#0f1115] px-3 py-1 text-xs font-medium text-gray-200">
              {statusLabels[student.status] ?? student.status}
            </span>
          </div>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Moyenne</span>
              <TrendingUp className="h-4 w-4 text-violet-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{averageScore}%</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Présence</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{attendanceRate}%</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Cours</span>
              <ClipboardList className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{student.enrollments.length}</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-3 flex items-center justify-between text-gray-400">
              <span className="text-sm">Objectif</span>
              <Sparkles className="h-4 w-4 text-amber-400" />
            </div>
            <p className="text-lg font-bold text-white">{student.objective ?? 'À définir'}</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Award className="h-5 w-5 text-violet-400" />
              <h3 className="text-xl font-bold text-white">Dernière évaluation</h3>
            </div>

            {latestAssessment ? (
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Date</span>
                    <span className="text-sm font-medium text-gray-200">
                      {new Date(latestAssessment.assessed_on).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Score global</span>
                    <span className="text-xl font-black text-white">{averageScore}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Statut</span>
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-300">
                      {statusLabels[latestAssessment.status] ?? latestAssessment.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {latestAssessment.criteria.map((criterion) => (
                    <div key={criterion.id} className="rounded-2xl border border-gray-800 bg-[#0f1115] p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-gray-200">{criterion.label}</span>
                        <span className="text-sm font-semibold text-white">{Number(criterion.score)} / {Number(criterion.max_score)}</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
                          style={{ width: `${(Number(criterion.score) / Number(criterion.max_score)) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-700 bg-[#0f1115] p-8 text-center text-gray-500">
                Aucune évaluation enregistrée pour ce profil.
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
              <div className="mb-5 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Présences récentes</h3>
              </div>

              <div className="space-y-3">
                {student.attendances.length === 0 ? (
                  <p className="text-sm text-gray-500">Aucune présence récente.</p>
                ) : (
                  student.attendances.map((attendance) => (
                    <div key={attendance.id} className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#0f1115] p-3">
                      <div>
                        <p className="font-medium text-gray-200">{attendance.course?.title ?? 'Cours'}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(attendance.attended_on).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase text-emerald-300">
                        {attendance.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6">
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Cours suivis</h3>
              </div>

              <div className="space-y-3">
                {student.enrollments.length === 0 ? (
                  <p className="text-sm text-gray-500">Aucun cours inscrit.</p>
                ) : (
                  student.enrollments.map((enrollment) => (
                    <div key={enrollment.id} className="rounded-2xl border border-gray-800 bg-[#0f1115] p-3">
                      <p className="font-medium text-gray-200">{enrollment.course?.title ?? 'Cours'}</p>
                      <p className="text-xs text-gray-400">{enrollment.course?.course_type ?? 'groupe'}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
