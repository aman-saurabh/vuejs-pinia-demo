import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia();

const persistingState = localStorage.getItem("state");
if (persistingState) {
    pinia.state.value = JSON.parse(persistingState);
}

watch(pinia.state, val => {
    localStorage.setItem('state', JSON.stringify(val));
}, { deep: true }
)

app.use(pinia)
app.use(router)

app.mount('#app')
