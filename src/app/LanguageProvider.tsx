import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '../types/portfolio';
import { copy } from '../content/copy';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (value: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === 'es'
        ? 'Luis Adrián — Desarrollador de software'
        : 'Luis Adrián — Software Developer';
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return { ...context, t: copy[context.language] };
}
