import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { fadeInUp, staggerContainer, revealViewport } from '../animations';
import { useLanguage } from '../i18n';

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

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const isAm = language === 'am';

  const categoryTitleMap: Record<string, string> = {
    'Data Analytics': 'ዳታ ትንታኔ',
    'Business Intelligence': 'ቢዝነስ ኢንተለጀንስ',
    'Programming & Scripting': 'ፕሮግራሚንግ እና ስክሪፕቲንግ',
    'Databases & Modeling': 'ዳታቤዞች እና ሞዴሊንግ',
    'Automation & Reporting': 'አውቶሜሽን እና ሪፖርቲንግ',
    'Data Science Tools': 'የዳታ ሳይንስ መሳሪያዎች',
  };

  const stylesAm = ['ለመፍትሄ የሚተኩር', 'ለዝርዝር የሚጠነቀቅ', 'አስተማማኝ አቅርቦት'];
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
      {/* Section Heading */}
      <motion.h2 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={revealViewport}
        className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
      >
        {isAm ? 'ክህሎቶች እና ሙያዊ ብቃት' : 'Skills & Expertise'}
      </motion.h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
        {isAm
          ? 'አስተማማኝ የአናሊቲክስ ስርዓቶችን እና ሪፖርቲንግ ልምዶችን ለመገንባት የምጠቀምባቸው መሳሪያዎች እና ቴክኖሎጂዎች።'
          : 'Tools and technologies I use to build reliable analytics systems and reporting experiences.'}
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
                {isAm ? (categoryTitleMap[category.title] ?? category.title) : category.title}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2.5">
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
            {isAm ? 'ሙያዊ አቀራረብ' : 'Professional Approach'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {(isAm ? stylesAm : workingStyles).map(style => (
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