import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface DRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DRequestInterceptors<T>,
  showLoading?: boolean
}
