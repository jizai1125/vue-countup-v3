var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock } from "vue";
import { CountUp } from "countup.js";
const __default__ = {
  name: "CountUp"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    endVal: null,
    startVal: { default: 0 },
    duration: { default: 2.5 },
    autoplay: { type: Boolean, default: true },
    options: { default: void 0 }
  },
  emits: ["init"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let ElRef = ref();
    let countUp = ref();
    const startAnim = () => {
      var _a;
      (_a = countUp.value) == null ? void 0 : _a.start();
    };
    const initCountUp = () => {
      if (!ElRef.value)
        return;
      const startVal = Number(props.startVal);
      const endVal = Number(props.endVal);
      const duration = Number(props.duration);
      countUp.value = new CountUp(ElRef.value, endVal, __spreadValues({
        startVal,
        duration
      }, props.options));
      if (countUp.value.error) {
        console.error(countUp.value.error);
        return;
      }
      emits("init", countUp.value);
    };
    watch(() => props.endVal, (value) => {
      var _a;
      if (props.autoplay) {
        (_a = countUp.value) == null ? void 0 : _a.update(value);
      }
    });
    onMounted(() => {
      initCountUp();
      if (props.autoplay) {
        startAnim();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "ElRef",
        ref: ElRef
      }, null, 512);
    };
  }
}));
export { _sfc_main as default };
