'use client';
import { motion } from 'framer-motion';
import { Target, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const niveaux = [
  { level: "A1", title: "Débutant", desc: "Comprendre et utiliser des expressions familières.", icon: Target },
  { level: "A2", title: "Élémentaire", desc: "Communiquer lors de tâches simples et habituelles.", icon: TrendingUp },
  { level: "B1", title: "Intermédiaire", desc: "Se débrouiller dans la plupart des situations en voyage.", icon: CheckCircle2 },
  { level: "B2", title: "Avancé", desc: "Comprendre le contenu essentiel de sujets concrets ou abstraits.", icon: Award },
];

export default function Niveaux() {
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
            Progression
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6"
          >
            Du premier mot jusqu'à la fluidité
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Notre programme suit le Cadre Européen Commun de Référence pour les Langues (CECRL) pour garantir votre niveau.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {niveaux.map((n, idx) => {
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{n.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
