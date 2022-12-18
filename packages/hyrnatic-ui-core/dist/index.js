var jt = Object.defineProperty;
var Ht = (e, t, n) => t in e ? jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var q = (e, t, n) => (Ht(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as h, reactive as I, defineComponent as D, h as $, getCurrentInstance as k, provide as H, inject as Y, ref as V, watch as F, Teleport as ut, shallowRef as dt, onMounted as ue, onUnmounted as de, nextTick as oe, createVNode as ne, Transition as Ft, isVNode as Wt, withDirectives as pe, mergeProps as Ie, vShow as qt, resolveDirective as me, onBeforeUnmount as Ut } from "vue";
function M(e, t) {
  return e.__hyrnatic_ui_installed && e.__hyrnatic_ui_installed.indexOf(t) !== -1;
}
function N(e, t) {
  e.__hyrnatic_ui_installed || (e.__hyrnatic_ui_installed = []), e.__hyrnatic_ui_installed.push(t);
}
function z(e, t) {
  Object.keys(t).forEach((n) => {
    e.component(t[n].name, t[n]);
  });
}
function Kt(e, t, n) {
  e.component(t, n);
}
function ft(e, t) {
  Object.keys(t).forEach((n) => {
    e.directive(t[n].name, t[n]);
  });
}
function pt(e, t, n) {
  Object.values(n).forEach((o) => {
    o.install(e, t);
  });
}
const pi = {
  installComponents: z,
  installComponentAlias: Kt,
  installDependencies: pt,
  installDirectives: ft,
  isModuleInstalled: M,
  markModuleAsInstalled: N
}, Yt = {
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
}, Gt = {
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
var mt = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(s, r) {
      return s[0] === n ? (o = r, !0) : !1;
    }), o;
  }
  return function() {
    function t() {
      this.__entries__ = [];
    }
    return Object.defineProperty(t.prototype, "size", {
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
  }();
}(), Re = typeof window < "u" && typeof document < "u" && window.document === document, he = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Xt = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(he) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Zt = 2;
function Jt(e, t) {
  var n = !1, o = !1, s = 0;
  function r() {
    n && (n = !1, e()), o && l();
  }
  function i() {
    Xt(r);
  }
  function l() {
    var a = Date.now();
    if (n) {
      if (a - s < Zt)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(i, t);
    s = a;
  }
  return l;
}
var Qt = 20, en = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], tn = typeof MutationObserver < "u", nn = function() {
  function e() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Jt(this.refresh.bind(this), Qt);
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
    !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), tn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, e.prototype.disconnect_ = function() {
    !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, e.prototype.onTransitionEnd_ = function(t) {
    var n = t.propertyName, o = n === void 0 ? "" : n, s = en.some(function(r) {
      return !!~o.indexOf(r);
    });
    s && this.refresh();
  }, e.getInstance = function() {
    return this.instance_ || (this.instance_ = new e()), this.instance_;
  }, e.instance_ = null, e;
}(), ht = function(e, t) {
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
}, se = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || he;
}, vt = we(0, 0, 0, 0);
function ve(e) {
  return parseFloat(e) || 0;
}
function Oe(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, s) {
    var r = e["border-" + s + "-width"];
    return o + ve(r);
  }, 0);
}
function on(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, s = t; o < s.length; o++) {
    var r = s[o], i = e["padding-" + r];
    n[r] = ve(i);
  }
  return n;
}
function sn(e) {
  var t = e.getBBox();
  return we(0, 0, t.width, t.height);
}
function rn(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return vt;
  var o = se(e).getComputedStyle(e), s = on(o), r = s.left + s.right, i = s.top + s.bottom, l = ve(o.width), a = ve(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + r) !== t && (l -= Oe(o, "left", "right") + r), Math.round(a + i) !== n && (a -= Oe(o, "top", "bottom") + i)), !an(e)) {
    var u = Math.round(l + r) - t, b = Math.round(a + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(b) !== 1 && (a -= b);
  }
  return we(s.left, s.top, l, a);
}
var ln = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof se(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof se(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function an(e) {
  return e === se(e).document.documentElement;
}
function cn(e) {
  return Re ? ln(e) ? sn(e) : rn(e) : vt;
}
function un(e) {
  var t = e.x, n = e.y, o = e.width, s = e.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(r.prototype);
  return ht(i, {
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
function we(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var dn = function() {
  function e(t) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = we(0, 0, 0, 0), this.target = t;
  }
  return e.prototype.isActive = function() {
    var t = cn(this.target);
    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }, e.prototype.broadcastRect = function() {
    var t = this.contentRect_;
    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
  }, e;
}(), fn = function() {
  function e(t, n) {
    var o = un(n);
    ht(this, { target: t, contentRect: o });
  }
  return e;
}(), pn = function() {
  function e(t, n, o) {
    if (this.activeObservations_ = [], this.observations_ = new mt(), typeof t != "function")
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
  }
  return e.prototype.observe = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof se(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(t) || (n.set(t, new dn(t)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e.prototype.unobserve = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof se(t).Element))
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
        return new fn(o.target, o.broadcastRect());
      });
      this.callback_.call(t, n, t), this.clearActive();
    }
  }, e.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e;
}(), gt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new mt(), bt = function() {
  function e(t) {
    if (!(this instanceof e))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var n = nn.getInstance(), o = new pn(t, n, this);
    gt.set(this, o);
  }
  return e;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  bt.prototype[e] = function() {
    var t;
    return (t = gt.get(this))[e].apply(t, arguments);
  };
});
var mn = function() {
  return typeof he.ResizeObserver < "u" ? he.ResizeObserver : bt;
}();
let hn = 1;
const Se = {}, Ee = new mn((e) => {
  e.forEach((t) => {
    const n = t.target;
    n.__resize_callback_id__ && Se[n.__resize_callback_id__]();
  });
}), vn = {
  name: "resize",
  mounted(e, { value: t, arg: n, modifiers: o }) {
    if (!t || typeof t != "function") {
      console.warn("v-resize should received a function as value");
      return;
    }
    Ee.observe(e), e.__resize_callback_id__ = hn++, Se[e.__resize_callback_id__] = t;
  },
  beforeUnmount(e) {
    Ee.unobserve(e), e.__resize_callback_id__ && (delete Se[e.__resize_callback_id__], delete e.__resize_callback_id__);
  }
}, Ae = "core-common", gn = {
  ClickOutside: Yt,
  DocumentEvent: Gt,
  Resize: vn
}, yt = {
  install: (e, t) => {
    M(e, Ae) || (ft(e, gn), N(e, Ae));
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
function bn() {
  return {};
}
function wt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = h(() => e[o]);
  }), n;
}
function Pt(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = (...s) => e.emit(o, ...s);
  }), n;
}
function T(e) {
  const t = I({}), n = {}, o = {
    as(s, r = bn) {
      return t.as = s, t.asProps = r, o;
    },
    props(s) {
      return s.forEach((r) => {
        this.setProp(r, h(() => e.props[r]));
      }), o;
    },
    setProp(s, r) {
      return t[s] = r, o;
    },
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
const yn = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, wn = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Pn = {
  loading: {
    type: Boolean,
    default: !1
  }
};
function mi() {
  return T(k());
}
const _n = /* @__PURE__ */ D({
  name: "hr-button",
  props: {
    ...E,
    ...A,
    ...wn,
    ...yn,
    ...Pn
  },
  emits: ["click"],
  setup(e, t) {
    const n = (r) => {
      !e.disabled && !e.loading && e.visible && t.emit("click", r);
    }, o = I({
      disabled: h(() => e.disabled),
      loading: h(() => e.loading),
      onClick: n
    }), s = () => t.slots.default(o);
    return () => {
      if (e.as) {
        const r = e.asProps ? e.asProps(o) : {};
        return $(e.as, {
          ...r
        }, s());
      }
      return s();
    };
  }
}), Be = "core-buttons", Cn = {
  Button: _n
}, In = {
  install: (e, t) => {
    M(e, Be) || (z(e, Cn), N(e, Be));
  }
}, Rn = {
  modelValue: {
    type: [Array, Boolean, String],
    required: !0
  }
}, Sn = {
  value: {
    type: null,
    default: !0
  }
}, kn = {
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
}, xn = {
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
}, Dn = {
  indeterminate: {
    type: Boolean,
    default: !1
  }
};
function hi() {
  return T(k());
}
const Vn = /* @__PURE__ */ D({
  name: "hr-checkbox",
  props: {
    ...E,
    ...A,
    ...kn,
    ...xn,
    ...Dn,
    ...Rn,
    ...Sn
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
    }, i = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Me = "core-checkboxes", Tn = {
  Checkbox: Vn
}, $n = {
  install: (e, t) => {
    M(e, Me) || (z(e, Tn), N(e, Me));
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
}, On = {
  accordion: {
    type: Boolean,
    default: !1
  }
}, En = {
  modelValue: {
    type: [Array, String, Number],
    required: !0
  }
};
function vi() {
  return T(k());
}
const An = /* @__PURE__ */ D({
  name: "hr-collapse",
  props: {
    ...E,
    ...A,
    ...On,
    ...En
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => [].concat(e.modelValue));
    H("collapse", {
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
    const s = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Bn = {
  id: {
    type: String,
    required: !0
  }
};
function gi() {
  return T(k());
}
const Mn = /* @__PURE__ */ D({
  name: "hr-collapse-item",
  props: {
    ...E,
    ...A,
    ...Bn
  },
  setup(e, t) {
    const n = Y("collapse"), o = h(() => n.expandedItems.value.indexOf(e.id) !== -1), r = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Nn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
function bi() {
  return T(k());
}
const zn = /* @__PURE__ */ D({
  name: "hr-inline-collapse",
  props: {
    ...E,
    ...A,
    ...Nn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = V(e.modelValue);
    F(() => e.modelValue, (i) => {
      n.value = i;
    });
    const o = () => {
      n.value = !n.value, t.emit("update:modelValue", !e.modelValue);
    }, s = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ne = "core-collapses", Ln = {
  Collapse: An,
  CollapseItem: Mn,
  InlineCollapse: zn
}, jn = {
  install: (e, t) => {
    M(e, Ne) || (z(e, Ln), N(e, Ne));
  }
}, xe = {
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
}, le = {}, Hn = /* @__PURE__ */ D({
  name: "hr-dialog-wrapper",
  props: {
    teleport: {
      type: String,
      default: "body"
    },
    name: {
      type: String,
      default: "default"
    }
  },
  setup(e, t) {
    H("wrapper-name", e.name);
    const n = I({}), o = I({}), s = h(() => {
      const w = [];
      return Object.keys(o).forEach((v) => {
        w[v] = o[v].length;
      }), w;
    }), r = h(() => {
      const w = [];
      return Object.keys(o).forEach((v) => {
        w[v] = o[v].filter((f) => f.visible).length;
      }), w;
    }), i = (w) => w.charAt(0).toUpperCase() + w.slice(1), l = (w) => w.split("-").map((P) => i(P)).join(""), a = (w) => {
      const v = {};
      return Object.keys(w).forEach((f) => {
        v[`on${l(f)}`] = w[f];
      }), v;
    }, u = (w) => {
      const v = n[w];
      v.visible = !1;
    }, b = (w) => {
      const v = n[w];
      delete n[w], o[v.stack] = o[v.stack].filter((f) => f.id !== w);
    }, R = {
      addDialog: (w) => {
        const v = w;
        return v.resolve = (f = null) => {
          v.promise.resolve(f), u(v.id);
        }, v.reject = (f = null) => {
          v.promise.reject(f), u(v.id);
        }, v.transitionEnd = () => {
          b(v.id);
        }, v.visible = !0, v.id = xe.random(), v.compiledListeners = h(() => v.listeners ? a(v.listeners) : {}), o[v.stack] || (o[v.stack] = []), o[v.stack].push(v), n[v.id] = v, v;
      },
      getDialog: (w) => n[w],
      destroyDialog: (w) => {
        u(w);
      },
      getStackCount: (w) => h(() => s.value[w]),
      getStackVisibleCount: (w) => h(() => r.value[w]),
      getStackIndex: (w, v) => h(() => o[w].findIndex((f) => f.id === v))
    };
    return le[e.name] = R, {
      ...R,
      IDialogs: n
    };
  },
  render() {
    return $(ut, {
      to: this.$props.teleport
    }, Object.values(this.IDialogs).map((e) => $(e.component, {
      key: e.id,
      visible: e.visible,
      ...e.props,
      ...e.compiledListeners
    })));
  }
});
function _t(e, t = null, n = null, o) {
  const s = o && o.wrapper ? o.wrapper : "default", r = o && o.stack ? o.stack : "default";
  let i = null;
  return {
    promise: new Promise((a, u) => {
      i = le[s].addDialog({
        component: dt(e),
        listeners: n !== null ? I(n) : null,
        props: t !== null ? I(t) : null,
        stack: r,
        promise: { resolve: a, reject: u }
      });
    }),
    destroy: () => le[s].destroyDialog(i.id)
  };
}
function Fn(e, t = null, n = null, o) {
  return _t(e, t, n, o).promise;
}
function Ct(e = "default") {
  return le[e];
}
function It(e) {
  const t = Y("wrapper-name");
  return le[t].getDialog(e);
}
function Wn() {
  const e = k(), t = It(e.vnode.key);
  return H("dialog-id", e.vnode.key), H("dialog-resolve", t.resolve), H("dialog-reject", t.reject), H("dialog-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _t,
  createPromise: Fn,
  getWrapper: Ct,
  getDialog: It,
  setupDialog: Wn
}, Symbol.toStringTag, { value: "Module" })), qn = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function wi(e = [], t = []) {
  const n = k();
  return {
    props: I({
      ...wt(n.props, e)
    }),
    listeners: Pt(n, t)
  };
}
const Un = /* @__PURE__ */ D({
  name: "hr-dialog",
  props: {
    ...qn
  },
  setup(e, t) {
    const n = Y("dialog-id");
    n || console.warn("You must call DialogManager.setupDialog() in the dialog setup");
    const o = Y("dialog-reject"), s = () => {
      o(null);
    }, r = Ct(), i = r.getDialog(n), l = I({
      visible: h(() => e.visible),
      stackIndex: r.getStackIndex(i.stack, i.id),
      stackCount: r.getStackCount(i.stack),
      visibleStackCount: r.getStackVisibleCount(i.stack),
      close: s
    });
    return () => t.slots.default(l);
  }
}), ze = "core-dialogs", Kn = {
  Dialog: Un,
  DialogWrapper: Hn
}, Yn = {
  install: (e, t) => {
    M(e, ze) || (z(e, Kn), N(e, ze));
  }
}, Gn = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Xn = {
  label: {
    type: String,
    default: null
  }
};
function Pi() {
  return T(k());
}
const Zn = /* @__PURE__ */ D({
  name: "hr-dropdown-item",
  props: {
    ...E,
    ...A,
    ...Gn,
    ...Xn
  },
  emits: ["click"],
  setup(e, t) {
    const n = Y("dropdown"), o = (a) => {
      e.disabled || (t.emit("click", a), n.onItemClick(a));
    }, s = I({
      disabled: e.disabled,
      label: e.label,
      onClick: o,
      component: k()
    });
    ue(() => {
      n.addItemInstance(s);
    }), de(() => {
      n.removeItemInstance(s);
    });
    const r = h(() => n.focusedItem.value === s), i = I({
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
        return $(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), Jn = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Qn = {
  hideOnClick: {
    type: Boolean,
    default: !0
  }
}, eo = {
  splitButton: {
    type: Boolean,
    default: !1
  }
}, to = {
  visible: {
    type: Boolean,
    default: !0
  }
};
function _i() {
  return T(k());
}
const no = /* @__PURE__ */ D({
  name: "hr-dropdown",
  props: {
    ...E,
    ...A,
    ...Jn,
    ...Qn,
    ...eo,
    ...to
  },
  emits: ["click", "focusedItemChanged"],
  setup(e, t) {
    const n = V(!1), o = V(!1), s = V([]), r = V(), i = h(() => s.value.filter((f) => f.disabled === !1)), l = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const a = h(() => e.disabled || !e.visible), u = (f) => {
      s.value.push(f);
    }, b = (f) => {
      s.value = U.remove(s.value, f);
    }, m = () => {
      n.value = !1;
    };
    F(() => e.visible, (f) => {
      f === !1 && m();
    });
    const d = () => {
      e.hideOnClick && m();
    }, c = (f, P) => {
      if (a.value)
        return !1;
      const x = () => r.value ? i.value.findIndex((B) => B === r.value) : null;
      !n.value && (f.key === "ArrowDown" || f.key === "ArrowUp" || f.key === "Enter") ? (f.key === "Enter" ? P === "main" ? t.emit("click", f) : P === "split" && (n.value = !n.value) : n.value = !n.value, f.preventDefault(), f.stopImmediatePropagation()) : f.key === "ArrowDown" ? (r.value = U.next(i.value, x()), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "ArrowUp" ? (r.value = U.prev(i.value, x()), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "Enter" && r.value ? (r.value.onClick(f), f.preventDefault(), f.stopImmediatePropagation()) : f.key === "Tab" ? m() : f.key === "Escape" && (m(), f.preventDefault(), f.stopImmediatePropagation());
    }, g = (f) => {
      if (a.value)
        return !1;
      e.splitButton ? t.emit("click", f) : n.value = !n.value;
    }, p = () => {
      if (a.value)
        return !1;
      n.value = !n.value;
    }, y = (f) => {
      o.value = f;
    }, R = h(() => n.value || o.value);
    H("dropdown", {
      focusedItem: r,
      onItemClick: d,
      addItemInstance: u,
      removeItemInstance: b,
      menuVisible: h(() => n.value),
      itemsVisible: R
    });
    const w = I({
      menuVisible: h(() => n.value),
      disabled: h(() => e.disabled),
      splitButton: h(() => e.splitButton),
      focusedItem: h(() => r.value),
      clearFocusedItem: l,
      onKeyEvents: c,
      onButtonClick: g,
      onIconClick: p,
      onItemClick: d,
      onMenuTransitioning: y
    });
    return {
      close: m,
      slotProps: w,
      defaultRender: () => t.slots.default(w)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Le = "core-dropdowns", oo = {
  Dropdown: no,
  DropdownItem: Zn
}, so = {
  install: (e, t) => {
    M(e, Le) || (z(e, oo), N(e, Le));
  }
};
function fe(e) {
  return e.split("-")[0];
}
function Rt(e) {
  return e.split("-")[1];
}
function Pe(e) {
  return ["top", "bottom"].includes(fe(e)) ? "x" : "y";
}
function St(e) {
  return e === "y" ? "height" : "width";
}
function je(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const r = o.x + o.width / 2 - s.width / 2, i = o.y + o.height / 2 - s.height / 2, l = Pe(t), a = St(l), u = o[a] / 2 - s[a] / 2, b = fe(t), m = l === "x";
  let d;
  switch (b) {
    case "top":
      d = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      d = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: i
      };
      break;
    case "left":
      d = {
        x: o.x - s.width,
        y: i
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (Rt(t)) {
    case "start":
      d[l] -= u * (n && m ? -1 : 1);
      break;
    case "end":
      d[l] += u * (n && m ? -1 : 1);
      break;
  }
  return d;
}
const ro = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: i
  } = n, l = r.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  if (process.env.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((p) => {
      let {
        name: y
      } = p;
      return y === "autoPlacement" || y === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!e || !t) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: b,
    y: m
  } = je(u, o, a), d = o, c = {}, g = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: y,
      fn: R
    } = l[p], {
      x: w,
      y: v,
      data: f,
      reset: P
    } = await R({
      x: b,
      y: m,
      initialPlacement: o,
      placement: d,
      strategy: s,
      middlewareData: c,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (b = w ?? b, m = v ?? m, c = {
      ...c,
      [y]: {
        ...c[y],
        ...f
      }
    }, process.env.NODE_ENV !== "production" && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), P && g <= 50) {
      g++, typeof P == "object" && (P.placement && (d = P.placement), P.rects && (u = P.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : P.rects), {
        x: b,
        y: m
      } = je(u, d, a)), p = -1;
      continue;
    }
  }
  return {
    x: b,
    y: m,
    placement: d,
    strategy: s,
    middlewareData: c
  };
};
function io(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lo(e) {
  return typeof e != "number" ? io(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ge(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function kt(e, t) {
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
    elementContext: m = "floating",
    altBoundary: d = !1,
    padding: c = 0
  } = t, g = lo(c), y = l[d ? m === "floating" ? "reference" : "floating" : m], R = ge(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: b,
    strategy: a
  })), w = ge(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: m === "floating" ? {
      ...i.floating,
      x: o,
      y: s
    } : i.reference,
    offsetParent: await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)),
    strategy: a
  }) : i[m]);
  return {
    top: R.top - w.top + g.top,
    bottom: w.bottom - R.bottom + g.bottom,
    left: R.left - w.left + g.left,
    right: w.right - R.right + g.right
  };
}
const ao = Math.min, co = Math.max;
function He(e, t, n) {
  return co(e, ao(t, n));
}
const uo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function be(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uo[t]);
}
function fo(e, t, n) {
  n === void 0 && (n = !1);
  const o = Rt(e), s = Pe(e), r = St(s);
  let i = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = be(i)), {
    main: i,
    cross: be(i)
  };
}
const po = {
  start: "end",
  end: "start"
};
function Fe(e) {
  return e.replace(/start|end/g, (t) => po[t]);
}
function mo(e) {
  const t = be(e);
  return [Fe(e), t, Fe(t)];
}
const xt = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: i,
        platform: l,
        elements: a
      } = t, {
        mainAxis: u = !0,
        crossAxis: b = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        flipAlignment: c = !0,
        ...g
      } = e, p = fe(o), R = m || (p === i || !c ? [be(i)] : mo(i)), w = [i, ...R], v = await kt(t, g), f = [];
      let P = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && f.push(v[p]), b) {
        const {
          main: j,
          cross: C
        } = fo(o, r, await (l.isRTL == null ? void 0 : l.isRTL(a.floating)));
        f.push(v[j], v[C]);
      }
      if (P = [...P, {
        placement: o,
        overflows: f
      }], !f.every((j) => j <= 0)) {
        var x, B;
        const j = ((x = (B = s.flip) == null ? void 0 : B.index) != null ? x : 0) + 1, C = w[j];
        if (C)
          return {
            data: {
              index: j,
              overflows: P
            },
            reset: {
              placement: C
            }
          };
        let _ = "bottom";
        switch (d) {
          case "bestFit": {
            var W;
            const S = (W = P.map((O) => [O, O.overflows.filter((L) => L > 0).reduce((L, K) => L + K, 0)]).sort((O, L) => O[1] - L[1])[0]) == null ? void 0 : W[0].placement;
            S && (_ = S);
            break;
          }
          case "initialPlacement":
            _ = i;
            break;
        }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
function Dt(e) {
  return e === "x" ? "y" : "x";
}
const Vt = function(e) {
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
          fn: (y) => {
            let {
              x: R,
              y: w
            } = y;
            return {
              x: R,
              y: w
            };
          }
        },
        ...a
      } = e, u = {
        x: n,
        y: o
      }, b = await kt(t, a), m = Pe(fe(s)), d = Dt(m);
      let c = u[m], g = u[d];
      if (r) {
        const y = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", w = c + b[y], v = c - b[R];
        c = He(w, c, v);
      }
      if (i) {
        const y = d === "y" ? "top" : "left", R = d === "y" ? "bottom" : "right", w = g + b[y], v = g - b[R];
        g = He(w, g, v);
      }
      const p = l.fn({
        ...t,
        [m]: c,
        [d]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, ho = function(e) {
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
      } = e, b = {
        x: n,
        y: o
      }, m = Pe(s), d = Dt(m);
      let c = b[m], g = b[d];
      const p = typeof l == "function" ? l(t) : l, y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (a) {
        const P = m === "y" ? "height" : "width", x = r.reference[m] - r.floating[P] + y.mainAxis, B = r.reference[m] + r.reference[P] - y.mainAxis;
        c < x ? c = x : c > B && (c = B);
      }
      if (u) {
        var R, w, v, f;
        const P = m === "y" ? "width" : "height", x = ["top", "left"].includes(fe(s)), B = r.reference[d] - r.floating[P] + (x && (R = (w = i.offset) == null ? void 0 : w[d]) != null ? R : 0) + (x ? 0 : y.crossAxis), W = r.reference[d] + r.reference[P] + (x ? 0 : (v = (f = i.offset) == null ? void 0 : f[d]) != null ? v : 0) - (x ? y.crossAxis : 0);
        g < B ? g = B : g > W && (g = W);
      }
      return {
        [m]: c,
        [d]: g
      };
    }
  };
};
function Tt(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Q(e) {
  if (e == null)
    return window;
  if (!Tt(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function X(e) {
  return Q(e).getComputedStyle(e);
}
function ee(e) {
  return Tt(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function $t() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Z(e) {
  return e instanceof Q(e).HTMLElement;
}
function G(e) {
  return e instanceof Q(e).Element;
}
function vo(e) {
  return e instanceof Q(e).Node;
}
function We(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _e(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = X(e);
  return /auto|scroll|overlay|hidden/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function go(e) {
  return ["table", "td", "th"].includes(ee(e));
}
function De(e) {
  const t = /firefox/i.test($t()), n = X(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some(
    (s) => {
      const r = n.contain;
      return r != null ? r.includes(s) : !1;
    }
  );
}
function Ot() {
  return !/^((?!chrome|android).)*safari/i.test($t());
}
function Ve(e) {
  return ["html", "body", "#document"].includes(ee(e));
}
const qe = Math.min, re = Math.max, ye = Math.round;
function J(e, t, n) {
  var o, s, r, i;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect();
  let a = 1, u = 1;
  t && Z(e) && (a = e.offsetWidth > 0 && ye(l.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && ye(l.height) / e.offsetHeight || 1);
  const b = G(e) ? Q(e) : window, m = !Ot() && n, d = (l.left + (m && (o = (s = b.visualViewport) == null ? void 0 : s.offsetLeft) != null ? o : 0)) / a, c = (l.top + (m && (r = (i = b.visualViewport) == null ? void 0 : i.offsetTop) != null ? r : 0)) / u, g = l.width / a, p = l.height / u;
  return {
    width: g,
    height: p,
    top: c,
    right: d + g,
    bottom: c + p,
    left: d,
    x: d,
    y: c
  };
}
function te(e) {
  return ((vo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ce(e) {
  return G(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Et(e) {
  return J(te(e)).left + Ce(e).scrollLeft;
}
function bo(e) {
  const t = J(e);
  return ye(t.width) !== e.offsetWidth || ye(t.height) !== e.offsetHeight;
}
function yo(e, t, n) {
  const o = Z(t), s = te(t), r = J(
    e,
    o && bo(t),
    n === "fixed"
  );
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (o || !o && n !== "fixed")
    if ((ee(t) !== "body" || _e(s)) && (i = Ce(t)), Z(t)) {
      const a = J(t, !0);
      l.x = a.x + t.clientLeft, l.y = a.y + t.clientTop;
    } else
      s && (l.x = Et(s));
  return {
    x: r.left + i.scrollLeft - l.x,
    y: r.top + i.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function ae(e) {
  if (ee(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (We(e) ? e.host : null) || te(e);
  return We(t) ? t.host : t;
}
function Ue(e) {
  return !Z(e) || X(e).position === "fixed" ? null : e.offsetParent;
}
function wo(e) {
  let t = ae(e);
  for (; Z(t) && !Ve(t); ) {
    if (De(t))
      return t;
    t = ae(t);
  }
  return null;
}
function Ke(e) {
  const t = Q(e);
  let n = Ue(e);
  for (; n && go(n) && X(n).position === "static"; )
    n = Ue(n);
  return n && (ee(n) === "html" || ee(n) === "body" && X(n).position === "static" && !De(n)) ? t : n || wo(e) || t;
}
function Po(e) {
  if (Z(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = J(e);
  return {
    width: t.width,
    height: t.height
  };
}
function _o(e) {
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
  };
  const l = {
    x: 0,
    y: 0
  };
  if ((s || !s && o !== "fixed") && ((ee(n) !== "body" || _e(r)) && (i = Ce(n)), Z(n))) {
    const a = J(n, !0);
    l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - i.scrollLeft + l.x,
    y: t.y - i.scrollTop + l.y
  };
}
function Co(e, t) {
  const n = Q(e), o = te(e), s = n.visualViewport;
  let r = o.clientWidth, i = o.clientHeight, l = 0, a = 0;
  if (s) {
    r = s.width, i = s.height;
    const u = Ot();
    (u || !u && t === "fixed") && (l = s.offsetLeft, a = s.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: l,
    y: a
  };
}
function Io(e) {
  var t;
  const n = te(e), o = Ce(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, r = re(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = re(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0);
  let l = -o.scrollLeft + Et(e);
  const a = -o.scrollTop;
  return X(s || n).direction === "rtl" && (l += re(n.clientWidth, s ? s.clientWidth : 0) - r), {
    width: r,
    height: i,
    x: l,
    y: a
  };
}
function At(e) {
  const t = ae(e);
  return Ve(t) ? e.ownerDocument.body : Z(t) && _e(t) ? t : At(t);
}
function ie(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = At(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Q(o), i = s ? [r].concat(r.visualViewport || [], _e(o) ? o : []) : o, l = t.concat(i);
  return s ? l : l.concat(ie(i));
}
function Ro(e, t) {
  const n = J(e, !1, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft;
  return {
    top: o,
    left: s,
    x: s,
    y: o,
    right: s + e.clientWidth,
    bottom: o + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Ye(e, t, n) {
  return t === "viewport" ? ge(Co(e, n)) : G(t) ? Ro(t, n) : ge(Io(te(e)));
}
function So(e) {
  let t = ie(e).filter((r) => G(r) && ee(r) !== "body"), n = null;
  const o = X(e).position === "fixed";
  let s = o ? ae(e) : e;
  for (; G(s) && !Ve(s); ) {
    const r = X(s), i = De(s);
    (o ? !i && !n : !i && r.position === "static" && !!n && ["absolute", "fixed"].includes(n.position)) ? t = t.filter((a) => a !== s) : n = r, s = ae(s);
  }
  return t;
}
function ko(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const i = [...n === "clippingAncestors" ? So(t) : [].concat(n), o], l = i[0], a = i.reduce((u, b) => {
    const m = Ye(t, b, s);
    return u.top = re(m.top, u.top), u.right = qe(m.right, u.right), u.bottom = qe(m.bottom, u.bottom), u.left = re(m.left, u.left), u;
  }, Ye(t, l, s));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const xo = {
  getClippingRect: ko,
  convertOffsetParentRelativeRectToViewportRelativeRect: _o,
  isElement: G,
  getDimensions: Po,
  getOffsetParent: Ke,
  getDocumentElement: te,
  async getElementRects(e) {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const s = this.getOffsetParent || Ke, r = this.getDimensions;
    return {
      reference: yo(t, await s(n), o),
      floating: {
        x: 0,
        y: 0,
        ...await r(n)
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => X(e).direction === "rtl"
};
function Do(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: r = !0,
    elementResize: i = !0,
    animationFrame: l = !1
  } = o, a = s && !l, u = a || r ? [...G(e) ? ie(e) : e.contextElement ? ie(e.contextElement) : [], ...ie(t)] : [];
  u.forEach((g) => {
    a && g.addEventListener("scroll", n, {
      passive: !0
    }), r && g.addEventListener("resize", n);
  });
  let b = null;
  if (i) {
    let g = !0;
    b = new ResizeObserver(() => {
      g || n(), g = !1;
    }), G(e) && !l && b.observe(e), !G(e) && e.contextElement && !l && b.observe(e.contextElement), b.observe(t);
  }
  let m, d = l ? J(e) : null;
  l && c();
  function c() {
    const g = J(e);
    d && (g.x !== d.x || g.y !== d.y || g.width !== d.width || g.height !== d.height) && n(), d = g, m = requestAnimationFrame(c);
  }
  return n(), () => {
    var g;
    u.forEach((p) => {
      a && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (g = b) == null || g.disconnect(), b = null, l && cancelAnimationFrame(m);
  };
}
const Vo = (e, t, n) => ro(e, t, {
  platform: xo,
  ...n
});
function To(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Wt(e);
}
const $o = {
  reference: {
    type: null,
    required: !0
  }
}, Oo = {
  visible: {
    type: Boolean,
    default: !1
  }
}, Eo = {
  keep: {
    type: Boolean,
    default: !1
  }
}, Ao = {
  transition: {
    type: String,
    default: null
  }
}, Bo = (e = "bottom") => ({
  placement: {
    type: String,
    default: e
  }
}), Mo = {
  middleware: {
    type: Array,
    default: () => [xt(), Vt({
      limiter: ho()
    })]
  }
};
function Ci() {
  return T(k());
}
function Ii(e) {
  const t = e.split("-");
  return {
    placement: t[0],
    alignment: t.length === 2 ? t[1] : null
  };
}
const No = /* @__PURE__ */ D({
  name: "hr-floating",
  props: {
    ...E,
    ...$o,
    ...Oo,
    ...Eo,
    ...Ao,
    ...Bo(),
    ...Mo
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0,
    transitionStateChanged: (e) => !0,
    show: () => !0,
    hide: () => !0
  },
  setup(e, t) {
    const n = V(null), o = V(null), s = I({
      position: "absolute",
      left: "0",
      top: "0",
      maxWidth: "",
      maxHeight: "",
      zIndex: 1
    }), r = h(() => [xt(), Vt({
      padding: 8
    }), ...e.middleware]), i = () => {
      n.value && Vo(e.reference, n.value, {
        placement: e.placement,
        middleware: r.value
      }).then((c) => {
        t.emit("computedPosition", c), s.position = c.strategy, s.left = `${c.x ?? 0}px`, s.top = `${c.y ?? 0}px`, s.zIndex = 1;
      });
    }, l = () => {
      n.value && (o.value = Do(e.reference, n.value, i));
    };
    F(() => e.visible, (c) => {
      t.emit(c ? "show" : "hide"), c && !o.value && oe(l);
    });
    const a = (c, g) => typeof c.contains == "function" ? c.contains(g) : !1, u = (c) => {
      if (!e.visible)
        return;
      const g = !n.value || c.target && !a(n.value, c.target), p = !e.reference || c.target && !a(e.reference, c.target);
      !g && !p || t.emit("clickOutside", {
        outsideFloating: g,
        outsideReference: p
      });
    }, b = () => {
      o.value && (o.value(), o.value = null);
    }, m = () => {
      t.emit("transitionStateChanged", !0);
    }, d = () => {
      t.emit("transitionStateChanged", !1), e.keep || b();
    };
    return de(() => {
      b();
    }), {
      middleware: r,
      floatingElement: n,
      style: s,
      onLeave: m,
      onAfterLeave: d,
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
    }, n = this.$props.as || "span", o = () => this.$props.keep ? pe(ne(n, Ie({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[qt, this.visible], [me("document-event"), this.onDocumentClick, "click"]]) : this.visible ? pe(ne(n, Ie({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[me("document-event"), this.onDocumentClick, "click"]]) : null;
    return ne(ut, {
      to: "body"
    }, {
      default: () => [this.transition ? ne(Ft, {
        name: this.transition,
        onLeave: this.onLeave,
        onAfterLeave: this.onAfterLeave
      }, To(e = o()) ? e : {
        default: () => [e]
      }) : o()]
    });
  }
}), Ge = "core-floating", zo = {
  Floating: No
}, Lo = {
  install: (e, t) => {
    M(e, Ge) || (z(e, zo), N(e, Ge));
  }
}, jo = {
  active: {
    type: String,
    required: !0
  }
};
function Ri() {
  return T(k());
}
const Ho = /* @__PURE__ */ D({
  name: "hr-fragment-container",
  props: {
    ...E,
    ...A,
    ...jo
  },
  emits: ["click"],
  setup(e, t) {
    const n = I({
      active: h(() => e.active)
    }), o = () => t.slots.default(n);
    return H("coreFragmentContainer", {
      active: h(() => e.active)
    }), {
      slotProps: n,
      defaultRender: o
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Xe = "core-fragments", Fo = {
  FragmentContainer: Ho
}, Wo = {
  install: (e, t) => {
    M(e, Xe) || (z(e, Fo), N(e, Xe));
  }
}, qo = {
  modelValue: {
    type: null,
    required: !0
  }
}, Uo = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Ko = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Yo = {
  readonly: {
    type: Boolean,
    default: !1
  }
}, Go = {
  type: {
    type: String,
    default: null
  }
};
function Si(e) {
  return T(k()).setProp("input", e);
}
const Xo = /* @__PURE__ */ D({
  name: "hr-input",
  props: {
    ...E,
    ...A,
    ...Ko,
    ...Yo,
    ...Go,
    ...qo,
    ...Uo,
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
      t.emit("update:modelValue", l), oe(() => {
        e.type !== "number" && e.input.setSelectionRange(a, u);
      });
    }, s = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Zo = {
  modelValue: {
    type: String,
    required: !0
  }
}, Jo = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Qo = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, es = {
  items: {
    type: Array,
    default: () => []
  }
};
function ki(e) {
  return T(k()).setProp("input", e);
}
const ts = /* @__PURE__ */ D({
  name: "hr-autocomplete",
  props: {
    ...E,
    ...A,
    ...Qo,
    ...es,
    ...Zo,
    ...Jo,
    input: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = (c) => {
      e.input.focus();
    }, o = (c) => {
      let g = c;
      e.modelModifiers.capitalize && (g = g.charAt(0).toUpperCase() + g.slice(1));
      const {
        selectionStart: p
      } = e.input, {
        selectionEnd: y
      } = e.input;
      t.emit("update:modelValue", g), oe(() => {
        e.input.setSelectionRange(p, y);
      });
    }, s = V(!1), r = V();
    F(r, () => {
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
      const g = r.value ? e.items.findIndex((p) => p === r.value) : null;
      !s.value && (c.key === "ArrowDown" || c.key === "ArrowUp" || c.key === "Enter") && e.modelValue.length > 0 ? (a(), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowDown" && e.modelValue.length > 0 ? (r.value = U.next(e.items, g), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowUp" && e.modelValue.length > 0 ? (r.value = U.prev(e.items, g), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Enter" && r.value ? (i(r.value), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Tab" ? l() : c.key === "Escape" && (l(), c.preventDefault(), c.stopImmediatePropagation());
    }, b = () => {
      r.value = null;
    }, m = I({
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
      slotProps: m,
      focusInput: n,
      defaultRender: () => t.slots.default(m),
      hideList: l,
      showList: a
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ze = "core-inputs", ns = {
  Input: Xo,
  Autocomplete: ts
}, os = {
  install: (e, t) => {
    M(e, Ze) || (z(e, ns), N(e, Ze));
  }
}, ce = {}, ss = {
  name: {
    type: String,
    default: "default"
  }
};
function xi() {
  return T(k());
}
const rs = /* @__PURE__ */ D({
  name: "hr-notification-wrapper",
  props: {
    ...E,
    ...A,
    ...ss
  },
  setup: function(e, t) {
    H("wrapper-name", e.name);
    const n = I({}), o = (p) => p.charAt(0).toUpperCase() + p.slice(1), s = (p) => p.split("-").map((w) => o(w)).join(""), r = (p) => {
      const y = {};
      return Object.keys(p).forEach((R) => {
        y[`on${s(R)}`] = p[R];
      }), y;
    }, i = (p) => {
      const y = n[p];
      y.visible = !1;
    }, l = (p) => {
      delete n[p];
    }, a = (p) => {
      i(p);
    }, u = (p) => {
      const y = n[p];
      y.durationTimeout !== null && y.options.resetDurationOnInteractivity && (clearTimeout(y.durationTimeout), y.durationTimeout = null);
    }, b = (p) => {
      u(p);
      const y = n[p];
      y.options.duration !== null && y.durationTimeout === null && (y.durationTimeout = setTimeout(() => {
        y.reject();
      }, y.options.duration));
    }, c = {
      addNotification: (p) => {
        const y = p;
        return y.resolve = (R = null) => {
          y.promise.resolve(R), i(y.id);
        }, y.reject = (R = null) => {
          y.promise.reject(R), i(y.id);
        }, y.transitionEnd = () => {
          l(y.id);
        }, y.visible = !0, y.id = xe.random(), y.compiledListeners = h(() => y.listeners ? r(y.listeners) : {}), y.durationTimeout = null, n[y.id] = y, b(y.id), y;
      },
      getNotification: (p) => n[p],
      destroyNotification: a,
      pauseDuration: u,
      resumeDuration: b
    };
    ce[e.name] = c;
    const g = I({
      name: h(() => e.name),
      notifications: h(() => n)
    });
    return {
      ...c,
      slotProps: g,
      INotifications: n
    };
  },
  render() {
    const e = () => this.$slots.default(this.slotProps);
    if (this.$props.as) {
      const t = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...t
      }, e());
    }
    return e();
  }
}), Bt = {
  wrapper: "default",
  duration: 4500,
  resetDurationOnInteractivity: !0
};
function Mt(e, t = null, n = null, o) {
  const s = { ...Bt, ...o }, r = s.wrapper;
  let i = null;
  return {
    promise: new Promise((a, u) => {
      i = ce[r].addNotification({
        component: dt(e),
        listeners: n !== null ? I(n) : null,
        props: t !== null ? I(t) : null,
        options: s,
        promise: { resolve: a, reject: u }
      });
    }),
    destroy: () => ce[r].destroyNotification(i.id)
  };
}
function is(e, t = null, n = null, o) {
  return Mt(e, t, n, o).promise;
}
function Nt(e = "default") {
  return ce[e];
}
function ls(e) {
  const t = Y("wrapper-name");
  return ce[t].getNotification(e);
}
function as() {
  const e = k(), t = ls(e.vnode.key);
  return H("notification-id", e.vnode.key), H("notification-resolve", t.resolve), H("notification-reject", t.reject), H("notification-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultNotificationOptions: Bt,
  show: Mt,
  showPromise: is,
  getWrapper: Nt,
  setupNotification: as
}, Symbol.toStringTag, { value: "Module" })), cs = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function Vi() {
  return T(k());
}
const us = /* @__PURE__ */ D({
  name: "hr-notification",
  props: {
    ...E,
    ...A,
    ...cs
  },
  setup(e, t) {
    const n = Y("notification-id");
    n || console.warn("You must call NotificationManager.setupNotification() in the notification setup");
    const o = Y("notification-reject"), s = () => {
      o(null);
    }, r = Nt(), i = I({
      visible: h(() => e.visible),
      pauseDuration: () => r.pauseDuration(n),
      resumeDuration: () => r.resumeDuration(n),
      close: s
    }), l = () => t.slots.default(i);
    return () => {
      if (e.as) {
        const a = e.asProps ? e.asProps(i) : {};
        return $(e.as, {
          ...a
        }, l());
      }
      return l();
    };
  }
}), Je = "core-notifications", ds = {
  Notification: us,
  NotificationWrapper: rs
}, fs = {
  install: (e, t) => {
    M(e, Je) || (z(e, ds), N(e, Je));
  }
}, ps = {
  modelValue: {
    type: Number,
    required: !0
  }
}, ms = {
  pageSize: {
    type: Number,
    required: !0
  }
}, hs = {
  count: {
    type: Number,
    required: !0
  }
}, vs = {
  delta: {
    type: Number,
    default: 1
  }
};
function Ti() {
  return T(k());
}
const gs = /* @__PURE__ */ D({
  name: "hr-paginator",
  props: {
    ...E,
    ...A,
    ...ps,
    ...ms,
    ...hs,
    ...vs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => Math.ceil(e.count / e.pageSize)), o = h(() => {
      const l = e.modelValue, a = n.value, u = [], b = [];
      let m;
      u.push(1);
      for (let d = l - e.delta; d <= l + e.delta; d++)
        d < a && d > 1 && u.push(d);
      return a !== 1 && u.push(a), u.forEach((d) => {
        m && (d - m === 2 ? b.push(m + 1) : d - m !== 1 && b.push(null)), b.push(d), m = d;
      }), b;
    }), s = (l) => {
      l !== null && t.emit("update:modelValue", l);
    }, r = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Qe = "core-paginators", bs = {
  Paginator: gs
}, ys = {
  install: (e, t) => {
    M(e, Qe) || (z(e, bs), N(e, Qe));
  }
}, ws = {
  value: {
    type: Number,
    required: !0
  }
}, Ps = {
  minimum: {
    type: Number,
    default: 0
  }
}, _s = {
  maximum: {
    type: Number,
    default: 100
  }
};
function $i() {
  return T(k());
}
const Cs = /* @__PURE__ */ D({
  name: "hr-progress-bar",
  props: {
    ...E,
    ...A,
    ...ws,
    ...Ps,
    ..._s
  },
  setup(e, t) {
    const n = h(() => {
      const r = (e.value - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(r);
    }), o = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), et = "core-progress-bars", Is = {
  ProgressBar: Cs
}, Rs = {
  install: (e, t) => {
    M(e, et) || (z(e, Is), N(e, et));
  }
}, Ss = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, ks = {
  modelValue: {
    type: null,
    required: !0
  }
}, xs = {
  value: {
    type: null,
    default: !0
  }
};
function Oi() {
  return T(k());
}
const Ds = /* @__PURE__ */ D({
  name: "hr-radio-button",
  props: {
    ...E,
    ...A,
    ...Ss,
    ...ks,
    ...xs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.modelValue === e.value), o = () => {
      t.emit("update:modelValue", e.value);
    }, s = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), tt = "core-radio-buttons", Vs = {
  RadioButton: Ds
}, Ts = {
  install: (e, t) => {
    M(e, tt) || (z(e, Vs), N(e, tt));
  }
};
const $s = {
  horizontal: {
    type: Boolean,
    default: !0
  }
}, Os = {
  vertical: {
    type: Boolean,
    default: !0
  }
}, Es = {
  autoHide: {
    type: Boolean,
    default: !0
  }
}, As = {
  autoHideDelay: {
    type: Number,
    default: 1500
  }
}, Bs = {
  minimumSize: {
    type: Number,
    default: 20
  }
}, Ms = {
  classes: {
    type: null,
    default: null
  }
};
function Ei() {
  return T(k());
}
const Ns = /* @__PURE__ */ D({
  name: "hr-scroll-container",
  props: {
    as: {
      type: String,
      required: !0
    },
    ...A,
    ...$s,
    ...Os,
    ...Es,
    ...As,
    ...Bs,
    ...Ms
  },
  setup(e) {
    const t = V(), n = V(), o = V(), s = V(), r = V(), i = I({
      start: null,
      startOffset: null
    }), l = I({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), a = I({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), u = h(() => a.trackHover || l.trackHover), b = h(() => a.dragging || l.dragging), m = V(e.autoHide);
    let d = null;
    const c = () => {
      !e.autoHide || b.value || u.value || (m.value = !1, d && clearTimeout(d), d = setTimeout(() => {
        m.value = !0;
      }, e.autoHideDelay));
    }, g = (_) => {
      _ ? (clearTimeout(d), m.value = !1) : c();
    };
    F(b, g), F(u, g);
    const p = (_, S) => {
      const O = _.getBoundingClientRect(), L = S.clientX, K = S.clientY, Te = O.left, zt = Te + O.width, $e = O.top, Lt = $e + O.height;
      return L >= Te && L <= zt && K >= $e && K <= Lt;
    }, y = (_) => {
      l.trackHover = n.value && l.visible && p(n.value, _), l.thumbHover = l.trackHover && p(o.value, _), a.trackHover = s.value && a.visible && p(s.value, _), a.thumbHover = a.trackHover && p(r.value, _);
    }, R = (_) => {
      if (l.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), O = n.value.getBoundingClientRect(), L = _.clientY - S.top - i.startOffset.top + (S.top - O.top), K = Math.min(100, Math.max(0, 100 / n.value.offsetHeight * L));
        t.value.scrollTop = t.value.scrollHeight * (K / 100), _.preventDefault(), _.stopImmediatePropagation();
      } else if (a.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), O = s.value.getBoundingClientRect(), L = _.clientX - S.left - i.startOffset.left + (S.left - O.left), K = Math.min(100, Math.max(0, 100 / s.value.offsetWidth * L));
        t.value.scrollLeft = t.value.scrollWidth * (K / 100), _.preventDefault(), _.stopImmediatePropagation();
      }
    }, w = (_) => {
      if (l.dragging = n.value && p(n.value, _), a.dragging = s.value && p(s.value, _), (l.dragging || a.dragging) && i.start === null) {
        const S = t.value.getBoundingClientRect();
        i.start = {
          top: _.clientY - S.top,
          left: _.clientX - S.left
        };
        const O = l.dragging ? o.value.getBoundingClientRect() : r.value.getBoundingClientRect();
        i.startOffset = {
          top: S.top - O.top + i.start.top,
          left: S.left - O.left + i.start.left
        }, _.preventDefault(), _.stopImmediatePropagation();
      }
    }, v = () => {
      l.dragging = a.dragging = !1, i.startOffset = i.start = null;
    }, f = V(0), P = V(0), x = () => {
      if (l.visible = t.value.scrollHeight > t.value.offsetHeight, l.visible && n.value && o.value)
        if (t.value.scrollHeight !== f.value && (c(), f.value = t.value.scrollHeight), n.value.offsetHeight === 0)
          oe(x);
        else {
          const _ = 100 / t.value.scrollHeight * t.value.offsetHeight;
          l.size = Math.max(e.minimumSize, n.value.offsetHeight * (_ / 100));
          const S = 100 / (t.value.scrollHeight - t.value.offsetHeight) * t.value.scrollTop;
          l.offset = (n.value.offsetHeight - l.size) * (S / 100);
        }
      if (a.visible = t.value.scrollWidth > t.value.offsetWidth, a.visible && s.value && r.value)
        if (t.value.scrollWidth !== P.value && (c(), P.value = t.value.scrollWidth), s.value.offsetWidth === 0)
          oe(x);
        else {
          const _ = 100 / t.value.scrollWidth * t.value.offsetWidth;
          a.size = Math.max(e.minimumSize, s.value.offsetWidth * (_ / 100));
          const S = 100 / (t.value.scrollWidth - t.value.offsetWidth) * t.value.scrollLeft;
          a.offset = (s.value.offsetWidth - a.size) * (S / 100);
        }
    }, B = (_, S) => {
      t.value.scrollTo(_, S);
    }, W = () => {
      c(), x();
    };
    ue(() => {
      x(), document.addEventListener("mousemove", R), document.addEventListener("mouseup", v), t.value.addEventListener("scroll", W, {
        passive: !0
      });
    }), Ut(() => {
      document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", v), t.value.removeEventListener("scroll", W);
    });
    const j = (_, S, O) => {
      _ === "vertical" ? (n.value = S, o.value = O) : (s.value = S, r.value = O);
    }, C = I({
      anyHover: h(() => u.value),
      anyDragging: h(() => b.value),
      hidden: h(() => m.value)
    });
    return {
      wrapper: t,
      verticalBar: l,
      horizontalBar: a,
      anyHover: u,
      anyDragging: b,
      onMouseMove: y,
      onMouseDown: w,
      startAutoHideTimer: c,
      updateThumbs: x,
      slotProps: C,
      registerBar: j,
      scrollTo: B
    };
  },
  render() {
    const e = this.as;
    return ne(e, Ie(this.$props.asProps(this.slotProps), {
      class: ["hr-scroll-container", {
        "-disable-selection": this.anyHover || this.anyDragging
      }],
      onMouseenter: this.startAutoHideTimer
    }), {
      default: () => [pe(ne("div", {
        ref: "wrapper",
        class: ["hr-scroll-container__wrapper"],
        onMousemove: this.onMouseMove,
        onMouseleave: this.onMouseMove,
        onMousedown: this.onMouseDown
      }, [pe(ne("div", {
        class: ["hr-scroll-container__container", this.classes]
      }, [this.$slots.default()]), [[me("resize"), this.updateThumbs]])]), [[me("resize"), this.updateThumbs]]), this.$slots.verticalBar ? this.$slots.verticalBar(this.verticalBar) : null, this.$slots.horizontalBar ? this.$slots.horizontalBar(this.horizontalBar) : null]
    });
  }
}), nt = "core-scroll-containers", zs = {
  ScrollContainer: Ns
}, Ls = {
  CommonInstall: yt
}, js = {
  install: (e, t) => {
    M(e, nt) || (pt(e, t, Ls), z(e, zs), N(e, nt));
  }
}, ke = {
  getProperty(e, t) {
    let n = e;
    return t.split(".").every((s) => (n[s] === void 0 ? n = null : n = n[s], n !== null)), n;
  }
}, Hs = {
  modelValue: {
    type: null
  }
}, Fs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Ws = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, qs = {
  allowClear: {
    type: Boolean,
    default: !1
  }
}, Us = {
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}, Ks = {
  compare: {
    type: [Function, String],
    default: null
  }
};
function Ai() {
  return T(k());
}
const Ys = /* @__PURE__ */ D({
  name: "hr-select",
  props: {
    ...E,
    ...A,
    ...Fs,
    ...Ws,
    ...qs,
    ...Us,
    ...Hs,
    ...Ks
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = V(!1), o = V(!1), s = V([]), r = V(), i = h(() => {
      const C = [].concat(e.modelValue);
      return s.value.filter((_) => C.indexOf(_.value) !== -1 ? !0 : e.compare ? typeof e.compare == "string" ? C.find((O) => (O !== null && ke.getProperty(O, e.compare)) === (_.value !== null && ke.getProperty(_.value, e.compare))) : e.compare(C, _.value) : !1);
    }), l = h(() => i.value.length > 0), a = h(() => {
      const C = [];
      return i.value.forEach((_) => {
        C.push(_.label);
      }), C.join(", ");
    }), u = V(""), b = V(), m = h(() => s.value.filter((C) => C.disabled === !1)), d = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const c = (C) => {
      s.value.push(C);
    }, g = (C) => {
      s.value = U.remove(s.value, C);
    }, p = () => {
      n.value = !1;
    }, y = (C) => {
      const {
        value: _
      } = C;
      e.hideOnSelect && !e.multiple && p();
      let S = _;
      e.multiple && (S = [], e.modelValue !== void 0 && (S = S.concat(e.modelValue)), S.includes(_) ? S.splice(S.indexOf(_), 1) : S.push(_)), r.value = C, t.emit("update:modelValue", S);
    }, R = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, w = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, v = (C) => {
      if (e.disabled)
        return !1;
      const _ = () => r.value ? m.value.findIndex((S) => S === r.value) : null;
      if (!n.value && (C.key === "ArrowDown" || C.key === "ArrowUp" || C.key === "Enter"))
        n.value = !0, C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "ArrowDown")
        r.value = U.next(m.value, _()), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "ArrowUp")
        r.value = U.prev(m.value, _()), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "Enter" && r.value)
        y(r.value), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "Tab")
        p();
      else if (C.key === "Escape")
        p(), C.preventDefault(), C.stopImmediatePropagation();
      else {
        clearTimeout(b.value);
        const S = C.key.toLowerCase();
        if (S.match(/^[\p{L}]{1}$/u)) {
          let L = null;
          S == u.value ? L = r.value ? f.value.findIndex((K) => K === r.value) : null : u.value += S, r.value = U.next(f.value, L), b.value = setTimeout(P, 1500);
        }
      }
    }, f = h(() => s.value.filter((C) => C.label.toLowerCase().startsWith(u.value))), P = () => {
      u.value = "";
    }, x = (C) => {
      o.value = C;
    }, B = h(() => n.value || o.value);
    H("select", {
      selectedItems: i,
      focusedItem: r,
      onItemClick: y,
      addItemInstance: c,
      removeItemInstance: g,
      menuVisible: h(() => n.value),
      itemsVisible: B
    });
    const W = I({
      modelValue: h(() => e.modelValue),
      disabled: h(() => e.disabled),
      allowClear: h(() => e.allowClear),
      menuVisible: h(() => n.value),
      focusedItem: h(() => r.value),
      clearFocusedItem: d,
      anythingSelected: l,
      selectedItems: i,
      selectedText: a,
      clearValue: w,
      close: p,
      onButtonClick: R,
      onItemClick: y,
      onKeyEvents: v,
      onMenuTransitioning: x
    });
    return {
      close: p,
      slotProps: W,
      defaultRender: () => t.slots.default(W),
      items: s
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Gs = {
  value: {
    type: null,
    required: !0
  }
}, Xs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Zs = {
  label: {
    type: String,
    default: null
  }
};
function Bi() {
  return T(k());
}
const Js = /* @__PURE__ */ D({
  name: "hr-select-item",
  props: {
    ...E,
    ...A,
    ...Xs,
    ...Gs,
    ...Zs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = Y("select"), o = I({
      value: e.value,
      label: e.label,
      disabled: e.disabled,
      component: k()
    });
    ue(() => {
      n.addItemInstance(o);
    }), de(() => {
      n.removeItemInstance(o);
    });
    const s = h(() => n.selectedItems.value.indexOf(o) !== -1), r = h(() => n.focusedItem.value === o), i = () => {
      e.disabled || n.onItemClick(o);
    }, l = I({
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
        return $(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), ot = "core-selects", Qs = {
  Select: Ys,
  SelectItem: Js
}, er = {
  install: (e, t) => {
    M(e, ot) || (z(e, Qs), N(e, ot));
  }
}, tr = {
  modelValue: {
    type: null
  }
}, nr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, or = {
  minimum: {
    type: Number,
    default: 0
  }
}, sr = {
  maximum: {
    type: Number,
    default: 100
  }
}, rr = {
  stepSize: {
    type: Number,
    default: 1
  }
};
function Mi() {
  return T(k());
}
const ir = /* @__PURE__ */ D({
  name: "hr-slider",
  props: {
    ...E,
    ...A,
    ...tr,
    ...nr,
    ...or,
    ...sr,
    ...rr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => {
      const l = (e.modelValue - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(l);
    }), o = h(() => Math.round((e.maximum - e.minimum) / e.stepSize)), s = (l) => {
      let a = (e.maximum - e.minimum) / 100 * l + e.minimum;
      return a < e.minimum ? a = e.minimum : a > e.maximum && (a = e.maximum), Math.round(a / e.stepSize) * e.stepSize;
    }, r = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), st = "core-sliders", lr = {
  Slider: ir
}, ar = {
  install: (e, t) => {
    M(e, st) || (z(e, lr), N(e, st));
  }
};
function Ni(e, t, n = null, o = !0) {
  return I({
    id: e,
    visible: o,
    validator: n,
    data: t
  });
}
const cr = {
  modelValue: {
    type: String,
    default: null
  }
}, ur = {
  steps: {
    type: Array,
    default: null
  }
};
function zi() {
  return T(k());
}
const dr = /* @__PURE__ */ D({
  name: "hr-steps-navigator",
  props: {
    ...E,
    ...A,
    ...cr,
    ...ur
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.steps.findIndex((d) => d.id === e.modelValue)), o = h(() => e.steps.filter((d) => d.visible)), s = h(() => {
      const d = [];
      return e.steps.forEach((c) => {
        const g = e.steps.findIndex((p) => p.id === c.id);
        d.push({
          id: c.id,
          visible: c.visible,
          validator: c.validator,
          data: c.data,
          stepIndex: g,
          isCurrent: c.id === e.modelValue,
          isDone: n.value !== -1 && g < n.value,
          isLast: o.value.findIndex((p) => p.id === c.id) === o.value.length - 1,
          isLocked: !1
        });
      }), d;
    }), r = h(() => s.value[n.value]), i = h(() => s.value.filter((d) => d.visible)), l = (d) => {
      t.emit("update:modelValue", d.id);
    }, a = () => {
      if (!(typeof r.value.validator == "function" && r.value.validator() === !1)) {
        const d = U.next(s.value, n.value, (c) => c.visible);
        t.emit("update:modelValue", d.id);
      }
    }, u = () => {
      const d = U.prev(s.value, n.value, (c) => c.visible);
      t.emit("update:modelValue", d.id);
    }, b = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), rt = "core-steps", fr = {
  StepsNavigator: dr
}, pr = {
  install: (e, t) => {
    M(e, rt) || (z(e, fr), N(e, rt));
  }
};
class mr {
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
class hr {
  constructor(t, n, o, s) {
    q(this, "id");
    q(this, "data");
    q(this, "selected");
    q(this, "selectable");
    this.id = t, this.data = n, this.selected = !1, F(() => o, () => {
      typeof o.selectable == "boolean" ? this.selectable = h(() => o.selectable) : (this.selectable = o.selectable(this.data), F(() => this.selectable.value, () => {
        this.selectable.value || s(this.id, !1);
      }));
    }, {
      immediate: !0
    });
  }
  getValue(t, n) {
    let { data: o } = this;
    return t !== void 0 && (o = ke.getProperty(o, t)), typeof n == "function" ? o = n(o) : n !== null && console.warn("[hr-table-column] Unsupported value for formatter"), o;
  }
}
const vr = {
  data: {
    type: Array,
    default: !0
  }
}, gr = {
  rowKey: {
    type: String,
    required: !0
  }
}, br = {
  selectable: {
    type: [Boolean, Function],
    default: !1
  }
}, yr = {
  selectedRows: {
    type: Array,
    default: () => []
  }
}, wr = {
  sort: {
    type: Object,
    default: null
  }
};
function Li() {
  return T(k());
}
const Pr = /* @__PURE__ */ D({
  name: "hr-table",
  props: {
    ...E,
    ...A,
    ...vr,
    ...gr,
    ...br,
    ...yr,
    ...wr
  },
  emits: ["update:sort", "update:selectedRows"],
  setup(e, t) {
    const n = V([]), o = h(() => {
      const v = n.value.filter((P) => P.selected).length, f = n.value.filter((P) => P.selectable).length;
      return v === f && f > 0;
    }), s = h(() => n.value.filter((v) => v.selected).length > 0), r = h(() => n.value.filter((v) => v.selectable).length > 0), i = (v, f) => {
      const P = n.value.find((B) => B.id === v), x = e.selectedRows.findIndex((B) => B === P.data);
      P.selected = f, x === -1 && f ? t.emit("update:selectedRows", [...e.selectedRows, P.data]) : x !== -1 && !f && t.emit("update:selectedRows", e.selectedRows.filter((B) => B !== P.data));
    }, l = () => {
      const v = !o.value, f = [];
      n.value.forEach((P) => {
        v ? P.selectable && (f.push(P.data), P.selected = !0) : P.selected = !1;
      }), t.emit("update:selectedRows", f);
    };
    F([() => e.selectedRows, () => [...e.selectedRows]], () => {
      n.value.forEach((v) => {
        v.selected = e.selectedRows.findIndex((f) => f === v.data) !== -1;
      });
    }, {
      immediate: !0
    });
    const a = () => {
      const v = n.value;
      n.value = e.data.map((f) => {
        let P = v.find((x) => x.data[e.rowKey] === f[e.rowKey]);
        return P === void 0 ? (P = new hr(f[e.rowKey], f, e, i), P.selected = e.selectedRows.findIndex((x) => x === P.data) !== -1) : P.data !== f && (P.data = f), P;
      });
    };
    F([() => e.data, () => [...e.data]], () => {
      a();
    }, {
      immediate: !0
    });
    const u = (v) => {
      let f;
      e.sort.key === v ? f = e.sort.direction === "desc" ? "asc" : "desc" : f = "desc";
      const P = {
        key: v,
        direction: f
      };
      t.emit("update:sort", P);
    }, b = () => {
      t.emit("update:sort", {
        key: null,
        direction: "desc"
      });
    }, m = V([]);
    let d = null;
    const c = () => {
      d !== null && (m.value = d, d = null);
    }, g = (v, f, P) => {
      d === null && (d = [].concat(m.value)), d.push(new mr(v, f, P)), oe(c);
    }, p = (v) => {
      d === null && (d = m.value), d = d.filter((f) => f.id !== v), oe(c);
    }, y = h(() => m.value.sort((v, f) => v.order - f.order));
    H("table", {
      setSorting: u,
      setRowSelectionState: i,
      addColumn: g,
      removeColumn: p
    });
    const R = I({
      orderedColumns: y,
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
      slotProps: R,
      defaultRender: () => t.slots.default(R)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), _r = {
  property: {
    type: String
  }
}, Cr = {
  formatter: {
    type: Function,
    default: null
  }
}, Ir = {
  sortable: {
    type: Boolean,
    default: !1
  }
}, Rr = {
  data: {
    type: Object,
    default: null
  }
}, Sr = {
  order: {
    type: Number,
    default: 0
  }
}, kr = {
  component: {
    type: null,
    required: !0
  }
};
function ji(e, t = [], n = []) {
  const o = k();
  return {
    props: I({
      data: e,
      component: o,
      ...wt(o.props, t)
    }),
    listeners: Pt(o, n)
  };
}
const xr = /* @__PURE__ */ D({
  name: "hr-table-column",
  props: {
    ..._r,
    ...Cr,
    ...Ir,
    ...Rr,
    ...kr,
    ...Sr
  },
  setup(e, t) {
    const n = Y("table"), o = xe.random();
    return ue(() => {
      n.addColumn(o, e.component, e.data);
    }), de(() => {
      n.removeColumn(o);
    }), {};
  },
  render() {
    return null;
  }
}), Dr = {
  columns: {
    type: Array,
    required: !0
  }
}, Vr = {
  row: {
    type: Object,
    default: !1
  }
};
function Hi() {
  return T(k());
}
const Tr = /* @__PURE__ */ D({
  name: "hr-table-row",
  props: {
    ...E,
    ...A,
    ...Dr,
    ...Vr
  },
  emits: ["update:modelValue", "rowClick"],
  setup(e, t) {
    const o = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), it = "core-tables", $r = {
  Table: Pr,
  TableColumn: xr,
  TableRow: Tr
}, Or = {
  install: (e, t) => {
    M(e, it) || (z(e, $r), N(e, it));
  }
}, Er = {
  id: {
    type: String,
    required: !0
  }
}, Ar = {
  disabled: {
    type: Boolean,
    default: !1
  }
};
function Fi() {
  return T(k());
}
const Br = /* @__PURE__ */ D({
  name: "hr-tab-item",
  props: {
    ...E,
    ...A,
    ...Er,
    ...Ar
  },
  setup(e, t) {
    const n = Y("coreTabsNavigator"), o = I({
      id: e.id
    });
    ue(() => {
      n.addTabInstance(o);
    }), de(() => {
      n.removeTabInstance(o);
    });
    const s = h(() => o === n.activeTab.value), r = () => {
      e.disabled || n.onTabClick(o);
    }, i = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Mr = {
  modelValue: {
    type: String,
    default: null
  }
};
function Wi() {
  return T(k());
}
const Nr = /* @__PURE__ */ D({
  name: "hr-tabs-navigator",
  props: {
    ...E,
    ...A,
    ...Mr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = V([]), o = h(() => n.value.find((u) => u.id === e.modelValue));
    H("coreTabsNavigator", {
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
    const l = I({
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
      return $(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), lt = "core-tabs", zr = {
  TabItem: Br,
  TabsNavigator: Nr
}, Lr = {
  install: (e, t) => {
    M(e, lt) || (z(e, zr), N(e, lt));
  }
}, jr = {
  modelValue: {
    type: Boolean,
    default: !1
  }
}, Hr = {
  trigger: {
    type: String,
    default: "hover"
  }
}, Fr = {
  showDelay: {
    type: Number,
    default: 200
  }
}, Wr = {
  hideDelay: {
    type: Number,
    default: 0
  }
};
function qi(e) {
  return T(k()).setProp("reference", e);
}
const qr = /* @__PURE__ */ D({
  name: "hr-tooltip",
  props: {
    ...jr,
    ...Hr,
    ...Fr,
    ...Wr,
    reference: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = V(e.modelValue);
    F(() => e.modelValue, (c) => {
      n.value = c;
    });
    const o = (c) => {
      n.value = c, t.emit("update:modelValue", c);
    };
    let s = null, r = null;
    const i = () => {
      clearTimeout(s), clearTimeout(r), s = setTimeout(() => {
        o(!0);
      }, e.showDelay);
    }, l = () => {
      clearTimeout(s), clearTimeout(r), r = setTimeout(() => {
        o(!1);
      }, e.hideDelay);
    }, a = (c, g, p) => {
      c.addEventListener(g, i), c.addEventListener(p, l);
    }, u = (c, g, p) => {
      c.removeEventListener(g, i), c.removeEventListener(p, l), o(!1), clearTimeout(r), clearTimeout(s);
    }, b = (c) => {
      if (c === "hover")
        return {
          show: "mouseenter",
          hide: "mouseleave"
        };
    };
    F(() => e.reference, (c, g) => {
      const p = b(e.trigger);
      g && u(g, p.show, p.hide), c && a(c, p.show, p.hide);
    }), F(() => e.trigger, (c, g) => {
      if (g) {
        const p = b(g);
        u(e.reference, p.show, p.hide);
      }
      if (c) {
        const p = b(c);
        a(e.reference, p.show, p.hide);
      }
    });
    const m = I({
      visible: h(() => n.value)
    });
    return {
      slotProps: m,
      defaultRender: () => t.slots.default(m)
    };
  },
  render() {
    return this.defaultRender();
  }
}), at = "core-tooltips", Ur = {
  Tooltip: qr
}, Kr = {
  install: (e, t) => {
    M(e, at) || (z(e, Ur), N(e, at));
  }
}, Yr = {
  modelValue: {
    type: null,
    required: !0
  }
}, Ui = {
  valueFormat: {
    type: String,
    default: null
  }
}, Gr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Xr = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Zr = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Jr = {
  clearable: {
    type: Boolean,
    default: !1
  }
}, Qr = {
  disabledDate: {
    type: Function,
    default: null
  }
}, ei = {
  firstDayOfWeek: {
    type: Number,
    default: 0
  }
};
function Ki() {
  return T(k());
}
const ti = /* @__PURE__ */ D({
  name: "hr-date-picker",
  props: {
    ...E,
    ...A,
    ...Yr,
    ...Xr,
    ...Gr,
    ...Zr,
    ...Jr,
    ...Qr,
    ...ei
  },
  emits: ["click"],
  setup(e, t) {
    const n = I({
      disabled: h(() => e.disabled)
    }), o = () => t.slots.default(n);
    return () => {
      if (e.as) {
        const s = e.asProps ? e.asProps(n) : {};
        return $(e.as, {
          ...s
        }, o());
      }
      return o();
    };
  }
}), ct = "core-date-pickers", ni = {
  DatePicker: ti
}, Yi = {
  install: (e, t) => {
    M(e, ct) || (z(e, ni), N(e, ct));
  }
};
function oi(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function si(e) {
  return typeof e != "number" ? oi(e) : { top: e, right: e, bottom: e, left: e };
}
function ri(e) {
  return e.split("-")[0];
}
function ii(e) {
  return e.split("-")[1];
}
function li(e) {
  return e === "y" ? "height" : "width";
}
function ai(e) {
  return ["top", "bottom"].includes(ri(e)) ? "x" : "y";
}
function ci(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
const Gi = (e) => ({
  name: "arrowReference",
  options: e,
  async fn(t) {
    var L;
    const { element: n, padding: o = 0 } = e ?? {}, { x: s, y: r, placement: i, rects: l, platform: a } = t;
    if (n == null)
      return console.warn(
        "Floating UI: No `element` was passed to the `arrow` middleware."
      ), {};
    const u = si(o), b = { x: s, y: r }, m = ai(i), d = ii(i), c = li(m), g = await a.getDimensions(n), p = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right";
    let R = l.reference;
    e.reference && (R = (await a.getClientRects(e.reference))[0]);
    const w = R[c] + R[m] - b[m] - l.floating[c], v = b[m] - R[m], f = await ((L = a.getOffsetParent) == null ? void 0 : L.call(a, n));
    let P = f ? m === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0;
    P === 0 && (P = l.floating[c]);
    const x = w / 2 - v / 2, B = u[p], W = P - g[c] - u[y], j = P / 2 - g[c] / 2 + x, C = ci(B, j, W), O = (d === "start" ? u[p] : u[y]) > 0 && j !== C && R[c] <= l.floating[c] ? j < B ? B - j : W - j : 0;
    return {
      [m]: b[m] - O,
      data: {
        [m]: C,
        centerOffset: j - C
      }
    };
  }
}), ui = {
  CommonInstall: yt,
  ButtonsInstall: In,
  CheckboxesInstall: $n,
  CollapsesInstall: jn,
  DialogsInstall: Yn,
  DropdownsInstall: so,
  FloatingInstall: Lo,
  FragmentsInstall: Wo,
  InputsInstall: os,
  NotificationsInstall: fs,
  PaginatorsInstall: ys,
  ProgressBarsInstall: Rs,
  RadioButtonsInstall: Ts,
  ScrollContainersInstall: js,
  SelectsInstall: er,
  SlidersInstall: ar,
  StepsInstall: pr,
  TablesInstall: Or,
  TabsInstall: Lr,
  TooltipsInstall: Kr
}, Xi = {
  install: (e, t) => {
    Object.values(ui).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  U as ArrayHelper,
  In as CoreButtonsInstall,
  $n as CoreCheckboxInstall,
  jn as CoreCollapsesInstall,
  Yi as CoreDatePickersInstall,
  Yn as CoreDialogsInstall,
  so as CoreDropdownsInstall,
  Lo as CoreFloatingInstall,
  Wo as CoreFragmentsInstall,
  os as CoreInputsInstall,
  fs as CoreNotificationsInstall,
  ys as CorePaginatorsInstall,
  Rs as CoreProgressBarsInstall,
  Ts as CoreRadioButtonsInstall,
  js as CoreScrollContainersInstall,
  er as CoreSelectsInstall,
  ar as CoreSlidersInstall,
  pr as CoreStepsInstall,
  mr as CoreTableColumn,
  hr as CoreTableRow,
  Or as CoreTablesInstall,
  Lr as CoreTabsInstall,
  Kr as CoreTooltipsInstall,
  yi as DialogManager,
  pi as ModuleHelper,
  Di as NotificationManager,
  ke as ObjectHelper,
  xe as StringHelper,
  Qo as coreAutocompleteDisabledProp,
  es as coreAutocompleteItemsProp,
  Jo as coreAutocompleteModelModifiersProp,
  Zo as coreAutocompleteModelValueProp,
  ki as coreAutocompleteSetup,
  _n as coreButton,
  yn as coreButtonDisabledProp,
  Pn as coreButtonLoadingProp,
  mi as coreButtonSetup,
  wn as coreButtonVisibleProp,
  kn as coreCheckboxDisabledProp,
  Dn as coreCheckboxIndeterminateProp,
  Rn as coreCheckboxModelValueProp,
  hi as coreCheckboxSetup,
  Sn as coreCheckboxValueProp,
  xn as coreCheckboxVisibleProp,
  On as coreCollapseAccordionProp,
  bi as coreCollapseInlineSetup,
  Bn as coreCollapseItemIdProp,
  gi as coreCollapseItemSetup,
  En as coreCollapseModelValueProp,
  vi as coreCollapseSetup,
  E as coreComponentAsProp,
  Jr as coreDatePickerClearableProp,
  Qr as coreDatePickerDisabledDateProp,
  Gr as coreDatePickerDisabledProp,
  ei as coreDatePickerFirstDayOfWeekProp,
  Yr as coreDatePickerModelValueProp,
  Zr as coreDatePickerMultipleProp,
  Ki as coreDatePickerSetup,
  Ui as coreDatePickerValueFormatProp,
  Xr as coreDatePickerVisibleProp,
  wi as coreDialogSetup,
  qn as coreDialogVisibleProp,
  Hn as coreDialogWrapper,
  Jn as coreDropdownDisabledProp,
  Qn as coreDropdownHideOnClickProp,
  Gn as coreDropdownItemDisabledProp,
  Xn as coreDropdownItemLabelProp,
  Pi as coreDropdownItemSetup,
  _i as coreDropdownSetup,
  eo as coreDropdownSplitButtonProp,
  to as coreDropdownVisibleProp,
  Gi as coreFloatingArrowReference,
  Eo as coreFloatingKeepProp,
  Mo as coreFloatingMiddlewareProp,
  Bo as coreFloatingPlacementProp,
  $o as coreFloatingReferenceProp,
  Ci as coreFloatingSetup,
  Ao as coreFloatingTransitionProp,
  Oo as coreFloatingVisibleProp,
  jo as coreFragmentContainerActiveProp,
  Ri as coreFragmentContainerSetup,
  Nn as coreInlineCollapseModelValueProp,
  Ko as coreInputDisabledProp,
  Uo as coreInputModelModifiersProp,
  qo as coreInputModelValueProp,
  Yo as coreInputReadonlyProp,
  Si as coreInputSetup,
  Go as coreInputTypeProp,
  Vi as coreNotificationSetup,
  cs as coreNotificationVisibleProp,
  ss as coreNotificationWrapperNameProp,
  xi as coreNotificationWrapperSetup,
  hs as corePaginatorCountProp,
  vs as corePaginatorDeltaProp,
  ps as corePaginatorModelValueProp,
  ms as corePaginatorPageSizeProp,
  Ti as corePaginatorSetup,
  _s as coreProgressBarMaximumProp,
  Ps as coreProgressBarMinimumProp,
  $i as coreProgressBarSetup,
  ws as coreProgressBarValueProp,
  Ss as coreRadioButtonDisabledProp,
  ks as coreRadioButtonModelValueProp,
  Oi as coreRadioButtonSetup,
  xs as coreRadioButtonValueProp,
  As as coreScrollContainerAutoHideDelayProp,
  Es as coreScrollContainerAutoHideProp,
  Ms as coreScrollContainerClassesProp,
  $s as coreScrollContainerHorizontalProp,
  Bs as coreScrollContainerMinimumSizeProp,
  Ei as coreScrollContainerSetup,
  Os as coreScrollContainerVerticalProp,
  qs as coreSelectAllowClearProp,
  Ks as coreSelectCompareProp,
  Fs as coreSelectDisabledProp,
  Us as coreSelectHideOnSelectProp,
  Xs as coreSelectItemDisabledProp,
  Zs as coreSelectItemLabelProp,
  Bi as coreSelectItemSetup,
  Gs as coreSelectItemValueProp,
  Hs as coreSelectModelValueProp,
  Ws as coreSelectMultipleProp,
  Ai as coreSelectSetup,
  nr as coreSliderDisabledProp,
  sr as coreSliderMaximumProp,
  or as coreSliderMinimumProp,
  tr as coreSliderModelValueProp,
  Mi as coreSliderSetup,
  rr as coreSliderStepSizeProp,
  cr as coreStepsNavigatorModelValueProp,
  zi as coreStepsNavigatorSetup,
  ur as coreStepsNavigatorStepsProp,
  Ar as coreTabItemIdDisabledProp,
  Er as coreTabItemIdProp,
  Fi as coreTabItemSetup,
  kr as coreTableColumnComponentProp,
  Rr as coreTableColumnDataProp,
  Cr as coreTableColumnFormatterProp,
  Sr as coreTableColumnOrderProp,
  _r as coreTableColumnPropertyProp,
  ji as coreTableColumnSetup,
  Ir as coreTableColumnSortableProp,
  vr as coreTableDataProp,
  Dr as coreTableRowColumnsProp,
  gr as coreTableRowKeyProp,
  Vr as coreTableRowRowProp,
  Hi as coreTableRowSetup,
  br as coreTableSelectableProp,
  yr as coreTableSelectedRowsProp,
  Li as coreTableSetup,
  wr as coreTableSortProp,
  Mr as coreTabsNavigatorModelValueProp,
  Wi as coreTabsNavigatorSetup,
  Wr as coreTooltipHideDelayProp,
  jr as coreTooltipModelValueProp,
  qi as coreTooltipSetup,
  Fr as coreTooltipShowDelayProp,
  Hr as coreTooltipTriggerProp,
  Ni as createCoreStepItem,
  Xi as default,
  Ii as splitPlacement
};
