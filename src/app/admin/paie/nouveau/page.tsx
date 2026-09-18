import { ArrowLeft, Banknote, Save } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { createPayroll } from '@/app/actions';

const prisma = new PrismaClient();

export default async function NewPayrollPage() {
  const teachers = await prisma.teachers.findMany({
    where: { hourly_rate: { not: null } },
    orderBy: { full_name: 'asc' },
    select: { id: true, full_name: true, hourly_rate: true },
  });

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="border-b border-gray-800 bg-[#161920]"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600"><Banknote className="h-5 w-5 text-white" /></div><div><h1 className="text-lg font-bold text-white">Préparer une paie</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Calcul salarial</p></div></div><a href="/admin/paie" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200"><ArrowLeft size={16} /> Retour</a></div></nav>
      <main className="mx-auto max-w-4xl px-6 py-10"><div className="mb-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">Ressources humaines</p><h2 className="text-3xl font-black text-white">Créer une fiche de paie</h2></div>
        {teachers.length === 0 ? <div className="rounded-3xl border border-dashed border-gray-700 bg-[#161920] p-8 text-center text-gray-400">Aucun professeur avec tarif horaire n’est disponible.</div> : <form action={createPayroll} className="rounded-3xl border border-gray-800 bg-[#161920] p-6 md:p-8"><div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-medium text-gray-200">Professeur *</span><select required name="teacher_id" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white"><option value="">Sélectionner</option>{teachers.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.full_name} - {Number(teacher.hourly_rate).toLocaleString('fr-FR')} FCFA/h</option>)}</select></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Mois *</span><input required name="month" defaultValue="Septembre 2026" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Heures travaillées *</span><input required name="hours_worked" type="number" min="0" step="0.5" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Bonus</span><input name="bonus" type="number" min="0" step="500" defaultValue="0" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Retenues</span><input name="deductions" type="number" min="0" step="500" defaultValue="0" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white" /></label>
        </div><p className="mt-6 text-sm text-gray-500">Le brut et le net sont calculés côté serveur à partir du tarif horaire enregistré du professeur.</p><div className="mt-8 flex justify-end border-t border-gray-800 pt-6"><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400"><Save size={16} /> Calculer la paie</button></div></form>}
      </main>
    </div>
  );
}
