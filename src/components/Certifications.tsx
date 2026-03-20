import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';
import { useLanguage } from '../i18n';

const rawCerts = [
  {
    src: '/getting_started_with_tableau_analytics_vidhya.png',
    alt: 'Getting Started with Tableau',
    issuer: 'Analytics Vidhya',
    focus: 'Tableau foundations for beginner-level data visualization workflows and dashboard thinking.',
    impact: 'Strengthened my ability to create interactive visual stories and communicate insights more clearly using Tableau.',
    verifyUrl: 'https://courses.analyticsvidhya.com/certificates/xevjpje7cy',
    earnedLabel: 'March 15, 2026',
    earnedSort: 202603,
  },
  {
    src: '/introduction_to_sql_simplilearn.png',
    alt: 'Introduction to SQL',
    issuer: 'SkillUp by Simplilearn',
    focus: 'SQL basics including querying, filtering, and foundational database concepts for analytics work.',
    impact: 'Strengthened my ability to extract, organize, and analyze structured data using core SQL concepts.',
    verifyUrl: 'https://simpli-web.app.link/e/uRJPcomsw1b',
    earnedLabel: 'August 30, 2022',
    earnedSort: 202208,
  },
  {
    src: '/python_for_beginners_simplilearn.png',
    alt: 'Python for Beginners',
    issuer: 'SkillUp by Simplilearn',
    focus: 'Python basics for programming fundamentals, syntax, and beginner-friendly problem solving.',
    impact: 'Built a stronger foundation in Python programming that supports my analytics, automation, and data project work.',
    verifyUrl: 'https://simpli-web.app.link/e/bcY2Nytsw1b',
    earnedLabel: 'March 02, 2022',
    earnedSort: 202203,
  },
  {
    src: '/excel_for_beginners_great_learning.png',
    alt: 'Excel for Beginners',
    issuer: 'Great Learning Academy',
    focus: 'Spreadsheet foundations including formulas, tabular analysis, and practical Excel workflows for beginners.',
    impact: 'Improved my ability to structure, clean, and analyze data efficiently using Excel for reporting and decision support.',
    earnedLabel: 'November 20, 2021',
    earnedSort: 202111,
  },
  {
    src: '/cybersecurity_basics_protecting_your_data_in_the_digital_age.png',
    alt: 'Cybersecurity Basics: Protecting Your Data in the Digital Age',
    issuer: 'University of the People (Verified Webinar)',
    focus: 'Introductory 40-minute online webinar covering common cyber threats, data protection tools, and strong cyber hygiene practices.',
    impact: 'Gained practical skills in cybersecurity awareness, threat identification, data protection strategies, secure use of digital tools, and personal/professional data security.',
    earnedLabel: 'February 18, 2026',
    earnedSort: 202602,
  },
  {
    src: '/ask_questions_to_make_data_driven_decisions.png',
    alt: 'Ask Questions to Make Data-Driven Decisions',
    issuer: 'Google Data Analytics',
    focus: 'Problem framing and KPI thinking',
    impact: 'Strengthened my ability to translate business questions into measurable data analysis tasks.',
    earnedLabel: 'Oct 22, 2025',
    earnedSort: 202510,
  },
  {
    src: '/data_literacy_professional_datacamp.png',
    alt: 'Data Literacy Professional',
    issuer: 'DataCamp Skill Track',
    focus: 'Data understanding, communication, and storytelling for business decision-making',
    impact: 'Improved how I communicate insights clearly to both technical and non-technical stakeholders.',
    earnedLabel: 'July 03, 2025',
    earnedSort: 202507,
  },
  {
    src: '/github_foundations_datacamp.png',
    alt: 'GitHub Foundations',
    issuer: 'DataCamp Skill Track (with GitHub)',
    focus: 'Git, GitHub collaboration concepts, and product workflows aligned with GitHub Foundations certification prep',
    impact: 'Built strong collaboration habits for version control, pull requests, and team-based delivery.',
    earnedLabel: 'April 08, 2025',
    earnedSort: 202504,
  },

  {
  src: '/introduction_to_tableau.png',
  alt: 'Introduction to Tableau',
  issuer: 'DataCamp',
  focus: 'Tableau fundamentals, data visualization, dashboards, and data analysis',
  impact: 'Developed practical skills in building interactive dashboards, analyzing datasets, and applying data storytelling best practices using Tableau.',
  earnedLabel: 'Mar 01, 2026',
  earnedSort: 202603,
},
  {
    src: '/git_fundamentals_datacamp.png',
    alt: 'Git Fundamentals',
    issuer: 'DataCamp Skill Track',
    focus: 'Core to advanced Git workflows including branching, remotes, and efficient version control for team projects',
    impact: 'Improved my day-to-day code management with safer branching, merging, and release workflows.',
    earnedLabel: 'May 4, 2025',
    earnedSort: 202505,
  },
  {
    src: '/data_analysis_fundamentals_udacity.png',
    alt: 'Data Analysis Fundamentals (Nanodegree Program)',
    issuer: 'Udacity Nanodegree Program',
    focus: 'Descriptive statistics, spreadsheets, and business metrics for practical analytics decision-making',
    impact: 'Established a strong foundation in metrics and analytical thinking for business reporting.',
    earnedLabel: 'August 24, 2024',
    earnedSort: 202408,
  },
  {
    src: '/bsc_forensic_chemistry_toxicology_arba_minch_university.png',
    alt: 'BSc in Forensic Chemistry and Toxicology',
    issuer: 'Arba Minch University',
    focus: 'Bachelor of Science degree in forensic chemistry and toxicology (2014-2018)',
    impact: 'Built disciplined scientific analysis, evidence interpretation, and structured problem-solving skills.',
    earnedLabel: '2018',
    earnedSort: 201800,
  },
  {
    src: '/postgraduate_diploma_police_science_ethiopian_police_university.png',
    alt: 'Postgraduate Diploma in Police Science',
    issuer: 'Ethiopian Police University',
    focus: 'Postgraduate diploma in police science with formal academic completion (2019-2021)',
    impact: 'Strengthened professional judgment, ethics, and decision-making under operational constraints.',
    earnedLabel: '2021',
    earnedSort: 202100,
  },
  {
    src: '/data_analysis_and_visualization_with_python.jpg.png',
    alt: 'Data Analysis and Visualization with Python',
    issuer: 'Python Specialization',
    focus: 'Data exploration and storytelling visuals',
    impact: 'Enhanced my ability to build clear visual narratives from complex datasets using Python.',
    earnedLabel: 'Sep 2, 2025',
    earnedSort: 202509,
  },
  {
    src: '/foundations_data_data_everywhere.jpg.png',
    alt: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google Data Analytics',
    focus: 'Data lifecycle and analytics foundations',
    impact: 'Reinforced core data workflow knowledge from data collection to reporting and action.',
    earnedLabel: 'Oct 3, 2025',
    earnedSort: 202510,
  },
  {
    src: '/prepare_data_for_exploration.png',
    alt: 'Prepare Data for Exploration',
    issuer: 'Google Data Analytics',
    focus: 'Data collection and preparation workflows',
    impact: 'Improved my process for preparing clean, reliable datasets before analysis.',
    earnedLabel: 'Nov 8, 2025',
    earnedSort: 202511,
  },
  {
    src: '/process_data_from_dirty_to_clean.png',
    alt: 'Process Data from Dirty to Clean',
    issuer: 'Google Data Analytics',
    focus: 'Data quality, cleaning, and transformation',
    impact: 'Strengthened my practical skills in handling messy data and improving quality for decisions.',
    earnedLabel: 'Nov , 2025',
    earnedSort: 202511,
  },
  {
    src: '/python_programming_fundamentals.png',
    alt: 'Python Programming Fundamentals',
    issuer: 'Python Training Program',
    focus: 'Core Python for analytics automation',
    impact: 'Built solid Python fundamentals that support automation and repeatable analytics workflows.',
    earnedLabel: 'Aug 17, 2025',
    earnedSort: 202508,
  },

{
  src: '/introduction_to_power_bi.png',
  alt: 'Introduction to Power BI',
  issuer: 'DataCamp',
  focus: 'Power BI fundamentals, data modeling, Power Query, and data visualization',
  impact: 'Built strong skills in creating interactive dashboards, transforming data, and delivering insightful visual reports using Power BI.',
  earnedLabel: 'Mar 05, 2026',
  earnedSort: 202603,
},


  {
    src: '/version_control.png',
    alt: 'Version Control Certification',
    issuer: 'Developer Tools Track',
    focus: 'Git workflow and collaboration',
    impact: 'Improved project reliability through consistent versioning, traceability, and teamwork practices.',
    earnedLabel: 'Dec 2024',
    earnedSort: 202412,
  },
];

