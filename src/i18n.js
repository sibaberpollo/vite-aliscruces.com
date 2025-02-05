import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next) // Integración con React
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Si el idioma no está disponible, usa español
    debug: true,
    interpolation: { escapeValue: false }
  });

export default i18n;
