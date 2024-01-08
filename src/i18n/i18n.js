import { createI18n } from 'vue-i18n';

// Your function to load locale messages
async function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.json');
  const messages = {};

  const keys = Object.keys(locales);
  for (const key of keys) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      const importedLocale = await locales[key]();
      messages[locale] = importedLocale.default;
    }
  }

  return messages;
}

// Initialize Vue I18n with loaded messages
async function initI18n() {
  const browserLanguage = navigator.language.split('-')[0];
  const i18n = createI18n({
    locale: browserLanguage, // Default locale
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: await loadLocaleMessages(), // Await loading of messages
  });

  return i18n;
}

export default initI18n;



