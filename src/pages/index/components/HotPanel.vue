<script setup lang="ts">
//
import type { hotPaneItem } from '@/types/home'
const props = defineProps<{
  list: hotPaneItem[]
}>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in props.list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image class="image" mode="aspectFit" :src="item.pictures[0]"></image>
        <image class="image" mode="aspectFit" :src="item.pictures[1]"></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/pages/index/components/styles/HotPanel.scss';
</style>
