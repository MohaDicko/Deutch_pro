'use client';
import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Cours d'Allemand",
    description: "Apprentissage intensif et régulier (A1, A2, B1, B2). Méthode immersive et professeurs qualifiés pour une progression rapide.",
    icon: BookOpen,
    color: "from-red-500 to-red-600",
    bg: "bg-red-50"
  },
  {
    title: "Accompagnement Visa",
    description: "Assistance complète pour vos démarches administratives, de la constitution du dossier jusqu'à l'obtention du visa.",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Orientation Ausbildung",
    description: "Conseils et placement pour les formations professionnelles (Ausbildung) en Allemagne. Aide à la recherche d'entreprise.",
    icon: GraduationCap,
    color: "from-green-500 to-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Intégration",
    description: "Préparation interculturelle et accompagnement lors de vos premiers mois en Allemagne pour une intégration réussie.",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4 block"
          >
            Nos Domaines d'Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6"
          >
            Nous vous accompagnons de A à Z
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Plus qu'une école de langue, nous sommes votre partenaire de confiance pour concrétiser votre projet de vie en Allemagne.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-br ${service.color} text-transparent bg-clip-text`}>
                    <Icon size={32} className="stroke-[url(#gradient)] text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-outfit">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
