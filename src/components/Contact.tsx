'use client';
import { useState } from 'react';
import { saveContact } from '@/app/actions';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const result = await saveContact(formData);
    
    if (result?.error) {
      setStatus('error');
    } else {
      setStatus('success');
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600">Une question ? N'hésitez pas à nous écrire.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
            <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"></textarea>
          </div>
          
          {status === 'success' && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">Votre message a été envoyé avec succès !</div>}
          {status === 'error' && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">Une erreur s'est produite. Veuillez réessayer.</div>}
          
          <button type="submit" disabled={status === 'loading'} className="w-full bg-red-600 text-white font-semibold py-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </section>
  );
}
