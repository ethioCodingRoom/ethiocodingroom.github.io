import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaLayerGroup, FaSignal } from 'react-icons/fa';
import { fadeInUp, revealViewport, staggerContainer } from '../animations';

const courses = [
  {
    title: 'Data Analytics And Visualization Track',
    summary: 'Learn how to clean data, query with SQL, build dashboards, and communicate insights clearly for business decisions.',
    level: 'Beginner to Intermediate',
    duration: '8 weeks',
    lessons: '24 lessons',
    accent: 'from-cyan-600 to-sky-500',
    topics: ['SQL foundations', 'Exploratory analysis', 'Dashboard design', 'Insight storytelling'],
  },
  {
    title: 'Machine Learning Practitioner Path',
    summary: 'Move from core ML concepts into model building, evaluation, feature work, and practical prediction tasks.',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: '30 lessons',
    accent: 'from-orange-500 to-amber-500',
    topics: ['Scikit-learn workflow', 'Model selection', 'Metrics and validation', 'End-to-end ML project'],
  },
  {
    title: 'AI, Data Engineering, And Deep Learning Lab',
    summary: 'Explore modern AI concepts, data pipeline design, and deep learning foundations through guided technical labs.',
    level: 'Intermediate to Advanced',
    duration: '12 weeks',
    lessons: '36 lessons',
    accent: 'from-emerald-500 to-cyan-500',
    topics: ['Data pipelines', 'AI application patterns', 'Neural network basics', 'Deep learning capstone'],
  },
];

export const CourseCatalog: React.FC = () => {
  return (
    <section id="courses" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
        >
          Course Catalog Mockup
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]"
        >
          A frontend preview of how niche data and AI programs can be presented before student accounts and backend enrollment exist.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-6 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={fadeInUp}
              className="overflow-hidden rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] shadow-xl backdrop-blur"
            >
              <div className={`bg-gradient-to-r ${course.accent} p-6 text-white`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em]">Featured Course</p>
                <h3 className="mt-3 text-2xl font-extrabold">{course.title}</h3>
                <p className="mt-3 text-sm text-white/90">{course.summary}</p>
              </div>

              <div className="space-y-6 p-6">
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
                  <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-3 dark:bg-slate-950/40">
                    <FaSignal className="mx-auto mb-2 text-[var(--site-brand)]" aria-hidden="true" />
                    <p className="text-[var(--site-text)]">{course.level}</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-3 dark:bg-slate-950/40">
                    <FaClock className="mx-auto mb-2 text-[var(--site-brand)]" aria-hidden="true" />
                    <p className="text-[var(--site-text)]">{course.duration}</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-3 dark:bg-slate-950/40">
                    <FaLayerGroup className="mx-auto mb-2 text-[var(--site-brand)]" aria-hidden="true" />
                    <p className="text-[var(--site-text)]">{course.lessons}</p>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.1em] text-[var(--site-muted)]">What students cover</p>
                  <ul className="space-y-2 text-sm text-[var(--site-muted)]">
                    {course.topics.map((topic) => (
                      <li key={topic} className="rounded-2xl border border-[var(--site-border)] bg-white/50 px-4 py-3 dark:bg-slate-950/30">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-orange-500 px-5 py-3 font-bold text-white"
                >
                  View Course Page
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};