import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { fadeInUp, staggerContainer, revealViewport } from '../../animations';

const skillCategories = [
  {
    title: 'Data Science Track',
    skills: ['Python for Data', 'Pandas', 'NumPy', 'EDA', 'Statistics', 'Visualization', 'Feature Engineering', 'Experimentation'],
  },
  {
    title: 'Machine Learning Track',
    skills: ['Scikit-learn', 'Supervised Learning', 'Model Evaluation', 'Cross Validation', 'Classification', 'Regression', 'Clustering', 'ML Projects'],
  },
  {
    title: 'Artificial Intelligence Track',
    skills: ['AI Concepts', 'Prompt Engineering', 'LLM Workflows', 'AI Applications', 'Responsible AI', 'Model Usage', 'RAG Concepts', 'AI Product Thinking'],
  },
  {
    title: 'Data Engineering Track',
    skills: ['SQL', 'ETL', 'Data Pipelines', 'APIs', 'Warehousing', 'Batch Processing', 'Data Modeling', 'Workflow Automation'],
  },
  {
    title: 'Deep Learning Track',
    skills: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Computer Vision Basics', 'NLP Basics', 'Training Loops', 'Model Tuning', 'Inference Thinking'],
  },
  {
    title: 'Platform Layer',
    skills: ['Guided Roadmaps', 'Capstones', 'Live Sessions', 'Mentor Support', 'Student Accounts', 'Saved Progress'],
  },
];

const workingStyles = ['Niche Focused', 'Hands-On Learning', 'Built To Expand'];

export const Skills: React.FC = () => {
  const enableHoverFx = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return !prefersReducedMotion && !coarsePointer;
  }, []);

  // Reuse the same mouse-follow tilt pattern used in project cards.
  const handleCardMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enableHoverFx) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;

    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
    e.currentTarget.style.setProperty('--rx', `${rotateX}deg`);
    e.currentTarget.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleCardMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enableHoverFx) return;

    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
      <motion.h2 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
      >
        Programs And Learning Tracks
      </motion.h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
        A frontend preview of the academy niche, centered on data science and AI career paths.
      </p>

      <div className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur sm:p-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="group relative overflow-hidden rounded-2xl border border-[var(--site-border)] bg-white/60 p-5 dark:bg-slate-900/40 [--mx:50%] [--my:50%] [--rx:0deg] [--ry:0deg]"
              style={{
                transform: 'perspective(850px) rotateX(var(--rx)) rotateY(var(--ry))',
                transition: 'transform 180ms ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(180px circle at var(--mx) var(--my), rgba(6, 182, 212, 0.12), rgba(249, 115, 22, 0.07) 38%, transparent 72%)',
                }}
              />
              <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--site-text)]">
                {category.title}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -3, backgroundColor: 'rgba(8, 145, 178, 0.18)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 12 }}
                    className="inline-flex cursor-default items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-700 shadow-sm dark:text-cyan-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          className="text-center"
        >
          <p className="mb-6 text-xl font-bold tracking-tight text-[var(--site-text)]">
            Product Direction
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {workingStyles.map(style => (
              <span 
                key={style}
                className="inline-flex items-center rounded-xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-sm font-bold text-orange-700 shadow-lg shadow-orange-500/5 dark:text-orange-300"
              >
                <FaCheckCircle className="mr-2 opacity-70" aria-hidden="true" />
                {style}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};