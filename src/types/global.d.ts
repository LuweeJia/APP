/** 通用分页结果类型 */
export type PageResult<T> = {
  /** 列表数据 */
  items: T[]
  /** 总条数 */
  counts: number
  /** 当前页数 */
  page: number
  /** 总页数 */
  pages: number
  /** 每页条数 */
  pageSize: number
}
export type PageParams = {
  page?: number
  pageSize?: number
}
//通用商品类型
export type GoodsItem = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}
