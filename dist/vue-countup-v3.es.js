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
import { defineComponent, ref, watch, onMounted, onUnmounted, openBlock, createElementBlock, renderSlot, createElementVNode } from "vue";
import { CountUp } from "countup.js";
const _hoisted_1 = { class: "countup-wrap" };
const __default__ = {
  name: "CountUp"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    endVal: null,
    startVal: { default: 0 },
    duration: { default: 2.5 },
    autoplay: { type: Boolean, default: true },
    loop: { type: [Boolean, Number, String], default: false },
    delay: { default: 0 },
    options: { default: void 0 }
  },
  emits: ["init", "finished"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    let elRef = ref();
    let countUp = ref();
    const initCountUp = () => {
      if (!elRef.value)
        return;
      const startVal = Number(props.startVal);
      const endVal = Number(props.endVal);
      const duration = Number(props.duration);
      countUp.value = new CountUp(elRef.value, endVal, __spreadValues({
        startVal,
        duration
      }, props.options));
      if (countUp.value.error) {
        console.error(countUp.value.error);
        return;
      }
      emits("init", countUp.value);
    };
    const startAnim = (cb) => {
      var _a;
      (_a = countUp.value) == null ? void 0 : _a.start(cb);
    };
    watch(() => props.endVal, (value) => {
      var _a;
      if (props.autoplay) {
        (_a = countUp.value) == null ? void 0 : _a.update(value);
      }
    });
    const finished = ref(false);
    let loopCount = 0;
    const loopAnim = () => {
      loopCount++;
      startAnim(() => {
        const isTruely = typeof props.loop === "boolean" && props.loop;
        if (isTruely || props.loop > loopCount) {
          delay(() => {
            var _a;
            (_a = countUp.value) == null ? void 0 : _a.reset();
            loopAnim();
          }, props.delay);
        } else {
          finished.value = true;
        }
      });
    };
    watch(finished, (flag) => {
      if (flag) {
        emits("finished");
      }
    });
    onMounted(() => {
      initCountUp();
      if (props.autoplay) {
        loopAnim();
      }
    });
    onUnmounted(() => {
      var _a;
      cancelAnimationFrame(dalayRafId);
      (_a = countUp.value) == null ? void 0 : _a.reset();
    });
    let dalayRafId;
    const delay = (cb, seconds = 1) => {
      let startTime;
      function count(timestamp) {
        if (!startTime)
          startTime = timestamp;
        const diff = timestamp - startTime;
        if (diff < seconds * 1e3) {
          dalayRafId = requestAnimationFrame(count);
        } else {
          cb();
        }
      }
      dalayRafId = requestAnimationFrame(count);
    };
    const restart = () => {
      initCountUp();
      startAnim();
    };
    expose({
      init: initCountUp,
      restart
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "prefix"),
        createElementVNode("span", {
          ref_key: "elRef",
          ref: elRef
        }, null, 512),
        renderSlot(_ctx.$slots, "suffix")
      ]);
    };
  }
}));
export { _sfc_main as default };
