'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/formation/etudiante-concentree.jpeg',
    alt: 'Étudiante concentrée'
  },
  {
    src: '/images/formation/revision-groupe-maison.jpeg',
    alt: 'Révision en groupe à la maison'
  },
  {
    src: '/images/formation/etudiants-salle-de-classe.jpeg',
    alt: 'Étudiants en salle de classe'
  },
  {
    src: '/images/formation/travail-groupe-exterieur.jpeg',
    alt: 'Travail de groupe en extérieur'
  }
];

export default function Gallery({ dict }: { dict?: any }) {
  return (
    <section id="galerie" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6"
          >
            {dict?.title || 'Notre Centre de Formation'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {dict?.subtitle || 'Découvrez notre environnement d\'apprentissage et nos étudiants en action.'}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg group ${
                idx === 0 || idx === 3 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Optional caption on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-bold text-lg font-outfit drop-shadow-md">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
