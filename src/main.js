// import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../public/js/core/bootstrap.min.js'
import '../public/js/core/popper.min.js'
import '../public/js/plugins/perfect-scrollbar.min.js'
// import '../public/js/plugins/smooth-scrollbar.min.js'

import '../public/js/plugins/chartjs.min.js'

import '../public/css/nucleo-icons.css'
import '../public/css/nucleo-svg.css'

import '../public/css/argon-dashboard.css'
// import '../public/js/argon-dashboard.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
