import { ref as g, defineComponent as E, watch as w, onMounted as F, onUnmounted as b, openBlock as S, createElementBlock as A, renderSlot as y, createElementVNode as N } from "vue";
var v = function() {
  return v = Object.assign || function(o) {
    for (var e, i = 1, n = arguments.length; i < n; i++)
      for (var t in e = arguments[i])
        Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
    return o;
  }, v.apply(this, arguments);
}, C = function() {
  function o(e, i, n) {
    var t = this;
    this.endVal = i, this.options = n, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: !0, useGrouping: !0, useIndianSeparators: !1, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: !1, scrollSpyDelay: 200, scrollSpyOnce: !1 }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(s) {
      t.startTime || (t.startTime = s);
      var a = s - t.startTime;
      t.remaining = t.duration - a, t.useEasing ? t.countDown ? t.frameVal = t.startVal - t.easingFn(a, 0, t.startVal - t.endVal, t.duration) : t.frameVal = t.easingFn(a, t.startVal, t.endVal - t.startVal, t.duration) : t.frameVal = t.startVal + (t.endVal - t.startVal) * (a / t.duration);
      var r = t.countDown ? t.frameVal < t.endVal : t.frameVal > t.endVal;
      t.frameVal = r ? t.endVal : t.frameVal, t.frameVal = Number(t.frameVal.toFixed(t.options.decimalPlaces)), t.printValue(t.frameVal), a < t.duration ? t.rAF = requestAnimationFrame(t.count) : t.finalEndVal !== null ? t.update(t.finalEndVal) : t.options.onCompleteCallback && t.options.onCompleteCallback();
    }, this.formatNumber = function(s) {
      var a, r, p, u, d = s < 0 ? "-" : "";
      a = Math.abs(s).toFixed(t.options.decimalPlaces);
      var c = (a += "").split(".");
      if (r = c[0], p = c.length > 1 ? t.options.decimal + c[1] : "", t.options.useGrouping) {
        u = "";
        for (var m = 3, l = 0, h = 0, V = r.length; h < V; ++h)
          t.options.useIndianSeparators && h === 4 && (m = 2, l = 1), h !== 0 && l % m == 0 && (u = t.options.separator + u), l++, u = r[V - h - 1] + u;
        r = u;
      }
      return t.options.numerals && t.options.numerals.length && (r = r.replace(/[0-9]/g, function(f) {
        return t.options.numerals[+f];
      }), p = p.replace(/[0-9]/g, function(f) {
        return t.options.numerals[+f];
      })), d + t.options.prefix + r + p + t.options.suffix;
    }, this.easeOutExpo = function(s, a, r, p) {
      return r * (1 - Math.pow(2, -10 * s / p)) * 1024 / 1023 + a;
    }, this.options = v(v({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = !1), this.el = typeof e == "string" ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return t.handleScroll(t);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(s) {
        return s();
      });
    }, this.handleScroll(this)));
  }
  return o.prototype.handleScroll = function(e) {
    if (e && window && !e.once) {
      var i = window.innerHeight + window.scrollY, n = e.el.getBoundingClientRect(), t = n.top + window.pageYOffset, s = n.top + n.height + window.pageYOffset;
      s < i && s > window.scrollY && e.paused ? (e.paused = !1, setTimeout(function() {
        return e.start();
      }, e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : (window.scrollY > s || t > i) && !e.paused && e.reset();
    }
  }, o.prototype.determineDirectionAndSmartEasing = function() {
    var e = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > e;
    var i = e - this.startVal;
    if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = e;
      var n = this.countDown ? 1 : -1;
      this.endVal = e + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = e, this.finalEndVal = null;
    this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
  }, o.prototype.start = function(e) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), e && (this.options.onCompleteCallback = e), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, o.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, o.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, o.prototype.update = function(e) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, o.prototype.printValue = function(e) {
    var i;
    if (this.el) {
      var n = this.formattingFn(e);
      !((i = this.options.plugin) === null || i === void 0) && i.render ? this.options.plugin.render(this.el, n) : this.el.tagName === "INPUT" ? this.el.value = n : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, o.prototype.ensureNumber = function(e) {
    return typeof e == "number" && !isNaN(e);
  }, o.prototype.validateValue = function(e) {
    var i = Number(e);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(e), null);
  }, o.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, o;
}();
function D(o, e = 1) {
  const i = g(-1);
  let n;
  function t(a) {
    n || (n = a), a - n < e * 1e3 ? i.value = requestAnimationFrame(t) : o();
  }
  i.value = requestAnimationFrame(t);
  function s() {
    window.cancelAnimationFrame(i.value);
  }
  return { cancel: s };
}
const T = { class: "countup-wrap" }, x = {
  name: "CountUp"
}, P = /* @__PURE__ */ E({
  ...x,
  props: {
    endVal: {},
    startVal: { default: 0 },
    duration: { default: 2.5 },
    decimalPlaces: { default: 0 },
    autoplay: { type: Boolean, default: !0 },
    loop: { type: [Boolean, Number], default: !1 },
    delay: { default: 0 },
    options: { default: void 0 }
  },
  emits: ["init", "finished"],
  setup(o, { expose: e, emit: i }) {
    const n = o, t = i;
    let s = g(), a = g(), r = 0;
    const p = g(!1);
    let u;
    function d() {
      if (!s.value) {
        console.warn("[vue-countup-v3]", "elRef can't found");
        return;
      }
      r = 0, p.value = !1;
      const l = Number(n.startVal), h = Number(n.endVal), V = Number(n.duration);
      if (a.value = new C(s.value, h, {
        startVal: l,
        duration: V,
        decimalPlaces: n.decimalPlaces,
        ...n.options
      }), a.value.error) {
        console.error("[vue-countup-v3]", a.value.error);
        return;
      }
      t("init", a.value);
    }
    function c() {
      var h;
      a.value || d(), (h = a.value) == null || h.start(l), r++;
      function l() {
        typeof n.loop == "boolean" && n.loop || n.loop > r ? u = D(() => {
          var f;
          (f = a.value) == null || f.reset(), c();
        }, n.delay) : p.value = !0;
      }
    }
    function m() {
      u == null || u.cancel(), d(), c();
    }
    return w([() => n.startVal, () => n.endVal], () => {
      n.autoplay && m();
    }), w(p, (l) => {
      var h;
      l && ((h = n.options) != null && h.onCompleteCallback && n.options.onCompleteCallback(), t("finished"));
    }), F(() => {
      d(), n.autoplay && c();
    }), b(() => {
      var l;
      u == null || u.cancel(), (l = a.value) == null || l.reset();
    }), e({
      init: d,
      restart: m
    }), (l, h) => (S(), A("div", T, [
      y(l.$slots, "prefix"),
      N("span", {
        ref_key: "elRef",
        ref: s
      }, null, 512),
      y(l.$slots, "suffix")
    ]));
  }
});
export {
  P as default
};
