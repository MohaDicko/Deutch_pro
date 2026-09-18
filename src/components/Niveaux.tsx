'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const niveauxBase = [
  { level: 'A1', icon: Target },
  { level: 'A2', icon: TrendingUp },
  { level: 'B1', icon: CheckCircle2 },
  { level: 'B2', icon: Award }
];

export default function Niveaux({ dict }: { dict: any }) {
  return (
    <section id="niveaux" className="relative overflow-hidden bg-[linear-gradient(180deg,#fff7f7_0%,#ffffff_100%)] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.08),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block text-sm font-bold uppercase tracking-[0.22em] text-red-600"
          >
            {dict.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-black tracking-[-0.05em] text-gray-900 md:text-5xl"
          >
            {dict.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {niveauxBase.map((n, idx) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.level}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[100px] bg-gradient-to-br from-red-100 to-white transition-transform duration-500 group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="bg-gradient-to-br from-red-600 to-red-400 bg-clip-text text-5xl font-black text-transparent">
                      {n.level}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{dict[n.level].title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{dict[n.level].desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

