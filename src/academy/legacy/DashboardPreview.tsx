import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt, FaChartLine, FaPlayCircle } from 'react-icons/fa';
import { fadeInUp, revealViewport } from '../animations';

const progressCards = [
  { label: 'Tracks In Progress', value: '3', icon: FaBook },
  { label: 'Lab Hours This Week', value: '11.5', icon: FaChartLine },
  { label: 'Next AI Workshop', value: 'Sat 7 PM', icon: FaCalendarAlt },
];

const upcomingLessons = [
  { title: 'Feature Engineering And Data Leakage', progress: 72 },
  { title: 'Model Evaluation And Cross Validation', progress: 48 },
  { title: 'Neural Network Training Basics', progress: 35 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
        >
          Student Dashboard Mockup
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]"
        >
          This shows the kind of student area your frontend can support once a backend handles login, saved progress, and enrolled lessons.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]"
        >
          <aside className="space-y-6 rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-xl backdrop-blur">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--site-brand)]">Student profile</p>
              <h3 className="mt-3 text-2xl font-extrabold text-[var(--site-text)]">Welcome back, learner</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--site-muted)]">
                Continue your analytics and AI track, review upcoming labs, and keep your weekly study streak active.
              </p>
            </div>

            <div className="space-y-3">
              {progressCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.label} className="flex items-center justify-between rounded-2xl border border-[var(--site-border)] bg-white/60 px-4 py-4 dark:bg-slate-950/40">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-xl bg-cyan-500/15 p-3 text-[var(--site-brand)]">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-[var(--site-muted)]">{card.label}</span>
                    </div>
                    <span className="text-lg font-extrabold text-[var(--site-text)]">{card.value}</span>
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-dashed border-cyan-500/40 bg-cyan-500/10 p-5">
              <p className="text-sm font-bold text-[var(--site-text)]">Backend-ready idea</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--site-muted)]">
                This panel can later show real enrollments, lab submissions, certificates, quiz scores, and student messages from Django.
              </p>
            </div>
          </aside>

          <div className="space-y-6 rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-4 rounded-3xl bg-[linear-gradient(135deg,rgba(8,145,178,0.16),rgba(234,88,12,0.14))] p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--site-brand)]">Continue learning</p>
                <h3 className="mt-3 text-2xl font-extrabold text-[var(--site-text)]">Machine Learning Practitioner Path</h3>
                <p className="mt-2 text-sm text-[var(--site-muted)]">Resume from Module 4: validation strategy, feature selection, and model comparison.</p>
              </div>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white dark:bg-white dark:text-slate-950">
                <FaPlayCircle aria-hidden="true" />
                Resume lesson
              </button>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-[var(--site-text)]">Upcoming labs and lessons</h4>
              <div className="mt-4 space-y-4">
                {upcomingLessons.map((lesson) => (
                  <div key={lesson.title} className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-4 dark:bg-slate-950/35">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-[var(--site-text)]">{lesson.title}</p>
                      <span className="text-sm font-bold text-[var(--site-brand)]">{lesson.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-orange-500"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};