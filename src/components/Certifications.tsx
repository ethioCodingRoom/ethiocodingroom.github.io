import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, revealViewport } from '../animations';

const certs = [
  { src: "/ask_questions_to_make_data_driven_decisions.png", alt: "Ask Questions to Make Data-Driven Decisions" },
  { src: "/data_analysis_and_visualization_with_python.jpg.png", alt: "Data Analysis and Visualization with Python" },
  { src: "/foundations_data_data_everywhere.jpg.png", alt: "Foundations: Data, Data, Everywhere" },
  { src: "/prepare_data_for_exploration.png", alt: "Prepare Data for Exploration" },
  { src: "/process_data_from_dirty_to_clean.png", alt: "Process Data from Dirty to Clean" },
  { src: "/python_programming_fundamentals.png", alt: "Python Programming Fundamentals" },
  { src: "/version_control.png", alt: "Version Control Certification" },
];

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}
          className="mb-16 text-center text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}
              onClick={() => setSelectedCert(c)}
              className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-800/40 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="p-2 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900 rounded-lg shadow-md mb-4">
                <div className="bg-white p-1 rounded-sm">
                  <img src={c.src} alt={c.alt} loading="lazy" className="h-48 w-full object-contain" />
                </div>
              </div>
              <p className="text-center text-sm font-bold text-gray-700 dark:text-gray-200 px-2 h-12 flex items-center justify-center">
                {c.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.img 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              src={selectedCert.src} 
              alt={selectedCert.alt} 
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};