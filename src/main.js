import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import PrimeVue from 'primevue/config';

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
const app = createApp(App).use(router);
app.use(PrimeVue);
app.component("v-icon", OhVueIcon);
app.mount("#app");