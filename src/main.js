import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);

app.config.globalProperties.sampleBaseUri = "https://daten.voggenreiter.de/download/mp3/CajonBasics/";

app.mount('#app')
