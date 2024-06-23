import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'
// 猜你喜欢 组合式函数
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  //滚动处理时间函数
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
