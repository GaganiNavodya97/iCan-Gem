import { createI18n } from 'vue-i18n';

// Load locale messages dynamically
function loadLocaleMessages() {
    const locales = import.meta.globEager('./locales/*.json');
  const messages = {};

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });

  return messages;
}

// Detect browser language
const browserLanguage = navigator.language || navigator.userLanguage;
let localeLanguage;

// Map browser language to your supported languages
if (browserLanguage.includes('zh')) {
  localeLanguage = 'zn';
} else if (browserLanguage.includes('ko')) {
  localeLanguage = 'ko';
} else {
  localeLanguage = 'en';
}

export default createI18n({
  locale: localeLanguage || 'en',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
});
