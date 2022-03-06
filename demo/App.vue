<script setup lang="ts">
import CountUpV3 from '../dist/vue-countup-v3.es.js'
import type { CountUp } from 'countup.js';
const options = {
  decimalPlaces: 2
}
const onInit = (countup: CountUp) => {
  console.log('init', countup)
}
const onFinished = () => {
  console.log('finished')
}
</script>

<template>
<div>vue countup</div>
  <count-up-v3
    class="coutup"
    :endVal="2000"
    :duration="3"
    :loop="2"
    :options="options"
    @init="onInit"
    @finished="onFinished"></count-up-v3>
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
