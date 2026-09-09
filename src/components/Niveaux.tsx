export default function Niveaux() {
  return (
    <section id="niveaux" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 font-outfit">Niveaux de Langue Enseignés</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['A1 - Débutant', 'A2 - Élémentaire', 'B1 - Intermédiaire', 'B2 - Avancé'].map((level) => (
            <div key={level} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-semibold text-lg text-gray-800">
              {level}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
