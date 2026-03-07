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
        className="mb-12 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
      >
        Skills &amp; Expertise
      </motion.h2>

      {/* Skills Container */}
      <div className="rounded-3xl border border-white/10 bg-white/60 p-8 backdrop-blur dark:bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:p-12">
        
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
              className="cursor-default inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-xs font-bold text-indigo-600 dark:text-indigo-300 shadow-sm sm:text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider Line */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50" />

        {/* Working Style Section */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={revealViewport}
          className="text-center"
        >
          <p className="mb-6 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
            Professional Approach
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {workingStyles.map(style => (
              <span 
                key={style}
                className="inline-flex items-center rounded-xl border border-purple-400/30 bg-purple-400/10 px-5 py-3 text-sm font-bold text-purple-600 dark:text-purple-300 shadow-lg shadow-purple-500/5"
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