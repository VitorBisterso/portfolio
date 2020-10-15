import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import languages from './translations';

// the translations
const resources = {
  pt: { translation: languages.pt },
  en: { translation: languages.en },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt',

    keySeparator: '.', // we use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
