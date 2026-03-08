import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, revealViewport } from '../animations';

const skills = [
  'Python', 'pandas', 'NumPy', 'BeautifulSoup', 'Selenium', 'Scrapy',
  'Plotly', 'Matplotlib', 'Seaborn', 'SQL', 'MySQL', 'PostgreSQL',
  'Microsoft Power BI', 'Tableau', 'DAX', 'Data Analysis', 'Data Cleaning',
  'ETL Pipeline', 'Web Scraping', 'API Integration', 'Google Sheets Automation',
  'Excel VBA', 'Statistical Analysis', 'Machine Learning', 'Scikit-learn', 'Data Visualization'
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
        
        {/* Technical Skills Grid */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {skills.map((skill) => (
            <motion.span 
              key={skill} 
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                backgroundColor: "rgba(99, 102, 241, 0.2)" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-flex cursor-default items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-700 shadow-sm dark:text-cyan-300 sm:text-sm"
            >
              {skill}
            </motion.span>
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