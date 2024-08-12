import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/login/RegisterForm.vue')
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: '/system',
    redirect: 'system/user',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user.vue')
      }
    ]
  }
]

export { routes }
