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
    const saved = window.localStorage.getItem('language');
    return saved === 'am' ? 'am' : 'en';
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
