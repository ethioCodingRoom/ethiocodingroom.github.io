import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCodeBranch, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import { fadeInUp, revealViewport, staggerContainer } from '../../animations';

const achievementStats = [
  { label: 'Core Certifications', value: '4+' },
  { label: 'Focus Areas', value: 'Data + Python' },
  { label: 'Learning Path', value: 'Active' },
];

const credentials = [
  {
    title: 'Google Data Analytics',
    detail: 'Coursework in data-driven decision making, data cleaning, and practical analytics workflows.',
    icon: FaAward,
  },
  {
    title: 'Python And Data Analysis Training',
    detail: 'Hands-on learning across Python fundamentals, data manipulation, and visualization.',
    icon: FaGraduationCap,
  },
  {
    title: 'Cybersecurity Awareness',
    detail: 'Practical understanding of data protection habits and safe digital working practices.',
    icon: FaShieldAlt,
  },
  {
    title: 'Version Control And GitHub',
    detail: 'Reliable workflow habits for collaboration, branching, and professional project delivery.',
    icon: FaCodeBranch,
  },
];

const certificateGallery = [
  {
    title: 'Ask Questions to Make Data-Driven Decisions',
    image: '/ask_questions_to_make_data_driven_decisions.png',
  },
  {
    title: 'Data Literacy Professional',
    image: '/data_literacy_professional_datacamp.png',
  },
  {
    title: 'Data Analysis Fundamentals',
    image: '/data_analysis_fundamentals_udacity.png',
  },
  {
    title: 'Data Analysis and Visualization with Python',
    image: '/data_analysis_and_visualization_with_python.png',
  },
  {
    title: 'Python Programming Fundamentals',
    image: '/python_programming_fundamentals.png',
  },
  {
    title: 'Cybersecurity Basics',
    image: '/cybersecurity_basics_protecting_your_data_in_the_digital_age.png',
  },
  {
    title: 'Git Fundamentals',
    image: '/git_fundamentals_datacamp.png',
  },
  {
    title: 'Version Control',
    image: '/version_control.png',
  },
];

export const PersonalCertifications: React.FC = () => (
  <section id="certifications" className="py-20">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mb-4 bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
      >
        Certifications & Achievements
      </motion.h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-[var(--site-muted)]">
        Selected certifications and learning milestones that support my analytics and engineering work.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {achievementStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 text-center shadow-lg backdrop-blur"
          >
            <p className="text-2xl font-extrabold text-[var(--site-text)]">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--site-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {credentials.map((credential) => {
          const Icon = credential.icon;

          return (
            <motion.article
              key={credential.title}
              variants={fadeInUp}
              className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 shadow-lg backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-600 to-orange-500 p-3 text-white">
                  <Icon aria-hidden="true" />
                </div>
                <span className="rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-300">
                  Verified
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--site-text)]">{credential.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--site-muted)]">{credential.detail}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mt-12"
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--site-text)]">Certification Gallery</h3>
            <p className="mt-2 text-sm text-[var(--site-muted)]">
              Visual proof of certifications and accomplishments collected across analytics, Python, and professional development.
            </p>
          </div>
          <span className="rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
            {certificateGallery.length} items
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificateGallery.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="overflow-hidden rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] shadow-lg backdrop-blur"
            >
              <div className="aspect-[4/3] border-b border-[var(--site-border)] bg-white/80 p-3 dark:bg-slate-950/50">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-2xl object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold leading-snug text-[var(--site-text)]">{item.title}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);