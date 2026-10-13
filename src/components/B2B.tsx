'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveB2bRequest } from '@/app/actions';
import { Building2, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, Briefcase, Users2 } from 'lucide-react';

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
    <section id="entreprises" className="relative overflow-hidden bg-[#070b14] py-28 sm:py-36 text-white">
      {/* Executive Ambient Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-pattern-light opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <Building2 size={15} className="text-amber-400" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Solutions Entreprises & Recruteurs
            </span>
          </div>

          <h2 className="mb-5 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white">
            {dict.title}
          </h2>

          <p className="mx-auto max-w-2xl font-sans text-base sm:text-lg text-slate-400 leading-relaxed">
            {dict.subtitle}
          </p>

          {/* Quick Pillar Bullets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Candidats qualifiés A2-B2</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-amber-400" />
              <span>Contrats d'Ausbildung & Emploi</span>
            </div>
            <div className="flex items-center gap-2">
              <Users2 size={16} className="text-red-400" />
              <span>Accompagnement Visa complet</span>
            </div>
          </div>
        </motion.div>

        {/* Executive Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-7 sm:p-12 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Ne pas remplir ce champ si vous êtes humain</label>
              <input type="text" id="bot_field" name="bot_field" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.company}
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Ex: Klinikum München GmbH"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.contact}
                </label>
                <input
                  type="text"
                  name="contact_name"
                  required
                  placeholder="Ex: Dr. Martin Weber"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="contact@entreprise.de"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+49 ... ou +223 ..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.sector}
                </label>
                <select
                  name="sector"
                  required
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                >
                  <option value="Pflege & Gesundheit" className="bg-slate-900">{dict.sectors.health}</option>
                  <option value="Handwerk & Elektrotechnik" className="bg-slate-900">{dict.sectors.craft}</option>
                  <option value="IT & Digitales" className="bg-slate-900">{dict.sectors.it}</option>
                  <option value="Gastronomie & Hotellerie" className="bg-slate-900">{dict.sectors.gastro}</option>
                  <option value="Sonstiges" className="bg-slate-900">{dict.sectors.other}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                  {dict.form.candidates}
                </label>
                <select
                  name="candidates_count"
                  required
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
                >
                  <option value="1-2" className="bg-slate-900">{dict.counts['1-2']}</option>
                  <option value="3-5" className="bg-slate-900">{dict.counts['3-5']}</option>
                  <option value="6-10" className="bg-slate-900">{dict.counts['6-10']}</option>
                  <option value="10+" className="bg-slate-900">{dict.counts['10+']}</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                {dict.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Détaillez vos besoins en recrutement ou profils ciblés..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-red-500 focus:bg-slate-950 focus:ring-4 focus:ring-red-500/20"
              />
            </div>

            {status === 'success' && (
              <div className="mb-8 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300 backdrop-blur-md">
                <CheckCircle size={20} className="text-emerald-400" />
                <span className="text-sm font-semibold">{dict.form.success}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-8 flex items-center gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-300 backdrop-blur-md">
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-sm font-semibold">{dict.form.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:-translate-y-0.5 disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'loading' ? dict.form.loading : dict.form.submit}
                {!status || status === 'idle' ? (
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                ) : null}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <p className="mt-6 text-center text-xs text-slate-400 font-medium">
              🔒 {dict.form.privacy}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

