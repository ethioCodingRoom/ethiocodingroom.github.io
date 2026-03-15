import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { fadeInUp, revealViewport } from '../../animations';

export const PersonalAbout: React.FC = () => (
  <section id="about" className="relative overflow-hidden py-20 sm:py-28">
    <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 opacity-10 pointer-events-none dark:opacity-20">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px]"></div>
      <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-orange-500 blur-[120px]"></div>
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-6">
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

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-8 shadow-2xl backdrop-blur-xl sm:p-14"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-[var(--site-text)]">
            I am a results-focused <span className="font-bold text-cyan-700 dark:text-cyan-300">Data Analyst and Python Developer</span> based in Addis Ababa.
            I turn complex datasets into practical insights, decision-ready dashboards, and automation solutions that improve business performance.
          </p>

          <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-5 dark:bg-slate-900/40">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
              <FaGraduationCap className="text-cyan-600" aria-hidden="true" />
              Education
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-500 text-[11px] font-extrabold text-white">AMU</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Arba Minch University</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">B.Sc. in Forensic Chemistry and Toxicology</span> (2014-2018)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 text-[11px] font-extrabold text-white">EPU</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Ethiopian Police University</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">Postgraduate Diploma in Police Science</span> (2019-2021)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 text-[11px] font-extrabold text-white">UoP</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">University of the People</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">B.Sc. in Computer Science</span> (2024-Present)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaChartLine className="text-cyan-600" aria-hidden="true" />
                Data Analytics
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                As a <strong>Data Analyst</strong>, I clean and analyze data, build insightful reports and dashboards, and turn raw information into clear recommendations that support better business decisions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaLaptopCode className="text-orange-500" aria-hidden="true" />
                Visualization
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                I build <strong>interactive dashboards</strong> in Power BI and Tableau to help teams track performance, identify trends early, and make faster data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);