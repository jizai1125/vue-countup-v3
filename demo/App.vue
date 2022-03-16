<script setup lang="ts">
import CountUp from '../src/countup.vue'
import type { ICountUp, CountUpOptions } from '../src/countup.vue'

const options: CountUpOptions = {
  decimalPlaces: 2
}
let countUp: ICountUp
const onInit = (ctx: ICountUp) => {
  countUp = ctx
}
const onFinished = () => {
  console.log('finished')
}
</script>

<template>
  <count-up
    :end-val="2000"
    :duration="2.5"
    :options="options"
    :loop="2"
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
