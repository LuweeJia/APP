import type { GoodsItem } from './global'
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}
export type CategoryItem = {
  icon: string
  id: number
  name: string
}
export type hotPaneItem = {
  id: number
  pictures: string[]
  alt: string
  title: string
  target: string
  type: number
}
/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem
