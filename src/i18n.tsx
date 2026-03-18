import React from 'react';

export type Language = 'en' | 'am';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const languageStorageKey = 'language';
  const languageExplicitChoiceKey = 'languageExplicitChoice';

  const [language, setLanguage] = React.useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';

    // Allow a direct deploy URL switch, e.g. ?lang=am.
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'am' || fromUrl === 'en') return fromUrl;

    // Respect saved language only after a user has explicitly chosen one.
    const explicitChoice = window.localStorage.getItem(languageExplicitChoiceKey) === 'true';
    const saved = window.localStorage.getItem(languageStorageKey);
    if (explicitChoice && (saved === 'am' || saved === 'en')) return saved;

    // For first-time visitors, default to English on this site.
    return 'en';
  });

  React.useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.setAttribute('lang', language === 'am' ? 'am' : 'en');
  }, [language, languageStorageKey]);

  const toggleLanguage = React.useCallback(() => {
    window.localStorage.setItem(languageExplicitChoiceKey, 'true');
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  }, [languageExplicitChoiceKey]);

  const setLanguageWithChoice = React.useCallback((lang: Language) => {
    window.localStorage.setItem(languageExplicitChoiceKey, 'true');
    setLanguage(lang);
  }, [languageExplicitChoiceKey]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithChoice, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return ctx;
};
