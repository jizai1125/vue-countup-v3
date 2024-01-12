<script lang="ts">
export type { CountUp as ICountUp, CountUpOptions } from 'countup.js'
export default {
  name: 'CountUp'
}
</script>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
import { useRaf, type RafContext } from './utils'

const props = withDefaults(
  defineProps<{
    endVal: number | string
    startVal?: number | string
    // animation duration (s)
    duration?: number | string
    decimalPlaces?: number
    autoplay?: boolean
    // animation times，infinite loop if true
    loop?: boolean | number
    // delay (s) to animation
    delay?: number
    // countup.js original options
    options?: CountUpOptions
  }>(),
  {
    startVal: 0,
    duration: 2.5,
    decimalPlaces: 0,
    autoplay: true,
    loop: false,
    delay: 0,
    ignorePart: undefined,
    options: undefined
  }
)
const emits = defineEmits<{
  (event: 'init', countup: CountUp): void
  (event: 'finished'): void
}>()

let elRef = ref<HTMLElement>()
let countUp = ref<CountUp>()
let loopCount = 0
const finished = ref(false)
let rafCtx: RafContext

function initCountUp() {
  if (!elRef.value) {
    console.warn('[vue-countup-v3]', `elRef can't found`)
    return
  }
  loopCount = 0
  finished.value = false
  const startVal = Number(props.startVal)
  const endVal = Number(props.endVal)
  const duration = Number(props.duration)
  countUp.value = new CountUp(elRef.value, endVal, {
    startVal,
    duration,
    decimalPlaces: props.decimalPlaces,
    ...props.options
  })
  if (countUp.value.error) {
    console.error('[vue-countup-v3]', countUp.value.error)
    return
  }
  emits('init', countUp.value)
}

function startAnimation() {
  if (!countUp.value) {
    initCountUp()
  }
  // passing fn to start will override countup.js's options.onCompleteCallback)
  countUp.value?.start(_loop)
  loopCount++

  function _loop() {
    const isTruely = typeof props.loop === 'boolean' && props.loop
    if (isTruely || (props.loop as number) > loopCount) {
      rafCtx = useRaf(() => {
        countUp.value?.reset()
        startAnimation()
      }, props.delay)
    } else {
      finished.value = true
    }
  }
}

function restart() {
  rafCtx?.cancel()
  initCountUp()
  startAnimation()
}

// startVal or endVal change & autoplay: true, restart animattion
watch([() => props.startVal, () => props.endVal], () => {
  if (props.autoplay) {
    restart()
  }
})

watch(finished, (flag) => {
  if (flag) {
    if (props.options?.onCompleteCallback) {
      props.options.onCompleteCallback()
    }
    emits('finished')
  }
})

onMounted(() => {
  initCountUp()
  if (props.autoplay) {
    startAnimation()
  }
})

onUnmounted(() => {
  rafCtx?.cancel()
  countUp.value?.reset()
})

defineExpose({
  init: initCountUp,
  restart
})
</script>

<template>
  <div class="countup-wrap">
    <slot name="prefix"></slot>
    <span ref="elRef"> </span>
    <slot name="suffix"></slot>
  </div>
</template>
