import { useEffect, useState } from "react";

import { ParticlesBG } from "./components/ParticlesBG";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useLanguage } from "./i18n";

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Keep DOM class and localStorage aligned with the current theme state.
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Toggle theme state; synchronization is handled by the theme effect.
  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  // Show a floating shortcut after the user scrolls down the page.
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-[var(--site-text)]">
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg border border-cyan-500/40 bg-[var(--site-panel)] px-3 py-2 text-sm font-bold text-[var(--site-text)] shadow-lg transition-transform focus:translate-y-0 focus:outline-none"
      >
        {language === "en" ? "Skip to content" : "ወደ ዋና ይዘት ይሂዱ"}
      </a>

      {/* Background Particles */}
      <ParticlesBG />

      {/* Header */}
      <Header onToggleDark={toggleDark} />

      {/* Main Content */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={language === "en" ? "Back to top" : "ወደ ላይ ተመለስ"}
        className={`fixed bottom-5 right-5 z-50 rounded-full border border-[var(--site-border)] bg-[var(--site-panel)] px-4 py-2.5 text-sm font-bold text-[var(--site-text)] shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${
          showBackToTop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {language === "en" ? "Top ↑" : "ወደ ላይ ↑"}
      </button>

      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={language === "en" ? "Switch to Amharic" : "Switch to English"}
        className="fixed bottom-5 left-5 z-50 rounded-full border border-cyan-500/40 bg-[var(--site-panel)] px-4 py-2.5 text-sm font-bold text-[var(--site-text)] shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        {language === "en" ? "አማርኛ" : "English"}
      </button>
    </div>
  );
}