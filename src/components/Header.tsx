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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className={`font-outfit font-bold text-2xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            Deutsch Pro
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a 
              key={item.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item.key}`} 
              className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {item.label}
            </motion.a>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-gray-600 hover:text-red-600 font-medium"
            >
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                >
                  <Link href={`/de`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'de' ? 'font-bold text-red-600' : 'text-gray-700'}`}>
                    🇩🇪 DE
                  </Link>
                  <Link href={`/fr`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'fr' ? 'font-bold text-red-600' : 'text-gray-700'}`}>
                    🇫🇷 FR
                  </Link>
                  <Link href={`/en`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'en' ? 'font-bold text-red-600' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href={`/es`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'es' ? 'font-bold text-red-600' : 'text-gray-700'}`}>
                    🇪🇸 ES
                  </Link>
                  <Link href={`/zh`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'zh' ? 'font-bold text-red-600' : 'text-gray-700'}`}>
                    🇨🇳 ZH
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="#contact" 
            className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
          >
            {dict.contactBtn}
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="text-gray-600 font-medium flex items-center gap-1"
            >
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                  <Link href={`/de`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'de' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇩🇪 DE</Link>
                  <Link href={`/fr`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'fr' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇫🇷 FR</Link>
                  <Link href={`/en`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'en' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇬🇧 EN</Link>
                  <Link href={`/es`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'es' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇪🇸 ES</Link>
                  <Link href={`/zh`} className={`block px-4 py-2 text-sm hover:bg-gray-50 ${lang === 'zh' ? 'font-bold text-red-600' : 'text-gray-700'}`}>🇨🇳 ZH</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button 
            className="text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.key}
                  href={`#${item.key}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-red-600 font-medium text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-red-600 text-white text-center rounded-lg font-medium mt-4"
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
