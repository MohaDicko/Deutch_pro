'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
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
    { key: 'niveaux', label: dict.nav.niveaux },
    { key: 'temoignages', label: dict.nav.temoignages }
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200/80 bg-white/80 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-200/60">
            <span className="text-lg font-black text-white">D</span>
          </div>
          <span className="hidden font-outfit text-2xl font-black tracking-tight text-gray-900 sm:inline">
            Deutsch Pro
          </span>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item.key}`}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-600 transition-colors hover:text-red-600"
            >
              {item.label}
            </motion.a>
          ))}

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-red-200 hover:text-red-700"
            >
              <Globe size={16} />
              <span className="uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
                >
                  <Link href="/de" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'de' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇩🇪 DE</Link>
                  <Link href="/fr" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'fr' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇫🇷 FR</Link>
                  <Link href="/en" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'en' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇬🇧 EN</Link>
                  <Link href="/es" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'es' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇪🇸 ES</Link>
                  <Link href="/zh" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'zh' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇨🇳 ZH</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="#contact"
            className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg hover:shadow-red-200"
          >
            {dict.contactBtn}
          </motion.a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-2.5 py-2 text-sm font-medium text-gray-700"
            >
              <Globe size={16} />
              <span className="uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl"
                >
                  <Link href="/de" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'de' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇩🇪 DE</Link>
                  <Link href="/fr" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'fr' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇫🇷 FR</Link>
                  <Link href="/en" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'en' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇬🇧 EN</Link>
                  <Link href="/es" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'es' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇪🇸 ES</Link>
                  <Link href="/zh" className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'zh' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇨🇳 ZH</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="rounded-full border border-gray-200 bg-white/80 p-2 text-gray-900 shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white/90 md:hidden backdrop-blur-sm"
          >
            <div className="container mx-auto flex flex-col space-y-4 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-700 transition hover:text-red-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white"
              >
                {dict.contactBtn}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

