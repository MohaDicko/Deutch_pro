'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveContact } from '@/app/actions';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact({ dict }: { dict: any }) {
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
    <section id="contact" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.08),transparent_30%),linear-gradient(180deg,#fffaf9_0%,#ffffff_100%)] py-32">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-red-600">{dict.badge}</span>
          <h2 className="mb-6 text-4xl font-black tracking-[-0.05em] text-gray-900 md:text-5xl">{dict.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{dict.subtitle}</p>
        </motion.div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Ne pas remplir ce champ si vous êtes humain</label>
              <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <label className="mb-2 block text-sm font-semibold text-gray-900">{dict.form.name}</label>
                <input type="text" name="name" required className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" placeholder="John Doe" />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <label className="mb-2 block text-sm font-semibold text-gray-900">{dict.form.email}</label>
                <input type="email" name="email" required className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" placeholder="john@example.com" />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <label className="mb-2 block text-sm font-semibold text-gray-900">{dict.form.phone}</label>
                <input type="tel" name="phone" className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" placeholder="+223 XX XX XX XX" />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <label className="mb-2 block text-sm font-semibold text-gray-900">{dict.form.level}</label>
                <select name="language" className="w-full cursor-pointer appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10">
                  <option value="A1">{dict.levels.A1}</option>
                  <option value="A2">{dict.levels.A2}</option>
                  <option value="B1">{dict.levels.B1}</option>
                  <option value="B2">{dict.levels.B2}</option>
                </select>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <label className="mb-2 block text-sm font-semibold text-gray-900">{dict.form.message}</label>
              <textarea name="message" required rows={5} className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" placeholder="..." />
            </motion.div>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle className="text-green-500" />
                {dict.form.success}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                <AlertCircle className="text-red-500" />
                {dict.form.error}
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="pt-2">
              <button type="submit" disabled={status === 'loading'} className="group mx-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 disabled:opacity-70 md:w-auto">
                {status === 'loading' ? dict.form.loading : dict.form.submit}
                {!status && <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}

