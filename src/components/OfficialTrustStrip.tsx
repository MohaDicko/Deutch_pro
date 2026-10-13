'use client';
import { ShieldCheck, Award, Building, FileCheck2, CheckCircle2, Globe2 } from 'lucide-react';

export default function OfficialTrustStrip({ lang = 'fr' }: { lang?: string }) {
  const isDe = lang === 'de';

  const items = [
    {
      title: isDe ? 'GER-Akkreditierung' : 'Norme CECRL Européenne',
      subtitle: isDe ? 'Stufen A1, A2, B1, B2' : 'Cadre Européen A1 à B2',
      desc: isDe ? 'Anerkannt für Familiennachzug & Ausbildung.' : 'Reconnu pour regroupement familial, études et visas travail.'
    },
    {
      title: isDe ? 'Goethe-Zertifikat' : 'Préparation Goethe Officielle',
      subtitle: isDe ? 'Prüfungssimulationen' : 'Examens blancs & simulations',
      desc: isDe ? 'Gezieltes Training für alle 4 Prüfungsteile.' : 'Entraînement calibré sur les 4 épreuves officielles (Écouter, Lire, Écrire, Parler).'
    },
    {
      title: isDe ? 'Deutschland-Netzwerk' : 'Réseau d’Accueil en Allemagne',
      subtitle: isDe ? 'München • Bielefeld • Braunschweig' : 'Munich • Bielefeld • Braunschweig',
      desc: isDe ? 'Direkte Unterstützung bei Ankunft und Integration.' : 'Correspondants permanents pour sécuriser votre arrivée et votre insertion.'
    },
    {
      title: isDe ? 'Verifizierte Nachweise' : 'Traçabilité Consulaire',
      subtitle: isDe ? 'Transparente Nachweise' : 'Dossiers & Relevés conformes',
      desc: isDe ? 'Vollständige Dokumentation für Behörden & Arbeitgeber.' : 'Bulletins et attestations officielles répondant aux exigences des autorités.'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
        {/* Top Header of the strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xl">🇲🇱</span>
              <span className="text-slate-300 font-bold">•</span>
              <span className="text-xl">🇩🇪</span>
            </div>
            <div>
              <p className="font-display text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
                {isDe 
                  ? 'Offizieller Bildungsrahmen & Kooperation Mali — Deutschland' 
                  : 'Cadre Pédagogique Officiel & Coopération Éducative'}
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700 border border-emerald-200 font-display">
                  <CheckCircle2 size={11} />
                  {isDe ? 'Anerkannt & Geprüft' : 'Agréé & Vérifié'}
                </span>
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {isDe 
                  ? 'Zertifizierte Sprachausbildung nach europäischen Standards' 
                  : 'Formation linguistique certifiée selon les exigences fédérales et consulaires'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-slate-600 font-display">
            <span className="rounded-xl bg-slate-50 px-3 py-1.5 border border-slate-200 text-slate-800">
              {isDe ? '🏛️ Offizielle Registrierung Bamako' : '🏛️ Enregistrement Officiel Bamako'}
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group rounded-2xl p-4 transition-all duration-200 hover:bg-slate-50/80 border border-transparent hover:border-slate-200/60"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 rounded-full bg-red-600" />
                <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs font-extrabold text-slate-700 font-display mb-1.5">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
