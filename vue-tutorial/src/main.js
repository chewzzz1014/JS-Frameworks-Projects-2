import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// configure app-level options
app.config.errorHandler = (err) => {
    console.log(err)
}

// register app-scoped assets (available for use anywhere in app)
// app.component("TodoDeleteButton", TodoDeleteButton)

app.mount('#app')