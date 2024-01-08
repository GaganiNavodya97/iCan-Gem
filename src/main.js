import './assets/main.css';
import app from "./plugins/Vuestic";
import router from './router';
import { createPinia } from 'pinia';
import "vuestic-ui/css";
import initI18n from './i18n/i18n';
import { getItem, setItem } from "./libraries/Storage";

const pinia = createPinia();

// Make the entry file asynchronous
async function main() {
  // Initialize i18n before creating the app
  const i18n = await initI18n();

  // Add your storage methods to globalProperties
  app.config.globalProperties.$storageSetItem = setItem;
  app.config.globalProperties.$storageGetItem = getItem;

  // Create the app instance
  app
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
}

// Call the main function
main();
