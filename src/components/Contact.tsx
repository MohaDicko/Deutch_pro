'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveContact } from '@/app/actions';
import { Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

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
    <section id="contact" className="relative overflow-hidden bg-white py-28 sm:py-36">
      {/* Ambient background glows */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/70 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-red-600 shadow-xs font-display">
            <Sparkles size={13} className="text-amber-500" />
            <span>{dict.badge}</span>
          </div>

          <h2 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950">
            {dict.title}
          </h2>

          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg text-slate-600 leading-relaxed">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-7 sm:p-12 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.08)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Ne pas remplir ce champ si vous êtes humain</label>
              <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  {dict.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  placeholder="Votre nom complet"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  {dict.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  placeholder="votre.email@domaine.com"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  {dict.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  placeholder="+223 XX XX XX XX"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  {dict.form.level}
                </label>
                <select
                  name="language"
                  className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                >
                  <option value="A1">{dict.levels.A1}</option>
                  <option value="A2">{dict.levels.A2}</option>
                  <option value="B1">{dict.levels.B1}</option>
                  <option value="B2">{dict.levels.B2}</option>
                </select>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                {dict.form.message}
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                placeholder="Décrivez votre objectif (Goethe, visa travail, études...)"
              />
            </motion.div>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                <CheckCircle className="text-emerald-600" size={20} />
                <span className="text-sm font-semibold">{dict.form.success}</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800">
                <AlertCircle className="text-rose-600" size={20} />
                <span className="text-sm font-semibold">{dict.form.error}</span>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative mx-auto flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 px-10 py-4 font-display text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:-translate-y-0.5 disabled:opacity-70 md:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'loading' ? dict.form.loading : dict.form.submit}
                  {!status && <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}

