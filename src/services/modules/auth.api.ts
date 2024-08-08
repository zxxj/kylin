import type { RegisterDto } from '@/types/registerForm'
import ApiClient from '../http'

interface RegsiterResponse {
  code: number
  message: string
  data: any
}

const http = new ApiClient()
// 获取验证码
export const getCode = () => {
  return http.get('/auth/captcha/img')
}

// 注册
export const register = (registerDto: RegisterDto): Promise<RegsiterResponse> => {
  return http.post('/auth/register', registerDto)
}
