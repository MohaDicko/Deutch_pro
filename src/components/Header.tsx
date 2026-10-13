'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Header({ dict, lang }: { dict: any, lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'accueil', label: dict.nav.accueil },
    { key: 'services', label: dict.nav.services },
    { key: 'campus', label: lang === 'de' ? 'Campus & Fotos' : 'Campus & Photos' },
    { key: 'niveaux', label: dict.nav.niveaux },
    { key: 'temoignages', label: dict.nav.temoignages }
  ];

  const languages = [
    { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'zh', flag: '🇨🇳', label: '中文' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Official Government & Bilateral Cooperation Banner */}
      <div className={`w-full bg-[#070b14] text-slate-300 text-[11px] border-b border-white/10 transition-all duration-300 ${isScrolled ? 'hidden' : 'hidden sm:block py-1.5'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold text-white font-display">
              <span>🇲🇱</span>
              <span className="text-slate-500">•</span>
              <span>🇩🇪</span>
              <span className="tracking-wide">
                {lang === 'de' 
                  ? 'Republik Mali — Bildungskooperation Deutschland' 
                  : 'République du Mali — Coopération Éducative Allemagne'}
              </span>
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-medium">
              {lang === 'de' 
                ? 'Anerkanntes deutsches Sprachzentrum • GER A1 bis B2' 
                : 'Centre Agréé de Langue Allemande • CECRL A1 à B2'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-amber-300 font-display flex items-center gap-1">
              <span>🏛️</span>
              <span>
                {lang === 'de' 
                  ? 'Offizielle Goethe-Zertifikat Vorbereitung' 
                  : 'Préparation Officielle Goethe-Zertifikat'}
              </span>
            </span>
            <span className="text-slate-600">|</span>
            <a href="tel:+22379875654" className="text-slate-300 hover:text-white transition-colors">
              📞 +223 79 87 56 54
            </a>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? 'pt-2 pb-2' : 'pt-3 pb-2'}`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            className={`flex items-center justify-between transition-all duration-500 rounded-3xl ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.12)] px-4 sm:px-6 py-2.5'
                : 'bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] px-4 sm:px-6 py-3'
            }`}
          >
          {/* Logo Brand Emblem */}
          <motion.a
            href="#accueil"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-[2px] shadow-md shadow-slate-900/10 transition-transform duration-300 group-hover:scale-105">
              {/* Micro German Flag Accent Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-950 via-red-600 to-amber-400 opacity-80" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 text-white font-display font-black text-xl">
                <span>D</span>
                <span className="text-red-500 text-xs self-start -ml-0.5 mt-1 font-bold">P</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                Deutsch Pro
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
                Bamako • Deutschland
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                href={`#${item.key}`}
                className="relative px-3.5 py-2 text-[13px] font-semibold tracking-wide text-slate-600 transition-all duration-200 hover:text-red-600 rounded-full hover:bg-red-50/70"
              >
                {item.label}
              </motion.a>
            ))}

            <div className="h-4 w-px bg-slate-200 mx-2" />

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all duration-200 hover:border-red-300 hover:text-red-600 hover:shadow"
                aria-expanded={langMenuOpen}
                aria-label="Sélectionner la langue"
              >
                <Globe size={14} className="text-red-600" />
                <span className="uppercase tracking-wider">{lang}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2.5 w-40 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-1.5 shadow-[0_20px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl"
                  >
                    {languages.map((l) => (
                      <Link
                        key={l.code}
                        href={`/${l.code}`}
                        onClick={() => setLangMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                          lang === l.code
                            ? 'bg-red-50 font-bold text-red-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{l.flag}</span>
                          <span>{l.label}</span>
                        </span>
                        <span className="uppercase text-[10px] tracking-wider text-slate-400 font-bold">{l.code}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Contact CTA */}
            <motion.a
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              href="#contact"
              className="group relative ml-2 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-300 animate-pulse" />
                {dict.contactBtn}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700"
                aria-label="Langues"
              >
                <Globe size={14} className="text-red-600" />
                <span className="uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-xl backdrop-blur-xl"
                  >
                    {languages.map((l) => (
                      <Link
                        key={l.code}
                        href={`/${l.code}`}
                        onClick={() => setLangMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-xs rounded-xl ${
                          lang === l.code ? 'bg-red-50 font-bold text-red-600' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-4 pt-2 md:hidden"
          >
            <div className="container mx-auto max-w-7xl rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25"
                  >
                    <Sparkles size={16} className="text-amber-300" />
                    {dict.contactBtn}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

