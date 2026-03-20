import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaCircleHalfStroke } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { fadeIn, springTap } from '../animations';
import { useLanguage } from '../i18n';

export const Header: React.FC<{ onToggleDark: () => void }> = ({ onToggleDark }) => {
  const [open, setOpen] = React.useState(false);
  const [now, setNow] = React.useState(() => new Date());
  const { language, toggleLanguage } = useLanguage();

  // Single source of truth used by both desktop and mobile menus.
  const navItems = [
    { id: 'about', en: 'About', am: 'ስለ እኔ' },
    { id: 'skills', en: 'Skills', am: 'ክህሎቶች' },
    { id: 'projects', en: 'Projects', am: 'ፕሮጀክቶች' },
    { id: 'certifications', en: 'Certifications', am: 'ሰርቲፊኬቶች' },
    { id: 'blog', en: 'Blog', am: 'ብሎግ' },
    { id: 'contact', en: 'Contact', am: 'አግኙኝ' },
  ];

  React.useEffect(() => {
    // Tick once per second so the Addis Ababa clock remains live.
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  // Format date/time explicitly in Ethiopia timezone regardless of visitor locale.
  const etDate = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Addis_Ababa',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now);

  const etTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Addis_Ababa',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
    .format(now)
    .toLowerCase();

  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[#030b1a]/90 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
            <span className="text-sm font-extrabold">AG</span>
          </div>
          <div className="leading-tight">
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-lg font-extrabold text-transparent sm:text-xl">
              Asres Gamu Yelia
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 sm:block">
              {language === 'en' ? 'Data Analyst Portfolio' : 'የዳታ ተንታኝ ፖርትፎሊዮ'}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#hero"
            className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
          >
            {language === 'en' ? 'Home' : 'መነሻ'}
          </a>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-300"
            >
              {language === 'en' ? item.en : item.am}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-bold text-cyan-200 shadow-sm transition hover:border-cyan-400"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>

          <div className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 lg:flex">
            <span
              aria-hidden="true"
              className="h-3 w-5 rounded-sm border border-white/40 bg-[linear-gradient(to_bottom,#078930_0_33%,#fcdd09_33_66%,#da121a_66_100%)]"
            />
            <span className="text-[11px] font-bold text-slate-300">{etDate} {etTime}</span>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-cyan-900/40 transition hover:-translate-y-0.5"
          >
            {language === 'en' ? 'Discuss Role Fit' : 'ስራ እድል እንወያይ'}
          </a>

          <motion.button
            {...springTap}
            onClick={onToggleDark}
            className="rounded-xl border border-slate-700 bg-slate-900/80 p-2.5 text-cyan-200 shadow-sm transition hover:border-cyan-400"
            aria-label={language === 'en' ? 'Toggle color theme' : 'የቀለም ገጽታ ቀይር'}
          >
            <FaMoon className="hidden dark:block" />
            <FaSun className="block dark:hidden" />
          </motion.button>
        </nav>

        <button
          className="rounded-lg p-2 text-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open mobile menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-500/10 bg-[#020814] px-6 py-5 md:hidden">
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5">
            <span
              aria-hidden="true"
              className="h-3 w-5 rounded-sm border border-white/40 bg-[linear-gradient(to_bottom,#078930_0_33%,#fcdd09_33_66%,#da121a_66_100%)]"
            />
            <span className="text-[11px] font-bold text-slate-300">{etDate} {etTime}</span>
          </div>
          <nav className="flex flex-col gap-4">
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-slate-100"
            >
              {language === 'en' ? 'Home' : 'መነሻ'}
            </a>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-slate-200"
              >
                {language === 'en' ? item.en : item.am}
              </a>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 font-semibold text-slate-100"
            >
              {language === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ቀይር'}
            </button>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-center font-semibold text-white"
            >
              {language === 'en' ? 'Discuss Role Fit' : 'ስራ እድል እንወያይ'}
            </a>

            <button
              onClick={() => {
                onToggleDark();
                setOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2.5 font-semibold text-white"
            >
              <FaCircleHalfStroke /> {language === 'en' ? 'Switch Theme' : 'ገጽታ ቀይር'}
            </button>
          </nav>
        </div>
      )}
    </motion.header>
  );
};