// 验证码
export interface CaptchaType {
  code: number
  data: {
    id: string
    img: string
  }
  message: string
}

export interface LoginFormType {
  username: string
  password: string
  remember: boolean
  captchaId: string
  verifyCode: string
}

export interface LoginResponse {
  code: number
  data: {
    token: string
  }
  message: string
}

export interface RegisterFormType {
  username: string
  password: string
  lang: string
}
