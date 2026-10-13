import Image from 'next/image';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const PARTNERS_LIST = [
  {
    name: "Tamou Traoré",
    role: "Directeur",
    city: "Allemagne",
    phone: "",
    email: "tamou.traore@deutschprobko.com",
    image: null
  },
  {
    name: "Malick Sissoko",
    role: "Partenaire",
    city: "München",
    phone: "0176 20842001",
    email: "malick.sissoko@deutschprobko.com",
    image: "/images/partenaires en allemagne/Malick Sissoko.jpeg"
  },
  {
    name: "Fatou Traoré",
    role: "Partenaire",
    city: "Simmern",
    phone: "+49 1573 9893151",
    email: "fatou.traore@deutschprobko.com",
    image: "/images/partenaires en allemagne/Fatou Traoré.jpeg"
  },
  {
    name: "Lassana Traoré",
    role: "Partenaire",
    city: "Bielefeld",
    phone: "+49 1573 9893151",
    email: "lassana.traore@deutschprobko.com",
    image: "/images/partenaires en allemagne/Lassana Traoré.jpeg"
  },
  {
    name: "Amadou Doumbia",
    role: "Partenaire",
    city: "Braunschweig",
    phone: "+49 1521 2473580",
    email: "amadou.doumbia@deutschprobko.com",
    image: "/images/partenaires en allemagne/Amadou Doumbia.jpeg"
  },
  {
    name: "Mahamadou S. Kayo",
    role: "Partenaire",
    city: "München",
    phone: "0176 20841858",
    email: "mahamadou.kayo@deutschprobko.com",
    image: "/images/partenaires en allemagne/Mahamadou Kayo.jpeg"
  }
];

export default function Partners({ dict }: { dict?: any }) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#fafbfe] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-red-600 shadow-xs font-display">
            <Sparkles size={13} className="text-amber-500" />
            <span>{dict?.badge || 'Partenaires & Équipe'}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-[-0.035em] text-slate-950 mb-6">
            {dict?.title || 'Notre équipe en Allemagne'}
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {dict?.subtitle || 'Des structures fiables et engagées pour soutenir votre parcours en Allemagne.'}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {PARTNERS_LIST.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group rounded-[2.2rem] border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12)] hover:-translate-y-2 hover:border-slate-300 transition-all duration-400 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Top City Badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-100 font-display">
                <MapPin size={12} className="text-red-500" />
                <span>🇩🇪 {partner.city}</span>
              </div>

              {/* Portrait Container */}
              <div className="w-28 h-28 rounded-full ring-4 ring-slate-100 group-hover:ring-red-100 transition-all duration-300 shadow-lg mb-5 overflow-hidden relative bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white font-display font-black text-2xl flex items-center justify-center">
                {partner.image ? (
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    sizes="(max-width: 768px) 112px, 120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span>{String(partner.name || 'P').slice(0, 2).toUpperCase()}</span>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-slate-900 font-display mb-1 group-hover:text-red-600 transition-colors">
                {partner.name}
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-6 font-display">
                {partner.role} • {partner.city}
              </p>

              {/* Contact Information */}
              <div className="w-full pt-5 border-t border-slate-100 flex flex-col gap-2.5 text-xs">
                {partner.phone && (
                  <a
                    href={`tel:${partner.phone}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 px-4 font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Phone size={13} className="text-slate-400" />
                    <span>{partner.phone}</span>
                  </a>
                )}
                
                <a
                  href={`mailto:${partner.email}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 px-4 font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors truncate"
                >
                  <Mail size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate">{partner.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