const certs = [...rawCerts].sort((a, b) => {
  if (b.earnedSort !== a.earnedSort) return b.earnedSort - a.earnedSort;
  return a.alt.localeCompare(b.alt);
});

const tableauPublicWork = {
  title: 'Tableau Public Portfolio',
  description: 'Explore my published Tableau dashboards and data stories as part of my practical analytics accomplishments.',
  link: 'https://public.tableau.com/app/profile/asres.yelia/vizzes',
};

const amText = {
  sectionTitle: 'ሰርቲፊኬቶች እና ስኬቶች',
  sectionSubtitle: 'በዳታ ትንታኔ፣ ፓይቶን እና ሙያዊ እድገት የተረጋገጡ ስኬቶች።',
  workLabel: 'ስራ እና ስኬት',
  workTitle: 'የTableau Public ፖርትፎሊዮ',
  workDescription: 'በTableau Public ላይ የታተሙ ዳሽቦርዶቼን እና የዳታ ታሪኮቼን ይመልከቱ።',
  viewTableau: 'የTableau ስራዬን ይመልከቱ',
  previous: 'ቀዳሚ',
  next: 'ቀጣይ',
  verified: 'የተረጋገጠ ሰርቲፊኬት',
  issuer: 'አቅራቢ',
  focus: 'ትኩረት',
  earnedOn: 'የተገኘበት ጊዜ',
  viewCertificate: 'ሰርቲፊኬቱን ይመልከቱ',
  close: 'ዝጋ',
};

