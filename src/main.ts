import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './routes'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).mount('#app');
