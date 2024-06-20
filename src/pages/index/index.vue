<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotPanelAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, hotPaneItem } from '@/types/home'
const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const result = await getHomeBannerAPI()
  bannerList.value = result.result
}
const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const hotList = ref<hotPaneItem[]>([])
const getHotPanel = async () => {
  const res = await getHotPanelAPI()
  hotList.value = res.result
  console.log(hotList.value)
}

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
  getHotPanel()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <HotPanel :list="hotList" />
  <view class="index"> </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
