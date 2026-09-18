import { ArrowLeft, Banknote, Clock3, Receipt, Users } from 'lucide-react';
import { PrismaClient } from '@prisma/client';
import { updatePayrollStatus } from '@/app/actions';

const prisma = new PrismaClient();

const fallbackPayrolls = [
  { id: 'p1', teacher: 'Anne Koné', month: 'Septembre 2026', hours: 48, gross: 576000, bonus: 25000, deductions: 0, net: 601000, status: 'ready' },
  { id: 'p2', teacher: 'Mamadou Sangaré', month: 'Septembre 2026', hours: 36, gross: 378000, bonus: 0, deductions: 15000, net: 363000, status: 'pending' },
  { id: 'p3', teacher: 'Zeinab Traoré', month: 'Septembre 2026', hours: 28, gross: 378000, bonus: 20000, deductions: 0, net: 398000, status: 'ready' },
];

const formatMoney = (value: number) => `${value.toLocaleString('fr-FR')} FCFA`;

export default async function PayrollPage({ searchParams }: { searchParams?: Promise<{ created?: string }> } = {}) {
  const params = searchParams ? await searchParams : {};
  let payrolls = fallbackPayrolls;

  try {
    const records = await prisma.payrolls.findMany({
      orderBy: { created_at: 'desc' },
      take: 50,
      include: { teacher: true },
    });

    if (records.length > 0) {
      payrolls = records.map((payroll) => ({
        id: payroll.id,
        teacher: payroll.teacher.full_name,
        month: payroll.month,
        hours: Number(payroll.hours_worked),
        gross: Number(payroll.gross_amount),
        bonus: Number(payroll.bonus),
        deductions: Number(payroll.deductions),
        net: Number(payroll.net_amount),
        status: payroll.status,
      }));
    }
  } catch {
    // The demo data keeps the payroll view usable before the database is connected.
  }

  const totalNet = payrolls.reduce((sum, payroll) => sum + payroll.net, 0);
  const totalHours = payrolls.reduce((sum, payroll) => sum + payroll.hours, 0);
  const pending = payrolls.filter((payroll) => payroll.status === 'pending').length;

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600"><Banknote className="h-5 w-5 text-white" /></div>
            <div><h1 className="text-lg font-bold text-white">Paie professeurs</h1><p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Gestion salariale</p></div>
          </div>
          <a href="/admin" className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#0f1115] px-4 py-2 text-sm text-gray-200 hover:border-gray-600"><ArrowLeft size={16} /> Retour admin</a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {params.created === '1' && <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">La fiche de paie a été créée avec succès.</div>}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">Ressources humaines</p><h2 className="text-3xl font-black text-white">Paie du mois</h2></div>
          <a href="/admin/paie/nouveau" className="rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400">Préparer la paie</a>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-4">
          <Metric icon={<Users size={16} />} label="Professeurs" value={payrolls.length} />
          <Metric icon={<Clock3 size={16} />} label="Heures déclarées" value={totalHours} />
          <Metric icon={<Banknote size={16} />} label="Net à payer" value={formatMoney(totalNet)} />
          <Metric icon={<Receipt size={16} />} label="À valider" value={pending} />
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#161920]">
          <div className="hidden grid-cols-[1.4fr_0.9fr_0.8fr_1fr_1fr_0.8fr] gap-4 border-b border-gray-800 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 lg:grid"><span>Professeur</span><span>Période</span><span>Heures</span><span>Brut</span><span>Net</span><span>Statut</span></div>
          <div className="divide-y divide-gray-800">
            {payrolls.map((payroll) => (
              <div key={payroll.id} className="grid gap-4 px-6 py-5 lg:grid-cols-[1.4fr_0.9fr_0.8fr_1fr_1fr_0.8fr] lg:items-center">
                <div><p className="font-semibold text-white">{payroll.teacher}</p><p className="mt-1 text-xs text-gray-500">Bonus : {formatMoney(payroll.bonus)} · Retenues : {formatMoney(payroll.deductions)}</p></div>
                <span className="text-sm text-gray-300">{payroll.month}</span>
                <span className="text-sm text-gray-300">{payroll.hours} h</span>
                <span className="text-sm text-gray-300">{formatMoney(payroll.gross)}</span>
                <span className="font-bold text-emerald-300">{formatMoney(payroll.net)}</span>
                <form action={updatePayrollStatus} className="flex items-center gap-2">
                  <input type="hidden" name="id" value={payroll.id} />
                  <select name="status" defaultValue={payroll.status} className="rounded-xl border border-gray-700 bg-[#0f1115] px-2 py-1 text-xs text-gray-200">
                    <option value="pending">À valider</option><option value="ready">Prête</option><option value="paid">Payée</option>
                  </select>
                  <button type="submit" className="rounded-xl bg-emerald-500 px-2 py-1 text-xs font-semibold text-white hover:bg-emerald-400">OK</button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return <div className="rounded-3xl border border-gray-800 bg-[#161920] p-6"><div className="mb-3 flex items-center justify-between text-gray-400"><span className="text-sm">{label}</span><span className="text-emerald-400">{icon}</span></div><p className="text-2xl font-extrabold text-white">{value}</p></div>;
}
