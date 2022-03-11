<script lang="ts">
export type { CountUp as ICountUp, CountUpOptions } from 'countup.js'
export default {
  name: 'CountUp'
}
</script>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'

const props = withDefaults(
  defineProps<{
    // 结束数值
    endVal: number | string
    // 开始数值
    startVal?: number | string
    // 动画时长，单位秒
    duration?: number | string
    // 是否自动计数
    autoplay?: boolean
    // 循环次数，有限次数 / 无限循环
    // loop?: boolean | number
    // countup 配置项
    options?: CountUpOptions
  }>(),
  {
    startVal: 0,
    duration: 2.5,
    autoplay: true,
    // loop: false,
    options: undefined
  }
)
const emits = defineEmits<{
  // countup 初始化完成
  (event: 'init', countup: CountUp): CountUp
  // 计数完成
  // (event: 'finished'): void
}>()

let elRef = ref<HTMLElement>()
let countUp = ref<CountUp>()

const startAnim = () => {
  countUp.value?.start()
  // checkAnimateState()
}

const initCountUp = () => {
  if (!elRef.value) return
  const startVal = Number(props.startVal)
  const endVal = Number(props.endVal)
  const duration = Number(props.duration)
  countUp.value = new CountUp(elRef.value, endVal, {
    startVal,
    duration,
    ...props.options
  })
  if (countUp.value.error) {
    console.error(countUp.value.error)
    return
  }
  emits('init', countUp.value)
}

const restart = () => {
  initCountUp()
  startAnim()
}

// 监听 endVal, autoplay 为 true 时，重启动画
watch(
  () => props.endVal,
  (value) => {
    if (props.autoplay) {
      countUp.value?.update(value)
    }
  }
)

onMounted(() => {
  initCountUp()
  if (props.autoplay) {
    startAnim()
  }
})

defineExpose({
  init: initCountUp,
  restart
})

// 循环动画
// let loopCount = 1
// const loopAnim = () => {
//   loopCount++
//   finished.value = false
//   countUp.value?.reset()
//   startAnim()
// }
// // 判断动画是否结束，由于 coutup 内部未有结束状态记录，这里利用定时器去检查值
// const finished = ref(false)
// let timerId: number
// const checkAnimateState = () => {
//   clearTimeout(timerId)
//   timerId = window.setTimeout(() => {
//     // console.log('check')
//     finished.value = countUp.value?.frameVal == props.endVal
//     if (!finished.value) {
//       checkAnimateState()
//     }
//   }, 1000)
// }
// watch(finished, (flag) => {
//   if (!flag) return
//   // console.log('finished', flag)
//   // console.log('loop', loopCount)
//   emits('finished')
//   const isBool = typeof props.loop === 'boolean'
//   if ((isBool && props.loop) || props.loop > loopCount) {
//     loopAnim()
//   } else {
//     loopCount = 1
//   }
// })
</script>

<template>
  <div class="countup-wrap">
    <slot name="prefix"></slot>
    <span ref="elRef"> </span>
    <slot name="suffix"></slot>
  </div>
</template>
