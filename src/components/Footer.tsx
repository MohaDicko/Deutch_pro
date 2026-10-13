export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="relative bg-[#070b14] pt-16 pb-12 text-slate-400 overflow-hidden border-t border-white/5">
      {/* German Tricolor Accent Ribbon at the very top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-slate-950 via-red-600 to-amber-400" />

      {/* Ambient background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Row */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand Logo & Presentation */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-[2px] shadow-lg shadow-black/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-950 via-red-600 to-amber-400 opacity-80" />
              <div className="relative flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 text-white font-display font-black text-xl">
                <span>D</span>
                <span className="text-red-500 text-xs self-start -ml-0.5 mt-1 font-bold">P</span>
              </div>
            </div>

            <div>
              <p className="font-display text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Deutsch Pro
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/20 font-bold uppercase tracking-wider">
                  Bamako
                </span>
              </p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">
                École de Langue Allemande • Préparation Goethe-Zertifikat A1 à B2
              </p>
            </div>
          </div>

          {/* Sitemaps & Quick Anchors */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-semibold text-slate-300 font-display">
            <a href="#accueil" className="transition-colors hover:text-white hover:underline underline-offset-4">Accueil</a>
            <a href="#services" className="transition-colors hover:text-white hover:underline underline-offset-4">Services</a>
            <a href="#niveaux" className="transition-colors hover:text-white hover:underline underline-offset-4">Niveaux</a>
            <a href="#entreprises" className="transition-colors hover:text-white hover:underline underline-offset-4">B2B</a>
            <a href="#temoignages" className="transition-colors hover:text-white hover:underline underline-offset-4">Témoignages</a>
            <a href="#contact" className="transition-colors hover:text-white hover:underline underline-offset-4">Contact</a>
          </div>
        </div>

        {/* Sub-Footer Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Deutsch Pro Bamako. {dict.footer ? dict.footer.rights : 'Tous droits réservés.'}
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>
              Designed by{' '}
              <a
                href="https://sahelmultiservices.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-slate-300 transition hover:text-red-400"
              >
                SAHEL-MULTISERVICES
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-medium">
            <a href="#" className="transition hover:text-slate-300">{dict.footer ? dict.footer.legal : 'Mentions Légales'}</a>
            <a href="#" className="transition hover:text-slate-300">{dict.footer ? dict.footer.privacy : 'Confidentialité'}</a>
            <a
              href="/admin"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-bold text-slate-300 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 font-display"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>{dict.footer ? dict.footer.admin : 'Admin'}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
