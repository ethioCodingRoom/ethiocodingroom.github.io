import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { fadeInUp, revealViewport } from '../animations';
import { useLanguage } from '../i18n';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
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
          {isAm ? 'ስለ እኔ' : 'About Me'}
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
            {isAm ? 'እኔ በውጤት ላይ የምተኩር ' : 'I am a results-focused '}
            <span className="font-bold text-cyan-700 dark:text-cyan-300">
              {isAm ? 'Data Analyst እና Python Developer' : 'Data Analyst and Python Developer'}
            </span>
            {isAm
              ? ' በአዲስ አበባ የተመሠረትኩ ነኝ። ውስብስብ ዳታን ወደ ተግባራዊ ግንዛቤ፣ ዝግጁ የውሳኔ ዳሽቦርድ እና የአውቶሜሽን መፍትሄ እቀይራለሁ።'
              : ' based in Addis Ababa. I turn complex datasets into practical insights, decision-ready dashboards, and automation solutions that improve business performance.'}
          </p>

          <div className="rounded-2xl border border-[var(--site-border)] bg-white/60 p-5 dark:bg-slate-900/40">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
              <FaGraduationCap className="text-cyan-600" aria-hidden="true" />
              {isAm ? 'ትምህርት' : 'Education'}
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-500 text-[11px] font-extrabold text-white">AMU</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Arba Minch University</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">{isAm ? 'B.Sc. በForensic Chemistry and Toxicology' : 'B.Sc. in Forensic Chemistry and Toxicology'}</span> (2014-2018)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 text-[11px] font-extrabold text-white">EPU</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">Ethiopian Police University</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">{isAm ? 'Postgraduate Diploma በPolice Science' : 'Postgraduate Diploma in Police Science'}</span> (2019-2021)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 text-[11px] font-extrabold text-white">UoP</span>
                <span>
                  <span className="font-semibold text-[var(--site-text)]">University of the People</span>
                  <span className="block"><span className="font-semibold text-[var(--site-text)]">{isAm ? 'B.Sc. በComputer Science' : 'B.Sc. in Computer Science'}</span> (2024-Present)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaChartLine className="text-cyan-600" aria-hidden="true" />
                {isAm ? 'ዳታ ትንታኔ' : 'Data Analytics'}
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                {isAm
                  ? 'እንደ '
                  : 'As a '}
                <strong>Data Analyst</strong>
                {isAm
                  ? ' ዳታን እንጽዳለሁ፣ እተንትናለሁ፣ ግልጽ ሪፖርቶችና ዳሽቦርዶች እገነባለሁ፣ እና ጥሬ መረጃን ለተሻለ የንግድ ውሳኔ ወደ ግልጽ ምክሮች እቀይራለሁ።'
                  : ', I clean and analyze data, build insightful reports and dashboards, and turn raw information into clear recommendations that support better business decisions.'}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--site-text)]">
                <FaLaptopCode className="text-orange-500" aria-hidden="true" />
                {isAm ? 'የዳታ ማቅረብ' : 'Visualization'}
              </h3>
              <p className="leading-relaxed text-[var(--site-muted)]">
                {isAm
                  ? 'በPower BI እና Tableau '
                  : 'I build '}
                <strong>{isAm ? 'interactive dashboards' : 'interactive dashboards'}</strong>
                {isAm
                  ? ' እገነባለሁ፤ ይህም ቡድኖች አፈጻጸም እንዲከታተሉ፣ አዝማሚያዎችን ቀድሞ እንዲያዩ እና ፈጣን የዳታ የተመሰረተ ውሳኔ እንዲወስኑ ያግዛል።'
                  : ' in Power BI and Tableau to help teams track performance, identify trends early, and make faster data-driven decisions.'}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};