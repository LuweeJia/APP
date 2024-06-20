import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, hotPaneItem } from '@/types/home'
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
export const getHotPanelAPI = () => {
  return http<hotPaneItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
