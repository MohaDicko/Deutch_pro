export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Deutsch Pro Bamako. Tous droits réservés.
                </p>
                <div className="flex gap-4 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                  <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                  <a href="/admin" className="hover:text-red-500 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Admin
                  </a>
                </div>
              </div>
            </div>
    </footer>
  );
}
