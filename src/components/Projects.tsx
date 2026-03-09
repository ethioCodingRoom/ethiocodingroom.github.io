import React from 'react';
import { motion } from 'framer-motion';
import { hoverCard, fadeInUp, revealViewport, staggerContainer } from '../animations';

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
    tags: ['Python','Pandas','NumPy','Seaborn','Jupyter'],
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
    tags: ['Python','Selenium','BeautifulSoup','MySQL'],
    outcomes: ['10,000+ listings/day', 'High data quality pipeline'],
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Customer Segmentation ML',
    desc: 'Developed customer segmentation using RFM and K-means on 50,000+ records, enabling more targeted campaigns and stronger conversion outcomes.',
    tags: ['Python','Scikit-learn','Plotly','pandas'],
    outcomes: ['50,000+ customer records', 'Improved campaign targeting'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Automated ETL Data Pipeline',
    desc: 'Designed a scalable ETL pipeline processing 1GB+ daily from multiple sources, reducing manual reporting effort by 80%.',
    tags: ['Python','pandas','PostgreSQL','API'],
    outcomes: ['1GB+ data/day', '80% manual effort reduction'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Interactive Finance Dashboard',
    desc: 'Created an executive Tableau dashboard with KPI drill-downs that improved visibility into performance and sped up decision cycles.',
    tags: ['Tableau','SQL','DAX','Excel'],
    outcomes: ['Executive KPI visibility', 'Faster decision cycles'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Social Media Analytics Tool',
    desc: 'Built a multi-platform social analytics tool that integrates APIs and visualizes engagement trends for campaign performance tracking.',
    tags: ['Python','API Integration','Matplotlib','Seaborn'],
    outcomes: ['Multi-platform insights', 'Campaign trend tracking'],
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
];

export const Projects: React.FC = () => {
  const [imageStep, setImageStep] = React.useState(0);

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

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <motion.article key={p.title} variants={fadeInUp}
            className="group rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-5 backdrop-blur"
            animate="rest" whileHover="hover">
            <motion.div variants={hoverCard} className="rounded-2xl">
              <div className="mb-5 overflow-hidden rounded-xl">
                <img
                  src={p.images?.length ? p.images[imageStep % p.images.length] : p.img}
                  alt={p.title}
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
                <a className="font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300" href={p.gh} target="_blank" rel="noreferrer">Source Code ↗</a>
                {p.live !== '#' && (
                  <a className="font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300" href={p.live} target="_blank" rel="noreferrer">{p.liveLabel ?? 'Project Showcase'} ↗</a>
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
