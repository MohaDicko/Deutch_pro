import { ArrowLeft, GraduationCap, Save } from 'lucide-react';
import { createTeacher } from '@/app/actions';

export default function NewTeacherPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="border-b border-gray-800 bg-[#161920]"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600"><GraduationCap className="h-5 w-5 text-white" /></div><div><h1 className="text-lg font-bold text-white">Nouveau professeur</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Création de profil</p></div></div><a href="/admin/professeurs" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200"><ArrowLeft size={16} /> Retour</a></div></nav>
      <main className="mx-auto max-w-4xl px-6 py-10"><div className="mb-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-400">Ressources humaines</p><h2 className="text-3xl font-black text-white">Créer un profil professeur</h2></div>
        <form action={createTeacher} className="rounded-3xl border border-gray-800 bg-[#161920] p-6 md:p-8"><div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-medium text-gray-200">Nom complet *</span><input required name="full_name" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">E-mail</span><input name="email" type="email" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Téléphone</span><input name="phone" type="tel" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Spécialités</span><input name="specialization" placeholder="A1-A2, oral, examen..." className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Tarif horaire (FCFA)</span><input required name="hourly_rate" type="number" min="0" step="500" defaultValue="10000" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500" /></label>
          <label className="space-y-2"><span className="text-sm font-medium text-gray-200">Statut</span><select name="status" defaultValue="vacataire" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-amber-500"><option value="permanent">Permanent</option><option value="vacataire">Vacataire</option><option value="independant">Indépendant</option><option value="intermittent">Intermittent</option></select></label>
        </div><div className="mt-8 flex justify-end border-t border-gray-800 pt-6"><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-400"><Save size={16} /> Enregistrer le professeur</button></div></form>
      </main>
    </div>
  );
}
