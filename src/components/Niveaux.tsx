'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle2, Award, ArrowRight, Sparkles } from 'lucide-react';

const niveauxBase = [
  {
    level: 'A1',
    icon: Target,
    badgeColor: 'from-slate-900 to-slate-800',
    accentColor: 'text-slate-900',
    subTag: 'Découverte • Bases',
    goal: 'Regroupement & Initiation'
  },
  {
    level: 'A2',
    icon: TrendingUp,
    badgeColor: 'from-blue-600 to-cyan-600',
    accentColor: 'text-blue-600',
    subTag: 'Usuel • Consolidation',
    goal: 'Communication quotidienne'
  },
  {
    level: 'B1',
    icon: CheckCircle2,
    badgeColor: 'from-red-600 to-rose-600',
    accentColor: 'text-red-600',
    subTag: 'Seuil • Autonomie',
    goal: 'Ausbildung & Visa Travail'
  },
  {
    level: 'B2',
    icon: Award,
    badgeColor: 'from-amber-500 to-amber-600',
    accentColor: 'text-amber-600',
    subTag: 'Maîtrise Professionnelle',
    goal: 'Universités & Santé / Soins'
  }
];

export default function Niveaux({ dict }: { dict: any }) {
  return (
    <section id="niveaux" className="relative overflow-hidden bg-[#fafbfe] py-28 sm:py-36">
      {/* Subtle Mesh & Radiance */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-10 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-red-600 shadow-xs font-display"
          >
            <Sparkles size={13} className="text-amber-500" />
            {dict.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950"
          >
            {dict.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        {/* Pathway Visual Progress Banner */}
        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-10 px-8 py-3 rounded-full bg-white/80 border border-slate-200/70 shadow-sm backdrop-blur-md">
          {niveauxBase.map((n, i) => (
            <div key={`step-${n.level}`} className="flex items-center gap-3">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${n.badgeColor} text-white font-display text-xs font-bold`}>
                {n.level}
              </span>
              <span className="text-xs font-bold text-slate-700 font-display">{n.goal}</span>
              {i < niveauxBase.length - 1 && (
                <ArrowRight size={14} className="text-slate-300 ml-4" />
              )}
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {niveauxBase.map((n, idx) => {
            const Icon = n.icon;
            const levelData = dict[n.level];

            return (
              <motion.div
                key={n.level}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] transition-all duration-400 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12)]"
              >
                {/* Background Ambient Corner Watermark */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[100px] bg-gradient-to-br from-slate-50 to-white transition-transform duration-500 group-hover:scale-110" />

                <div className="relative z-10">
                  {/* Top Level Identification */}
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <span className={`font-display text-5xl font-black tracking-tight ${
                        n.level === 'B1' ? 'text-red-600' : n.level === 'B2' ? 'text-amber-500' : 'text-slate-900'
                      }`}>
                        {n.level}
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display mt-0.5">
                        {n.subTag}
                      </p>
                    </div>

                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${n.badgeColor} text-white shadow-md transition-transform duration-300 group-hover:rotate-6`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                    {levelData.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-slate-600">
                    {levelData.desc}
                  </p>
                </div>

                {/* Bottom Goal Highlight */}
                <div className="relative z-10 mt-8 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="text-[11px] uppercase tracking-wider text-slate-600 font-display">Objectif :</span>
                    <span className="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] text-slate-800 font-display">
                      {n.goal}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

