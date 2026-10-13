'use client';
import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    color: 'from-red-500 to-rose-600',
    shadowColor: 'shadow-red-500/20',
    bg: 'bg-red-50',
    tag: 'A1 → B2 Complet'
  },
  {
    icon: Briefcase,
    color: 'from-amber-500 to-amber-600',
    shadowColor: 'shadow-amber-500/20',
    bg: 'bg-amber-50',
    tag: '100% Goethe'
  },
  {
    icon: GraduationCap,
    color: 'from-blue-600 to-indigo-600',
    shadowColor: 'shadow-blue-500/20',
    bg: 'bg-blue-50',
    tag: 'Carrière & Emploi'
  },
  {
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
    bg: 'bg-emerald-50',
    tag: 'Visa & Insertion'
  }
];

export default function Services({ dict }: { dict: any }) {
  const serviceKeys = ['coursIntensifs', 'preparation', 'pro', 'integration'];

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-white overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafbfe] to-transparent" />
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/70 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-red-700 font-display"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
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
            className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceKeys.map((key, index) => {
            const meta = services[index];
            const Icon = meta.icon;
            const cardData = dict.cards[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] transition-all duration-400 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12)]"
              >
                {/* Background Ambient Glow on Hover */}
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${meta.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15`} />

                <div className="relative z-10">
                  {/* Top Bar with Icon and Tag */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.color} text-white shadow-lg ${meta.shadowColor} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-600 font-display">
                      {meta.tag}
                    </span>
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors duration-200">
                    {cardData.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-slate-600">
                    {cardData.desc}
                  </p>
                </div>

                {/* Bottom Micro Action */}
                <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="font-display">Programme certifié</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