export const Certifications: React.FC = () => {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const enableHoverFx = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return !prefersReducedMotion && !coarsePointer;
  }, []);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(certs.length / pageSize));
  const [currentPage, setCurrentPage] = useState(0);
  const selectedCert = selectedIndex !== null ? certs[selectedIndex] : null;
  const pageStart = currentPage * pageSize;
  const visibleCerts = certs.slice(pageStart, pageStart + pageSize);

  const showPrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const showNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handleCardMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enableHoverFx) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

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

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + certs.length) % certs.length);
  }, [selectedIndex]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % certs.length);
  }, [selectedIndex]);

  useEffect(() => {
    if (totalPages <= 1) return;

    // Advance to the next certificate group after 30s of no page change.
    const timer = window.setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 30000);

    return () => window.clearTimeout(timer);
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    // Lock page scroll and enable keyboard navigation while modal is open.
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Tab') {
        const root = modalRef.current;
        if (!root) return;

        const focusables = root.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const root = modalRef.current;
    if (!root) return;

    const firstFocusable = root.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();
  }, [selectedIndex]);

  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}
          className="mb-4 bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        >
          {language === 'en' ? 'Certifications & Achievements' : amText.sectionTitle}
        </motion.h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-[var(--site-muted)]">
          {language === 'en' ? 'Verified achievements across data analysis, Python, and professional development tracks.' : amText.sectionSubtitle}
        </p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-8 rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 p-5 shadow-lg"
        >
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-200">
            {language === 'en' ? 'Accomplishment & Work' : amText.workLabel}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-[var(--site-text)]">
            {language === 'en' ? tableauPublicWork.title : amText.workTitle}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--site-muted)]">
            {language === 'en' ? tableauPublicWork.description : amText.workDescription}
          </p>
          <a
            href={tableauPublicWork.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-800/25"
          >
            {language === 'en' ? 'View My Tableau Work' : amText.viewTableau}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleCerts.map((c, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ boxShadow: '0 20px 44px rgba(8, 145, 178, 0.24)' }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => setSelectedIndex(pageStart + index)}
              className="group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-4 shadow-lg backdrop-blur-sm [--mx:50%] [--my:50%] [--rx:0deg] [--ry:0deg]"
              style={{
                transform: 'perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))',
                transition: 'transform 180ms ease-out, box-shadow 180ms ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(200px circle at var(--mx) var(--my), rgba(6, 182, 212, 0.14), rgba(249, 115, 22, 0.08) 38%, transparent 72%)',
                }}
              />
              <div className="mb-4 rounded-lg bg-gradient-to-br from-cyan-200 to-orange-200 p-2 shadow-md dark:from-cyan-900/60 dark:to-orange-900/50">
                <div className="rounded-sm bg-white p-1 dark:bg-slate-950">
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={640}
                    sizes="(max-width: 768px) 92vw, 44vw"
                    className="h-64 w-full object-contain"
                  />
                </div>
              </div>
              <p className="flex h-12 items-center justify-center px-2 text-center text-sm font-bold text-[var(--site-muted)]">
                {c.alt}
              </p>
              <p className="mt-1 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-cyan-700 dark:text-cyan-300">
                {c.earnedLabel}
              </p>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={showPrevPage}
              className="rounded-lg border border-[var(--site-border)] bg-[var(--site-panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--site-muted)] hover:border-cyan-500/60 hover:text-cyan-600"
            >
              {language === 'en' ? 'Previous' : amText.previous}
            </button>
            <button
              type="button"
              onClick={showNextPage}
              className="rounded-lg border border-[var(--site-border)] bg-[var(--site-panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--site-muted)] hover:border-cyan-500/60 hover:text-cyan-600"
            >
              {language === 'en' ? 'Next' : amText.next}
            </button>
          </div>
        )}
      </div>

      {/* Decorative Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-2 backdrop-blur-md sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              onClick={(e) => e.stopPropagation()}
              className="relative h-[94vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 shadow-2xl"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative grid h-full grid-cols-1 gap-0 lg:grid-cols-[1.7fr_0.7fr]">
                <div className="flex min-h-0 items-center justify-center border-b border-white/10 p-2 lg:border-b-0 lg:border-r lg:p-4">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white p-2 shadow-xl">
                    <img
                      src={selectedCert.src}
                      alt={selectedCert.alt}
                      decoding="async"
                      loading="lazy"
                      width={1400}
                      height={990}
                      sizes="(max-width: 1024px) 92vw, 68vw"
                      className="max-h-[88vh] w-full rounded-xl object-contain"
                    />
                  </div>
                </div>

                <div className="overflow-y-auto p-5 lg:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                      {selectedIndex !== null ? `${selectedIndex + 1} / ${certs.length}` : ''}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={showPrev}
                        className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20"
                      >
                        {language === 'en' ? 'Prev' : amText.previous}
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20"
                      >
                        {language === 'en' ? 'Next' : amText.next}
                      </button>
                    </div>
                  </div>

                  <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan-200">
                    {language === 'en' ? 'Verified Certification' : amText.verified}
                  </p>
                  <h3 id="cert-modal-title" className="mt-4 text-2xl font-extrabold leading-tight text-white">
                    {selectedCert.alt}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-orange-200">
                    {language === 'en' ? 'Issuer' : amText.issuer}: {selectedCert.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {language === 'en' ? 'Focus' : amText.focus}: {selectedCert.focus}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {language === 'en' ? 'Earned On' : amText.earnedOn}: {selectedCert.earnedLabel}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {selectedCert.impact}
                  </div>

                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-bold text-cyan-100 hover:bg-cyan-400/20"
                    >
                      {language === 'en' ? 'View Certificate' : amText.viewCertificate}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-800/30"
                  >
                    {language === 'en' ? 'Close' : amText.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};