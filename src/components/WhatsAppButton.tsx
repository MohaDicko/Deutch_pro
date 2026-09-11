'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton({ phoneNumber = "+22370000000" }: { phoneNumber?: string }) {
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
          className="fixed bottom-6 right-6 z-50 flex items-end justify-end flex-col gap-4"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div 
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="bg-white px-4 py-3 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 flex items-center gap-3 relative mr-2"
              >
                <div className="text-sm font-medium text-gray-700">
                  Besoin d'aide ? <br />
                  <span className="text-green-600 font-bold">Discutons sur WhatsApp</span>
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); setShowTooltip(false); }}
                  className="text-gray-400 hover:text-gray-600 p-1 bg-gray-50 rounded-full"
                >
                  <X size={14} />
                </button>
                {/* Arrow pointing right */}
                <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-white border-r border-b border-gray-100 transform -rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            className="w-16 h-16 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all duration-300 group"
          >
            <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
