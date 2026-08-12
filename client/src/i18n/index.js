import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ar from './locales/ar.json';
import en from './locales/en.json';
import he from './locales/he.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      he: { translation: he },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'he'],
    nonExplicitSupportedLngs: true,
    keySeparator: '.',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    load: 'languageOnly',
    react: { useSuspense: false },
  });

const applyDocumentLanguage = (language) => {
  const code = (language || 'en').split('-')[0];
  document.documentElement.lang = code;
  document.documentElement.dir = ['ar', 'he'].includes(code) ? 'rtl' : 'ltr';
};

applyDocumentLanguage(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;
