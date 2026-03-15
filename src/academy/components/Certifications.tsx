import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChalkboardTeacher, FaComments, FaLaptopCode, FaRegClock, FaRoad } from 'react-icons/fa';
import { fadeInUp, revealViewport, staggerContainer } from '../../animations';

const experienceCards = [
  {
    title: 'Structured Roadmaps',
    icon: FaRoad,
    desc: 'Each topic is organized into a visible learning path so students know what comes first and what comes next.',
  },
  {
    title: 'Lesson Pages',
    icon: FaBookOpen,
    desc: 'Course pages are designed to support clear explanations, code examples, and future backend-driven lesson progress.',
  },
  {
    title: 'Practice Projects',
    icon: FaLaptopCode,
    desc: 'Learners should be able to move from theory into practical builds that become part of their portfolio.',
  },
  {
    title: 'Mentor Sessions',
    icon: FaChalkboardTeacher,
    desc: 'Live support and workshop pages can later connect to registrations, calendars, and attendance tools.',
  },
  {
    title: 'Community Support',
    icon: FaComments,
    desc: 'Frontend sections are ready to grow into discussion areas, announcements, and student interaction spaces.',
  },
  {
    title: 'Self-Paced Access',
    icon: FaRegClock,
    desc: 'The experience is designed for students who need flexible study time without losing structure.',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-4 bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        >
          How Students Will Experience The Platform
        </motion.h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-[var(--site-muted)]">
          This section replaces the old portfolio certifications area with the core learning experience the site is aiming to deliver.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {experienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={fadeInUp}
                className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-lg backdrop-blur"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-cyan-600 to-orange-500 p-3 text-white">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--site-text)]">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--site-muted)]">{card.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
