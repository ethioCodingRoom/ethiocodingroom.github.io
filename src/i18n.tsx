import React from 'react';

export type Language = 'en' | 'am';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';

    // Allow a direct deploy URL switch, e.g. ?lang=am.
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'am' || fromUrl === 'en') return fromUrl;

    const saved = window.localStorage.getItem('language');
    if (saved === 'am' || saved === 'en') return saved;

    // For first-time visitors, default to Amharic on this site.
    return 'am';
  });

  React.useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language === 'am' ? 'am' : 'en');
  }, [language]);

  const toggleLanguage = React.useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
};
