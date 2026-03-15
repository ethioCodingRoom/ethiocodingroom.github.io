import React from 'react';
import { motion } from 'framer-motion';
import { Typing } from '../../components/Typing';
import Reveal from '../../components/Reveal';
import { fadeInUp, staggerContainer } from '../../animations';

export const Hero: React.FC = () => (
  <section id="hero" className="relative overflow-hidden py-16 sm:py-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(8,145,178,0.2),transparent_36%),radial-gradient(circle_at_15%_0%,rgba(234,88,12,0.15),transparent_34%)]" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="text-center md:text-left">
        <motion.p
          variants={fadeInUp}
          className="inline-flex rounded-full border border-cyan-600/20 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300"
        >
          Data And AI Education Platform
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl"
        >
          Learn Data Science And AI With
          <span className="block bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">
            Real Pipelines And Applied Projects
          </span>
        </motion.h1>

        <Reveal>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            <Typing words={['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Data Engineering']} />
          </motion.p>
        </Reveal>

        <motion.p
          variants={fadeInUp}
          className="mt-3 inline-flex rounded-full border border-cyan-600/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300"
        >
          Analytics | Machine Learning | AI | Data Engineering | Deep Learning
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--site-muted)] sm:text-lg"
        >
          This version of EthioCodingRoom Academy is focused on preparing learners for data analysis,
          machine learning, artificial intelligence, data engineering, and deep learning through guided tracks and portfolio projects.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <span className="rounded-full border border-[var(--site-border)] bg-white/70 px-4 py-2 text-sm font-semibold dark:bg-slate-900/50">
            Built for future data professionals in Ethiopia and beyond
          </span>
          <span className="rounded-full border border-[var(--site-border)] bg-white/70 px-4 py-2 text-sm font-semibold dark:bg-slate-900/50">
            Designed for backend-ready course delivery later
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#courses"
            className="rounded-xl bg-gradient-to-r from-cyan-600 to-orange-500 px-7 py-3 font-bold text-white shadow-xl shadow-cyan-800/20"
          >
            Explore Courses
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-[var(--site-border)] bg-white/70 px-7 py-3 font-bold text-slate-900 dark:bg-slate-900/50 dark:text-slate-100"
          >
            Join The Waitlist
          </a>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="mx-auto w-full max-w-md">
        <div className="relative rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-panel)] p-4 shadow-2xl backdrop-blur">
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-cyan-400/30 blur-2xl" />
          <div className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full bg-orange-400/25 blur-2xl" />

          <img
            src="/Asres.jpg"
            alt="EthioCodingRoom learning experience preview"
            width={768}
            height={1024}
            decoding="async"
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 90vw, 420px"
            className="h-[22rem] w-full rounded-[1.4rem] object-cover sm:h-[26rem]"
          />

          <div className="mt-4 rounded-2xl border border-[var(--site-border)] bg-white/70 p-4 dark:bg-slate-900/60">
            <p className="text-sm font-bold text-[var(--site-brand)]">Launch Snapshot</p>
            <p className="mt-1 text-sm text-[var(--site-muted)]">
              Data and AI track previews, capstone pathways, article discovery, and enrollment calls to action.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[var(--site-border)] bg-white/70 p-3 text-center dark:bg-slate-900/60">
              <p className="text-lg font-extrabold text-[var(--site-text)]">12+</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--site-muted)]">Planned Courses</p>
            </div>
            <div className="rounded-2xl border border-[var(--site-border)] bg-white/70 p-3 text-center dark:bg-slate-900/60">
              <p className="text-lg font-extrabold text-[var(--site-text)]">5</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--site-muted)]">AI Tracks</p>
            </div>
            <div className="rounded-2xl border border-[var(--site-border)] bg-white/70 p-3 text-center dark:bg-slate-900/60">
              <p className="text-lg font-extrabold text-[var(--site-text)]">6</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--site-muted)]">Capstone Paths</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);
