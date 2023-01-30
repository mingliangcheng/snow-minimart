import axios, { type AxiosRequestConfig, type AxiosRequestHeaders } from 'axios'
const instance = axios.create({
  baseURL: 'localhost',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = ''
    config.headers.token = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

interface BaseResponse<T = undefined> {
  code: number
  data?: T
  message: string
  requestId?: string
  responseId?: number
}

export interface CustomAxiosRequestConfig<T = any> extends AxiosRequestConfig<T> {
  headers?: { token?: string } | AxiosRequestHeaders
}

const API = {
  get: <R = any, Q = any>({
    url,
    query,
    config
  }: {
    url: string
    query?: Q
    config?: CustomAxiosRequestConfig<R>
  }): Promise<BaseResponse<R>> => instance.get(url, { ...config, params: query }),
  post: <R = any, P = any, Q = any>({
    url,
    params, // body 参数
    query, // url 拼接参数
    config
  }: {
    url: string
    params?: P
    query?: Q
    config?: CustomAxiosRequestConfig<P>
  }): Promise<BaseResponse<R>> => {
    let conf: CustomAxiosRequestConfig<P>
    if (config) {
      conf = {
        ...config,
        params: query
      }
    } else {
      conf = {
        params: query
      }
    }
    return instance.post(url, params, conf)
  },

  put: <R = any, P = any>({
    url,
    params,
    config
  }: {
    url: string
    params?: P
    config?: CustomAxiosRequestConfig<P>
  }): Promise<BaseResponse<R>> => instance.put(url, params, config),

  delete: <R = any, D = any>({
    url,
    config
  }: {
    url: string
    config?: CustomAxiosRequestConfig<D>
  }): Promise<BaseResponse<R>> => instance.delete(url, config),

  patch: <R = any, D = any>({ url, data }: { url: string; data?: D }): Promise<BaseResponse<R>> =>
    instance.patch(url, data)
}
export default API
