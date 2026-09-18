import { ArrowLeft, ClipboardCheck, Save } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { createAssessment } from '@/app/actions';

const prisma = new PrismaClient();

export default async function NewAssessmentPage() {
  let students: { id: string; full_name: string }[] = [];
  try {
    students = await prisma.students.findMany({ where: { status: { in: ['inscrit', 'actif'] } }, orderBy: { full_name: 'asc' }, select: { id: true, full_name: true } });
  } catch {
    students = [];
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="border-b border-gray-800 bg-[#161920]"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600"><ClipboardCheck className="h-5 w-5 text-white" /></div><div><h1 className="text-lg font-bold text-white">Nouvelle évaluation</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Résultat pédagogique</p></div></div><a href="/admin/evaluations" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200"><ArrowLeft size={16} /> Retour</a></div></nav>
      <main className="mx-auto max-w-4xl px-6 py-10"><div className="mb-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-violet-400">Évaluation</p><h2 className="text-3xl font-black text-white">Saisir un résultat</h2></div>
        {students.length === 0 ? <div className="rounded-3xl border border-dashed border-gray-700 bg-[#161920] p-8 text-center text-gray-400">Aucun apprenant actif n’est disponible. Créez d’abord un apprenant.</div> : <form action={createAssessment} className="rounded-3xl border border-gray-800 bg-[#161920] p-6 md:p-8"><div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-medium text-gray-200">Apprenant *</span><select required name="student_id" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"><option value="">Sélectionner</option>{students.map((student) => <option key={student.id} value={student.id}>{student.full_name}</option>)}</select></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Score global (%) *</span><input required name="total_score" type="number" min="0" max="100" step="0.01" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-violet-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Décision</span><select name="status" defaultValue="en_cours" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"><option value="en_cours">En cours</option><option value="valide">Validé</option><option value="renforcement">Renforcement</option><option value="refuse">Refusé</option></select></label>
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-medium text-gray-200">Commentaire</span><textarea name="comment" rows={4} className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-violet-500" /></label>
        </div><div className="mt-8 flex justify-end border-t border-gray-800 pt-6"><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400"><Save size={16} /> Enregistrer l’évaluation</button></div></form>}
      </main>
    </div>
  );
}
