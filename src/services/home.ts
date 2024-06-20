import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, hotPaneItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'
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
export const getHomeGoodsGuess = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
