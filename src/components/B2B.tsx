'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveB2bRequest } from '@/app/actions';
import { Building2, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section id="entreprises" className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 mb-6 shadow-xl">
            <Building2 size={32} className="text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-6">Für Unternehmen & Partner</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Vous cherchez des talents qualifiés pour votre entreprise en Allemagne ? Remplissez ce formulaire pour être recontacté par notre bureau.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-800/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nom de l'Entreprise *</label>
                <input type="text" name="company" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Personne de contact *</label>
                <input type="text" name="contact_name" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Professionnel *</label>
                <input type="email" name="email" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone *</label>
                <input type="tel" name="phone" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Secteur / Industrie *</label>
                <select name="sector" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all appearance-none">
                  <option value="Pflege & Gesundheit">🩺 Santé & Soins</option>
                  <option value="Handwerk & Elektrotechnik">🛠️ Artisanat & Technique</option>
                  <option value="IT & Digitales">💻 Informatique (IT)</option>
                  <option value="Gastronomie & Hotellerie">🏨 Hôtellerie & Restauration</option>
                  <option value="Sonstiges">🏢 Autre secteur</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre de candidats *</label>
                <select name="candidates_count" required className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all appearance-none">
                  <option value="1-2">1 à 2 candidats</option>
                  <option value="3-5">3 à 5 candidats</option>
                  <option value="6-10">6 à 10 candidats</option>
                  <option value="10+">Plus de 10 candidats</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message ou Profils recherchés</label>
              <textarea name="message" rows={4} className="w-full px-5 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-600 focus:bg-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none"></textarea>
            </div>
            
            {status === 'success' && (
              <div className="mb-8 p-4 bg-green-900/30 border border-green-800 text-green-300 rounded-xl flex items-center gap-3">
                <CheckCircle size={20} />
                Votre demande a été envoyée. Notre bureau allemand vous contactera sous 24h.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-xl flex items-center gap-3">
                <AlertCircle size={20} />
                Une erreur est survenue lors de l'envoi.
              </div>
            )}
            
            <button type="submit" disabled={status === 'loading'} className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-900 hover:-translate-y-0.5 disabled:opacity-50 text-lg">
              {status === 'loading' ? 'Envoi...' : 'Envoyer la demande de Partenariat'}
            </button>
            
            <p className="text-gray-500 text-sm mt-6 text-center">🔒 Vos données seront traitées de manière 100% confidentielle.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
