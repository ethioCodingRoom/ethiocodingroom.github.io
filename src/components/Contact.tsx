import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, springTap, revealViewport } from '../animations';

export const Contact: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState<null | boolean>(null);

  // Submit directly to Formspree and show a temporary success/error banner.
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
      // Auto-hide feedback so the form remains clean for next message.
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
          Let's Work Together
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          Hiring for a data role or need analytics support? Share your goals, and I will respond within 24 hours.
        </p>
        <p className="mx-auto -mt-8 mb-8 max-w-2xl text-center text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          Available for freelance, contract, and full-time opportunities.
        </p>

        <motion.form 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          onSubmit={onSubmit} 
          action="https://formspree.io/f/mwvrvwly" 
          method="POST"
          className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl backdrop-blur-xl sm:p-12"
        >
          <div className="mb-6">
            <label htmlFor="contactName" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Name</label>
            <input 
              id="contactName" 
              name="name" 
              autoComplete="name"
              required 
              placeholder="Asres Gamu Yelia"
              className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contactEmail" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Email</label>
              <input 
                id="contactEmail" 
                name="email" 
                type="email" 
                autoComplete="email"
                required 
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Phone (Optional)</label>
              <input 
                id="contactPhone" 
                name="phone" 
                type="tel" 
                autoComplete="tel"
                placeholder="+251 9XX XXX XXX"
                className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contactMessage" className="mb-2 block text-sm font-bold text-[var(--site-text)]">Project or Role Details</label>
            <textarea 
              id="contactMessage" 
              name="message" 
              rows={5} 
              required 
              placeholder="Tell me about the role, project scope, and timeline."
              className="w-full rounded-xl border border-[var(--site-border)] bg-white/80 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-cyan-500 dark:bg-slate-950/60" 
            />
          </div>

          <motion.button 
            {...springTap} 
            type="submit" 
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-600 to-orange-500 py-4 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all"
          >
            {loading ? 'Sending…' : 'Start a Conversation'}
          </motion.button>

          <div className="mt-6 text-center min-h-[24px]">
            <div aria-live="polite" aria-atomic="true" role="status">
              {ok === true && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-emerald-600 dark:text-emerald-400">
                  ✓ Thank you. Your message has been received and I will follow up soon.
                </motion.p>
              )}
              {ok === false && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-red-600 dark:text-red-400">
                  ⚠ Message not sent. Please try again or contact me by email.
                </motion.p>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};