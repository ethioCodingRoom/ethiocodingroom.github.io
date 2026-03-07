import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';

export const About: React.FC = () => (
  <section id="about" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-800 dark:to-gray-900 sm:py-28">
    {/* Subtle Background Decorative Element */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
       <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]"></div>
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
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="mt-4 mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="rounded-3xl border border-white/20 bg-white/40 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 shadow-2xl sm:p-14"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            I am a passionate <span className="font-bold text-indigo-600 dark:text-indigo-400">Data Analyst and Python Developer</span> based in Addis Ababa. 
            I am dedicated to turning complex data into clear, actionable insights and building intelligent automation systems that solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i className="fas fa-chart-line text-indigo-500"></i>
                Data Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With strong expertise in <strong>data extraction (ETL &amp; web scraping)</strong> and <strong>advanced analytics</strong>, I specialize in bridging the gap between raw information and strategic decision-making.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i className="fas fa-laptop-code text-purple-500"></i>
                Visualization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I build <strong>interactive dashboards</strong> using Power BI and Tableau, helping organizations visualize their growth and identify key performance trends at a glance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);