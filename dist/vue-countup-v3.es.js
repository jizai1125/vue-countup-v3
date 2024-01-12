import { ref as V, defineComponent as E, watch as w, onMounted as F, onUnmounted as b, openBlock as A, createElementBlock as S, renderSlot as y, createElementVNode as N } from "vue";
var g = function() {
  return g = Object.assign || function(s) {
    for (var e, i = 1, n = arguments.length; i < n; i++)
      for (var t in e = arguments[i])
        Object.prototype.hasOwnProperty.call(e, t) && (s[t] = e[t]);
    return s;
  }, g.apply(this, arguments);
}, C = function() {
  function s(e, i, n) {
    var t = this;
    this.endVal = i, this.options = n, this.version = "2.6.2", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: !0, useGrouping: !0, useIndianSeparators: !1, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: !1, scrollSpyDelay: 200, scrollSpyOnce: !1 }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(a) {
      t.startTime || (t.startTime = a);
      var o = a - t.startTime;
      t.remaining = t.duration - o, t.useEasing ? t.countDown ? t.frameVal = t.startVal - t.easingFn(o, 0, t.startVal - t.endVal, t.duration) : t.frameVal = t.easingFn(o, t.startVal, t.endVal - t.startVal, t.duration) : t.frameVal = t.startVal + (t.endVal - t.startVal) * (o / t.duration);
      var r = t.countDown ? t.frameVal < t.endVal : t.frameVal > t.endVal;
      t.frameVal = r ? t.endVal : t.frameVal, t.frameVal = Number(t.frameVal.toFixed(t.options.decimalPlaces)), t.printValue(t.frameVal), o < t.duration ? t.rAF = requestAnimationFrame(t.count) : t.finalEndVal !== null ? t.update(t.finalEndVal) : t.options.onCompleteCallback && t.options.onCompleteCallback();
    }, this.formatNumber = function(a) {
      var o, r, l, p, f = a < 0 ? "-" : "";
      o = Math.abs(a).toFixed(t.options.decimalPlaces);
      var c = (o += "").split(".");
      if (r = c[0], l = c.length > 1 ? t.options.decimal + c[1] : "", t.options.useGrouping) {
        p = "";
        for (var u = 3, h = 0, d = 0, m = r.length; d < m; ++d)
          t.options.useIndianSeparators && d === 4 && (u = 2, h = 1), d !== 0 && h % u == 0 && (p = t.options.separator + p), h++, p = r[m - d - 1] + p;
        r = p;
      }
      return t.options.numerals && t.options.numerals.length && (r = r.replace(/[0-9]/g, function(v) {
        return t.options.numerals[+v];
      }), l = l.replace(/[0-9]/g, function(v) {
        return t.options.numerals[+v];
      })), f + t.options.prefix + r + l + t.options.suffix;
    }, this.easeOutExpo = function(a, o, r, l) {
      return r * (1 - Math.pow(2, -10 * a / l)) * 1024 / 1023 + o;
    }, this.options = g(g({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = !1), this.el = typeof e == "string" ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return t.handleScroll(t);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(a) {
        return a();
      });
    }, this.handleScroll(this)));
  }
  return s.prototype.handleScroll = function(e) {
    if (e && window && !e.once) {
      var i = window.innerHeight + window.scrollY, n = e.el.getBoundingClientRect(), t = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
      a < i && a > window.scrollY && e.paused ? (e.paused = !1, setTimeout(function() {
        return e.start();
      }, e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : (window.scrollY > a || t > i) && !e.paused && e.reset();
    }
  }, s.prototype.determineDirectionAndSmartEasing = function() {
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
  }, s.prototype.start = function(e) {
    this.error || (e && (this.options.onCompleteCallback = e), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, s.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, s.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, s.prototype.update = function(e) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, s.prototype.printValue = function(e) {
    var i;
    if (this.el) {
      var n = this.formattingFn(e);
      !((i = this.options.plugin) === null || i === void 0) && i.render ? this.options.plugin.render(this.el, n) : this.el.tagName === "INPUT" ? this.el.value = n : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, s.prototype.ensureNumber = function(e) {
    return typeof e == "number" && !isNaN(e);
  }, s.prototype.validateValue = function(e) {
    var i = Number(e);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: ".concat(e), null);
  }, s.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, s;
}();
function D(s, e = 1) {
  const i = V(-1);
  let n;
  function t(o) {
    n || (n = o), o - n < e * 1e3 ? i.value = requestAnimationFrame(t) : s();
  }
  i.value = requestAnimationFrame(t);
  function a() {
    window.cancelAnimationFrame(i.value);
  }
  return { cancel: a };
}
const T = { class: "countup-wrap" }, x = {
  name: "CountUp"
}, _ = /* @__PURE__ */ E({
  ...x,
  props: {
    endVal: null,
    startVal: { default: 0 },
    duration: { default: 2.5 },
    decimalPlaces: { default: 0 },
    autoplay: { type: Boolean, default: !0 },
    loop: { type: [Boolean, Number], default: !1 },
    delay: { default: 0 },
    options: { default: void 0 }
  },
  emits: ["init", "finished"],
  setup(s, { expose: e, emit: i }) {
    const n = s;
    let t = V(), a = V(), o = 0;
    const r = V(!1);
    let l;
    function p() {
      if (!t.value) {
        console.warn("[vue-countup-v3]", "elRef can't found");
        return;
      }
      o = 0, r.value = !1;
      const u = Number(n.startVal), h = Number(n.endVal), d = Number(n.duration);
      if (a.value = new C(t.value, h, {
        startVal: u,
        duration: d,
        decimalPlaces: n.decimalPlaces,
        ...n.options
      }), a.value.error) {
        console.error("[vue-countup-v3]", a.value.error);
        return;
      }
      i("init", a.value);
    }
    function f() {
      var h;
      a.value || p(), (h = a.value) == null || h.start(u), o++;
      function u() {
        typeof n.loop == "boolean" && n.loop || n.loop > o ? l = D(() => {
          var m;
          (m = a.value) == null || m.reset(), f();
        }, n.delay) : r.value = !0;
      }
    }
    function c() {
      l == null || l.cancel(), p(), f();
    }
    return w([() => n.startVal, () => n.endVal], () => {
      n.autoplay && c();
    }), w(r, (u) => {
      var h;
      u && ((h = n.options) != null && h.onCompleteCallback && n.options.onCompleteCallback(), i("finished"));
    }), F(() => {
      p(), n.autoplay && f();
    }), b(() => {
      var u;
      l == null || l.cancel(), (u = a.value) == null || u.reset();
    }), e({
      init: p,
      restart: c
    }), (u, h) => (A(), S("div", T, [
      y(u.$slots, "prefix"),
      N("span", {
        ref_key: "elRef",
        ref: t
      }, null, 512),
      y(u.$slots, "suffix")
    ]));
  }
});
export {
  _ as default
};
