import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport, staggerContainer } from '../../animations';

const resources = [
  {
    title: 'Data Science Roadmap',
    desc: 'A structured path for learners moving from Python and analytics fundamentals toward machine learning and deep learning.',
    link: 'https://github.com/ethioCodingRoom',
  },
  {
    title: 'Machine Learning Practice Notes',
    desc: 'Short explanations and code examples that help learners understand models, metrics, and practical evaluation workflows.',
    link: 'https://github.com/ethioCodingRoom',
  },
  {
    title: 'AI And Data Engineering Articles',
    desc: 'Future articles on LLM workflows, data pipelines, deep learning basics, and portfolio planning for data careers.',
    link: 'https://github.com/ethioCodingRoom',
  },
];

export const Blog: React.FC = () => {
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
          Resources And Articles
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          A focused resource hub for analytics, AI, machine learning, deep learning, and data engineering.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-6 md:grid-cols-3"
        >
          {resources.map((resource) => (
            <motion.article
              key={resource.title}
              variants={fadeInUp}
              className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 backdrop-blur sm:p-8"
            >
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{resource.title}</h3>
              <p className="mt-3 text-[var(--site-muted)]">{resource.desc}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300"
              >
                Explore Resource ↗
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};