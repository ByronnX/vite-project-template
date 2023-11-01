import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'normalize.css';
import '@/assets/css/reset.css';
import { createPinia } from "pinia";
// import "@/assets/style/global.scss";
const pinia = createPinia();
//main.js
import './tailwind.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
createApp(App).use(router).use(pinia).use(Antd).mount('#app')
