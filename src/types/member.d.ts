type BaseProfie = {
  account: string
  avatar: string
  id: number
  nickname: string
}
export type LoginResult = BaseProfie & {
  mobile: string

  token: string
}
/** 个人信息 用户详情信息 */
export type ProfileDetail = BaseProfie & {
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
export type Gender = '女' | '男'
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
