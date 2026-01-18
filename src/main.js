// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // If you have global styles

const app = createApp(App)

// Use plugins
app.use(router)

// Mount once
app.mount('#app')