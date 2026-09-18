import { ArrowLeft, CalendarDays, Save } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { createCourse } from '@/app/actions';

const prisma = new PrismaClient();

export default async function NewCoursePage() {
  let teachers: { id: string; full_name: string }[] = [];
  let levels: { id: string; code: string }[] = [];
  try {
    [teachers, levels] = await Promise.all([
      prisma.teachers.findMany({ orderBy: { full_name: 'asc' }, select: { id: true, full_name: true } }),
      prisma.learning_levels.findMany({ orderBy: { sort_order: 'asc' }, select: { id: true, code: true } }),
    ]);
  } catch {
    teachers = [];
    levels = [];
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="border-b border-gray-800 bg-[#161920]"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600"><CalendarDays className="h-5 w-5 text-white" /></div><div><h1 className="text-lg font-bold text-white">Nouveau créneau</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Planification pédagogique</p></div></div><a href="/admin/planning" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200"><ArrowLeft size={16} /> Retour</a></div></nav>
      <main className="mx-auto max-w-4xl px-6 py-10"><div className="mb-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">Organisation</p><h2 className="text-3xl font-black text-white">Créer un cours</h2></div>
        <form action={createCourse} className="rounded-3xl border border-gray-800 bg-[#161920] p-6 md:p-8"><div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-medium text-gray-200">Nom du cours *</span><input required name="title" placeholder="A2 - Conversation" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Type</span><select name="course_type" defaultValue="groupe" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="groupe">Groupe</option><option value="individuel">Individuel</option><option value="intensif">Intensif</option><option value="preparation_examen">Préparation examen</option><option value="conversation">Conversation</option></select></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Horaire</span><input name="schedule" placeholder="Lundi 18h - 20h" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Salle</span><input name="room" placeholder="Salle 02" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Professeur</span><select name="teacher_id" defaultValue="" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="">Non affecté</option>{teachers.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.full_name}</option>)}</select></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Niveau</span><select name="level_id" defaultValue="" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="">Non défini</option>{levels.map((level) => <option key={level.id} value={level.id}>{level.code}</option>)}</select></label>
        </div><div className="mt-8 flex justify-end border-t border-gray-800 pt-6"><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-400"><Save size={16} /> Enregistrer le cours</button></div></form>
      </main>
    </div>
  );
}
