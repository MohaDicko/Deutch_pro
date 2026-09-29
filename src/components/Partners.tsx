import Image from 'next/image';

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
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4 block">
            {dict?.badge || 'Partenaires & Équipe'}
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6">
            {dict?.title || 'Notre équipe en Allemagne'}
          </h2>
          <p className="text-lg text-gray-600">
            {dict?.subtitle || 'Des structures fiables et engagées pour soutenir votre parcours en Allemagne.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PARTNERS_LIST.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white font-bold text-2xl flex items-center justify-center shadow-md mb-5 overflow-hidden relative">
                {partner.image ? (
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  String(partner.name || 'P').slice(0, 2).toUpperCase()
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 font-outfit mb-1">
                {partner.name}
              </h3>

              <p className="text-sm font-medium text-red-600 mb-3">
                {partner.role} • {partner.city}
              </p>

              {partner.phone && (
                <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                  <span>📞</span> {partner.phone}
                </p>
              )}
              
              <a href={`mailto:${partner.email}`} className="text-sm text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2">
                <span>✉️</span> {partner.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
