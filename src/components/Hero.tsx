import React from 'react';
import { motion } from 'framer-motion';
import { Typing } from './Typing';
import Reveal from './Reveal'; // <-- Reveal import
import { fadeInUp, staggerContainer } from '../animations';

export const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative bg-[linear-gradient(135deg,#0d0d1a_0%,#111827_60%,#0f172a_100%)] py-20 text-white sm:py-32"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Photo Container */}
      <motion.div variants={fadeInUp} className="flex-shrink-0">
        <img
          src="/Asres.jpg"
          alt="Asres Gamu Yelia"
          className="h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-white/60 shadow-2xl shadow-indigo-500/35 object-cover"
        />
      </motion.div>

      {/* Text/Content Container */}
      <div className="text-center md:text-left">
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
        >
         Welcome to My Portfolio, I'm Asres Gamu Yelia
        </motion.h1>

        {/* Typing animation wrapped in Reveal */}
        <Reveal>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-2xl font-light sm:text-3xl text-indigo-300"
          >
            <Typing words={['Data Analyst', 'Python Developer', 'Tableau Developer', 'BI Developer']} />
          </motion.p>
        </Reveal>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-lg opacity-90 leading-relaxed"
        >
          Data Analyst | Python Developer | Tableau Developer | BI Developer / 
          SQL | Excel | Data Visualization | Machine Learning
        </motion.p>

        {/* Location & connections */}
        <motion.p variants={fadeInUp} className="mt-2 text-base opacity-75 italic">
          Addis Ababa, Ethiopia • 500+ connections
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex justify-center md:justify-start gap-4"
        >
          <a
            href="https://www.linkedin.com/in/ethiocodingroom"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-xl hover:bg-indigo-700 transition-all"
          >
            View LinkedIn
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 font-bold text-white hover:bg-white/10 transition-all"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);