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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          className="mb-12 text-center text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.form 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          onSubmit={onSubmit} 
          action="https://formspree.io/f/YOUR_FORM_ID" 
          method="POST"
          className="rounded-3xl border border-white/10 bg-white/60 p-8 backdrop-blur-xl dark:bg-white/5 shadow-2xl sm:p-12"
        >
          {/* Full Name Field */}
          <div className="mb-6">
            <label htmlFor="contactName" className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
            <input 
              id="contactName" 
              name="name" 
              required 
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Email Field */}
            <div>
              <label htmlFor="contactEmail" className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Your Email</label>
              <input 
                id="contactEmail" 
                name="email" 
                type="email" 
                required 
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              />
            </div>
            {/* Phone Number Field */}
            <div>
              <label htmlFor="contactPhone" className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
              <input 
                id="contactPhone" 
                name="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label htmlFor="contactMessage" className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea 
              id="contactMessage" 
              name="message" 
              rows={5} 
              required 
              placeholder="How can I help you?"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
            />
          </div>

          {/* Submit Button */}
          <motion.button 
            {...springTap} 
            type="submit" 
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 py-4 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all"
          >
            {loading ? 'Sending…' : 'Send Message'}
          </motion.button>

          {/* Feedback Messages (Correctly nested) */}
          <div className="mt-6 text-center min-h-[24px]">
            {ok === true && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-bold dark:text-green-400">
                ✓ Thank you! Your message has been sent successfully.
              </motion.p>
            )}
            {ok === false && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-600 font-bold dark:text-red-400">
                ⚠ Oops! Something went wrong. Please try again.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};