import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'
//加入购物车接口
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
//获取购物车
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
export const putMemberCartBySkuIdAPI = (
  skuID: string,
  data: { count?: number; selected?: boolean },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuID}`,
    data,
  })
}
