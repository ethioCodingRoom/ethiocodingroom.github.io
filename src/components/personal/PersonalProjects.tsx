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
    title: 'Spotify Popularity Analysis',
    desc: 'Analyzed 232,000+ Spotify tracks using Python to identify how danceability, genre context, and combined audio-feature patterns influence song popularity.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Jupyter'],
    outcomes: ['232K+ tracks analyzed', 'Top 10% vs Bottom 10% comparison'],
    img: '/projects/spotify/images/spotify_avg_popularity_by_genre.png',
    images: [
      '/projects/spotify/images/spotify_avg_popularity_by_genre.png',
      '/projects/spotify/images/spotify_danceability_vs_popularity.png',
      '/projects/spotify/images/spotify_top_vs_bottom_audio_profile.png',
      '/projects/spotify/images/spotify_correlation_matrix.png',
    ],
    gh: 'https://github.com/ethioCodingRoom/music-streaming-data-analytics',
    live: 'https://github.com/ethioCodingRoom/music-streaming-data-analytics/blob/main/notebooks/spotify_analysis.ipynb',
    liveLabel: 'Open Notebook',
    highlights: [
      'Built feature engineering layers including popularity categories, tempo groups, and mood scoring.',
      'Compared top 10% vs bottom 10% songs and found popularity is a multi-feature signal, not a single-metric effect.',
    ],
  },
  {
    title: 'Real Estate Price Scraper',
    desc: 'Engineered a resilient web scraping pipeline that captures 10,000+ listings per day with high data quality for pricing and market analysis.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MySQL'],
    outcomes: ['10,000+ listings/day', 'High data quality pipeline'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Customer Segmentation ML',
    desc: 'Developed customer segmentation using RFM and K-means on 50,000+ records, enabling more targeted campaigns and stronger conversion outcomes.',
    tags: ['Python', 'Scikit-learn', 'Plotly', 'pandas'],
    outcomes: ['50,000+ customer records', 'Improved campaign targeting'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Automated ETL Data Pipeline',
    desc: 'Designed a scalable ETL pipeline processing 1GB+ daily from multiple sources, reducing manual reporting effort by 80%.',
    tags: ['Python', 'pandas', 'PostgreSQL', 'API'],
    outcomes: ['1GB+ data/day', '80% manual effort reduction'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Interactive Finance Dashboard',
    desc: 'Created an executive Tableau dashboard with KPI drill-downs that improved visibility into performance and sped up decision cycles.',
    tags: ['Tableau', 'SQL', 'DAX', 'Excel'],
    outcomes: ['Executive KPI visibility', 'Faster decision cycles'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Social Media Analytics Tool',
    desc: 'Built a multi-platform social analytics tool that integrates APIs and visualizes engagement trends for campaign performance tracking.',
    tags: ['Python', 'API Integration', 'Matplotlib', 'Seaborn'],
    outcomes: ['Multi-platform insights', 'Campaign trend tracking'],
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
];

export const PersonalProjects: React.FC = () => {
  const [imageStep, setImageStep] = React.useState(0);
  const [activeFilter, setActiveFilter] = React.useState('All');
  const enableHoverFx = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    return !prefersReducedMotion && !coarsePointer;
  }, []);

  const filters = React.useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    return ['All', ...Array.from(tagSet)];
  }, []);

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

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
          Featured Projects
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          A selection of practical analytics and automation work focused on measurable outcomes.
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="group relative overflow-hidden rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 backdrop-blur [--mx:50%] [--my:50%] [--rx:0deg] [--ry:0deg]"
              style={{
                transform: 'perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))',
                transition: enableHoverFx ? 'transform 180ms ease-out' : 'none',
                transformStyle: 'preserve-3d',
              }}
              animate="rest"
              whileHover="hover"
            >
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
                    src={project.images?.length ? project.images[imageStep % project.images.length] : project.img}
                    alt={project.title}
                    width={1200}
                    height={675}
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--site-muted)]">{project.desc}</p>
                {project.outcomes && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.outcomes.map((item) => (
                      <span key={item} className="inline-flex items-center rounded-full border border-emerald-700/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {project.highlights && (
                  <ul className="mb-4 space-y-1 text-sm text-[var(--site-muted)]">
                    {project.highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                )}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-700 dark:text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a className="font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300" href={project.gh} target="_blank" rel="noreferrer">Source Code ↗</a>
                  {project.live !== '#' && (
                    <a className="font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300" href={project.live} target="_blank" rel="noreferrer">{project.liveLabel ?? 'Project Showcase'} ↗</a>
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