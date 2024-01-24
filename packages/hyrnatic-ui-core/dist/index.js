var ln = Object.defineProperty;
var an = (e, t, n) => t in e ? ln(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var K = (e, t, n) => (an(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as h, reactive as x, defineComponent as V, h as A, getCurrentInstance as D, provide as W, inject as G, ref as k, watch as z, getCurrentScope as cn, onScopeDispose as un, unref as dn, toRef as fn, readonly as It, customRef as pn, onMounted as re, nextTick as ne, shallowReactive as mn, onUnmounted as he, Teleport as Rt, shallowRef as xt, createVNode as le, Transition as hn, isVNode as vn, withDirectives as Ie, mergeProps as ze, vShow as gn, resolveDirective as Re, onBeforeUnmount as bn } from "vue";
function N(e, t) {
  return e.__hyrnatic_ui_installed && e.__hyrnatic_ui_installed.indexOf(t) !== -1;
}
function F(e, t) {
  e.__hyrnatic_ui_installed || (e.__hyrnatic_ui_installed = []), e.__hyrnatic_ui_installed.push(t);
}
function j(e, t) {
  Object.keys(t).forEach((n) => {
    e.component(t[n].name, t[n]);
  });
}
function yn(e, t, n) {
  e.component(t, n);
}
function kt(e, t) {
  Object.keys(t).forEach((n) => {
    e.directive(t[n].name, t[n]);
  });
}
function Ot(e, t, n) {
  Object.values(t).forEach((o) => {
    o.install(e, n);
  });
}
const pl = {
  installComponents: j,
  installComponentAlias: yn,
  installDependencies: Ot,
  installDirectives: kt,
  isModuleInstalled: N,
  markModuleAsInstalled: F
}, wn = {
  name: "click-outside",
  mounted(e, t) {
    if (typeof t.value != "function") {
      console.warn(`[v-click-outside:] provided expression '${t.expression}' is not a function`);
      return;
    }
    e.__click_outside_event = "click", e.__click_outside_handler = (n) => {
      (t.modifiers.bubble || !e.contains(n.target) && e !== n.target) && t.value(n);
    }, document.addEventListener(e.__click_outside_event, e.__click_outside_handler);
  },
  beforeUnmount(e) {
    document.removeEventListener(e.__click_outside_event, e.__click_outside_handler), delete e.__click_outside_handler, delete e.__click_outside_event;
  }
}, Pn = {
  name: "document-event",
  mounted(e, t, n) {
    e.__document_events = e.__document_events || {};
    const o = {
      event: t.arg,
      handler: (s) => {
        t.expression ? n.context[t.expression](s) : t.value && t.value(s);
      }
    };
    e.__document_events[o.event] = o, document.addEventListener(o.event, o.handler);
  },
  beforeUnmount(e, t) {
    if (e.__document_events[t.arg]) {
      const n = e.__document_events[t.arg];
      document.removeEventListener(n.event, n.handler), delete e.__document_events[n.event];
    }
    Object.keys(e.__document_events).length === 0 && delete e.__document_events;
  }
};
var Dt = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(s, r) {
      return s[0] === n ? (o = r, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var o = e(this.__entries__, n), s = this.__entries__[o];
        return s && s[1];
      }, t.prototype.set = function(n, o) {
        var s = e(this.__entries__, n);
        ~s ? this.__entries__[s][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, s = e(o, n);
        ~s && o.splice(s, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var s = 0, r = this.__entries__; s < r.length; s++) {
          var i = r[s];
          n.call(o, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), Ne = typeof window < "u" && typeof document < "u" && window.document === document, xe = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Cn = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(xe) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Sn = 2;
function _n(e, t) {
  var n = !1, o = !1, s = 0;
  function r() {
    n && (n = !1, e()), o && l();
  }
  function i() {
    Cn(r);
  }
  function l() {
    var a = Date.now();
    if (n) {
      if (a - s < Sn)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(i, t);
    s = a;
  }
  return l;
}
var In = 20, Rn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xn = typeof MutationObserver < "u", kn = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = _n(this.refresh.bind(this), In);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, o = n.indexOf(t);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ne || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ne || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, s = Rn.some(function(r) {
        return !!~o.indexOf(r);
      });
      s && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Tt = function(e, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var s = o[n];
    Object.defineProperty(e, s, {
      value: t[s],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, fe = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || xe;
}, Vt = Ee(0, 0, 0, 0);
function ke(e) {
  return parseFloat(e) || 0;
}
function Ge(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, s) {
    var r = e["border-" + s + "-width"];
    return o + ke(r);
  }, 0);
}
function On(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, s = t; o < s.length; o++) {
    var r = s[o], i = e["padding-" + r];
    n[r] = ke(i);
  }
  return n;
}
function Dn(e) {
  var t = e.getBBox();
  return Ee(0, 0, t.width, t.height);
}
function Tn(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Vt;
  var o = fe(e).getComputedStyle(e), s = On(o), r = s.left + s.right, i = s.top + s.bottom, l = ke(o.width), a = ke(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + r) !== t && (l -= Ge(o, "left", "right") + r), Math.round(a + i) !== n && (a -= Ge(o, "top", "bottom") + i)), !En(e)) {
    var u = Math.round(l + r) - t, b = Math.round(a + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(b) !== 1 && (a -= b);
  }
  return Ee(s.left, s.top, l, a);
}
var Vn = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof fe(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof fe(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function En(e) {
  return e === fe(e).document.documentElement;
}
function $n(e) {
  return Ne ? Vn(e) ? Dn(e) : Tn(e) : Vt;
}
function An(e) {
  var t = e.x, n = e.y, o = e.width, s = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(r.prototype);
  return Tt(i, {
    x: t,
    y: n,
    width: o,
    height: s,
    top: n,
    right: t + o,
    bottom: s + n,
    left: t
  }), i;
}
function Ee(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var Bn = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ee(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = $n(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Mn = (
  /** @class */
  function() {
    function e(t, n) {
      var o = An(n);
      Tt(this, { target: t, contentRect: o });
    }
    return e;
  }()
), Ln = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new Dt(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof fe(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Bn(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof fe(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new Mn(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Dt(), $t = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = kn.getInstance(), o = new Ln(t, n, this);
      Et.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  $t.prototype[e] = function() {
    var t;
    return (t = Et.get(this))[e].apply(t, arguments);
  };
});
var zn = function() {
  return typeof xe.ResizeObserver < "u" ? xe.ResizeObserver : $t;
}();
let Nn = 1;
const Fe = {}, Ze = new zn((e) => {
  e.forEach((t) => {
    const n = t.target;
    n.__resize_callback_id__ && Fe[n.__resize_callback_id__]();
  });
}), Fn = {
  name: "resize",
  mounted(e, { value: t }) {
    if (!t || typeof t != "function") {
      console.warn("v-resize should received a function as value");
      return;
    }
    Ze.observe(e), e.__resize_callback_id__ = Nn++, Fe[e.__resize_callback_id__] = t;
  },
  beforeUnmount(e) {
    Ze.unobserve(e), e.__resize_callback_id__ && (delete Fe[e.__resize_callback_id__], delete e.__resize_callback_id__);
  }
}, Je = "core-common", jn = {
  ClickOutside: wn,
  DocumentEvent: Pn,
  Resize: Fn
}, At = {
  install: (e, t) => {
    N(e, Je) || (kt(e, jn), F(e, Je));
  }
}, B = {
  as: {
    type: String,
    default: null
  }
}, M = {
  asProps: {
    type: Function,
    default: null
  }
};
function Hn() {
  return {};
}
function Bt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = h(() => e[o]);
  }), n;
}
function Mt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = (...s) => e.emit(o, ...s);
  }), n;
}
function $(e) {
  const t = x({}), n = {}, o = {
    /**
     * Render the renderless spinner with a wrapper
     * @param tag HTML tag to use as wrapper
     * @param func Callback to apply properties to the wrapper element
     */
    as(s, r = Hn) {
      return t.as = s, t.asProps = r, o;
    },
    /**
     * Proxy properties as computed from the instance to the renderless spinner
     * @param proxies
     */
    props(s) {
      return s.forEach((r) => {
        this.setProp(r, h(() => e.props[r]));
      }), o;
    },
    /**
     * Sets a property to a value
     * @param key
     * @param value
     */
    setProp(s, r) {
      return t[s] = r, o;
    },
    /**
     * Proxy events from the renderless to the instance
     * @param events
     */
    events(s) {
      return s.forEach((r) => {
        n[r] = (...i) => e.emit(r, ...i);
      }), o;
    },
    build() {
      return {
        props: t,
        listeners: n
      };
    }
  };
  return o;
}
const Wn = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, qn = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Un = {
  loading: {
    type: Boolean,
    default: !1
  }
};
function ml() {
  return $(D());
}
const Kn = /* @__PURE__ */ V({
  name: "hr-button",
  props: {
    ...B,
    ...M,
    ...qn,
    ...Wn,
    ...Un
  },
  emits: ["click"],
  setup(e, t) {
    const n = (r) => {
      !e.disabled && !e.loading && e.visible && t.emit("click", r);
    }, o = x({
      disabled: h(() => e.disabled),
      loading: h(() => e.loading),
      onClick: n
    }), s = () => t.slots.default(o);
    return () => {
      if (e.as) {
        const r = e.asProps ? e.asProps(o) : {};
        return A(e.as, {
          ...r
        }, s());
      }
      return s();
    };
  }
}), Qe = "core-buttons", Yn = {
  Button: Kn
}, Xn = {
  install: (e, t) => {
    N(e, Qe) || (j(e, Yn), F(e, Qe));
  }
}, Gn = {
  modelValue: {
    type: [Array, Boolean, String],
    required: !0
  }
}, Zn = {
  value: {
    type: null,
    default: !0
  }
}, Jn = {
  disabled: {
    type: Boolean,
    default: !1,
    docs: {
      origin: "core",
      description: "Determines if the checkbox is disabled.",
      type: "boolean",
      values: null,
      default: !1
    }
  }
}, Qn = {
  visible: {
    type: Boolean,
    default: !0,
    docs: {
      origin: "core",
      description: "Determines if the button is visible. Use this instead of v-show.",
      type: "boolean",
      values: null,
      default: !0
    }
  }
}, eo = {
  indeterminate: {
    type: Boolean,
    default: !1
  }
};
function hl() {
  return $(D());
}
const to = /* @__PURE__ */ V({
  name: "hr-checkbox",
  props: {
    ...B,
    ...M,
    ...Jn,
    ...Qn,
    ...eo,
    ...Gn,
    ...Zn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => Array.isArray(e.modelValue) ? e.modelValue.indexOf(e.value) > -1 : e.modelValue === e.value), o = () => {
      if (Array.isArray(e.modelValue)) {
        const a = e.modelValue.slice(0);
        a.push(e.value), t.emit("update:modelValue", a);
      } else
        t.emit("update:modelValue", e.value);
    }, s = () => {
      if (Array.isArray(e.modelValue)) {
        const a = e.modelValue.slice(0);
        a.splice(a.indexOf(e.value), 1), t.emit("update:modelValue", a);
      } else
        e.value === !0 ? t.emit("update:modelValue", !1) : t.emit("update:modelValue", null);
    }, r = () => {
      !e.disabled && e.visible && (n.value ? s() : o());
    }, i = x({
      state: h(() => n.value),
      disabled: h(() => e.disabled),
      indeterminate: h(() => e.indeterminate),
      check: o,
      uncheck: s,
      onChange: r
    });
    return {
      slotProps: i,
      defaultRender: () => t.slots.default(i)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), et = "core-checkboxes", no = {
  Checkbox: to
}, oo = {
  install: (e, t) => {
    N(e, et) || (j(e, no), F(e, et));
  }
}, U = {
  isEmpty(e) {
    return Array.isArray(e) && e.length === 0;
  },
  remove(e, t) {
    return e.filter((n) => n !== t);
  },
  next(e, t, n = null) {
    const o = t === null ? 0 : t + 1;
    for (let s = o; s < e.length; s++)
      if (n === null || n(e[s]))
        return e[s];
    for (let s = 0; s < o; s++)
      if (n === null || n(e[s]))
        return e[s];
    return null;
  },
  prev(e, t, n = null) {
    const o = t === null ? e.length - 1 : t - 1;
    for (let s = o; s >= 0; s--)
      if (n === null || n(e[s]))
        return e[s];
    for (let s = e.length - 1; s > o; s--)
      if (n === null || n(e[s]))
        return e[s];
    return null;
  },
  simpleSort(e, t, n) {
    const o = (r) => !Number.isNaN(Number(r));
    let s;
    return o(e) ? o(t) ? s = parseFloat(e) - parseFloat(t) : s = -1 : o(t) ? s = 1 : s = e.localeCompare(t), n && (s *= -1), s;
  }
}, so = {
  accordion: {
    type: Boolean,
    default: !1
  }
}, ro = {
  modelValue: {
    type: [Array, String, Number],
    required: !0
  }
};
function vl() {
  return $(D());
}
const io = /* @__PURE__ */ V({
  name: "hr-collapse",
  props: {
    ...B,
    ...M,
    ...so,
    ...ro
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => [].concat(e.modelValue));
    W("collapse", {
      onItemClick: (i) => {
        if (e.accordion)
          t.emit("update:modelValue", e.modelValue === i ? null : i);
        else if (Array.isArray(e.modelValue)) {
          let l = e.modelValue.slice(0);
          e.modelValue.indexOf(i) === -1 ? l.push(i) : l = U.remove(l, i), t.emit("update:modelValue", l);
        } else
          t.emit("update:modelValue", e.modelValue === i ? null : i);
      },
      expandedItems: n
    });
    const s = x({
      accordion: h(() => e.accordion),
      expandedItems: n
    });
    return {
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), lo = {
  id: {
    type: String,
    required: !0
  }
};
function gl() {
  return $(D());
}
const ao = /* @__PURE__ */ V({
  name: "hr-collapse-item",
  props: {
    ...B,
    ...M,
    ...lo
  },
  setup(e, t) {
    const n = G("collapse"), o = h(() => n.expandedItems.value.indexOf(e.id) !== -1), r = x({
      expanded: o,
      onClick: () => {
        n.onItemClick(e.id);
      }
    });
    return {
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), co = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
function bl() {
  return $(D());
}
const uo = /* @__PURE__ */ V({
  name: "hr-inline-collapse",
  props: {
    ...B,
    ...M,
    ...co
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(e.modelValue);
    z(() => e.modelValue, (i) => {
      n.value = i;
    });
    const o = () => {
      n.value = !n.value, t.emit("update:modelValue", !e.modelValue);
    }, s = x({
      expanded: h(() => n.value),
      onClick: o
    });
    return {
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), tt = "core-collapses", fo = {
  Collapse: io,
  CollapseItem: ao,
  InlineCollapse: uo
}, po = {
  install: (e, t) => {
    N(e, tt) || (j(e, fo), F(e, tt));
  }
};
function Pe(e) {
  return cn() ? (un(e), !0) : !1;
}
function Q(e) {
  return typeof e == "function" ? e() : dn(e);
}
const He = typeof window < "u" && typeof document < "u", mo = Object.prototype.toString, ho = (e) => mo.call(e) === "[object Object]", Lt = () => {
}, nt = /* @__PURE__ */ vo();
function vo() {
  var e;
  return He && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function go(...e) {
  if (e.length !== 1)
    return fn(...e);
  const t = e[0];
  return typeof t == "function" ? It(pn(() => ({ get: t, set: Lt }))) : k(t);
}
function bo(e, t = !0) {
  D() ? re(e) : t ? e() : ne(e);
}
function ve(e) {
  var t;
  const n = Q(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $e = He ? window : void 0, yo = He ? window.document : void 0;
function wo(...e) {
  let t, n, o, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, s] = e, t = $e) : [t, n, o, s] = e, !t)
    return Lt;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], i = () => {
    r.forEach((b) => b()), r.length = 0;
  }, l = (b, p, v, c) => (b.addEventListener(p, v, c), () => b.removeEventListener(p, v, c)), a = z(
    () => [ve(t), Q(s)],
    ([b, p]) => {
      if (i(), !b)
        return;
      const v = ho(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((c) => o.map((g) => l(b, c, g, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), i();
  };
  return Pe(u), u;
}
function Po() {
  const e = k(!1);
  return D() && re(() => {
    e.value = !0;
  }), e;
}
function zt(e) {
  const t = Po();
  return h(() => (t.value, !!e()));
}
function Co(e, t, n = {}) {
  const { window: o = $e, ...s } = n;
  let r;
  const i = zt(() => o && "MutationObserver" in o), l = () => {
    r && (r.disconnect(), r = void 0);
  }, a = z(
    () => ve(e),
    (b) => {
      l(), i.value && o && b && (r = new MutationObserver(t), r.observe(b, s));
    },
    { immediate: !0 }
  ), u = () => {
    l(), a();
  };
  return Pe(u), {
    isSupported: i,
    stop: u
  };
}
function So(e, t, n = {}) {
  const { window: o = $e, initialValue: s = "", observe: r = !1 } = n, i = k(s), l = h(() => {
    var u;
    return ve(t) || ((u = o == null ? void 0 : o.document) == null ? void 0 : u.documentElement);
  });
  function a() {
    var u;
    const b = Q(e), p = Q(l);
    if (p && o) {
      const v = (u = o.getComputedStyle(p).getPropertyValue(b)) == null ? void 0 : u.trim();
      i.value = v || s;
    }
  }
  return r && Co(l, a, {
    attributeFilter: ["style", "class"],
    window: o
  }), z(
    [l, () => Q(e)],
    a,
    { immediate: !0 }
  ), z(
    i,
    (u) => {
      var b;
      (b = l.value) != null && b.style && l.value.style.setProperty(Q(e), u);
    }
  ), i;
}
function _o(e, t, n = {}) {
  const { window: o = $e, ...s } = n;
  let r;
  const i = zt(() => o && "ResizeObserver" in o), l = () => {
    r && (r.disconnect(), r = void 0);
  }, a = h(
    () => Array.isArray(e) ? e.map((p) => ve(p)) : [ve(e)]
  ), u = z(
    a,
    (p) => {
      if (l(), i.value && o) {
        r = new ResizeObserver(t);
        for (const v of p)
          v && r.observe(v, s);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), b = () => {
    l(), u();
  };
  return Pe(b), {
    isSupported: i,
    stop: b
  };
}
function Le(e) {
  return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
function Nt(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Nt(n);
  }
}
function Io(e) {
  const t = e || window.event, n = t.target;
  return Nt(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function Ro(e, t = !1) {
  const n = k(t);
  let o = null, s;
  z(go(e), (l) => {
    const a = Le(Q(l));
    if (a) {
      const u = a;
      s = u.style.overflow, n.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const r = () => {
    const l = Le(Q(e));
    !l || n.value || (nt && (o = wo(
      l,
      "touchmove",
      (a) => {
        Io(a);
      },
      { passive: !1 }
    )), l.style.overflow = "hidden", n.value = !0);
  }, i = () => {
    const l = Le(Q(e));
    !l || !n.value || (nt && (o == null || o()), l.style.overflow = s, n.value = !1);
  };
  return Pe(i), h({
    get() {
      return n.value;
    },
    set(l) {
      l ? r() : i();
    }
  });
}
let xo = 0;
function ko(e, t = {}) {
  const n = k(!1), {
    document: o = yo,
    immediate: s = !0,
    manual: r = !1,
    id: i = `vueuse_styletag_${++xo}`
  } = t, l = k(e);
  let a = () => {
  };
  const u = () => {
    if (!o)
      return;
    const p = o.getElementById(i) || o.createElement("style");
    p.isConnected || (p.id = i, t.media && (p.media = t.media), o.head.appendChild(p)), !n.value && (a = z(
      l,
      (v) => {
        p.textContent = v;
      },
      { immediate: !0 }
    ), n.value = !0);
  }, b = () => {
    !o || !n.value || (a(), o.head.removeChild(o.getElementById(i)), n.value = !1);
  };
  return s && !r && bo(u), r || Pe(b), {
    id: i,
    css: l,
    unload: b,
    load: u,
    isLoaded: It(n)
  };
}
const We = {
  random(e = 16) {
    let t = "";
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let o = 0; o < e; o++)
      t += n.charAt(Math.floor(Math.random() * n.length));
    return t;
  },
  kebabize(e) {
    return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
  },
  trimMultiSpaces(e) {
    return e.replace(/ +(?= )/g, "");
  }
}, pe = mn({}), Oo = /* @__PURE__ */ V({
  name: "hr-dialog-wrapper",
  props: {
    teleport: {
      type: String,
      default: "body"
    },
    name: {
      type: String,
      default: "default"
    },
    lockWindowScroll: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    W("wrapper-name", e.name);
    const t = k(0);
    W("global-scrollbar-width", t);
    const n = x({}), o = x({}), s = h(() => {
      const d = {};
      return Object.keys(o).forEach((m) => {
        d[m] = o[m].length;
      }), d;
    }), r = h(() => {
      const d = {};
      return Object.keys(o).forEach((m) => {
        d[m] = o[m].filter((I) => I.visible).length;
      }), d;
    }), i = (d) => d.charAt(0).toUpperCase() + d.slice(1), l = (d) => d.split("-").map((L) => i(L)).join(""), a = (d) => {
      const m = {};
      return Object.keys(d).forEach((I) => {
        m[`on${l(I)}`] = d[I];
      }), m;
    }, u = (d) => {
      const m = n[d];
      m.visible = !1;
    }, b = (d) => {
      const m = n[d];
      delete n[d], o[m.stack] = o[m.stack].filter((I) => I.id !== d);
    }, p = (d) => {
      u(d);
    }, v = (d) => {
      const m = d;
      return m.resolve = (I = null) => {
        m.promise.resolve(I), u(m.id);
      }, m.reject = (I = null) => {
        m.promise.reject(I), u(m.id);
      }, m.transitionEnd = () => {
        b(m.id);
      }, m.visible = !0, m.id = We.random(), m.compiledListeners = h(() => m.listeners ? a(m.listeners) : {}), o[m.stack] || (o[m.stack] = []), o[m.stack].push(m), n[m.id] = m, m;
    }, c = (d) => n[d], g = (d) => h(() => s.value[d]), f = h(() => Object.values(s.value).reduce((d, m) => d + m, 0)), _ = (d) => h(() => r.value[d]), P = h(() => Object.values(r.value).reduce((d, m) => d + m, 0)), w = {
      addDialog: v,
      getDialog: c,
      destroyDialog: p,
      getStackCount: g,
      getStackVisibleCount: _,
      getStackIndex: (d, m) => h(() => o[d].findIndex((I) => I.id === m)),
      count: f,
      visibleCount: P
    };
    if (re(() => {
      pe[e.name] = w;
    }), he(() => {
      delete pe[e.name];
    }), e.lockWindowScroll) {
      const d = So("--h-global-scrollbar-width", document.body);
      _o(document.body, (L) => {
        const C = window.innerWidth - document.documentElement.clientWidth;
        d.value = `${C}px`, t.value = C;
      }), ko("body.has-dialogs {padding-right: var(--h-global-scrollbar-width);}");
      const m = k(document.body), I = Ro(m);
      z(() => P.value, (L) => {
        L > 0 ? (document.body.classList.add("has-dialogs"), I.value = !0) : (document.body.classList.remove("has-dialogs"), I.value = !1);
      });
    }
    return {
      ...w,
      IDialogs: n
    };
  },
  render() {
    return A(Rt, {
      to: this.$props.teleport
    }, Object.values(this.IDialogs).map((e) => A(e.component, {
      key: e.id,
      visible: e.visible,
      ...e.props,
      ...e.compiledListeners
    })));
  }
});
function Ft(e, t, n, o) {
  const s = o && o.wrapper ? o.wrapper : "default", r = o && o.stack ? o.stack : "default";
  let i = null;
  return {
    promise: new Promise((a, u) => {
      i = pe[s].addDialog({
        component: xt(e),
        listeners: n !== void 0 ? x(n) : null,
        props: t !== void 0 ? x(t) : null,
        stack: r,
        promise: { resolve: a, reject: u }
      });
    }),
    destroy: () => pe[s].destroyDialog(i.id)
  };
}
function Do(e, t, n, o) {
  return Ft(e, t, n, o).promise;
}
function jt(e = "default") {
  return pe[e];
}
function Ht(e) {
  const t = G("wrapper-name");
  return pe[t].getDialog(e);
}
function To() {
  const e = D(), t = Ht(e.vnode.key);
  return W("dialog-id", e.vnode.key), W("dialog-resolve", t.resolve), W("dialog-reject", t.reject), W("dialog-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: Ft,
  createPromise: Do,
  getDialog: Ht,
  getWrapper: jt,
  setupDialog: To
}, Symbol.toStringTag, { value: "Module" })), Vo = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function wl(e = [], t = []) {
  const n = D();
  return {
    props: x({
      ...Bt(n.props, e)
    }),
    listeners: Mt(n, t)
  };
}
const Eo = /* @__PURE__ */ V({
  name: "hr-dialog",
  props: {
    ...Vo
  },
  setup(e, t) {
    const n = G("dialog-id");
    n || console.warn("You must call DialogManager.setupDialog() in the dialog setup");
    const o = G("dialog-reject"), s = () => {
      o(null);
    }, r = jt(), i = r.getDialog(n), l = x({
      visible: h(() => e.visible),
      stackIndex: r.getStackIndex(i.stack, i.id),
      stackCount: r.getStackCount(i.stack),
      visibleStackCount: r.getStackVisibleCount(i.stack),
      close: s
    });
    return () => t.slots.default(l);
  }
}), ot = "core-dialogs", $o = {
  Dialog: Eo,
  DialogWrapper: Oo
}, Ao = {
  install: (e, t) => {
    N(e, ot) || (j(e, $o), F(e, ot));
  }
}, Bo = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Mo = {
  label: {
    type: String,
    default: null
  }
};
function Pl() {
  return $(D());
}
const Lo = /* @__PURE__ */ V({
  name: "hr-dropdown-item",
  props: {
    ...B,
    ...M,
    ...Bo,
    ...Mo
  },
  emits: ["click"],
  setup(e, t) {
    const n = G("dropdown"), o = (a) => {
      e.disabled || (t.emit("click", a), n.onItemClick(a));
    }, s = x({
      disabled: e.disabled,
      label: e.label,
      onClick: o,
      component: D()
    });
    re(() => {
      n.addItemInstance(s);
    }), he(() => {
      n.removeItemInstance(s);
    });
    const r = h(() => n.focusedItem.value === s), i = x({
      disabled: h(() => e.disabled),
      focused: r,
      onClick: o
    });
    return {
      dropdown: n,
      slotProps: i,
      defaultRender: () => t.slots.default(i)
    };
  },
  render() {
    if (this.dropdown.itemsVisible.value) {
      if (this.$props.as) {
        const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
        return A(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), zo = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, No = {
  hideOnClick: {
    type: Boolean,
    default: !0
  }
}, Fo = {
  splitButton: {
    type: Boolean,
    default: !1
  }
}, jo = {
  visible: {
    type: Boolean,
    default: !0
  }
};
function Cl() {
  return $(D());
}
const Ho = /* @__PURE__ */ V({
  name: "hr-dropdown",
  props: {
    ...B,
    ...M,
    ...zo,
    ...No,
    ...Fo,
    ...jo
  },
  emits: ["click", "focusedItemChanged"],
  setup(e, t) {
    const n = k(!1), o = k(!1), s = k([]), r = k(null), i = h(() => s.value.filter((d) => d.disabled === !1)), l = () => {
      r.value = null;
    };
    z(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const a = h(() => e.disabled || !e.visible), u = (d) => {
      s.value.push(d);
    }, b = (d) => {
      s.value = U.remove(s.value, d);
    }, p = () => {
      n.value = !1;
    };
    z(() => e.visible, (d) => {
      d === !1 && p();
    });
    const v = () => {
      e.hideOnClick && p();
    }, c = (d, m) => {
      if (a.value)
        return !1;
      const I = () => r.value ? i.value.findIndex((L) => L === r.value) : null;
      !n.value && (d.key === "ArrowDown" || d.key === "ArrowUp" || d.key === "Enter") ? (d.key === "Enter" ? m === "main" ? t.emit("click", d) : m === "split" && (n.value = !n.value) : n.value = !n.value, d.preventDefault(), d.stopImmediatePropagation()) : d.key === "ArrowDown" ? (r.value = U.next(i.value, I()), d.preventDefault(), d.stopImmediatePropagation()) : d.key === "ArrowUp" ? (r.value = U.prev(i.value, I()), d.preventDefault(), d.stopImmediatePropagation()) : d.key === "Enter" && r.value ? (r.value.onClick(d), d.preventDefault(), d.stopImmediatePropagation()) : d.key === "Tab" ? p() : d.key === "Escape" && (p(), d.preventDefault(), d.stopImmediatePropagation());
    }, g = () => {
      if (a.value)
        return !1;
      e.splitButton ? t.emit("click") : n.value = !n.value;
    }, f = () => {
      if (a.value)
        return !1;
      n.value = !n.value;
    }, _ = (d) => {
      o.value = d;
    }, P = h(() => n.value || o.value);
    W("dropdown", {
      focusedItem: r,
      onItemClick: v,
      addItemInstance: u,
      removeItemInstance: b,
      menuVisible: h(() => n.value),
      itemsVisible: P
    });
    const O = x({
      menuVisible: h(() => n.value),
      disabled: h(() => e.disabled),
      splitButton: h(() => e.splitButton),
      focusedItem: h(() => r.value),
      clearFocusedItem: l,
      onKeyEvents: c,
      onButtonClick: g,
      onIconClick: f,
      onItemClick: v,
      onMenuTransitioning: _
    });
    return {
      close: p,
      slotProps: O,
      defaultRender: () => t.slots.default(O)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), st = "core-dropdowns", Wo = {
  Dropdown: Ho,
  DropdownItem: Lo
}, qo = {
  install: (e, t) => {
    N(e, st) || (j(e, Wo), F(e, st));
  }
}, Oe = Math.min, ae = Math.max, De = Math.round, _e = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), Uo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ko = {
  start: "end",
  end: "start"
};
function rt(e, t, n) {
  return ae(e, Oe(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ce(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function Ue(e) {
  return e === "x" ? "y" : "x";
}
function Wt(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(ce(e)) ? "y" : "x";
}
function qt(e) {
  return Ue(Ae(e));
}
function Yo(e, t, n) {
  n === void 0 && (n = !1);
  const o = qe(e), s = qt(e), r = Wt(s);
  let i = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = Te(i)), [i, Te(i)];
}
function Xo(e) {
  const t = Te(e);
  return [je(e), t, je(t)];
}
function je(e) {
  return e.replace(/start|end/g, (t) => Ko[t]);
}
function Go(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], r = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? r : i;
    default:
      return [];
  }
}
function Zo(e, t, n, o) {
  const s = qe(e);
  let r = Go(ce(e), n === "start", o);
  return s && (r = r.map((i) => i + "-" + s), t && (r = r.concat(r.map(je)))), r;
}
function Te(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Uo[t]);
}
function Jo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qo(e) {
  return typeof e != "number" ? Jo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ve(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function it(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = Ae(t), i = qt(t), l = Wt(i), a = ce(t), u = r === "y", b = o.x + o.width / 2 - s.width / 2, p = o.y + o.height / 2 - s.height / 2, v = o[l] / 2 - s[l] / 2;
  let c;
  switch (a) {
    case "top":
      c = {
        x: b,
        y: o.y - s.height
      };
      break;
    case "bottom":
      c = {
        x: b,
        y: o.y + o.height
      };
      break;
    case "right":
      c = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      c = {
        x: o.x - s.width,
        y: p
      };
      break;
    default:
      c = {
        x: o.x,
        y: o.y
      };
  }
  switch (qe(t)) {
    case "start":
      c[i] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      c[i] += v * (n && u ? -1 : 1);
      break;
  }
  return c;
}
const es = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: i
  } = n, l = r.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: b,
    y: p
  } = it(u, o, a), v = o, c = {}, g = 0;
  for (let f = 0; f < l.length; f++) {
    const {
      name: _,
      fn: P
    } = l[f], {
      x: O,
      y: w,
      data: d,
      reset: m
    } = await P({
      x: b,
      y: p,
      initialPlacement: o,
      placement: v,
      strategy: s,
      middlewareData: c,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (b = O ?? b, p = w ?? p, c = {
      ...c,
      [_]: {
        ...c[_],
        ...d
      }
    }, m && g <= 50) {
      g++, typeof m == "object" && (m.placement && (v = m.placement), m.rects && (u = m.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : m.rects), {
        x: b,
        y: p
      } = it(u, v, a)), f = -1;
      continue;
    }
  }
  return {
    x: b,
    y: p,
    placement: v,
    strategy: s,
    middlewareData: c
  };
};
async function Ut(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: r,
    rects: i,
    elements: l,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: b = "viewport",
    elementContext: p = "floating",
    altBoundary: v = !1,
    padding: c = 0
  } = ge(t, e), g = Qo(c), _ = l[v ? p === "floating" ? "reference" : "floating" : p], P = Ve(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(_))) == null || n ? _ : _.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: b,
    strategy: a
  })), O = p === "floating" ? {
    ...i.floating,
    x: o,
    y: s
  } : i.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), d = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, m = Ve(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: O,
    offsetParent: w,
    strategy: a
  }) : O);
  return {
    top: (P.top - m.top + g.top) / d.y,
    bottom: (m.bottom - P.bottom + g.bottom) / d.y,
    left: (P.left - m.left + g.left) / d.x,
    right: (m.right - P.right + g.right) / d.x
  };
}
const Kt = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        middlewareData: r,
        rects: i,
        initialPlacement: l,
        platform: a,
        elements: u
      } = t, {
        mainAxis: b = !0,
        crossAxis: p = !0,
        fallbackPlacements: v,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: f = !0,
        ..._
      } = ge(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const P = ce(s), O = ce(l) === l, w = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), d = v || (O || !f ? [Te(l)] : Xo(l));
      !v && g !== "none" && d.push(...Zo(l, f, g, w));
      const m = [l, ...d], I = await Ut(t, _), L = [];
      let C = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (b && L.push(I[P]), p) {
        const R = Yo(s, i, w);
        L.push(I[R[0]], I[R[1]]);
      }
      if (C = [...C, {
        placement: s,
        overflows: L
      }], !L.every((R) => R <= 0)) {
        var T, y;
        const R = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, E = m[R];
        if (E)
          return {
            data: {
              index: R,
              overflows: C
            },
            reset: {
              placement: E
            }
          };
        let H = (y = C.filter((q) => q.overflows[0] <= 0).sort((q, J) => q.overflows[1] - J.overflows[1])[0]) == null ? void 0 : y.placement;
        if (!H)
          switch (c) {
            case "bestFit": {
              var S;
              const q = (S = C.map((J) => [J.placement, J.overflows.filter((ie) => ie > 0).reduce((ie, Se) => ie + Se, 0)]).sort((J, ie) => J[1] - ie[1])[0]) == null ? void 0 : S[0];
              q && (H = q);
              break;
            }
            case "initialPlacement":
              H = l;
              break;
          }
        if (s !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
}, Yt = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: s
      } = t, {
        mainAxis: r = !0,
        crossAxis: i = !1,
        limiter: l = {
          fn: (_) => {
            let {
              x: P,
              y: O
            } = _;
            return {
              x: P,
              y: O
            };
          }
        },
        ...a
      } = ge(e, t), u = {
        x: n,
        y: o
      }, b = await Ut(t, a), p = Ae(ce(s)), v = Ue(p);
      let c = u[v], g = u[p];
      if (r) {
        const _ = v === "y" ? "top" : "left", P = v === "y" ? "bottom" : "right", O = c + b[_], w = c - b[P];
        c = rt(O, c, w);
      }
      if (i) {
        const _ = p === "y" ? "top" : "left", P = p === "y" ? "bottom" : "right", O = g + b[_], w = g - b[P];
        g = rt(O, g, w);
      }
      const f = l.fn({
        ...t,
        [v]: c,
        [p]: g
      });
      return {
        ...f,
        data: {
          x: f.x - n,
          y: f.y - o
        }
      };
    }
  };
}, ts = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: s,
        rects: r,
        middlewareData: i
      } = t, {
        offset: l = 0,
        mainAxis: a = !0,
        crossAxis: u = !0
      } = ge(e, t), b = {
        x: n,
        y: o
      }, p = Ae(s), v = Ue(p);
      let c = b[v], g = b[p];
      const f = ge(l, t), _ = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...f
      };
      if (a) {
        const w = v === "y" ? "height" : "width", d = r.reference[v] - r.floating[w] + _.mainAxis, m = r.reference[v] + r.reference[w] - _.mainAxis;
        c < d ? c = d : c > m && (c = m);
      }
      if (u) {
        var P, O;
        const w = v === "y" ? "width" : "height", d = ["top", "left"].includes(ce(s)), m = r.reference[p] - r.floating[w] + (d && ((P = i.offset) == null ? void 0 : P[p]) || 0) + (d ? 0 : _.crossAxis), I = r.reference[p] + r.reference[w] + (d ? 0 : ((O = i.offset) == null ? void 0 : O[p]) || 0) - (d ? _.crossAxis : 0);
        g < m ? g = m : g > I && (g = I);
      }
      return {
        [v]: c,
        [p]: g
      };
    }
  };
};
function se(e) {
  return Xt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function te(e) {
  var t;
  return (t = (Xt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xt(e) {
  return e instanceof Node || e instanceof Y(e).Node;
}
function ee(e) {
  return e instanceof Element || e instanceof Y(e).Element;
}
function Z(e) {
  return e instanceof HTMLElement || e instanceof Y(e).HTMLElement;
}
function lt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
function Ce(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = X(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function ns(e) {
  return ["table", "td", "th"].includes(se(e));
}
function Ke(e) {
  const t = Ye(), n = X(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function os(e) {
  let t = me(e);
  for (; Z(t) && !Be(t); ) {
    if (Ke(t))
      return t;
    t = me(t);
  }
  return null;
}
function Ye() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Be(e) {
  return ["html", "body", "#document"].includes(se(e));
}
function X(e) {
  return Y(e).getComputedStyle(e);
}
function Me(e) {
  return ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function me(e) {
  if (se(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lt(e) && e.host || // Fallback.
    te(e)
  );
  return lt(t) ? t.host : t;
}
function Gt(e) {
  const t = me(e);
  return Be(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Z(t) && Ce(t) ? t : Gt(t);
}
function be(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Gt(e), r = s === ((o = e.ownerDocument) == null ? void 0 : o.body), i = Y(s);
  return r ? t.concat(i, i.visualViewport || [], Ce(s) ? s : [], i.frameElement && n ? be(i.frameElement) : []) : t.concat(s, be(s, [], n));
}
function Zt(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Z(e), r = s ? e.offsetWidth : n, i = s ? e.offsetHeight : o, l = De(n) !== r || De(o) !== i;
  return l && (n = r, o = i), {
    width: n,
    height: o,
    $: l
  };
}
function Xe(e) {
  return ee(e) ? e : e.contextElement;
}
function de(e) {
  const t = Xe(e);
  if (!Z(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: r
  } = Zt(t);
  let i = (r ? De(n.width) : n.width) / o, l = (r ? De(n.height) : n.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
const ss = /* @__PURE__ */ oe(0);
function Jt(e) {
  const t = Y(e);
  return !Ye() || !t.visualViewport ? ss : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rs(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function ue(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), r = Xe(e);
  let i = oe(1);
  t && (o ? ee(o) && (i = de(o)) : i = de(e));
  const l = rs(r, n, o) ? Jt(r) : oe(0);
  let a = (s.left + l.x) / i.x, u = (s.top + l.y) / i.y, b = s.width / i.x, p = s.height / i.y;
  if (r) {
    const v = Y(r), c = o && ee(o) ? Y(o) : o;
    let g = v.frameElement;
    for (; g && o && c !== v; ) {
      const f = de(g), _ = g.getBoundingClientRect(), P = X(g), O = _.left + (g.clientLeft + parseFloat(P.paddingLeft)) * f.x, w = _.top + (g.clientTop + parseFloat(P.paddingTop)) * f.y;
      a *= f.x, u *= f.y, b *= f.x, p *= f.y, a += O, u += w, g = Y(g).frameElement;
    }
  }
  return Ve({
    width: b,
    height: p,
    x: a,
    y: u
  });
}
function is(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const s = Z(n), r = te(n);
  if (n === r)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = oe(1);
  const a = oe(0);
  if ((s || !s && o !== "fixed") && ((se(n) !== "body" || Ce(r)) && (i = Me(n)), Z(n))) {
    const u = ue(n);
    l = de(n), a.x = u.x + n.clientLeft, a.y = u.y + n.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - i.scrollLeft * l.x + a.x,
    y: t.y * l.y - i.scrollTop * l.y + a.y
  };
}
function ls(e) {
  return Array.from(e.getClientRects());
}
function Qt(e) {
  return ue(te(e)).left + Me(e).scrollLeft;
}
function as(e) {
  const t = te(e), n = Me(e), o = e.ownerDocument.body, s = ae(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = ae(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Qt(e);
  const l = -n.scrollTop;
  return X(o).direction === "rtl" && (i += ae(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: r,
    x: i,
    y: l
  };
}
function cs(e, t) {
  const n = Y(e), o = te(e), s = n.visualViewport;
  let r = o.clientWidth, i = o.clientHeight, l = 0, a = 0;
  if (s) {
    r = s.width, i = s.height;
    const u = Ye();
    (!u || u && t === "fixed") && (l = s.offsetLeft, a = s.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: l,
    y: a
  };
}
function us(e, t) {
  const n = ue(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, r = Z(e) ? de(e) : oe(1), i = e.clientWidth * r.x, l = e.clientHeight * r.y, a = s * r.x, u = o * r.y;
  return {
    width: i,
    height: l,
    x: a,
    y: u
  };
}
function at(e, t, n) {
  let o;
  if (t === "viewport")
    o = cs(e, n);
  else if (t === "document")
    o = as(te(e));
  else if (ee(t))
    o = us(t, n);
  else {
    const s = Jt(e);
    o = {
      ...t,
      x: t.x - s.x,
      y: t.y - s.y
    };
  }
  return Ve(o);
}
function en(e, t) {
  const n = me(e);
  return n === t || !ee(n) || Be(n) ? !1 : X(n).position === "fixed" || en(n, t);
}
function ds(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = be(e, [], !1).filter((l) => ee(l) && se(l) !== "body"), s = null;
  const r = X(e).position === "fixed";
  let i = r ? me(e) : e;
  for (; ee(i) && !Be(i); ) {
    const l = X(i), a = Ke(i);
    !a && l.position === "fixed" && (s = null), (r ? !a && !s : !a && l.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Ce(i) && !a && en(e, i)) ? o = o.filter((b) => b !== i) : s = l, i = me(i);
  }
  return t.set(e, o), o;
}
function fs(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const i = [...n === "clippingAncestors" ? ds(t, this._c) : [].concat(n), o], l = i[0], a = i.reduce((u, b) => {
    const p = at(t, b, s);
    return u.top = ae(p.top, u.top), u.right = Oe(p.right, u.right), u.bottom = Oe(p.bottom, u.bottom), u.left = ae(p.left, u.left), u;
  }, at(t, l, s));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ps(e) {
  return Zt(e);
}
function ms(e, t, n) {
  const o = Z(t), s = te(t), r = n === "fixed", i = ue(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = oe(0);
  if (o || !o && !r)
    if ((se(t) !== "body" || Ce(s)) && (l = Me(t)), o) {
      const u = ue(t, !0, r, t);
      a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
    } else
      s && (a.x = Qt(s));
  return {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function ct(e, t) {
  return !Z(e) || X(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function tn(e, t) {
  const n = Y(e);
  if (!Z(e))
    return n;
  let o = ct(e, t);
  for (; o && ns(o) && X(o).position === "static"; )
    o = ct(o, t);
  return o && (se(o) === "html" || se(o) === "body" && X(o).position === "static" && !Ke(o)) ? n : o || os(e) || n;
}
const hs = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const s = this.getOffsetParent || tn, r = this.getDimensions;
  return {
    reference: ms(t, await s(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await r(n)
    }
  };
};
function vs(e) {
  return X(e).direction === "rtl";
}
const gs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: is,
  getDocumentElement: te,
  getClippingRect: fs,
  getOffsetParent: tn,
  getElementRects: hs,
  getClientRects: ls,
  getDimensions: ps,
  getScale: de,
  isElement: ee,
  isRTL: vs
};
function bs(e, t) {
  let n = null, o;
  const s = te(e);
  function r() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), r();
    const {
      left: u,
      top: b,
      width: p,
      height: v
    } = e.getBoundingClientRect();
    if (l || t(), !p || !v)
      return;
    const c = _e(b), g = _e(s.clientWidth - (u + p)), f = _e(s.clientHeight - (b + v)), _ = _e(u), O = {
      rootMargin: -c + "px " + -g + "px " + -f + "px " + -_ + "px",
      threshold: ae(0, Oe(1, a)) || 1
    };
    let w = !0;
    function d(m) {
      const I = m[0].intersectionRatio;
      if (I !== a) {
        if (!w)
          return i();
        I ? i(!1, I) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(d, {
        ...O,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(d, O);
    }
    n.observe(e);
  }
  return i(!0), r;
}
function ys(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, u = Xe(e), b = s || r ? [...u ? be(u) : [], ...be(t)] : [];
  b.forEach((P) => {
    s && P.addEventListener("scroll", n, {
      passive: !0
    }), r && P.addEventListener("resize", n);
  });
  const p = u && l ? bs(u, n) : null;
  let v = -1, c = null;
  i && (c = new ResizeObserver((P) => {
    let [O] = P;
    O && O.target === u && c && (c.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      c && c.observe(t);
    })), n();
  }), u && !a && c.observe(u), c.observe(t));
  let g, f = a ? ue(e) : null;
  a && _();
  function _() {
    const P = ue(e);
    f && (P.x !== f.x || P.y !== f.y || P.width !== f.width || P.height !== f.height) && n(), f = P, g = requestAnimationFrame(_);
  }
  return n(), () => {
    b.forEach((P) => {
      s && P.removeEventListener("scroll", n), r && P.removeEventListener("resize", n);
    }), p && p(), c && c.disconnect(), c = null, a && cancelAnimationFrame(g);
  };
}
const ws = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: gs,
    ...n
  }, r = {
    ...s.platform,
    _c: o
  };
  return es(e, t, {
    ...s,
    platform: r
  });
};
function Ps(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !vn(e);
}
const Cs = {
  reference: {
    type: null,
    required: !0
  }
}, Ss = {
  visible: {
    type: Boolean,
    default: !1
  }
}, _s = {
  keep: {
    type: Boolean,
    default: !1
  }
}, Is = {
  transition: {
    type: String,
    default: null
  }
}, Rs = (e = "bottom") => ({
  placement: {
    type: String,
    default: e
  }
}), xs = {
  middleware: {
    type: Array,
    default: () => [Kt(), Yt({
      limiter: ts()
    })]
  }
};
function Sl() {
  return $(D());
}
function _l(e) {
  const t = e.split("-");
  return {
    placement: t[0],
    alignment: t.length === 2 ? t[1] : null
  };
}
const ks = /* @__PURE__ */ V({
  name: "hr-floating",
  props: {
    ...B,
    ...Cs,
    ...Ss,
    ..._s,
    ...Is,
    ...Rs(),
    ...xs
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0,
    transitionStateChanged: (e) => !0,
    show: () => !0,
    hide: () => !0
  },
  setup(e, t) {
    const n = k(null), o = k(null), s = x({
      position: "absolute",
      left: "0",
      top: "0",
      maxWidth: "",
      maxHeight: "",
      zIndex: 1
    }), r = h(() => [Kt(), Yt({
      padding: 8
    }), ...e.middleware]), i = () => {
      n.value && ws(e.reference, n.value, {
        placement: e.placement,
        middleware: r.value
      }).then((c) => {
        t.emit("computedPosition", c), s.position = c.strategy, s.left = `${c.x ?? 0}px`, s.top = `${c.y ?? 0}px`, s.zIndex = 1;
      });
    }, l = () => {
      n.value && (o.value = ys(e.reference, n.value, i));
    };
    z(() => e.visible, (c) => {
      c ? t.emit("show") : t.emit("hide"), c && !o.value && ne(l);
    });
    const a = (c, g) => typeof c.contains == "function" ? c.contains(g) : !1, u = (c) => {
      if (!e.visible)
        return;
      const g = !n.value || c.target && !a(n.value, c.target), f = !e.reference || c.target && !a(e.reference, c.target);
      !g && !f || t.emit("clickOutside", {
        outsideFloating: g,
        outsideReference: f
      });
    }, b = () => {
      o.value && (o.value(), o.value = null);
    }, p = () => {
      t.emit("transitionStateChanged", !0);
    }, v = () => {
      t.emit("transitionStateChanged", !1), e.keep || b();
    };
    return he(() => {
      b();
    }), {
      middleware: r,
      floatingElement: n,
      style: s,
      onLeave: p,
      onAfterLeave: v,
      onDocumentClick: u
    };
  },
  render() {
    let e;
    const t = {
      ...this.$attrs,
      style: {
        ...this.style
      }
    }, n = this.$props.as || "span", o = () => this.$props.keep ? Ie(le(n, ze({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[gn, this.visible], [Re("document-event"), this.onDocumentClick, "click"]]) : this.visible ? Ie(le(n, ze({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[Re("document-event"), this.onDocumentClick, "click"]]) : null;
    return le(Rt, {
      to: "body"
    }, {
      default: () => [this.transition ? le(hn, {
        name: this.transition,
        onLeave: this.onLeave,
        onAfterLeave: this.onAfterLeave
      }, Ps(e = o()) ? e : {
        default: () => [e]
      }) : o()]
    });
  }
}), ut = "core-floating", Os = {
  Floating: ks
}, Ds = {
  install: (e, t) => {
    N(e, ut) || (j(e, Os), F(e, ut));
  }
}, Ts = {
  active: {
    type: String,
    required: !0
  }
};
function Il() {
  return $(D());
}
const Vs = /* @__PURE__ */ V({
  name: "hr-fragment-container",
  props: {
    ...B,
    ...M,
    ...Ts
  },
  emits: ["click"],
  setup(e, t) {
    const n = x({
      active: h(() => e.active)
    }), o = () => t.slots.default(n);
    return W("coreFragmentContainer", {
      active: h(() => e.active)
    }), {
      slotProps: n,
      defaultRender: o
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), dt = "core-fragments", Es = {
  FragmentContainer: Vs
}, $s = {
  install: (e, t) => {
    N(e, dt) || (j(e, Es), F(e, dt));
  }
}, As = {
  modelValue: {
    type: null,
    required: !0
  }
}, Bs = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Ms = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ls = {
  readonly: {
    type: Boolean,
    default: !1
  }
}, zs = {
  type: {
    type: String,
    default: null
  }
};
function Rl(e) {
  return $(D()).setProp("input", e);
}
const Ns = /* @__PURE__ */ V({
  name: "hr-input",
  props: {
    ...B,
    ...M,
    ...Ms,
    ...Ls,
    ...zs,
    ...As,
    ...Bs,
    input: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = (i) => {
      e.readonly ? i.target.selectionEnd === i.target.selectionStart && e.input.select() : e.input.focus();
    }, o = (i) => {
      let l = i;
      e.modelModifiers.capitalize && (l = l.charAt(0).toUpperCase() + l.slice(1));
      const {
        selectionStart: a
      } = e.input, {
        selectionEnd: u
      } = e.input;
      t.emit("update:modelValue", l), ne(() => {
        e.type !== "number" && e.input.setSelectionRange(a, u);
      });
    }, s = x({
      disabled: h(() => e.disabled),
      readonly: h(() => e.readonly),
      modelValue: h({
        get: () => e.modelValue,
        set: (i) => o(i)
      }),
      onClick: n
    });
    return {
      slotProps: s,
      focusInput: n,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Fs = {
  modelValue: {
    type: String,
    required: !0
  }
}, js = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Hs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ws = {
  items: {
    type: Array,
    default: () => []
  }
};
function xl(e) {
  return $(D()).setProp("input", e);
}
const qs = /* @__PURE__ */ V({
  name: "hr-autocomplete",
  props: {
    ...B,
    ...M,
    ...Hs,
    ...Ws,
    ...Fs,
    ...js,
    input: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = () => {
      e.input.focus();
    }, o = (c) => {
      const {
        selectionStart: g
      } = e.input, {
        selectionEnd: f
      } = e.input;
      t.emit("update:modelValue", c), ne(() => {
        e.input.setSelectionRange(g, f);
      });
    }, s = k(!1), r = k();
    z(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const i = (c) => {
      t.emit("itemSelected", c);
    }, l = () => {
      s.value = !1;
    }, a = () => {
      s.value = !0;
    }, u = (c) => {
      if (e.disabled)
        return !1;
      const g = () => r.value ? e.items.findIndex((f) => f === r.value) : null;
      !s.value && c.key !== "Escape" && e.modelValue.length > 0 ? a() : c.key === "ArrowDown" && e.modelValue.length > 0 ? (r.value = U.next(e.items, g()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowUp" && e.modelValue.length > 0 ? (r.value = U.prev(e.items, g()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Enter" && r.value ? (i(r.value), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Tab" ? l() : c.key === "Escape" && (l(), c.preventDefault(), c.stopImmediatePropagation());
    }, b = () => {
      r.value = null;
    }, p = x({
      modelValue: h({
        get: () => e.modelValue,
        set: (c) => o(c)
      }),
      disabled: h(() => e.disabled),
      items: h(() => e.items),
      focusedItem: h(() => r.value),
      listVisible: h(() => s.value && e.items.length > 0 && e.modelValue.length > 0),
      onItemClick: i,
      onKeyEvents: u,
      clearFocusedItem: b
    });
    return {
      slotProps: p,
      focusInput: n,
      defaultRender: () => t.slots.default(p),
      hideList: l,
      showList: a
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ft = "core-inputs", Us = {
  Input: Ns,
  Autocomplete: qs
}, Ks = {
  install: (e, t) => {
    N(e, ft) || (j(e, Us), F(e, ft));
  }
}, ye = {}, Ys = {
  name: {
    type: String,
    default: "default"
  }
};
function kl() {
  return $(D());
}
const Xs = /* @__PURE__ */ V({
  name: "hr-notification-wrapper",
  props: {
    ...B,
    ...M,
    ...Ys
  },
  setup: function(e) {
    W("wrapper-name", e.name);
    const t = x({}), n = (g) => g.charAt(0).toUpperCase() + g.slice(1), o = (g) => g.split("-").map((P) => n(P)).join(""), s = (g) => {
      const f = {};
      return Object.keys(g).forEach((_) => {
        f[`on${o(_)}`] = g[_];
      }), f;
    }, r = (g) => {
      const f = t[g];
      f && (f.visible = !1, f.durationTimeout !== null && clearTimeout(f.durationTimeout));
    }, i = (g) => {
      delete t[g];
    }, l = (g) => {
      r(g);
    }, a = (g) => {
      const f = t[g];
      f.durationTimeout !== null && f.options.resetDurationOnInteractivity && (clearTimeout(f.durationTimeout), f.durationTimeout = null);
    }, u = (g) => {
      a(g);
      const f = t[g];
      f.options.duration !== null && f.durationTimeout === null && f.visible === !0 && (f.durationTimeout = setTimeout(() => {
        f.reject();
      }, f.options.duration));
    }, v = {
      addNotification: (g) => {
        const f = g;
        return f.resolve = (_ = null) => {
          f.promise.resolve(_), r(f.id);
        }, f.reject = (_ = null) => {
          f.promise.reject(_), r(f.id);
        }, f.transitionEnd = () => {
          i(f.id);
        }, f.visible = !0, f.id = We.random(), f.compiledListeners = h(() => f.listeners ? s(f.listeners) : {}), f.durationTimeout = null, t[f.id] = f, u(f.id), f;
      },
      getNotification: (g) => t[g],
      destroyNotification: l,
      pauseDuration: a,
      resumeDuration: u
    };
    ye[e.name] = v;
    const c = x({
      name: h(() => e.name),
      notifications: h(() => t)
    });
    return {
      ...v,
      slotProps: c,
      INotifications: t
    };
  },
  render() {
    const e = () => this.$slots.default(this.slotProps);
    if (this.$props.as) {
      const t = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...t
      }, e());
    }
    return e();
  }
}), nn = {
  wrapper: "default",
  duration: 4500,
  resetDurationOnInteractivity: !0
};
function on(e, t, n, o) {
  const s = { ...nn, ...o }, r = s.wrapper;
  let i = null;
  return {
    promise: new Promise((a, u) => {
      i = ye[r].addNotification({
        component: xt(e),
        listeners: n !== void 0 ? x(n) : null,
        props: t !== void 0 ? x(t) : null,
        options: s,
        promise: { resolve: a, reject: u }
      });
    }),
    destroy: () => ye[r].destroyNotification(i.id)
  };
}
function Gs(e, t, n, o) {
  return on(e, t, n, o).promise;
}
function sn(e = "default") {
  return ye[e];
}
function Zs(e) {
  const t = G("wrapper-name");
  return ye[t].getNotification(e);
}
function Js() {
  const e = D(), t = Zs(e.vnode.key);
  return W("notification-id", e.vnode.key), W("notification-resolve", t.resolve), W("notification-reject", t.reject), W("notification-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultNotificationOptions: nn,
  getWrapper: sn,
  setupNotification: Js,
  show: on,
  showPromise: Gs
}, Symbol.toStringTag, { value: "Module" })), Qs = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function Dl() {
  return $(D());
}
const er = /* @__PURE__ */ V({
  name: "hr-notification",
  props: {
    ...B,
    ...M,
    ...Qs
  },
  setup(e, t) {
    const n = G("notification-id");
    n || console.warn("You must call NotificationManager.setupNotification() in the notification setup");
    const o = G("notification-reject"), s = () => {
      o(null);
    }, r = sn(), i = x({
      visible: h(() => e.visible),
      pauseDuration: () => r.pauseDuration(n),
      resumeDuration: () => r.resumeDuration(n),
      close: s
    }), l = () => t.slots.default(i);
    return () => {
      if (e.as) {
        const a = e.asProps ? e.asProps(i) : {};
        return A(e.as, {
          ...a
        }, l());
      }
      return l();
    };
  }
}), pt = "core-notifications", tr = {
  Notification: er,
  NotificationWrapper: Xs
}, nr = {
  install: (e, t) => {
    N(e, pt) || (j(e, tr), F(e, pt));
  }
}, or = {
  modelValue: {
    type: Number,
    required: !0
  }
}, sr = {
  pageSize: {
    type: Number,
    required: !0
  }
}, rr = {
  count: {
    type: Number,
    required: !0
  }
}, ir = {
  delta: {
    type: Number,
    default: 1
  }
};
function Tl() {
  return $(D());
}
const lr = /* @__PURE__ */ V({
  name: "hr-paginator",
  props: {
    ...B,
    ...M,
    ...or,
    ...sr,
    ...rr,
    ...ir
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => Math.ceil(e.count / e.pageSize)), o = h(() => {
      const l = e.modelValue, a = n.value, u = [], b = [];
      let p;
      u.push(1);
      for (let v = l - e.delta; v <= l + e.delta; v++)
        v < a && v > 1 && u.push(v);
      return a !== 1 && u.push(a), u.forEach((v) => {
        p && (v - p === 2 ? b.push(p + 1) : v - p !== 1 && b.push(null)), b.push(v), p = v;
      }), b;
    }), s = (l) => {
      l !== null && t.emit("update:modelValue", l);
    }, r = x({
      currentPage: h(() => e.modelValue),
      pages: n,
      buttons: o,
      onPaginationButtonClick: s
    });
    return {
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), mt = "core-paginators", ar = {
  Paginator: lr
}, cr = {
  install: (e, t) => {
    N(e, mt) || (j(e, ar), F(e, mt));
  }
}, ur = {
  value: {
    type: Number,
    required: !0
  }
}, dr = {
  minimum: {
    type: Number,
    default: 0
  }
}, fr = {
  maximum: {
    type: Number,
    default: 100
  }
};
function Vl() {
  return $(D());
}
const pr = /* @__PURE__ */ V({
  name: "hr-progress-bar",
  props: {
    ...B,
    ...M,
    ...ur,
    ...dr,
    ...fr
  },
  setup(e, t) {
    const n = h(() => {
      const r = (e.value - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(r);
    }), o = x({
      percentage: n
    });
    return {
      percentage: n,
      slotProps: o,
      defaultRender: () => t.slots.default(o)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ht = "core-progress-bars", mr = {
  ProgressBar: pr
}, hr = {
  install: (e, t) => {
    N(e, ht) || (j(e, mr), F(e, ht));
  }
}, vr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, gr = {
  modelValue: {
    type: null,
    required: !0
  }
}, br = {
  value: {
    type: null,
    default: !0
  }
};
function El() {
  return $(D());
}
const yr = /* @__PURE__ */ V({
  name: "hr-radio-button",
  props: {
    ...B,
    ...M,
    ...vr,
    ...gr,
    ...br
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.modelValue === e.value), o = () => {
      t.emit("update:modelValue", e.value);
    }, s = x({
      disabled: h(() => e.disabled),
      state: n,
      onChange: o
    });
    return {
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), vt = "core-radio-buttons", wr = {
  RadioButton: yr
}, Pr = {
  install: (e, t) => {
    N(e, vt) || (j(e, wr), F(e, vt));
  }
};
const Cr = {
  horizontal: {
    type: Boolean,
    default: !0
  }
}, Sr = {
  vertical: {
    type: Boolean,
    default: !0
  }
}, _r = {
  autoHide: {
    type: Boolean,
    default: !0
  }
}, Ir = {
  autoHideDelay: {
    type: Number,
    default: 1500
  }
}, Rr = {
  minimumSize: {
    type: Number,
    default: 20
  }
}, xr = {
  containerClasses: {
    type: null,
    default: null
  }
}, kr = {
  wrapperClasses: {
    type: null,
    default: null
  }
};
function $l() {
  return $(D());
}
const Or = /* @__PURE__ */ V({
  name: "hr-scroll-container",
  props: {
    as: {
      type: String,
      required: !0
    },
    ...M,
    ...Cr,
    ...Sr,
    ..._r,
    ...Ir,
    ...Rr,
    ...xr,
    ...kr
  },
  setup(e) {
    const t = k(), n = k(), o = k(), s = k(), r = k(), i = x({
      start: null,
      startOffset: null
    }), l = x({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), a = x({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), u = h(() => a.trackHover || l.trackHover), b = h(() => a.dragging || l.dragging), p = k(e.autoHide);
    let v = null;
    const c = () => {
      !e.autoHide || b.value || u.value || (p.value = !1, v && clearTimeout(v), v = setTimeout(() => {
        p.value = !0;
      }, e.autoHideDelay));
    }, g = (S) => {
      S ? (v && clearTimeout(v), p.value = !1) : c();
    };
    z(b, g), z(u, g);
    const f = (S, R) => {
      const E = S.getBoundingClientRect(), H = R.clientX, q = R.clientY, J = E.left, ie = J + E.width, Se = E.top, rn = Se + E.height;
      return H >= J && H <= ie && q >= Se && q <= rn;
    }, _ = (S) => {
      l.trackHover = n.value && l.visible && f(n.value, S), l.thumbHover = l.trackHover && f(o.value, S), a.trackHover = s.value && a.visible && f(s.value, S), a.thumbHover = a.trackHover && f(r.value, S);
    }, P = (S) => {
      if (l.dragging && i.startOffset) {
        const R = t.value.getBoundingClientRect(), E = n.value.getBoundingClientRect(), H = S.clientY - R.top - i.startOffset.top + (R.top - E.top), q = Math.min(100, Math.max(0, 100 / n.value.offsetHeight * H));
        t.value.scrollTop = t.value.scrollHeight * (q / 100), S.preventDefault(), S.stopImmediatePropagation();
      } else if (a.dragging && i.startOffset) {
        const R = t.value.getBoundingClientRect(), E = s.value.getBoundingClientRect(), H = S.clientX - R.left - i.startOffset.left + (R.left - E.left), q = Math.min(100, Math.max(0, 100 / s.value.offsetWidth * H));
        t.value.scrollLeft = t.value.scrollWidth * (q / 100), S.preventDefault(), S.stopImmediatePropagation();
      }
    }, O = (S) => {
      if (l.dragging = n.value && f(n.value, S), a.dragging = s.value && f(s.value, S), (l.dragging || a.dragging) && i.start === null) {
        const R = t.value.getBoundingClientRect();
        i.start = {
          top: S.clientY - R.top,
          left: S.clientX - R.left
        };
        const E = l.dragging ? o.value.getBoundingClientRect() : r.value.getBoundingClientRect();
        i.startOffset = {
          top: R.top - E.top + i.start.top,
          left: R.left - E.left + i.start.left
        }, S.preventDefault(), S.stopImmediatePropagation();
      }
    }, w = () => {
      l.dragging = a.dragging = !1, i.startOffset = i.start = null;
    }, d = k(0), m = k(0), I = () => {
      if (l.visible = t.value.scrollHeight > t.value.offsetHeight, l.visible && n.value && o.value)
        if (t.value.scrollHeight !== d.value && (c(), d.value = t.value.scrollHeight), n.value.offsetHeight === 0)
          ne(I);
        else {
          const S = 100 / t.value.scrollHeight * t.value.offsetHeight;
          l.size = Math.max(e.minimumSize, n.value.offsetHeight * (S / 100));
          const R = 100 / (t.value.scrollHeight - t.value.offsetHeight) * t.value.scrollTop;
          l.offset = (n.value.offsetHeight - l.size) * (R / 100);
        }
      if (a.visible = t.value.scrollWidth > t.value.offsetWidth, a.visible && s.value && r.value)
        if (t.value.scrollWidth !== m.value && (c(), m.value = t.value.scrollWidth), s.value.offsetWidth === 0)
          ne(I);
        else {
          const S = 100 / t.value.scrollWidth * t.value.offsetWidth;
          a.size = Math.max(e.minimumSize, s.value.offsetWidth * (S / 100));
          const R = 100 / (t.value.scrollWidth - t.value.offsetWidth) * t.value.scrollLeft;
          a.offset = (s.value.offsetWidth - a.size) * (R / 100);
        }
    }, L = (S, R) => {
      t.value.scrollTo(S, R);
    }, C = () => {
      c(), I();
    };
    re(() => {
      I(), document.addEventListener("mousemove", P), document.addEventListener("mouseup", w), t.value.addEventListener("scroll", C, {
        passive: !0
      });
    }), bn(() => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", w), t.value.removeEventListener("scroll", C);
    });
    const T = (S, R, E) => {
      S === "vertical" ? (n.value = R, o.value = E) : (s.value = R, r.value = E);
    }, y = x({
      anyHover: h(() => u.value),
      anyDragging: h(() => b.value),
      hidden: h(() => p.value)
    });
    return {
      wrapper: t,
      verticalBar: l,
      horizontalBar: a,
      anyHover: u,
      anyDragging: b,
      onMouseMove: _,
      onMouseDown: O,
      startAutoHideTimer: c,
      updateThumbs: I,
      slotProps: y,
      registerBar: T,
      scrollTo: L
    };
  },
  render() {
    const e = this.as;
    return le(e, ze(this.$props.asProps(this.slotProps), {
      class: ["hr-scroll-container", {
        "-disable-selection": this.anyHover || this.anyDragging
      }],
      onMouseenter: this.startAutoHideTimer
    }), {
      default: () => [Ie(le("div", {
        ref: "wrapper",
        class: ["hr-scroll-container__wrapper", this.wrapperClasses],
        onMousemove: this.onMouseMove,
        onMouseleave: this.onMouseMove,
        onMousedown: this.onMouseDown
      }, [Ie(le("div", {
        class: ["hr-scroll-container__container", this.containerClasses]
      }, [this.$slots.default()]), [[Re("resize"), this.updateThumbs]])]), [[Re("resize"), this.updateThumbs]]), this.$slots.verticalBar ? this.$slots.verticalBar(this.verticalBar) : null, this.$slots.horizontalBar ? this.$slots.horizontalBar(this.horizontalBar) : null]
    });
  }
}), gt = "core-scroll-containers", Dr = {
  ScrollContainer: Or
}, Tr = {
  CommonInstall: At
}, Vr = {
  install: (e, t) => {
    N(e, gt) || (Ot(e, Tr, t), j(e, Dr), F(e, gt));
  }
}, we = {
  /**
   * Get a nested property of an object
   * @param obj
   * @param property
   */
  getProperty(e, t) {
    let n = e;
    return t.split(".").every((s) => n[s] === void 0 ? null : (n = n[s], n !== null)), n;
  }
}, Er = {
  modelValue: {
    type: null
  }
}, $r = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ar = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Br = {
  allowClear: {
    type: Boolean,
    default: !1
  }
}, Mr = {
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}, Lr = {
  compare: {
    type: [Function, String],
    default: null
  }
};
function Al() {
  return $(D());
}
const zr = /* @__PURE__ */ V({
  name: "hr-select",
  props: {
    ...B,
    ...M,
    ...$r,
    ...Ar,
    ...Br,
    ...Mr,
    ...Er,
    ...Lr
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(!1), o = k(!1), s = k([]), r = k(null), i = h(() => {
      const y = [].concat(e.modelValue);
      return s.value.filter((S) => y.indexOf(S.value) !== -1 ? !0 : e.compare ? typeof e.compare == "string" ? y.find((E) => (E !== null && we.getProperty(E, e.compare)) === (S.value !== null && we.getProperty(S.value, e.compare))) : e.compare(y, S.value) : !1);
    }), l = h(() => i.value.length > 0), a = h(() => {
      const y = [];
      return i.value.forEach((S) => {
        y.push(S.label);
      }), y.join(", ");
    }), u = k(""), b = k(), p = h(() => s.value.filter((y) => y.disabled === !1)), v = () => {
      r.value = null;
    };
    z(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const c = (y) => {
      s.value.push(y);
    }, g = (y) => {
      s.value = U.remove(s.value, y);
    }, f = () => {
      n.value = !1;
    }, _ = (y) => {
      const {
        value: S
      } = y;
      e.hideOnSelect && !e.multiple && f();
      let R = S;
      e.multiple && (R = [], e.modelValue !== void 0 && (R = R.concat(e.modelValue)), R.includes(S) ? R.splice(R.indexOf(S), 1) : R.push(S)), r.value = y, t.emit("update:modelValue", R);
    }, P = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, O = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, w = (y) => {
      if (e.disabled)
        return !1;
      const S = () => r.value ? p.value.findIndex((R) => R === r.value) : null;
      if (!n.value && (y.key === "ArrowDown" || y.key === "ArrowUp" || y.key === "Enter"))
        n.value = !0, y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "ArrowDown")
        r.value = U.next(p.value, S()), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "ArrowUp")
        r.value = U.prev(p.value, S()), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "Enter" && r.value)
        _(r.value), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "Tab")
        f();
      else if (y.key === "Escape")
        f(), y.preventDefault(), y.stopImmediatePropagation();
      else {
        clearTimeout(b.value);
        const R = y.key.toLowerCase();
        if (R.match(/^\p{L}$/u)) {
          let H = null;
          R == u.value ? H = r.value ? d.value.findIndex((q) => q === r.value) : null : u.value += R, r.value = U.next(d.value, H), b.value = setTimeout(m, 1500);
        }
      }
    }, d = h(() => s.value.filter((y) => y.label.toLowerCase().startsWith(u.value))), m = () => {
      u.value = "";
    }, I = (y) => {
      o.value = y;
    }, L = h(() => n.value || o.value);
    W("select", {
      selectedItems: i,
      focusedItem: r,
      onItemClick: _,
      addItemInstance: c,
      removeItemInstance: g,
      menuVisible: h(() => n.value),
      itemsVisible: L
    });
    const C = x({
      modelValue: h(() => e.modelValue),
      disabled: h(() => e.disabled),
      allowClear: h(() => e.allowClear),
      menuVisible: h(() => n.value),
      focusedItem: h(() => r.value),
      clearFocusedItem: v,
      anythingSelected: l,
      selectedItems: i,
      selectedText: a,
      clearValue: O,
      close: f,
      onButtonClick: P,
      onItemClick: _,
      onKeyEvents: w,
      onMenuTransitioning: I
    });
    return {
      close: f,
      slotProps: C,
      defaultRender: () => t.slots.default(C),
      items: s
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Nr = {
  value: {
    type: null,
    required: !0
  }
}, Fr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, jr = {
  label: {
    type: String,
    default: null
  }
};
function Bl() {
  return $(D());
}
const Hr = /* @__PURE__ */ V({
  name: "hr-select-item",
  props: {
    ...B,
    ...M,
    ...Fr,
    ...Nr,
    ...jr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = G("select"), o = x({
      value: e.value,
      label: e.label,
      disabled: e.disabled,
      component: D()
    });
    re(() => {
      n.addItemInstance(o);
    }), he(() => {
      n.removeItemInstance(o);
    });
    const s = h(() => n.selectedItems.value.indexOf(o) !== -1), r = h(() => n.focusedItem.value === o), i = () => {
      e.disabled || n.onItemClick(o);
    }, l = x({
      selected: s,
      focused: r,
      disabled: h(() => e.disabled),
      value: h(() => e.value),
      onClick: i
    });
    return {
      select: n,
      slotProps: l,
      defaultRender: () => t.slots.default(l)
    };
  },
  render() {
    if (this.select.itemsVisible.value) {
      if (this.$props.as) {
        const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
        return A(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), Wr = {
  modelValue: {
    type: null
  }
}, qr = {
  items: {
    type: Array,
    required: !0
  }
}, Ur = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Kr = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Yr = {
  allowClear: {
    type: Boolean,
    default: !1
  }
}, Xr = {
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}, Gr = {
  label: {
    type: [Function, String],
    default: "label"
  }
}, Zr = {
  compare: {
    type: [Function, String],
    default: null
  }
};
function Ml() {
  return $(D());
}
const Jr = /* @__PURE__ */ V({
  name: "hr-simple-select",
  props: {
    ...B,
    ...M,
    ...qr,
    ...Ur,
    ...Kr,
    ...Yr,
    ...Xr,
    ...Wr,
    // ...coreSimpleSelectValueProp,
    ...Gr,
    ...Zr
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(!1), o = k(!1), s = h(() => {
      const C = [].concat(e.modelValue);
      return e.items.map((T) => {
        let y = typeof T == "string" ? T : typeof e.label == "string" ? T[e.label] : e.label(T), S = !1;
        return C.indexOf(T) !== -1 ? S = !0 : e.compare && (typeof e.compare == "string" ? S = C.find((E) => (E !== null && we.getProperty(E, e.compare)) === (T !== null && we.getProperty(T, e.compare))) : S = e.compare(C, T)), {
          value: T,
          label: y,
          disabled: !1,
          selected: S
        };
      });
    }), r = k(null), i = h(() => s.value.filter((C) => C.selected)), l = h(() => i.value.length > 0), a = h(() => {
      const C = [];
      return i.value.forEach((T) => {
        C.push(T.label);
      }), C.join(", ");
    }), u = k(""), b = k(), p = h(() => s.value.filter((C) => !C.disabled)), v = () => {
      r.value = null;
    };
    z(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const c = () => {
      n.value = !1;
    }, g = (C) => {
      const {
        value: T
      } = C;
      e.hideOnSelect && !e.multiple && c();
      let y = T;
      e.multiple && (y = [], e.modelValue !== void 0 && (y = y.concat(e.modelValue)), y.includes(T) ? y.splice(y.indexOf(T), 1) : y.push(T)), r.value = C, t.emit("update:modelValue", y);
    }, f = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, _ = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, P = (C) => {
      if (e.disabled)
        return !1;
      const T = () => r.value ? p.value.findIndex((y) => y === r.value) : null;
      if (!n.value && (C.key === "ArrowDown" || C.key === "ArrowUp" || C.key === "Enter"))
        n.value = !0, C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "ArrowDown")
        r.value = U.next(p.value, T()), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "ArrowUp")
        r.value = U.prev(p.value, T()), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "Enter" && r.value)
        g(r.value), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "Tab")
        c();
      else if (C.key === "Escape")
        c(), C.preventDefault(), C.stopImmediatePropagation();
      else {
        clearTimeout(b.value);
        const y = C.key.toLowerCase();
        if (y.match(/^\p{L}$/u)) {
          let R = null;
          y == u.value ? R = r.value ? O.value.findIndex((E) => E === r.value) : null : u.value += y, r.value = U.next(O.value, R), b.value = setTimeout(w, 1500);
        }
      }
    }, O = h(() => s.value.filter((C) => C.label.toLowerCase().startsWith(u.value))), w = () => {
      u.value = "";
    }, d = (C) => {
      o.value = C;
    }, m = h(() => n.value || o.value);
    W("select", {
      selectedItems: i,
      focusedItem: r,
      onItemClick: g,
      menuVisible: h(() => n.value),
      itemsVisible: m
    });
    const I = x({
      modelValue: h(() => e.modelValue),
      disabled: h(() => e.disabled),
      allowClear: h(() => e.allowClear),
      menuVisible: h(() => n.value),
      items: h(() => s.value),
      focusedItem: h(() => r.value),
      clearFocusedItem: v,
      anythingSelected: l,
      selectedItems: i,
      selectedText: a,
      clearValue: _,
      close: c,
      onButtonClick: f,
      onItemClick: g,
      onKeyEvents: P,
      onMenuTransitioning: d
    });
    return {
      close: c,
      slotProps: I,
      defaultRender: () => t.slots.default(I),
      items: s
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), bt = "core-selects", Qr = {
  Select: zr,
  SelectItem: Hr,
  SimpleSelect: Jr
}, ei = {
  install: (e, t) => {
    N(e, bt) || (j(e, Qr), F(e, bt));
  }
}, ti = {
  modelValue: {
    type: null
  }
}, ni = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, oi = {
  minimum: {
    type: Number,
    default: 0
  }
}, si = {
  maximum: {
    type: Number,
    default: 100
  }
}, ri = {
  stepSize: {
    type: Number,
    default: 1
  }
};
function Ll() {
  return $(D());
}
const ii = /* @__PURE__ */ V({
  name: "hr-slider",
  props: {
    ...B,
    ...M,
    ...ti,
    ...ni,
    ...oi,
    ...si,
    ...ri
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => {
      const l = (e.modelValue - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(l);
    }), o = h(() => Math.round((e.maximum - e.minimum) / e.stepSize)), s = (l) => {
      let a = (e.maximum - e.minimum) / 100 * l + e.minimum;
      return a < e.minimum ? a = e.minimum : a > e.maximum && (a = e.maximum), Math.round(a / e.stepSize) * e.stepSize;
    }, r = x({
      modelValue: h(() => e.modelValue),
      percentage: n,
      steps: o
    });
    return {
      percentage: n,
      steps: o,
      getValueFromPercentage: s,
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), yt = "core-sliders", li = {
  Slider: ii
}, ai = {
  install: (e, t) => {
    N(e, yt) || (j(e, li), F(e, yt));
  }
};
function zl(e, t, n = null, o = !0) {
  return x({
    id: e,
    visible: o,
    validator: n,
    data: t
  });
}
const ci = {
  modelValue: {
    type: String,
    default: null
  }
}, ui = {
  steps: {
    type: Array,
    default: null
  }
};
function Nl() {
  return $(D());
}
const di = /* @__PURE__ */ V({
  name: "hr-steps-navigator",
  props: {
    ...B,
    ...M,
    ...ci,
    ...ui
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.steps.findIndex((v) => v.id === e.modelValue)), o = h(() => e.steps.filter((v) => v.visible)), s = h(() => {
      const v = [];
      return e.steps.forEach((c) => {
        const g = e.steps.findIndex((f) => f.id === c.id);
        v.push({
          id: c.id,
          visible: c.visible,
          validator: c.validator,
          data: c.data,
          stepIndex: g,
          isCurrent: c.id === e.modelValue,
          isDone: n.value !== -1 && g < n.value,
          isLast: o.value.findIndex((f) => f.id === c.id) === o.value.length - 1,
          isLocked: !1
        });
      }), v;
    }), r = h(() => s.value[n.value]), i = h(() => s.value.filter((v) => v.visible)), l = (v) => {
      t.emit("update:modelValue", v.id);
    }, a = () => {
      if (!(typeof r.value.validator == "function" && !r.value.validator())) {
        const v = U.next(s.value, n.value, (c) => c.visible);
        t.emit("update:modelValue", v.id);
      }
    }, u = () => {
      const v = U.prev(s.value, n.value, (c) => c.visible);
      t.emit("update:modelValue", v.id);
    }, b = x({
      steps: s,
      currentStep: r,
      currentIndex: n,
      visibleSteps: i,
      nextStep: a,
      previousStep: u,
      onStepClick: l
    });
    return {
      nextStep: a,
      previousStep: u,
      visibleSteps: i,
      slotProps: b,
      defaultRender: () => t.slots.default(b)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), wt = "core-steps", fi = {
  StepsNavigator: di
}, pi = {
  install: (e, t) => {
    N(e, wt) || (j(e, fi), F(e, wt));
  }
};
class mi {
  constructor(t, n, o) {
    K(this, "id");
    K(this, "property");
    K(this, "order");
    K(this, "component");
    K(this, "template");
    K(this, "headerTemplate");
    K(this, "formatter");
    K(this, "sortable");
    K(this, "data");
    this.id = t, this.property = n.props.property, this.order = n.props.order, this.component = n, this.template = n.slots.default, this.headerTemplate = n.slots.header, this.formatter = n.props.formatter, this.sortable = n.props.sortable, this.data = o;
  }
}
class hi {
  constructor(t, n, o, s) {
    K(this, "id");
    K(this, "data");
    K(this, "selected");
    K(this, "selectable");
    this.id = t, this.data = n, this.selected = !1, z(() => o, () => {
      typeof o.selectable == "boolean" ? this.selectable = h(() => o.selectable) : (this.selectable = o.selectable(this.data), z(() => this.selectable.value, () => {
        this.selectable.value || s(this.id, !1);
      }));
    }, {
      immediate: !0
    });
  }
  getValue(t, n) {
    let { data: o } = this;
    return t !== void 0 && (o = we.getProperty(o, t)), typeof n == "function" ? o = n(o) : n !== null && console.warn("[hr-table-column] Unsupported value for formatter"), o;
  }
}
const vi = {
  data: {
    type: Array,
    default: !0
  }
}, gi = {
  rowKey: {
    type: String,
    required: !0
  }
}, bi = {
  selectable: {
    type: [Boolean, Function],
    default: !1
  }
}, yi = {
  selectedRows: {
    type: Array,
    default: () => []
  }
}, wi = {
  sort: {
    type: Object,
    default: null
  }
};
function Fl() {
  return $(D());
}
const Pi = /* @__PURE__ */ V({
  name: "hr-table",
  props: {
    ...B,
    ...M,
    ...vi,
    ...gi,
    ...bi,
    ...yi,
    ...wi
  },
  emits: ["update:sort", "update:selectedRows"],
  setup(e, t) {
    const n = k([]), o = h(() => {
      const w = n.value.filter((m) => m.selected).length, d = n.value.filter((m) => m.selectable).length;
      return w === d && d > 0;
    }), s = h(() => n.value.filter((w) => w.selected).length > 0), r = h(() => n.value.filter((w) => w.selectable).length > 0), i = (w, d) => {
      const m = n.value.find((I) => I.id === w);
      if (m) {
        const I = e.selectedRows.findIndex((L) => L === m.data);
        m.selected = d, I === -1 && d ? t.emit("update:selectedRows", [...e.selectedRows, m.data]) : I !== -1 && !d && t.emit("update:selectedRows", e.selectedRows.filter((L) => L !== m.data));
      }
    }, l = () => {
      const w = !o.value, d = [];
      n.value.forEach((m) => {
        w ? m.selectable && (d.push(m.data), m.selected = !0) : m.selected = !1;
      }), t.emit("update:selectedRows", d);
    };
    z([() => e.selectedRows, () => [...e.selectedRows]], () => {
      n.value.forEach((w) => {
        w.selected = e.selectedRows.findIndex((d) => d === w.data) !== -1;
      });
    }, {
      immediate: !0
    });
    const a = () => {
      const w = n.value;
      n.value = e.data.map((d) => {
        let m = w.find((I) => I.data[e.rowKey] === d[e.rowKey]);
        return m === void 0 ? (m = new hi(d[e.rowKey], d, e, i), m.selected = e.selectedRows.findIndex((I) => I === m.data) !== -1) : m.data !== d && (m.data = d), m;
      });
    };
    z([() => e.data, () => [...e.data]], () => {
      a();
    }, {
      immediate: !0
    });
    const u = (w) => {
      let d;
      e.sort.key === w ? d = e.sort.direction === "desc" ? "asc" : "desc" : d = "desc";
      const m = {
        key: w,
        direction: d
      };
      t.emit("update:sort", m);
    }, b = () => {
      t.emit("update:sort", {
        key: null,
        direction: "desc"
      });
    }, p = k([]);
    let v = null;
    const c = () => {
      v !== null && (p.value = v, v = null);
    }, g = (w, d, m) => {
      v === null && (v = [].concat(p.value)), v.push(new mi(w, d, m)), ne(c);
    }, f = (w) => {
      v === null && (v = p.value), v = v.filter((d) => d.id !== w), ne(c);
    }, _ = h(() => p.value.sort((w, d) => w.order - d.order));
    W("table", {
      setSorting: u,
      setRowSelectionState: i,
      addColumn: g,
      removeColumn: f
    });
    const P = x({
      orderedColumns: _,
      rows: n,
      allRowsSelected: o,
      anyRowsSelected: s,
      anySelectable: r,
      toggleAllSelection: l,
      setRowSelectionState: i,
      setSorting: u,
      clearSorting: b
    });
    return {
      toggleAllSelection: l,
      setSorting: u,
      clearSorting: b,
      slotProps: P,
      defaultRender: () => t.slots.default(P)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ci = {
  property: {
    type: String
  }
}, Si = {
  formatter: {
    type: Function,
    default: null
  }
}, _i = {
  sortable: {
    type: Boolean,
    default: !1
  }
}, Ii = {
  data: {
    type: Object,
    default: null
  }
}, Ri = {
  order: {
    type: Number,
    default: 0
  }
}, xi = {
  component: {
    type: null,
    required: !0
  }
};
function jl(e, t = [], n = []) {
  const o = D();
  return {
    props: x({
      data: e,
      component: o,
      ...Bt(o.props, t)
    }),
    listeners: Mt(o, n)
  };
}
const ki = /* @__PURE__ */ V({
  name: "hr-table-column",
  props: {
    ...Ci,
    ...Si,
    ..._i,
    ...Ii,
    ...xi,
    ...Ri
  },
  setup(e) {
    const t = G("table"), n = We.random();
    return re(() => {
      t.addColumn(n, e.component, e.data);
    }), he(() => {
      t.removeColumn(n);
    }), {};
  },
  render() {
    return null;
  }
}), Oi = {
  columns: {
    type: Array,
    required: !0
  }
}, Di = {
  row: {
    type: Object,
    default: !1
  }
};
function Hl() {
  return $(D());
}
const Ti = /* @__PURE__ */ V({
  name: "hr-table-row",
  props: {
    ...B,
    ...M,
    ...Oi,
    ...Di
  },
  emits: ["update:modelValue", "rowClick"],
  setup(e, t) {
    const o = x({
      onClick: () => {
        t.emit("rowClick", e.row);
      }
    });
    return {
      slotProps: o,
      defaultRender: () => t.slots.default(o)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Pt = "core-tables", Vi = {
  Table: Pi,
  TableColumn: ki,
  TableRow: Ti
}, Ei = {
  install: (e, t) => {
    N(e, Pt) || (j(e, Vi), F(e, Pt));
  }
}, $i = {
  id: {
    type: String,
    required: !0
  }
}, Ai = {
  disabled: {
    type: Boolean,
    default: !1
  }
};
function Wl() {
  return $(D());
}
const Bi = /* @__PURE__ */ V({
  name: "hr-tab-item",
  props: {
    ...B,
    ...M,
    ...$i,
    ...Ai
  },
  setup(e, t) {
    const n = G("coreTabsNavigator"), o = x({
      id: e.id
    });
    re(() => {
      n.addTabInstance(o);
    }), he(() => {
      n.removeTabInstance(o);
    });
    const s = h(() => o === n.activeTab.value), r = () => {
      e.disabled || n.onTabClick(o);
    }, i = x({
      disabled: h(() => e.disabled),
      active: s,
      onClick: r
    });
    return {
      slotProps: i,
      defaultRender: () => t.slots.default(i)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Mi = {
  modelValue: {
    type: String,
    default: null
  }
};
function ql() {
  return $(D());
}
const Li = /* @__PURE__ */ V({
  name: "hr-tabs-navigator",
  props: {
    ...B,
    ...M,
    ...Mi
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k([]), o = h(() => n.value.find((u) => u.id === e.modelValue));
    W("coreTabsNavigator", {
      activeTab: o,
      addTabInstance: (u) => {
        n.value.push(u);
      },
      removeTabInstance: (u) => {
        n.value = U.remove(n.value, u);
      },
      onTabClick: (u) => {
        t.emit("update:modelValue", u.id);
      }
    });
    const l = x({
      tabs: n,
      activeTab: o
    });
    return {
      activeTab: o,
      slotProps: l,
      defaultRender: () => t.slots.default(l)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return A(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ct = "core-tabs", zi = {
  TabItem: Bi,
  TabsNavigator: Li
}, Ni = {
  install: (e, t) => {
    N(e, Ct) || (j(e, zi), F(e, Ct));
  }
}, Fi = {
  modelValue: {
    type: Boolean,
    default: !1
  }
}, ji = {
  trigger: {
    type: String,
    default: "hover"
  }
}, Hi = {
  showDelay: {
    type: Number,
    default: 200
  }
}, Wi = {
  hideDelay: {
    type: Number,
    default: 0
  }
};
function Ul(e) {
  return $(D()).setProp("reference", e);
}
const qi = /* @__PURE__ */ V({
  name: "hr-tooltip",
  props: {
    ...Fi,
    ...ji,
    ...Hi,
    ...Wi,
    reference: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(e.modelValue);
    z(() => e.modelValue, (c) => {
      n.value = c;
    });
    const o = (c) => {
      n.value = c, t.emit("update:modelValue", c);
    };
    let s = null, r = null;
    const i = () => {
      s && clearTimeout(s), r && clearTimeout(r), s = setTimeout(() => {
        o(!0);
      }, e.showDelay);
    }, l = () => {
      s && clearTimeout(s), r && clearTimeout(r), r = setTimeout(() => {
        o(!1);
      }, e.hideDelay);
    }, a = (c, g, f) => {
      c.addEventListener(g, i), c.addEventListener(f, l);
    }, u = (c, g, f) => {
      c.removeEventListener(g, i), c.removeEventListener(f, l), o(!1), s && clearTimeout(s), r && clearTimeout(r);
    }, b = (c) => {
      if (c === "hover")
        return {
          show: "mouseenter",
          hide: "mouseleave"
        };
    };
    z(() => e.reference, (c, g) => {
      const f = b(e.trigger);
      g && f && u(g, f.show, f.hide), c && f && a(c, f.show, f.hide);
    }), z(() => e.trigger, (c, g) => {
      if (g) {
        const f = b(g);
        f && e.reference && u(e.reference, f.show, f.hide);
      }
      if (c) {
        const f = b(c);
        f && e.reference && a(e.reference, f.show, f.hide);
      }
    });
    const p = x({
      visible: h(() => n.value)
    });
    return {
      slotProps: p,
      defaultRender: () => t.slots.default(p)
    };
  },
  render() {
    return this.defaultRender();
  }
}), St = "core-tooltips", Ui = {
  Tooltip: qi
}, Ki = {
  install: (e, t) => {
    N(e, St) || (j(e, Ui), F(e, St));
  }
}, Yi = {
  modelValue: {
    type: null,
    required: !0
  }
}, Kl = {
  valueFormat: {
    type: String,
    default: null
  }
}, Xi = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Gi = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Zi = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Ji = {
  clearable: {
    type: Boolean,
    default: !1
  }
}, Qi = {
  disabledDate: {
    type: Function,
    default: null
  }
}, el = {
  firstDayOfWeek: {
    type: Number,
    default: 0
  }
};
function Yl() {
  return $(D());
}
const tl = /* @__PURE__ */ V({
  name: "hr-date-picker",
  props: {
    ...B,
    ...M,
    ...Yi,
    ...Gi,
    ...Xi,
    ...Zi,
    ...Ji,
    ...Qi,
    ...el
  },
  emits: ["click"],
  setup(e, t) {
    const n = x({
      disabled: h(() => e.disabled)
    }), o = () => t.slots.default(n);
    return () => {
      if (e.as) {
        const s = e.asProps ? e.asProps(n) : {};
        return A(e.as, {
          ...s
        }, o());
      }
      return o();
    };
  }
}), _t = "core-date-pickers", nl = {
  DatePicker: tl
}, Xl = {
  install: (e, t) => {
    N(e, _t) || (j(e, nl), F(e, _t));
  }
};
function ol(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function sl(e) {
  return typeof e != "number" ? ol(e) : { top: e, right: e, bottom: e, left: e };
}
function rl(e) {
  return e.split("-")[0];
}
function il(e) {
  return e.split("-")[1];
}
function ll(e) {
  return e === "y" ? "height" : "width";
}
function al(e) {
  return ["top", "bottom"].includes(rl(e)) ? "x" : "y";
}
function cl(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
const Gl = (e) => ({
  name: "arrowReference",
  options: e,
  async fn(t) {
    var H;
    const { element: n, padding: o = 0 } = e ?? {}, { x: s, y: r, placement: i, rects: l, platform: a } = t;
    if (n == null)
      return console.warn(
        "Floating UI: No `element` was passed to the `arrow` middleware."
      ), {};
    const u = sl(o), b = { x: s, y: r }, p = al(i), v = il(i), c = ll(p), g = await a.getDimensions(n), f = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right";
    let P = l.reference;
    e.reference && (P = (await a.getClientRects(e.reference))[0]);
    const O = P[c] + P[p] - b[p] - l.floating[c], w = b[p] - P[p], d = await ((H = a.getOffsetParent) == null ? void 0 : H.call(a, n));
    let m = d ? p === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0;
    m === 0 && (m = l.floating[c]);
    const I = O / 2 - w / 2, L = u[f], C = m - g[c] - u[_], T = m / 2 - g[c] / 2 + I, y = cl(L, T, C), E = (v === "start" ? u[f] : u[_]) > 0 && T !== y && P[c] <= l.floating[c] ? T < L ? L - T : C - T : 0;
    return {
      [p]: b[p] - E,
      data: {
        [p]: y,
        centerOffset: T - y
      }
    };
  }
}), ul = {
  CommonInstall: At,
  ButtonsInstall: Xn,
  CheckboxesInstall: oo,
  CollapsesInstall: po,
  DialogsInstall: Ao,
  DropdownsInstall: qo,
  FloatingInstall: Ds,
  FragmentsInstall: $s,
  InputsInstall: Ks,
  NotificationsInstall: nr,
  PaginatorsInstall: cr,
  ProgressBarsInstall: hr,
  RadioButtonsInstall: Pr,
  ScrollContainersInstall: Vr,
  SelectsInstall: ei,
  SlidersInstall: ai,
  StepsInstall: pi,
  TablesInstall: Ei,
  TabsInstall: Ni,
  TooltipsInstall: Ki
}, Zl = {
  install: (e, t) => {
    Object.values(ul).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  U as ArrayHelper,
  Xn as CoreButtonsInstall,
  oo as CoreCheckboxInstall,
  po as CoreCollapsesInstall,
  Xl as CoreDatePickersInstall,
  Ao as CoreDialogsInstall,
  qo as CoreDropdownsInstall,
  Ds as CoreFloatingInstall,
  $s as CoreFragmentsInstall,
  Ks as CoreInputsInstall,
  nr as CoreNotificationsInstall,
  cr as CorePaginatorsInstall,
  hr as CoreProgressBarsInstall,
  Pr as CoreRadioButtonsInstall,
  Vr as CoreScrollContainersInstall,
  ei as CoreSelectsInstall,
  ai as CoreSlidersInstall,
  pi as CoreStepsInstall,
  mi as CoreTableColumn,
  hi as CoreTableRow,
  Ei as CoreTablesInstall,
  Ni as CoreTabsInstall,
  Ki as CoreTooltipsInstall,
  yl as DialogManager,
  pl as ModuleHelper,
  Ol as NotificationManager,
  we as ObjectHelper,
  We as StringHelper,
  Hs as coreAutocompleteDisabledProp,
  Ws as coreAutocompleteItemsProp,
  js as coreAutocompleteModelModifiersProp,
  Fs as coreAutocompleteModelValueProp,
  xl as coreAutocompleteSetup,
  Kn as coreButton,
  Wn as coreButtonDisabledProp,
  Un as coreButtonLoadingProp,
  ml as coreButtonSetup,
  qn as coreButtonVisibleProp,
  Jn as coreCheckboxDisabledProp,
  eo as coreCheckboxIndeterminateProp,
  Gn as coreCheckboxModelValueProp,
  hl as coreCheckboxSetup,
  Zn as coreCheckboxValueProp,
  Qn as coreCheckboxVisibleProp,
  so as coreCollapseAccordionProp,
  bl as coreCollapseInlineSetup,
  lo as coreCollapseItemIdProp,
  gl as coreCollapseItemSetup,
  ro as coreCollapseModelValueProp,
  vl as coreCollapseSetup,
  B as coreComponentAsProp,
  Ji as coreDatePickerClearableProp,
  Qi as coreDatePickerDisabledDateProp,
  Xi as coreDatePickerDisabledProp,
  el as coreDatePickerFirstDayOfWeekProp,
  Yi as coreDatePickerModelValueProp,
  Zi as coreDatePickerMultipleProp,
  Yl as coreDatePickerSetup,
  Kl as coreDatePickerValueFormatProp,
  Gi as coreDatePickerVisibleProp,
  wl as coreDialogSetup,
  Vo as coreDialogVisibleProp,
  Oo as coreDialogWrapper,
  zo as coreDropdownDisabledProp,
  No as coreDropdownHideOnClickProp,
  Bo as coreDropdownItemDisabledProp,
  Mo as coreDropdownItemLabelProp,
  Pl as coreDropdownItemSetup,
  Cl as coreDropdownSetup,
  Fo as coreDropdownSplitButtonProp,
  jo as coreDropdownVisibleProp,
  Gl as coreFloatingArrowReference,
  _s as coreFloatingKeepProp,
  xs as coreFloatingMiddlewareProp,
  Rs as coreFloatingPlacementProp,
  Cs as coreFloatingReferenceProp,
  Sl as coreFloatingSetup,
  Is as coreFloatingTransitionProp,
  Ss as coreFloatingVisibleProp,
  Ts as coreFragmentContainerActiveProp,
  Il as coreFragmentContainerSetup,
  co as coreInlineCollapseModelValueProp,
  Ms as coreInputDisabledProp,
  Bs as coreInputModelModifiersProp,
  As as coreInputModelValueProp,
  Ls as coreInputReadonlyProp,
  Rl as coreInputSetup,
  zs as coreInputTypeProp,
  Dl as coreNotificationSetup,
  Qs as coreNotificationVisibleProp,
  Ys as coreNotificationWrapperNameProp,
  kl as coreNotificationWrapperSetup,
  rr as corePaginatorCountProp,
  ir as corePaginatorDeltaProp,
  or as corePaginatorModelValueProp,
  sr as corePaginatorPageSizeProp,
  Tl as corePaginatorSetup,
  fr as coreProgressBarMaximumProp,
  dr as coreProgressBarMinimumProp,
  Vl as coreProgressBarSetup,
  ur as coreProgressBarValueProp,
  vr as coreRadioButtonDisabledProp,
  gr as coreRadioButtonModelValueProp,
  El as coreRadioButtonSetup,
  br as coreRadioButtonValueProp,
  Ir as coreScrollContainerAutoHideDelayProp,
  _r as coreScrollContainerAutoHideProp,
  xr as coreScrollContainerContainerClassesProp,
  Cr as coreScrollContainerHorizontalProp,
  Rr as coreScrollContainerMinimumSizeProp,
  $l as coreScrollContainerSetup,
  Sr as coreScrollContainerVerticalProp,
  kr as coreScrollContainerWrapperClassesProp,
  Br as coreSelectAllowClearProp,
  Lr as coreSelectCompareProp,
  $r as coreSelectDisabledProp,
  Mr as coreSelectHideOnSelectProp,
  Fr as coreSelectItemDisabledProp,
  jr as coreSelectItemLabelProp,
  Bl as coreSelectItemSetup,
  Nr as coreSelectItemValueProp,
  Er as coreSelectModelValueProp,
  Ar as coreSelectMultipleProp,
  Al as coreSelectSetup,
  Yr as coreSimpleSelectAllowClearProp,
  Zr as coreSimpleSelectCompareProp,
  Ur as coreSimpleSelectDisabledProp,
  Xr as coreSimpleSelectHideOnSelectProp,
  qr as coreSimpleSelectItemsProp,
  Gr as coreSimpleSelectLabelProp,
  Wr as coreSimpleSelectModelValueProp,
  Kr as coreSimpleSelectMultipleProp,
  Ml as coreSimpleSelectSetup,
  ni as coreSliderDisabledProp,
  si as coreSliderMaximumProp,
  oi as coreSliderMinimumProp,
  ti as coreSliderModelValueProp,
  Ll as coreSliderSetup,
  ri as coreSliderStepSizeProp,
  ci as coreStepsNavigatorModelValueProp,
  Nl as coreStepsNavigatorSetup,
  ui as coreStepsNavigatorStepsProp,
  Ai as coreTabItemIdDisabledProp,
  $i as coreTabItemIdProp,
  Wl as coreTabItemSetup,
  xi as coreTableColumnComponentProp,
  Ii as coreTableColumnDataProp,
  Si as coreTableColumnFormatterProp,
  Ri as coreTableColumnOrderProp,
  Ci as coreTableColumnPropertyProp,
  jl as coreTableColumnSetup,
  _i as coreTableColumnSortableProp,
  vi as coreTableDataProp,
  Oi as coreTableRowColumnsProp,
  gi as coreTableRowKeyProp,
  Di as coreTableRowRowProp,
  Hl as coreTableRowSetup,
  bi as coreTableSelectableProp,
  yi as coreTableSelectedRowsProp,
  Fl as coreTableSetup,
  wi as coreTableSortProp,
  Mi as coreTabsNavigatorModelValueProp,
  ql as coreTabsNavigatorSetup,
  Wi as coreTooltipHideDelayProp,
  Fi as coreTooltipModelValueProp,
  Ul as coreTooltipSetup,
  Hi as coreTooltipShowDelayProp,
  ji as coreTooltipTriggerProp,
  zl as createCoreStepItem,
  Zl as default,
  _l as splitPlacement
};
