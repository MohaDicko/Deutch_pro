export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-outfit">Votre Partenaire pour l'Allemagne</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Nous vous accompagnons de vos premiers mots en allemand jusqu'à votre installation réussie en Allemagne.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Préparation aux Examens</h3>
            <p className="text-gray-600">Préparation intensive et ciblée pour les examens officiels (Goethe-Zertifikat, ÖSD).</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Accompagnement Visa</h3>
            <p className="text-gray-600">Assistance complète dans vos démarches consulaires et préparation de dossier.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Orientation Ausbildung</h3>
            <p className="text-gray-600">Conseils pour la formation professionnelle et le travail qualifié en Allemagne.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
