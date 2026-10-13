'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton({ phoneNumber = "+22379875654" }: { phoneNumber?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show tooltip automatically after 3 seconds of being visible
    let tooltipTimer: NodeJS.Timeout;
    if (isVisible) {
      tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, [isVisible]);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-6 sm:bottom-10 sm:right-8 z-50 flex items-end justify-end flex-col gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div 
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.14)] border border-slate-200/80 flex items-center gap-3 relative mr-1"
              >
                <div className="text-xs font-medium text-slate-700">
                  <span>Besoin d'aide ?</span><br />
                  <span className="text-emerald-600 font-bold font-display">Discutons sur WhatsApp</span>
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); setShowTooltip(false); }}
                  className="text-slate-400 hover:text-slate-600 p-1 bg-slate-100 rounded-full transition-colors"
                  aria-label="Fermer"
                >
                  <X size={13} />
                </button>
                <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-white border-r border-b border-slate-200/80 transform -rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            aria-label="Contacter sur WhatsApp"
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
