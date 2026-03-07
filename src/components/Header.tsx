import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaCircleHalfStroke } from 'react-icons/fa6'; // Correct import
import { FaTimes } from 'react-icons/fa';
import { fadeIn, springTap } from '../animations';
// add dark mode  code here
export const Header: React.FC<{ onToggleDark: () => void }> = ({ onToggleDark }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur dark:bg-gray-900/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
            <span className="text-lg font-bold">AG</span>
          </div>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
            Asres Gamu Yelia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {['About', 'Skills', 'Projects', 'Certifications', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors">
              {item}
            </a>
          ))}
          
          <motion.button
            {...springTap}
            onClick={onToggleDark}
            className="p-2 rounded-lg border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 dark:text-yellow-400 hover:bg-indigo-500/10"
          >
            <FaMoon className="hidden dark:block" />
            <FaSun className="block dark:hidden" />
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-white/95 px-6 py-4 dark:bg-gray-900/95 md:hidden">
          <nav className="flex flex-col gap-4">
            {['About', 'Skills', 'Projects', 'Certifications', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg">
                {item}
              </a>
            ))}
            <button onClick={() => { onToggleDark(); setOpen(false); }} className="flex items-center gap-2 mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
              <FaCircleHalfStroke /> Switch Theme
            </button>
          </nav>
        </div>
      )}
    </motion.header>
  );
};