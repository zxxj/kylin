import { defineStore } from 'pinia'
import { login, register } from '@/services/modules/auth.api'
import type { RegisterDto } from '@/types/registerForm'
import type { LoginFormType } from '@/types/loginForm'
import { getLocalItem } from '@/utils/auth'

interface AuthStateType {
  token: string | null
}

const useAuthStore = defineStore('auth', {
  state: (): AuthStateType => ({
    token: getLocalItem('kylin-token') || null
  }),

  getters: {
    getToken: (state) => state.token
  },

  actions: {
    setToken(token: string) {
      this.token = token
    },
    async registerAction(registerDto: RegisterDto) {
      return register(registerDto)
    },

    async login(loginForm: LoginFormType) {
      return await login(loginForm)
    }
  }
})

export { useAuthStore }
