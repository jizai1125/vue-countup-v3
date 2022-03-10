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
import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock, renderSlot, createElementVNode } from "vue";
var __assign = globalThis && globalThis.__assign || function() {
  return (__assign = Object.assign || function(t) {
    for (var i, a = 1, n = arguments.length; a < n; a++)
      for (var s in i = arguments[a])
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    return t;
  }).apply(this, arguments);
}, CountUp = function() {
  function t(t2, i, a) {
    var n = this;
    this.endVal = i, this.options = a, this.version = "2.1.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200 }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.count = function(t3) {
      n.startTime || (n.startTime = t3);
      var i2 = t3 - n.startTime;
      n.remaining = n.duration - i2, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(i2, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(i2, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (i2 / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (i2 / n.duration), n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), i2 < n.duration ? n.rAF = requestAnimationFrame(n.count) : n.finalEndVal !== null ? n.update(n.finalEndVal) : n.callback && n.callback();
    }, this.formatNumber = function(t3) {
      var i2, a2, s, e, r = t3 < 0 ? "-" : "";
      i2 = Math.abs(t3).toFixed(n.options.decimalPlaces);
      var o = (i2 += "").split(".");
      if (a2 = o[0], s = o.length > 1 ? n.options.decimal + o[1] : "", n.options.useGrouping) {
        e = "";
        for (var l = 0, h = a2.length; l < h; ++l)
          l !== 0 && l % 3 == 0 && (e = n.options.separator + e), e = a2[h - l - 1] + e;
        a2 = e;
      }
      return n.options.numerals && n.options.numerals.length && (a2 = a2.replace(/[0-9]/g, function(t4) {
        return n.options.numerals[+t4];
      }), s = s.replace(/[0-9]/g, function(t4) {
        return n.options.numerals[+t4];
      })), r + n.options.prefix + a2 + s + n.options.suffix;
    }, this.easeOutExpo = function(t3, i2, a2, n2) {
      return a2 * (1 - Math.pow(2, -10 * t3 / n2)) * 1024 / 1023 + i2;
    }, this.options = __assign(__assign({}, this.defaults), a), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el = typeof t2 == "string" ? document.getElementById(t2) : t2, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", window !== void 0 && this.options.enableScrollSpy && (this.error ? console.error(this.error, t2) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return n.handleScroll(n);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t3) {
        return t3();
      });
    }, this.handleScroll(this)));
  }
  return t.prototype.handleScroll = function(t2) {
    if (t2 && window) {
      var i = window.innerHeight + window.scrollY, a = t2.el.offsetTop + t2.el.offsetHeight;
      a < i && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay)) : window.scrollY > a && !t2.paused && t2.reset();
    }
  }, t.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i = t2 - this.startVal;
    if (Math.abs(i) > this.options.smartEasingThreshold) {
      this.finalEndVal = t2;
      var a = this.countDown ? 1 : -1;
      this.endVal = t2 + a * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = t2, this.finalEndVal = null;
    this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, t.prototype.start = function(t2) {
    this.error || (this.callback = t2, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, t.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, t.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, t.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, t.prototype.printValue = function(t2) {
    var i = this.formattingFn(t2);
    this.el.tagName === "INPUT" ? this.el.value = i : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = i : this.el.innerHTML = i;
  }, t.prototype.ensureNumber = function(t2) {
    return typeof t2 == "number" && !isNaN(t2);
  }, t.prototype.validateValue = function(t2) {
    var i = Number(t2);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t2, null);
  }, t.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, t;
}();
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
    options: { default: void 0 }
  },
  emits: ["init"],
  setup(__props, { expose, emit: emits }) {
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
    const restart = () => {
      initCountUp();
      startAnim();
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
    expose({
      init: initCountUp,
      restart
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "prefix"),
        createElementVNode("span", {
          ref_key: "ElRef",
          ref: ElRef
        }, null, 512),
        renderSlot(_ctx.$slots, "suffix")
      ]);
    };
  }
}));
export { CountUp, _sfc_main as default };
