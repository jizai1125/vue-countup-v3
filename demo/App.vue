<script setup lang="ts">
import CountUp from '../src/countup.vue'
import type { CountUp as ICountUp } from 'countup.js'
import { ref } from 'vue'
const options = {
  decimalPlaces: 2
}
const onInit = (countup: ICountUp) => {
  console.log('init', countup)
}
const endVal = ref(100)
const changEndVal = () => {
  endVal.value = 2000
}
</script>

<template>
  <div>vue countup</div>
  <button @click="changEndVal">change endVal {{ endVal }}</button>
  <count-up
    class="coutup"
    :end-val="endVal"
    :duration="3"
    :options="options"
    @init="onInit"></count-up>
</template>

<style>
.coutup {
  color: red;
  font-size: 32px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
