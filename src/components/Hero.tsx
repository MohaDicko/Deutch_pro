'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Video, BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

export default function Hero({ dict }: { dict: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  return (
    <section id="accueil" className="relative pt-28 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.12),transparent_30%),linear-gradient(135deg,#fff8f8_0%,#ffffff_40%,#f5f7fb_100%)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute top-40 left-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/80 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              {dict.badge}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-900 md:text-6xl lg:text-7xl"
            >
              {dict.title1}
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-900 bg-clip-text text-transparent">
                {dict.title2}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl"
            >
              {dict.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-200"
              >
                {dict.ctaStart}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#entreprises"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
              >
                {dict.ctaB2B}
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid max-w-xl grid-cols-1 gap-3 rounded-[1.6rem] border border-gray-200 bg-white/70 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:grid-cols-3 sm:gap-4 sm:p-4"
            >
              <div className="rounded-2xl bg-red-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-red-600">
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-gray-900">Pratique</span>
                </div>
                <div className="text-xs text-gray-600">{dict.stats.students}</div>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-blue-600">
                  <BookOpen size={18} />
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-gray-900">A1-B2</span>
                </div>
                <div className="text-xs text-gray-600">{dict.stats.levels}</div>
              </div>

              <div className="rounded-2xl bg-amber-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-amber-600">
                  <BriefcaseBusiness size={18} />
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-gray-900">emploi</span>
                </div>
                <div className="text-xs text-gray-600">{dict.stats.success}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 -translate-y-3 rotate-3 rounded-[2.5rem] bg-gradient-to-tr from-red-500/20 to-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <div className="relative h-[620px] w-full">
                <Image
                  src="/images/formation/cours-en-salle.jpeg"
                  alt="Étudiants apprenant l'allemand"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-white/10" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -left-10 bottom-8 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Video size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">{dict.certBadge.title}</p>
                  <p className="font-bold text-gray-900">{dict.certBadge.subtitle}</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -right-4 top-10 rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500">Format</p>
                  <p className="text-sm font-bold text-gray-900">A1 → B2</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
