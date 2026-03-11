import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';

const certs = [
  {
    src: '/ask_questions_to_make_data_driven_decisions.png',
    alt: 'Ask Questions to Make Data-Driven Decisions',
    issuer: 'Google Data Analytics',
    focus: 'Problem framing and KPI thinking',
    impact: 'Strengthened my ability to translate business questions into measurable data analysis tasks.',
  },
  {
    src: '/data_literacy_professional_datacamp.png',
    alt: 'Data Literacy Professional',
    issuer: 'DataCamp Skill Track',
    focus: 'Data understanding, communication, and storytelling for business decision-making',
    impact: 'Improved how I communicate insights clearly to both technical and non-technical stakeholders.',
  },
  {
    src: '/github_foundations_datacamp.png',
    alt: 'GitHub Foundations',
    issuer: 'DataCamp Skill Track (with GitHub)',
    focus: 'Git, GitHub collaboration concepts, and product workflows aligned with GitHub Foundations certification prep',
    impact: 'Built strong collaboration habits for version control, pull requests, and team-based delivery.',
  },
  {
    src: '/git_fundamentals_datacamp.png',
    alt: 'Git Fundamentals',
    issuer: 'DataCamp Skill Track',
    focus: 'Core to advanced Git workflows including branching, remotes, and efficient version control for team projects',
    impact: 'Improved my day-to-day code management with safer branching, merging, and release workflows.',
  },
  {
    src: '/data_analysis_fundamentals_udacity.png',
    alt: 'Data Analysis Fundamentals (Nanodegree Program)',
    issuer: 'Udacity Nanodegree Program',
    focus: 'Descriptive statistics, spreadsheets, and business metrics for practical analytics decision-making',
    impact: 'Established a strong foundation in metrics and analytical thinking for business reporting.',
  },
  {
    src: '/bsc_forensic_chemistry_toxicology_arba_minch_university.png',
    alt: 'BSc in Forensic Chemistry and Toxicology',
    issuer: 'Arba Minch University',
    focus: 'Bachelor of Science degree in forensic chemistry and toxicology (2014-2018)',
    impact: 'Built disciplined scientific analysis, evidence interpretation, and structured problem-solving skills.',
  },
  {
    src: '/postgraduate_diploma_police_science_ethiopian_police_university.png',
    alt: 'Postgraduate Diploma in Police Science',
    issuer: 'Ethiopian Police University',
    focus: 'Postgraduate diploma in police science with formal academic completion (2019-2021)',
    impact: 'Strengthened professional judgment, ethics, and decision-making under operational constraints.',
  },
  {
    src: '/data_analysis_and_visualization_with_python.jpg.png',
    alt: 'Data Analysis and Visualization with Python',
    issuer: 'Python Specialization',
    focus: 'Data exploration and storytelling visuals',
    impact: 'Enhanced my ability to build clear visual narratives from complex datasets using Python.',
  },
  {
    src: '/foundations_data_data_everywhere.jpg.png',
    alt: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google Data Analytics',
    focus: 'Data lifecycle and analytics foundations',
    impact: 'Reinforced core data workflow knowledge from data collection to reporting and action.',
  },
  {
    src: '/prepare_data_for_exploration.png',
    alt: 'Prepare Data for Exploration',
    issuer: 'Google Data Analytics',
    focus: 'Data collection and preparation workflows',
    impact: 'Improved my process for preparing clean, reliable datasets before analysis.',
  },
  {
    src: '/process_data_from_dirty_to_clean.png',
    alt: 'Process Data from Dirty to Clean',
    issuer: 'Google Data Analytics',
    focus: 'Data quality, cleaning, and transformation',
    impact: 'Strengthened my practical skills in handling messy data and improving quality for decisions.',
  },
  {
    src: '/python_programming_fundamentals.png',
    alt: 'Python Programming Fundamentals',
    issuer: 'Python Training Program',
    focus: 'Core Python for analytics automation',
    impact: 'Built solid Python fundamentals that support automation and repeatable analytics workflows.',
  },
  {
    src: '/version_control.png',
    alt: 'Version Control Certification',
    issuer: 'Developer Tools Track',
    focus: 'Git workflow and collaboration',
    impact: 'Improved project reliability through consistent versioning, traceability, and teamwork practices.',
  },
];

export const Certifications: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const enableHoverFx = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return !prefersReducedMotion && !coarsePointer;
  }, []);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(certs.length / pageSize));
  const [currentPage, setCurrentPage] = useState(0);
  const selectedCert = selectedIndex !== null ? certs[selectedIndex] : null;
  const pageStart = currentPage * pageSize;
  const visibleCerts = certs.slice(pageStart, pageStart + pageSize);

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

    // Rotate certificate groups automatically to keep the grid dynamic.
    const timer = window.setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 60000);

    return () => window.clearInterval(timer);
  }, [totalPages]);

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
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}
          className="mb-4 bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        >
          Certifications & Achievements
        </motion.h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-[var(--site-muted)]">
          Verified achievements across data analysis, Python, and professional development tracks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <img src={c.src} alt={c.alt} loading="lazy" className="h-48 w-full object-contain" />
                </div>
              </div>
              <p className="flex h-12 items-center justify-center px-2 text-center text-sm font-bold text-[var(--site-muted)]">
                {c.alt}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--site-muted)]">
          Auto-rotating groups of 6 every 1 minute ({currentPage + 1}/{totalPages})
        </p>
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
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/20"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan-200">
                    Verified Certification
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">
                    {selectedCert.alt}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-orange-200">
                    Issuer: {selectedCert.issuer}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Focus: {selectedCert.focus}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {selectedCert.impact}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-800/30"
                  >
                    Close
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