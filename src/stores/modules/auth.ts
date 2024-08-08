import { defineStore } from 'pinia'
import { register } from '@/services/modules/auth.api'
import type { RegisterDto } from '@/types/registerForm'

const useAuthStore = defineStore('auth', {
  state: () => ({}),

  actions: {
    async registerAction(registerDto: RegisterDto) {
      return register(registerDto)
    }
  }
})

export { useAuthStore }
