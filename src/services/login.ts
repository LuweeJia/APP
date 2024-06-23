import { http } from '@/utils/http'
type LoginParams = {
  code: string
  encryprtedData: string
  iv: string
}
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
