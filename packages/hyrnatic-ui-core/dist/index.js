var Qt = Object.defineProperty;
var en = (e, t, n) => t in e ? Qt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var q = (e, t, n) => (en(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as b, reactive as R, defineComponent as x, h as T, getCurrentInstance as k, provide as W, inject as K, ref as S, watch as M, getCurrentScope as tn, onScopeDispose as nn, unref as on, toRef as rn, readonly as bt, customRef as sn, onMounted as re, nextTick as ne, shallowReactive as ln, onUnmounted as ae, Teleport as yt, shallowRef as wt, createVNode as se, Transition as an, isVNode as cn, withDirectives as ge, mergeProps as xe, vShow as un, resolveDirective as be, onBeforeUnmount as dn } from "vue";
function L(e, t) {
  return e.__hyrnatic_ui_installed && e.__hyrnatic_ui_installed.indexOf(t) !== -1;
}
function j(e, t) {
  e.__hyrnatic_ui_installed || (e.__hyrnatic_ui_installed = []), e.__hyrnatic_ui_installed.push(t);
}
function H(e, t) {
  Object.keys(t).forEach((n) => {
    e.component(t[n].name, t[n]);
  });
}
function fn(e, t, n) {
  e.component(t, n);
}
function Pt(e, t) {
  Object.keys(t).forEach((n) => {
    e.directive(t[n].name, t[n]);
  });
}
function _t(e, t, n) {
  Object.values(t).forEach((o) => {
    o.install(e, n);
  });
}
const ji = {
  installComponents: H,
  installComponentAlias: fn,
  installDependencies: _t,
  installDirectives: Pt,
  isModuleInstalled: L,
  markModuleAsInstalled: j
}, pn = {
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
}, mn = {
  name: "document-event",
  mounted(e, t, n) {
    e.__document_events = e.__document_events || {};
    const o = {
      event: t.arg,
      handler: (r) => {
        t.expression ? n.context[t.expression](r) : t.value && t.value(r);
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
var It = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(r, s) {
      return r[0] === n ? (o = s, !0) : !1;
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
        var o = e(this.__entries__, n), r = this.__entries__[o];
        return r && r[1];
      }, t.prototype.set = function(n, o) {
        var r = e(this.__entries__, n);
        ~r ? this.__entries__[r][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, r = e(o, n);
        ~r && o.splice(r, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var r = 0, s = this.__entries__; r < s.length; r++) {
          var l = s[r];
          n.call(o, l[1], l[0]);
        }
      }, t;
    }()
  );
}(), De = typeof window < "u" && typeof document < "u" && window.document === document, ye = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), hn = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ye) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), vn = 2;
function gn(e, t) {
  var n = !1, o = !1, r = 0;
  function s() {
    n && (n = !1, e()), o && i();
  }
  function l() {
    hn(s);
  }
  function i() {
    var a = Date.now();
    if (n) {
      if (a - r < vn)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(l, t);
    r = a;
  }
  return i;
}
var bn = 20, yn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], wn = typeof MutationObserver < "u", Pn = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gn(this.refresh.bind(this), bn);
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
      !De || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !De || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, r = yn.some(function(s) {
        return !!~o.indexOf(s);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Rt = function(e, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var r = o[n];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, ie = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ye;
}, Ct = Re(0, 0, 0, 0);
function we(e) {
  return parseFloat(e) || 0;
}
function ze(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var s = e["border-" + r + "-width"];
    return o + we(s);
  }, 0);
}
function _n(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
    var s = r[o], l = e["padding-" + s];
    n[s] = we(l);
  }
  return n;
}
function In(e) {
  var t = e.getBBox();
  return Re(0, 0, t.width, t.height);
}
function Rn(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Ct;
  var o = ie(e).getComputedStyle(e), r = _n(o), s = r.left + r.right, l = r.top + r.bottom, i = we(o.width), a = we(o.height);
  if (o.boxSizing === "border-box" && (Math.round(i + s) !== t && (i -= ze(o, "left", "right") + s), Math.round(a + l) !== n && (a -= ze(o, "top", "bottom") + l)), !Sn(e)) {
    var d = Math.round(i + s) - t, g = Math.round(a + l) - n;
    Math.abs(d) !== 1 && (i -= d), Math.abs(g) !== 1 && (a -= g);
  }
  return Re(r.left, r.top, i, a);
}
var Cn = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof ie(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof ie(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Sn(e) {
  return e === ie(e).document.documentElement;
}
function kn(e) {
  return De ? Cn(e) ? In(e) : Rn(e) : Ct;
}
function $n(e) {
  var t = e.x, n = e.y, o = e.width, r = e.height, s = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, l = Object.create(s.prototype);
  return Rt(l, {
    x: t,
    y: n,
    width: o,
    height: r,
    top: n,
    right: t + o,
    bottom: r + n,
    left: t
  }), l;
}
function Re(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var xn = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Re(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = kn(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Dn = (
  /** @class */
  function() {
    function e(t, n) {
      var o = $n(n);
      Rt(this, { target: t, contentRect: o });
    }
    return e;
  }()
), On = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new It(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ie(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new xn(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ie(t).Element))
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
          return new Dn(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), St = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new It(), kt = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Pn.getInstance(), o = new On(t, n, this);
      St.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  kt.prototype[e] = function() {
    var t;
    return (t = St.get(this))[e].apply(t, arguments);
  };
});
var Vn = function() {
  return typeof ye.ResizeObserver < "u" ? ye.ResizeObserver : kt;
}();
let Tn = 1;
const Oe = {}, Le = new Vn((e) => {
  e.forEach((t) => {
    const n = t.target;
    n.__resize_callback_id__ && Oe[n.__resize_callback_id__]();
  });
}), En = {
  name: "resize",
  mounted(e, { value: t }) {
    if (!t || typeof t != "function") {
      console.warn("v-resize should received a function as value");
      return;
    }
    Le.observe(e), e.__resize_callback_id__ = Tn++, Oe[e.__resize_callback_id__] = t;
  },
  beforeUnmount(e) {
    Le.unobserve(e), e.__resize_callback_id__ && (delete Oe[e.__resize_callback_id__], delete e.__resize_callback_id__);
  }
}, je = "core-common", An = {
  ClickOutside: pn,
  DocumentEvent: mn,
  Resize: En
}, $t = {
  install: (e, t) => {
    L(e, je) || (Pt(e, An), j(e, je));
  }
}, E = {
  as: {
    type: String,
    default: null
  }
}, A = {
  asProps: {
    type: Function,
    default: null
  }
};
function Bn() {
  return {};
}
function xt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = b(() => e[o]);
  }), n;
}
function Dt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = (...r) => e.emit(o, ...r);
  }), n;
}
function O(e) {
  const t = R({}), n = {}, o = {
    /**
     * Render the renderless spinner with a wrapper
     * @param tag HTML tag to use as wrapper
     * @param func Callback to apply properties to the wrapper element
     */
    as(r, s = Bn) {
      return t.as = r, t.asProps = s, o;
    },
    /**
     * Proxy properties as computed from the instance to the renderless spinner
     * @param proxies
     */
    props(r) {
      return r.forEach((s) => {
        this.setProp(s, b(() => e.props[s]));
      }), o;
    },
    /**
     * Sets a property to a value
     * @param key
     * @param value
     */
    setProp(r, s) {
      return t[r] = s, o;
    },
    /**
     * Proxy events from the renderless to the instance
     * @param events
     */
    events(r) {
      return r.forEach((s) => {
        n[s] = (...l) => e.emit(s, ...l);
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
const Mn = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, zn = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Ln = {
  loading: {
    type: Boolean,
    default: !1
  }
};
function Hi() {
  return O(k());
}
const jn = /* @__PURE__ */ x({
  name: "hr-button",
  props: {
    ...E,
    ...A,
    ...zn,
    ...Mn,
    ...Ln
  },
  emits: ["click"],
  setup(e, t) {
    const n = (s) => {
      !e.disabled && !e.loading && e.visible && t.emit("click", s);
    }, o = R({
      disabled: b(() => e.disabled),
      loading: b(() => e.loading),
      onClick: n
    }), r = () => t.slots.default(o);
    return () => {
      if (e.as) {
        const s = e.asProps ? e.asProps(o) : {};
        return T(e.as, {
          ...s
        }, r());
      }
      return r();
    };
  }
}), He = "core-buttons", Hn = {
  Button: jn
}, Nn = {
  install: (e, t) => {
    L(e, He) || (H(e, Hn), j(e, He));
  }
}, Wn = {
  modelValue: {
    type: [Array, Boolean, String],
    required: !0
  }
}, Fn = {
  value: {
    type: null,
    default: !0
  }
}, qn = {
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
}, Un = {
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
}, Kn = {
  indeterminate: {
    type: Boolean,
    default: !1
  }
};
function Ni() {
  return O(k());
}
const Yn = /* @__PURE__ */ x({
  name: "hr-checkbox",
  props: {
    ...E,
    ...A,
    ...qn,
    ...Un,
    ...Kn,
    ...Wn,
    ...Fn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => Array.isArray(e.modelValue) ? e.modelValue.indexOf(e.value) > -1 : e.modelValue === e.value), o = () => {
      if (Array.isArray(e.modelValue)) {
        const a = e.modelValue.slice(0);
        a.push(e.value), t.emit("update:modelValue", a);
      } else
        t.emit("update:modelValue", e.value);
    }, r = () => {
      if (Array.isArray(e.modelValue)) {
        const a = e.modelValue.slice(0);
        a.splice(a.indexOf(e.value), 1), t.emit("update:modelValue", a);
      } else
        e.value === !0 ? t.emit("update:modelValue", !1) : t.emit("update:modelValue", null);
    }, s = () => {
      !e.disabled && e.visible && (n.value ? r() : o());
    }, l = R({
      state: b(() => n.value),
      disabled: b(() => e.disabled),
      indeterminate: b(() => e.indeterminate),
      check: o,
      uncheck: r,
      onChange: s
    });
    return {
      slotProps: l,
      defaultRender: () => t.slots.default(l)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ne = "core-checkboxes", Gn = {
  Checkbox: Yn
}, Xn = {
  install: (e, t) => {
    L(e, Ne) || (H(e, Gn), j(e, Ne));
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
    for (let r = o; r < e.length; r++)
      if (n === null || n(e[r]))
        return e[r];
    for (let r = 0; r < o; r++)
      if (n === null || n(e[r]))
        return e[r];
    return null;
  },
  prev(e, t, n = null) {
    const o = t === null ? e.length - 1 : t - 1;
    for (let r = o; r >= 0; r--)
      if (n === null || n(e[r]))
        return e[r];
    for (let r = e.length - 1; r > o; r--)
      if (n === null || n(e[r]))
        return e[r];
    return null;
  },
  simpleSort(e, t, n) {
    const o = (s) => !Number.isNaN(Number(s));
    let r;
    return o(e) ? o(t) ? r = parseFloat(e) - parseFloat(t) : r = -1 : o(t) ? r = 1 : r = e.localeCompare(t), n && (r *= -1), r;
  }
}, Zn = {
  accordion: {
    type: Boolean,
    default: !1
  }
}, Jn = {
  modelValue: {
    type: [Array, String, Number],
    required: !0
  }
};
function Wi() {
  return O(k());
}
const Qn = /* @__PURE__ */ x({
  name: "hr-collapse",
  props: {
    ...E,
    ...A,
    ...Zn,
    ...Jn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => [].concat(e.modelValue));
    W("collapse", {
      onItemClick: (l) => {
        if (e.accordion)
          t.emit("update:modelValue", e.modelValue === l ? null : l);
        else if (Array.isArray(e.modelValue)) {
          let i = e.modelValue.slice(0);
          e.modelValue.indexOf(l) === -1 ? i.push(l) : i = U.remove(i, l), t.emit("update:modelValue", i);
        } else
          t.emit("update:modelValue", e.modelValue === l ? null : l);
      },
      expandedItems: n
    });
    const r = R({
      accordion: b(() => e.accordion),
      expandedItems: n
    });
    return {
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), eo = {
  id: {
    type: String,
    required: !0
  }
};
function Fi() {
  return O(k());
}
const to = /* @__PURE__ */ x({
  name: "hr-collapse-item",
  props: {
    ...E,
    ...A,
    ...eo
  },
  setup(e, t) {
    const n = K("collapse"), o = b(() => n.expandedItems.value.indexOf(e.id) !== -1), s = R({
      expanded: o,
      onClick: () => {
        n.onItemClick(e.id);
      }
    });
    return {
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), no = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
function qi() {
  return O(k());
}
const oo = /* @__PURE__ */ x({
  name: "hr-inline-collapse",
  props: {
    ...E,
    ...A,
    ...no
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = S(e.modelValue);
    M(() => e.modelValue, (l) => {
      n.value = l;
    });
    const o = () => {
      n.value = !n.value, t.emit("update:modelValue", !e.modelValue);
    }, r = R({
      expanded: b(() => n.value),
      onClick: o
    });
    return {
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), We = "core-collapses", ro = {
  Collapse: Qn,
  CollapseItem: to,
  InlineCollapse: oo
}, so = {
  install: (e, t) => {
    L(e, We) || (H(e, ro), j(e, We));
  }
};
function me(e) {
  return tn() ? (nn(e), !0) : !1;
}
function ee(e) {
  return typeof e == "function" ? e() : on(e);
}
const he = typeof window < "u", Ot = () => {
}, Fe = /* @__PURE__ */ io();
function io() {
  var e;
  return he && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function lo(...e) {
  if (e.length !== 1)
    return rn(...e);
  const t = e[0];
  return typeof t == "function" ? bt(sn(() => ({ get: t, set: Ot }))) : S(t);
}
function ao(e, t = !0) {
  k() ? re(e) : t ? e() : ne(e);
}
function de(e) {
  var t;
  const n = ee(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ce = he ? window : void 0, co = he ? window.document : void 0;
he && window.navigator;
he && window.location;
function uo(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = Ce) : [t, n, o, r] = e, !t)
    return Ot;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], l = () => {
    s.forEach((g) => g()), s.length = 0;
  }, i = (g, u, m, c) => (g.addEventListener(u, m, c), () => g.removeEventListener(u, m, c)), a = M(
    () => [de(t), ee(r)],
    ([g, u]) => {
      l(), g && s.push(
        ...n.flatMap((m) => o.map((c) => i(g, m, c, u)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    a(), l();
  };
  return me(d), d;
}
function fo() {
  const e = S(!1);
  return k() && re(() => {
    e.value = !0;
  }), e;
}
function Vt(e) {
  const t = fo();
  return b(() => (t.value, Boolean(e())));
}
var qe = Object.getOwnPropertySymbols, po = Object.prototype.hasOwnProperty, mo = Object.prototype.propertyIsEnumerable, ho = (e, t) => {
  var n = {};
  for (var o in e)
    po.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && qe)
    for (var o of qe(e))
      t.indexOf(o) < 0 && mo.call(e, o) && (n[o] = e[o]);
  return n;
};
function vo(e, t, n = {}) {
  const o = n, { window: r = Ce } = o, s = ho(o, ["window"]);
  let l;
  const i = Vt(() => r && "MutationObserver" in r), a = () => {
    l && (l.disconnect(), l = void 0);
  }, d = M(
    () => de(e),
    (u) => {
      a(), i.value && r && u && (l = new MutationObserver(t), l.observe(u, s));
    },
    { immediate: !0 }
  ), g = () => {
    a(), d();
  };
  return me(g), {
    isSupported: i,
    stop: g
  };
}
function go(e, t, n = {}) {
  const { window: o = Ce, initialValue: r = "", observe: s = !1 } = n, l = S(r), i = b(() => {
    var d;
    return de(t) || ((d = o == null ? void 0 : o.document) == null ? void 0 : d.documentElement);
  });
  function a() {
    var d;
    const g = ee(e), u = ee(i);
    if (u && o) {
      const m = (d = o.getComputedStyle(u).getPropertyValue(g)) == null ? void 0 : d.trim();
      l.value = m || r;
    }
  }
  return s && vo(i, a, {
    attributes: !0,
    window: o
  }), M(
    [i, () => ee(e)],
    a,
    { immediate: !0 }
  ), M(
    l,
    (d) => {
      var g;
      (g = i.value) != null && g.style && i.value.style.setProperty(ee(e), d);
    }
  ), l;
}
var Ue = Object.getOwnPropertySymbols, bo = Object.prototype.hasOwnProperty, yo = Object.prototype.propertyIsEnumerable, wo = (e, t) => {
  var n = {};
  for (var o in e)
    bo.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ue)
    for (var o of Ue(e))
      t.indexOf(o) < 0 && yo.call(e, o) && (n[o] = e[o]);
  return n;
};
function Po(e, t, n = {}) {
  const o = n, { window: r = Ce } = o, s = wo(o, ["window"]);
  let l;
  const i = Vt(() => r && "ResizeObserver" in r), a = () => {
    l && (l.disconnect(), l = void 0);
  }, d = b(
    () => Array.isArray(e) ? e.map((m) => de(m)) : [de(e)]
  ), g = M(
    d,
    (m) => {
      if (a(), i.value && r) {
        l = new ResizeObserver(t);
        for (const c of m)
          c && l.observe(c, s);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    a(), g();
  };
  return me(u), {
    isSupported: i,
    stop: u
  };
}
function Tt(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientHeight < e.scrollHeight || t.overflowY === "auto" && e.clientWidth < e.scrollWidth)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Tt(n);
  }
}
function _o(e) {
  const t = e || window.event, n = t.target;
  return Tt(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function Io(e, t = !1) {
  const n = S(t);
  let o = null, r;
  M(lo(e), (i) => {
    if (i) {
      const a = i;
      r = a.style.overflow, n.value && (a.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const s = () => {
    const i = ee(e);
    !i || n.value || (Fe && (o = uo(
      i,
      "touchmove",
      (a) => {
        _o(a);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, l = () => {
    const i = ee(e);
    !i || !n.value || (Fe && (o == null || o()), i.style.overflow = r, n.value = !1);
  };
  return me(l), b({
    get() {
      return n.value;
    },
    set(i) {
      i ? s() : l();
    }
  });
}
let Ro = 0;
function Co(e, t = {}) {
  const n = S(!1), {
    document: o = co,
    immediate: r = !0,
    manual: s = !1,
    id: l = `vueuse_styletag_${++Ro}`
  } = t, i = S(e);
  let a = () => {
  };
  const d = () => {
    if (!o)
      return;
    const u = o.getElementById(l) || o.createElement("style");
    u.isConnected || (u.type = "text/css", u.id = l, t.media && (u.media = t.media), o.head.appendChild(u)), !n.value && (a = M(
      i,
      (m) => {
        u.textContent = m;
      },
      { immediate: !0 }
    ), n.value = !0);
  }, g = () => {
    !o || !n.value || (a(), o.head.removeChild(o.getElementById(l)), n.value = !1);
  };
  return r && !s && ao(d), s || me(g), {
    id: l,
    css: i,
    unload: g,
    load: d,
    isLoaded: bt(n)
  };
}
const Ee = {
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
}, le = ln({}), So = /* @__PURE__ */ x({
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
    const t = S(0);
    W("global-scrollbar-width", t);
    const n = R({}), o = R({}), r = b(() => {
      const f = {};
      return Object.keys(o).forEach((v) => {
        f[v] = o[v].length;
      }), f;
    }), s = b(() => {
      const f = {};
      return Object.keys(o).forEach((v) => {
        f[v] = o[v].filter((w) => w.visible).length;
      }), f;
    }), l = (f) => f.charAt(0).toUpperCase() + f.slice(1), i = (f) => f.split("-").map((D) => l(D)).join(""), a = (f) => {
      const v = {};
      return Object.keys(f).forEach((w) => {
        v[`on${i(w)}`] = f[w];
      }), v;
    }, d = (f) => {
      const v = n[f];
      v.visible = !1;
    }, g = (f) => {
      const v = n[f];
      delete n[f], o[v.stack] = o[v.stack].filter((w) => w.id !== f);
    }, u = (f) => {
      d(f);
    }, m = (f) => {
      const v = f;
      return v.resolve = (w = null) => {
        v.promise.resolve(w), d(v.id);
      }, v.reject = (w = null) => {
        v.promise.reject(w), d(v.id);
      }, v.transitionEnd = () => {
        g(v.id);
      }, v.visible = !0, v.id = Ee.random(), v.compiledListeners = b(() => v.listeners ? a(v.listeners) : {}), o[v.stack] || (o[v.stack] = []), o[v.stack].push(v), n[v.id] = v, v;
    }, c = (f) => n[f], h = (f) => b(() => r.value[f]), p = b(() => Object.values(r.value).reduce((f, v) => f + v, 0)), _ = (f) => b(() => s.value[f]), $ = b(() => Object.values(s.value).reduce((f, v) => f + v, 0)), I = {
      addDialog: m,
      getDialog: c,
      destroyDialog: u,
      getStackCount: h,
      getStackVisibleCount: _,
      getStackIndex: (f, v) => b(() => o[f].findIndex((w) => w.id === v)),
      count: p,
      visibleCount: $
    };
    if (re(() => {
      le[e.name] = I;
    }), ae(() => {
      delete le[e.name];
    }), e.lockWindowScroll) {
      const f = go("--h-global-scrollbar-width", document.body);
      Po(document.body, (D) => {
        const B = window.innerWidth - document.documentElement.clientWidth;
        f.value = `${B}px`, t.value = B;
      }), Co("body.has-dialogs {padding-right: var(--h-global-scrollbar-width);}");
      const v = S(document.body), w = Io(v);
      M(() => $.value, (D) => {
        D > 0 ? (document.body.classList.add("has-dialogs"), w.value = !0) : (document.body.classList.remove("has-dialogs"), w.value = !1);
      });
    }
    return {
      ...I,
      IDialogs: n
    };
  },
  render() {
    return T(yt, {
      to: this.$props.teleport
    }, Object.values(this.IDialogs).map((e) => T(e.component, {
      key: e.id,
      visible: e.visible,
      ...e.props,
      ...e.compiledListeners
    })));
  }
});
function Et(e, t, n, o) {
  const r = o && o.wrapper ? o.wrapper : "default", s = o && o.stack ? o.stack : "default";
  let l = null;
  return {
    promise: new Promise((a, d) => {
      l = le[r].addDialog({
        component: wt(e),
        listeners: n !== void 0 ? R(n) : null,
        props: t !== void 0 ? R(t) : null,
        stack: s,
        promise: { resolve: a, reject: d }
      });
    }),
    destroy: () => le[r].destroyDialog(l.id)
  };
}
function ko(e, t, n, o) {
  return Et(e, t, n, o).promise;
}
function At(e = "default") {
  return le[e];
}
function Bt(e) {
  const t = K("wrapper-name");
  return le[t].getDialog(e);
}
function $o() {
  const e = k(), t = Bt(e.vnode.key);
  return W("dialog-id", e.vnode.key), W("dialog-resolve", t.resolve), W("dialog-reject", t.reject), W("dialog-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: Et,
  createPromise: ko,
  getDialog: Bt,
  getWrapper: At,
  setupDialog: $o
}, Symbol.toStringTag, { value: "Module" })), xo = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function Ki(e = [], t = []) {
  const n = k();
  return {
    props: R({
      ...xt(n.props, e)
    }),
    listeners: Dt(n, t)
  };
}
const Do = /* @__PURE__ */ x({
  name: "hr-dialog",
  props: {
    ...xo
  },
  setup(e, t) {
    const n = K("dialog-id");
    n || console.warn("You must call DialogManager.setupDialog() in the dialog setup");
    const o = K("dialog-reject"), r = () => {
      o(null);
    }, s = At(), l = s.getDialog(n), i = R({
      visible: b(() => e.visible),
      stackIndex: s.getStackIndex(l.stack, l.id),
      stackCount: s.getStackCount(l.stack),
      visibleStackCount: s.getStackVisibleCount(l.stack),
      close: r
    });
    return () => t.slots.default(i);
  }
}), Ke = "core-dialogs", Oo = {
  Dialog: Do,
  DialogWrapper: So
}, Vo = {
  install: (e, t) => {
    L(e, Ke) || (H(e, Oo), j(e, Ke));
  }
}, To = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Eo = {
  label: {
    type: String,
    default: null
  }
};
function Yi() {
  return O(k());
}
const Ao = /* @__PURE__ */ x({
  name: "hr-dropdown-item",
  props: {
    ...E,
    ...A,
    ...To,
    ...Eo
  },
  emits: ["click"],
  setup(e, t) {
    const n = K("dropdown"), o = (a) => {
      e.disabled || (t.emit("click", a), n.onItemClick(a));
    }, r = R({
      disabled: e.disabled,
      label: e.label,
      onClick: o,
      component: k()
    });
    re(() => {
      n.addItemInstance(r);
    }), ae(() => {
      n.removeItemInstance(r);
    });
    const s = b(() => n.focusedItem.value === r), l = R({
      disabled: b(() => e.disabled),
      focused: s,
      onClick: o
    });
    return {
      dropdown: n,
      slotProps: l,
      defaultRender: () => t.slots.default(l)
    };
  },
  render() {
    if (this.dropdown.itemsVisible.value) {
      if (this.$props.as) {
        const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
        return T(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), Bo = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Mo = {
  hideOnClick: {
    type: Boolean,
    default: !0
  }
}, zo = {
  splitButton: {
    type: Boolean,
    default: !1
  }
}, Lo = {
  visible: {
    type: Boolean,
    default: !0
  }
};
function Gi() {
  return O(k());
}
const jo = /* @__PURE__ */ x({
  name: "hr-dropdown",
  props: {
    ...E,
    ...A,
    ...Bo,
    ...Mo,
    ...zo,
    ...Lo
  },
  emits: ["click", "focusedItemChanged"],
  setup(e, t) {
    const n = S(!1), o = S(!1), r = S([]), s = S(null), l = b(() => r.value.filter((f) => f.disabled === !1)), i = () => {
      s.value = null;
    };
    M(s, () => {
      t.emit("focusedItemChanged", s.value);
    });
    const a = b(() => e.disabled || !e.visible), d = (f) => {
      r.value.push(f);
    }, g = (f) => {
      r.value = U.remove(r.value, f);
    }, u = () => {
      n.value = !1;
    };
    M(() => e.visible, (f) => {
      f === !1 && u();
    });
    const m = () => {
      e.hideOnClick && u();
    }, c = (f, v) => {
      if (a.value)
        return !1;
      const w = () => s.value ? l.value.findIndex((D) => D === s.value) : null;
      !n.value && (f.key === "ArrowDown" || f.key === "ArrowUp" || f.key === "Enter") ? (f.key === "Enter" ? v === "main" ? t.emit("click", f) : v === "split" && (n.value = !n.value) : n.value = !n.value, f.preventDefault(), f.stopImmediatePropagation()) : f.key === "ArrowDown" ? (s.value = U.next(l.value, w()), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "ArrowUp" ? (s.value = U.prev(l.value, w()), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "Enter" && s.value ? (s.value.onClick(f), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "Tab" ? u() : f.key === "Escape" && (u(), f.preventDefault(), f.stopImmediatePropagation());
    }, h = () => {
      if (a.value)
        return !1;
      e.splitButton ? t.emit("click") : n.value = !n.value;
    }, p = () => {
      if (a.value)
        return !1;
      n.value = !n.value;
    }, _ = (f) => {
      o.value = f;
    }, $ = b(() => n.value || o.value);
    W("dropdown", {
      focusedItem: s,
      onItemClick: m,
      addItemInstance: d,
      removeItemInstance: g,
      menuVisible: b(() => n.value),
      itemsVisible: $
    });
    const z = R({
      menuVisible: b(() => n.value),
      disabled: b(() => e.disabled),
      splitButton: b(() => e.splitButton),
      focusedItem: b(() => s.value),
      clearFocusedItem: i,
      onKeyEvents: c,
      onButtonClick: h,
      onIconClick: p,
      onItemClick: m,
      onMenuTransitioning: _
    });
    return {
      close: u,
      slotProps: z,
      defaultRender: () => t.slots.default(z)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ye = "core-dropdowns", Ho = {
  Dropdown: jo,
  DropdownItem: Ao
}, No = {
  install: (e, t) => {
    L(e, Ye) || (H(e, Ho), j(e, Ye));
  }
};
function ve(e) {
  return e.split("-")[0];
}
function Mt(e) {
  return e.split("-")[1];
}
function Se(e) {
  return ["top", "bottom"].includes(ve(e)) ? "x" : "y";
}
function zt(e) {
  return e === "y" ? "height" : "width";
}
function Ge(e, t, n) {
  let { reference: o, floating: r } = e;
  const s = o.x + o.width / 2 - r.width / 2, l = o.y + o.height / 2 - r.height / 2, i = Se(t), a = zt(i), d = o[a] / 2 - r[a] / 2, g = i === "x";
  let u;
  switch (ve(t)) {
    case "top":
      u = { x: s, y: o.y - r.height };
      break;
    case "bottom":
      u = { x: s, y: o.y + o.height };
      break;
    case "right":
      u = { x: o.x + o.width, y: l };
      break;
    case "left":
      u = { x: o.x - r.width, y: l };
      break;
    default:
      u = { x: o.x, y: o.y };
  }
  switch (Mt(t)) {
    case "start":
      u[i] -= d * (n && g ? -1 : 1);
      break;
    case "end":
      u[i] += d * (n && g ? -1 : 1);
  }
  return u;
}
const Wo = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: s = [], platform: l } = n, i = s.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: r }), { x: g, y: u } = Ge(d, o, a), m = o, c = {}, h = 0;
  for (let p = 0; p < i.length; p++) {
    const { name: _, fn: $ } = i[p], { x: z, y: I, data: f, reset: v } = await $({ x: g, y: u, initialPlacement: o, placement: m, strategy: r, middlewareData: c, rects: d, platform: l, elements: { reference: e, floating: t } });
    g = z ?? g, u = I ?? u, c = { ...c, [_]: { ...c[_], ...f } }, v && h <= 50 && (h++, typeof v == "object" && (v.placement && (m = v.placement), v.rects && (d = v.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: r }) : v.rects), { x: g, y: u } = Ge(d, m, a)), p = -1);
  }
  return { x: g, y: u, placement: m, strategy: r, middlewareData: c };
};
function Fo(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Pe(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Lt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: s, rects: l, elements: i, strategy: a } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: u = "floating", altBoundary: m = !1, padding: c = 0 } = t, h = Fo(c), p = i[m ? u === "floating" ? "reference" : "floating" : u], _ = Pe(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(p))) == null || n ? p : p.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)), boundary: d, rootBoundary: g, strategy: a })), $ = Pe(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: u === "floating" ? { ...l.floating, x: o, y: r } : l.reference, offsetParent: await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), strategy: a }) : l[u]);
  return { top: _.top - $.top + h.top, bottom: $.bottom - _.bottom + h.bottom, left: _.left - $.left + h.left, right: $.right - _.right + h.right };
}
const qo = Math.min, Uo = Math.max;
function Xe(e, t, n) {
  return Uo(e, qo(t, n));
}
const Ko = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _e(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ko[t]);
}
function Yo(e, t, n) {
  n === void 0 && (n = !1);
  const o = Mt(e), r = Se(e), s = zt(r);
  let l = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = _e(l)), { main: l, cross: _e(l) };
}
const Go = { start: "end", end: "start" };
function Ze(e) {
  return e.replace(/start|end/g, (t) => Go[t]);
}
const Xo = ["top", "right", "bottom", "left"];
Xo.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const jt = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: r, rects: s, initialPlacement: l, platform: i, elements: a } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: u, fallbackStrategy: m = "bestFit", flipAlignment: c = !0, ...h } = e, p = ve(o), _ = u || (p === l || !c ? [_e(l)] : function(B) {
      const N = _e(B);
      return [Ze(B), N, Ze(N)];
    }(l)), $ = [l, ..._], z = await Lt(t, h), I = [];
    let f = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (d && I.push(z[p]), g) {
      const { main: B, cross: N } = Yo(o, s, await (i.isRTL == null ? void 0 : i.isRTL(a.floating)));
      I.push(z[B], z[N]);
    }
    if (f = [...f, { placement: o, overflows: I }], !I.every((B) => B <= 0)) {
      var v, w;
      const B = ((v = (w = r.flip) == null ? void 0 : w.index) != null ? v : 0) + 1, N = $[B];
      if (N)
        return { data: { index: B, overflows: f }, reset: { placement: N } };
      let y = "bottom";
      switch (m) {
        case "bestFit": {
          var D;
          const P = (D = f.map((C) => [C, C.overflows.filter((V) => V > 0).reduce((V, F) => V + F, 0)]).sort((C, V) => C[1] - V[1])[0]) == null ? void 0 : D[0].placement;
          P && (y = P);
          break;
        }
        case "initialPlacement":
          y = l;
      }
      if (o !== y)
        return { reset: { placement: y } };
    }
    return {};
  } };
};
function Ht(e) {
  return e === "x" ? "y" : "x";
}
const Nt = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: s = !0, crossAxis: l = !1, limiter: i = { fn: (_) => {
      let { x: $, y: z } = _;
      return { x: $, y: z };
    } }, ...a } = e, d = { x: n, y: o }, g = await Lt(t, a), u = Se(ve(r)), m = Ht(u);
    let c = d[u], h = d[m];
    if (s) {
      const _ = u === "y" ? "bottom" : "right";
      c = Xe(c + g[u === "y" ? "top" : "left"], c, c - g[_]);
    }
    if (l) {
      const _ = m === "y" ? "bottom" : "right";
      h = Xe(h + g[m === "y" ? "top" : "left"], h, h - g[_]);
    }
    const p = i.fn({ ...t, [u]: c, [m]: h });
    return { ...p, data: { x: p.x - n, y: p.y - o } };
  } };
}, Zo = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: o, placement: r, rects: s, middlewareData: l } = t, { offset: i = 0, mainAxis: a = !0, crossAxis: d = !0 } = e, g = { x: n, y: o }, u = Se(r), m = Ht(u);
    let c = g[u], h = g[m];
    const p = typeof i == "function" ? i(t) : i, _ = typeof p == "number" ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
    if (a) {
      const v = u === "y" ? "height" : "width", w = s.reference[u] - s.floating[v] + _.mainAxis, D = s.reference[u] + s.reference[v] - _.mainAxis;
      c < w ? c = w : c > D && (c = D);
    }
    if (d) {
      var $, z, I, f;
      const v = u === "y" ? "width" : "height", w = ["top", "left"].includes(ve(r)), D = s.reference[m] - s.floating[v] + (w && ($ = (z = l.offset) == null ? void 0 : z[m]) != null ? $ : 0) + (w ? 0 : _.crossAxis), B = s.reference[m] + s.reference[v] + (w ? 0 : (I = (f = l.offset) == null ? void 0 : f[m]) != null ? I : 0) - (w ? _.crossAxis : 0);
      h < D ? h = D : h > B && (h = B);
    }
    return { [u]: c, [m]: h };
  } };
};
function Wt(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Q(e) {
  if (e == null)
    return window;
  if (!Wt(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function G(e) {
  return Q(e).getComputedStyle(e);
}
function oe(e) {
  return Wt(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Ft() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function X(e) {
  return e instanceof Q(e).HTMLElement;
}
function Z(e) {
  return e instanceof Q(e).Element;
}
function Je(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Q(e).ShadowRoot || e instanceof ShadowRoot;
}
function ke(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = G(e);
  return /auto|scroll|overlay|hidden/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Jo(e) {
  return ["table", "td", "th"].includes(oe(e));
}
function Ve(e) {
  const t = /firefox/i.test(Ft()), n = G(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const s = n.contain;
    return s != null && s.includes(r);
  });
}
function qt() {
  return !/^((?!chrome|android).)*safari/i.test(Ft());
}
function Ae(e) {
  return ["html", "body", "#document"].includes(oe(e));
}
const Qe = Math.min, ce = Math.max, Ie = Math.round;
function J(e, t, n) {
  var o, r, s, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect();
  let a = 1, d = 1;
  t && X(e) && (a = e.offsetWidth > 0 && Ie(i.width) / e.offsetWidth || 1, d = e.offsetHeight > 0 && Ie(i.height) / e.offsetHeight || 1);
  const g = Z(e) ? Q(e) : window, u = !qt() && n, m = (i.left + (u && (o = (r = g.visualViewport) == null ? void 0 : r.offsetLeft) != null ? o : 0)) / a, c = (i.top + (u && (s = (l = g.visualViewport) == null ? void 0 : l.offsetTop) != null ? s : 0)) / d, h = i.width / a, p = i.height / d;
  return { width: h, height: p, top: c, right: m + h, bottom: c + p, left: m, x: m, y: c };
}
function te(e) {
  return (t = e, (t instanceof Q(t).Node ? e.ownerDocument : e.document) || window.document).documentElement;
  var t;
}
function $e(e) {
  return Z(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ut(e) {
  return J(te(e)).left + $e(e).scrollLeft;
}
function Qo(e, t, n) {
  const o = X(t), r = te(t), s = J(e, o && function(a) {
    const d = J(a);
    return Ie(d.width) !== a.offsetWidth || Ie(d.height) !== a.offsetHeight;
  }(t), n === "fixed");
  let l = { scrollLeft: 0, scrollTop: 0 };
  const i = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((oe(t) !== "body" || ke(r)) && (l = $e(t)), X(t)) {
      const a = J(t, !0);
      i.x = a.x + t.clientLeft, i.y = a.y + t.clientTop;
    } else
      r && (i.x = Ut(r));
  return { x: s.left + l.scrollLeft - i.x, y: s.top + l.scrollTop - i.y, width: s.width, height: s.height };
}
function fe(e) {
  if (oe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Je(e) ? e.host : null) || te(e);
  return Je(t) ? t.host : t;
}
function et(e) {
  return X(e) && G(e).position !== "fixed" ? e.offsetParent : null;
}
function tt(e) {
  const t = Q(e);
  let n = et(e);
  for (; n && Jo(n) && G(n).position === "static"; )
    n = et(n);
  return n && (oe(n) === "html" || oe(n) === "body" && G(n).position === "static" && !Ve(n)) ? t : n || function(o) {
    let r = fe(o);
    for (; X(r) && !Ae(r); ) {
      if (Ve(r))
        return r;
      r = fe(r);
    }
    return null;
  }(e) || t;
}
function Kt(e) {
  const t = fe(e);
  return Ae(t) ? e.ownerDocument.body : X(t) && ke(t) ? t : Kt(t);
}
function ue(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Kt(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Q(o), l = r ? [s].concat(s.visualViewport || [], ke(o) ? o : []) : o, i = t.concat(l);
  return r ? i : i.concat(ue(l));
}
function nt(e, t, n) {
  return t === "viewport" ? Pe(function(o, r) {
    const s = Q(o), l = te(o), i = s.visualViewport;
    let a = l.clientWidth, d = l.clientHeight, g = 0, u = 0;
    if (i) {
      a = i.width, d = i.height;
      const m = qt();
      (m || !m && r === "fixed") && (g = i.offsetLeft, u = i.offsetTop);
    }
    return { width: a, height: d, x: g, y: u };
  }(e, n)) : Z(t) ? function(o, r) {
    const s = J(o, !1, r === "fixed"), l = s.top + o.clientTop, i = s.left + o.clientLeft;
    return { top: l, left: i, x: i, y: l, right: i + o.clientWidth, bottom: l + o.clientHeight, width: o.clientWidth, height: o.clientHeight };
  }(t, n) : Pe(function(o) {
    var r;
    const s = te(o), l = $e(o), i = (r = o.ownerDocument) == null ? void 0 : r.body, a = ce(s.scrollWidth, s.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), d = ce(s.scrollHeight, s.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
    let g = -l.scrollLeft + Ut(o);
    const u = -l.scrollTop;
    return G(i || s).direction === "rtl" && (g += ce(s.clientWidth, i ? i.clientWidth : 0) - a), { width: a, height: d, x: g, y: u };
  }(te(e)));
}
const er = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = n === "clippingAncestors" ? function(d) {
    let g = ue(d).filter((h) => Z(h) && oe(h) !== "body"), u = null;
    const m = G(d).position === "fixed";
    let c = m ? fe(d) : d;
    for (; Z(c) && !Ae(c); ) {
      const h = G(c), p = Ve(c);
      (m ? p || u : p || h.position !== "static" || !u || !["absolute", "fixed"].includes(u.position)) ? u = h : g = g.filter((_) => _ !== c), c = fe(c);
    }
    return g;
  }(t) : [].concat(n), l = [...s, o], i = l[0], a = l.reduce((d, g) => {
    const u = nt(t, g, r);
    return d.top = ce(u.top, d.top), d.right = Qe(u.right, d.right), d.bottom = Qe(u.bottom, d.bottom), d.left = ce(u.left, d.left), d;
  }, nt(t, i, r));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const r = X(n), s = te(n);
  if (n === s)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 };
  const i = { x: 0, y: 0 };
  if ((r || !r && o !== "fixed") && ((oe(n) !== "body" || ke(s)) && (l = $e(n)), X(n))) {
    const a = J(n, !0);
    i.x = a.x + n.clientLeft, i.y = a.y + n.clientTop;
  }
  return { ...t, x: t.x - l.scrollLeft + i.x, y: t.y - l.scrollTop + i.y };
}, isElement: Z, getDimensions: function(e) {
  if (X(e))
    return { width: e.offsetWidth, height: e.offsetHeight };
  const t = J(e);
  return { width: t.width, height: t.height };
}, getOffsetParent: tt, getDocumentElement: te, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const r = this.getOffsetParent || tt, s = this.getDimensions;
  return { reference: Qo(t, await r(n), o), floating: { x: 0, y: 0, ...await s(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => G(e).direction === "rtl" };
function tr(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = !0, ancestorResize: s = !0, elementResize: l = !0, animationFrame: i = !1 } = o, a = r && !i, d = a || s ? [...Z(e) ? ue(e) : e.contextElement ? ue(e.contextElement) : [], ...ue(t)] : [];
  d.forEach((c) => {
    a && c.addEventListener("scroll", n, { passive: !0 }), s && c.addEventListener("resize", n);
  });
  let g, u = null;
  if (l) {
    let c = !0;
    u = new ResizeObserver(() => {
      c || n(), c = !1;
    }), Z(e) && !i && u.observe(e), Z(e) || !e.contextElement || i || u.observe(e.contextElement), u.observe(t);
  }
  let m = i ? J(e) : null;
  return i && function c() {
    const h = J(e);
    !m || h.x === m.x && h.y === m.y && h.width === m.width && h.height === m.height || n(), m = h, g = requestAnimationFrame(c);
  }(), n(), () => {
    var c;
    d.forEach((h) => {
      a && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), (c = u) == null || c.disconnect(), u = null, i && cancelAnimationFrame(g);
  };
}
const nr = (e, t, n) => Wo(e, t, { platform: er, ...n });
function or(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !cn(e);
}
const rr = {
  reference: {
    type: null,
    required: !0
  }
}, sr = {
  visible: {
    type: Boolean,
    default: !1
  }
}, ir = {
  keep: {
    type: Boolean,
    default: !1
  }
}, lr = {
  transition: {
    type: String,
    default: null
  }
}, ar = (e = "bottom") => ({
  placement: {
    type: String,
    default: e
  }
}), cr = {
  middleware: {
    type: Array,
    default: () => [jt(), Nt({
      limiter: Zo()
    })]
  }
};
function Xi() {
  return O(k());
}
function Zi(e) {
  const t = e.split("-");
  return {
    placement: t[0],
    alignment: t.length === 2 ? t[1] : null
  };
}
const ur = /* @__PURE__ */ x({
  name: "hr-floating",
  props: {
    ...E,
    ...rr,
    ...sr,
    ...ir,
    ...lr,
    ...ar(),
    ...cr
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0,
    transitionStateChanged: (e) => !0,
    show: () => !0,
    hide: () => !0
  },
  setup(e, t) {
    const n = S(null), o = S(null), r = R({
      position: "absolute",
      left: "0",
      top: "0",
      maxWidth: "",
      maxHeight: "",
      zIndex: 1
    }), s = b(() => [jt(), Nt({
      padding: 8
    }), ...e.middleware]), l = () => {
      n.value && nr(e.reference, n.value, {
        placement: e.placement,
        middleware: s.value
      }).then((c) => {
        t.emit("computedPosition", c), r.position = c.strategy, r.left = `${c.x ?? 0}px`, r.top = `${c.y ?? 0}px`, r.zIndex = 1;
      });
    }, i = () => {
      n.value && (o.value = tr(e.reference, n.value, l));
    };
    M(() => e.visible, (c) => {
      t.emit(c ? "show" : "hide"), c && !o.value && ne(i);
    });
    const a = (c, h) => typeof c.contains == "function" ? c.contains(h) : !1, d = (c) => {
      if (!e.visible)
        return;
      const h = !n.value || c.target && !a(n.value, c.target), p = !e.reference || c.target && !a(e.reference, c.target);
      !h && !p || t.emit("clickOutside", {
        outsideFloating: h,
        outsideReference: p
      });
    }, g = () => {
      o.value && (o.value(), o.value = null);
    }, u = () => {
      t.emit("transitionStateChanged", !0);
    }, m = () => {
      t.emit("transitionStateChanged", !1), e.keep || g();
    };
    return ae(() => {
      g();
    }), {
      middleware: s,
      floatingElement: n,
      style: r,
      onLeave: u,
      onAfterLeave: m,
      onDocumentClick: d
    };
  },
  render() {
    let e;
    const t = {
      ...this.$attrs,
      style: {
        ...this.style
      }
    }, n = this.$props.as || "span", o = () => this.$props.keep ? ge(se(n, xe({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[un, this.visible], [be("document-event"), this.onDocumentClick, "click"]]) : this.visible ? ge(se(n, xe({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[be("document-event"), this.onDocumentClick, "click"]]) : null;
    return se(yt, {
      to: "body"
    }, {
      default: () => [this.transition ? se(an, {
        name: this.transition,
        onLeave: this.onLeave,
        onAfterLeave: this.onAfterLeave
      }, or(e = o()) ? e : {
        default: () => [e]
      }) : o()]
    });
  }
}), ot = "core-floating", dr = {
  Floating: ur
}, fr = {
  install: (e, t) => {
    L(e, ot) || (H(e, dr), j(e, ot));
  }
}, pr = {
  active: {
    type: String,
    required: !0
  }
};
function Ji() {
  return O(k());
}
const mr = /* @__PURE__ */ x({
  name: "hr-fragment-container",
  props: {
    ...E,
    ...A,
    ...pr
  },
  emits: ["click"],
  setup(e, t) {
    const n = R({
      active: b(() => e.active)
    }), o = () => t.slots.default(n);
    return W("coreFragmentContainer", {
      active: b(() => e.active)
    }), {
      slotProps: n,
      defaultRender: o
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), rt = "core-fragments", hr = {
  FragmentContainer: mr
}, vr = {
  install: (e, t) => {
    L(e, rt) || (H(e, hr), j(e, rt));
  }
}, gr = {
  modelValue: {
    type: null,
    required: !0
  }
}, br = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, yr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, wr = {
  readonly: {
    type: Boolean,
    default: !1
  }
}, Pr = {
  type: {
    type: String,
    default: null
  }
};
function Qi(e) {
  return O(k()).setProp("input", e);
}
const _r = /* @__PURE__ */ x({
  name: "hr-input",
  props: {
    ...E,
    ...A,
    ...yr,
    ...wr,
    ...Pr,
    ...gr,
    ...br,
    input: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = (l) => {
      e.readonly ? l.target.selectionEnd === l.target.selectionStart && e.input.select() : e.input.focus();
    }, o = (l) => {
      let i = l;
      e.modelModifiers.capitalize && (i = i.charAt(0).toUpperCase() + i.slice(1));
      const {
        selectionStart: a
      } = e.input, {
        selectionEnd: d
      } = e.input;
      t.emit("update:modelValue", i), ne(() => {
        e.type !== "number" && e.input.setSelectionRange(a, d);
      });
    }, r = R({
      disabled: b(() => e.disabled),
      readonly: b(() => e.readonly),
      modelValue: b({
        get: () => e.modelValue,
        set: (l) => o(l)
      }),
      onClick: n
    });
    return {
      slotProps: r,
      focusInput: n,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ir = {
  modelValue: {
    type: String,
    required: !0
  }
}, Rr = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Cr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Sr = {
  items: {
    type: Array,
    default: () => []
  }
};
function el(e) {
  return O(k()).setProp("input", e);
}
const kr = /* @__PURE__ */ x({
  name: "hr-autocomplete",
  props: {
    ...E,
    ...A,
    ...Cr,
    ...Sr,
    ...Ir,
    ...Rr,
    input: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = () => {
      e.input.focus();
    }, o = (c) => {
      let h = c;
      e.modelModifiers.capitalize && (h = h.charAt(0).toUpperCase() + h.slice(1));
      const {
        selectionStart: p
      } = e.input, {
        selectionEnd: _
      } = e.input;
      t.emit("update:modelValue", h), ne(() => {
        e.input.setSelectionRange(p, _);
      });
    }, r = S(!1), s = S();
    M(s, () => {
      t.emit("focusedItemChanged", s.value);
    });
    const l = (c) => {
      t.emit("itemSelected", c);
    }, i = () => {
      r.value = !1;
    }, a = () => {
      r.value = !0;
    }, d = (c) => {
      if (e.disabled)
        return !1;
      const h = () => s.value ? e.items.findIndex((p) => p === s.value) : null;
      !r.value && (c.key === "ArrowDown" || c.key === "ArrowUp" || c.key === "Enter") && e.modelValue.length > 0 ? (a(), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowDown" && e.modelValue.length > 0 ? (s.value = U.next(e.items, h()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowUp" && e.modelValue.length > 0 ? (s.value = U.prev(e.items, h()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Enter" && s.value ? (l(s.value), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Tab" ? i() : c.key === "Escape" && (i(), c.preventDefault(), c.stopImmediatePropagation());
    }, g = () => {
      s.value = null;
    }, u = R({
      modelValue: b({
        get: () => e.modelValue,
        set: (c) => o(c)
      }),
      disabled: b(() => e.disabled),
      items: b(() => e.items),
      focusedItem: b(() => s.value),
      listVisible: b(() => r.value && e.items.length > 0 && e.modelValue.length > 0),
      onItemClick: l,
      onKeyEvents: d,
      clearFocusedItem: g
    });
    return {
      slotProps: u,
      focusInput: n,
      defaultRender: () => t.slots.default(u),
      hideList: i,
      showList: a
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), st = "core-inputs", $r = {
  Input: _r,
  Autocomplete: kr
}, xr = {
  install: (e, t) => {
    L(e, st) || (H(e, $r), j(e, st));
  }
}, pe = {}, Dr = {
  name: {
    type: String,
    default: "default"
  }
};
function tl() {
  return O(k());
}
const Or = /* @__PURE__ */ x({
  name: "hr-notification-wrapper",
  props: {
    ...E,
    ...A,
    ...Dr
  },
  setup: function(e) {
    W("wrapper-name", e.name);
    const t = R({}), n = (h) => h.charAt(0).toUpperCase() + h.slice(1), o = (h) => h.split("-").map(($) => n($)).join(""), r = (h) => {
      const p = {};
      return Object.keys(h).forEach((_) => {
        p[`on${o(_)}`] = h[_];
      }), p;
    }, s = (h) => {
      const p = t[h];
      p.visible = !1;
    }, l = (h) => {
      delete t[h];
    }, i = (h) => {
      s(h);
    }, a = (h) => {
      const p = t[h];
      p.durationTimeout !== null && p.options.resetDurationOnInteractivity && (clearTimeout(p.durationTimeout), p.durationTimeout = null);
    }, d = (h) => {
      a(h);
      const p = t[h];
      p.options.duration !== null && p.durationTimeout === null && (p.durationTimeout = setTimeout(() => {
        p.reject();
      }, p.options.duration));
    }, m = {
      addNotification: (h) => {
        const p = h;
        return p.resolve = (_ = null) => {
          p.promise.resolve(_), s(p.id);
        }, p.reject = (_ = null) => {
          p.promise.reject(_), s(p.id);
        }, p.transitionEnd = () => {
          l(p.id);
        }, p.visible = !0, p.id = Ee.random(), p.compiledListeners = b(() => p.listeners ? r(p.listeners) : {}), p.durationTimeout = null, t[p.id] = p, d(p.id), p;
      },
      getNotification: (h) => t[h],
      destroyNotification: i,
      pauseDuration: a,
      resumeDuration: d
    };
    pe[e.name] = m;
    const c = R({
      name: b(() => e.name),
      notifications: b(() => t)
    });
    return {
      ...m,
      slotProps: c,
      INotifications: t
    };
  },
  render() {
    const e = () => this.$slots.default(this.slotProps);
    if (this.$props.as) {
      const t = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...t
      }, e());
    }
    return e();
  }
}), Yt = {
  wrapper: "default",
  duration: 4500,
  resetDurationOnInteractivity: !0
};
function Gt(e, t, n, o) {
  const r = { ...Yt, ...o }, s = r.wrapper;
  let l = null;
  return {
    promise: new Promise((a, d) => {
      l = pe[s].addNotification({
        component: wt(e),
        listeners: n !== void 0 ? R(n) : null,
        props: t !== void 0 ? R(t) : null,
        options: r,
        promise: { resolve: a, reject: d }
      });
    }),
    destroy: () => pe[s].destroyNotification(l.id)
  };
}
function Vr(e, t, n, o) {
  return Gt(e, t, n, o).promise;
}
function Xt(e = "default") {
  return pe[e];
}
function Tr(e) {
  const t = K("wrapper-name");
  return pe[t].getNotification(e);
}
function Er() {
  const e = k(), t = Tr(e.vnode.key);
  return W("notification-id", e.vnode.key), W("notification-resolve", t.resolve), W("notification-reject", t.reject), W("notification-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultNotificationOptions: Yt,
  getWrapper: Xt,
  setupNotification: Er,
  show: Gt,
  showPromise: Vr
}, Symbol.toStringTag, { value: "Module" })), Ar = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function ol() {
  return O(k());
}
const Br = /* @__PURE__ */ x({
  name: "hr-notification",
  props: {
    ...E,
    ...A,
    ...Ar
  },
  setup(e, t) {
    const n = K("notification-id");
    n || console.warn("You must call NotificationManager.setupNotification() in the notification setup");
    const o = K("notification-reject"), r = () => {
      o(null);
    }, s = Xt(), l = R({
      visible: b(() => e.visible),
      pauseDuration: () => s.pauseDuration(n),
      resumeDuration: () => s.resumeDuration(n),
      close: r
    }), i = () => t.slots.default(l);
    return () => {
      if (e.as) {
        const a = e.asProps ? e.asProps(l) : {};
        return T(e.as, {
          ...a
        }, i());
      }
      return i();
    };
  }
}), it = "core-notifications", Mr = {
  Notification: Br,
  NotificationWrapper: Or
}, zr = {
  install: (e, t) => {
    L(e, it) || (H(e, Mr), j(e, it));
  }
}, Lr = {
  modelValue: {
    type: Number,
    required: !0
  }
}, jr = {
  pageSize: {
    type: Number,
    required: !0
  }
}, Hr = {
  count: {
    type: Number,
    required: !0
  }
}, Nr = {
  delta: {
    type: Number,
    default: 1
  }
};
function rl() {
  return O(k());
}
const Wr = /* @__PURE__ */ x({
  name: "hr-paginator",
  props: {
    ...E,
    ...A,
    ...Lr,
    ...jr,
    ...Hr,
    ...Nr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => Math.ceil(e.count / e.pageSize)), o = b(() => {
      const i = e.modelValue, a = n.value, d = [], g = [];
      let u;
      d.push(1);
      for (let m = i - e.delta; m <= i + e.delta; m++)
        m < a && m > 1 && d.push(m);
      return a !== 1 && d.push(a), d.forEach((m) => {
        u && (m - u === 2 ? g.push(u + 1) : m - u !== 1 && g.push(null)), g.push(m), u = m;
      }), g;
    }), r = (i) => {
      i !== null && t.emit("update:modelValue", i);
    }, s = R({
      currentPage: b(() => e.modelValue),
      pages: n,
      buttons: o,
      onPaginationButtonClick: r
    });
    return {
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), lt = "core-paginators", Fr = {
  Paginator: Wr
}, qr = {
  install: (e, t) => {
    L(e, lt) || (H(e, Fr), j(e, lt));
  }
}, Ur = {
  value: {
    type: Number,
    required: !0
  }
}, Kr = {
  minimum: {
    type: Number,
    default: 0
  }
}, Yr = {
  maximum: {
    type: Number,
    default: 100
  }
};
function sl() {
  return O(k());
}
const Gr = /* @__PURE__ */ x({
  name: "hr-progress-bar",
  props: {
    ...E,
    ...A,
    ...Ur,
    ...Kr,
    ...Yr
  },
  setup(e, t) {
    const n = b(() => {
      const s = (e.value - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(s);
    }), o = R({
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
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), at = "core-progress-bars", Xr = {
  ProgressBar: Gr
}, Zr = {
  install: (e, t) => {
    L(e, at) || (H(e, Xr), j(e, at));
  }
}, Jr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Qr = {
  modelValue: {
    type: null,
    required: !0
  }
}, es = {
  value: {
    type: null,
    default: !0
  }
};
function il() {
  return O(k());
}
const ts = /* @__PURE__ */ x({
  name: "hr-radio-button",
  props: {
    ...E,
    ...A,
    ...Jr,
    ...Qr,
    ...es
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => e.modelValue === e.value), o = () => {
      t.emit("update:modelValue", e.value);
    }, r = R({
      disabled: b(() => e.disabled),
      state: n,
      onChange: o
    });
    return {
      slotProps: r,
      defaultRender: () => t.slots.default(r)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ct = "core-radio-buttons", ns = {
  RadioButton: ts
}, os = {
  install: (e, t) => {
    L(e, ct) || (H(e, ns), j(e, ct));
  }
};
const rs = {
  horizontal: {
    type: Boolean,
    default: !0
  }
}, ss = {
  vertical: {
    type: Boolean,
    default: !0
  }
}, is = {
  autoHide: {
    type: Boolean,
    default: !0
  }
}, ls = {
  autoHideDelay: {
    type: Number,
    default: 1500
  }
}, as = {
  minimumSize: {
    type: Number,
    default: 20
  }
}, cs = {
  containerClasses: {
    type: null,
    default: null
  }
}, us = {
  wrapperClasses: {
    type: null,
    default: null
  }
};
function ll() {
  return O(k());
}
const ds = /* @__PURE__ */ x({
  name: "hr-scroll-container",
  props: {
    as: {
      type: String,
      required: !0
    },
    ...A,
    ...rs,
    ...ss,
    ...is,
    ...ls,
    ...as,
    ...cs,
    ...us
  },
  setup(e) {
    const t = S(), n = S(), o = S(), r = S(), s = S(), l = R({
      start: null,
      startOffset: null
    }), i = R({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), a = R({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), d = b(() => a.trackHover || i.trackHover), g = b(() => a.dragging || i.dragging), u = S(e.autoHide);
    let m = null;
    const c = () => {
      !e.autoHide || g.value || d.value || (u.value = !1, m && clearTimeout(m), m = setTimeout(() => {
        u.value = !0;
      }, e.autoHideDelay));
    }, h = (P) => {
      P ? (m && clearTimeout(m), u.value = !1) : c();
    };
    M(g, h), M(d, h);
    const p = (P, C) => {
      const V = P.getBoundingClientRect(), F = C.clientX, Y = C.clientY, Be = V.left, Zt = Be + V.width, Me = V.top, Jt = Me + V.height;
      return F >= Be && F <= Zt && Y >= Me && Y <= Jt;
    }, _ = (P) => {
      i.trackHover = n.value && i.visible && p(n.value, P), i.thumbHover = i.trackHover && p(o.value, P), a.trackHover = r.value && a.visible && p(r.value, P), a.thumbHover = a.trackHover && p(s.value, P);
    }, $ = (P) => {
      if (i.dragging && l.startOffset) {
        const C = t.value.getBoundingClientRect(), V = n.value.getBoundingClientRect(), F = P.clientY - C.top - l.startOffset.top + (C.top - V.top), Y = Math.min(100, Math.max(0, 100 / n.value.offsetHeight * F));
        t.value.scrollTop = t.value.scrollHeight * (Y / 100), P.preventDefault(), P.stopImmediatePropagation();
      } else if (a.dragging && l.startOffset) {
        const C = t.value.getBoundingClientRect(), V = r.value.getBoundingClientRect(), F = P.clientX - C.left - l.startOffset.left + (C.left - V.left), Y = Math.min(100, Math.max(0, 100 / r.value.offsetWidth * F));
        t.value.scrollLeft = t.value.scrollWidth * (Y / 100), P.preventDefault(), P.stopImmediatePropagation();
      }
    }, z = (P) => {
      if (i.dragging = n.value && p(n.value, P), a.dragging = r.value && p(r.value, P), (i.dragging || a.dragging) && l.start === null) {
        const C = t.value.getBoundingClientRect();
        l.start = {
          top: P.clientY - C.top,
          left: P.clientX - C.left
        };
        const V = i.dragging ? o.value.getBoundingClientRect() : s.value.getBoundingClientRect();
        l.startOffset = {
          top: C.top - V.top + l.start.top,
          left: C.left - V.left + l.start.left
        }, P.preventDefault(), P.stopImmediatePropagation();
      }
    }, I = () => {
      i.dragging = a.dragging = !1, l.startOffset = l.start = null;
    }, f = S(0), v = S(0), w = () => {
      if (i.visible = t.value.scrollHeight > t.value.offsetHeight, i.visible && n.value && o.value)
        if (t.value.scrollHeight !== f.value && (c(), f.value = t.value.scrollHeight), n.value.offsetHeight === 0)
          ne(w);
        else {
          const P = 100 / t.value.scrollHeight * t.value.offsetHeight;
          i.size = Math.max(e.minimumSize, n.value.offsetHeight * (P / 100));
          const C = 100 / (t.value.scrollHeight - t.value.offsetHeight) * t.value.scrollTop;
          i.offset = (n.value.offsetHeight - i.size) * (C / 100);
        }
      if (a.visible = t.value.scrollWidth > t.value.offsetWidth, a.visible && r.value && s.value)
        if (t.value.scrollWidth !== v.value && (c(), v.value = t.value.scrollWidth), r.value.offsetWidth === 0)
          ne(w);
        else {
          const P = 100 / t.value.scrollWidth * t.value.offsetWidth;
          a.size = Math.max(e.minimumSize, r.value.offsetWidth * (P / 100));
          const C = 100 / (t.value.scrollWidth - t.value.offsetWidth) * t.value.scrollLeft;
          a.offset = (r.value.offsetWidth - a.size) * (C / 100);
        }
    }, D = (P, C) => {
      t.value.scrollTo(P, C);
    }, B = () => {
      c(), w();
    };
    re(() => {
      w(), document.addEventListener("mousemove", $), document.addEventListener("mouseup", I), t.value.addEventListener("scroll", B, {
        passive: !0
      });
    }), dn(() => {
      document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", I), t.value.removeEventListener("scroll", B);
    });
    const N = (P, C, V) => {
      P === "vertical" ? (n.value = C, o.value = V) : (r.value = C, s.value = V);
    }, y = R({
      anyHover: b(() => d.value),
      anyDragging: b(() => g.value),
      hidden: b(() => u.value)
    });
    return {
      wrapper: t,
      verticalBar: i,
      horizontalBar: a,
      anyHover: d,
      anyDragging: g,
      onMouseMove: _,
      onMouseDown: z,
      startAutoHideTimer: c,
      updateThumbs: w,
      slotProps: y,
      registerBar: N,
      scrollTo: D
    };
  },
  render() {
    const e = this.as;
    return se(e, xe(this.$props.asProps(this.slotProps), {
      class: ["hr-scroll-container", {
        "-disable-selection": this.anyHover || this.anyDragging
      }],
      onMouseenter: this.startAutoHideTimer
    }), {
      default: () => [ge(se("div", {
        ref: "wrapper",
        class: ["hr-scroll-container__wrapper", this.wrapperClasses],
        onMousemove: this.onMouseMove,
        onMouseleave: this.onMouseMove,
        onMousedown: this.onMouseDown
      }, [ge(se("div", {
        class: ["hr-scroll-container__container", this.containerClasses]
      }, [this.$slots.default()]), [[be("resize"), this.updateThumbs]])]), [[be("resize"), this.updateThumbs]]), this.$slots.verticalBar ? this.$slots.verticalBar(this.verticalBar) : null, this.$slots.horizontalBar ? this.$slots.horizontalBar(this.horizontalBar) : null]
    });
  }
}), ut = "core-scroll-containers", fs = {
  ScrollContainer: ds
}, ps = {
  CommonInstall: $t
}, ms = {
  install: (e, t) => {
    L(e, ut) || (_t(e, ps, t), H(e, fs), j(e, ut));
  }
}, Te = {
  /**
   * Get a nested property of an object
   * @param obj
   * @param property
   */
  getProperty(e, t) {
    let n = e;
    return t.split(".").every((r) => n[r] === void 0 ? null : (n = n[r], n !== null)), n;
  }
}, hs = {
  modelValue: {
    type: null
  }
}, vs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, gs = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, bs = {
  allowClear: {
    type: Boolean,
    default: !1
  }
}, ys = {
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}, ws = {
  compare: {
    type: [Function, String],
    default: null
  }
};
function al() {
  return O(k());
}
const Ps = /* @__PURE__ */ x({
  name: "hr-select",
  props: {
    ...E,
    ...A,
    ...vs,
    ...gs,
    ...bs,
    ...ys,
    ...hs,
    ...ws
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = S(!1), o = S(!1), r = S([]), s = S(null), l = b(() => {
      const y = [].concat(e.modelValue);
      return r.value.filter((P) => y.indexOf(P.value) !== -1 ? !0 : e.compare ? typeof e.compare == "string" ? y.find((V) => (V !== null && Te.getProperty(V, e.compare)) === (P.value !== null && Te.getProperty(P.value, e.compare))) : e.compare(y, P.value) : !1);
    }), i = b(() => l.value.length > 0), a = b(() => {
      const y = [];
      return l.value.forEach((P) => {
        y.push(P.label);
      }), y.join(", ");
    }), d = S(""), g = S(), u = b(() => r.value.filter((y) => y.disabled === !1)), m = () => {
      s.value = null;
    };
    M(s, () => {
      t.emit("focusedItemChanged", s.value);
    });
    const c = (y) => {
      r.value.push(y);
    }, h = (y) => {
      r.value = U.remove(r.value, y);
    }, p = () => {
      n.value = !1;
    }, _ = (y) => {
      const {
        value: P
      } = y;
      e.hideOnSelect && !e.multiple && p();
      let C = P;
      e.multiple && (C = [], e.modelValue !== void 0 && (C = C.concat(e.modelValue)), C.includes(P) ? C.splice(C.indexOf(P), 1) : C.push(P)), s.value = y, t.emit("update:modelValue", C);
    }, $ = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, z = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, I = (y) => {
      if (e.disabled)
        return !1;
      const P = () => s.value ? u.value.findIndex((C) => C === s.value) : null;
      if (!n.value && (y.key === "ArrowDown" || y.key === "ArrowUp" || y.key === "Enter"))
        n.value = !0, y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "ArrowDown")
        s.value = U.next(u.value, P()), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "ArrowUp")
        s.value = U.prev(u.value, P()), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "Enter" && s.value)
        _(s.value), y.preventDefault(), y.stopImmediatePropagation();
      else if (y.key === "Tab")
        p();
      else if (y.key === "Escape")
        p(), y.preventDefault(), y.stopImmediatePropagation();
      else {
        clearTimeout(g.value);
        const C = y.key.toLowerCase();
        if (C.match(/^\p{L}$/u)) {
          let F = null;
          C == d.value ? F = s.value ? f.value.findIndex((Y) => Y === s.value) : null : d.value += C, s.value = U.next(f.value, F), g.value = setTimeout(v, 1500);
        }
      }
    }, f = b(() => r.value.filter((y) => y.label.toLowerCase().startsWith(d.value))), v = () => {
      d.value = "";
    }, w = (y) => {
      o.value = y;
    }, D = b(() => n.value || o.value);
    W("select", {
      selectedItems: l,
      focusedItem: s,
      onItemClick: _,
      addItemInstance: c,
      removeItemInstance: h,
      menuVisible: b(() => n.value),
      itemsVisible: D
    });
    const B = R({
      modelValue: b(() => e.modelValue),
      disabled: b(() => e.disabled),
      allowClear: b(() => e.allowClear),
      menuVisible: b(() => n.value),
      focusedItem: b(() => s.value),
      clearFocusedItem: m,
      anythingSelected: i,
      selectedItems: l,
      selectedText: a,
      clearValue: z,
      close: p,
      onButtonClick: $,
      onItemClick: _,
      onKeyEvents: I,
      onMenuTransitioning: w
    });
    return {
      close: p,
      slotProps: B,
      defaultRender: () => t.slots.default(B),
      items: r
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), _s = {
  value: {
    type: null,
    required: !0
  }
}, Is = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Rs = {
  label: {
    type: String,
    default: null
  }
};
function cl() {
  return O(k());
}
const Cs = /* @__PURE__ */ x({
  name: "hr-select-item",
  props: {
    ...E,
    ...A,
    ...Is,
    ..._s,
    ...Rs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = K("select"), o = R({
      value: e.value,
      label: e.label,
      disabled: e.disabled,
      component: k()
    });
    re(() => {
      n.addItemInstance(o);
    }), ae(() => {
      n.removeItemInstance(o);
    });
    const r = b(() => n.selectedItems.value.indexOf(o) !== -1), s = b(() => n.focusedItem.value === o), l = () => {
      e.disabled || n.onItemClick(o);
    }, i = R({
      selected: r,
      focused: s,
      disabled: b(() => e.disabled),
      value: b(() => e.value),
      onClick: l
    });
    return {
      select: n,
      slotProps: i,
      defaultRender: () => t.slots.default(i)
    };
  },
  render() {
    if (this.select.itemsVisible.value) {
      if (this.$props.as) {
        const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
        return T(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), dt = "core-selects", Ss = {
  Select: Ps,
  SelectItem: Cs
}, ks = {
  install: (e, t) => {
    L(e, dt) || (H(e, Ss), j(e, dt));
  }
}, $s = {
  modelValue: {
    type: null
  }
}, xs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ds = {
  minimum: {
    type: Number,
    default: 0
  }
}, Os = {
  maximum: {
    type: Number,
    default: 100
  }
}, Vs = {
  stepSize: {
    type: Number,
    default: 1
  }
};
function ul() {
  return O(k());
}
const Ts = /* @__PURE__ */ x({
  name: "hr-slider",
  props: {
    ...E,
    ...A,
    ...$s,
    ...xs,
    ...Ds,
    ...Os,
    ...Vs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => {
      const i = (e.modelValue - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(i);
    }), o = b(() => Math.round((e.maximum - e.minimum) / e.stepSize)), r = (i) => {
      let a = (e.maximum - e.minimum) / 100 * i + e.minimum;
      return a < e.minimum ? a = e.minimum : a > e.maximum && (a = e.maximum), Math.round(a / e.stepSize) * e.stepSize;
    }, s = R({
      modelValue: b(() => e.modelValue),
      percentage: n,
      steps: o
    });
    return {
      percentage: n,
      steps: o,
      getValueFromPercentage: r,
      slotProps: s,
      defaultRender: () => t.slots.default(s)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ft = "core-sliders", Es = {
  Slider: Ts
}, As = {
  install: (e, t) => {
    L(e, ft) || (H(e, Es), j(e, ft));
  }
};
function dl(e, t, n = null, o = !0) {
  return R({
    id: e,
    visible: o,
    validator: n,
    data: t
  });
}
const Bs = {
  modelValue: {
    type: String,
    default: null
  }
}, Ms = {
  steps: {
    type: Array,
    default: null
  }
};
function fl() {
  return O(k());
}
const zs = /* @__PURE__ */ x({
  name: "hr-steps-navigator",
  props: {
    ...E,
    ...A,
    ...Bs,
    ...Ms
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = b(() => e.steps.findIndex((m) => m.id === e.modelValue)), o = b(() => e.steps.filter((m) => m.visible)), r = b(() => {
      const m = [];
      return e.steps.forEach((c) => {
        const h = e.steps.findIndex((p) => p.id === c.id);
        m.push({
          id: c.id,
          visible: c.visible,
          validator: c.validator,
          data: c.data,
          stepIndex: h,
          isCurrent: c.id === e.modelValue,
          isDone: n.value !== -1 && h < n.value,
          isLast: o.value.findIndex((p) => p.id === c.id) === o.value.length - 1,
          isLocked: !1
        });
      }), m;
    }), s = b(() => r.value[n.value]), l = b(() => r.value.filter((m) => m.visible)), i = (m) => {
      t.emit("update:modelValue", m.id);
    }, a = () => {
      if (!(typeof s.value.validator == "function" && !s.value.validator())) {
        const m = U.next(r.value, n.value, (c) => c.visible);
        t.emit("update:modelValue", m.id);
      }
    }, d = () => {
      const m = U.prev(r.value, n.value, (c) => c.visible);
      t.emit("update:modelValue", m.id);
    }, g = R({
      steps: r,
      currentStep: s,
      currentIndex: n,
      visibleSteps: l,
      nextStep: a,
      previousStep: d,
      onStepClick: i
    });
    return {
      nextStep: a,
      previousStep: d,
      visibleSteps: l,
      slotProps: g,
      defaultRender: () => t.slots.default(g)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), pt = "core-steps", Ls = {
  StepsNavigator: zs
}, js = {
  install: (e, t) => {
    L(e, pt) || (H(e, Ls), j(e, pt));
  }
};
class Hs {
  constructor(t, n, o) {
    q(this, "id");
    q(this, "property");
    q(this, "order");
    q(this, "component");
    q(this, "template");
    q(this, "headerTemplate");
    q(this, "formatter");
    q(this, "sortable");
    q(this, "data");
    this.id = t, this.property = n.props.property, this.order = n.props.order, this.component = n, this.template = n.slots.default, this.headerTemplate = n.slots.header, this.formatter = n.props.formatter, this.sortable = n.props.sortable, this.data = o;
  }
}
class Ns {
  constructor(t, n, o, r) {
    q(this, "id");
    q(this, "data");
    q(this, "selected");
    q(this, "selectable");
    this.id = t, this.data = n, this.selected = !1, M(() => o, () => {
      typeof o.selectable == "boolean" ? this.selectable = b(() => o.selectable) : (this.selectable = o.selectable(this.data), M(() => this.selectable.value, () => {
        this.selectable.value || r(this.id, !1);
      }));
    }, {
      immediate: !0
    });
  }
  getValue(t, n) {
    let { data: o } = this;
    return t !== void 0 && (o = Te.getProperty(o, t)), typeof n == "function" ? o = n(o) : n !== null && console.warn("[hr-table-column] Unsupported value for formatter"), o;
  }
}
const Ws = {
  data: {
    type: Array,
    default: !0
  }
}, Fs = {
  rowKey: {
    type: String,
    required: !0
  }
}, qs = {
  selectable: {
    type: [Boolean, Function],
    default: !1
  }
}, Us = {
  selectedRows: {
    type: Array,
    default: () => []
  }
}, Ks = {
  sort: {
    type: Object,
    default: null
  }
};
function pl() {
  return O(k());
}
const Ys = /* @__PURE__ */ x({
  name: "hr-table",
  props: {
    ...E,
    ...A,
    ...Ws,
    ...Fs,
    ...qs,
    ...Us,
    ...Ks
  },
  emits: ["update:sort", "update:selectedRows"],
  setup(e, t) {
    const n = S([]), o = b(() => {
      const I = n.value.filter((v) => v.selected).length, f = n.value.filter((v) => v.selectable).length;
      return I === f && f > 0;
    }), r = b(() => n.value.filter((I) => I.selected).length > 0), s = b(() => n.value.filter((I) => I.selectable).length > 0), l = (I, f) => {
      const v = n.value.find((w) => w.id === I);
      if (v) {
        const w = e.selectedRows.findIndex((D) => D === v.data);
        v.selected = f, w === -1 && f ? t.emit("update:selectedRows", [...e.selectedRows, v.data]) : w !== -1 && !f && t.emit("update:selectedRows", e.selectedRows.filter((D) => D !== v.data));
      }
    }, i = () => {
      const I = !o.value, f = [];
      n.value.forEach((v) => {
        I ? v.selectable && (f.push(v.data), v.selected = !0) : v.selected = !1;
      }), t.emit("update:selectedRows", f);
    };
    M([() => e.selectedRows, () => [...e.selectedRows]], () => {
      n.value.forEach((I) => {
        I.selected = e.selectedRows.findIndex((f) => f === I.data) !== -1;
      });
    }, {
      immediate: !0
    });
    const a = () => {
      const I = n.value;
      n.value = e.data.map((f) => {
        let v = I.find((w) => w.data[e.rowKey] === f[e.rowKey]);
        return v === void 0 ? (v = new Ns(f[e.rowKey], f, e, l), v.selected = e.selectedRows.findIndex((w) => w === v.data) !== -1) : v.data !== f && (v.data = f), v;
      });
    };
    M([() => e.data, () => [...e.data]], () => {
      a();
    }, {
      immediate: !0
    });
    const d = (I) => {
      let f;
      e.sort.key === I ? f = e.sort.direction === "desc" ? "asc" : "desc" : f = "desc";
      const v = {
        key: I,
        direction: f
      };
      t.emit("update:sort", v);
    }, g = () => {
      t.emit("update:sort", {
        key: null,
        direction: "desc"
      });
    }, u = S([]);
    let m = null;
    const c = () => {
      m !== null && (u.value = m, m = null);
    }, h = (I, f, v) => {
      m === null && (m = [].concat(u.value)), m.push(new Hs(I, f, v)), ne(c);
    }, p = (I) => {
      m === null && (m = u.value), m = m.filter((f) => f.id !== I), ne(c);
    }, _ = b(() => u.value.sort((I, f) => I.order - f.order));
    W("table", {
      setSorting: d,
      setRowSelectionState: l,
      addColumn: h,
      removeColumn: p
    });
    const $ = R({
      orderedColumns: _,
      rows: n,
      allRowsSelected: o,
      anyRowsSelected: r,
      anySelectable: s,
      toggleAllSelection: i,
      setRowSelectionState: l,
      setSorting: d,
      clearSorting: g
    });
    return {
      toggleAllSelection: i,
      setSorting: d,
      clearSorting: g,
      slotProps: $,
      defaultRender: () => t.slots.default($)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Gs = {
  property: {
    type: String
  }
}, Xs = {
  formatter: {
    type: Function,
    default: null
  }
}, Zs = {
  sortable: {
    type: Boolean,
    default: !1
  }
}, Js = {
  data: {
    type: Object,
    default: null
  }
}, Qs = {
  order: {
    type: Number,
    default: 0
  }
}, ei = {
  component: {
    type: null,
    required: !0
  }
};
function ml(e, t = [], n = []) {
  const o = k();
  return {
    props: R({
      data: e,
      component: o,
      ...xt(o.props, t)
    }),
    listeners: Dt(o, n)
  };
}
const ti = /* @__PURE__ */ x({
  name: "hr-table-column",
  props: {
    ...Gs,
    ...Xs,
    ...Zs,
    ...Js,
    ...ei,
    ...Qs
  },
  setup(e) {
    const t = K("table"), n = Ee.random();
    return re(() => {
      t.addColumn(n, e.component, e.data);
    }), ae(() => {
      t.removeColumn(n);
    }), {};
  },
  render() {
    return null;
  }
}), ni = {
  columns: {
    type: Array,
    required: !0
  }
}, oi = {
  row: {
    type: Object,
    default: !1
  }
};
function hl() {
  return O(k());
}
const ri = /* @__PURE__ */ x({
  name: "hr-table-row",
  props: {
    ...E,
    ...A,
    ...ni,
    ...oi
  },
  emits: ["update:modelValue", "rowClick"],
  setup(e, t) {
    const o = R({
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
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), mt = "core-tables", si = {
  Table: Ys,
  TableColumn: ti,
  TableRow: ri
}, ii = {
  install: (e, t) => {
    L(e, mt) || (H(e, si), j(e, mt));
  }
}, li = {
  id: {
    type: String,
    required: !0
  }
}, ai = {
  disabled: {
    type: Boolean,
    default: !1
  }
};
function vl() {
  return O(k());
}
const ci = /* @__PURE__ */ x({
  name: "hr-tab-item",
  props: {
    ...E,
    ...A,
    ...li,
    ...ai
  },
  setup(e, t) {
    const n = K("coreTabsNavigator"), o = R({
      id: e.id
    });
    re(() => {
      n.addTabInstance(o);
    }), ae(() => {
      n.removeTabInstance(o);
    });
    const r = b(() => o === n.activeTab.value), s = () => {
      e.disabled || n.onTabClick(o);
    }, l = R({
      disabled: b(() => e.disabled),
      active: r,
      onClick: s
    });
    return {
      slotProps: l,
      defaultRender: () => t.slots.default(l)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ui = {
  modelValue: {
    type: String,
    default: null
  }
};
function gl() {
  return O(k());
}
const di = /* @__PURE__ */ x({
  name: "hr-tabs-navigator",
  props: {
    ...E,
    ...A,
    ...ui
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = S([]), o = b(() => n.value.find((d) => d.id === e.modelValue));
    W("coreTabsNavigator", {
      activeTab: o,
      addTabInstance: (d) => {
        n.value.push(d);
      },
      removeTabInstance: (d) => {
        n.value = U.remove(n.value, d);
      },
      onTabClick: (d) => {
        t.emit("update:modelValue", d.id);
      }
    });
    const i = R({
      tabs: n,
      activeTab: o
    });
    return {
      activeTab: o,
      slotProps: i,
      defaultRender: () => t.slots.default(i)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return T(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ht = "core-tabs", fi = {
  TabItem: ci,
  TabsNavigator: di
}, pi = {
  install: (e, t) => {
    L(e, ht) || (H(e, fi), j(e, ht));
  }
}, mi = {
  modelValue: {
    type: Boolean,
    default: !1
  }
}, hi = {
  trigger: {
    type: String,
    default: "hover"
  }
}, vi = {
  showDelay: {
    type: Number,
    default: 200
  }
}, gi = {
  hideDelay: {
    type: Number,
    default: 0
  }
};
function bl(e) {
  return O(k()).setProp("reference", e);
}
const bi = /* @__PURE__ */ x({
  name: "hr-tooltip",
  props: {
    ...mi,
    ...hi,
    ...vi,
    ...gi,
    reference: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = S(e.modelValue);
    M(() => e.modelValue, (c) => {
      n.value = c;
    });
    const o = (c) => {
      n.value = c, t.emit("update:modelValue", c);
    };
    let r = null, s = null;
    const l = () => {
      r && clearTimeout(r), s && clearTimeout(s), r = setTimeout(() => {
        o(!0);
      }, e.showDelay);
    }, i = () => {
      r && clearTimeout(r), s && clearTimeout(s), s = setTimeout(() => {
        o(!1);
      }, e.hideDelay);
    }, a = (c, h, p) => {
      c.addEventListener(h, l), c.addEventListener(p, i);
    }, d = (c, h, p) => {
      c.removeEventListener(h, l), c.removeEventListener(p, i), o(!1), r && clearTimeout(r), s && clearTimeout(s);
    }, g = (c) => {
      if (c === "hover")
        return {
          show: "mouseenter",
          hide: "mouseleave"
        };
    };
    M(() => e.reference, (c, h) => {
      const p = g(e.trigger);
      h && p && d(h, p.show, p.hide), c && p && a(c, p.show, p.hide);
    }), M(() => e.trigger, (c, h) => {
      if (h) {
        const p = g(h);
        p && e.reference && d(e.reference, p.show, p.hide);
      }
      if (c) {
        const p = g(c);
        p && e.reference && a(e.reference, p.show, p.hide);
      }
    });
    const u = R({
      visible: b(() => n.value)
    });
    return {
      slotProps: u,
      defaultRender: () => t.slots.default(u)
    };
  },
  render() {
    return this.defaultRender();
  }
}), vt = "core-tooltips", yi = {
  Tooltip: bi
}, wi = {
  install: (e, t) => {
    L(e, vt) || (H(e, yi), j(e, vt));
  }
}, Pi = {
  modelValue: {
    type: null,
    required: !0
  }
}, yl = {
  valueFormat: {
    type: String,
    default: null
  }
}, _i = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ii = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Ri = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Ci = {
  clearable: {
    type: Boolean,
    default: !1
  }
}, Si = {
  disabledDate: {
    type: Function,
    default: null
  }
}, ki = {
  firstDayOfWeek: {
    type: Number,
    default: 0
  }
};
function wl() {
  return O(k());
}
const $i = /* @__PURE__ */ x({
  name: "hr-date-picker",
  props: {
    ...E,
    ...A,
    ...Pi,
    ...Ii,
    ..._i,
    ...Ri,
    ...Ci,
    ...Si,
    ...ki
  },
  emits: ["click"],
  setup(e, t) {
    const n = R({
      disabled: b(() => e.disabled)
    }), o = () => t.slots.default(n);
    return () => {
      if (e.as) {
        const r = e.asProps ? e.asProps(n) : {};
        return T(e.as, {
          ...r
        }, o());
      }
      return o();
    };
  }
}), gt = "core-date-pickers", xi = {
  DatePicker: $i
}, Pl = {
  install: (e, t) => {
    L(e, gt) || (H(e, xi), j(e, gt));
  }
};
function Di(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Oi(e) {
  return typeof e != "number" ? Di(e) : { top: e, right: e, bottom: e, left: e };
}
function Vi(e) {
  return e.split("-")[0];
}
function Ti(e) {
  return e.split("-")[1];
}
function Ei(e) {
  return e === "y" ? "height" : "width";
}
function Ai(e) {
  return ["top", "bottom"].includes(Vi(e)) ? "x" : "y";
}
function Bi(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
const _l = (e) => ({
  name: "arrowReference",
  options: e,
  async fn(t) {
    var F;
    const { element: n, padding: o = 0 } = e ?? {}, { x: r, y: s, placement: l, rects: i, platform: a } = t;
    if (n == null)
      return console.warn(
        "Floating UI: No `element` was passed to the `arrow` middleware."
      ), {};
    const d = Oi(o), g = { x: r, y: s }, u = Ai(l), m = Ti(l), c = Ei(u), h = await a.getDimensions(n), p = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right";
    let $ = i.reference;
    e.reference && ($ = (await a.getClientRects(e.reference))[0]);
    const z = $[c] + $[u] - g[u] - i.floating[c], I = g[u] - $[u], f = await ((F = a.getOffsetParent) == null ? void 0 : F.call(a, n));
    let v = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0;
    v === 0 && (v = i.floating[c]);
    const w = z / 2 - I / 2, D = d[p], B = v - h[c] - d[_], N = v / 2 - h[c] / 2 + w, y = Bi(D, N, B), V = (m === "start" ? d[p] : d[_]) > 0 && N !== y && $[c] <= i.floating[c] ? N < D ? D - N : B - N : 0;
    return {
      [u]: g[u] - V,
      data: {
        [u]: y,
        centerOffset: N - y
      }
    };
  }
}), Mi = {
  CommonInstall: $t,
  ButtonsInstall: Nn,
  CheckboxesInstall: Xn,
  CollapsesInstall: so,
  DialogsInstall: Vo,
  DropdownsInstall: No,
  FloatingInstall: fr,
  FragmentsInstall: vr,
  InputsInstall: xr,
  NotificationsInstall: zr,
  PaginatorsInstall: qr,
  ProgressBarsInstall: Zr,
  RadioButtonsInstall: os,
  ScrollContainersInstall: ms,
  SelectsInstall: ks,
  SlidersInstall: As,
  StepsInstall: js,
  TablesInstall: ii,
  TabsInstall: pi,
  TooltipsInstall: wi
}, Il = {
  install: (e, t) => {
    Object.values(Mi).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  U as ArrayHelper,
  Nn as CoreButtonsInstall,
  Xn as CoreCheckboxInstall,
  so as CoreCollapsesInstall,
  Pl as CoreDatePickersInstall,
  Vo as CoreDialogsInstall,
  No as CoreDropdownsInstall,
  fr as CoreFloatingInstall,
  vr as CoreFragmentsInstall,
  xr as CoreInputsInstall,
  zr as CoreNotificationsInstall,
  qr as CorePaginatorsInstall,
  Zr as CoreProgressBarsInstall,
  os as CoreRadioButtonsInstall,
  ms as CoreScrollContainersInstall,
  ks as CoreSelectsInstall,
  As as CoreSlidersInstall,
  js as CoreStepsInstall,
  Hs as CoreTableColumn,
  Ns as CoreTableRow,
  ii as CoreTablesInstall,
  pi as CoreTabsInstall,
  wi as CoreTooltipsInstall,
  Ui as DialogManager,
  ji as ModuleHelper,
  nl as NotificationManager,
  Te as ObjectHelper,
  Ee as StringHelper,
  Cr as coreAutocompleteDisabledProp,
  Sr as coreAutocompleteItemsProp,
  Rr as coreAutocompleteModelModifiersProp,
  Ir as coreAutocompleteModelValueProp,
  el as coreAutocompleteSetup,
  jn as coreButton,
  Mn as coreButtonDisabledProp,
  Ln as coreButtonLoadingProp,
  Hi as coreButtonSetup,
  zn as coreButtonVisibleProp,
  qn as coreCheckboxDisabledProp,
  Kn as coreCheckboxIndeterminateProp,
  Wn as coreCheckboxModelValueProp,
  Ni as coreCheckboxSetup,
  Fn as coreCheckboxValueProp,
  Un as coreCheckboxVisibleProp,
  Zn as coreCollapseAccordionProp,
  qi as coreCollapseInlineSetup,
  eo as coreCollapseItemIdProp,
  Fi as coreCollapseItemSetup,
  Jn as coreCollapseModelValueProp,
  Wi as coreCollapseSetup,
  E as coreComponentAsProp,
  Ci as coreDatePickerClearableProp,
  Si as coreDatePickerDisabledDateProp,
  _i as coreDatePickerDisabledProp,
  ki as coreDatePickerFirstDayOfWeekProp,
  Pi as coreDatePickerModelValueProp,
  Ri as coreDatePickerMultipleProp,
  wl as coreDatePickerSetup,
  yl as coreDatePickerValueFormatProp,
  Ii as coreDatePickerVisibleProp,
  Ki as coreDialogSetup,
  xo as coreDialogVisibleProp,
  So as coreDialogWrapper,
  Bo as coreDropdownDisabledProp,
  Mo as coreDropdownHideOnClickProp,
  To as coreDropdownItemDisabledProp,
  Eo as coreDropdownItemLabelProp,
  Yi as coreDropdownItemSetup,
  Gi as coreDropdownSetup,
  zo as coreDropdownSplitButtonProp,
  Lo as coreDropdownVisibleProp,
  _l as coreFloatingArrowReference,
  ir as coreFloatingKeepProp,
  cr as coreFloatingMiddlewareProp,
  ar as coreFloatingPlacementProp,
  rr as coreFloatingReferenceProp,
  Xi as coreFloatingSetup,
  lr as coreFloatingTransitionProp,
  sr as coreFloatingVisibleProp,
  pr as coreFragmentContainerActiveProp,
  Ji as coreFragmentContainerSetup,
  no as coreInlineCollapseModelValueProp,
  yr as coreInputDisabledProp,
  br as coreInputModelModifiersProp,
  gr as coreInputModelValueProp,
  wr as coreInputReadonlyProp,
  Qi as coreInputSetup,
  Pr as coreInputTypeProp,
  ol as coreNotificationSetup,
  Ar as coreNotificationVisibleProp,
  Dr as coreNotificationWrapperNameProp,
  tl as coreNotificationWrapperSetup,
  Hr as corePaginatorCountProp,
  Nr as corePaginatorDeltaProp,
  Lr as corePaginatorModelValueProp,
  jr as corePaginatorPageSizeProp,
  rl as corePaginatorSetup,
  Yr as coreProgressBarMaximumProp,
  Kr as coreProgressBarMinimumProp,
  sl as coreProgressBarSetup,
  Ur as coreProgressBarValueProp,
  Jr as coreRadioButtonDisabledProp,
  Qr as coreRadioButtonModelValueProp,
  il as coreRadioButtonSetup,
  es as coreRadioButtonValueProp,
  ls as coreScrollContainerAutoHideDelayProp,
  is as coreScrollContainerAutoHideProp,
  cs as coreScrollContainerContainerClassesProp,
  rs as coreScrollContainerHorizontalProp,
  as as coreScrollContainerMinimumSizeProp,
  ll as coreScrollContainerSetup,
  ss as coreScrollContainerVerticalProp,
  us as coreScrollContainerWrapperClassesProp,
  bs as coreSelectAllowClearProp,
  ws as coreSelectCompareProp,
  vs as coreSelectDisabledProp,
  ys as coreSelectHideOnSelectProp,
  Is as coreSelectItemDisabledProp,
  Rs as coreSelectItemLabelProp,
  cl as coreSelectItemSetup,
  _s as coreSelectItemValueProp,
  hs as coreSelectModelValueProp,
  gs as coreSelectMultipleProp,
  al as coreSelectSetup,
  xs as coreSliderDisabledProp,
  Os as coreSliderMaximumProp,
  Ds as coreSliderMinimumProp,
  $s as coreSliderModelValueProp,
  ul as coreSliderSetup,
  Vs as coreSliderStepSizeProp,
  Bs as coreStepsNavigatorModelValueProp,
  fl as coreStepsNavigatorSetup,
  Ms as coreStepsNavigatorStepsProp,
  ai as coreTabItemIdDisabledProp,
  li as coreTabItemIdProp,
  vl as coreTabItemSetup,
  ei as coreTableColumnComponentProp,
  Js as coreTableColumnDataProp,
  Xs as coreTableColumnFormatterProp,
  Qs as coreTableColumnOrderProp,
  Gs as coreTableColumnPropertyProp,
  ml as coreTableColumnSetup,
  Zs as coreTableColumnSortableProp,
  Ws as coreTableDataProp,
  ni as coreTableRowColumnsProp,
  Fs as coreTableRowKeyProp,
  oi as coreTableRowRowProp,
  hl as coreTableRowSetup,
  qs as coreTableSelectableProp,
  Us as coreTableSelectedRowsProp,
  pl as coreTableSetup,
  Ks as coreTableSortProp,
  ui as coreTabsNavigatorModelValueProp,
  gl as coreTabsNavigatorSetup,
  gi as coreTooltipHideDelayProp,
  mi as coreTooltipModelValueProp,
  bl as coreTooltipSetup,
  vi as coreTooltipShowDelayProp,
  hi as coreTooltipTriggerProp,
  dl as createCoreStepItem,
  Il as default,
  Zi as splitPlacement
};
