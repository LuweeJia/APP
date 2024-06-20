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
    if (menberStore.profile) {
      const token = menberStore.profile.token || null
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode == 401) {
          const menberStore = useMemberStore()
          menberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误,换个网络错误试试',
        })
        reject(err)
      },
    })
  })
}
