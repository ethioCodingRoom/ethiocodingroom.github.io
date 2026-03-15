import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '../../animations';

export const PersonalBlog: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl"
        >
          Latest Articles
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]"
        >
          Practical tutorials focused on data workflows you can apply immediately.
        </motion.p>

        <motion.article
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 backdrop-blur sm:p-8"
        >
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">10 Essential pandas Functions</h3>
          <p className="mt-2 text-[var(--site-muted)]">
            A practical guide covering the 10 pandas functions you’ll use every day.
          </p>

          <a
            href="https://github.com/ethioCodingRoom/music-streaming-data-analytics/blob/main/notebooks/spotify_analysis.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300"
          >
            Read More ↗
          </a>
        </motion.article>
      </div>
    </section>
  );
};