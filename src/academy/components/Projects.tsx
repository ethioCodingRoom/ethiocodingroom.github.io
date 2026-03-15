import React from 'react';
import { motion } from 'framer-motion';
import { hoverCard, fadeInUp, revealViewport, staggerContainer } from '../../animations';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  outcomes?: string[];
  img: string;
  images?: string[];
  gh: string;
  live: string;
  liveLabel?: string;
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: 'Applied Data Analytics Path',
    desc: 'A guided path for learners who want to clean data, explore business questions, and turn raw datasets into visual insight.',
    tags: ['Analytics', 'SQL', 'Pandas'],
    outcomes: ['6 analytics modules', '3 portfolio dashboards'],
    img: '/projects/spotify/images/spotify_avg_popularity_by_genre.png',
    images: [
      '/projects/spotify/images/spotify_avg_popularity_by_genre.png',
      '/projects/spotify/images/spotify_danceability_vs_popularity.png',
      '/projects/spotify/images/spotify_top_vs_bottom_audio_profile.png',
      '/projects/spotify/images/spotify_correlation_matrix.png',
    ],
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Introduces querying, exploratory analysis, data cleaning, and dashboard presentation.',
      'Ends with a portfolio-ready business reporting project.',
    ],
  },
  {
    title: 'Machine Learning Starter Lab',
    desc: 'An applied machine learning path for learners building intuition around models, metrics, and practical prediction tasks.',
    tags: ['Machine Learning', 'Python', 'Models'],
    outcomes: ['20+ labs', '2 supervised ML projects'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Moves from model intuition into training, evaluation, and error analysis.',
      'Designed for students preparing for real ML portfolio work.',
    ],
  },
  {
    title: 'Deep Learning Foundations',
    desc: 'A focused path into neural networks, training loops, and practical deep learning concepts for image and text tasks.',
    tags: ['Deep Learning', 'PyTorch', 'AI'],
    outcomes: ['4 model labs', 'Hands-on tensor workflows'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Students practice working with tensors, loss functions, and model behavior.',
      'Built to support future NLP and computer vision specialization tracks.',
    ],
  },
  {
    title: 'Data Engineering Pipeline Sprint',
    desc: 'A guided sprint where learners assemble ingestion, transformation, and reporting flows from multiple data sources.',
    tags: ['Data Engineering', 'ETL', 'Pipelines'],
    outcomes: ['1 finished pipeline', 'Warehouse-ready flow'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Helps students understand data movement, reliability, and transformation design.',
      'Pairs pipeline thinking with practical SQL and API integration work.',
    ],
  },
  {
    title: 'Applied AI Workshops',
    desc: 'Live sessions planned around AI tools, ML workflows, and model-driven product ideas with guided walkthroughs.',
    tags: ['AI', 'Workshops', 'Live'],
    outcomes: ['Weekly sessions', 'Replay-ready resources'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Ideal for students who want live explanation around fast-moving AI topics.',
      'Will later pair naturally with registrations and attendance tracking.',
    ],
  },
  {
    title: 'Research And Resource Library',
    desc: 'A growing collection of articles, notebooks, papers, and starter kits to support data and AI learning paths.',
    tags: ['Resources', 'AI', 'Research'],
    outcomes: ['Curated study paths', 'Self-paced support'],
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
    highlights: [
      'Fills the gap between formal course pages and independent technical study.',
      'Designed to become searchable once a backend and CMS are connected.',
    ],
  },
];

export const Projects: React.FC = () => {
  const [imageStep, setImageStep] = React.useState(0);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const enableHoverFx = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return !prefersReducedMotion && !coarsePointer;
  }, []);

  // Build filter chips from all project tags while preserving a stable order.
  const filters = React.useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    return ['All', ...Array.from(tagSet)];
  }, []);

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  // Update CSS variables so each card can render a mouse-follow glow on hover.
  const handleCardMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!enableHoverFx) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
    e.currentTarget.style.setProperty('--rx', `${rotateX}deg`);
    e.currentTarget.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleCardMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!enableHoverFx) return;

    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  };

  React.useEffect(() => {
    // Advance a global frame index used by projects that provide image galleries.
    const timer = window.setInterval(() => {
      setImageStep((prev) => prev + 1);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="mb-4 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl"
      >
        Featured Courses And Experiences
      </motion.h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
        Course cards and niche learning offers for data science, ML, AI, data engineering, and deep learning.
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition ${
              activeFilter === filter
                ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-700 dark:text-cyan-200'
                : 'border-[var(--site-border)] bg-[var(--site-panel)] text-[var(--site-muted)] hover:border-cyan-500/40 hover:text-[var(--site-text)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(p => (
            <motion.article key={p.title} variants={fadeInUp}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="group relative overflow-hidden rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 backdrop-blur [--mx:50%] [--my:50%] [--rx:0deg] [--ry:0deg]"
            style={{
              transform: 'perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))',
              transition: enableHoverFx ? 'transform 180ms ease-out' : 'none',
              transformStyle: 'preserve-3d',
            }}
            animate="rest" whileHover="hover">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(220px circle at var(--mx) var(--my), rgba(6, 182, 212, 0.16), rgba(249, 115, 22, 0.08) 35%, transparent 70%)',
              }}
            />
            <motion.div variants={hoverCard} className="relative z-10 rounded-2xl">
              <div className="mb-5 overflow-hidden rounded-xl">
                <img
                  // If a project has multiple images, cycle through them using imageStep.
                  src={p.images?.length ? p.images[imageStep % p.images.length] : p.img}
                  alt={p.title}
                  width={1200}
                  height={675}
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-slate-100">{p.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--site-muted)]">{p.desc}</p>
              {p.outcomes && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.outcomes.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-full border border-emerald-700/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                      {item}
                    </span>
                  ))}
                </div>
              )}
              {p.highlights && (
                <ul className="mb-4 space-y-1 text-sm text-[var(--site-muted)]">
                  {p.highlights.map(item => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              )}
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-700 dark:text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a className="font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300" href={p.gh} target="_blank" rel="noreferrer">Platform Profile ↗</a>
                {p.live !== '#' && (
                  <a className="font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300" href={p.live} target="_blank" rel="noreferrer">{p.liveLabel ?? 'Course Preview'} ↗</a>
                )}
              </div>
            </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
