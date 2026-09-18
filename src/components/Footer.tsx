export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="relative bg-slate-950 py-12 text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.07),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-lg font-black text-white">
              D
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-white">Deutsch Pro</p>
              <p className="text-sm text-slate-400">Bamako • Allemagne</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#niveaux" className="transition hover:text-white">Niveaux</a>
            <a href="#temoignages" className="transition hover:text-white">Témoignages</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Deutsch Pro Bamako. {dict.footer ? dict.footer.rights : 'Tous droits réservés.'}
            </p>
            <p>
              Designed by{' '}
              <a href="https://sahelmultiservices.com" target="_blank" rel="noreferrer" className="font-semibold text-white transition hover:text-red-400">
                SAHEL-MULTISERVICES
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a href="#" className="transition hover:text-white">{dict.footer ? dict.footer.legal : 'Mentions Légales'}</a>
            <a href="#" className="transition hover:text-white">{dict.footer ? dict.footer.privacy : 'Confidentialité'}</a>
            <a href="/admin" className="flex items-center gap-2 transition hover:text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              {dict.footer ? dict.footer.admin : 'Admin'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
