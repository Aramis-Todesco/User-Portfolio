// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// File di traduzioni
import translationEN from "../locales/en/translation.json";
import translationIT from "../locales/it/translation.json";
import translationZH from "../locales/zh/translation.json";

// La configurazione di i18next
i18n
  .use(LanguageDetector) // Rileva automaticamente la lingua del browser
  .use(initReactI18next) // Passa i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      it: {
        translation: translationIT,
      },
      zh: {
        translation: translationZH,
      },
    },
    fallbackLng: "en", // Lingua di fallback
    interpolation: {
      escapeValue: false, // React gestisce automaticamente l'escaping
    },
  });

export default i18n;
