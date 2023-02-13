var Nt = Object.defineProperty;
var jt = (e, t, n) => t in e ? Nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var q = (e, t, n) => (jt(e, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as h, reactive as C, defineComponent as $, h as E, getCurrentInstance as k, provide as j, inject as K, ref as D, watch as F, Teleport as ut, shallowRef as dt, onMounted as ue, onUnmounted as de, nextTick as oe, createVNode as ne, Transition as Ft, isVNode as Wt, withDirectives as pe, mergeProps as Re, vShow as qt, resolveDirective as me, onBeforeUnmount as Ut } from "vue";
function M(e, t) {
  return e.__hyrnatic_ui_installed && e.__hyrnatic_ui_installed.indexOf(t) !== -1;
}
function z(e, t) {
  e.__hyrnatic_ui_installed || (e.__hyrnatic_ui_installed = []), e.__hyrnatic_ui_installed.push(t);
}
function H(e, t) {
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
const ni = {
  installComponents: H,
  installComponentAlias: Kt,
  installDependencies: pt,
  installDirectives: ft,
  isModuleInstalled: M,
  markModuleAsInstalled: z
}, Gt = {
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
}, Yt = {
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
}(), Ce = typeof window < "u" && typeof document < "u" && window.document === document, he = function() {
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
    var c = Date.now();
    if (n) {
      if (c - s < Zt)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(i, t);
    s = c;
  }
  return l;
}
var Qt = 20, en = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], tn = typeof MutationObserver < "u", nn = (
  /** @class */
  function() {
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
      !Ce || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), tn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ce || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, s = en.some(function(r) {
        return !!~o.indexOf(r);
      });
      s && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ht = function(e, t) {
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
function Ee(e) {
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
  var o = se(e).getComputedStyle(e), s = on(o), r = s.left + s.right, i = s.top + s.bottom, l = ve(o.width), c = ve(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + r) !== t && (l -= Ee(o, "left", "right") + r), Math.round(c + i) !== n && (c -= Ee(o, "top", "bottom") + i)), !an(e)) {
    var f = Math.round(l + r) - t, g = Math.round(c + i) - n;
    Math.abs(f) !== 1 && (l -= f), Math.abs(g) !== 1 && (c -= g);
  }
  return we(s.left, s.top, l, c);
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
  return Ce ? ln(e) ? sn(e) : rn(e) : vt;
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
var dn = (
  /** @class */
  function() {
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
  }()
), fn = (
  /** @class */
  function() {
    function e(t, n) {
      var o = un(n);
      ht(this, { target: t, contentRect: o });
    }
    return e;
  }()
), pn = (
  /** @class */
  function() {
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
  }()
), gt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new mt(), bt = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = nn.getInstance(), o = new pn(t, n, this);
      gt.set(this, o);
    }
    return e;
  }()
);
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
const Se = {}, Oe = new mn((e) => {
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
    Oe.observe(e), e.__resize_callback_id__ = hn++, Se[e.__resize_callback_id__] = t;
  },
  beforeUnmount(e) {
    Oe.unobserve(e), e.__resize_callback_id__ && (delete Se[e.__resize_callback_id__], delete e.__resize_callback_id__);
  }
}, Be = "core-common", gn = {
  ClickOutside: Gt,
  DocumentEvent: Yt,
  Resize: vn
}, yt = {
  install: (e, t) => {
    M(e, Be) || (ft(e, gn), z(e, Be));
  }
}, O = {
  as: {
    type: String,
    default: null
  }
}, B = {
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
  const t = C({}), n = {}, o = {
    /**
     * Render the renderless spinner with a wrapper
     * @param tag HTML tag to use as wrapper
     * @param func Callback to apply properties to the wrapper element
     */
    as(s, r = bn) {
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
function oi() {
  return T(k());
}
const _n = /* @__PURE__ */ $({
  name: "hr-button",
  props: {
    ...O,
    ...B,
    ...wn,
    ...yn,
    ...Pn
  },
  emits: ["click"],
  setup(e, t) {
    const n = (r) => {
      !e.disabled && !e.loading && e.visible && t.emit("click", r);
    }, o = C({
      disabled: h(() => e.disabled),
      loading: h(() => e.loading),
      onClick: n
    }), s = () => t.slots.default(o);
    return () => {
      if (e.as) {
        const r = e.asProps ? e.asProps(o) : {};
        return E(e.as, {
          ...r
        }, s());
      }
      return s();
    };
  }
}), Ae = "core-buttons", In = {
  Button: _n
}, Rn = {
  install: (e, t) => {
    M(e, Ae) || (H(e, In), z(e, Ae));
  }
}, Cn = {
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
}, $n = {
  indeterminate: {
    type: Boolean,
    default: !1
  }
};
function si() {
  return T(k());
}
const Dn = /* @__PURE__ */ $({
  name: "hr-checkbox",
  props: {
    ...O,
    ...B,
    ...kn,
    ...xn,
    ...$n,
    ...Cn,
    ...Sn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => Array.isArray(e.modelValue) ? e.modelValue.indexOf(e.value) > -1 : e.modelValue === e.value), o = () => {
      if (Array.isArray(e.modelValue)) {
        const c = e.modelValue.slice(0);
        c.push(e.value), t.emit("update:modelValue", c);
      } else
        t.emit("update:modelValue", e.value);
    }, s = () => {
      if (Array.isArray(e.modelValue)) {
        const c = e.modelValue.slice(0);
        c.splice(c.indexOf(e.value), 1), t.emit("update:modelValue", c);
      } else
        e.value === !0 ? t.emit("update:modelValue", !1) : t.emit("update:modelValue", null);
    }, r = () => {
      !e.disabled && e.visible && (n.value ? s() : o());
    }, i = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Me = "core-checkboxes", Tn = {
  Checkbox: Dn
}, Vn = {
  install: (e, t) => {
    M(e, Me) || (H(e, Tn), z(e, Me));
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
}, En = {
  accordion: {
    type: Boolean,
    default: !1
  }
}, On = {
  modelValue: {
    type: [Array, String, Number],
    required: !0
  }
};
function ri() {
  return T(k());
}
const Bn = /* @__PURE__ */ $({
  name: "hr-collapse",
  props: {
    ...O,
    ...B,
    ...En,
    ...On
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => [].concat(e.modelValue));
    j("collapse", {
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
    const s = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), An = {
  id: {
    type: String,
    required: !0
  }
};
function ii() {
  return T(k());
}
const Mn = /* @__PURE__ */ $({
  name: "hr-collapse-item",
  props: {
    ...O,
    ...B,
    ...An
  },
  setup(e, t) {
    const n = K("collapse"), o = h(() => n.expandedItems.value.indexOf(e.id) !== -1), r = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), zn = {
  modelValue: {
    type: Boolean,
    default: !1
  }
};
function li() {
  return T(k());
}
const Ln = /* @__PURE__ */ $({
  name: "hr-inline-collapse",
  props: {
    ...O,
    ...B,
    ...zn
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(e.modelValue);
    F(() => e.modelValue, (i) => {
      n.value = i;
    });
    const o = () => {
      n.value = !n.value, t.emit("update:modelValue", !e.modelValue);
    }, s = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), ze = "core-collapses", Hn = {
  Collapse: Bn,
  CollapseItem: Mn,
  InlineCollapse: Ln
}, Nn = {
  install: (e, t) => {
    M(e, ze) || (H(e, Hn), z(e, ze));
  }
}, $e = {
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
}, le = {}, jn = /* @__PURE__ */ $({
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
    j("wrapper-name", e.name);
    const t = C({}), n = C({}), o = h(() => {
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
    }, c = (b) => {
      const y = t[b];
      y.visible = !1;
    }, f = (b) => {
      const y = t[b];
      delete t[b], n[y.stack] = n[y.stack].filter((w) => w.id !== b);
    }, R = {
      addDialog: (b) => {
        const y = b;
        return y.resolve = (w = null) => {
          y.promise.resolve(w), c(y.id);
        }, y.reject = (w = null) => {
          y.promise.reject(w), c(y.id);
        }, y.transitionEnd = () => {
          f(y.id);
        }, y.visible = !0, y.id = $e.random(), y.compiledListeners = h(() => y.listeners ? l(y.listeners) : {}), n[y.stack] || (n[y.stack] = []), n[y.stack].push(y), t[y.id] = y, y;
      },
      getDialog: (b) => t[b],
      destroyDialog: (b) => {
        c(b);
      },
      getStackCount: (b) => h(() => o.value[b]),
      getStackVisibleCount: (b) => h(() => s.value[b]),
      getStackIndex: (b, y) => h(() => n[b].findIndex((w) => w.id === y))
    };
    return le[e.name] = R, {
      ...R,
      IDialogs: t
    };
  },
  render() {
    return E(ut, {
      to: this.$props.teleport
    }, Object.values(this.IDialogs).map((e) => E(e.component, {
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
    promise: new Promise((c, f) => {
      i = le[s].addDialog({
        component: dt(e),
        listeners: n !== void 0 ? C(n) : null,
        props: t !== void 0 ? C(t) : null,
        stack: r,
        promise: { resolve: c, reject: f }
      });
    }),
    destroy: () => le[s].destroyDialog(i.id)
  };
}
function Fn(e, t, n, o) {
  return _t(e, t, n, o).promise;
}
function It(e = "default") {
  return le[e];
}
function Rt(e) {
  const t = K("wrapper-name");
  return le[t].getDialog(e);
}
function Wn() {
  const e = k(), t = Rt(e.vnode.key);
  return j("dialog-id", e.vnode.key), j("dialog-resolve", t.resolve), j("dialog-reject", t.reject), j("dialog-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  create: _t,
  createPromise: Fn,
  getDialog: Rt,
  getWrapper: It,
  setupDialog: Wn
}, Symbol.toStringTag, { value: "Module" })), qn = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function ci(e = [], t = []) {
  const n = k();
  return {
    props: C({
      ...wt(n.props, e)
    }),
    listeners: Pt(n, t)
  };
}
const Un = /* @__PURE__ */ $({
  name: "hr-dialog",
  props: {
    ...qn
  },
  setup(e, t) {
    const n = K("dialog-id");
    n || console.warn("You must call DialogManager.setupDialog() in the dialog setup");
    const o = K("dialog-reject"), s = () => {
      o(null);
    }, r = It(), i = r.getDialog(n), l = C({
      visible: h(() => e.visible),
      stackIndex: r.getStackIndex(i.stack, i.id),
      stackCount: r.getStackCount(i.stack),
      visibleStackCount: r.getStackVisibleCount(i.stack),
      close: s
    });
    return () => t.slots.default(l);
  }
}), Le = "core-dialogs", Kn = {
  Dialog: Un,
  DialogWrapper: jn
}, Gn = {
  install: (e, t) => {
    M(e, Le) || (H(e, Kn), z(e, Le));
  }
}, Yn = {
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
function ui() {
  return T(k());
}
const Zn = /* @__PURE__ */ $({
  name: "hr-dropdown-item",
  props: {
    ...O,
    ...B,
    ...Yn,
    ...Xn
  },
  emits: ["click"],
  setup(e, t) {
    const n = K("dropdown"), o = (c) => {
      e.disabled || (t.emit("click", c), n.onItemClick(c));
    }, s = C({
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
    const r = h(() => n.focusedItem.value === s), i = C({
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
        return E(this.$props.as, {
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
function di() {
  return T(k());
}
const no = /* @__PURE__ */ $({
  name: "hr-dropdown",
  props: {
    ...O,
    ...B,
    ...Jn,
    ...Qn,
    ...eo,
    ...to
  },
  emits: ["click", "focusedItemChanged"],
  setup(e, t) {
    const n = D(!1), o = D(!1), s = D([]), r = D(null), i = h(() => s.value.filter((v) => v.disabled === !1)), l = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const c = h(() => e.disabled || !e.visible), f = (v) => {
      s.value.push(v);
    }, g = (v) => {
      s.value = U.remove(s.value, v);
    }, d = () => {
      n.value = !1;
    };
    F(() => e.visible, (v) => {
      v === !1 && d();
    });
    const m = () => {
      e.hideOnClick && d();
    }, a = (v, P) => {
      if (c.value)
        return !1;
      const x = () => r.value ? i.value.findIndex((A) => A === r.value) : null;
      !n.value && (v.key === "ArrowDown" || v.key === "ArrowUp" || v.key === "Enter") ? (v.key === "Enter" ? P === "main" ? t.emit("click", v) : P === "split" && (n.value = !n.value) : n.value = !n.value, v.preventDefault(), v.stopImmediatePropagation()) : v.key === "ArrowDown" ? (r.value = U.next(i.value, x()), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "ArrowUp" ? (r.value = U.prev(i.value, x()), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "Enter" && r.value ? (r.value.onClick(v), v.preventDefault(), v.stopImmediatePropagation()) : v.key === "Tab" ? d() : v.key === "Escape" && (d(), v.preventDefault(), v.stopImmediatePropagation());
    }, p = () => {
      if (c.value)
        return !1;
      e.splitButton ? t.emit("click") : n.value = !n.value;
    }, u = () => {
      if (c.value)
        return !1;
      n.value = !n.value;
    }, R = (v) => {
      o.value = v;
    }, b = h(() => n.value || o.value);
    j("dropdown", {
      focusedItem: r,
      onItemClick: m,
      addItemInstance: f,
      removeItemInstance: g,
      menuVisible: h(() => n.value),
      itemsVisible: b
    });
    const y = C({
      menuVisible: h(() => n.value),
      disabled: h(() => e.disabled),
      splitButton: h(() => e.splitButton),
      focusedItem: h(() => r.value),
      clearFocusedItem: l,
      onKeyEvents: a,
      onButtonClick: p,
      onIconClick: u,
      onItemClick: m,
      onMenuTransitioning: R
    });
    return {
      close: d,
      slotProps: y,
      defaultRender: () => t.slots.default(y)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), He = "core-dropdowns", oo = {
  Dropdown: no,
  DropdownItem: Zn
}, so = {
  install: (e, t) => {
    M(e, He) || (H(e, oo), z(e, He));
  }
};
function fe(e) {
  return e.split("-")[0];
}
function Ct(e) {
  return e.split("-")[1];
}
function Pe(e) {
  return ["top", "bottom"].includes(fe(e)) ? "x" : "y";
}
function St(e) {
  return e === "y" ? "height" : "width";
}
function Ne(e, t, n) {
  let { reference: o, floating: s } = e;
  const r = o.x + o.width / 2 - s.width / 2, i = o.y + o.height / 2 - s.height / 2, l = Pe(t), c = St(l), f = o[c] / 2 - s[c] / 2, g = l === "x";
  let d;
  switch (fe(t)) {
    case "top":
      d = { x: r, y: o.y - s.height };
      break;
    case "bottom":
      d = { x: r, y: o.y + o.height };
      break;
    case "right":
      d = { x: o.x + o.width, y: i };
      break;
    case "left":
      d = { x: o.x - s.width, y: i };
      break;
    default:
      d = { x: o.x, y: o.y };
  }
  switch (Ct(t)) {
    case "start":
      d[l] -= f * (n && g ? -1 : 1);
      break;
    case "end":
      d[l] += f * (n && g ? -1 : 1);
  }
  return d;
}
const ro = async (e, t, n) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: r = [], platform: i } = n, l = r.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let f = await i.getElementRects({ reference: e, floating: t, strategy: s }), { x: g, y: d } = Ne(f, o, c), m = o, a = {}, p = 0;
  for (let u = 0; u < l.length; u++) {
    const { name: R, fn: b } = l[u], { x: y, y: w, data: v, reset: P } = await b({ x: g, y: d, initialPlacement: o, placement: m, strategy: s, middlewareData: a, rects: f, platform: i, elements: { reference: e, floating: t } });
    g = y ?? g, d = w ?? d, a = { ...a, [R]: { ...a[R], ...v } }, P && p <= 50 && (p++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (f = P.rects === !0 ? await i.getElementRects({ reference: e, floating: t, strategy: s }) : P.rects), { x: g, y: d } = Ne(f, m, c)), u = -1);
  }
  return { x: g, y: d, placement: m, strategy: s, middlewareData: a };
};
function io(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ge(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function kt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: r, rects: i, elements: l, strategy: c } = e, { boundary: f = "clippingAncestors", rootBoundary: g = "viewport", elementContext: d = "floating", altBoundary: m = !1, padding: a = 0 } = t, p = io(a), u = l[m ? d === "floating" ? "reference" : "floating" : d], R = ge(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(u))) == null || n ? u : u.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)), boundary: f, rootBoundary: g, strategy: c })), b = ge(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d === "floating" ? { ...i.floating, x: o, y: s } : i.reference, offsetParent: await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), strategy: c }) : i[d]);
  return { top: R.top - b.top + p.top, bottom: b.bottom - R.bottom + p.bottom, left: R.left - b.left + p.left, right: b.right - R.right + p.right };
}
const lo = Math.min, ao = Math.max;
function je(e, t, n) {
  return ao(e, lo(t, n));
}
const co = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(e) {
  return e.replace(/left|right|bottom|top/g, (t) => co[t]);
}
function uo(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ct(e), s = Pe(e), r = St(s);
  let i = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = be(i)), { main: i, cross: be(i) };
}
const fo = { start: "end", end: "start" };
function Fe(e) {
  return e.replace(/start|end/g, (t) => fo[t]);
}
const po = ["top", "right", "bottom", "left"];
po.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const xt = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: o, middlewareData: s, rects: r, initialPlacement: i, platform: l, elements: c } = t, { mainAxis: f = !0, crossAxis: g = !0, fallbackPlacements: d, fallbackStrategy: m = "bestFit", flipAlignment: a = !0, ...p } = e, u = fe(o), R = d || (u === i || !a ? [be(i)] : function(L) {
      const N = be(L);
      return [Fe(L), N, Fe(N)];
    }(i)), b = [i, ...R], y = await kt(t, p), w = [];
    let v = ((n = s.flip) == null ? void 0 : n.overflows) || [];
    if (f && w.push(y[u]), g) {
      const { main: L, cross: N } = uo(o, r, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
      w.push(y[L], y[N]);
    }
    if (v = [...v, { placement: o, overflows: w }], !w.every((L) => L <= 0)) {
      var P, x;
      const L = ((P = (x = s.flip) == null ? void 0 : x.index) != null ? P : 0) + 1, N = b[L];
      if (N)
        return { data: { index: L, overflows: v }, reset: { placement: N } };
      let _ = "bottom";
      switch (m) {
        case "bestFit": {
          var A;
          const I = (A = v.map((S) => [S, S.overflows.filter((V) => V > 0).reduce((V, W) => V + W, 0)]).sort((S, V) => S[1] - V[1])[0]) == null ? void 0 : A[0].placement;
          I && (_ = I);
          break;
        }
        case "initialPlacement":
          _ = i;
      }
      if (o !== _)
        return { reset: { placement: _ } };
    }
    return {};
  } };
};
function $t(e) {
  return e === "x" ? "y" : "x";
}
const Dt = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: s } = t, { mainAxis: r = !0, crossAxis: i = !1, limiter: l = { fn: (R) => {
      let { x: b, y } = R;
      return { x: b, y };
    } }, ...c } = e, f = { x: n, y: o }, g = await kt(t, c), d = Pe(fe(s)), m = $t(d);
    let a = f[d], p = f[m];
    if (r) {
      const R = d === "y" ? "bottom" : "right";
      a = je(a + g[d === "y" ? "top" : "left"], a, a - g[R]);
    }
    if (i) {
      const R = m === "y" ? "bottom" : "right";
      p = je(p + g[m === "y" ? "top" : "left"], p, p - g[R]);
    }
    const u = l.fn({ ...t, [d]: a, [m]: p });
    return { ...u, data: { x: u.x - n, y: u.y - o } };
  } };
}, mo = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: o, placement: s, rects: r, middlewareData: i } = t, { offset: l = 0, mainAxis: c = !0, crossAxis: f = !0 } = e, g = { x: n, y: o }, d = Pe(s), m = $t(d);
    let a = g[d], p = g[m];
    const u = typeof l == "function" ? l(t) : l, R = typeof u == "number" ? { mainAxis: u, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...u };
    if (c) {
      const P = d === "y" ? "height" : "width", x = r.reference[d] - r.floating[P] + R.mainAxis, A = r.reference[d] + r.reference[P] - R.mainAxis;
      a < x ? a = x : a > A && (a = A);
    }
    if (f) {
      var b, y, w, v;
      const P = d === "y" ? "width" : "height", x = ["top", "left"].includes(fe(s)), A = r.reference[m] - r.floating[P] + (x && (b = (y = i.offset) == null ? void 0 : y[m]) != null ? b : 0) + (x ? 0 : R.crossAxis), L = r.reference[m] + r.reference[P] + (x ? 0 : (w = (v = i.offset) == null ? void 0 : v[m]) != null ? w : 0) - (x ? R.crossAxis : 0);
      p < A ? p = A : p > L && (p = L);
    }
    return { [d]: a, [m]: p };
  } };
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
function Y(e) {
  return Q(e).getComputedStyle(e);
}
function te(e) {
  return Tt(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Vt() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function X(e) {
  return e instanceof Q(e).HTMLElement;
}
function Z(e) {
  return e instanceof Q(e).Element;
}
function We(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Q(e).ShadowRoot || e instanceof ShadowRoot;
}
function _e(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: s } = Y(e);
  return /auto|scroll|overlay|hidden/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function ho(e) {
  return ["table", "td", "th"].includes(te(e));
}
function ke(e) {
  const t = /firefox/i.test(Vt()), n = Y(e), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!o && o !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((s) => n.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const r = n.contain;
    return r != null && r.includes(s);
  });
}
function Et() {
  return !/^((?!chrome|android).)*safari/i.test(Vt());
}
function De(e) {
  return ["html", "body", "#document"].includes(te(e));
}
const qe = Math.min, re = Math.max, ye = Math.round;
function J(e, t, n) {
  var o, s, r, i;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect();
  let c = 1, f = 1;
  t && X(e) && (c = e.offsetWidth > 0 && ye(l.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && ye(l.height) / e.offsetHeight || 1);
  const g = Z(e) ? Q(e) : window, d = !Et() && n, m = (l.left + (d && (o = (s = g.visualViewport) == null ? void 0 : s.offsetLeft) != null ? o : 0)) / c, a = (l.top + (d && (r = (i = g.visualViewport) == null ? void 0 : i.offsetTop) != null ? r : 0)) / f, p = l.width / c, u = l.height / f;
  return { width: p, height: u, top: a, right: m + p, bottom: a + u, left: m, x: m, y: a };
}
function ee(e) {
  return (t = e, (t instanceof Q(t).Node ? e.ownerDocument : e.document) || window.document).documentElement;
  var t;
}
function Ie(e) {
  return Z(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ot(e) {
  return J(ee(e)).left + Ie(e).scrollLeft;
}
function vo(e, t, n) {
  const o = X(t), s = ee(t), r = J(e, o && function(c) {
    const f = J(c);
    return ye(f.width) !== c.offsetWidth || ye(f.height) !== c.offsetHeight;
  }(t), n === "fixed");
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && n !== "fixed")
    if ((te(t) !== "body" || _e(s)) && (i = Ie(t)), X(t)) {
      const c = J(t, !0);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      s && (l.x = Ot(s));
  return { x: r.left + i.scrollLeft - l.x, y: r.top + i.scrollTop - l.y, width: r.width, height: r.height };
}
function ae(e) {
  if (te(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (We(e) ? e.host : null) || ee(e);
  return We(t) ? t.host : t;
}
function Ue(e) {
  return X(e) && Y(e).position !== "fixed" ? e.offsetParent : null;
}
function Ke(e) {
  const t = Q(e);
  let n = Ue(e);
  for (; n && ho(n) && Y(n).position === "static"; )
    n = Ue(n);
  return n && (te(n) === "html" || te(n) === "body" && Y(n).position === "static" && !ke(n)) ? t : n || function(o) {
    let s = ae(o);
    for (; X(s) && !De(s); ) {
      if (ke(s))
        return s;
      s = ae(s);
    }
    return null;
  }(e) || t;
}
function Bt(e) {
  const t = ae(e);
  return De(t) ? e.ownerDocument.body : X(t) && _e(t) ? t : Bt(t);
}
function ie(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Bt(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Q(o), i = s ? [r].concat(r.visualViewport || [], _e(o) ? o : []) : o, l = t.concat(i);
  return s ? l : l.concat(ie(i));
}
function Ge(e, t, n) {
  return t === "viewport" ? ge(function(o, s) {
    const r = Q(o), i = ee(o), l = r.visualViewport;
    let c = i.clientWidth, f = i.clientHeight, g = 0, d = 0;
    if (l) {
      c = l.width, f = l.height;
      const m = Et();
      (m || !m && s === "fixed") && (g = l.offsetLeft, d = l.offsetTop);
    }
    return { width: c, height: f, x: g, y: d };
  }(e, n)) : Z(t) ? function(o, s) {
    const r = J(o, !1, s === "fixed"), i = r.top + o.clientTop, l = r.left + o.clientLeft;
    return { top: i, left: l, x: l, y: i, right: l + o.clientWidth, bottom: i + o.clientHeight, width: o.clientWidth, height: o.clientHeight };
  }(t, n) : ge(function(o) {
    var s;
    const r = ee(o), i = Ie(o), l = (s = o.ownerDocument) == null ? void 0 : s.body, c = re(r.scrollWidth, r.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = re(r.scrollHeight, r.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
    let g = -i.scrollLeft + Ot(o);
    const d = -i.scrollTop;
    return Y(l || r).direction === "rtl" && (g += re(r.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: g, y: d };
  }(ee(e)));
}
const go = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: s } = e;
  const r = n === "clippingAncestors" ? function(f) {
    let g = ie(f).filter((p) => Z(p) && te(p) !== "body"), d = null;
    const m = Y(f).position === "fixed";
    let a = m ? ae(f) : f;
    for (; Z(a) && !De(a); ) {
      const p = Y(a), u = ke(a);
      (m ? u || d : u || p.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = p : g = g.filter((R) => R !== a), a = ae(a);
    }
    return g;
  }(t) : [].concat(n), i = [...r, o], l = i[0], c = i.reduce((f, g) => {
    const d = Ge(t, g, s);
    return f.top = re(d.top, f.top), f.right = qe(d.right, f.right), f.bottom = qe(d.bottom, f.bottom), f.left = re(d.left, f.left), f;
  }, Ge(t, l, s));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: o } = e;
  const s = X(n), r = ee(n);
  if (n === r)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((te(n) !== "body" || _e(r)) && (i = Ie(n)), X(n))) {
    const c = J(n, !0);
    l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return { ...t, x: t.x - i.scrollLeft + l.x, y: t.y - i.scrollTop + l.y };
}, isElement: Z, getDimensions: function(e) {
  if (X(e))
    return { width: e.offsetWidth, height: e.offsetHeight };
  const t = J(e);
  return { width: t.width, height: t.height };
}, getOffsetParent: Ke, getDocumentElement: ee, async getElementRects(e) {
  let { reference: t, floating: n, strategy: o } = e;
  const s = this.getOffsetParent || Ke, r = this.getDimensions;
  return { reference: vo(t, await s(n), o), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Y(e).direction === "rtl" };
function bo(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: s = !0, ancestorResize: r = !0, elementResize: i = !0, animationFrame: l = !1 } = o, c = s && !l, f = c || r ? [...Z(e) ? ie(e) : e.contextElement ? ie(e.contextElement) : [], ...ie(t)] : [];
  f.forEach((a) => {
    c && a.addEventListener("scroll", n, { passive: !0 }), r && a.addEventListener("resize", n);
  });
  let g, d = null;
  if (i) {
    let a = !0;
    d = new ResizeObserver(() => {
      a || n(), a = !1;
    }), Z(e) && !l && d.observe(e), Z(e) || !e.contextElement || l || d.observe(e.contextElement), d.observe(t);
  }
  let m = l ? J(e) : null;
  return l && function a() {
    const p = J(e);
    !m || p.x === m.x && p.y === m.y && p.width === m.width && p.height === m.height || n(), m = p, g = requestAnimationFrame(a);
  }(), n(), () => {
    var a;
    f.forEach((p) => {
      c && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (a = d) == null || a.disconnect(), d = null, l && cancelAnimationFrame(g);
  };
}
const yo = (e, t, n) => ro(e, t, { platform: go, ...n });
function wo(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Wt(e);
}
const Po = {
  reference: {
    type: null,
    required: !0
  }
}, _o = {
  visible: {
    type: Boolean,
    default: !1
  }
}, Io = {
  keep: {
    type: Boolean,
    default: !1
  }
}, Ro = {
  transition: {
    type: String,
    default: null
  }
}, Co = (e = "bottom") => ({
  placement: {
    type: String,
    default: e
  }
}), So = {
  middleware: {
    type: Array,
    default: () => [xt(), Dt({
      limiter: mo()
    })]
  }
};
function fi() {
  return T(k());
}
function pi(e) {
  const t = e.split("-");
  return {
    placement: t[0],
    alignment: t.length === 2 ? t[1] : null
  };
}
const ko = /* @__PURE__ */ $({
  name: "hr-floating",
  props: {
    ...O,
    ...Po,
    ..._o,
    ...Io,
    ...Ro,
    ...Co(),
    ...So
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0,
    transitionStateChanged: (e) => !0,
    show: () => !0,
    hide: () => !0
  },
  setup(e, t) {
    const n = D(null), o = D(null), s = C({
      position: "absolute",
      left: "0",
      top: "0",
      maxWidth: "",
      maxHeight: "",
      zIndex: 1
    }), r = h(() => [xt(), Dt({
      padding: 8
    }), ...e.middleware]), i = () => {
      n.value && yo(e.reference, n.value, {
        placement: e.placement,
        middleware: r.value
      }).then((a) => {
        t.emit("computedPosition", a), s.position = a.strategy, s.left = `${a.x ?? 0}px`, s.top = `${a.y ?? 0}px`, s.zIndex = 1;
      });
    }, l = () => {
      n.value && (o.value = bo(e.reference, n.value, i));
    };
    F(() => e.visible, (a) => {
      t.emit(a ? "show" : "hide"), a && !o.value && oe(l);
    });
    const c = (a, p) => typeof a.contains == "function" ? a.contains(p) : !1, f = (a) => {
      if (!e.visible)
        return;
      const p = !n.value || a.target && !c(n.value, a.target), u = !e.reference || a.target && !c(e.reference, a.target);
      !p && !u || t.emit("clickOutside", {
        outsideFloating: p,
        outsideReference: u
      });
    }, g = () => {
      o.value && (o.value(), o.value = null);
    }, d = () => {
      t.emit("transitionStateChanged", !0);
    }, m = () => {
      t.emit("transitionStateChanged", !1), e.keep || g();
    };
    return de(() => {
      g();
    }), {
      middleware: r,
      floatingElement: n,
      style: s,
      onLeave: d,
      onAfterLeave: m,
      onDocumentClick: f
    };
  },
  render() {
    let e;
    const t = {
      ...this.$attrs,
      style: {
        ...this.style
      }
    }, n = this.$props.as || "span", o = () => this.$props.keep ? pe(ne(n, Re({
      ref: "floatingElement"
    }, t), {
      default: () => [this.$slots.default ? this.$slots.default() : null]
    }), [[qt, this.visible], [me("document-event"), this.onDocumentClick, "click"]]) : this.visible ? pe(ne(n, Re({
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
      }, wo(e = o()) ? e : {
        default: () => [e]
      }) : o()]
    });
  }
}), Ye = "core-floating", xo = {
  Floating: ko
}, $o = {
  install: (e, t) => {
    M(e, Ye) || (H(e, xo), z(e, Ye));
  }
}, Do = {
  active: {
    type: String,
    required: !0
  }
};
function mi() {
  return T(k());
}
const To = /* @__PURE__ */ $({
  name: "hr-fragment-container",
  props: {
    ...O,
    ...B,
    ...Do
  },
  emits: ["click"],
  setup(e, t) {
    const n = C({
      active: h(() => e.active)
    }), o = () => t.slots.default(n);
    return j("coreFragmentContainer", {
      active: h(() => e.active)
    }), {
      slotProps: n,
      defaultRender: o
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Xe = "core-fragments", Vo = {
  FragmentContainer: To
}, Eo = {
  install: (e, t) => {
    M(e, Xe) || (H(e, Vo), z(e, Xe));
  }
}, Oo = {
  modelValue: {
    type: null,
    required: !0
  }
}, Bo = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, Ao = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Mo = {
  readonly: {
    type: Boolean,
    default: !1
  }
}, zo = {
  type: {
    type: String,
    default: null
  }
};
function hi(e) {
  return T(k()).setProp("input", e);
}
const Lo = /* @__PURE__ */ $({
  name: "hr-input",
  props: {
    ...O,
    ...B,
    ...Ao,
    ...Mo,
    ...zo,
    ...Oo,
    ...Bo,
    input: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    console.log("setup8");
    const n = (i) => {
      e.readonly ? i.target.selectionEnd === i.target.selectionStart && e.input.select() : e.input.focus();
    }, o = (i) => {
      let l = i;
      e.modelModifiers.capitalize && (l = l.charAt(0).toUpperCase() + l.slice(1));
      const {
        selectionStart: c
      } = e.input, {
        selectionEnd: f
      } = e.input;
      t.emit("update:modelValue", l), oe(() => {
        e.type !== "number" && e.input.setSelectionRange(c, f);
      });
    }, s = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ho = {
  modelValue: {
    type: String,
    required: !0
  }
}, No = {
  modelModifiers: {
    type: Object,
    default: () => ({})
  }
}, jo = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Fo = {
  items: {
    type: Array,
    default: () => []
  }
};
function vi(e) {
  return T(k()).setProp("input", e);
}
const Wo = /* @__PURE__ */ $({
  name: "hr-autocomplete",
  props: {
    ...O,
    ...B,
    ...jo,
    ...Fo,
    ...Ho,
    ...No,
    input: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = () => {
      e.input.focus();
    }, o = (a) => {
      let p = a;
      e.modelModifiers.capitalize && (p = p.charAt(0).toUpperCase() + p.slice(1));
      const {
        selectionStart: u
      } = e.input, {
        selectionEnd: R
      } = e.input;
      t.emit("update:modelValue", p), oe(() => {
        e.input.setSelectionRange(u, R);
      });
    }, s = D(!1), r = D();
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const i = (a) => {
      t.emit("itemSelected", a);
    }, l = () => {
      s.value = !1;
    }, c = () => {
      s.value = !0;
    }, f = (a) => {
      if (e.disabled)
        return !1;
      const p = () => r.value ? e.items.findIndex((u) => u === r.value) : null;
      !s.value && (a.key === "ArrowDown" || a.key === "ArrowUp" || a.key === "Enter") && e.modelValue.length > 0 ? (c(), a.preventDefault(), a.stopImmediatePropagation()) : a.key === "ArrowDown" && e.modelValue.length > 0 ? (r.value = U.next(e.items, p()), a.preventDefault(), a.stopImmediatePropagation()) : a.key === "ArrowUp" && e.modelValue.length > 0 ? (r.value = U.prev(e.items, p()), a.preventDefault(), a.stopImmediatePropagation()) : a.key === "Enter" && r.value ? (i(r.value), a.preventDefault(), a.stopImmediatePropagation()) : a.key === "Tab" ? l() : a.key === "Escape" && (l(), a.preventDefault(), a.stopImmediatePropagation());
    }, g = () => {
      r.value = null;
    }, d = C({
      modelValue: h({
        get: () => e.modelValue,
        set: (a) => o(a)
      }),
      disabled: h(() => e.disabled),
      items: h(() => e.items),
      focusedItem: h(() => r.value),
      listVisible: h(() => s.value && e.items.length > 0 && e.modelValue.length > 0),
      onItemClick: i,
      onKeyEvents: f,
      clearFocusedItem: g
    });
    return {
      slotProps: d,
      focusInput: n,
      defaultRender: () => t.slots.default(d),
      hideList: l,
      showList: c
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Ze = "core-inputs", qo = {
  Input: Lo,
  Autocomplete: Wo
}, Uo = {
  install: (e, t) => {
    M(e, Ze) || (H(e, qo), z(e, Ze));
  }
}, ce = {}, Ko = {
  name: {
    type: String,
    default: "default"
  }
};
function gi() {
  return T(k());
}
const Go = /* @__PURE__ */ $({
  name: "hr-notification-wrapper",
  props: {
    ...O,
    ...B,
    ...Ko
  },
  setup: function(e) {
    j("wrapper-name", e.name);
    const t = C({}), n = (p) => p.charAt(0).toUpperCase() + p.slice(1), o = (p) => p.split("-").map((b) => n(b)).join(""), s = (p) => {
      const u = {};
      return Object.keys(p).forEach((R) => {
        u[`on${o(R)}`] = p[R];
      }), u;
    }, r = (p) => {
      const u = t[p];
      u.visible = !1;
    }, i = (p) => {
      delete t[p];
    }, l = (p) => {
      r(p);
    }, c = (p) => {
      const u = t[p];
      u.durationTimeout !== null && u.options.resetDurationOnInteractivity && (clearTimeout(u.durationTimeout), u.durationTimeout = null);
    }, f = (p) => {
      c(p);
      const u = t[p];
      u.options.duration !== null && u.durationTimeout === null && (u.durationTimeout = setTimeout(() => {
        u.reject();
      }, u.options.duration));
    }, m = {
      addNotification: (p) => {
        const u = p;
        return u.resolve = (R = null) => {
          u.promise.resolve(R), r(u.id);
        }, u.reject = (R = null) => {
          u.promise.reject(R), r(u.id);
        }, u.transitionEnd = () => {
          i(u.id);
        }, u.visible = !0, u.id = $e.random(), u.compiledListeners = h(() => u.listeners ? s(u.listeners) : {}), u.durationTimeout = null, t[u.id] = u, f(u.id), u;
      },
      getNotification: (p) => t[p],
      destroyNotification: l,
      pauseDuration: c,
      resumeDuration: f
    };
    ce[e.name] = m;
    const a = C({
      name: h(() => e.name),
      notifications: h(() => t)
    });
    return {
      ...m,
      slotProps: a,
      INotifications: t
    };
  },
  render() {
    const e = () => this.$slots.default(this.slotProps);
    if (this.$props.as) {
      const t = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...t
      }, e());
    }
    return e();
  }
}), At = {
  wrapper: "default",
  duration: 4500,
  resetDurationOnInteractivity: !0
};
function Mt(e, t, n, o) {
  const s = { ...At, ...o }, r = s.wrapper;
  let i = null;
  return {
    promise: new Promise((c, f) => {
      i = ce[r].addNotification({
        component: dt(e),
        listeners: n !== void 0 ? C(n) : null,
        props: t !== void 0 ? C(t) : null,
        options: s,
        promise: { resolve: c, reject: f }
      });
    }),
    destroy: () => ce[r].destroyNotification(i.id)
  };
}
function Yo(e, t, n, o) {
  return Mt(e, t, n, o).promise;
}
function zt(e = "default") {
  return ce[e];
}
function Xo(e) {
  const t = K("wrapper-name");
  return ce[t].getNotification(e);
}
function Zo() {
  const e = k(), t = Xo(e.vnode.key);
  return j("notification-id", e.vnode.key), j("notification-resolve", t.resolve), j("notification-reject", t.reject), j("notification-transition-end", t.transitionEnd), {
    resolve: t.resolve,
    reject: t.reject
  };
}
const bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultNotificationOptions: At,
  getWrapper: zt,
  setupNotification: Zo,
  show: Mt,
  showPromise: Yo
}, Symbol.toStringTag, { value: "Module" })), Jo = {
  visible: {
    type: Boolean,
    default: !1
  }
};
function yi() {
  return T(k());
}
const Qo = /* @__PURE__ */ $({
  name: "hr-notification",
  props: {
    ...O,
    ...B,
    ...Jo
  },
  setup(e, t) {
    const n = K("notification-id");
    n || console.warn("You must call NotificationManager.setupNotification() in the notification setup");
    const o = K("notification-reject"), s = () => {
      o(null);
    }, r = zt(), i = C({
      visible: h(() => e.visible),
      pauseDuration: () => r.pauseDuration(n),
      resumeDuration: () => r.resumeDuration(n),
      close: s
    }), l = () => t.slots.default(i);
    return () => {
      if (e.as) {
        const c = e.asProps ? e.asProps(i) : {};
        return E(e.as, {
          ...c
        }, l());
      }
      return l();
    };
  }
}), Je = "core-notifications", es = {
  Notification: Qo,
  NotificationWrapper: Go
}, ts = {
  install: (e, t) => {
    M(e, Je) || (H(e, es), z(e, Je));
  }
}, ns = {
  modelValue: {
    type: Number,
    required: !0
  }
}, os = {
  pageSize: {
    type: Number,
    required: !0
  }
}, ss = {
  count: {
    type: Number,
    required: !0
  }
}, rs = {
  delta: {
    type: Number,
    default: 1
  }
};
function wi() {
  return T(k());
}
const is = /* @__PURE__ */ $({
  name: "hr-paginator",
  props: {
    ...O,
    ...B,
    ...ns,
    ...os,
    ...ss,
    ...rs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => Math.ceil(e.count / e.pageSize)), o = h(() => {
      const l = e.modelValue, c = n.value, f = [], g = [];
      let d;
      f.push(1);
      for (let m = l - e.delta; m <= l + e.delta; m++)
        m < c && m > 1 && f.push(m);
      return c !== 1 && f.push(c), f.forEach((m) => {
        d && (m - d === 2 ? g.push(d + 1) : m - d !== 1 && g.push(null)), g.push(m), d = m;
      }), g;
    }), s = (l) => {
      l !== null && t.emit("update:modelValue", l);
    }, r = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Qe = "core-paginators", ls = {
  Paginator: is
}, as = {
  install: (e, t) => {
    M(e, Qe) || (H(e, ls), z(e, Qe));
  }
}, cs = {
  value: {
    type: Number,
    required: !0
  }
}, us = {
  minimum: {
    type: Number,
    default: 0
  }
}, ds = {
  maximum: {
    type: Number,
    default: 100
  }
};
function Pi() {
  return T(k());
}
const fs = /* @__PURE__ */ $({
  name: "hr-progress-bar",
  props: {
    ...O,
    ...B,
    ...cs,
    ...us,
    ...ds
  },
  setup(e, t) {
    const n = h(() => {
      const r = (e.value - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(r);
    }), o = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), et = "core-progress-bars", ps = {
  ProgressBar: fs
}, ms = {
  install: (e, t) => {
    M(e, et) || (H(e, ps), z(e, et));
  }
}, hs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, vs = {
  modelValue: {
    type: null,
    required: !0
  }
}, gs = {
  value: {
    type: null,
    default: !0
  }
};
function _i() {
  return T(k());
}
const bs = /* @__PURE__ */ $({
  name: "hr-radio-button",
  props: {
    ...O,
    ...B,
    ...hs,
    ...vs,
    ...gs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.modelValue === e.value), o = () => {
      t.emit("update:modelValue", e.value);
    }, s = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), tt = "core-radio-buttons", ys = {
  RadioButton: bs
}, ws = {
  install: (e, t) => {
    M(e, tt) || (H(e, ys), z(e, tt));
  }
};
const Ps = {
  horizontal: {
    type: Boolean,
    default: !0
  }
}, _s = {
  vertical: {
    type: Boolean,
    default: !0
  }
}, Is = {
  autoHide: {
    type: Boolean,
    default: !0
  }
}, Rs = {
  autoHideDelay: {
    type: Number,
    default: 1500
  }
}, Cs = {
  minimumSize: {
    type: Number,
    default: 20
  }
}, Ss = {
  classes: {
    type: null,
    default: null
  }
};
function Ii() {
  return T(k());
}
const ks = /* @__PURE__ */ $({
  name: "hr-scroll-container",
  props: {
    as: {
      type: String,
      required: !0
    },
    ...B,
    ...Ps,
    ..._s,
    ...Is,
    ...Rs,
    ...Cs,
    ...Ss
  },
  setup(e) {
    const t = D(), n = D(), o = D(), s = D(), r = D(), i = C({
      start: null,
      startOffset: null
    }), l = C({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), c = C({
      offset: 0,
      size: 20,
      trackHover: !1,
      thumbHover: !1,
      visible: !1,
      dragging: !1
    }), f = h(() => c.trackHover || l.trackHover), g = h(() => c.dragging || l.dragging), d = D(e.autoHide);
    let m = null;
    const a = () => {
      !e.autoHide || g.value || f.value || (d.value = !1, m && clearTimeout(m), m = setTimeout(() => {
        d.value = !0;
      }, e.autoHideDelay));
    }, p = (I) => {
      I ? (m && clearTimeout(m), d.value = !1) : a();
    };
    F(g, p), F(f, p);
    const u = (I, S) => {
      const V = I.getBoundingClientRect(), W = S.clientX, G = S.clientY, Te = V.left, Lt = Te + V.width, Ve = V.top, Ht = Ve + V.height;
      return W >= Te && W <= Lt && G >= Ve && G <= Ht;
    }, R = (I) => {
      l.trackHover = n.value && l.visible && u(n.value, I), l.thumbHover = l.trackHover && u(o.value, I), c.trackHover = s.value && c.visible && u(s.value, I), c.thumbHover = c.trackHover && u(r.value, I);
    }, b = (I) => {
      if (l.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), V = n.value.getBoundingClientRect(), W = I.clientY - S.top - i.startOffset.top + (S.top - V.top), G = Math.min(100, Math.max(0, 100 / n.value.offsetHeight * W));
        t.value.scrollTop = t.value.scrollHeight * (G / 100), I.preventDefault(), I.stopImmediatePropagation();
      } else if (c.dragging && i.startOffset) {
        const S = t.value.getBoundingClientRect(), V = s.value.getBoundingClientRect(), W = I.clientX - S.left - i.startOffset.left + (S.left - V.left), G = Math.min(100, Math.max(0, 100 / s.value.offsetWidth * W));
        t.value.scrollLeft = t.value.scrollWidth * (G / 100), I.preventDefault(), I.stopImmediatePropagation();
      }
    }, y = (I) => {
      if (l.dragging = n.value && u(n.value, I), c.dragging = s.value && u(s.value, I), (l.dragging || c.dragging) && i.start === null) {
        const S = t.value.getBoundingClientRect();
        i.start = {
          top: I.clientY - S.top,
          left: I.clientX - S.left
        };
        const V = l.dragging ? o.value.getBoundingClientRect() : r.value.getBoundingClientRect();
        i.startOffset = {
          top: S.top - V.top + i.start.top,
          left: S.left - V.left + i.start.left
        }, I.preventDefault(), I.stopImmediatePropagation();
      }
    }, w = () => {
      l.dragging = c.dragging = !1, i.startOffset = i.start = null;
    }, v = D(0), P = D(0), x = () => {
      if (l.visible = t.value.scrollHeight > t.value.offsetHeight, l.visible && n.value && o.value)
        if (t.value.scrollHeight !== v.value && (a(), v.value = t.value.scrollHeight), n.value.offsetHeight === 0)
          oe(x);
        else {
          const I = 100 / t.value.scrollHeight * t.value.offsetHeight;
          l.size = Math.max(e.minimumSize, n.value.offsetHeight * (I / 100));
          const S = 100 / (t.value.scrollHeight - t.value.offsetHeight) * t.value.scrollTop;
          l.offset = (n.value.offsetHeight - l.size) * (S / 100);
        }
      if (c.visible = t.value.scrollWidth > t.value.offsetWidth, c.visible && s.value && r.value)
        if (t.value.scrollWidth !== P.value && (a(), P.value = t.value.scrollWidth), s.value.offsetWidth === 0)
          oe(x);
        else {
          const I = 100 / t.value.scrollWidth * t.value.offsetWidth;
          c.size = Math.max(e.minimumSize, s.value.offsetWidth * (I / 100));
          const S = 100 / (t.value.scrollWidth - t.value.offsetWidth) * t.value.scrollLeft;
          c.offset = (s.value.offsetWidth - c.size) * (S / 100);
        }
    }, A = (I, S) => {
      t.value.scrollTo(I, S);
    }, L = () => {
      a(), x();
    };
    ue(() => {
      x(), document.addEventListener("mousemove", b), document.addEventListener("mouseup", w), t.value.addEventListener("scroll", L, {
        passive: !0
      });
    }), Ut(() => {
      document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", w), t.value.removeEventListener("scroll", L);
    });
    const N = (I, S, V) => {
      I === "vertical" ? (n.value = S, o.value = V) : (s.value = S, r.value = V);
    }, _ = C({
      anyHover: h(() => f.value),
      anyDragging: h(() => g.value),
      hidden: h(() => d.value)
    });
    return {
      wrapper: t,
      verticalBar: l,
      horizontalBar: c,
      anyHover: f,
      anyDragging: g,
      onMouseMove: R,
      onMouseDown: y,
      startAutoHideTimer: a,
      updateThumbs: x,
      slotProps: _,
      registerBar: N,
      scrollTo: A
    };
  },
  render() {
    const e = this.as;
    return ne(e, Re(this.$props.asProps(this.slotProps), {
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
}), nt = "core-scroll-containers", xs = {
  ScrollContainer: ks
}, $s = {
  CommonInstall: yt
}, Ds = {
  install: (e, t) => {
    M(e, nt) || (pt(e, $s, t), H(e, xs), z(e, nt));
  }
}, xe = {
  /**
   * Get a nested property of an object
   * @param obj
   * @param property
   */
  getProperty(e, t) {
    let n = e;
    return t.split(".").every((s) => n[s] === void 0 ? null : (n = n[s], n !== null)), n;
  }
}, Ts = {
  modelValue: {
    type: null
  }
}, Vs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Es = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Os = {
  allowClear: {
    type: Boolean,
    default: !1
  }
}, Bs = {
  hideOnSelect: {
    type: Boolean,
    default: !0
  }
}, As = {
  compare: {
    type: [Function, String],
    default: null
  }
};
function Ri() {
  return T(k());
}
const Ms = /* @__PURE__ */ $({
  name: "hr-select",
  props: {
    ...O,
    ...B,
    ...Vs,
    ...Es,
    ...Os,
    ...Bs,
    ...Ts,
    ...As
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = D(!1), o = D(!1), s = D([]), r = D(null), i = h(() => {
      const _ = [].concat(e.modelValue);
      return s.value.filter((I) => _.indexOf(I.value) !== -1 ? !0 : e.compare ? typeof e.compare == "string" ? _.find((V) => (V !== null && xe.getProperty(V, e.compare)) === (I.value !== null && xe.getProperty(I.value, e.compare))) : e.compare(_, I.value) : !1);
    }), l = h(() => i.value.length > 0), c = h(() => {
      const _ = [];
      return i.value.forEach((I) => {
        _.push(I.label);
      }), _.join(", ");
    }), f = D(""), g = D(), d = h(() => s.value.filter((_) => _.disabled === !1)), m = () => {
      r.value = null;
    };
    F(r, () => {
      t.emit("focusedItemChanged", r.value);
    });
    const a = (_) => {
      s.value.push(_);
    }, p = (_) => {
      s.value = U.remove(s.value, _);
    }, u = () => {
      n.value = !1;
    }, R = (_) => {
      const {
        value: I
      } = _;
      e.hideOnSelect && !e.multiple && u();
      let S = I;
      e.multiple && (S = [], e.modelValue !== void 0 && (S = S.concat(e.modelValue)), S.includes(I) ? S.splice(S.indexOf(I), 1) : S.push(I)), r.value = _, t.emit("update:modelValue", S);
    }, b = () => {
      if (e.disabled)
        return !1;
      n.value = !n.value;
    }, y = () => {
      t.emit("update:modelValue", e.multiple ? [] : void 0);
    }, w = (_) => {
      if (e.disabled)
        return !1;
      const I = () => r.value ? d.value.findIndex((S) => S === r.value) : null;
      if (!n.value && (_.key === "ArrowDown" || _.key === "ArrowUp" || _.key === "Enter"))
        n.value = !0, _.preventDefault(), _.stopImmediatePropagation();
      else if (_.key === "ArrowDown")
        r.value = U.next(d.value, I()), _.preventDefault(), _.stopImmediatePropagation();
      else if (_.key === "ArrowUp")
        r.value = U.prev(d.value, I()), _.preventDefault(), _.stopImmediatePropagation();
      else if (_.key === "Enter" && r.value)
        R(r.value), _.preventDefault(), _.stopImmediatePropagation();
      else if (_.key === "Tab")
        u();
      else if (_.key === "Escape")
        u(), _.preventDefault(), _.stopImmediatePropagation();
      else {
        clearTimeout(g.value);
        const S = _.key.toLowerCase();
        if (S.match(/^\p{L}$/u)) {
          let W = null;
          S == f.value ? W = r.value ? v.value.findIndex((G) => G === r.value) : null : f.value += S, r.value = U.next(v.value, W), g.value = setTimeout(P, 1500);
        }
      }
    }, v = h(() => s.value.filter((_) => _.label.toLowerCase().startsWith(f.value))), P = () => {
      f.value = "";
    }, x = (_) => {
      o.value = _;
    }, A = h(() => n.value || o.value);
    j("select", {
      selectedItems: i,
      focusedItem: r,
      onItemClick: R,
      addItemInstance: a,
      removeItemInstance: p,
      menuVisible: h(() => n.value),
      itemsVisible: A
    });
    const L = C({
      modelValue: h(() => e.modelValue),
      disabled: h(() => e.disabled),
      allowClear: h(() => e.allowClear),
      menuVisible: h(() => n.value),
      focusedItem: h(() => r.value),
      clearFocusedItem: m,
      anythingSelected: l,
      selectedItems: i,
      selectedText: c,
      clearValue: y,
      close: u,
      onButtonClick: b,
      onItemClick: R,
      onKeyEvents: w,
      onMenuTransitioning: x
    });
    return {
      close: u,
      slotProps: L,
      defaultRender: () => t.slots.default(L),
      items: s
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), zs = {
  value: {
    type: null,
    required: !0
  }
}, Ls = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Hs = {
  label: {
    type: String,
    default: null
  }
};
function Ci() {
  return T(k());
}
const Ns = /* @__PURE__ */ $({
  name: "hr-select-item",
  props: {
    ...O,
    ...B,
    ...Ls,
    ...zs,
    ...Hs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = K("select"), o = C({
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
    }, l = C({
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
        return E(this.$props.as, {
          ...e
        }, this.defaultRender());
      }
      return this.defaultRender();
    }
  }
}), ot = "core-selects", js = {
  Select: Ms,
  SelectItem: Ns
}, Fs = {
  install: (e, t) => {
    M(e, ot) || (H(e, js), z(e, ot));
  }
}, Ws = {
  modelValue: {
    type: null
  }
}, qs = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Us = {
  minimum: {
    type: Number,
    default: 0
  }
}, Ks = {
  maximum: {
    type: Number,
    default: 100
  }
}, Gs = {
  stepSize: {
    type: Number,
    default: 1
  }
};
function Si() {
  return T(k());
}
const Ys = /* @__PURE__ */ $({
  name: "hr-slider",
  props: {
    ...O,
    ...B,
    ...Ws,
    ...qs,
    ...Us,
    ...Ks,
    ...Gs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => {
      const l = (e.modelValue - e.minimum) * 100 / (e.maximum - e.minimum);
      return Math.round(l);
    }), o = h(() => Math.round((e.maximum - e.minimum) / e.stepSize)), s = (l) => {
      let c = (e.maximum - e.minimum) / 100 * l + e.minimum;
      return c < e.minimum ? c = e.minimum : c > e.maximum && (c = e.maximum), Math.round(c / e.stepSize) * e.stepSize;
    }, r = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), st = "core-sliders", Xs = {
  Slider: Ys
}, Zs = {
  install: (e, t) => {
    M(e, st) || (H(e, Xs), z(e, st));
  }
};
function ki(e, t, n = null, o = !0) {
  return C({
    id: e,
    visible: o,
    validator: n,
    data: t
  });
}
const Js = {
  modelValue: {
    type: String,
    default: null
  }
}, Qs = {
  steps: {
    type: Array,
    default: null
  }
};
function xi() {
  return T(k());
}
const er = /* @__PURE__ */ $({
  name: "hr-steps-navigator",
  props: {
    ...O,
    ...B,
    ...Js,
    ...Qs
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = h(() => e.steps.findIndex((m) => m.id === e.modelValue)), o = h(() => e.steps.filter((m) => m.visible)), s = h(() => {
      const m = [];
      return e.steps.forEach((a) => {
        const p = e.steps.findIndex((u) => u.id === a.id);
        m.push({
          id: a.id,
          visible: a.visible,
          validator: a.validator,
          data: a.data,
          stepIndex: p,
          isCurrent: a.id === e.modelValue,
          isDone: n.value !== -1 && p < n.value,
          isLast: o.value.findIndex((u) => u.id === a.id) === o.value.length - 1,
          isLocked: !1
        });
      }), m;
    }), r = h(() => s.value[n.value]), i = h(() => s.value.filter((m) => m.visible)), l = (m) => {
      t.emit("update:modelValue", m.id);
    }, c = () => {
      if (!(typeof r.value.validator == "function" && !r.value.validator())) {
        const m = U.next(s.value, n.value, (a) => a.visible);
        t.emit("update:modelValue", m.id);
      }
    }, f = () => {
      const m = U.prev(s.value, n.value, (a) => a.visible);
      t.emit("update:modelValue", m.id);
    }, g = C({
      steps: s,
      currentStep: r,
      currentIndex: n,
      visibleSteps: i,
      nextStep: c,
      previousStep: f,
      onStepClick: l
    });
    return {
      nextStep: c,
      previousStep: f,
      visibleSteps: i,
      slotProps: g,
      defaultRender: () => t.slots.default(g)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), rt = "core-steps", tr = {
  StepsNavigator: er
}, nr = {
  install: (e, t) => {
    M(e, rt) || (H(e, tr), z(e, rt));
  }
};
class or {
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
class sr {
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
    return t !== void 0 && (o = xe.getProperty(o, t)), typeof n == "function" ? o = n(o) : n !== null && console.warn("[hr-table-column] Unsupported value for formatter"), o;
  }
}
const rr = {
  data: {
    type: Array,
    default: !0
  }
}, ir = {
  rowKey: {
    type: String,
    required: !0
  }
}, lr = {
  selectable: {
    type: [Boolean, Function],
    default: !1
  }
}, ar = {
  selectedRows: {
    type: Array,
    default: () => []
  }
}, cr = {
  sort: {
    type: Object,
    default: null
  }
};
function $i() {
  return T(k());
}
const ur = /* @__PURE__ */ $({
  name: "hr-table",
  props: {
    ...O,
    ...B,
    ...rr,
    ...ir,
    ...lr,
    ...ar,
    ...cr
  },
  emits: ["update:sort", "update:selectedRows"],
  setup(e, t) {
    const n = D([]), o = h(() => {
      const w = n.value.filter((P) => P.selected).length, v = n.value.filter((P) => P.selectable).length;
      return w === v && v > 0;
    }), s = h(() => n.value.filter((w) => w.selected).length > 0), r = h(() => n.value.filter((w) => w.selectable).length > 0), i = (w, v) => {
      const P = n.value.find((x) => x.id === w);
      if (P) {
        const x = e.selectedRows.findIndex((A) => A === P.data);
        P.selected = v, x === -1 && v ? t.emit("update:selectedRows", [...e.selectedRows, P.data]) : x !== -1 && !v && t.emit("update:selectedRows", e.selectedRows.filter((A) => A !== P.data));
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
    const c = () => {
      const w = n.value;
      n.value = e.data.map((v) => {
        let P = w.find((x) => x.data[e.rowKey] === v[e.rowKey]);
        return P === void 0 ? (P = new sr(v[e.rowKey], v, e, i), P.selected = e.selectedRows.findIndex((x) => x === P.data) !== -1) : P.data !== v && (P.data = v), P;
      });
    };
    F([() => e.data, () => [...e.data]], () => {
      c();
    }, {
      immediate: !0
    });
    const f = (w) => {
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
    }, d = D([]);
    let m = null;
    const a = () => {
      m !== null && (d.value = m, m = null);
    }, p = (w, v, P) => {
      m === null && (m = [].concat(d.value)), m.push(new or(w, v, P)), oe(a);
    }, u = (w) => {
      m === null && (m = d.value), m = m.filter((v) => v.id !== w), oe(a);
    }, R = h(() => d.value.sort((w, v) => w.order - v.order));
    j("table", {
      setSorting: f,
      setRowSelectionState: i,
      addColumn: p,
      removeColumn: u
    });
    const b = C({
      orderedColumns: R,
      rows: n,
      allRowsSelected: o,
      anyRowsSelected: s,
      anySelectable: r,
      toggleAllSelection: l,
      setRowSelectionState: i,
      setSorting: f,
      clearSorting: g
    });
    return {
      toggleAllSelection: l,
      setSorting: f,
      clearSorting: g,
      slotProps: b,
      defaultRender: () => t.slots.default(b)
    };
  },
  render() {
    if (this.$props.as) {
      const e = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), dr = {
  property: {
    type: String
  }
}, fr = {
  formatter: {
    type: Function,
    default: null
  }
}, pr = {
  sortable: {
    type: Boolean,
    default: !1
  }
}, mr = {
  data: {
    type: Object,
    default: null
  }
}, hr = {
  order: {
    type: Number,
    default: 0
  }
}, vr = {
  component: {
    type: null,
    required: !0
  }
};
function Di(e, t = [], n = []) {
  const o = k();
  return {
    props: C({
      data: e,
      component: o,
      ...wt(o.props, t)
    }),
    listeners: Pt(o, n)
  };
}
const gr = /* @__PURE__ */ $({
  name: "hr-table-column",
  props: {
    ...dr,
    ...fr,
    ...pr,
    ...mr,
    ...vr,
    ...hr
  },
  setup(e) {
    const t = K("table"), n = $e.random();
    return ue(() => {
      t.addColumn(n, e.component, e.data);
    }), de(() => {
      t.removeColumn(n);
    }), {};
  },
  render() {
    return null;
  }
}), br = {
  columns: {
    type: Array,
    required: !0
  }
}, yr = {
  row: {
    type: Object,
    default: !1
  }
};
function Ti() {
  return T(k());
}
const wr = /* @__PURE__ */ $({
  name: "hr-table-row",
  props: {
    ...O,
    ...B,
    ...br,
    ...yr
  },
  emits: ["update:modelValue", "rowClick"],
  setup(e, t) {
    const o = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), it = "core-tables", Pr = {
  Table: ur,
  TableColumn: gr,
  TableRow: wr
}, _r = {
  install: (e, t) => {
    M(e, it) || (H(e, Pr), z(e, it));
  }
}, Ir = {
  id: {
    type: String,
    required: !0
  }
}, Rr = {
  disabled: {
    type: Boolean,
    default: !1
  }
};
function Vi() {
  return T(k());
}
const Cr = /* @__PURE__ */ $({
  name: "hr-tab-item",
  props: {
    ...O,
    ...B,
    ...Ir,
    ...Rr
  },
  setup(e, t) {
    const n = K("coreTabsNavigator"), o = C({
      id: e.id
    });
    ue(() => {
      n.addTabInstance(o);
    }), de(() => {
      n.removeTabInstance(o);
    });
    const s = h(() => o === n.activeTab.value), r = () => {
      e.disabled || n.onTabClick(o);
    }, i = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), Sr = {
  modelValue: {
    type: String,
    default: null
  }
};
function Ei() {
  return T(k());
}
const kr = /* @__PURE__ */ $({
  name: "hr-tabs-navigator",
  props: {
    ...O,
    ...B,
    ...Sr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D([]), o = h(() => n.value.find((f) => f.id === e.modelValue));
    j("coreTabsNavigator", {
      activeTab: o,
      addTabInstance: (f) => {
        n.value.push(f);
      },
      removeTabInstance: (f) => {
        n.value = U.remove(n.value, f);
      },
      onTabClick: (f) => {
        t.emit("update:modelValue", f.id);
      }
    });
    const l = C({
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
      return E(this.$props.as, {
        ...e
      }, this.defaultRender());
    }
    return this.defaultRender();
  }
}), lt = "core-tabs", xr = {
  TabItem: Cr,
  TabsNavigator: kr
}, $r = {
  install: (e, t) => {
    M(e, lt) || (H(e, xr), z(e, lt));
  }
}, Dr = {
  modelValue: {
    type: Boolean,
    default: !1
  }
}, Tr = {
  trigger: {
    type: String,
    default: "hover"
  }
}, Vr = {
  showDelay: {
    type: Number,
    default: 200
  }
}, Er = {
  hideDelay: {
    type: Number,
    default: 0
  }
};
function Oi(e) {
  return T(k()).setProp("reference", e);
}
const Or = /* @__PURE__ */ $({
  name: "hr-tooltip",
  props: {
    ...Dr,
    ...Tr,
    ...Vr,
    ...Er,
    reference: {
      type: null,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(e.modelValue);
    F(() => e.modelValue, (a) => {
      n.value = a;
    });
    const o = (a) => {
      n.value = a, t.emit("update:modelValue", a);
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
    }, c = (a, p, u) => {
      a.addEventListener(p, i), a.addEventListener(u, l);
    }, f = (a, p, u) => {
      a.removeEventListener(p, i), a.removeEventListener(u, l), o(!1), s && clearTimeout(s), r && clearTimeout(r);
    }, g = (a) => {
      if (a === "hover")
        return {
          show: "mouseenter",
          hide: "mouseleave"
        };
    };
    F(() => e.reference, (a, p) => {
      const u = g(e.trigger);
      p && u && f(p, u.show, u.hide), a && u && c(a, u.show, u.hide);
    }), F(() => e.trigger, (a, p) => {
      if (p) {
        const u = g(p);
        u && e.reference && f(e.reference, u.show, u.hide);
      }
      if (a) {
        const u = g(a);
        u && e.reference && c(e.reference, u.show, u.hide);
      }
    });
    const d = C({
      visible: h(() => n.value)
    });
    return {
      slotProps: d,
      defaultRender: () => t.slots.default(d)
    };
  },
  render() {
    return this.defaultRender();
  }
}), at = "core-tooltips", Br = {
  Tooltip: Or
}, Ar = {
  install: (e, t) => {
    M(e, at) || (H(e, Br), z(e, at));
  }
}, Mr = {
  modelValue: {
    type: null,
    required: !0
  }
}, Bi = {
  valueFormat: {
    type: String,
    default: null
  }
}, zr = {
  disabled: {
    type: Boolean,
    default: !1
  }
}, Lr = {
  visible: {
    type: Boolean,
    default: !0
  }
}, Hr = {
  multiple: {
    type: Boolean,
    default: !1
  }
}, Nr = {
  clearable: {
    type: Boolean,
    default: !1
  }
}, jr = {
  disabledDate: {
    type: Function,
    default: null
  }
}, Fr = {
  firstDayOfWeek: {
    type: Number,
    default: 0
  }
};
function Ai() {
  return T(k());
}
const Wr = /* @__PURE__ */ $({
  name: "hr-date-picker",
  props: {
    ...O,
    ...B,
    ...Mr,
    ...Lr,
    ...zr,
    ...Hr,
    ...Nr,
    ...jr,
    ...Fr
  },
  emits: ["click"],
  setup(e, t) {
    const n = C({
      disabled: h(() => e.disabled)
    }), o = () => t.slots.default(n);
    return () => {
      if (e.as) {
        const s = e.asProps ? e.asProps(n) : {};
        return E(e.as, {
          ...s
        }, o());
      }
      return o();
    };
  }
}), ct = "core-date-pickers", qr = {
  DatePicker: Wr
}, Mi = {
  install: (e, t) => {
    M(e, ct) || (H(e, qr), z(e, ct));
  }
};
function Ur(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Kr(e) {
  return typeof e != "number" ? Ur(e) : { top: e, right: e, bottom: e, left: e };
}
function Gr(e) {
  return e.split("-")[0];
}
function Yr(e) {
  return e.split("-")[1];
}
function Xr(e) {
  return e === "y" ? "height" : "width";
}
function Zr(e) {
  return ["top", "bottom"].includes(Gr(e)) ? "x" : "y";
}
function Jr(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
const zi = (e) => ({
  name: "arrowReference",
  options: e,
  async fn(t) {
    var W;
    const { element: n, padding: o = 0 } = e ?? {}, { x: s, y: r, placement: i, rects: l, platform: c } = t;
    if (n == null)
      return console.warn(
        "Floating UI: No `element` was passed to the `arrow` middleware."
      ), {};
    const f = Kr(o), g = { x: s, y: r }, d = Zr(i), m = Yr(i), a = Xr(d), p = await c.getDimensions(n), u = d === "y" ? "top" : "left", R = d === "y" ? "bottom" : "right";
    let b = l.reference;
    e.reference && (b = (await c.getClientRects(e.reference))[0]);
    const y = b[a] + b[d] - g[d] - l.floating[a], w = g[d] - b[d], v = await ((W = c.getOffsetParent) == null ? void 0 : W.call(c, n));
    let P = v ? d === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
    P === 0 && (P = l.floating[a]);
    const x = y / 2 - w / 2, A = f[u], L = P - p[a] - f[R], N = P / 2 - p[a] / 2 + x, _ = Jr(A, N, L), V = (m === "start" ? f[u] : f[R]) > 0 && N !== _ && b[a] <= l.floating[a] ? N < A ? A - N : L - N : 0;
    return {
      [d]: g[d] - V,
      data: {
        [d]: _,
        centerOffset: N - _
      }
    };
  }
}), Qr = {
  CommonInstall: yt,
  ButtonsInstall: Rn,
  CheckboxesInstall: Vn,
  CollapsesInstall: Nn,
  DialogsInstall: Gn,
  DropdownsInstall: so,
  FloatingInstall: $o,
  FragmentsInstall: Eo,
  InputsInstall: Uo,
  NotificationsInstall: ts,
  PaginatorsInstall: as,
  ProgressBarsInstall: ms,
  RadioButtonsInstall: ws,
  ScrollContainersInstall: Ds,
  SelectsInstall: Fs,
  SlidersInstall: Zs,
  StepsInstall: nr,
  TablesInstall: _r,
  TabsInstall: $r,
  TooltipsInstall: Ar
}, Li = {
  install: (e, t) => {
    Object.values(Qr).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  U as ArrayHelper,
  Rn as CoreButtonsInstall,
  Vn as CoreCheckboxInstall,
  Nn as CoreCollapsesInstall,
  Mi as CoreDatePickersInstall,
  Gn as CoreDialogsInstall,
  so as CoreDropdownsInstall,
  $o as CoreFloatingInstall,
  Eo as CoreFragmentsInstall,
  Uo as CoreInputsInstall,
  ts as CoreNotificationsInstall,
  as as CorePaginatorsInstall,
  ms as CoreProgressBarsInstall,
  ws as CoreRadioButtonsInstall,
  Ds as CoreScrollContainersInstall,
  Fs as CoreSelectsInstall,
  Zs as CoreSlidersInstall,
  nr as CoreStepsInstall,
  or as CoreTableColumn,
  sr as CoreTableRow,
  _r as CoreTablesInstall,
  $r as CoreTabsInstall,
  Ar as CoreTooltipsInstall,
  ai as DialogManager,
  ni as ModuleHelper,
  bi as NotificationManager,
  xe as ObjectHelper,
  $e as StringHelper,
  jo as coreAutocompleteDisabledProp,
  Fo as coreAutocompleteItemsProp,
  No as coreAutocompleteModelModifiersProp,
  Ho as coreAutocompleteModelValueProp,
  vi as coreAutocompleteSetup,
  _n as coreButton,
  yn as coreButtonDisabledProp,
  Pn as coreButtonLoadingProp,
  oi as coreButtonSetup,
  wn as coreButtonVisibleProp,
  kn as coreCheckboxDisabledProp,
  $n as coreCheckboxIndeterminateProp,
  Cn as coreCheckboxModelValueProp,
  si as coreCheckboxSetup,
  Sn as coreCheckboxValueProp,
  xn as coreCheckboxVisibleProp,
  En as coreCollapseAccordionProp,
  li as coreCollapseInlineSetup,
  An as coreCollapseItemIdProp,
  ii as coreCollapseItemSetup,
  On as coreCollapseModelValueProp,
  ri as coreCollapseSetup,
  O as coreComponentAsProp,
  Nr as coreDatePickerClearableProp,
  jr as coreDatePickerDisabledDateProp,
  zr as coreDatePickerDisabledProp,
  Fr as coreDatePickerFirstDayOfWeekProp,
  Mr as coreDatePickerModelValueProp,
  Hr as coreDatePickerMultipleProp,
  Ai as coreDatePickerSetup,
  Bi as coreDatePickerValueFormatProp,
  Lr as coreDatePickerVisibleProp,
  ci as coreDialogSetup,
  qn as coreDialogVisibleProp,
  jn as coreDialogWrapper,
  Jn as coreDropdownDisabledProp,
  Qn as coreDropdownHideOnClickProp,
  Yn as coreDropdownItemDisabledProp,
  Xn as coreDropdownItemLabelProp,
  ui as coreDropdownItemSetup,
  di as coreDropdownSetup,
  eo as coreDropdownSplitButtonProp,
  to as coreDropdownVisibleProp,
  zi as coreFloatingArrowReference,
  Io as coreFloatingKeepProp,
  So as coreFloatingMiddlewareProp,
  Co as coreFloatingPlacementProp,
  Po as coreFloatingReferenceProp,
  fi as coreFloatingSetup,
  Ro as coreFloatingTransitionProp,
  _o as coreFloatingVisibleProp,
  Do as coreFragmentContainerActiveProp,
  mi as coreFragmentContainerSetup,
  zn as coreInlineCollapseModelValueProp,
  Ao as coreInputDisabledProp,
  Bo as coreInputModelModifiersProp,
  Oo as coreInputModelValueProp,
  Mo as coreInputReadonlyProp,
  hi as coreInputSetup,
  zo as coreInputTypeProp,
  yi as coreNotificationSetup,
  Jo as coreNotificationVisibleProp,
  Ko as coreNotificationWrapperNameProp,
  gi as coreNotificationWrapperSetup,
  ss as corePaginatorCountProp,
  rs as corePaginatorDeltaProp,
  ns as corePaginatorModelValueProp,
  os as corePaginatorPageSizeProp,
  wi as corePaginatorSetup,
  ds as coreProgressBarMaximumProp,
  us as coreProgressBarMinimumProp,
  Pi as coreProgressBarSetup,
  cs as coreProgressBarValueProp,
  hs as coreRadioButtonDisabledProp,
  vs as coreRadioButtonModelValueProp,
  _i as coreRadioButtonSetup,
  gs as coreRadioButtonValueProp,
  Rs as coreScrollContainerAutoHideDelayProp,
  Is as coreScrollContainerAutoHideProp,
  Ss as coreScrollContainerClassesProp,
  Ps as coreScrollContainerHorizontalProp,
  Cs as coreScrollContainerMinimumSizeProp,
  Ii as coreScrollContainerSetup,
  _s as coreScrollContainerVerticalProp,
  Os as coreSelectAllowClearProp,
  As as coreSelectCompareProp,
  Vs as coreSelectDisabledProp,
  Bs as coreSelectHideOnSelectProp,
  Ls as coreSelectItemDisabledProp,
  Hs as coreSelectItemLabelProp,
  Ci as coreSelectItemSetup,
  zs as coreSelectItemValueProp,
  Ts as coreSelectModelValueProp,
  Es as coreSelectMultipleProp,
  Ri as coreSelectSetup,
  qs as coreSliderDisabledProp,
  Ks as coreSliderMaximumProp,
  Us as coreSliderMinimumProp,
  Ws as coreSliderModelValueProp,
  Si as coreSliderSetup,
  Gs as coreSliderStepSizeProp,
  Js as coreStepsNavigatorModelValueProp,
  xi as coreStepsNavigatorSetup,
  Qs as coreStepsNavigatorStepsProp,
  Rr as coreTabItemIdDisabledProp,
  Ir as coreTabItemIdProp,
  Vi as coreTabItemSetup,
  vr as coreTableColumnComponentProp,
  mr as coreTableColumnDataProp,
  fr as coreTableColumnFormatterProp,
  hr as coreTableColumnOrderProp,
  dr as coreTableColumnPropertyProp,
  Di as coreTableColumnSetup,
  pr as coreTableColumnSortableProp,
  rr as coreTableDataProp,
  br as coreTableRowColumnsProp,
  ir as coreTableRowKeyProp,
  yr as coreTableRowRowProp,
  Ti as coreTableRowSetup,
  lr as coreTableSelectableProp,
  ar as coreTableSelectedRowsProp,
  $i as coreTableSetup,
  cr as coreTableSortProp,
  Sr as coreTabsNavigatorModelValueProp,
  Ei as coreTabsNavigatorSetup,
  Er as coreTooltipHideDelayProp,
  Dr as coreTooltipModelValueProp,
  Oi as coreTooltipSetup,
  Vr as coreTooltipShowDelayProp,
  Tr as coreTooltipTriggerProp,
  ki as createCoreStepItem,
  Li as default,
  pi as splitPlacement
};
