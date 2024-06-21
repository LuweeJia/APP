import type { PageResult, GoodsItem } from './global'
export type SubTypeItem = {
  id: string
  title: string
  goodsItem: PageResult<GoodsItem>
}
export type HotResult = {
  bannerPicture: stirng
  subTypes: SubTypeItem[]
  title: string
  id: string
}
