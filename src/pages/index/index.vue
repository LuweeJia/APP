<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const result = await getHomeBannerAPI()
  console.log(result.result)
  bannerList.value = result.result
}
onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <view class="index"> </view>
</template>

<style lang="scss">
//
</style>
