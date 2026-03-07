import React from 'react';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-extrabold mb-12">Latest Articles</h2>

        <article className="p-6 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h3 className="text-2xl font-extrabold">10 Essential pandas Functions</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A practical guide covering the 10 pandas functions you’ll use every day.
          </p>

          {/* Correctly wrapped link */}
          <a 
            href="/pandasPage.tsx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block font-bold text-blue-400 hover:underline"
          >
            Read More ↗
          </a>
        </article>
      </div>
    </section>
  );
};