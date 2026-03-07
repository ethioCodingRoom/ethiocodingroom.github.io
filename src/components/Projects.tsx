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
  <section id="portfolio" className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-800 dark:to-gray-900 sm:py-20">
    <div className="mx-auto max-w-7xl px-6">
      <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}
        className="mb-12 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
        Featured Projects
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={revealViewport}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <motion.article key={p.title} variants={fadeInUp}
            className="group rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur dark:bg-white/5"
            animate="rest" whileHover="hover">
            <motion.div variants={hoverCard} className="rounded-2xl">
              <div className="mb-5 overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-2xl font-extrabold">{p.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[11px] font-bold text-indigo-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a className="font-bold text-blue-300 hover:text-blue-200" href={p.gh} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="font-bold text-blue-300 hover:text-blue-200" href={p.live} target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);
