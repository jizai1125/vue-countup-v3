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
var t = function() {
  return t = Object.assign || function(t2) {
    for (var i2, n = 1, s = arguments.length; n < s; n++)
      for (var a in i2 = arguments[n])
        Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
    return t2;
  }, t.apply(this, arguments);
}, i = function() {
  function i2(i3, n, s) {
    var a = this;
    this.endVal = n, this.options = s, this.version = "2.6.2", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
      a.startTime || (a.startTime = t2);
      var i4 = t2 - a.startTime;
      a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
      var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
      a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : a.finalEndVal !== null ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
    }, this.formatNumber = function(t2) {
      var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
      i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
      var r = (i4 += "").split(".");
      if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
        e = "";
        for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
          a.options.useIndianSeparators && u === 4 && (l = 2, h = 1), u !== 0 && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
        n2 = e;
      }
      return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      }), s2 = s2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      })), o + a.options.prefix + n2 + s2 + a.options.suffix;
    }, this.easeOutExpo = function(t2, i4, n2, s2) {
      return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
    }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el = typeof i3 == "string" ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window != "undefined" && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return a.handleScroll(a);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t2) {
        return t2();
      });
    }, this.handleScroll(this)));
  }
  return i2.prototype.handleScroll = function(t2) {
    if (t2 && window && !t2.once) {
      var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
      a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
    }
  }, i2.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i3 = t2 - this.startVal;
    if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t2;
      var n = this.countDown ? 1 : -1;
      this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = t2, this.finalEndVal = null;
    this.finalEndVal !== null ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i2.prototype.start = function(t2) {
    this.error || (t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i2.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i2.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i2.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i2.prototype.printValue = function(t2) {
    var i3;
    if (this.el) {
      var n = this.formattingFn(t2);
      if ((i3 = this.options.plugin) === null || i3 === void 0 ? void 0 : i3.render)
        this.options.plugin.render(this.el, n);
      else if (this.el.tagName === "INPUT")
        this.el.value = n;
      else
        this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, i2.prototype.ensureNumber = function(t2) {
    return typeof t2 == "number" && !isNaN(t2);
  }, i2.prototype.validateValue = function(t2) {
    var i3 = Number(t2);
    return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
  }, i2.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i2;
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
    decimalPlaces: { default: 0 },
    autoplay: { type: Boolean, default: true },
    loop: { type: [Boolean, Number], default: false },
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
      countUp.value = new i(elRef.value, endVal, __spreadValues({
        startVal,
        duration,
        decimalPlaces: props.decimalPlaces
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
