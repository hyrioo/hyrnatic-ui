var jt = Object.defineProperty;
var Ht = (e, t, n) => t in e ? jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var q = (e, t, n) => (Ht(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as h, reactive as R, defineComponent as D, h as $, getCurrentInstance as k, provide as H, inject as Y, ref as V, watch as F, Teleport as ut, shallowRef as dt, onMounted as ue, onUnmounted as de, nextTick as oe, createVNode as ne, Transition as Ft, isVNode as Wt, withDirectives as pe, mergeProps as Ie, vShow as qt, resolveDirective as me, onBeforeUnmount as Ut } from "vue";
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
  Object.values(t).forEach((o) => {
    o.install(e, n);
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
    var p = Math.round(l + r) - t, g = Math.round(a + i) - n;
    Math.abs(p) !== 1 && (l -= p), Math.abs(g) !== 1 && (a -= g);
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
  mounted(e, { value: t }) {
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
  const t = R({}), n = {}, o = {
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
    }, o = R({
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
    }, i = R({
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
    const s = R({
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
    const n = Y("collapse"), o = h(() => n.expandedItems.value.indexOf(e.id) !== -1), r = R({
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
    }, s = R({
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
  setup(e) {
    H("wrapper-name", e.name);
    const t = R({}), n = R({}), o = h(() => {
      const b = {};
      return Object.keys(n).forEach((y) => {
        b[y] = n[y].length;
      }), b;
    }), s = h(() => {
      const b = {};
      return Object.keys(n).forEach((y) => {
        b[y] = n[y].filter((w) => w.visible).length;
      }), b;
    }), r = (b) => b.charAt(0).toUpperCase() + b.slice(1), i = (b) => b.split("-").map((v) => r(v)).join(""), l = (b) => {
      const y = {};
      return Object.keys(b).forEach((w) => {
        y[`on${i(w)}`] = b[w];
      }), y;
    }, a = (b) => {
      const y = t[b];
      y.visible = !1;
    }, p = (b) => {
      const y = t[b];
      delete t[b], n[y.stack] = n[y.stack].filter((w) => w.id !== b);
    }, I = {
      addDialog: (b) => {
        const y = b;
        return y.resolve = (w = null) => {
          y.promise.resolve(w), a(y.id);
        }, y.reject = (w = null) => {
          y.promise.reject(w), a(y.id);
        }, y.transitionEnd = () => {
          p(y.id);
        }, y.visible = !0, y.id = xe.random(), y.compiledListeners = h(() => y.listeners ? l(y.listeners) : {}), n[y.stack] || (n[y.stack] = []), n[y.stack].push(y), t[y.id] = y, y;
      },
      getDialog: (b) => t[b],
      destroyDialog: (b) => {
        a(b);
      },
      getStackCount: (b) => h(() => o.value[b]),
      getStackVisibleCount: (b) => h(() => s.value[b]),
      getStackIndex: (b, y) => h(() => n[b].findIndex((w) => w.id === y))
    };
    return le[e.name] = I, {
      ...I,
      IDialogs: t
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
function _t(e, t, n, o) {
  const s = o && o.wrapper ? o.wrapper : "default", r = o && o.stack ? o.stack : "default";
  let i = null;
  return {
    promise: new Promise((a, p) => {
      i = le[s].addDialog({
        component: dt(e),
        listeners: n !== void 0 ? R(n) : null,
        props: t !== void 0 ? R(t) : null,
        stack: r,
        promise: { resolve: a, reject: p }
      });
    }),
    destroy: () => le[s].destroyDialog(i.id)
  };
}
function Fn(e, t, n, o) {
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
    props: R({
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
    }, r = Ct(), i = r.getDialog(n), l = R({
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
    }, s = R({
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
    const r = h(() => n.focusedItem.value === s), i = R({
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
    const n = V(!1), o = V(!1), s = V([]), r = V(null), i = h(() => s.value.filter((v) => v.disabled === !1)), l = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const a = h(() => e.disabled || !e.visible), p = (v) => {
      s.value.push(v);
    }, g = (v) => {
      s.value = U.remove(s.value, v);
    }, m = () => {
      n.value = !1;
    };
    F(() => e.visible, (v) => {
      v === !1 && m();
    });
    const f = () => {
      e.hideOnClick && m();
    }, c = (v, P) => {
      if (a.value)
        return !1;
      const x = () => r.value ? i.value.findIndex((B) => B === r.value) : null;
      !n.value && (v.key === "ArrowDown" || v.key === "ArrowUp" || v.key === "Enter") ? (v.key === "Enter" ? P === "main" ? t.emit("click", v) : P === "split" && (n.value = !n.value) : n.value = !n.value, v.preventDefault(), v.stopImmediatePropagation()) : v.key === "ArrowDown" ? (r.value = U.next(i.value, x()), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "ArrowUp" ? (r.value = U.prev(i.value, x()), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "Enter" && r.value ? (r.value.onClick(v), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "Tab" ? m() : v.key === "Escape" && (m(), v.preventDefault(), v.stopImmediatePropagation());
    }, d = () => {
      if (a.value)
        return !1;
      e.splitButton ? t.emit("click") : n.value = !n.value;
    }, u = () => {
      if (a.value)
        return !1;
      n.value = !n.value;
    }, I = (v) => {
      o.value = v;
    }, b = h(() => n.value || o.value);
    H("dropdown", {
      focusedItem: r,
      onItemClick: f,
      addItemInstance: p,
      removeItemInstance: g,
      menuVisible: h(() => n.value),
      itemsVisible: b
    });
    const y = R({
      menuVisible: h(() => n.value),
      disabled: h(() => e.disabled),
      splitButton: h(() => e.splitButton),
      focusedItem: h(() => r.value),
      clearFocusedItem: l,
      onKeyEvents: c,
      onButtonClick: d,
      onIconClick: u,
      onItemClick: f,
      onMenuTransitioning: I
    });
    return {
      close: m,
      slotProps: y,
      defaultRender: () => t.slots.default(y)
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
  const r = o.x + o.width / 2 - s.width / 2, i = o.y + o.height / 2 - s.height / 2, l = Pe(t), a = St(l), p = o[a] / 2 - s[a] / 2, g = fe(t), m = l === "x";
  let f;
  switch (g) {
    case "top":
      f = {
        x: r,
        y: o.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: i
      };
      break;
    case "left":
      f = {
        x: o.x - s.width,
        y: i
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (Rt(t)) {
    case "start":
      f[l] -= p * (n && m ? -1 : 1);
      break;
    case "end":
      f[l] += p * (n && m ? -1 : 1);
      break;
  }
  return f;
}
const ro = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: r = [],
    platform: i
  } = n, l = r.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  if (process.env.NODE_ENV !== "production") {
    if (i == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((u) => {
      let {
        name: I
      } = u;
      return I === "autoPlacement" || I === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!e || !t) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
  }
  let p = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: g,
    y: m
  } = je(p, o, a), f = o, c = {}, d = 0;
  for (let u = 0; u < l.length; u++) {
    const {
      name: I,
      fn: b
    } = l[u], {
      x: y,
      y: w,
      data: v,
      reset: P
    } = await b({
      x: g,
      y: m,
      initialPlacement: o,
      placement: f,
      strategy: s,
      middlewareData: c,
      rects: p,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (g = y ?? g, m = w ?? m, c = {
      ...c,
      [I]: {
        ...c[I],
        ...v
      }
    }, process.env.NODE_ENV !== "production" && d > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), P && d <= 50) {
      d++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (p = P.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : P.rects), {
        x: g,
        y: m
      } = je(p, f, a)), u = -1;
      continue;
    }
  }
  return {
    x: g,
    y: m,
    placement: f,
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
    boundary: p = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: m = "floating",
    altBoundary: f = !1,
    padding: c = 0
  } = t, d = lo(c), I = l[f ? m === "floating" ? "reference" : "floating" : m], b = ge(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(I))) == null || n ? I : I.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: p,
    rootBoundary: g,
    strategy: a
  })), y = ge(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: m === "floating" ? {
      ...i.floating,
      x: o,
      y: s
    } : i.reference,
    offsetParent: await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)),
    strategy: a
  }) : i[m]);
  return {
    top: b.top - y.top + d.top,
    bottom: y.bottom - b.bottom + d.bottom,
    left: b.left - y.left + d.left,
    right: y.right - b.right + d.right
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
        mainAxis: p = !0,
        crossAxis: g = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        flipAlignment: c = !0,
        ...d
      } = e, u = fe(o), b = m || (u === i || !c ? [be(i)] : mo(i)), y = [i, ...b], w = await kt(t, d), v = [];
      let P = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (p && v.push(w[u]), g) {
        const {
          main: j,
          cross: C
        } = fo(o, r, await (l.isRTL == null ? void 0 : l.isRTL(a.floating)));
        v.push(w[j], w[C]);
      }
      if (P = [...P, {
        placement: o,
        overflows: v
      }], !v.every((j) => j <= 0)) {
        var x, B;
        const j = ((x = (B = s.flip) == null ? void 0 : B.index) != null ? x : 0) + 1, C = y[j];
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
        switch (f) {
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
          fn: (I) => {
            let {
              x: b,
              y
            } = I;
            return {
              x: b,
              y
            };
          }
        },
        ...a
      } = e, p = {
        x: n,
        y: o
      }, g = await kt(t, a), m = Pe(fe(s)), f = Dt(m);
      let c = p[m], d = p[f];
      if (r) {
        const I = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", y = c + g[I], w = c - g[b];
        c = He(y, c, w);
      }
      if (i) {
        const I = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = d + g[I], w = d - g[b];
        d = He(y, d, w);
      }
      const u = l.fn({
        ...t,
        [m]: c,
        [f]: d
      });
      return {
        ...u,
        data: {
          x: u.x - n,
          y: u.y - o
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
        crossAxis: p = !0
      } = e, g = {
        x: n,
        y: o
      }, m = Pe(s), f = Dt(m);
      let c = g[m], d = g[f];
      const u = typeof l == "function" ? l(t) : l, I = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...u
      };
      if (a) {
        const P = m === "y" ? "height" : "width", x = r.reference[m] - r.floating[P] + I.mainAxis, B = r.reference[m] + r.reference[P] - I.mainAxis;
        c < x ? c = x : c > B && (c = B);
      }
      if (p) {
        var b, y, w, v;
        const P = m === "y" ? "width" : "height", x = ["top", "left"].includes(fe(s)), B = r.reference[f] - r.floating[P] + (x && (b = (y = i.offset) == null ? void 0 : y[f]) != null ? b : 0) + (x ? 0 : I.crossAxis), W = r.reference[f] + r.reference[P] + (x ? 0 : (w = (v = i.offset) == null ? void 0 : v[f]) != null ? w : 0) - (x ? I.crossAxis : 0);
        d < B ? d = B : d > W && (d = W);
      }
      return {
        [m]: c,
        [f]: d
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
  let a = 1, p = 1;
  t && Z(e) && (a = e.offsetWidth > 0 && ye(l.width) / e.offsetWidth || 1, p = e.offsetHeight > 0 && ye(l.height) / e.offsetHeight || 1);
  const g = G(e) ? Q(e) : window, m = !Ot() && n, f = (l.left + (m && (o = (s = g.visualViewport) == null ? void 0 : s.offsetLeft) != null ? o : 0)) / a, c = (l.top + (m && (r = (i = g.visualViewport) == null ? void 0 : i.offsetTop) != null ? r : 0)) / p, d = l.width / a, u = l.height / p;
  return {
    width: d,
    height: u,
    top: c,
    right: f + d,
    bottom: c + u,
    left: f,
    x: f,
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
    const p = Ot();
    (p || !p && t === "fixed") && (l = s.offsetLeft, a = s.offsetTop);
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
  const i = [...n === "clippingAncestors" ? So(t) : [].concat(n), o], l = i[0], a = i.reduce((p, g) => {
    const m = Ye(t, g, s);
    return p.top = re(m.top, p.top), p.right = qe(m.right, p.right), p.bottom = qe(m.bottom, p.bottom), p.left = re(m.left, p.left), p;
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
  } = o, a = s && !l, p = a || r ? [...G(e) ? ie(e) : e.contextElement ? ie(e.contextElement) : [], ...ie(t)] : [];
  p.forEach((d) => {
    a && d.addEventListener("scroll", n, {
      passive: !0
    }), r && d.addEventListener("resize", n);
  });
  let g = null;
  if (i) {
    let d = !0;
    g = new ResizeObserver(() => {
      d || n(), d = !1;
    }), G(e) && !l && g.observe(e), !G(e) && e.contextElement && !l && g.observe(e.contextElement), g.observe(t);
  }
  let m, f = l ? J(e) : null;
  l && c();
  function c() {
    const d = J(e);
    f && (d.x !== f.x || d.y !== f.y || d.width !== f.width || d.height !== f.height) && n(), f = d, m = requestAnimationFrame(c);
  }
  return n(), () => {
    var d;
    p.forEach((u) => {
      a && u.removeEventListener("scroll", n), r && u.removeEventListener("resize", n);
    }), (d = g) == null || d.disconnect(), g = null, l && cancelAnimationFrame(m);
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
    const n = V(null), o = V(null), s = R({
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
    const a = (c, d) => typeof c.contains == "function" ? c.contains(d) : !1, p = (c) => {
      if (!e.visible)
        return;
      const d = !n.value || c.target && !a(n.value, c.target), u = !e.reference || c.target && !a(e.reference, c.target);
      !d && !u || t.emit("clickOutside", {
        outsideFloating: d,
        outsideReference: u
      });
    }, g = () => {
      o.value && (o.value(), o.value = null);
    }, m = () => {
      t.emit("transitionStateChanged", !0);
    }, f = () => {
      t.emit("transitionStateChanged", !1), e.keep || g();
    };
    return de(() => {
      g();
    }), {
      middleware: r,
      floatingElement: n,
      style: s,
      onLeave: m,
      onAfterLeave: f,
      onDocumentClick: p
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
    const n = R({
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
      type: Object,
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
        selectionEnd: p
      } = e.input;
      t.emit("update:modelValue", l), oe(() => {
        e.type !== "number" && e.input.setSelectionRange(a, p);
      });
    }, s = R({
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
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = () => {
      e.input.focus();
    }, o = (c) => {
      let d = c;
      e.modelModifiers.capitalize && (d = d.charAt(0).toUpperCase() + d.slice(1));
      const {
        selectionStart: u
      } = e.input, {
        selectionEnd: I
      } = e.input;
      t.emit("update:modelValue", d), oe(() => {
        e.input.setSelectionRange(u, I);
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
    }, p = (c) => {
      if (e.disabled)
        return !1;
      const d = () => r.value ? e.items.findIndex((u) => u === r.value) : null;
      !s.value && (c.key === "ArrowDown" || c.key === "ArrowUp" || c.key === "Enter") && e.modelValue.length > 0 ? (a(), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowDown" && e.modelValue.length > 0 ? (r.value = U.next(e.items, d()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "ArrowUp" && e.modelValue.length > 0 ? (r.value = U.prev(e.items, d()), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Enter" && r.value ? (i(r.value), c.preventDefault(), c.stopImmediatePropagation()) : c.key === "Tab" ? l() : c.key === "Escape" && (l(), c.preventDefault(), c.stopImmediatePropagation());
    }, g = () => {
      r.value = null;
    }, m = R({
      modelValue: h({
        get: () => e.modelValue,
        set: (c) => o(c)
      }),
      disabled: h(() => e.disabled),
      items: h(() => e.items),
      focusedItem: h(() => r.value),
      listVisible: h(() => s.value && e.items.length > 0 && e.modelValue.length > 0),
      onItemClick: i,
      onKeyEvents: p,
      clearFocusedItem: g
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
  setup: function(e) {
    H("wrapper-name", e.name);
    const t = R({}), n = (d) => d.charAt(0).toUpperCase() + d.slice(1), o = (d) => d.split("-").map((b) => n(b)).join(""), s = (d) => {
      const u = {};
      return Object.keys(d).forEach((I) => {
        u[`on${o(I)}`] = d[I];
      }), u;
    }, r = (d) => {
      const u = t[d];
      u.visible = !1;
    }, i = (d) => {
      delete t[d];
    }, l = (d) => {
      r(d);
    }, a = (d) => {
      const u = t[d];
      u.durationTimeout !== null && u.options.resetDurationOnInteractivity && (clearTimeout(u.durationTimeout), u.durationTimeout = null);
    }, p = (d) => {
      a(d);
      const u = t[d];
      u.options.duration !== null && u.durationTimeout === null && (u.durationTimeout = setTimeout(() => {
        u.reject();
      }, u.options.duration));
    }, f = {
      addNotification: (d) => {
        const u = d;
        return u.resolve = (I = null) => {
          u.promise.resolve(I), r(u.id);
        }, u.reject = (I = null) => {
          u.promise.reject(I), r(u.id);
        }, u.transitionEnd = () => {
          i(u.id);
        }, u.visible = !0, u.id = xe.random(), u.compiledListeners = h(() => u.listeners ? s(u.listeners) : {}), u.durationTimeout = null, t[u.id] = u, p(u.id), u;
      },
      getNotification: (d) => t[d],
      destroyNotification: l,
      pauseDuration: a,
      resumeDuration: p
    };
    ce[e.name] = f;
    const c = R({
      name: h(() => e.name),
      notifications: h(() => t)
    });
    return {
      ...f,
      slotProps: c,
      INotifications: t
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
function Mt(e, t, n, o) {
  const s = { ...Bt, ...o }, r = s.wrapper;
  let i = null;
  return {
    promise: new Promise((a, p) => {
      i = ce[r].addNotification({
        component: dt(e),
        listeners: n !== void 0 ? R(n) : null,
        props: t !== void 0 ? R(t) : null,
        options: s,
        promise: { resolve: a, reject: p }
      });
    }),
    destroy: () => ce[r].destroyNotification(i.id)
  };
}
function is(e, t, n, o) {
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
    }, r = Nt(), i = R({
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
      const l = e.modelValue, a = n.value, p = [], g = [];
      let m;
      p.push(1);
      for (let f = l - e.delta; f <= l + e.delta; f++)
        f < a && f > 1 && p.push(f);
      return a !== 1 && p.push(a), p.forEach((f) => {
        m && (f - m === 2 ? g.push(m + 1) : f - m !== 1 && g.push(null)), g.push(f), m = f;
      }), g;
    }), s = (l) => {
      l !== null && t.emit("update:modelValue", l);
    }, r = R({
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
    }, s = R({
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
    const t = V(), n = V(), o = V(), s = V(), r = V(), i = R({
      start: null,
      startOffset: null
    }), l = R({
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
    }), p = h(() => a.trackHover || l.trackHover), g = h(() => a.dragging || l.dragging), m = V(e.autoHide);
    let f = null;
    const c = () => {
      !e.autoHide || g.value || p.value || (m.value = !1, f && clearTimeout(f), f = setTimeout(() => {
        m.value = !0;
      }, e.autoHideDelay));
    }, d = (_) => {
      _ ? (f && clearTimeout(f), m.value = !1) : c();
    };
    F(g, d), F(p, d);
    const u = (_, S) => {
      const O = _.getBoundingClientRect(), L = S.clientX, K = S.clientY, Te = O.left, zt = Te + O.width, $e = O.top, Lt = $e + O.height;
      return L >= Te && L <= zt && K >= $e && K <= Lt;
    }, I = (_) => {
      l.trackHover = n.value && l.visible && u(n.value, _), l.thumbHover = l.trackHover && u(o.value, _), a.trackHover = s.value && a.visible && u(s.value, _), a.thumbHover = a.trackHover && u(r.value, _);
    }, b = (_) => {
      if (l.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), O = n.value.getBoundingClientRect(), L = _.clientY - S.top - i.startOffset.top + (S.top - O.top), K = Math.min(100, Math.max(0, 100 / n.value.offsetHeight * L));
        t.value.scrollTop = t.value.scrollHeight * (K / 100), _.preventDefault(), _.stopImmediatePropagation();
      } else if (a.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), O = s.value.getBoundingClientRect(), L = _.clientX - S.left - i.startOffset.left + (S.left - O.left), K = Math.min(100, Math.max(0, 100 / s.value.offsetWidth * L));
        t.value.scrollLeft = t.value.scrollWidth * (K / 100), _.preventDefault(), _.stopImmediatePropagation();
      }
    }, y = (_) => {
      if (l.dragging = n.value && u(n.value, _), a.dragging = s.value && u(s.value, _), (l.dragging || a.dragging) && i.start === null) {
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
    }, w = () => {
      l.dragging = a.dragging = !1, i.startOffset = i.start = null;
    }, v = V(0), P = V(0), x = () => {
      if (l.visible = t.value.scrollHeight > t.value.offsetHeight, l.visible && n.value && o.value)
        if (t.value.scrollHeight !== v.value && (c(), v.value = t.value.scrollHeight), n.value.offsetHeight === 0)
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
      x(), document.addEventListener("mousemove", b), document.addEventListener("mouseup", w), t.value.addEventListener("scroll", W, {
        passive: !0
      });
    }), Ut(() => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", w), t.value.removeEventListener("scroll", W);
    });
    const j = (_, S, O) => {
      _ === "vertical" ? (n.value = S, o.value = O) : (s.value = S, r.value = O);
    }, C = R({
      anyHover: h(() => p.value),
      anyDragging: h(() => g.value),
      hidden: h(() => m.value)
    });
    return {
      wrapper: t,
      verticalBar: l,
      horizontalBar: a,
      anyHover: p,
      anyDragging: g,
      onMouseMove: I,
      onMouseDown: y,
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
    M(e, nt) || (pt(e, Ls, t), z(e, zs), N(e, nt));
  }
}, ke = {
  getProperty(e, t) {
    let n = e;
    return t.split(".").every((s) => n[s] === void 0 ? null : (n = n[s], n !== null)), n;
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
    const n = V(!1), o = V(!1), s = V([]), r = V(null), i = h(() => {
      const C = [].concat(e.modelValue);
      return s.value.filter((_) => C.indexOf(_.value) !== -1 ? !0 : e.compare ? typeof e.compare == "string" ? C.find((O) => (O !== null && ke.getProperty(O, e.compare)) === (_.value !== null && ke.getProperty(_.value, e.compare))) : e.compare(C, _.value) : !1);
    }), l = h(() => i.value.length > 0), a = h(() => {
      const C = [];
      return i.value.forEach((_) => {
        C.push(_.label);
      }), C.join(", ");
    }), p = V(""), g = V(), m = h(() => s.value.filter((C) => C.disabled === !1)), f = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const c = (C) => {
      s.value.push(C);
    }, d = (C) => {
      s.value = U.remove(s.value, C);
    }, u = () => {
      n.value = !1;
    }, I = (C) => {
      const {
        value: _
      } = C;
      e.hideOnSelect && !e.multiple && u();
      let S = _;
      e.multiple && (S = [], e.modelValue !== void 0 && (S = S.concat(e.modelValue)), S.includes(_) ? S.splice(S.indexOf(_), 1) : S.push(_)), r.value = C, t.emit("update:modelValue", S);
    }, b = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, y = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, w = (C) => {
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
        I(r.value), C.preventDefault(), C.stopImmediatePropagation();
      else if (C.key === "Tab")
        u();
      else if (C.key === "Escape")
        u(), C.preventDefault(), C.stopImmediatePropagation();
      else {
        clearTimeout(g.value);
        const S = C.key.toLowerCase();
        if (S.match(/^\p{L}$/u)) {
          let L = null;
          S == p.value ? L = r.value ? v.value.findIndex((K) => K === r.value) : null : p.value += S, r.value = U.next(v.value, L), g.value = setTimeout(P, 1500);
        }
      }
    }, v = h(() => s.value.filter((C) => C.label.toLowerCase().startsWith(p.value))), P = () => {
      p.value = "";
    }, x = (C) => {
      o.value = C;
    }, B = h(() => n.value || o.value);
    H("select", {
      selectedItems: i,
      focusedItem: r,
      onItemClick: I,
      addItemInstance: c,
      removeItemInstance: d,
      menuVisible: h(() => n.value),
      itemsVisible: B
    });
    const W = R({
      modelValue: h(() => e.modelValue),
      disabled: h(() => e.disabled),
      allowClear: h(() => e.allowClear),
      menuVisible: h(() => n.value),
      focusedItem: h(() => r.value),
      clearFocusedItem: f,
      anythingSelected: l,
      selectedItems: i,
      selectedText: a,
      clearValue: y,
      close: u,
      onButtonClick: b,
      onItemClick: I,
      onKeyEvents: w,
      onMenuTransitioning: x
    });
    return {
      close: u,
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
    const n = Y("select"), o = R({
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
    }, l = R({
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
    }, r = R({
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
  return R({
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
    const n = h(() => e.steps.findIndex((f) => f.id === e.modelValue)), o = h(() => e.steps.filter((f) => f.visible)), s = h(() => {
      const f = [];
      return e.steps.forEach((c) => {
        const d = e.steps.findIndex((u) => u.id === c.id);
        f.push({
          id: c.id,
          visible: c.visible,
          validator: c.validator,
          data: c.data,
          stepIndex: d,
          isCurrent: c.id === e.modelValue,
          isDone: n.value !== -1 && d < n.value,
          isLast: o.value.findIndex((u) => u.id === c.id) === o.value.length - 1,
          isLocked: !1
        });
      }), f;
    }), r = h(() => s.value[n.value]), i = h(() => s.value.filter((f) => f.visible)), l = (f) => {
      t.emit("update:modelValue", f.id);
    }, a = () => {
      if (!(typeof r.value.validator == "function" && !r.value.validator())) {
        const f = U.next(s.value, n.value, (c) => c.visible);
        t.emit("update:modelValue", f.id);
      }
    }, p = () => {
      const f = U.prev(s.value, n.value, (c) => c.visible);
      t.emit("update:modelValue", f.id);
    }, g = R({
      steps: s,
      currentStep: r,
      currentIndex: n,
      visibleSteps: i,
      nextStep: a,
      previousStep: p,
      onStepClick: l
    });
    return {
      nextStep: a,
      previousStep: p,
      visibleSteps: i,
      slotProps: g,
      defaultRender: () => t.slots.default(g)
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
      const w = n.value.filter((P) => P.selected).length, v = n.value.filter((P) => P.selectable).length;
      return w === v && v > 0;
    }), s = h(() => n.value.filter((w) => w.selected).length > 0), r = h(() => n.value.filter((w) => w.selectable).length > 0), i = (w, v) => {
      const P = n.value.find((x) => x.id === w);
      if (P) {
        const x = e.selectedRows.findIndex((B) => B === P.data);
        P.selected = v, x === -1 && v ? t.emit("update:selectedRows", [...e.selectedRows, P.data]) : x !== -1 && !v && t.emit("update:selectedRows", e.selectedRows.filter((B) => B !== P.data));
      }
    }, l = () => {
      const w = !o.value, v = [];
      n.value.forEach((P) => {
        w ? P.selectable && (v.push(P.data), P.selected = !0) : P.selected = !1;
      }), t.emit("update:selectedRows", v);
    };
    F([() => e.selectedRows, () => [...e.selectedRows]], () => {
      n.value.forEach((w) => {
        w.selected = e.selectedRows.findIndex((v) => v === w.data) !== -1;
      });
    }, {
      immediate: !0
    });
    const a = () => {
      const w = n.value;
      n.value = e.data.map((v) => {
        let P = w.find((x) => x.data[e.rowKey] === v[e.rowKey]);
        return P === void 0 ? (P = new hr(v[e.rowKey], v, e, i), P.selected = e.selectedRows.findIndex((x) => x === P.data) !== -1) : P.data !== v && (P.data = v), P;
      });
    };
    F([() => e.data, () => [...e.data]], () => {
      a();
    }, {
      immediate: !0
    });
    const p = (w) => {
      let v;
      e.sort.key === w ? v = e.sort.direction === "desc" ? "asc" : "desc" : v = "desc";
      const P = {
        key: w,
        direction: v
      };
      t.emit("update:sort", P);
    }, g = () => {
      t.emit("update:sort", {
        key: null,
        direction: "desc"
      });
    }, m = V([]);
    let f = null;
    const c = () => {
      f !== null && (m.value = f, f = null);
    }, d = (w, v, P) => {
      f === null && (f = [].concat(m.value)), f.push(new mr(w, v, P)), oe(c);
    }, u = (w) => {
      f === null && (f = m.value), f = f.filter((v) => v.id !== w), oe(c);
    }, I = h(() => m.value.sort((w, v) => w.order - v.order));
    H("table", {
      setSorting: p,
      setRowSelectionState: i,
      addColumn: d,
      removeColumn: u
    });
    const b = R({
      orderedColumns: I,
      rows: n,
      allRowsSelected: o,
      anyRowsSelected: s,
      anySelectable: r,
      toggleAllSelection: l,
      setRowSelectionState: i,
      setSorting: p,
      clearSorting: g
    });
    return {
      toggleAllSelection: l,
      setSorting: p,
      clearSorting: g,
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
    props: R({
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
  setup(e) {
    const t = Y("table"), n = xe.random();
    return ue(() => {
      t.addColumn(n, e.component, e.data);
    }), de(() => {
      t.removeColumn(n);
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
    const n = Y("coreTabsNavigator"), o = R({
      id: e.id
    });
    ue(() => {
      n.addTabInstance(o);
    }), de(() => {
      n.removeTabInstance(o);
    });
    const s = h(() => o === n.activeTab.value), r = () => {
      e.disabled || n.onTabClick(o);
    }, i = R({
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
    const n = V([]), o = h(() => n.value.find((p) => p.id === e.modelValue));
    H("coreTabsNavigator", {
      activeTab: o,
      addTabInstance: (p) => {
        n.value.push(p);
      },
      removeTabInstance: (p) => {
        n.value = U.remove(n.value, p);
      },
      onTabClick: (p) => {
        t.emit("update:modelValue", p.id);
      }
    });
    const l = R({
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
      type: Object,
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
      s && clearTimeout(s), r && clearTimeout(r), s = setTimeout(() => {
        o(!0);
      }, e.showDelay);
    }, l = () => {
      s && clearTimeout(s), r && clearTimeout(r), r = setTimeout(() => {
        o(!1);
      }, e.hideDelay);
    }, a = (c, d, u) => {
      c.addEventListener(d, i), c.addEventListener(u, l);
    }, p = (c, d, u) => {
      c.removeEventListener(d, i), c.removeEventListener(u, l), o(!1), s && clearTimeout(s), r && clearTimeout(r);
    }, g = (c) => {
      if (c === "hover")
        return {
          show: "mouseenter",
          hide: "mouseleave"
        };
    };
    F(() => e.reference, (c, d) => {
      const u = g(e.trigger);
      d && u && p(d, u.show, u.hide), c && u && a(c, u.show, u.hide);
    }), F(() => e.trigger, (c, d) => {
      if (d) {
        const u = g(d);
        u && p(e.reference, u.show, u.hide);
      }
      if (c) {
        const u = g(c);
        u && a(e.reference, u.show, u.hide);
      }
    });
    const m = R({
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
    const n = R({
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
    const p = si(o), g = { x: s, y: r }, m = ai(i), f = ii(i), c = li(m), d = await a.getDimensions(n), u = m === "y" ? "top" : "left", I = m === "y" ? "bottom" : "right";
    let b = l.reference;
    e.reference && (b = (await a.getClientRects(e.reference))[0]);
    const y = b[c] + b[m] - g[m] - l.floating[c], w = g[m] - b[m], v = await ((L = a.getOffsetParent) == null ? void 0 : L.call(a, n));
    let P = v ? m === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
    P === 0 && (P = l.floating[c]);
    const x = y / 2 - w / 2, B = p[u], W = P - d[c] - p[I], j = P / 2 - d[c] / 2 + x, C = ci(B, j, W), O = (f === "start" ? p[u] : p[I]) > 0 && j !== C && b[c] <= l.floating[c] ? j < B ? B - j : W - j : 0;
    return {
      [m]: g[m] - O,
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
