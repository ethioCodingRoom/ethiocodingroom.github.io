import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, springTap, revealViewport } from '../animations';

export const Contact: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState<null | boolean>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setLoading(true); setOk(null);

    try {
      const res = await fetch(form.action, { 
        method: 'POST', 
        body: fd, 
        headers: { Accept: 'application/json' } 
      });
      setOk(res.ok);
      if (res.ok) form.reset();
      setTimeout(() => setOk(null), 5000);
    } catch {
      setOk(false);
      setTimeout(() => setOk(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          className="mb-4 bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        >
          Let's Connect
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          Tell me about your project, data problem, or dashboard idea. I usually reply within 24 hours.
        </p>

        <motion.form 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          onSubmit={onSubmit} 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST"
          className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl backdrop-blur-xl sm:p-12"
        >
          <div className="mb-6">
            <label htmlFor="contactName" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Full Name</label>
            <input 
              id="contactName" 
              name="name" 
              required 
              placeholder="John Doe"
              className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contactEmail" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Your Email</label>
              <input 
                id="contactEmail" 
                name="email" 
                type="email" 
                required 
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Phone Number</label>
              <input 
                id="contactPhone" 
                name="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contactMessage" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Your Message</label>
            <textarea 
              id="contactMessage" 
              name="message" 
              rows={5} 
              required 
              placeholder="How can I help you?"
              className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
            />
          </div>

          <motion.button 
            {...springTap} 
            type="submit" 
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-orange-500 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all"
          >
            {loading ? 'Sending…' : 'Send Message'}
          </motion.button>

          <div className="mt-6 text-center min-h-[24px]">
            {ok === true && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-emerald-600 dark:text-emerald-400">
                ✓ Thank you! Your message has been sent successfully.
              </motion.p>
            )}
            {ok === false && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-red-600 dark:text-red-400">
                ⚠ Oops! Something went wrong. Please try again.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};