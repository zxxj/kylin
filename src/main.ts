import { createApp } from 'vue'
import store from '@/stores'
import Antd from 'ant-design-vue'
import 'normalize.css'
import '@/styles/tailwind.css'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
