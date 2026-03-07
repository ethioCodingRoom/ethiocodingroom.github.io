import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '@/animations';

export const Reveal: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <motion.div className={className} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}>
    {children}
  </motion.div>
);
