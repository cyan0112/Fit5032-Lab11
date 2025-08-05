// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import { initializeApp } from "firebase/app"
import App from './App.vue'
import { createApp } from 'vue'
import { getAuth } from "firebase/auth";
 

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// 挂载应用
app.mount('#app')
const firebaseConfig = {
  apiKey: "AIzaSyCZZA713hCwRcAHTX0xRcDnZJ7PXKDuNqI",
  authDomain: "lab-7-login.firebaseapp.com",
  projectId: "lab-7-login",
  storageBucket: "lab-7-login.firebasestorage.app",
  messagingSenderId: "179426843036",
  appId: "1:179426843036:web:7e7ed5e32adbbb00d59059"
};

// 初始化 Firebase（在使用其他代码之前）
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };

