import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaCircleHalfStroke } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { fadeIn, springTap } from '../animations';

export const Header: React.FC<{ onToggleDark: () => void }> = ({ onToggleDark }) => {
  const [open, setOpen] = React.useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Blog', 'Contact'];

  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-[var(--site-border)] bg-[var(--site-panel)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-600 to-orange-500 text-white shadow-lg shadow-cyan-800/25">
            <span className="text-sm font-extrabold">AG</span>
          </div>
          <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-lg font-extrabold text-transparent sm:text-xl">
            Asres Gamu Yelia
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-[var(--site-muted)] hover:text-[var(--site-brand)]"
            >
              {item}
            </a>
          ))}

          <motion.button
            {...springTap}
            onClick={onToggleDark}
            className="rounded-xl border border-[var(--site-border)] bg-white/60 p-2.5 text-[var(--site-brand)] shadow-sm hover:bg-white dark:bg-slate-900/60"
            aria-label="Toggle color theme"
          >
            <FaMoon className="hidden dark:block" />
            <FaSun className="block dark:hidden" />
          </motion.button>
        </nav>

        <button
          className="rounded-lg p-2 text-[var(--site-text)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open mobile menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--site-border)] bg-[var(--site-panel)] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[var(--site-muted)]"
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => {
                onToggleDark();
                setOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-orange-500 px-4 py-2.5 font-semibold text-white"
            >
              <FaCircleHalfStroke /> Switch Theme
            </button>
          </nav>
        </div>
      )}
    </motion.header>
  );
};