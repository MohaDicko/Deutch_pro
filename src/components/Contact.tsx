'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveContact } from '@/app/actions';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 mb-6">Prêt à commencer ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Inscrivez-vous dès maintenant ou posez-nous vos questions. Notre équipe vous répondra dans les plus brefs délais.</p>
        </motion.div>
        
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nom complet *</label>
                <input type="text" name="name" required className="w-full px-5 py-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="John Doe" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-5 py-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="john@example.com" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Téléphone</label>
                <input type="tel" name="phone" className="w-full px-5 py-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all" placeholder="+223 XX XX XX XX" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Niveau souhaité</label>
                <select name="language" className="w-full px-5 py-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all appearance-none cursor-pointer">
                  <option value="A1">Niveau A1 (Débutant)</option>
                  <option value="A2">Niveau A2 (Élémentaire)</option>
                  <option value="B1">Niveau B1 (Intermédiaire)</option>
                  <option value="B2">Niveau B2 (Avancé)</option>
                </select>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-gray-900 mb-2">Votre Message *</label>
              <textarea name="message" required rows={5} className="w-full px-5 py-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </motion.div>
            
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                Votre message a été envoyé avec succès. Nous vous contacterons très vite !
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
                <AlertCircle className="text-red-500" />
                Une erreur est survenue. Veuillez réessayer.
              </motion.div>
            )}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <button type="submit" disabled={status === 'loading'} className="group w-full md:w-auto px-10 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200 disabled:opacity-70 flex justify-center items-center gap-2 text-lg mx-auto hover:-translate-y-0.5">
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                {!status && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
