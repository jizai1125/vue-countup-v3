# vue-countup-v3 [![npm](https://img.shields.io/npm/v/vue-countup-v3?color=green)](https://www.npmjs.com/package/vue-countup-v3) ![](https://img.shields.io/bundlephobia/min/vue-countup-v3)

> Vue 3 component for animation counting，counting up or down, etc. wrap for _countUp.js_  and expand some features.

![gif](https://mmbiz.qpic.cn/mmbiz_gif/JcXdtHmqHHbyUYWCecZxvolAQpuFKciaH34IByF9v9Rv65v8OAZIuOCdCawm4e3xibDjQ1x4RgrfXYLDhuOKEerw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

## [Try the demo](https://jizai1125.github.io/vue-countup-v3/examples/)

## Installation

npm

```bash
npm i vue-countup-v3
```

yarn

```bash
yarn add vue-countup-v3
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
当 prefix 或者 suffix 需要与数值样式区分开时，可使用插槽的方式取代 options 配置。

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
  import CountUp from 'vue-countup-v3'
  import type { ICountUp, CountUpOptions } from 'vue-countup-v3'
  // coutup.js options
  const options: CountUpOptions = {
    decimalPlaces: 2
    // ...
  }
  let countUp: ICountUp
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
    :end-val="2000"
    :duration="2.5"
    :options="options"
    :loop="2"
    :delay="2"
    @init="onInit"
    @finished="onFinished"></count-up>
</template>
```

</details>

## 属性（Properties）

以下属性同 coutup.js 配置项（same as countup.js properties）

|   Name   |       Type       | Default |                             Description                              |
| :------: | :--------------: | :-----: | :------------------------------------------------------------------: |
|  endVal  | Number \| String |    -    |                                结束值                                |
| startVal | Number \| String |    0    |                                起始值                                |
| duration |      Number      |   2.5   |                          动画时长，单位：秒                          |
| options  |      Object      |    -    | [countUp.js](https://github.com/inorganik/countUp.js) options 配置项 |

以下为组件特有属性（extension properties）

|   Name   |       Type        | Default |          Description          |
| :------: | :---------------: | :-----: | :---------------------------: |
| autoplay |      Boolean      |  true   |         是否自动计数          |
|   loop   | Boolean \| Number |  false  | 循环次数，有限次数 / 无限循环 |
|  delay   |      Number       |    0    | loop 循环的间隔时间，单位：秒 |

## 插槽（slots）

|  Name  | Description |
| :----: | :---------: |
| prefix |    前缀     |
| suffix |    后缀     |

## 事件（Events）

|   Name    |        Description         |    return    |
| :-------: | :------------------------: | :----------: |
|   @init   | CountUp 实例初始化完成触发 | CountUp 实例 |
| @finished |       计数结束时触发       |      -       |

### 类型定义 （Type Definition）

```ts
import type {
    ICountUp,
    CountUpOptions
} from 'vue-countup-v3'
```



---



## coutup.js 说明

see more [countUp.js](https://github.com/inorganik/countUp.js)

### 配置项（**Options** ）

```typescript
interface CountUpOptions {
  startVal?: number // number to start at (0) 开始数值，默认 0
  decimalPlaces?: number // number of decimal places (0) 小数点 位数
  duration?: number // animation duration in seconds (2) 动画时长
  useGrouping?: boolean // example: 1,000 vs 1000 (true) 是否使用千分位
  useEasing?: boolean // ease animation (true) 是否开启动画过渡，默认动画函数为easeOutExpo 
  smartEasingThreshold?: number // smooth easing for large numbers above this if useEasing (999)
  smartEasingAmount?: number // amount to be eased for numbers above threshold (333)
  separator?: string // grouping separator (',') 千位分隔符
  decimal?: string // decimal ('.') 小数点分隔符
  // easingFn: easing function for animation (easeOutExpo) 动画函数
  easingFn?: (t: number, b: number, c: number, d: number) => number
  formattingFn?: (n: number) => string // this function formats result 格式化结果
  prefix?: string // text prepended to result 数值前缀
  suffix?: string // text appended to result 数值后缀
  numerals?: string[] // numeral glyph substitution 数字符号替换 0 - 9，例如替换为 [a,b,c,d,e,f,g,h,i,j]
  enableScrollSpy?: boolean // start animation when target is in view 在可视范围内才开始动画
  scrollSpyDelay?: number // delay (ms) after target comes into view  目标进入可视范围内后的延迟时间(毫秒)
}
```

### **方法（Methods）**

开始计数

```js
countUp.start()
```

Toggle pause/resume 切换暂停/恢复

```js
countUp.pauseResume()
```

Reset the animation: 重置数值

```js
countUp.reset()
```

Update the end value and animate: 修改结束值且继续动画

```js
countUp.update(1000)
```

## License

MIT
