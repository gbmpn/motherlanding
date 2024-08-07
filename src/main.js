import './assets/main.css'
import "./assets/js/imagesloaded.pkgd.min.js"

import "./assets/js/demo1/index.js"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)

app.mount('#app')
