import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBookOpen, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import { fadeInUp, revealViewport, staggerContainer } from '../../animations';

const previewCards = [
  {
    title: 'Course Catalog',
    text: 'Planned frontend, Python, and data tracks with structured lesson previews.',
    icon: FaBookOpen,
  },
  {
    title: 'Student Dashboard',
    text: 'A backend-ready UI for progress, saved lessons, and upcoming sessions.',
    icon: FaUserGraduate,
  },
  {
    title: 'Practical Learning',
    text: 'Project-based experiences designed to turn lessons into visible proof of work.',
    icon: FaLaptopCode,
  },
];

export const AcademyPreview: React.FC = () => (
  <section id="academy-preview" className="py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="rounded-[2rem] border border-[var(--site-border)] bg-[linear-gradient(135deg,rgba(8,145,178,0.13),rgba(234,88,12,0.12))] p-8 shadow-2xl backdrop-blur sm:p-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--site-brand)]">Separate Brand</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[var(--site-text)] sm:text-4xl">
              EthioCodingRoom Academy Lives As Its Own Site
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--site-muted)] sm:text-lg">
              My personal portfolio stays focused on my identity and work, while the academy brand gets its own dedicated frontend for courses, student experience, and future platform growth.
            </p>
            <a
              href="/academy.html"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white shadow-xl dark:bg-white dark:text-slate-950"
            >
              Open Academy Site
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid gap-4"
          >
            {previewCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 shadow-lg"
                >
                  <span className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-600 to-orange-500 p-3 text-white">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--site-text)]">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--site-muted)]">{card.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);