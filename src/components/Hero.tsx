import React from 'react';
import { motion } from 'framer-motion';
import { Typing } from './Typing';
import Reveal from './Reveal';
import { fadeInUp, staggerContainer } from '../animations';
import { useLanguage } from '../i18n';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const isAm = language === 'am';

  const titleLead = isAm ? 'ውስብስብ ዳታን ወደ' : 'Turning Complex Data Into';
  const titleHighlight = isAm ? 'ግልጽ የንግድ ውሳኔዎች' : 'Clear Business Decisions';
  const titleTail = '';
  const roleWords = isAm
    ? ['የዳታ ተንታኝ', 'Python ዲቨሎፐር', 'Tableau ዲቨሎፐር', 'BI ዲቨሎፐር']
    : ['Data Analyst', 'Python Developer', 'Tableau Developer', 'BI Developer'];

  return (
  <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,229,0.22),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(30,64,175,0.24),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(8,145,178,0.16),transparent_45%)]" />
    <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto max-w-6xl"
    >
      <div className="rounded-[2rem] border border-cyan-500/20 bg-[linear-gradient(135deg,rgba(3,11,26,0.9),rgba(3,11,26,0.72))] px-6 py-12 shadow-[0_0_120px_rgba(14,165,233,0.14)] backdrop-blur-xl sm:px-10 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
        <motion.p
          variants={fadeInUp}
          className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-200"
        >
          {isAm ? 'የዳታ አናሊቲክስ አገልግሎቶች' : 'Empowering Data Analysts'}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-7 text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] text-slate-100 sm:text-6xl md:text-7xl"
        >
          {titleLead}
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
          {!!titleTail && <span className="block text-slate-200">{isAm ? '' : titleTail}</span>}
        </motion.h1>

        <Reveal>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg font-semibold text-slate-300 sm:text-xl"
          >
            <Typing words={roleWords} />
          </motion.p>
        </Reveal>

        <motion.p
          variants={fadeInUp}
          className="mt-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-cyan-200"
        >
          {isAm ? 'ETL | SQL | Python | Power BI | Tableau' : 'ETL | SQL | Python | Power BI | Tableau'}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-2xl"
        >
          {isAm
            ? 'ቅጥር አስተዳዳሪ ከሆኑ እባክዎ አግኙኝ። ጥሬ ዳታን ወደ ግልጽ ሪፖርቶች እና ተግባራዊ የንግድ ውሳኔዎች እቀይራለሁ።'
            : 'I turn raw data into clear dashboards, actionable insights, and confident business decisions.'}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200">
            {isAm ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}
          </span>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200">
            {isAm ? 'ሙሉ ጊዜ፣ ኮንትራት እና ሪሞት ስራዎች ክፍት ነኝ' : 'Open to full-time, contract, and remote roles'}
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 px-8 py-3 font-bold text-white shadow-xl shadow-cyan-900/40 transition hover:-translate-y-0.5"
          >
            {isAm ? 'ስራ እድል እንወያይ' : 'Discuss Role Fit'}
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-8 py-3 font-bold text-slate-100 transition hover:border-cyan-400/60"
          >
            {isAm ? 'ኬዝ ስታዲዎችን ይመልከቱ' : 'View Case Studies'}
          </a>
        </motion.div>

          </div>

          <motion.div variants={fadeInUp} className="mx-auto w-full max-w-sm sm:max-w-md">
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/55 p-4 shadow-2xl backdrop-blur">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-blue-500/25 blur-3xl" />

              <img
                src="/Asres.jpg"
                alt="Asres Gamu Yelia"
                width={768}
                height={1024}
                decoding="async"
                fetchPriority="high"
                loading="eager"
                sizes="(max-width: 1024px) 80vw, 420px"
                className="h-[22rem] w-full rounded-[1.4rem] object-cover sm:h-[26rem]"
              />

              <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900/65 p-4">
                <p className="text-sm font-bold text-cyan-300">{isAm ? 'የአሁኑ ትኩረት' : 'Current Focus'}</p>
                <p className="mt-1 text-sm text-slate-300">
                  {isAm
                    ? 'የተግባር ዳሽቦርዶች፣ አውቶሜትድ ሪፖርቶች እና ETL ፕሮጀክቶች።'
                    : 'Interactive dashboards, reporting automation, and end-to-end analytics projects.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
  );
};
