import {createApp} from 'vue'
import App from './App'
import router from './Router/router'

const app = createApp(App);
app.use(router)
app.mount('#app')
