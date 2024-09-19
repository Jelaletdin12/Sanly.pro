import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n/i18n.js'; 
import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 




const app = createApp(App)

app.use(router);
app.use(i18n);

app.mount('#app')
