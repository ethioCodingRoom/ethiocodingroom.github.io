import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { fadeInUp, revealViewport } from '../../animations';

export const About: React.FC = () => (
  <section id="about" className="relative overflow-hidden py-20 sm:py-28">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-orange-500 blur-[120px]"></div>
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mb-12 text-center"
      >
        <h2 className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
          Why This Site Exists
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500"></div>
      </motion.div>

      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl backdrop-blur-xl sm:p-14"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-[var(--site-text)]">
            EthioCodingRoom is being shaped into a <span className="font-bold text-cyan-700 dark:text-cyan-300">specialized education brand</span>
            for data science, analytics, machine learning, artificial intelligence, data engineering, and deep learning.
          </p>

          <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-5 dark:bg-slate-900/40">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
              <FaGraduationCap className="text-cyan-600" aria-hidden="true" />
              Platform Vision
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-500 text-[11px] font-extrabold text-white">01</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Niche-first technical tracks</span>
                  <span className="block">Programs are centered on analytics, ML, AI, data pipelines, and deep learning foundations.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 text-[11px] font-extrabold text-white">02</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Project-based technical depth</span>
                  <span className="block">Students finish lessons by building notebooks, models, dashboards, and data workflows.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 text-[11px] font-extrabold text-white">03</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">A backend-ready frontend foundation</span>
                  <span className="block">This interface is prepared to later connect to Django, student accounts, and a course database.</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaBookOpen className="text-cyan-600" aria-hidden="true" />
                What Learners Will Find
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                Structured paths for analytics, ML, AI, data engineering, and deep learning with clear next steps and portfolio-oriented outcomes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaUsers className="text-orange-500" aria-hidden="true" />
                Who It Is For
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                Learners who want to move from Python and analytics basics into professional data work, machine learning systems, and AI-driven projects.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);