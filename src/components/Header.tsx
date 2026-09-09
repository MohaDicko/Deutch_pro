export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="tel:+22379875654" className="hover:text-red-500 transition-colors">📞 +223 79 87 56 54</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="tel:+4917671997830" className="hidden md:inline hover:text-red-500 transition-colors">🇩🇪 Partner-Hotline DE: +49 176 719 978 30</a>
          </div>
          <a href="https://wa.me/22379875654" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors font-medium">WhatsApp</a>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#accueil" className="font-outfit font-black text-2xl leading-none tracking-tight">
          <span className="text-gray-900">DEUTSCH</span> <span className="text-gray-900">PRO</span><br />
          <span className="text-red-600 text-sm tracking-[0.2em] uppercase">— BAMAKO —</span>
        </a>
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <a href="#accueil" className="hover:text-red-600 transition-colors">Accueil</a>
          <a href="#entreprises" className="text-red-600 hover:text-red-700 transition-colors">Für Unternehmen</a>
          <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
          <a href="#niveaux" className="hover:text-red-600 transition-colors">Cours</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
