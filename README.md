# vue-countup-v3

>  Vue 3 component wrap for *countUp.js*

## Installation

```bash
# npm
$ npm i countup.js vue-countup-v3 -S
# or yarn
$ yarn add countup.js vue-countup-v3 -S
```

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
<summary>完整示例（full usage）</summary>

```html
<script setup lang="ts">
  import CountUpV3 from 'vue-countup-v3'
  import type { CountUp } from 'countup.js'
  // coutup.js options
  const options = {
    decimalPlaces: 2
    // ...
  }
  const onInit = (countup: CountUp) => {
    console.log('init', countup)
  }
  const onFinished = () => {
    console.log('finished')
  }
</script>

<template>
  <count-up
    :end-val="2000"
    :duration="3"
    loop
    :options="options"
    @init="onInit"
    @finished="onFinished"></count-up>
</template>
```

</details>

## 组件属性（Component Properties）

**以下属性同 coutup.js 配置项（same as countup.js properties）**

|   Name   |       Type       | Default |                             Description                              |
| :------: | :--------------: | :-----: | :------------------------------------------------------------------: |
|  endVal  | Number \| String |    -    |                                结束值                                |
| startVal | Number \| String |    0    |                                起始值                                |
| duration |      Number      |   2.5   |                          动画时长，单位：秒                          |
| options  |      Object      |    -    | [countUp.js](https://github.com/inorganik/countUp.js) options 配置项 |

**以下为组件拓展属性（extension properties）**

|   Name   |       Type        | Default |              Description               |
| :------: | :---------------: | :-----: | :------------------------------------: |
| autoplay |      Boolean      |  true   |              是否自动计数              |
|   loop   | Boolean \| Number |  false  | 为数值时代表次数，为 `true` 时无限循环 |

## coutup.js 说明

see more [countUp.js](https://github.com/inorganik/countUp.js)

### 配置项（**Options** ）

```typescript
interface CountUpOptions {
  startVal?: number // number to start at (0) 开始数值，默认 0
  decimalPlaces?: number // number of decimal places (0) 小数点 位数
  duration?: number // animation duration in seconds (2) 动画时长
  useGrouping?: boolean // example: 1,000 vs 1000 (true) 是否使用千分位
  useEasing?: boolean // ease animation (true) 动画函数类型
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
