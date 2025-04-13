import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('bn');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLang = () => useContext(LanguageContext);