<script setup lang="ts">
import { ref } from 'vue'
import CountUp from '../src/countup.vue'
import type { ICountUp, CountUpOptions } from '../src/countup.vue'

const endValueRef = ref(2022.22)

const options: CountUpOptions = {
  separator: '❤️'
}
let countUp: ICountUp | undefined
const onInit = (ctx: ICountUp) => {
  countUp = ctx
}
const onFinished = () => {
  console.log('finished')
  countUp?.reset()
}
</script>

<template>
  <count-up
    :end-val="endValueRef"
    :duration="2.5"
    :decimal-places="2"
    :options="options"
    :loop="2"
    :delay="2"
    @init="onInit"
    @finished="onFinished">
    <template #prefix>
      <span style="color: orange">prefix</span>
    </template>
    <template #suffix>
      <span style="color: red">prefix</span>
    </template>
  </count-up>
</template>

<style scoped></style>
