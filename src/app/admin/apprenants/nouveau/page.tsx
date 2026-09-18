import { ArrowLeft, GraduationCap, Save } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { createStudent } from '@/app/actions';

const prisma = new PrismaClient();

const fallbackLevels = [
  { id: '', code: 'A1', label: 'A1 - Débutant' },
  { id: '', code: 'A2', label: 'A2 - Élémentaire' },
  { id: '', code: 'B1', label: 'B1 - Intermédiaire' },
  { id: '', code: 'B2', label: 'B2 - Avancé' },
];

export default async function NewStudentPage() {
  let levels = fallbackLevels;

  try {
    const records = await prisma.learning_levels.findMany({ orderBy: { sort_order: 'asc' } });
    if (records.length > 0) {
      levels = records.map((level) => ({ id: level.id, code: level.code, label: `${level.code} - ${level.label}` }));
    }
  } catch {
    // The form remains available before the learning levels are seeded.
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="border-b border-gray-800 bg-[#161920]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Nouvel apprenant</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Création de profil</p>
            </div>
          </div>
          <a href="/admin/apprenants" className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-200 hover:border-gray-500">
            <ArrowLeft size={16} /> Retour
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">Inscription</p>
          <h2 className="text-3xl font-black text-white">Créer un dossier apprenant</h2>
          <p className="mt-2 text-sm text-gray-400">Les informations pourront être complétées depuis la fiche détaillée.</p>
        </div>

        <form action={createStudent} className="rounded-3xl border border-gray-800 bg-[#161920] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-200">Nom complet *</span>
              <input required name="full_name" type="text" placeholder="Ex. Awa Diallo" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-emerald-500" />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-200">Adresse e-mail</span>
              <input name="email" type="email" placeholder="awa@example.com" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-emerald-500" />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-200">Téléphone</span>
              <input name="phone" type="tel" placeholder="+223 ..." className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-emerald-500" />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-200">Niveau de départ</span>
              <select name="level_id" defaultValue="" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-emerald-500">
                <option value="">À évaluer</option>
                {levels.map((level) => <option key={`${level.code}-${level.id}`} value={level.id}>{level.label}</option>)}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-200">Objectif</span>
              <input name="objective" type="text" placeholder="Ex. Préparer le niveau B1" className="w-full rounded-2xl border border-gray-700 bg-[#0f1115] px-4 py-3 text-sm text-white outline-none focus:border-emerald-500" />
            </label>
          </div>

          <div className="mt-8 flex justify-end border-t border-gray-800 pt-6">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400">
              <Save size={16} /> Enregistrer l’apprenant
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
