import App from './App.vue'
import { createApp } from 'vue'
import { setupPinia } from '@/stores'
import { setupRouter } from '@/router'
import Antd from 'ant-design-vue'
import 'normalize.css'
import '@/styles/tailwind.css'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

const bootstrap = () => {
  setupPinia(app)
  setupRouter(app)
  app.use(Antd)
  app.mount('#app')
}

bootstrap()
