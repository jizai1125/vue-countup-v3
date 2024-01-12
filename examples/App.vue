<script setup lang="ts">
import { ref } from 'vue'
import CountUp from '../src/countup.vue'
import type { ICountUp, CountUpOptions } from '../src/countup.vue'

const startValueRef = ref(0)
const endValueRef = ref(2022.22)

const options: CountUpOptions = {
  separator: '❤️',
  onCompleteCallback() {
    console.log('onCompleteCallback finished !!!')
  }
}
let countUp: ICountUp | undefined
const onInit = (ctx: ICountUp) => {
  countUp = ctx
}
const onFinished = () => {
  console.log('finished!!!')
}

const countupRef = ref<InstanceType<typeof CountUp>>()
const restart = () => {
  countupRef.value?.restart()
}

const changeStartVal = () => {
  startValueRef.value += 1000
}

const changeEndVal = () => {
  endValueRef.value += 1000
}
</script>

<template>
  <p>-- simple usage width autoplay --</p>
  <count-up :end-val="2023"></count-up>
  <p>-- loop 2 times with delay 2s --</p>
  <count-up :end-val="2023" :loop="2" :delay="2"></count-up>
  <p>-- loop infinity --</p>
  <count-up :end-val="2023" loop></count-up>
  <p>--- change startVal or endVal --</p>
  <button @click="restart">restart</button>
  <button @click="changeStartVal">change startVal</button>
  <button @click="changeEndVal">change endVal</button>
  <count-up
    ref="countupRef"
    :start-val="startValueRef"
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
