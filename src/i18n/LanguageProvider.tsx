import { useState, useCallback, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import type { Lang } from './translations';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<Lang>('en');

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
