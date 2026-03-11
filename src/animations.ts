import type { Variants } from 'framer-motion';

// Shared motion presets so sections animate consistently across the site.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export const hoverCard: Variants = {
  rest: { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -6, scale: 1.01, boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

// Small reusable interaction helpers.
export const springTap = { whileTap: { scale: 0.98 } };
export const revealViewport = { once: true, amount: 0.18 };
