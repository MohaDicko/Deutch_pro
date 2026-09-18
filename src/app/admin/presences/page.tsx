import { ArrowLeft, CalendarCheck2, CheckCircle2, Clock3, GraduationCap, UserRound, XCircle } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { createAttendance } from '@/app/actions';

const prisma = new PrismaClient();

const statusLabels: Record<string, string> = {
  present: 'Présent',
  absent: 'Absent',
  retard: 'En retard',
  excuse: 'Excusé',
};

export default async function AttendancePage() {
  let students: { id: string; full_name: string }[] = [];
  let courses: { id: string; title: string }[] = [];
  let records: { id: string; student: string; course: string; status: string; date: Date }[] = [];

  try {
    const [studentRecords, courseRecords, attendanceRecords] = await Promise.all([
      prisma.students.findMany({ where: { status: { in: ['inscrit', 'actif'] } }, orderBy: { full_name: 'asc' }, select: { id: true, full_name: true } }),
      prisma.courses.findMany({ orderBy: { title: 'asc' }, select: { id: true, title: true } }),
      prisma.student_attendances.findMany({ orderBy: { attended_on: 'desc' }, take: 20, include: { student: true, course: true } }),
    ]);
    students = studentRecords;
    courses = courseRecords;
    records = attendanceRecords.map((record) => ({ id: record.id, student: record.student.full_name, course: record.course.title, status: record.status, date: record.attended_on }));
  } catch {
    // The page remains available while the database is being configured.
  }

  const presentCount = records.filter((record) => record.status === 'present').length;
  const attendanceRate = records.length ? Math.round((presentCount / records.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-red-600"><CalendarCheck2 className="h-5 w-5 text-white" /></div><div><h1 className="text-lg font-bold text-white">Suivi des présences</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Assiduité des apprenants</p></div></div><a href="/admin" className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#0f1115] px-4 py-2 text-sm text-gray-200 hover:border-gray-600"><ArrowLeft size={16} /> Retour admin</a></div></nav>
      <main className="mx-auto max-w-7xl px-6 py-10"><div className="mb-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-rose-400">Pédagogie</p><h2 className="text-3xl font-black text-white">Présences et assiduité</h2></div>
        <div className="mb-10 grid gap-5 md:grid-cols-3"><Metric icon={<CalendarCheck2 size={16} />} label="Taux de présence" value={`${attendanceRate}%`} /><Metric icon={<CheckCircle2 size={16} />} label="Présences enregistrées" value={presentCount} /><Metric icon={<GraduationCap size={16} />} label="Apprenants disponibles" value={students.length} /></div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <form action={createAttendance} className="rounded-3xl border border-gray-800 bg-[#161920] p-6"><h3 className="mb-5 text-xl font-bold text-white">Enregistrer une présence</h3><div className="space-y-5">
            <label className="block space-y-2"><span className="text-sm font-medium text-gray-200">Apprenant</span><select required name="student_id" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="">Sélectionner</option>{students.map((student) => <option key={student.id} value={student.id}>{student.full_name}</option>)}</select></label>
            <label className="block space-y-2"><span className="text-sm font-medium text-gray-200">Cours</span><select required name="course_id" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="">Sélectionner</option>{courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select></label>
            <label className="block space-y-2"><span className="text-sm font-medium text-gray-200">Date</span><input required name="attended_on" type="date" defaultValue={new Date().toISOString().slice(0, 10)} className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
            <label className="block space-y-2"><span className="text-sm font-medium text-gray-200">Statut</span><select name="status" defaultValue="present" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="present">Présent</option><option value="absent">Absent</option><option value="retard">En retard</option><option value="excuse">Excusé</option></select></label>
            <label className="block space-y-2"><span className="text-sm font-medium text-gray-200">Note</span><textarea name="note" rows={3} className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
            <button type="submit" disabled={!students.length || !courses.length} className="w-full rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-400 disabled:cursor-not-allowed disabled:opacity-50">Enregistrer la présence</button>
          </div></form>

          <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6"><div className="mb-5 flex items-center justify-between"><h3 className="text-xl font-bold text-white">Historique récent</h3><Clock3 className="text-rose-400" size={18} /></div>{records.length === 0 ? <div className="rounded-2xl border border-dashed border-gray-700 p-10 text-center text-sm text-gray-500">Aucune présence enregistrée.</div> : <div className="space-y-3">{records.map((record) => <div key={record.id} className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#0f1115] p-4"><div className="flex items-center gap-3"><UserRound size={16} className="text-gray-500" /><div><p className="font-medium text-gray-200">{record.student}</p><p className="text-xs text-gray-500">{record.course} · {new Date(record.date).toLocaleDateString('fr-FR')}</p></div></div><span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${record.status === 'present' ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300' : 'border-amber-500/20 bg-amber-500/10 text-amber-300'}`}>{record.status === 'present' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}{statusLabels[record.status] ?? record.status}</span></div>)}</div>}</div>
        </div>
      </main>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) { return <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6"><div className="mb-3 flex items-center justify-between text-gray-400"><span className="text-sm">{label}</span><span className="text-rose-400">{icon}</span></div><p className="text-3xl font-extrabold text-white">{value}</p></div>; }
