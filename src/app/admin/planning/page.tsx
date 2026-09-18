import { ArrowLeft, CalendarDays, Clock3, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

const timetable = [
  {
    day: 'Lundi',
    slots: [
      { label: '08:00 - 10:00', group: 'A1 - Groupe 1', teacher: 'Mamadou', room: 'Salle 02' },
      { label: '18:00 - 20:00', group: 'B1 - Intensif', teacher: 'Anne', room: 'Salle 04' },
    ],
  },
  {
    day: 'Mardi',
    slots: [
      { label: '12:00 - 14:00', group: 'A2 - Conversation', teacher: 'Zeinab', room: 'Salle 03' },
      { label: '17:30 - 19:30', group: 'B2 - Prépa examen', teacher: 'Anne', room: 'Salle 01' },
    ],
  },
  {
    day: 'Mercredi',
    slots: [
      { label: '09:00 - 11:00', group: 'A1 - Groupe 2', teacher: 'Mamadou', room: 'Salle 02' },
      { label: '17:00 - 19:00', group: 'B1 - Oral', teacher: 'Zeinab', room: 'Salle 04' },
    ],
  },
  {
    day: 'Jeudi',
    slots: [
      { label: '18:00 - 20:00', group: 'A2 - Grammaire', teacher: 'Mamadou', room: 'Salle 03' },
      { label: '19:00 - 21:00', group: 'B2 - TestDaF', teacher: 'Anne', room: 'Salle 01' },
    ],
  },
  {
    day: 'Vendredi',
    slots: [
      { label: '10:00 - 12:00', group: 'A1 - Débutants', teacher: 'Zeinab', room: 'Salle 02' },
    ],
  },
];

export default async function PlanningPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#161920]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <CalendarDays className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Planning des cours</h1>
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
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">Organisation</p>
            <h2 className="text-3xl font-black text-white">Planning pédagogique</h2>
          </div>
          <Link href="/admin/planning/nouveau" className="rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cyan-400">
            Ajouter un créneau
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {timetable.map((day) => (
            <div key={day.day} className="rounded-3xl border border-gray-800 bg-[#161920] p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{day.day}</h3>
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase text-cyan-300">
                  {day.slots.length} créneaux
                </span>
              </div>

              <div className="space-y-3">
                {day.slots.map((slot) => (
                  <div key={`${day.day}-${slot.label}`} className="rounded-2xl border border-gray-800 bg-[#0f1115] p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                      <Clock3 size={14} />
                      <span className="text-sm font-semibold">{slot.label}</span>
                    </div>

                    <p className="mb-2 font-semibold text-white">{slot.group}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users size={14} className="text-emerald-400" />
                      <span>{slot.teacher}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                      <MapPin size={14} className="text-amber-400" />
                      <span>{slot.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
