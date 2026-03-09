import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, revealViewport } from '../animations';

const skillCategories = [
  {
    title: 'Data Analytics',
    skills: ['Data Analysis', 'Data Cleaning', 'Data Quality Assurance', 'Statistical Analysis', 'A/B Testing', 'Data Storytelling', 'Data Visualization', 'Requirements Analysis'],
  },
  {
    title: 'Business Intelligence',
    skills: ['Microsoft Power BI', 'Power BI Service', 'Tableau', 'DAX', 'Power Query', 'Power Query (M)', 'Data Modeling', 'KPI Development', 'Dashboard Design', 'Business Intelligence', 'Stakeholder Reporting'],
  },
  {
    title: 'Programming & Scripting',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'Linux Commands'],
  },
  {
    title: 'Databases & Modeling',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Data Warehousing', 'Dimensional Modeling'],
  },
  {
    title: 'Automation & Reporting',
    skills: ['ETL Pipeline', 'API Integration', 'Google Sheets Automation', 'Advanced Excel', 'Excel VBA', 'Git', 'GitHub', 'GitHub Actions'],
  },
  {
    title: 'Data Science Tools',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'Machine Learning'],
  },
];

const workingStyles = ['Solution Oriented', 'Detail Oriented', 'Reliable Delivery'];

export const Skills: React.FC = () => (
  <section id="skills" className="py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-6">
      {/* Section Heading */}
      <motion.h2 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
      >
        Skills &amp; Expertise
      </motion.h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
        Tools and technologies I use to build reliable analytics systems and reporting experiences.
      </p>

      <div className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur sm:p-12">
        
        {/* Categorized Skills */}
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
              className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-5 dark:bg-slate-900/40"
            >
              <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[var(--site-text)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -3, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
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

        {/* Divider Line */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

        {/* Working Style Section */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          className="text-center"
        >
          <p className="mb-6 text-xl font-bold tracking-tight text-[var(--site-text)]">
            Professional Approach
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {workingStyles.map(style => (
              <span 
                key={style}
                className="inline-flex items-center rounded-xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-sm font-bold text-orange-700 shadow-lg shadow-orange-500/5 dark:text-orange-300"
              >
                <i className="fas fa-check-circle mr-2 opacity-70"></i>
                {style}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);