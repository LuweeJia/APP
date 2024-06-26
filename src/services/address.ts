import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}
