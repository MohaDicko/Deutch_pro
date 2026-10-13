'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Video, BriefcaseBusiness, CheckCircle2, Award, Sparkles, Compass, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero({ dict }: { dict: any }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const heroPhotos = [
    { src: '/images/formation/etudiants-salle-de-classe.jpeg', title: 'Élèves sur les bancs de classe — Deutsch Pro' },
    { src: '/images/formation/cours-en-salle.jpeg', title: 'Cours magistral en salle' },
    { src: '/images/formation/etudiante-concentree.jpeg', title: 'Étude & rigueur individuelle' },
    { src: '/images/formation/revision-groupe-maison.jpeg', title: 'Binômes de révision intensive' },
    { src: '/images/formation/travail-groupe-exterieur.jpeg', title: 'Ateliers de conversation orale' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <section
      id="accueil"
      className="relative pt-36 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#fafbfe]"
    >
      {/* Ambient Lighting & Atmospheric Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Soft German Tricolor Atmospheric Bleeds */}
        <div className="absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-red-500/10 via-rose-500/5 to-transparent blur-3xl" />
        <div className="absolute top-48 -left-20 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-amber-400/10 via-amber-200/5 to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-slate-200/40 blur-3xl" />

        {/* Micro Technical Grid Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* German Flag Micro-Accent & Institutional Pill Badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white/95 px-4 py-2 shadow-xs backdrop-blur-md">
                {/* German Flag Micro Bars */}
                <div className="flex items-center gap-0.5 rounded-xs overflow-hidden shadow-2xs">
                  <span className="w-1.5 h-3.5 bg-slate-950 inline-block" />
                  <span className="w-1.5 h-3.5 bg-red-600 inline-block" />
                  <span className="w-1.5 h-3.5 bg-amber-400 inline-block" />
                </div>
                <div className="h-3 w-px bg-slate-200" />
                <span className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">
                  {dict.badge}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.98] text-slate-950"
            >
              <span>{dict.title1}</span>
              <span className="block mt-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-800 bg-clip-text text-transparent">
                {dict.title2}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-xl font-sans text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal"
            >
              {dict.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-4 sm:flex-row items-stretch sm:items-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2 font-display tracking-wide">
                  {dict.ctaStart}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="#campus"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-4 text-base font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 font-display"
              >
                <span>📸 Voir les 5 photos du campus</span>
              </a>

              <a
                href="#entreprises"
                className="inline-flex items-center justify-center text-xs font-bold text-slate-600 hover:text-red-600 transition-colors font-display sm:ml-2"
              >
                {dict.ctaB2B}
              </a>
            </motion.div>

            {/* Official Trust Markers Mini Bar */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-slate-900">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Norme Européenne CECRL A1-B2</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <Award size={16} className="text-amber-600" />
                <span>100% Goethe-Zertifikat Validé</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <Video size={16} className="text-blue-600" />
                <span>Matériel audio-visuel officiel</span>
              </span>
            </motion.div>

            {/* Glass Pillar Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-xl"
            >
              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-red-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Pratique
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-snug">{dict.stats.students}</p>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-amber-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <BookOpen size={16} />
                  </div>
                  <span className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    A1 → B2
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-snug">{dict.stats.levels}</p>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <BriefcaseBusiness size={16} />
                  </div>
                  <span className="font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Emploi
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-snug">{dict.stats.success}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Masterpiece with Multi-Photo Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative block mt-10 lg:mt-0"
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 -translate-y-4 translate-x-4 rounded-[3rem] bg-gradient-to-tr from-red-600/15 via-amber-400/10 to-slate-900/10 blur-2xl -z-10" />

            {/* Frame Container */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] sm:border-[10px] border-white bg-white shadow-[0_30px_90px_-20px_rgba(15,23,42,0.22)]">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroPhotos[activePhotoIdx].src}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={heroPhotos[activePhotoIdx].src}
                      alt={heroPhotos[activePhotoIdx].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid Bottom Title & Photo Switcher */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md mb-2">
                    <Sparkles size={12} className="text-amber-300" />
                    <span>{heroPhotos[activePhotoIdx].title}</span>
                  </div>

                  {/* Thumbnail Row to preview all photos */}
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                    {heroPhotos.map((p, i) => (
                      <button
                        key={p.src}
                        onClick={() => setActivePhotoIdx(i)}
                        className={`relative h-12 w-12 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                          activePhotoIdx === i 
                            ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/30' 
                            : 'border-white/40 opacity-70 hover:opacity-100 hover:border-white'
                        }`}
                        aria-label={`Afficher photo ${i + 1}`}
                      >
                        <Image src={p.src} alt={p.title} fill className="object-cover" sizes="48px" />
                      </button>
                    ))}
                    <a
                      href="#campus"
                      className="ml-auto text-[11px] font-bold text-white/90 hover:text-white flex items-center gap-1 font-display"
                    >
                      <span>Galerie</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Badge 1: Bottom Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="hidden sm:block absolute -left-4 lg:-left-8 bottom-20 lg:bottom-28 rounded-2xl border border-white/80 bg-white/95 p-3.5 lg:p-4 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl z-30"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20">
                  <Video size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {dict.certBadge.title}
                  </p>
                  <p className="font-display text-sm font-black text-slate-900">
                    {dict.certBadge.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Live Badge 2: Top Right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:block absolute -right-3 lg:-right-6 top-6 lg:top-8 rounded-2xl border border-white/80 bg-white/95 p-3 lg:p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl z-30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20">
                  <Award size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">Excellence</span>
                    <span className="text-xs">🇩🇪</span>
                  </div>
                  <p className="font-display text-sm font-extrabold text-slate-900">
                    Goethe-Zertifikat A1-B2
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
