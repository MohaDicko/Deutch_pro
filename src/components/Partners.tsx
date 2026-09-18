export default function Partners({ dict }: { dict?: any }) {
  const partners = Array.isArray(dict?.list) ? dict.list : [];

  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4 block">
            {dict?.badge || 'Partenaires'}
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6">
            {dict?.title || 'Nos partenaires en Allemagne'}
          </h2>
          <p className="text-lg text-gray-600">
            {dict?.subtitle || 'Des structures fiables et engagées pour soutenir votre parcours en Allemagne.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner: any, index: number) => (
            <div
              key={`${partner.name}-${index}`}
              className="group rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white font-bold text-lg flex items-center justify-center shadow-md mb-5">
                {String(partner.name || 'P').slice(0, 2).toUpperCase()}
              </div>

              <h3 className="text-xl font-bold text-gray-900 font-outfit mb-2">
                {partner.name}
              </h3>

              <p className="text-sm font-medium text-red-600 mb-3">
                {partner.type}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {partner.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
