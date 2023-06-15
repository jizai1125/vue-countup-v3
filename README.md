# vue-countup-v3 [![npm](https://img.shields.io/npm/v/vue-countup-v3?color=green)](https://www.npmjs.com/package/vue-countup-v3) ![](https://img.shields.io/bundlephobia/min/vue-countup-v3)
    
> A Vue 3 component for animation counting, wrap for countUp.js(v2.6.2)  and expand some features.

![gif](https://img-blog.csdnimg.cn/b1920b2bf11349bba5cf03fbe1f5e1cf.gif#pic_center)

## [Try the demo](https://jizai1125.github.io/vue-countup-v3/examples/)

## Installation

npm

```bash
npm i vue-countup-v3
```

<details>
<summary><strong>cdn</strong></summary>
cdn 方式引入，暴露的全局变量为 VueCountUp

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="app">
       <count-up :end-val="2000"></count-up>
    </div>

    <script src="https://unpkg.com/vue@latest"></script>
    <script src="https://unpkg.com/vue-countup-v3@latest/dist/vue-countup-v3.iife.js"></script>
    <script>
        const app = Vue.createApp({})
        app.component('CountUp', VueCountUp)
        app.mount('#app')
    </script>
  </body>
</html>
```

</details>

## Usage

**简单示例（simple usage）**

```vue
<script setup lang="ts">
import CountUp from 'vue-countup-v3'
</script>

<template>
  <count-up :end-val="2000"></count-up>
</template>
```

<details>
<summary><strong>插槽示例（slot usage）</strong></summary>
当 prefix / suffix 需要与数值样式区分开时，可使用插槽的方式取代 options 中的 prefix / suffix 配置。

```html
<script setup lang="ts">
  import CountUp from 'vue-countup-v3'
</script>

<template>
  <count-up :end-val="2000">
    <template #prefix>
      <span style="color: orange">prefix</span>
    </template>
    <template #suffix>
      <span style="color: red">prefix</span>
    </template>
  </count-up>
</template>
```

</details>

<details>
<summary><strong>完整示例（full usage）</strong></summary>

```html
<script setup lang="ts">
  import { ref } from 'vue'
  import CountUp from 'vue-countup-v3'
  import type { ICountUp, CountUpOptions } from 'vue-countup-v3'
  
  const endValueRef = ref(2022.22)
  // coutup.js options
  const options: CountUpOptions = {
    separator: '❤️'
    // ...
  }
  let countUp: ICountUp | undefined
  const onInit = (ctx: ICountUp) => {
    console.log('init', ctx)
    countUp = ctx
  }
  const onFinished = () => {
    console.log('finished')
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
    @finished="onFinished"></count-up>
</template>
```
<details>
<summary><strong>在 [Nuxt](https://github.com/nuxt/nuxt) 中使用（usage in Nuxt）</strong></summary>
需在 `nuxt.config.ts` 中配置

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  build: {
    transpile: ['vue-countup-v3'],
  },
});
```
</details>

## 属性（Properties）

|   Name   |       Type       | Default |                             Description                              | Version |
| :------- | :--------------- | :------ | :------------------------------------------------------------------- | :------- |
|  endVal  | Number \| String |    -    |                                结束值                                |  |
| startVal | Number \| String |    0    |                                起始值                                |  |
| duration |      Number      |   2.5   |                          动画时长，单位：秒                          |  |
| decimalPlaces |      Number      |   0   |                          小数点位数                          | 1.1.0 |
| autoplay | Boolean           | true    | 是否自动计数                  |  |
| loop     | Boolean \| Number | false   | 循环次数，有限次数 / 无限循环 |  |
| delay    | Number            | 0       | loop 循环的间隔时间，单位：秒 |  |
| options  |      Object      |    -    | [countUp.js Options](https://github.com/inorganik/countUp.js#usage) |  |

## 插槽（slots）

| Name   | Description |
| :----- | :---------- |
| prefix | 前缀        |
| suffix | 后缀        |

## 事件（Events）

| Name      | Description                | return       |
| :-------- | :------------------------- | :----------- |
| @init     | CountUp 实例初始化完成触发 | CountUp 实例 |
| @finished | 计数结束时触发             | -            |

## 类型定义 （Type Definition）

```ts
import type {
    ICountUp,
    CountUpOptions
} from 'vue-countup-v3'
```



---



## coutup.js 说明

### 配置项（**Options**）

```typescript
interface CountUpOptions {
  startVal?: number // number to start at (0) 开始数值，默认 0
  decimalPlaces?: number // number of decimal places (0) 小数点 位数
  duration?: number // animation duration in seconds (2) 动画时长
  useGrouping?: boolean // example: 1,000 vs 1000 (true) 是否使用千分位
  useIndianSeparators?: boolean; // example: 1,00,000 vs 100,000 (false)
  useEasing?: boolean // ease animation (true) 是否开启动画过渡，默认动画函数为 easeOutExpo 
  smartEasingThreshold?: number // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number // amount to be eased for numbers above threshold (333)
  separator?: string // grouping separator (',') 千分位分隔符
  decimal?: string // decimal ('.') 小数点分隔符
  // easingFn: easing function for animation (easeOutExpo) 动画函数
  easingFn?: (t: number, b: number, c: number, d: number) => number
  formattingFn?: (n: number) => string // this function formats result 格式化结果
  prefix?: string // text prepended to result 数值前缀
  suffix?: string // text appended to result 数值后缀
  numerals?: string[] // numeral glyph substitution 数字符号替换 0 - 9，例如替换为 [a,b,c,d,e,f,g,h,i,j]
  enableScrollSpy?: boolean // start animation when target is in view 在可视范围内才开始动画
  scrollSpyDelay?: number // delay (ms) after target comes into view  目标进入可视范围内后的延迟时间(毫秒)
  scrollSpyOnce?: boolean; // run only once
  onCompleteCallback?: () => any; // gets called when animation completes
  plugin?: CountUpPlugin; // for alternate animations
}
```
see more [countUp.js](https://github.com/inorganik/countUp.js)
### **方法（Methods）**

开始计数（Start animation）

```js
countUp.start()
```

切换暂停/恢复（Toggle pause/resume）

```js
countUp.pauseResume()
```

重置数值（Reset the animation）

```js
countUp.reset()
```

修改结束值且继续动画（Update the end value and animate）

```js
countUp.update(1000)
```

## License

MIT
