// i18n.js

import { createI18n } from 'vue-i18n';
import en from "./langs/en.json"
import ru from "./langs/ru.json"
import tk from "./langs/tk.json"

const messages = {
  en: en,
  ru: ru,
  tk: tk,
  // Add more language translations as needed
};

const i18n = createI18n({
  locale: 'ru', // default locale
  legacy: false,
  messages,
  fallbackLocale: "tk",
});

export default i18n;
