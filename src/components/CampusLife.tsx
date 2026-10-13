'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Users, BookOpen, Sparkles, CheckCircle2, Headphones, Layers, FileCheck } from 'lucide-react';

const PHOTOS = [
  {
    src: '/images/formation/cours-en-salle.jpeg',
    title: 'Enseignement Magistral & Méthode CECRL',
    category: 'Cours Magistral',
    tag: 'Accrédité A1-B2',
    description: 'Cours structuré dispensé par nos enseignants expérimentés, articulé autour des 4 compétences fondamentales : écouter, lire, écrire et parler.',
    metric: '100% Conforme Goethe'
  },
  {
    src: '/images/formation/etudiants-salle-de-classe.jpeg',
    title: 'Salle Multimédia & Travaux Interactifs',
    category: 'Salles Multimédia',
    tag: 'Haute Technologie',
    description: 'Espace d’apprentissage climatisé équipé de systèmes audio-visuels haute fidélité pour une assimilation optimale de la phonétique et des dialogues réels.',
    metric: 'Supports Audio Certifiés'
  },
  {
    src: '/images/formation/etudiante-concentree.jpeg',
    title: 'Rigueur Méthodique & Suivi Individuel',
    category: 'Étude Dirigée',
    tag: 'Excellence Académique',
    description: 'Encadrement personnalisé avec exercices ciblés pour consolider la grammaire, la syntaxe allemande et la rédaction d’écrits formels.',
    metric: 'Progression Individualisée'
  },
  {
    src: '/images/formation/revision-groupe-maison.jpeg',
    title: 'Groupes de Travail & Entraînement Oral',
    category: 'Binômes de Révision',
    tag: 'Entraide & Pratique',
    description: 'Simulations d’examens en binômes et entraînements réguliers aux épreuves orales (Sprechen) pour développer l’aisance et la rapidité de réponse.',
    metric: 'Simulations Réelles'
  },
  {
    src: '/images/formation/travail-groupe-exterieur.jpeg',
    title: 'Ateliers Conversationnels & Immersion',
    category: 'Pratique Orale',
    tag: 'Désinhibition Linguistique',
    description: 'Séances d’expression libre et ateliers thématiques sur la culture et le quotidien en Allemagne pour préparer une intégration harmonieuse.',
    metric: 'Immersion Réelle'
  }
];

const GUARANTEES = [
  {
    icon: Users,
    title: 'Effectifs Limités',
    subtitle: '12 à 15 apprenants max par classe',
    desc: 'Un taux d’encadrement garanti pour que chaque étudiant participe activement et reçoive des corrections détaillées.'
  },
  {
    icon: Headphones,
    title: 'Audio Conforme Goethe',
    subtitle: 'Équipement haute fidélité',
    desc: 'Matériel audio étalonné sur les conditions réelles d’examen pour s’entraîner fidèlement aux épreuves de Hören.'
  },
  {
    icon: BookOpen,
    title: 'Manuels Homologués',
    subtitle: 'Éditions allemandes officielles',
    desc: 'Utilisation exclusive des manuels de référence (Hueber, Klett, Cornelsen) validés par les instituts européens.'
  },
  {
    icon: FileCheck,
    title: 'Suivi & Traçabilité',
    subtitle: 'Portail pédagogique numérique',
    desc: 'Émargement régulier, relevés de notes transparents et attestations vérifiables pour les dossiers consulaires.'
  }
];

export default function CampusLife({ lang = 'fr' }: { lang?: string }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: lang === 'de' ? 'Alle Fotos' : 'Tous nos espaces' },
    { id: 'Cours Magistral', label: lang === 'de' ? 'Unterricht' : 'Cours magistral' },
    { id: 'Salles Multimédia', label: lang === 'de' ? 'Multimediaräume' : 'Salles multimédia' },
    { id: 'Étude Dirigée', label: lang === 'de' ? 'Individuelles Lernen' : 'Étude individuelle' },
    { id: 'Binômes de Révision', label: lang === 'de' ? 'Prüfungsvorbereitung' : 'Révisions dirigées' },
    { id: 'Pratique Orale', label: lang === 'de' ? 'Sprachpraxis' : 'Pratique orale' }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === activeFilter);

  return (
    <section id="campus" className="relative py-28 sm:py-36 bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      {/* Background Institutional Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 shadow-xs font-display">
            <ShieldCheck size={14} className="text-red-600" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-800">
              {lang === 'de' ? 'Campus & Pädagogische Praxis' : 'Infrastructure & Vie du Centre'}
            </span>
            <div className="flex items-center gap-0.5 ml-1">
              <span className="w-1.5 h-3 bg-slate-950 inline-block rounded-xs" />
              <span className="w-1.5 h-3 bg-red-600 inline-block rounded-xs" />
              <span className="w-1.5 h-3 bg-amber-400 inline-block rounded-xs" />
            </div>
          </div>

          <h2 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950">
            {lang === 'de' 
              ? 'Die Realität unserer Ausbildung vor Ort'
              : 'La réalité de notre formation sur le terrain'}
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === 'de'
              ? 'Moderne Räumlichkeiten, zertifizierte Lehrmittel und strukturierte Prüfungsvorbereitung am Deutsch Pro Campus in Bamako.'
              : 'Des salles équipées, du matériel audio-visuel officiel et un encadrement rigoureux à Bamako pour garantir votre succès aux examens officiels et votre intégration en Allemagne.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 font-display ${
                activeFilter === c.id
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-[2.2rem] border border-slate-200/90 bg-white shadow-[0_12px_40px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_50px_-10px_rgba(15,23,42,0.15)] transition-all duration-400 flex flex-col justify-between"
              >
                {/* Photo Frame */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Overlaid Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold text-slate-900 shadow-sm backdrop-blur-md font-display">
                      {photo.tag}
                    </span>
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md font-display">
                      {photo.metric}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 font-display block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {photo.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 size={15} />
                      <span className="font-display">Conforme aux standards d'examen</span>
                    </div>
                    <span className="text-slate-400 font-display">Campus Bamako</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Institutional Guarantees Strip */}
        <div className="rounded-[2.5rem] border border-slate-200/90 bg-white p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.07)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-red-600 font-display block mb-2">
              Charte Pédagogique Officielle
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
              4 Garanties Académiques & Consistantes
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map((g, i) => {
              const Icon = g.icon;
              return (
                <div 
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-md mb-4">
                    <Icon size={22} className="text-amber-400" />
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-950 mb-1">
                    {g.title}
                  </h4>
                  <p className="text-xs font-bold text-red-600 font-display mb-2">
                    {g.subtitle}
                  </p>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
