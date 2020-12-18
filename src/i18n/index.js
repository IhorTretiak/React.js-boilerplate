// Core
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Helpers
import { isDevelopmentMode } from 'env';

// Messages
const resources = {};

export const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      resources,
      fallbackLng:   'en',
      debug:         isDevelopmentMode,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    })
    .catch((error) => {
      window.console.error('i18n error: \n', error);
    });
};
