'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveB2bRequest } from '@/app/actions';
import { Building2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function B2B({ dict }: { dict: any }) {
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
    <section id="entreprises" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#1f2937_0%,#0f172a_45%,#020617_100%)] py-32 text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-red-900/10">
            <Building2 size={30} className="text-red-400" />
          </div>
          <h2 className="mb-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">{dict.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">{dict.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Ne pas remplir ce champ si vous êtes humain</label>
              <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.company}</label>
                <input type="text" name="company" required className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.contact}</label>
                <input type="text" name="contact_name" required className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.email}</label>
                <input type="email" name="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.phone}</label>
                <input type="tel" name="phone" required className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.sector}</label>
                <select name="sector" required className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20">
                  <option value="Pflege & Gesundheit">{dict.sectors.health}</option>
                  <option value="Handwerk & Elektrotechnik">{dict.sectors.craft}</option>
                  <option value="IT & Digitales">{dict.sectors.it}</option>
                  <option value="Gastronomie & Hotellerie">{dict.sectors.gastro}</option>
                  <option value="Sonstiges">{dict.sectors.other}</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.candidates}</label>
                <select name="candidates_count" required className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20">
                  <option value="1-2">{dict.counts['1-2']}</option>
                  <option value="3-5">{dict.counts['3-5']}</option>
                  <option value="6-10">{dict.counts['6-10']}</option>
                  <option value="10+">{dict.counts['10+']}</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-slate-200">{dict.form.message}</label>
              <textarea name="message" rows={4} className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
            </div>

            {status === 'success' && (
              <div className="mb-8 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
                <CheckCircle size={18} />
                {dict.form.success}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-8 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                <AlertCircle size={18} />
                {dict.form.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-lg hover:shadow-red-900/40 disabled:opacity-60"
            >
              {status === 'loading' ? dict.form.loading : dict.form.submit}
              {!status || status === 'idle' ? <ArrowRight size={18} /> : null}
            </button>

            <p className="mt-6 text-center text-sm text-slate-400">🔒 {dict.form.privacy}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

