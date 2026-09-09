'use client';
import { useState } from 'react';
import { saveB2bRequest } from '@/app/actions';

export default function B2B() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const result = await saveB2bRequest(formData);
    
    if (result?.error) {
      setStatus('error');
    } else {
      setStatus('success');
      e.currentTarget.reset();
    }
  }

  return (
    <section id="entreprises" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-outfit">Für Unternehmen & Partner</h2>
          <p className="text-gray-400 mb-8">Vous cherchez des talents qualifiés pour votre entreprise en Allemagne ? Remplissez ce formulaire pour être recontacté par notre bureau allemand.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nom de l'Entreprise *</label>
              <input type="text" name="company" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Personne de contact *</label>
              <input type="text" name="contact_name" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Professionnel *</label>
              <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone *</label>
              <input type="tel" name="phone" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Secteur / Industrie *</label>
              <select name="sector" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all">
                <option value="Pflege & Gesundheit">🩺 Santé & Soins</option>
                <option value="Handwerk & Elektrotechnik">🛠️ Artisanat & Technique</option>
                <option value="IT & Digitales">💻 Informatique (IT)</option>
                <option value="Gastronomie & Hotellerie">🏨 Hôtellerie & Restauration</option>
                <option value="Sonstiges">🏢 Autre secteur</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nombre de candidats recherchés *</label>
              <select name="candidates_count" required className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all">
                <option value="1-2">1 à 2 candidats</option>
                <option value="3-5">3 à 5 candidats</option>
                <option value="6-10">6 à 10 candidats</option>
                <option value="10+">Plus de 10 candidats</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Message ou Profils recherchés</label>
            <textarea name="message" rows={4} className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 outline-none transition-all"></textarea>
          </div>
          
          {status === 'success' && <div className="mb-6 p-4 bg-green-900/50 border border-green-800 text-green-300 rounded-lg">Votre demande a été envoyée. Notre bureau allemand vous contactera sous 24h.</div>}
          {status === 'error' && <div className="mb-6 p-4 bg-red-900/50 border border-red-800 text-red-300 rounded-lg">Une erreur est survenue lors de l'envoi.</div>}
          
          <button type="submit" disabled={status === 'loading'} className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
            {status === 'loading' ? 'Envoi...' : 'Envoyer la demande de Partenariat'}
          </button>
          
          <p className="text-gray-500 text-sm mt-4 text-center">🔒 Vos données seront traitées confidentiellement par notre équipe en Allemagne.</p>
        </form>
      </div>
    </section>
  );
}
