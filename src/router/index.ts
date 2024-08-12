import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import type { App } from 'vue'
import { createRouterGuards } from './guard'
import { whiteNameList } from './constant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export const setupRouter = (app: App) => {
  createRouterGuards(router, whiteNameList)
  app.use(router)
}
