import React from 'react';
import { motion } from 'framer-motion';
import { hoverCard, fadeInUp, revealViewport, staggerContainer } from '../animations';

const projects = [
  {
    title: 'E-commerce Sales Analytics',
    desc: 'Power BI dashboard analyzing $2M+ in sales data, identifying key trends and customer behavior patterns.',
    tags: ['Python','pandas','Power BI','SQL'],
    img: 'https://via.placeholder.com/640x400/6366f1/ffffff?text=E-commerce+Analytics',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Real Estate Price Scraper',
    desc: 'Automated scraping with Selenium & BeautifulSoup collecting 10,000+ listings daily with 99% accuracy.',
    tags: ['Python','Selenium','BeautifulSoup','MySQL'],
    img: 'https://via.placeholder.com/640x400/8b5cf6/ffffff?text=Web+Scraper',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Customer Segmentation ML',
    desc: 'K-means + RFM on 50,000+ customers enabling targeted campaigns with 35% improved conversion.',
    tags: ['Python','Scikit-learn','Plotly','pandas'],
    img: 'https://via.placeholder.com/640x400/d946ef/ffffff?text=ML+Clustering',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Automated ETL Data Pipeline',
    desc: 'Scalable ETL processing 1GB+ daily across sources; reduced manual time by 80%.',
    tags: ['Python','pandas','PostgreSQL','API'],
    img: 'https://via.placeholder.com/640x400/6366f1/ffffff?text=ETL+Pipeline',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Interactive Finance Dashboard',
    desc: 'Tableau KPI dashboard with drill-downs and real-time insights for leadership.',
    tags: ['Tableau','SQL','DAX','Excel'],
    img: 'https://via.placeholder.com/640x400/8b5cf6/ffffff?text=Finance+Dashboard',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
  {
    title: 'Social Media Analytics Tool',
    desc: 'API-based analytics visualizing engagement across multiple platforms.',
    tags: ['Python','API Integration','Matplotlib','Seaborn'],
    img: 'https://via.placeholder.com/640x400/d946ef/ffffff?text=Social+Analytics',
    gh: 'https://github.com/ethioCodingRoom',
    live: '#',
  },
];

export const Projects: React.FC = () => (
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
                  src={p.img}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-extrabold text-slate-900 dark:text-slate-100">{p.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--site-muted)]">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-700 dark:text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a className="font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300" href={p.gh} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300" href={p.live} target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
