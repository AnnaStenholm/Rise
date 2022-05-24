import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationGB from "./language/gb/translation.json";
import translationSE from "./language/se/translation.json";

const fallbackLng = ["se", "gb"];
const availableLanguages = ["gb", "se"];

const resources = {
  gb: {
    translation: translationGB,
  },
  se: {
    translation: translationSE,
  },
};

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    lng: "se",
    resources,

    fallbackLng,

    detection: {
      checkWhitelist: true,
    },
    returnEmptyString: false,
    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
