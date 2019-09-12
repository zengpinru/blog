import axios from 'axios'

const baseUrl = ''

class HttpRequest {
  constructor (baseURL = baseUrl) {
    this.baseURL = baseURL
  }
  /**
   * 获取全局配置
   */
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      withCredentials: true
    }
    return config
  }
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return Promise.resolve(err)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      const data = res.data
      return data
    }, err => {
      return Promise.resolve(err)
    })
  }
  request (options) {
    const instance = axios.create()
    // 合并配置项
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest()
