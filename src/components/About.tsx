import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';

export const About: React.FC = () => (
  <section id="about" className="relative overflow-hidden py-20 sm:py-28">
    {/* Subtle Background Decorative Element */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-orange-500 blur-[120px]"></div>
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-6">
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mb-12 text-center"
      >
        <h2 className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500"></div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl backdrop-blur-xl sm:p-14"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-[var(--site-text)]">
            I am a passionate <span className="font-bold text-cyan-700 dark:text-cyan-300">Data Analyst and Python Developer</span> based in Addis Ababa.
            I am dedicated to turning complex data into clear, actionable insights and building intelligent automation systems that solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <i className="fas fa-chart-line text-cyan-600"></i>
                Data Expertise
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                With strong expertise in <strong>data extraction (ETL &amp; web scraping)</strong> and <strong>advanced analytics</strong>, I specialize in bridging the gap between raw information and strategic decision-making.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <i className="fas fa-laptop-code text-orange-500"></i>
                Visualization
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                I build <strong>interactive dashboards</strong> using Power BI and Tableau, helping organizations visualize their growth and identify key performance trends at a glance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);