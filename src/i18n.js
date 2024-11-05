import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslation from './locales/uk/translation.json';
import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';
import plTranslation from './locales/pl/translation.json';

const resources = {
  uk: { translation: uaTranslation },
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
  pl: { translation: plTranslation },
};

const selectedLanguage = localStorage.getItem('selectedLanguage');
const browserLanguage = navigator.language.slice(0, 2);

const isBrowserLanguageSupported = (browserLanguage) => {
  if (browserLanguage in resources) {
    return browserLanguage;
  } else {
    return null;
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: selectedLanguage || isBrowserLanguageSupported(browserLanguage) || 'uk',
  fallbackLng: 'uk',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;