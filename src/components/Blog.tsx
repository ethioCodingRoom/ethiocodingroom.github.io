import React from 'react';
import { useLanguage } from '../i18n';

export const Blog: React.FC = () => {
  const { language } = useLanguage();
  const isAm = language === 'am';

  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl font-extrabold sm:text-4xl">{isAm ? 'አዲስ ጽሑፎች' : 'Latest Articles'}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--site-muted)]">
          {isAm
            ? 'በቀጥታ ማግባት የሚችሉ የዳታ የስራ ፍሰት ላይ የተመረከቱ ተግባራዊ ቱቶሪያሎች።'
            : 'Practical tutorials focused on data workflows you can apply immediately.'}
        </p>

        <article className="rounded-3xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 backdrop-blur sm:p-8">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            {isAm ? '10 አስፈላጊ የpandas ፋንክሽኖች' : '10 Essential pandas Functions'}
          </h3>
          <p className="mt-2 text-[var(--site-muted)]">
            {isAm
              ? 'በየቀኑ የሚጠቀሙባቸውን 10 የpandas ፋንክሽኖች የሚሸፍን ተግባራዊ መመሪያ።'
              : 'A practical guide covering the 10 pandas functions you’ll use every day.'}
          </p>

          <a 
            href="https://github.com/ethioCodingRoom/music-streaming-data-analytics/blob/main/notebooks/spotify_analysis.ipynb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-5 inline-block font-bold text-cyan-700 hover:text-cyan-600 dark:text-cyan-300"
          >
            {isAm ? 'ተጨማሪ ያንብቡ ↗' : 'Read More ↗'}
          </a>
        </article>
      </div>
    </section>
  );
};