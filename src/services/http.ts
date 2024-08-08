import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class ApiClient {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:7001/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // 可以在这里添加拦截器等全局设置
    this.axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError)
  }

  // 处理成功响应
  private handleSuccess(response: AxiosResponse<any, any>): AxiosResponse<any, any> {
    // 在这里确保返回一个符合 AxiosResponse<any, any> 结构的对象
    return response
  }

  // 处理错误响应
  private handleError(error: any): Promise<any> {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }

  // 发送 GET 请求
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config)
    return response.data
  }

  // 发送 POST 请求
  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config)
    return response.data
  }

  // 发送 PUT 请求
  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config)
    return response.data
  }

  // 发送 DELETE 请求
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config)
    return response.data
  }
}

export default ApiClient
