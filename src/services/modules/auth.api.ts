import type { RegisterDto } from '@/types/registerForm'
import ApiClient from '../http'
import type { CaptchaType, LoginFormType, LoginResponse } from '@/types/loginForm'

interface RegsiterResponse {
  code: number
  message: string
  data: any
}

const http = new ApiClient()

// 获取验证码
export const getCode = (): Promise<CaptchaType> => {
  return http.get('/auth/captcha/img')
}

// 注册
export const register = (registerDto: RegisterDto): Promise<RegsiterResponse> => {
  return http.post('/auth/register', registerDto)
}

// 登录
export const login = (loginDto: LoginFormType): Promise<LoginResponse> => {
  return http.post('/auth/login', loginDto)
}
