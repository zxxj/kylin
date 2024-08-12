import type { Router } from 'vue-router'
import { LOGIN_NAME, type whiteNameList } from './constant'
import { useAuthStore } from '@/stores/modules/auth'

const defalutRoutePath: string = '/'

export const createRouterGuards = (router: Router, whiteNameList: whiteNameList) => {
  const authStore = useAuthStore()
  router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    if (authStore.getToken && to.path === LOGIN_NAME) {
      router.push(defalutRoutePath)
    } else {
      next()
    }
  })
}
