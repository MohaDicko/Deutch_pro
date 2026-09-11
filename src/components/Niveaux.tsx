'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const niveauxBase = [
  { level: "A1", icon: Target },
  { level: "A2", icon: TrendingUp },
  { level: "B1", icon: CheckCircle2 },
  { level: "B2", icon: Award },
];

export default function Niveaux({ dict }: { dict: any }) {
  return (
    <section id="niveaux" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4 block"
          >
            {dict.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {niveauxBase.map((n, idx) => {
            const Icon = n.icon;
            return (
              <motion.div 
                key={n.level}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-gray-200 border border-gray-100 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-[100px] -z-0 group-hover:scale-110 transition-transform origin-top-right"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-400">{n.level}</span>
                    <Icon size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dict[n.level].title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{dict[n.level].desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
