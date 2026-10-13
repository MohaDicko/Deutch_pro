'use client';

import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle, Sparkles } from 'lucide-react';

export default function Testimonials({ dict }: { dict: any }) {
  const testimonials = Array.isArray(dict?.testimonials?.list)
    ? dict.testimonials.list
    : dict?.testimonials
      ? [dict.testimonials]
      : [];

  return (
    <section id="temoignages" className="relative py-28 sm:py-36 bg-white overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/70 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-800 font-display"
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>Retours d'Apprenants</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-[-0.035em] text-slate-950 mb-6"
          >
            {dict?.testimonials?.title || 'Ce que disent nos étudiants'}
          </motion.h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Des parcours concrets, de la découverte de la langue allemande jusqu’à l’obtention du visa et l'installation en Allemagne.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {testimonials.map((testimonial: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-8 sm:p-10 rounded-[2.2rem] shadow-[0_15px_40px_-15px_rgba(15,23,42,0.06)] border border-slate-200/80 hover:-translate-y-2 hover:shadow-[0_25px_60px_-12px_rgba(15,23,42,0.12)] hover:border-slate-300 transition-all duration-400 relative group flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 w-16 h-16 group-hover:text-red-50 transition-colors" />
              
              <div>
                {/* 5 Golden Stars */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10">
                  {testimonial.quote ? `“${testimonial.quote.replace(/^"|"$/g, '')}”` : '“Merci pour votre confiance.”'}
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white font-display font-extrabold text-lg shadow-md shadow-red-500/20">
                  {(testimonial.author || 'A').charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-slate-900 text-base flex items-center gap-1.5">
                    {testimonial.author || 'Étudiant'}
                    <CheckCircle size={14} className="text-emerald-500" />
                  </div>
                  <div className="text-xs text-red-600 font-bold uppercase tracking-wider font-display">
                    {testimonial.role || 'Apprenant'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
