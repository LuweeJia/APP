import { http } from '@/utils/http'
import type { ProfileDetail } from '@/types/member'
export const getMenmberProfieAPI = () => {
  return http<ProfileDetail>({
    method: 'POST',
    url: 'member/profile',
  })
}
