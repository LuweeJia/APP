import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    //非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //超时时间
    options.timeout = 10000

    //添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加token请求头表示
    const menberStore = useMemberStore()
    const token = menberStore.profile.token || null
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
