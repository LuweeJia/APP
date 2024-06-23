<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotPanelAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { onMounted, ref } from 'vue'
import type { BannerItem, CategoryItem, hotPaneItem } from '@/types/home'
import pageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables/index'
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
}
//从组合式函数拿到相应的数据 猜你喜欢
const { guessRef, onScrolltolower } = useGuessList()

const isTriggered = ref<boolean>(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await  getHomeBanner()
  // await  getHomeCategory()
  // await  getHotPanel()
  guessRef.value?.resetData() //重置猜你喜欢数据
  await Promise.all([getHomeBanner(), getHomeCategory(), getHotPanel()])
  isTriggered.value = false
}
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  // getHomeBanner()
  // getHomeCategory()
  // getHotPanel()
  await Promise.all([getHomeBanner(), getHomeCategory(), getHotPanel()])
  isLoading.value = false
})
onMounted(() => {
  console.log(guessRef.value?.pageParams, '123')
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    refresher-background="#f7f7f7"
    refresher-enabled
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrolltolower"
  >
    <pageSkeleton v-if="isLoading"></pageSkeleton>
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;

  .scroll-view {
    flex: 1;
  }
}
</style>
