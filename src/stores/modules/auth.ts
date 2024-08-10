import { defineStore } from 'pinia'
import { login, register } from '@/services/modules/auth.api'
import type { RegisterDto } from '@/types/registerForm'
import type { LoginFormType } from '@/types/loginForm'

const useAuthStore = defineStore('auth', {
  state: () => ({}),

  actions: {
    async registerAction(registerDto: RegisterDto) {
      return register(registerDto)
    },

    async login(loginForm: LoginFormType) {
      return await login(loginForm)
    }
  }
})

export { useAuthStore }
