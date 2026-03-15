import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaCircleHalfStroke } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { fadeIn, springTap } from '../../animations';

export const Header: React.FC<{ onToggleDark: () => void }> = ({ onToggleDark }) => {
  const [open, setOpen] = React.useState(false);
  const [now, setNow] = React.useState(() => new Date());

  const navItems = [
    { label: 'Mission', href: '#about' },
    { label: 'Programs', href: '#skills' },
    { label: 'Courses', href: '#courses' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Resources', href: '#blog' },
    { label: 'Contact', href: '#contact' },
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
      className="sticky top-0 z-50 border-b border-[var(--site-border)] bg-[var(--site-panel)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-600 to-orange-500 text-white shadow-lg shadow-cyan-800/25">
            <span className="text-sm font-extrabold">EC</span>
          </div>
          <div className="leading-tight">
            <span className="block bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-lg font-extrabold text-transparent sm:text-xl">
              EthioCodingRoom Academy
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--site-muted)] sm:block">
              Frontend For A Future Learning Platform
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--site-muted)] hover:text-[var(--site-brand)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/"
            className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-bold text-cyan-700 hover:border-cyan-500/60 dark:text-cyan-300"
          >
            Personal Site
          </a>

          <div className="hidden items-center gap-2 rounded-xl border border-[var(--site-border)] bg-white/60 px-3 py-1.5 dark:bg-slate-900/60 lg:flex">
            <span
              aria-hidden="true"
              className="h-3 w-5 rounded-sm border border-white/40 bg-[linear-gradient(to_bottom,#078930_0_33%,#fcdd09_33_66%,#da121a_66_100%)]"
            />
            <span className="text-[11px] font-bold text-[var(--site-muted)]">{etDate} {etTime}</span>
          </div>

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
          <div className="mb-4 flex flex-col gap-3">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-center text-sm font-bold text-cyan-700 dark:text-cyan-300"
            >
              Open Personal Site
            </a>
            <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--site-border)] bg-white/60 px-3 py-1.5 dark:bg-slate-900/60">
              <span
                aria-hidden="true"
                className="h-3 w-5 rounded-sm border border-white/40 bg-[linear-gradient(to_bottom,#078930_0_33%,#fcdd09_33_66%,#da121a_66_100%)]"
              />
              <span className="text-[11px] font-bold text-[var(--site-muted)]">{etDate} {etTime}</span>
            </div>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[var(--site-muted)]"
              >
                {item.label}
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