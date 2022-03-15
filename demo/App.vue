<script setup lang="ts">
import CountUp from '../src/countup.vue'
import type { ICountUp, CountUpOptions } from '../src/countup.vue'

const options: CountUpOptions = {
  startVal: 1
}
let countUp: ICountUp
const onInit = (ctx: ICountUp) => {
  countUp = ctx
}
</script>

<template>
  <count-up :end-val="2000" duration="20" :options="options" @init="onInit">
    <template #prefix>
      <span style="color: orange">prefix</span>
    </template>
    <template #suffix>
      <span style="color: red">prefix</span>
    </template>
  </count-up>
</template>

<style scoped></style>
