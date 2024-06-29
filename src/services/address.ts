import { http } from '@/utils/http'
import type { AddressParams, AddressItem } from '@/types/address'
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http<AddressItem>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
