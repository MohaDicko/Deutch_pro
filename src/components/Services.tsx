'use client';
import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Cours de langue de A1 à B2",
    description: 'Progression structurée avec un accompagnement pédagogique régulier, du matériel audio-visuel et des mises en situation concrètes.',
    icon: BookOpen,
    color: 'from-red-500 to-red-600',
    bg: 'bg-red-50'
  },
  {
    title: 'Préparation aux examens',
    description: 'Entraînement ciblé au Goethe, aux épreuves orales et écrites, avec correction personnalisée et simulations réalistes.',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Allemand professionnel',
    description: 'Vocabulaire utile au travail, aux entretiens, aux échanges professionnels et à la communication sur le terrain.',
    icon: GraduationCap,
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50'
  },
  {
    title: 'Visa et intégration',
    description: 'Accompagnement dans la préparation du projet, la démarche administrative et l’intégration sur le plan culturel et professionnel.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function Services({ dict }: { dict: any }) {
  const serviceKeys = ['coursIntensifs', 'preparation', 'pro', 'integration'];

  return (
    <section id="services" className="relative py-32 bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-50/80 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-red-600"
          >
            {dict.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-black tracking-[-0.05em] text-gray-900 md:text-5xl"
          >
            {dict.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const key = serviceKeys[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]`} />
                <div className="relative z-10">
                  <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg} shadow-inner`}>
                    <Icon size={30} className="text-red-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{dict.cards[key].title}</h3>
                  <p className="leading-relaxed text-gray-600">{dict.cards[key].desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
