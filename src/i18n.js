import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ko",
  debug: true,
  lng: "ko",
  resources: {
    ko: {
      translation: ko,
    },
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
