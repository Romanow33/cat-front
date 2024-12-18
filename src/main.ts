import { createApp } from 'vue'
import App from './App.vue'

//Routes
import router from './router'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//Store
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//Alert
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

//Init Project
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);

app.use(pinia)
app.use(router)
app.mount('#app')




