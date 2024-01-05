import './assets/main.css'
import app from "./plugins/Vuestic";

import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n/i18n';

import {getItem, setItem} from "./libraries/Storage";
import "vuestic-ui/css";


const pinia = createPinia()
app.config.globalProperties.$storageSetItem = setItem;
app.config.globalProperties.$storageGetItem = getItem;

app
   .use(router)
   .use(pinia)
   .use(i18n)
   .mount('#app')
