import Image from 'next/image';

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-20 pb-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Cours d'Allemand au Mali
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-red-600">Rentrée</span><br />
            Des Cours D'Allemand
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Apprenez l'allemand avec des professionnels. Rejoignez-nous pour la prochaine session et préparez votre avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-center shadow-lg shadow-red-200">
              Nous Contacter
            </a>
            <a href="#entreprises" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center">
              🇩🇪 Pour Entreprises
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-500">Étudiants formés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-500">Niveaux A1→B2</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500">Satisfaits</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full h-[500px]">
          <Image 
            src="/hero-image.png" 
            alt="Étudiants" 
            fill
            className="rounded-2xl shadow-2xl object-cover" 
            priority
          />
        </div>
      </div>
    </section>
  );
}
