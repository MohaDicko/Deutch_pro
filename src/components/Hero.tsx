'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="accueil" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              L'Excellence Allemande à Bamako
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-outfit font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Ouvrez les portes de l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Allemagne</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Apprenez l'allemand avec des professeurs certifiés. Préparez vos examens Goethe et construisez votre avenir académique ou professionnel.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-200/50 hover:shadow-xl hover:shadow-red-200 hover:-translate-y-0.5">
                Commencer maintenant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#entreprises" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all hover:shadow-md">
                💼 Pour les entreprises
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                  <Users className="text-red-500" size={20} />
                  <span className="text-2xl">500+</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">Étudiants formés</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                  <BookOpen className="text-red-500" size={20} />
                  <span className="text-2xl">A1-B2</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">Niveaux couverts</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-2xl">98%</span>
                </div>
                <div className="text-sm text-gray-500 font-medium">Taux de réussite</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent opacity-10 rounded-[2.5rem] transform rotate-3 scale-105"></div>
            <div className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/hero-image.png" 
                alt="Étudiants apprenant l'allemand" 
                fill
                className="object-cover" 
                priority
              />
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-10 bottom-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Certifications</p>
                <p className="font-bold text-gray-900">Goethe-Zertifikat</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
