import { getCurrentInstance as Bt, computed as L, defineComponent as O, resolveComponent as v, openBlock as h, createElementBlock as $, normalizeClass as d, createVNode as I, createCommentVNode as M, createElementVNode as y, toDisplayString as N, createBlock as C, withDirectives as G, mergeProps as F, toHandlers as P, withCtx as w, renderSlot as T, vShow as K, createTextVNode as ee, normalizeStyle as z, ref as k, withKeys as Ls, Transition as he, resolveDynamicComponent as Ns, watch as oe, Fragment as le, renderList as fe, onBeforeUpdate as _s, getCurrentScope as Bo, onScopeDispose as Zo, unref as Wo, onMounted as nt, inject as pe, reactive as st, withModifiers as Tn, provide as ht, nextTick as Re, h as Mn, TransitionGroup as Fs, resolveDirective as qo, onUnmounted as jo, onUpdated as Uo } from "vue";
import { StringHelper as Ps, ModuleHelper as p, coreButtonDisabledProp as Zt, coreButtonLoadingProp as Wt, coreButtonVisibleProp as qt, coreButtonSetup as jt, CoreButtonsInstall as Yo, coreCheckboxDisabledProp as As, coreCheckboxIndeterminateProp as Go, coreCheckboxVisibleProp as Hs, coreCheckboxModelValueProp as zs, coreCheckboxValueProp as Rs, coreCheckboxSetup as Bs, CoreCheckboxInstall as Zs, coreCollapseAccordionProp as Ko, coreCollapseModelValueProp as Jo, coreCollapseSetup as Qo, coreCollapseItemIdProp as Xo, coreCollapseItemSetup as xo, coreInlineCollapseModelValueProp as er, coreCollapseInlineSetup as tr, CoreCollapsesInstall as nr, coreDatePickerModelValueProp as sr, coreDatePickerDisabledProp as or, coreDatePickerVisibleProp as rr, coreDatePickerFirstDayOfWeekProp as ir, coreDatePickerSetup as lr, splitPlacement as Be, coreInputDisabledProp as ar, coreInputReadonlyProp as cr, coreInputTypeProp as ur, coreInputModelValueProp as dr, coreInputModelModifiersProp as fr, coreInputSetup as mr, coreAutocompleteDisabledProp as hr, coreAutocompleteItemsProp as pr, coreAutocompleteModelValueProp as yr, coreAutocompleteModelModifiersProp as gr, coreAutocompleteSetup as vr, CoreInputsInstall as br, CoreDatePickersInstall as wr, coreDialogVisibleProp as Ws, coreDialogSetup as qs, coreDialogWrapper as $r, CoreDialogsInstall as js, coreDropdownDisabledProp as Sr, coreDropdownVisibleProp as kr, coreDropdownSplitButtonProp as Ir, coreDropdownHideOnClickProp as Cr, coreDropdownSetup as Tr, coreDropdownItemDisabledProp as Mr, coreDropdownItemLabelProp as Or, coreDropdownItemSetup as Dr, coreComponentAsProp as Vr, coreFloatingReferenceProp as Er, coreFloatingVisibleProp as Lr, coreFloatingMiddlewareProp as Nr, coreFloatingTransitionProp as _r, coreFloatingPlacementProp as Ut, coreFloatingArrowReference as Fr, coreFloatingSetup as Pr, CoreFloatingInstall as Ar, CoreDropdownsInstall as Hr, coreFragmentContainerActiveProp as zr, coreFragmentContainerSetup as Rr, CoreFragmentsInstall as Br, coreNotificationVisibleProp as Zr, coreNotificationSetup as Wr, coreNotificationWrapperNameProp as qr, coreNotificationWrapperSetup as jr, NotificationManager as Us, CoreNotificationsInstall as Ur, corePaginatorModelValueProp as Yr, corePaginatorPageSizeProp as Gr, corePaginatorCountProp as Kr, corePaginatorDeltaProp as Jr, corePaginatorSetup as Qr, CorePaginatorsInstall as Xr, coreProgressBarValueProp as xr, coreProgressBarMinimumProp as ei, coreProgressBarMaximumProp as ti, coreProgressBarSetup as ni, CoreProgressBarsInstall as si, coreRadioButtonDisabledProp as oi, coreRadioButtonModelValueProp as ri, coreRadioButtonValueProp as ii, coreRadioButtonSetup as li, CoreRadioButtonsInstall as ai, coreScrollContainerHorizontalProp as ci, coreScrollContainerVerticalProp as ui, coreScrollContainerAutoHideProp as di, coreScrollContainerAutoHideDelayProp as fi, coreScrollContainerMinimumSizeProp as mi, coreScrollContainerContainerClassesProp as hi, coreScrollContainerWrapperClassesProp as pi, coreScrollContainerSetup as yi, CoreScrollContainersInstall as gi, coreSelectDisabledProp as vi, coreSelectAllowClearProp as bi, coreSelectHideOnSelectProp as wi, coreSelectMultipleProp as $i, coreSelectModelValueProp as Si, coreSelectCompareProp as ki, coreSelectSetup as Ii, coreSelectItemDisabledProp as Ci, coreSelectItemValueProp as Ti, coreSelectItemLabelProp as Mi, coreSelectItemSetup as Oi, coreSimpleSelectDisabledProp as Di, coreSimpleSelectAllowClearProp as Vi, coreSimpleSelectHideOnSelectProp as Ei, coreSimpleSelectMultipleProp as Li, coreSimpleSelectModelValueProp as Ni, coreSimpleSelectCompareProp as _i, coreSimpleSelectItemsProp as Fi, coreSimpleSelectSetup as Pi, CoreSelectsInstall as Ai, coreSliderModelValueProp as Hi, coreSliderDisabledProp as zi, coreSliderMaximumProp as Ri, coreSliderMinimumProp as Bi, coreSliderStepSizeProp as Zi, coreSliderSetup as Wi, CoreSlidersInstall as qi, coreStepsNavigatorModelValueProp as ji, coreStepsNavigatorStepsProp as Ui, coreStepsNavigatorSetup as Yi, CoreStepsInstall as Gi, coreTabItemIdProp as Ki, coreTabItemIdDisabledProp as Ji, coreTabItemSetup as Qi, coreTabsNavigatorModelValueProp as Xi, coreTabsNavigatorSetup as xi, ArrayHelper as el, CoreTabsInstall as tl, CoreTableColumn as nl, CoreTableRow as sl, coreTableRowSetup as ol, coreTableDataProp as rl, coreTableRowKeyProp as il, coreTableSelectableProp as ll, coreTableSelectedRowsProp as al, coreTableSortProp as cl, coreTableSetup as ul, coreTableColumnPropertyProp as dl, coreTableColumnFormatterProp as fl, coreTableColumnSortableProp as ml, coreTableColumnOrderProp as hl, coreTableColumnSetup as pl, CoreTablesInstall as yl, coreTooltipModelValueProp as gl, coreTooltipTriggerProp as vl, coreTooltipShowDelayProp as bl, coreTooltipHideDelayProp as wl, coreTooltipSetup as $l, CoreTooltipsInstall as Sl } from "@hyrioo/hyrnatic-ui-core";
import { DialogManager as jh, NotificationManager as Uh, coreFloatingArrowReference as Yh, createCoreStepItem as Gh } from "@hyrioo/hyrnatic-ui-core";
const D = () => {
  const e = Bt(), t = L(() => e ? e.type.name : null);
  return {
    css_root: t,
    css_ec: (s) => `${t.value}__${s}`
  };
};
var kl = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", Il = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Cl = "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z", Tl = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Ml = "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z", Ol = "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z", Dl = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", Vl = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", El = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Ll = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", Nl = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", _l = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z", Fl = "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z", Pl = "M19,13H5V11H19V13Z", Al = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
const $t = {};
function Ys(e, t) {
  $t[e] = t;
}
function Gs(e, t) {
  $t[e] = {
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    data: `<path d="${t}" />`
  };
}
const ke = {
  register: Ys,
  registerMDI: Gs,
  icons: $t
}, Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke,
  icons: $t,
  register: Ys,
  registerMDI: Gs
}, Symbol.toStringTag, { value: "Module" })), Q = {
  arrowLeft: kl,
  arrowRight: Il,
  calendarMonth: Cl,
  check: Tl,
  chevronDoubleLeft: Ml,
  chevronDoubleRight: Ol,
  chevronDown: Dl,
  chevronLeft: Vl,
  chevronRight: El,
  chevronUp: Ll,
  close: Nl,
  dotsHorizontal: _l,
  loading: Fl,
  minus: Pl,
  plus: Al
};
Object.keys(Q).forEach((e) => {
  const t = Ps.kebabize(e);
  ke.registerMDI(t, Q[e]), Q[e] = t;
});
const Hl = O({
  name: "h-alert",
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    styling: {
      type: String,
      default: "primary"
    },
    showCloseButton: {
      type: Boolean,
      default: !1
    },
    closeText: {
      type: String,
      default: null
    }
  },
  emits: ["close"],
  setup(e, t) {
    return {
      Icons: Q,
      onClose: () => {
        t.emit("close");
      },
      ...D()
    };
  }
}), V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zl = { key: 1 };
function Rl(e, t, n, s, o, r) {
  const i = v("h-icon");
  return h(), $("div", {
    class: d([e.css_root, `-styling-${e.styling}`])
  }, [
    e.icon ? (h(), $("div", {
      key: 0,
      class: d([e.css_ec("icon")])
    }, [
      I(i, {
        icon: e.icon,
        size: e.description ? "24px" : "16px"
      }, null, 8, ["icon", "size"])
    ], 2)) : M("", !0),
    y("div", {
      class: d([e.css_ec("container")])
    }, [
      y("div", {
        class: d([e.css_ec("title")])
      }, N(e.title), 3),
      e.description ? (h(), $("div", {
        key: 0,
        class: d([e.css_ec("description")])
      }, N(e.description), 3)) : M("", !0)
    ], 2),
    e.showCloseButton || e.closeText ? (h(), $("div", {
      key: 1,
      class: d([e.css_ec("close")]),
      onClick: t[0] || (t[0] = (...l) => e.onClose && e.onClose(...l))
    }, [
      e.showCloseButton ? (h(), C(i, {
        key: 0,
        icon: e.Icons.close,
        size: "16px"
      }, null, 8, ["icon"])) : e.closeText ? (h(), $("span", zl, N(e.closeText), 1)) : M("", !0)
    ], 2)) : M("", !0)
  ], 2);
}
const Bl = /* @__PURE__ */ V(Hl, [["render", Rl]]), On = "elementic-alerts", Zl = {
  Alert: Bl
}, Wl = {}, ql = {
  install: (e, t) => {
    p.isModuleInstalled(e, On) || (p.installDependencies(e, Wl, t), p.installComponents(e, Zl), p.markModuleAsInstalled(e, On));
  }
}, jl = /* @__PURE__ */ O({
  name: "h-button",
  emits: ["click"],
  props: {
    ...Zt,
    ...Wt,
    ...qt,
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "primary"
    },
    styling: {
      type: String,
      default: "simple"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e, t) {
    const n = D(), s = L(() => !t.slots.default && !e.label), o = (i) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, {
        "-loading": i.loading,
        "-icon-only": s.value,
        "-has-icon": e.icon,
        "-rounded": e.rounded
      }],
      disabled: i.disabled,
      onClick: i.onClick,
      type: e.type
    }), r = jt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: Q,
      core: r,
      ...n
    };
  }
});
function Ul(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w(() => [
      y("span", {
        class: d([e.css_ec("content")])
      }, [
        e.icon ? (h(), C(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16px"
        }, null, 8, ["class", "icon"])) : M("", !0),
        y("div", {
          class: d([e.css_ec("loading-container")])
        }, [
          y("div", {
            class: d([e.css_ec("loading-spinner")])
          }, null, 2)
        ], 2),
        T(e.$slots, "default", {}, () => [
          e.$slots.default || e.label ? (h(), $("span", {
            key: 0,
            class: d([e.css_ec("text")])
          }, N(e.label), 3)) : M("", !0)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [K, e.visible]
  ]);
}
const Yl = /* @__PURE__ */ V(jl, [["render", Ul]]), Gl = O({
  name: "h-icon-button",
  props: {
    ...Zt,
    ...Wt,
    ...qt,
    icon: {
      type: String,
      required: !0
    },
    iconOptions: {
      type: Object
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "primary"
    },
    styling: {
      type: String,
      default: "simple"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  emits: ["click"],
  setup(e, t) {
    const n = D(), s = L(() => ({
      small: "12px",
      normal: "16px",
      large: "24px"
    })[e.size]), o = (i) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, { "-loading": i.loading, "-rounded": e.rounded }],
      disabled: i.disabled,
      onClick: i.onClick,
      type: e.type
    }), r = jt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: Q,
      core: r,
      iconSize: s,
      ...D()
    };
  }
});
function Kl(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w(() => [
      y("span", {
        class: d([e.css_ec("content")])
      }, [
        I(i, F({
          class: [e.css_ec("icon")],
          icon: e.icon,
          size: e.iconSize
        }, e.iconOptions), null, 16, ["class", "icon", "size"]),
        y("div", {
          class: d([e.css_ec("loading-container")])
        }, [
          y("div", {
            class: d([e.css_ec("loading-spinner")])
          }, null, 2)
        ], 2)
      ], 2)
    ]),
    _: 1
  }, 16)), [
    [K, e.visible]
  ]);
}
const Jl = /* @__PURE__ */ V(Gl, [["render", Kl]]), Ql = /* @__PURE__ */ O({
  name: "h-link-button",
  props: {
    ...Zt,
    ...Wt,
    ...qt,
    label: {
      type: [String, Number],
      default: null
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  emits: ["click"],
  setup(e, t) {
    const n = D(), s = (r) => ({
      class: [n.css_root.value, `-color-${e.color}`, `-size-${e.size}`, {
        "-loading": r.loading
      }],
      disabled: r.disabled,
      onClick: r.onClick,
      type: e.type
    }), o = jt().as("button", s).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: Q,
      core: o,
      ...n
    };
  }
});
function Xl(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w(() => [
      I(i, {
        class: d([e.css_ec("loading-icon")]),
        icon: e.Icons.loading,
        size: "16px"
      }, null, 8, ["class", "icon"]),
      y("span", {
        class: d([e.css_ec("text")])
      }, [
        T(e.$slots, "default", {}, () => [
          ee(N(e.label), 1)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [K, e.visible]
  ]);
}
const xl = /* @__PURE__ */ V(Ql, [["render", Xl]]), ea = O({
  name: "h-icon",
  props: {
    icon: {
      type: String,
      required: !0
    },
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    strokes: {
      type: [Array, String]
    },
    fills: {
      type: [Array, String],
      default: "currentColor"
    },
    spin: {
      type: Boolean
    }
  },
  setup(e, t) {
    const n = (c) => c === null ? "none" : c, s = (c) => {
      const u = /(\w*)="(.*?)"/gi, f = /([^:]+?):([^;]+);?/gi;
      return c.replace(u, (m, g, S) => g === "fill" || g === "stroke" ? "" : g === "style" ? (S = S.replace(f, (Z, W) => W === "fill" || W === "stroke" ? "" : Z), S.length !== 0 ? `${g}="${S}"` : "") : m);
    }, o = (c, u, f) => Array.isArray(u) ? u.length - 1 >= f ? `${c}="${n(u[f])}"` : "" : `${c}="${n(u)}"`, r = (c, u, f) => {
      const m = /<(path|rect|circle|polygon|line|polyline|ellipse).*?>/gi;
      let g = 0;
      return c.replace(m, (S, Z) => {
        const W = o("fill", f, g), J = o("stroke", u, g);
        let X = s(S);
        return X = `<${Z} ${W} ${J} ${X.substr(Z.length + 1)}`, g++, X;
      });
    }, i = L(() => {
      const c = e.strokes ? e.strokes : [], u = e.fills ? e.fills : [];
      return r(ke.icons[e.icon].data, c, u);
    }), l = L(() => ke.icons[e.icon] ? ke.icons[e.icon].viewBox : (console.warn(`No icon has been registered with the key "${e.icon}"`), "")), a = L(() => {
      const c = {};
      return c.width = e.width || e.size || ke.icons[e.icon].width, c.height = e.height || e.size || ke.icons[e.icon].height, isFinite(c.width) && (c.width = `${c.width}px`), isFinite(c.height) && (c.height = `${c.height}px`), c;
    });
    return {
      content: i,
      viewBox: l,
      style: a,
      ...D()
    };
  }
}), ta = ["viewBox", "innerHTML"];
function na(e, t, n, s, o, r) {
  return h(), $("svg", {
    class: d([e.css_root, { "-spin": e.spin }]),
    viewBox: e.viewBox,
    style: z(e.style),
    innerHTML: e.content
  }, null, 14, ta);
}
const sa = /* @__PURE__ */ V(ea, [["render", na]]), Dn = "elementic-icons", oa = {
  Icon: sa
}, Yt = {
  install: (e, t) => {
    p.isModuleInstalled(e, Dn) || (p.installComponents(e, oa), p.markModuleAsInstalled(e, Dn));
  }
}, Vn = "elementic-buttons", ra = {
  Button: Yl,
  IconButton: Jl,
  LinkButton: xl
}, ia = {
  CoreButtonsInstall: Yo,
  IconInstall: Yt
}, la = {
  install: (e, t) => {
    p.isModuleInstalled(e, Vn) || (p.installDependencies(e, ia, t), p.installComponents(e, ra), p.markModuleAsInstalled(e, Vn));
  }
}, aa = O({
  name: "h-checkbox",
  props: {
    ...As,
    ...Go,
    ...Hs,
    ...zs,
    ...Rs,
    label: {
      type: String,
      default: null
    },
    bordered: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = k(!1), o = (i) => ({
      class: [n.css_root.value, {
        "-focus": s.value,
        "-bordered": e.bordered,
        "-checked": i.state,
        "-indeterminate": i.indeterminate,
        "-disabled": i.disabled
      }]
    }), r = Bs().as("label", o).props(["modelValue", "value", "indeterminate", "disabled", "visible"]).events(["update:modelValue"]).build();
    return {
      Icons: Q,
      CheckboxIcons: dt,
      asProps: o,
      core: r,
      hasFocus: s,
      ...n
    };
  }
}), ca = ["checked", "disabled", "onChange"];
function ua(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-checkbox");
  return G((h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      y("span", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("input")]),
          checked: a.state,
          type: "checkbox",
          disabled: a.disabled,
          onChange: a.onChange,
          onFocus: t[0] || (t[0] = (c) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (c) => e.hasFocus = !1)
        }, null, 42, ca),
        G(I(i, {
          class: d([e.css_ec("check-icon")]),
          icon: e.CheckboxIcons.checkStroke,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [K, !a.indeterminate]
        ]),
        G(I(i, {
          class: d([e.css_ec("indeterminate-icon")]),
          icon: e.Icons.minus,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [K, a.indeterminate]
        ])
      ], 2),
      e.$slots.default || e.label ? (h(), $("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          ee(N(e.label), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16)), [
    [K, e.visible]
  ]);
}
const da = /* @__PURE__ */ V(aa, [["render", ua]]), fa = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  data: '<polyline points="4.2,12.8 9,17.6 20.3,6.3 "/>'
}, En = "elementic-checkboxes", ma = {
  Checkbox: da
}, ha = {
  CoreCheckboxInstall: Zs
}, dt = {
  checkStroke: fa
}, Ks = {
  install: (e, t) => {
    p.isModuleInstalled(e, En) || (p.installDependencies(e, ha, t), p.installComponents(e, ma), Object.keys(dt).forEach((n) => {
      const s = Ps.kebabize(n);
      ke.register(s, dt[n]), dt[n] = s;
    }), p.markModuleAsInstalled(e, En));
  }
}, pa = O({
  name: "h-collapse",
  props: {
    ...Ko,
    ...Jo
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = () => ({
      class: [n.css_root.value]
    });
    return {
      core: Qo().as("div", s).props(["modelValue", "accordion"]).events(["update:modelValue"]).build()
    };
  }
});
function ya(e, t, n, s, o, r) {
  const i = v("hr-collapse");
  return h(), C(i, F(e.core.props, P(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const ga = /* @__PURE__ */ V(pa, [["render", ya]]), va = O({
  name: "h-collapse-item",
  props: {
    ...Xo,
    header: {
      type: String
    }
  },
  setup(e, t) {
    const n = D(), s = (r) => ({
      class: [n.css_root.value, {
        "-expanded": r.expanded
      }]
    }), o = xo().as("div", s).props(["id"]).build();
    return {
      Icons: Q,
      core: o,
      ...n
    };
  }
}), ba = ["onClick", "onKeydown"];
function wa(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-grow-transition"), a = v("hr-collapse-item");
  return h(), C(a, F(e.core.props, P(e.core.listeners)), {
    default: w((c) => [
      y("div", {
        tabindex: "0",
        class: d([e.css_ec("header")]),
        onClick: c.onClick,
        onKeydown: Ls(c.onClick, ["enter"])
      }, [
        T(e.$slots, "header", {}, () => [
          y("span", {
            class: d([e.css_ec("header-text")])
          }, N(e.header), 3)
        ]),
        y("div", {
          class: d([e.css_ec("expand-icon")])
        }, [
          I(he, { name: "fade-medium" }, {
            default: w(() => [
              c.expanded ? (h(), C(i, {
                key: "contract",
                icon: e.Icons.minus,
                size: "16px"
              }, null, 8, ["icon"])) : (h(), C(i, {
                key: "expand",
                icon: e.Icons.plus,
                size: "16px"
              }, null, 8, ["icon"]))
            ]),
            _: 2
          }, 1024)
        ], 2)
      ], 42, ba),
      I(l, null, {
        default: w(() => [
          G(y("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            y("div", {
              class: d([e.css_ec("expanded-content-inner")])
            }, [
              T(e.$slots, "default")
            ], 2)
          ], 2), [
            [K, c.expanded]
          ])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 3
  }, 16);
}
const $a = /* @__PURE__ */ V(va, [["render", wa]]), Sa = O({
  name: "h-inline-collapse",
  props: {
    ...er,
    expandText: {
      type: String,
      default: "Show more"
    },
    collapseText: {
      type: String,
      default: "Hide"
    },
    textAlign: {
      type: String,
      default: "left"
    },
    animate: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = () => ({
      class: [n.css_root.value]
    });
    return {
      core: tr().as("div", s).props(["modelValue"]).build(),
      ...n
    };
  }
}), ka = ["onClick", "onKeydown"];
function Ia(e, t, n, s, o, r) {
  const i = v("hr-inline-collapse");
  return h(), C(i, F(e.core.props, P(e.core.listeners)), {
    default: w((l) => [
      y("div", {
        tabindex: "0",
        class: d([e.css_ec("toggle-line"), `-align-${e.textAlign}`]),
        onClick: l.onClick,
        onKeydown: Ls(l.onClick, ["enter"])
      }, [
        y("div", {
          class: d([e.css_ec("left-filler")])
        }, null, 2),
        y("div", {
          class: d([e.css_ec("toggle-text")])
        }, N(l.expanded ? e.collapseText : e.expandText), 3),
        y("div", {
          class: d([e.css_ec("right-filler")])
        }, null, 2)
      ], 42, ka),
      (h(), C(Ns(e.animate ? "h-grow-transition" : "div"), null, {
        default: w(() => [
          G(y("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            y("div", {
              class: d([e.css_ec("expanded-content-inner")])
            }, [
              T(e.$slots, "default")
            ], 2)
          ], 2), [
            [K, l.expanded]
          ])
        ]),
        _: 2
      }, 1024))
    ]),
    _: 3
  }, 16);
}
const Ca = /* @__PURE__ */ V(Sa, [["render", Ia]]), Ta = O({
  name: "h-grow-transition",
  setup(e, t) {
    return {
      beforeEnter: (i) => {
        const l = i.getBoundingClientRect();
        i.style.removeProperty("display"), i.style.removeProperty("height");
        const a = i.getBoundingClientRect();
        i.style.height = `${l.height}px`, setTimeout(() => {
          i.style.height = `${a.height}px`;
        }, 10);
      },
      afterEnter: (i) => {
        i.style.removeProperty("height");
      },
      beforeLeave: (i) => {
        const l = i.getBoundingClientRect();
        i.style.height = `${l.height}px`, setTimeout(() => {
          i.style.height = "0px";
        }, 10);
      },
      afterLeave: (i) => {
        i.style.removeProperty("height");
      }
    };
  }
});
function Ma(e, t, n, s, o, r) {
  return h(), C(he, {
    name: "grow",
    onBeforeEnter: e.beforeEnter,
    onAfterEnter: e.afterEnter,
    onBeforeLeave: e.beforeLeave,
    onAfterLeave: e.afterLeave
  }, {
    default: w(() => [
      T(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]);
}
const Oa = /* @__PURE__ */ V(Ta, [["render", Ma], ["__scopeId", "data-v-0bbec4db"]]), Ln = "elementic-transitions", Da = {
  Grow: Oa
}, Va = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ln) || (p.installComponents(e, Da), p.markModuleAsInstalled(e, Ln));
  }
}, Nn = "elementic-collapses", Ea = {
  Collapse: ga,
  CollapseItem: $a,
  InlineCollapse: Ca
}, La = {
  CoreCollapsesInstall: nr,
  TransitionsInstall: Va
}, Na = {
  install: (e, t) => {
    p.isModuleInstalled(e, Nn) || (p.installDependencies(e, La, t), p.installComponents(e, Ea), p.markModuleAsInstalled(e, Nn));
  }
};
class Le extends Error {
}
class _a extends Le {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class Fa extends Le {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class Pa extends Le {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class Xe extends Le {
}
class Js extends Le {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class ue extends Le {
}
class Te extends Le {
  constructor() {
    super("Zone is an abstract class");
  }
}
const b = "numeric", we = "short", ae = "long", pt = {
  year: b,
  month: b,
  day: b
}, Gt = {
  year: b,
  month: we,
  day: b
}, Qs = {
  year: b,
  month: we,
  day: b,
  weekday: we
}, Kt = {
  year: b,
  month: ae,
  day: b
}, Jt = {
  year: b,
  month: ae,
  day: b,
  weekday: ae
}, Qt = {
  hour: b,
  minute: b
}, Xt = {
  hour: b,
  minute: b,
  second: b
}, xt = {
  hour: b,
  minute: b,
  second: b,
  timeZoneName: we
}, en = {
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ae
}, tn = {
  hour: b,
  minute: b,
  hour12: !1
}, nn = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1
}, sn = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1,
  timeZoneName: we
}, on = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1,
  timeZoneName: ae
}, rn = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b
}, ln = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b,
  second: b
}, an = {
  year: b,
  month: we,
  day: b,
  hour: b,
  minute: b
}, cn = {
  year: b,
  month: we,
  day: b,
  hour: b,
  minute: b,
  second: b
}, Xs = {
  year: b,
  month: we,
  day: b,
  weekday: we,
  hour: b,
  minute: b
}, un = {
  year: b,
  month: ae,
  day: b,
  hour: b,
  minute: b,
  timeZoneName: we
}, dn = {
  year: b,
  month: ae,
  day: b,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: we
}, fn = {
  year: b,
  month: ae,
  day: b,
  weekday: ae,
  hour: b,
  minute: b,
  timeZoneName: ae
}, mn = {
  year: b,
  month: ae,
  day: b,
  weekday: ae,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ae
};
function A(e) {
  return typeof e > "u";
}
function Ee(e) {
  return typeof e == "number";
}
function St(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Aa(e) {
  return typeof e == "string";
}
function Ha(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Se() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function ot() {
  return !A(Intl.DateTimeFormat.prototype.formatToParts);
}
function xs() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function za(e) {
  return Array.isArray(e) ? e : [e];
}
function _n(e, t, n) {
  if (e.length !== 0)
    return e.reduce((s, o) => {
      const r = [t(o), o];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function eo(e, t) {
  return t.reduce((n, s) => (n[s] = e[s], n), {});
}
function qe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ie(e, t, n) {
  return St(e) && e >= t && e <= n;
}
function Ra(e, t) {
  return e - t * Math.floor(e / t);
}
function Ze(e, t = 2) {
  const n = e < 0 ? "-" : "", s = n ? e * -1 : e;
  let o;
  return s.toString().length < t ? o = ("0".repeat(t) + s).slice(-t) : o = s.toString(), `${n}${o}`;
}
function ne(e) {
  if (!(A(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function hn(e) {
  if (!(A(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function pn(e, t, n = !1) {
  const s = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * s) / s;
}
function rt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function tt(e) {
  return rt(e) ? 366 : 365;
}
function yt(e, t) {
  const n = Ra(t - 1, 12) + 1, s = e + (t - n) / 12;
  return n === 2 ? rt(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function yn(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(t.getUTCFullYear() - 1900)), +t;
}
function gt(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, n = e - 1, s = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return t === 4 || s === 3 ? 53 : 52;
}
function Ft(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function to(e, t, n, s = null) {
  const o = new Date(e), r = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (r.timeZone = s);
  const i = Object.assign({ timeZoneName: t }, r), l = Se();
  if (l && ot()) {
    const a = new Intl.DateTimeFormat(n, i).formatToParts(o).find((c) => c.type.toLowerCase() === "timezonename");
    return a ? a.value : null;
  } else if (l) {
    const a = new Intl.DateTimeFormat(n, r).format(o);
    return new Intl.DateTimeFormat(n, i).format(o).substring(a.length).replace(/^[, \u200e]+/, "");
  } else
    return null;
}
function kt(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(t, 10) || 0, o = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + o;
}
function no(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new ue(`Invalid unit value ${e}`);
  return t;
}
function vt(e, t, n) {
  const s = {};
  for (const o in e)
    if (qe(e, o)) {
      if (n.indexOf(o) >= 0)
        continue;
      const r = e[o];
      if (r == null)
        continue;
      s[t(o)] = no(r);
    }
  return s;
}
function bt(e, t) {
  const n = Math.trunc(Math.abs(e / 60)), s = Math.trunc(Math.abs(e % 60)), o = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${o}${Ze(n, 2)}:${Ze(s, 2)}`;
    case "narrow":
      return `${o}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${o}${Ze(n, 2)}${Ze(s, 2)}`;
    default:
      throw new RangeError(`Value format ${t} is out of range for property format`);
  }
}
function It(e) {
  return eo(e, ["hour", "minute", "second", "millisecond"]);
}
const so = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function q(e) {
  return JSON.stringify(e, Object.keys(e).sort());
}
const Ba = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], oo = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Za = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ro(e) {
  switch (e) {
    case "narrow":
      return [...Za];
    case "short":
      return [...oo];
    case "long":
      return [...Ba];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const io = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], lo = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Wa = ["M", "T", "W", "T", "F", "S", "S"];
function ao(e) {
  switch (e) {
    case "narrow":
      return [...Wa];
    case "short":
      return [...lo];
    case "long":
      return [...io];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const co = ["AM", "PM"], qa = ["Before Christ", "Anno Domini"], ja = ["BC", "AD"], Ua = ["B", "A"];
function uo(e) {
  switch (e) {
    case "narrow":
      return [...Ua];
    case "short":
      return [...ja];
    case "long":
      return [...qa];
    default:
      return null;
  }
}
function Ya(e) {
  return co[e.hour < 12 ? 0 : 1];
}
function Ga(e, t) {
  return ao(t)[e.weekday - 1];
}
function Ka(e, t) {
  return ro(t)[e.month - 1];
}
function Ja(e, t) {
  return uo(t)[e.year < 0 ? 0 : 1];
}
function Qa(e, t, n = "always", s = !1) {
  const o = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (n === "auto" && r) {
    const f = e === "days";
    switch (t) {
      case 1:
        return f ? "tomorrow" : `next ${o[e][0]}`;
      case -1:
        return f ? "yesterday" : `last ${o[e][0]}`;
      case 0:
        return f ? "today" : `this ${o[e][0]}`;
    }
  }
  const i = Object.is(t, -0) || t < 0, l = Math.abs(t), a = l === 1, c = o[e], u = s ? a ? c[1] : c[2] || c[1] : a ? o[e][0] : e;
  return i ? `${l} ${u} ago` : `in ${l} ${u}`;
}
function Xa(e) {
  const t = eo(e, [
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "hour12"
  ]), n = q(t), s = "EEEE, LLLL d, yyyy, h:mm a";
  switch (n) {
    case q(pt):
      return "M/d/yyyy";
    case q(Gt):
      return "LLL d, yyyy";
    case q(Qs):
      return "EEE, LLL d, yyyy";
    case q(Kt):
      return "LLLL d, yyyy";
    case q(Jt):
      return "EEEE, LLLL d, yyyy";
    case q(Qt):
      return "h:mm a";
    case q(Xt):
      return "h:mm:ss a";
    case q(xt):
      return "h:mm a";
    case q(en):
      return "h:mm a";
    case q(tn):
      return "HH:mm";
    case q(nn):
      return "HH:mm:ss";
    case q(sn):
      return "HH:mm";
    case q(on):
      return "HH:mm";
    case q(rn):
      return "M/d/yyyy, h:mm a";
    case q(an):
      return "LLL d, yyyy, h:mm a";
    case q(un):
      return "LLLL d, yyyy, h:mm a";
    case q(fn):
      return s;
    case q(ln):
      return "M/d/yyyy, h:mm:ss a";
    case q(cn):
      return "LLL d, yyyy, h:mm:ss a";
    case q(Xs):
      return "EEE, d LLL yyyy, h:mm a";
    case q(dn):
      return "LLLL d, yyyy, h:mm:ss a";
    case q(mn):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return s;
  }
}
function Fn(e, t) {
  let n = "";
  for (const s of e)
    s.literal ? n += s.val : n += t(s.val);
  return n;
}
const xa = {
  D: pt,
  DD: Gt,
  DDD: Kt,
  DDDD: Jt,
  t: Qt,
  tt: Xt,
  ttt: xt,
  tttt: en,
  T: tn,
  TT: nn,
  TTT: sn,
  TTTT: on,
  f: rn,
  ff: an,
  fff: un,
  ffff: fn,
  F: ln,
  FF: cn,
  FFF: dn,
  FFFF: mn
};
class se {
  static create(t, n = {}) {
    return new se(t, n);
  }
  static parseFormat(t) {
    let n = null, s = "", o = !1;
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const l = t.charAt(i);
      l === "'" ? (s.length > 0 && r.push({ literal: o, val: s }), n = null, s = "", o = !o) : o || l === n ? s += l : (s.length > 0 && r.push({ literal: !1, val: s }), s = l, n = l);
    }
    return s.length > 0 && r.push({ literal: o, val: s }), r;
  }
  static macroTokenToFormatOpts(t) {
    return xa[t];
  }
  constructor(t, n) {
    this.opts = n, this.loc = t, this.systemLoc = null;
  }
  formatWithSystemDefault(t, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
  }
  formatDateTime(t, n = {}) {
    return this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
  }
  formatDateTimeParts(t, n = {}) {
    return this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).formatToParts();
  }
  resolvedOptions(t, n = {}) {
    return this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).resolvedOptions();
  }
  num(t, n = 0) {
    if (this.opts.forceSimple)
      return Ze(t, n);
    const s = Object.assign({}, this.opts);
    return n > 0 && (s.padTo = n), this.loc.numberFormatter(s).format(t);
  }
  formatDateTimeFromString(t, n) {
    const s = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && ot(), r = (g, S) => this.loc.extract(t, g, S), i = (g) => t.isOffsetFixed && t.offset === 0 && g.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, g.format) : "", l = () => s ? Ya(t) : r({ hour: "numeric", hour12: !0 }, "dayperiod"), a = (g, S) => s ? Ka(t, g) : r(S ? { month: g } : { month: g, day: "numeric" }, "month"), c = (g, S) => s ? Ga(t, g) : r(
      S ? { weekday: g } : { weekday: g, month: "long", day: "numeric" },
      "weekday"
    ), u = (g) => {
      const S = se.macroTokenToFormatOpts(g);
      return S ? this.formatWithSystemDefault(t, S) : g;
    }, f = (g) => s ? Ja(t, g) : r({ era: g }, "era"), m = (g) => {
      switch (g) {
        case "S":
          return this.num(t.millisecond);
        case "u":
        case "SSS":
          return this.num(t.millisecond, 3);
        case "s":
          return this.num(t.second);
        case "ss":
          return this.num(t.second, 2);
        case "m":
          return this.num(t.minute);
        case "mm":
          return this.num(t.minute, 2);
        case "h":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return this.num(t.hour);
        case "HH":
          return this.num(t.hour, 2);
        case "Z":
          return i({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return i({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return i({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return t.zoneName;
        case "a":
          return l();
        case "d":
          return o ? r({ day: "numeric" }, "day") : this.num(t.day);
        case "dd":
          return o ? r({ day: "2-digit" }, "day") : this.num(t.day, 2);
        case "c":
          return this.num(t.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(t.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return o ? r({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
        case "LL":
          return o ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
        case "LLL":
          return a("short", !0);
        case "LLLL":
          return a("long", !0);
        case "LLLLL":
          return a("narrow", !0);
        case "M":
          return o ? r({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return o ? r({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return a("short", !1);
        case "MMMM":
          return a("long", !1);
        case "MMMMM":
          return a("narrow", !1);
        case "y":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return o ? r({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year, 6);
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(t.weekYear, 4);
        case "W":
          return this.num(t.weekNumber);
        case "WW":
          return this.num(t.weekNumber, 2);
        case "o":
          return this.num(t.ordinal);
        case "ooo":
          return this.num(t.ordinal, 3);
        case "q":
          return this.num(t.quarter);
        case "qq":
          return this.num(t.quarter, 2);
        case "X":
          return this.num(Math.floor(t.ts / 1e3));
        case "x":
          return this.num(t.ts);
        default:
          return u(g);
      }
    };
    return Fn(se.parseFormat(n), m);
  }
  formatDurationFromString(t, n) {
    const s = (a) => {
      switch (a[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, o = (a) => (c) => {
      const u = s(c);
      return u ? this.num(a.get(u), c.length) : c;
    }, r = se.parseFormat(n), i = r.reduce(
      (a, { literal: c, val: u }) => c ? a : a.concat(u),
      []
    ), l = t.shiftTo(...i.map(s).filter((a) => a));
    return Fn(r, o(l));
  }
}
class be {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class it {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Te();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Te();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get universal() {
    throw new Te();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(t, n) {
    throw new Te();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(t, n) {
    throw new Te();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    throw new Te();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(t) {
    throw new Te();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Te();
  }
}
let Mt = null;
class gn extends it {
  /**
   * Get a singleton instance of the local zone
   * @return {LocalZone}
   */
  static get instance() {
    return Mt === null && (Mt = new gn()), Mt;
  }
  /** @override **/
  get type() {
    return "local";
  }
  /** @override **/
  get name() {
    return Se() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
  }
  /** @override **/
  get universal() {
    return !1;
  }
  /** @override **/
  offsetName(t, { format: n, locale: s }) {
    return to(t, n, s);
  }
  /** @override **/
  formatOffset(t, n) {
    return bt(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  /** @override **/
  equals(t) {
    return t.type === "local";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const ec = RegExp(`^${so.source}$`);
let ft = {};
function tc(e) {
  return ft[e] || (ft[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), ft[e];
}
const nc = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function sc(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, o, r, i, l, a, c] = s;
  return [i, o, r, l, a, c];
}
function oc(e, t) {
  const n = e.formatToParts(t), s = [];
  for (let o = 0; o < n.length; o++) {
    const { type: r, value: i } = n[o], l = nc[r];
    A(l) || (s[l] = parseInt(i, 10));
  }
  return s;
}
let at = {};
class me extends it {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    return at[t] || (at[t] = new me(t)), at[t];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    at = {}, ft = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidSpecifier(t) {
    return !!(t && t.match(ec));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(t) {
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  // Etc/GMT+8 -> -480
  /** @ignore */
  static parseGMTOffset(t) {
    if (t) {
      const n = t.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
      if (n)
        return -60 * parseInt(n[1]);
    }
    return null;
  }
  constructor(t) {
    super(), this.zoneName = t, this.valid = me.isValidZone(t);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get universal() {
    return !1;
  }
  /** @override **/
  offsetName(t, { format: n, locale: s }) {
    return to(t, n, s, this.name);
  }
  /** @override **/
  formatOffset(t, n) {
    return bt(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    const n = new Date(t);
    if (isNaN(n))
      return NaN;
    const s = tc(this.name), [o, r, i, l, a, c] = s.formatToParts ? oc(s, n) : sc(s, n), f = yn({
      year: o,
      month: r,
      day: i,
      hour: l === 24 ? 0 : l,
      minute: a,
      second: c,
      millisecond: 0
    });
    let m = +n;
    const g = m % 1e3;
    return m -= g >= 0 ? g : 1e3 + g, (f - m) / (60 * 1e3);
  }
  /** @override **/
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let Ot = null;
class x extends it {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ot === null && (Ot = new x(0)), Ot;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(t) {
    return t === 0 ? x.utcInstance : new x(t);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new x(kt(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super(), this.fixed = t;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${bt(this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(t, n) {
    return bt(this.fixed, n);
  }
  /** @override **/
  get universal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class Pn extends it {
  constructor(t) {
    super(), this.zoneName = t;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get universal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function De(e, t) {
  let n;
  if (A(e) || e === null)
    return t;
  if (e instanceof it)
    return e;
  if (Aa(e)) {
    const s = e.toLowerCase();
    return s === "local" ? t : s === "utc" || s === "gmt" ? x.utcInstance : (n = me.parseGMTOffset(e)) != null ? x.instance(n) : me.isValidSpecifier(s) ? me.create(e) : x.parseSpecifier(s) || new Pn(e);
  } else
    return Ee(e) ? x.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Pn(e);
}
let An = () => Date.now(), Dt = null, Hn = null, zn = null, Rn = null, Bn = !1;
class Y {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return An;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(t) {
    An = t;
  }
  /**
   * Get the default time zone to create DateTimes in.
   * @type {string}
   */
  static get defaultZoneName() {
    return Y.defaultZone.name;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * @type {string}
   */
  static set defaultZoneName(t) {
    t ? Dt = De(t) : Dt = null;
  }
  /**
   * Get the default time zone object to create DateTimes in. Does not affect existing instances.
   * @type {Zone}
   */
  static get defaultZone() {
    return Dt || gn.instance;
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Hn;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(t) {
    Hn = t;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return zn;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(t) {
    zn = t;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Rn;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(t) {
    Rn = t;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Bn;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    Bn = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    j.resetCache(), me.resetCache();
  }
}
let Pt = {};
function At(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Pt[n];
  return s || (s = new Intl.DateTimeFormat(e, t), Pt[n] = s), s;
}
let Ht = {};
function rc(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Ht[n];
  return s || (s = new Intl.NumberFormat(e, t), Ht[n] = s), s;
}
let zt = {};
function ic(e, t = {}) {
  const { base: n, ...s } = t, o = JSON.stringify([e, s]);
  let r = zt[o];
  return r || (r = new Intl.RelativeTimeFormat(e, t), zt[o] = r), r;
}
let Oe = null;
function lc() {
  if (Oe)
    return Oe;
  if (Se()) {
    const e = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Oe = !e || e === "und" ? "en-US" : e, Oe;
  } else
    return Oe = "en-US", Oe;
}
function ac(e) {
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let n;
    const s = e.substring(0, t);
    try {
      n = At(e).resolvedOptions();
    } catch {
      n = At(s).resolvedOptions();
    }
    const { numberingSystem: o, calendar: r } = n;
    return [s, o, r];
  }
}
function cc(e, t, n) {
  return Se() ? ((n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e) : [];
}
function uc(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const s = E.utc(2016, n, 1);
    t.push(e(s));
  }
  return t;
}
function dc(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const s = E.utc(2016, 11, 13 + n);
    t.push(e(s));
  }
  return t;
}
function ct(e, t, n, s, o) {
  const r = e.listingMode(n);
  return r === "error" ? null : r === "en" ? s(t) : o(t);
}
function fc(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || Se() && new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class mc {
  constructor(t, n, s) {
    if (this.padTo = s.padTo || 0, this.floor = s.floor || !1, !n && Se()) {
      const o = { useGrouping: !1 };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = rc(t, o);
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : pn(t, 3);
      return Ze(n, this.padTo);
    }
  }
}
class hc {
  constructor(t, n, s) {
    this.opts = s, this.hasIntl = Se();
    let o;
    if (t.zone.universal && this.hasIntl) {
      const r = -1 * (t.offset / 60), i = r >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`, l = me.isValidZone(i);
      t.offset !== 0 && l ? (o = i, this.dt = t) : (o = "UTC", s.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : E.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "local" ? this.dt = t : (this.dt = t, o = t.zone.name);
    if (this.hasIntl) {
      const r = Object.assign({}, this.opts);
      o && (r.timeZone = o), this.dtf = At(n, r);
    }
  }
  format() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    {
      const t = Xa(this.opts), n = j.create("en-US");
      return se.create(n).formatDateTimeFromString(this.dt, t);
    }
  }
  formatToParts() {
    return this.hasIntl && ot() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }
  resolvedOptions() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }
}
class pc {
  constructor(t, n, s) {
    this.opts = Object.assign({ style: "long" }, s), !n && xs() && (this.rtf = ic(t, s));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : Qa(n, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
class j {
  static fromOpts(t) {
    return j.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }
  static create(t, n, s, o = !1) {
    const r = t || Y.defaultLocale, i = r || (o ? "en-US" : lc()), l = n || Y.defaultNumberingSystem, a = s || Y.defaultOutputCalendar;
    return new j(i, l, a, r);
  }
  static resetCache() {
    Oe = null, Pt = {}, Ht = {}, zt = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    return j.create(t, n, s);
  }
  constructor(t, n, s, o) {
    const [r, i, l] = ac(t);
    this.locale = r, this.numberingSystem = n || i || null, this.outputCalendar = s || l || null, this.intl = cc(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = fc(this)), this.fastNumbersCached;
  }
  listingMode(t = !0) {
    const n = Se(), s = n && ot(), o = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !s && !(o && r) && !t ? "error" : !s || o && r ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : j.create(
      t.locale || this.specifiedLocale,
      t.numberingSystem || this.numberingSystem,
      t.outputCalendar || this.outputCalendar,
      t.defaultToEN || !1
    );
  }
  redefaultToEN(t = {}) {
    return this.clone(Object.assign({}, t, { defaultToEN: !0 }));
  }
  redefaultToSystem(t = {}) {
    return this.clone(Object.assign({}, t, { defaultToEN: !1 }));
  }
  months(t, n = !1, s = !0) {
    return ct(this, t, s, ro, () => {
      const o = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      return this.monthsCache[r][t] || (this.monthsCache[r][t] = uc((i) => this.extract(i, o, "month"))), this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1, s = !0) {
    return ct(this, t, s, ao, () => {
      const o = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, r = n ? "format" : "standalone";
      return this.weekdaysCache[r][t] || (this.weekdaysCache[r][t] = dc(
        (i) => this.extract(i, o, "weekday")
      )), this.weekdaysCache[r][t];
    });
  }
  meridiems(t = !0) {
    return ct(
      this,
      void 0,
      t,
      () => co,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: "numeric", hour12: !0 };
          this.meridiemCache = [E.utc(2016, 11, 13, 9), E.utc(2016, 11, 13, 19)].map(
            (s) => this.extract(s, n, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, n = !0) {
    return ct(this, t, n, uo, () => {
      const s = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [E.utc(-40, 1, 1), E.utc(2017, 1, 1)].map(
        (o) => this.extract(o, s, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, s) {
    const o = this.dtFormatter(t, n), r = o.formatToParts(), i = r.find((l) => l.type.toLowerCase() === s);
    return i ? i.value : null;
  }
  numberFormatter(t = {}) {
    return new mc(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new hc(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new pc(this.intl, this.isEnglish(), t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Se() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
}
function je(...e) {
  const t = e.reduce((n, s) => n + s.source, "");
  return RegExp(`^${t}$`);
}
function Ne(...e) {
  return (t) => e.reduce(
    ([n, s, o], r) => {
      const [i, l, a] = r(t, o);
      return [Object.assign(n, i), s || l, a];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ue(e, ...t) {
  if (e == null)
    return [null, null];
  for (const [n, s] of t) {
    const o = n.exec(e);
    if (o)
      return s(o);
  }
  return [null, null];
}
function fo(...e) {
  return (t, n) => {
    const s = {};
    let o;
    for (o = 0; o < e.length; o++)
      s[e[o]] = ne(t[n + o]);
    return [s, null, n + o];
  };
}
const mo = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, vn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, ho = RegExp(`${vn.source}${mo.source}?`), bn = RegExp(`(?:T${ho.source})?`), yc = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, gc = /(\d{4})-?W(\d\d)(?:-?(\d))?/, vc = /(\d{4})-?(\d{3})/, bc = fo("weekYear", "weekNumber", "weekDay"), wc = fo("year", "ordinal"), $c = /(\d{4})-(\d\d)-(\d\d)/, po = RegExp(
  `${vn.source} ?(?:${mo.source}|(${so.source}))?`
), Sc = RegExp(`(?: ${po.source})?`);
function We(e, t, n) {
  const s = e[t];
  return A(s) ? n : ne(s);
}
function yo(e, t) {
  return [{
    year: We(e, t),
    month: We(e, t + 1, 1),
    day: We(e, t + 2, 1)
  }, null, t + 3];
}
function _e(e, t) {
  return [{
    hours: We(e, t, 0),
    minutes: We(e, t + 1, 0),
    seconds: We(e, t + 2, 0),
    milliseconds: hn(e[t + 3])
  }, null, t + 4];
}
function Ye(e, t) {
  const n = !e[t] && !e[t + 1], s = kt(e[t + 1], e[t + 2]), o = n ? null : x.instance(s);
  return [{}, o, t + 3];
}
function go(e, t) {
  const n = e[t] ? me.create(e[t]) : null;
  return [{}, n, t + 1];
}
const kc = RegExp(`^T?${vn.source}$`), Ic = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function Cc(e) {
  const [
    t,
    n,
    s,
    o,
    r,
    i,
    l,
    a,
    c
  ] = e, u = t[0] === "-", f = a && a[0] === "-", m = (g, S = !1) => g !== void 0 && (S || g && u) ? -g : g;
  return [
    {
      years: m(ne(n)),
      months: m(ne(s)),
      weeks: m(ne(o)),
      days: m(ne(r)),
      hours: m(ne(i)),
      minutes: m(ne(l)),
      seconds: m(ne(a), a === "-0"),
      milliseconds: m(hn(c), f)
    }
  ];
}
const Tc = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function wn(e, t, n, s, o, r, i) {
  const l = {
    year: t.length === 2 ? Ft(ne(t)) : ne(t),
    month: oo.indexOf(n) + 1,
    day: ne(s),
    hour: ne(o),
    minute: ne(r)
  };
  return i && (l.second = ne(i)), e && (l.weekday = e.length > 3 ? io.indexOf(e) + 1 : lo.indexOf(e) + 1), l;
}
const Mc = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Oc(e) {
  const [
    ,
    t,
    n,
    s,
    o,
    r,
    i,
    l,
    a,
    c,
    u,
    f
  ] = e, m = wn(t, o, s, n, r, i, l);
  let g;
  return a ? g = Tc[a] : c ? g = 0 : g = kt(u, f), [m, new x(g)];
}
function Dc(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Vc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Ec = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Lc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Zn(e) {
  const [, t, n, s, o, r, i, l] = e;
  return [wn(t, o, s, n, r, i, l), x.utcInstance];
}
function Nc(e) {
  const [, t, n, s, o, r, i, l] = e;
  return [wn(t, l, n, s, o, r, i), x.utcInstance];
}
const _c = je(yc, bn), Fc = je(gc, bn), Pc = je(vc, bn), Ac = je(ho), Hc = Ne(
  yo,
  _e,
  Ye
), zc = Ne(
  bc,
  _e,
  Ye
), Rc = Ne(
  wc,
  _e,
  Ye
), Bc = Ne(_e, Ye);
function Zc(e) {
  return Ue(
    e,
    [_c, Hc],
    [Fc, zc],
    [Pc, Rc],
    [Ac, Bc]
  );
}
function Wc(e) {
  return Ue(Dc(e), [Mc, Oc]);
}
function qc(e) {
  return Ue(
    e,
    [Vc, Zn],
    [Ec, Zn],
    [Lc, Nc]
  );
}
function jc(e) {
  return Ue(e, [Ic, Cc]);
}
const Uc = Ne(_e);
function Yc(e) {
  return Ue(e, [kc, Uc]);
}
const Gc = je($c, Sc), Kc = je(po), Jc = Ne(
  yo,
  _e,
  Ye,
  go
), Qc = Ne(
  _e,
  Ye,
  go
);
function Xc(e) {
  return Ue(
    e,
    [Gc, Jc],
    [Kc, Qc]
  );
}
const xc = "Invalid Duration", vo = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, eu = Object.assign(
  {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1e3
    }
  },
  vo
), ce = 146097 / 400, Pe = 146097 / 4800, tu = Object.assign(
  {
    years: {
      quarters: 4,
      months: 12,
      weeks: ce / 7,
      days: ce,
      hours: ce * 24,
      minutes: ce * 24 * 60,
      seconds: ce * 24 * 60 * 60,
      milliseconds: ce * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: ce / 28,
      days: ce / 4,
      hours: ce * 24 / 4,
      minutes: ce * 24 * 60 / 4,
      seconds: ce * 24 * 60 * 60 / 4,
      milliseconds: ce * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: Pe / 7,
      days: Pe,
      hours: Pe * 24,
      minutes: Pe * 24 * 60,
      seconds: Pe * 24 * 60 * 60,
      milliseconds: Pe * 24 * 60 * 60 * 1e3
    }
  },
  vo
), He = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], nu = He.slice(0).reverse();
function Me(e, t, n = !1) {
  const s = {
    values: n ? t.values : Object.assign({}, e.values, t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new B(s);
}
function su(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function bo(e, t, n, s, o) {
  const r = e[o][n], i = t[n] / r, l = Math.sign(i) === Math.sign(s[o]), a = !l && s[o] !== 0 && Math.abs(i) <= 1 ? su(i) : Math.trunc(i);
  s[o] += a, t[n] -= a * r;
}
function ou(e, t) {
  nu.reduce((n, s) => A(t[s]) ? n : (n && bo(e, t, n, t, s), s), null);
}
class B {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || j.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? tu : eu, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(t, n) {
    return B.fromObject(Object.assign({ milliseconds: t }, n));
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromObject(t) {
    if (t == null || typeof t != "object")
      throw new ue(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new B({
      values: vt(t, B.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
        // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: j.fromObject(t),
      conversionAccuracy: t.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(t, n) {
    const [s] = jc(t);
    if (s) {
      const o = Object.assign(s, n);
      return B.fromObject(o);
    } else
      return B.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(t, n) {
    const [s] = Yc(t);
    if (s) {
      const o = Object.assign(s, n);
      return B.fromObject(o);
    } else
      return B.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new ue("need to specify a reason the Duration is invalid");
    const s = t instanceof be ? t : new be(t, n);
    if (Y.throwOnInvalid)
      throw new Pa(s);
    return new B({ invalid: s });
  }
  /**
   * @private
   */
  static normalizeUnit(t) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[t && t.toLowerCase()];
    if (!n)
      throw new Js(t);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(t) {
    return t && t.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(t, n = {}) {
    const s = Object.assign({}, n, {
      floor: n.round !== !1 && n.floor !== !1
    });
    return this.isValid ? se.create(this.loc, s).formatDurationFromString(this, t) : xc;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const n = Object.assign({}, this.values);
    return t.includeConfig && (n.conversionAccuracy = this.conversionAccuracy, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += pn(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(t = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    if (n < 0 || n >= 864e5)
      return null;
    t = Object.assign(
      {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended"
      },
      t
    );
    const s = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let o = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || s.seconds !== 0 || s.milliseconds !== 0) && (o += t.format === "basic" ? "ss" : ":ss", (!t.suppressMilliseconds || s.milliseconds !== 0) && (o += ".SSS"));
    let r = s.toFormat(o);
    return t.includePrefix && (r = "T" + r), r;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(t) {
    if (!this.isValid)
      return this;
    const n = Ve(t), s = {};
    for (const o of He)
      (qe(n.values, o) || qe(this.values, o)) && (s[o] = n.get(o) + this.get(o));
    return Me(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(t) {
    if (!this.isValid)
      return this;
    const n = Ve(t);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(t) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const s of Object.keys(this.values))
      n[s] = no(t(this.values[s], s));
    return Me(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(t) {
    return this[B.normalizeUnit(t)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(t) {
    if (!this.isValid)
      return this;
    const n = Object.assign(this.values, vt(t, B.normalizeUnit, []));
    return Me(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n }), r = { loc: o };
    return s && (r.conversionAccuracy = s), Me(this, r);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const t = this.toObject();
    return ou(this.matrix, t), Me(this, { values: t }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...t) {
    if (!this.isValid)
      return this;
    if (t.length === 0)
      return this;
    t = t.map((i) => B.normalizeUnit(i));
    const n = {}, s = {}, o = this.toObject();
    let r;
    for (const i of He)
      if (t.indexOf(i) >= 0) {
        r = i;
        let l = 0;
        for (const c in s)
          l += this.matrix[c][i] * s[c], s[c] = 0;
        Ee(o[i]) && (l += o[i]);
        const a = Math.trunc(l);
        n[i] = a, s[i] = l - a;
        for (const c in o)
          He.indexOf(c) > He.indexOf(i) && bo(this.matrix, o, c, n, i);
      } else
        Ee(o[i]) && (s[i] = o[i]);
    for (const i in s)
      s[i] !== 0 && (n[r] += i === r ? s[i] : s[i] / this.matrix[r][i]);
    return Me(this, { values: n }, !0).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = -this.values[n];
    return Me(this, { values: t }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function n(s, o) {
      return s === void 0 || s === 0 ? o === void 0 || o === 0 : s === o;
    }
    for (const s of He)
      if (!n(this.values[s], t.values[s]))
        return !1;
    return !0;
  }
}
function Ve(e) {
  if (Ee(e))
    return B.fromMillis(e);
  if (B.isDuration(e))
    return e;
  if (typeof e == "object")
    return B.fromObject(e);
  throw new ue(
    `Unknown duration argument ${e} of type ${typeof e}`
  );
}
const Ge = "Invalid Interval";
function ru(e, t) {
  return !e || !e.isValid ? U.invalid("missing or invalid start") : !t || !t.isValid ? U.invalid("missing or invalid end") : t < e ? U.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
  ) : null;
}
class U {
  /**
   * @private
   */
  constructor(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new ue("need to specify a reason the Interval is invalid");
    const s = t instanceof be ? t : new be(t, n);
    if (Y.throwOnInvalid)
      throw new Fa(s);
    return new U({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const s = Qe(t), o = Qe(n), r = ru(s, o);
    return r ?? new U({
      start: s,
      end: o
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(t, n) {
    const s = Ve(n), o = Qe(t);
    return U.fromDateTimes(o, o.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const s = Ve(n), o = Qe(t);
    return U.fromDateTimes(o.minus(s), o);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(t, n) {
    const [s, o] = (t || "").split("/", 2);
    if (s && o) {
      let r, i;
      try {
        r = E.fromISO(s, n), i = r.isValid;
      } catch {
        i = !1;
      }
      let l, a;
      try {
        l = E.fromISO(o, n), a = l.isValid;
      } catch {
        a = !1;
      }
      if (i && a)
        return U.fromDateTimes(r, l);
      if (i) {
        const c = B.fromISO(o, n);
        if (c.isValid)
          return U.after(r, c);
      } else if (a) {
        const c = B.fromISO(s, n);
        if (c.isValid)
          return U.before(l, c);
      }
    }
    return U.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(t) {
    return t && t.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(t = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(t), s = this.end.startOf(t);
    return Math.floor(s.diff(n, t).get(t)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: t, end: n } = {}) {
    return this.isValid ? U.fromDateTimes(t || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  splitAt(...t) {
    if (!this.isValid)
      return [];
    const n = t.map(Qe).filter((i) => this.contains(i)).sort(), s = [];
    let { s: o } = this, r = 0;
    for (; o < this.e; ) {
      const i = n[r] || this.e, l = +i > +this.e ? this.e : i;
      s.push(U.fromDateTimes(o, l)), o = l, r += 1;
    }
    return s;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  splitBy(t) {
    const n = Ve(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, o = 1, r;
    const i = [];
    for (; s < this.e; ) {
      const l = this.start.plus(n.mapUnits((a) => a * o));
      r = +l > +this.e ? this.e : l, i.push(U.fromDateTimes(s, r)), s = r, o += 1;
    }
    return i;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(t) {
    if (!this.isValid)
      return this;
    const n = this.s > t.s ? this.s : t.s, s = this.e < t.e ? this.e : t.e;
    return n >= s ? null : U.fromDateTimes(n, s);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(t) {
    if (!this.isValid)
      return this;
    const n = this.s < t.s ? this.s : t.s, s = this.e > t.e ? this.e : t.e;
    return U.fromDateTimes(n, s);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  static merge(t) {
    const [n, s] = t.sort((o, r) => o.s - r.s).reduce(
      ([o, r], i) => r ? r.overlaps(i) || r.abutsStart(i) ? [o, r.union(i)] : [o.concat([r]), i] : [o, i],
      [[], null]
    );
    return s && n.push(s), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  static xor(t) {
    let n = null, s = 0;
    const o = [], r = t.map((a) => [{ time: a.s, type: "s" }, { time: a.e, type: "e" }]), i = Array.prototype.concat(...r), l = i.sort((a, c) => a.time - c.time);
    for (const a of l)
      s += a.type === "s" ? 1 : -1, s === 1 ? n = a.time : (n && +n != +a.time && o.push(U.fromDateTimes(n, a.time)), n = null);
    return U.merge(o);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  difference(...t) {
    return U.xor([this].concat(t)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Ge;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Ge;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(t, n) {
    return this.isValid ? this.e.diff(this.s, t, n) : B.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(t) {
    return U.fromDateTimes(t(this.s), t(this.e));
  }
}
class xe {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(t = Y.defaultZone) {
    const n = E.now().setZone(t).set({ month: 12 });
    return !t.universal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(t) {
    return me.isValidSpecifier(t) && me.isValidZone(t);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(t) {
    return De(t, Y.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  static months(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: r = "gregory" } = {}) {
    return (o || j.create(n, s, r)).months(t);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  static monthsFormat(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: r = "gregory" } = {}) {
    return (o || j.create(n, s, r)).months(t, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  static weekdays(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null } = {}) {
    return (o || j.create(n, s, null)).weekdays(t);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {[string]}
   */
  static weekdaysFormat(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null } = {}) {
    return (o || j.create(n, s, null)).weekdays(t, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  static meridiems({ locale: t = null } = {}) {
    return j.create(t).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  static eras(t = "short", { locale: n = null } = {}) {
    return j.create(n, null, "gregory").eras(t);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  static features() {
    let t = !1, n = !1, s = !1, o = !1;
    if (Se()) {
      t = !0, n = ot(), o = xs();
      try {
        s = new Intl.DateTimeFormat("en", { timeZone: "America/New_York" }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        s = !1;
      }
    }
    return { intl: t, intlTokens: n, zones: s, relative: o };
  }
}
function Wn(e, t) {
  const n = (o) => o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(t) - n(e);
  return Math.floor(B.fromMillis(s).as("days"));
}
function iu(e, t, n) {
  const s = [
    ["years", (l, a) => a.year - l.year],
    ["quarters", (l, a) => a.quarter - l.quarter],
    ["months", (l, a) => a.month - l.month + (a.year - l.year) * 12],
    [
      "weeks",
      (l, a) => {
        const c = Wn(l, a);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Wn]
  ], o = {};
  let r, i;
  for (const [l, a] of s)
    if (n.indexOf(l) >= 0) {
      r = l;
      let c = a(e, t);
      i = e.plus({ [l]: c }), i > t ? (e = e.plus({ [l]: c - 1 }), c -= 1) : e = i, o[l] = c;
    }
  return [e, o, i, r];
}
function lu(e, t, n, s) {
  let [o, r, i, l] = iu(e, t, n);
  const a = t - o, c = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  c.length === 0 && (i < t && (i = o.plus({ [l]: 1 })), i !== o && (r[l] = (r[l] || 0) + a / (i - o)));
  const u = B.fromObject(Object.assign(r, s));
  return c.length > 0 ? B.fromMillis(a, s).shiftTo(...c).plus(u) : u;
}
const $n = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, qn = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, au = $n.hanidec.replace(/[\[|\]]/g, "").split("");
function cu(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const s = e.charCodeAt(n);
      if (e[n].search($n.hanidec) !== -1)
        t += au.indexOf(e[n]);
      else
        for (const o in qn) {
          const [r, i] = qn[o];
          s >= r && s <= i && (t += s - r);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function ge({ numberingSystem: e }, t = "") {
  return new RegExp(`${$n[e || "latn"]}${t}`);
}
const uu = "missing Intl.DateTimeFormat.formatToParts support";
function H(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(cu(n)) };
}
const du = String.fromCharCode(160), wo = `( |${du})`, $o = new RegExp(wo, "g");
function fu(e) {
  return e.replace(/\./g, "\\.?").replace($o, wo);
}
function jn(e) {
  return e.replace(/\./g, "").replace($o, " ").toLowerCase();
}
function ve(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(fu).join("|")),
    deser: ([n]) => e.findIndex((s) => jn(n) === jn(s)) + t
  };
}
function Un(e, t) {
  return { regex: e, deser: ([, n, s]) => kt(n, s), groups: t };
}
function Yn(e) {
  return { regex: e, deser: ([t]) => t };
}
function mu(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function hu(e, t) {
  const n = ge(t), s = ge(t, "{2}"), o = ge(t, "{3}"), r = ge(t, "{4}"), i = ge(t, "{6}"), l = ge(t, "{1,2}"), a = ge(t, "{1,3}"), c = ge(t, "{1,6}"), u = ge(t, "{1,9}"), f = ge(t, "{2,4}"), m = ge(t, "{4,6}"), g = (W) => ({ regex: RegExp(mu(W.val)), deser: ([J]) => J, literal: !0 }), Z = ((W) => {
    if (e.literal)
      return g(W);
    switch (W.val) {
      case "G":
        return ve(t.eras("short", !1), 0);
      case "GG":
        return ve(t.eras("long", !1), 0);
      case "y":
        return H(c);
      case "yy":
        return H(f, Ft);
      case "yyyy":
        return H(r);
      case "yyyyy":
        return H(m);
      case "yyyyyy":
        return H(i);
      case "M":
        return H(l);
      case "MM":
        return H(s);
      case "MMM":
        return ve(t.months("short", !0, !1), 1);
      case "MMMM":
        return ve(t.months("long", !0, !1), 1);
      case "L":
        return H(l);
      case "LL":
        return H(s);
      case "LLL":
        return ve(t.months("short", !1, !1), 1);
      case "LLLL":
        return ve(t.months("long", !1, !1), 1);
      case "d":
        return H(l);
      case "dd":
        return H(s);
      case "o":
        return H(a);
      case "ooo":
        return H(o);
      case "HH":
        return H(s);
      case "H":
        return H(l);
      case "hh":
        return H(s);
      case "h":
        return H(l);
      case "mm":
        return H(s);
      case "m":
        return H(l);
      case "q":
        return H(l);
      case "qq":
        return H(s);
      case "s":
        return H(l);
      case "ss":
        return H(s);
      case "S":
        return H(a);
      case "SSS":
        return H(o);
      case "u":
        return Yn(u);
      case "a":
        return ve(t.meridiems(), 0);
      case "kkkk":
        return H(r);
      case "kk":
        return H(f, Ft);
      case "W":
        return H(l);
      case "WW":
        return H(s);
      case "E":
      case "c":
        return H(n);
      case "EEE":
        return ve(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return ve(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return ve(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return ve(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Un(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Un(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      case "z":
        return Yn(/[a-z_+-/]{1,256}?/i);
      default:
        return g(W);
    }
  })(e) || {
    invalidReason: uu
  };
  return Z.token = e, Z;
}
const pu = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function yu(e, t, n) {
  const { type: s, value: o } = e;
  if (s === "literal")
    return {
      literal: !0,
      val: o
    };
  const r = n[s];
  let i = pu[s];
  if (typeof i == "object" && (i = i[r]), i)
    return {
      literal: !1,
      val: i
    };
}
function gu(e) {
  return [`^${e.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, e];
}
function vu(e, t, n) {
  const s = e.match(t);
  if (s) {
    const o = {};
    let r = 1;
    for (const i in n)
      if (qe(n, i)) {
        const l = n[i], a = l.groups ? l.groups + 1 : 1;
        !l.literal && l.token && (o[l.token.val[0]] = l.deser(s.slice(r, r + a))), r += a;
      }
    return [s, o];
  } else
    return [s, {}];
}
function bu(e) {
  const t = (o) => {
    switch (o) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n;
  return A(e.Z) ? A(e.z) ? n = null : n = me.create(e.z) : n = new x(e.Z), A(e.q) || (e.M = (e.q - 1) * 3 + 1), A(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), A(e.u) || (e.S = hn(e.u)), [Object.keys(e).reduce((o, r) => {
    const i = t(r);
    return i && (o[i] = e[r]), o;
  }, {}), n];
}
let Vt = null;
function wu() {
  return Vt || (Vt = E.fromMillis(1555555555555)), Vt;
}
function $u(e, t) {
  if (e.literal)
    return e;
  const n = se.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const r = se.create(t, n).formatDateTimeParts(wu()).map((i) => yu(i, t, n));
  return r.includes(void 0) ? e : r;
}
function Su(e, t) {
  return Array.prototype.concat(...e.map((n) => $u(n, t)));
}
function So(e, t, n) {
  const s = Su(se.parseFormat(n), e), o = s.map((i) => hu(i, e)), r = o.find((i) => i.invalidReason);
  if (r)
    return { input: t, tokens: s, invalidReason: r.invalidReason };
  {
    const [i, l] = gu(o), a = RegExp(i, "i"), [c, u] = vu(t, a, l), [f, m] = u ? bu(u) : [null, null];
    if (qe(u, "a") && qe(u, "H"))
      throw new Xe(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: s, regex: a, rawMatches: c, matches: u, result: f, zone: m };
  }
}
function ku(e, t, n) {
  const { result: s, zone: o, invalidReason: r } = So(e, t, n);
  return [s, o, r];
}
const ko = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Io = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function de(e, t) {
  return new be(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function Co(e, t, n) {
  const s = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
  return s === 0 ? 7 : s;
}
function To(e, t, n) {
  return n + (rt(e) ? Io : ko)[t - 1];
}
function Mo(e, t) {
  const n = rt(e) ? Io : ko, s = n.findIndex((r) => r < t), o = t - n[s];
  return { month: s + 1, day: o };
}
function Rt(e) {
  const { year: t, month: n, day: s } = e, o = To(t, n, s), r = Co(t, n, s);
  let i = Math.floor((o - r + 10) / 7), l;
  return i < 1 ? (l = t - 1, i = gt(l)) : i > gt(t) ? (l = t + 1, i = 1) : l = t, Object.assign({ weekYear: l, weekNumber: i, weekday: r }, It(e));
}
function Gn(e) {
  const { weekYear: t, weekNumber: n, weekday: s } = e, o = Co(t, 1, 4), r = tt(t);
  let i = n * 7 + s - o - 3, l;
  i < 1 ? (l = t - 1, i += tt(l)) : i > r ? (l = t + 1, i -= tt(t)) : l = t;
  const { month: a, day: c } = Mo(l, i);
  return Object.assign({ year: l, month: a, day: c }, It(e));
}
function Et(e) {
  const { year: t, month: n, day: s } = e, o = To(t, n, s);
  return Object.assign({ year: t, ordinal: o }, It(e));
}
function Kn(e) {
  const { year: t, ordinal: n } = e, { month: s, day: o } = Mo(t, n);
  return Object.assign({ year: t, month: s, day: o }, It(e));
}
function Iu(e) {
  const t = St(e.weekYear), n = Ie(e.weekNumber, 1, gt(e.weekYear)), s = Ie(e.weekday, 1, 7);
  return t ? n ? s ? !1 : de("weekday", e.weekday) : de("week", e.week) : de("weekYear", e.weekYear);
}
function Cu(e) {
  const t = St(e.year), n = Ie(e.ordinal, 1, tt(e.year));
  return t ? n ? !1 : de("ordinal", e.ordinal) : de("year", e.year);
}
function Oo(e) {
  const t = St(e.year), n = Ie(e.month, 1, 12), s = Ie(e.day, 1, yt(e.year, e.month));
  return t ? n ? s ? !1 : de("day", e.day) : de("month", e.month) : de("year", e.year);
}
function Do(e) {
  const { hour: t, minute: n, second: s, millisecond: o } = e, r = Ie(t, 0, 23) || t === 24 && n === 0 && s === 0 && o === 0, i = Ie(n, 0, 59), l = Ie(s, 0, 59), a = Ie(o, 0, 999);
  return r ? i ? l ? a ? !1 : de("millisecond", o) : de("second", s) : de("minute", n) : de("hour", t);
}
const Lt = "Invalid DateTime", Jn = 864e13;
function ut(e) {
  return new be("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Nt(e) {
  return e.weekData === null && (e.weekData = Rt(e.c)), e.weekData;
}
function Ke(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new E(Object.assign({}, n, t, { old: n }));
}
function Vo(e, t, n) {
  let s = e - t * 60 * 1e3;
  const o = n.offset(s);
  if (t === o)
    return [s, t];
  s -= (o - t) * 60 * 1e3;
  const r = n.offset(s);
  return o === r ? [s, o] : [e - Math.min(o, r) * 60 * 1e3, Math.max(o, r)];
}
function Qn(e, t) {
  e += t * 60 * 1e3;
  const n = new Date(e);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function mt(e, t, n) {
  return Vo(yn(e), t, n);
}
function Xn(e, t) {
  const n = e.o, s = e.c.year + Math.trunc(t.years), o = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, r = Object.assign({}, e.c, {
    year: s,
    month: o,
    day: Math.min(e.c.day, yt(s, o)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }), i = B.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), l = yn(r);
  let [a, c] = Vo(l, n, e.zone);
  return i !== 0 && (a += i, c = e.zone.offset(a)), { ts: a, o: c };
}
function Je(e, t, n, s, o) {
  const { setZone: r, zone: i } = n;
  if (e && Object.keys(e).length !== 0) {
    const l = t || i, a = E.fromObject(
      Object.assign(e, n, {
        zone: l,
        // setZone is a valid option in the calling methods, but not in fromObject
        setZone: void 0
      })
    );
    return r ? a : a.setZone(i);
  } else
    return E.invalid(
      new be("unparsable", `the input "${o}" can't be parsed as ${s}`)
    );
}
function ze(e, t, n = !0) {
  return e.isValid ? se.create(j.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function xn(e, {
  suppressSeconds: t = !1,
  suppressMilliseconds: n = !1,
  includeOffset: s,
  includePrefix: o = !1,
  includeZone: r = !1,
  spaceZone: i = !1,
  format: l = "extended"
}) {
  let a = l === "basic" ? "HHmm" : "HH:mm";
  (!t || e.second !== 0 || e.millisecond !== 0) && (a += l === "basic" ? "ss" : ":ss", (!n || e.millisecond !== 0) && (a += ".SSS")), (r || s) && i && (a += " "), r ? a += "z" : s && (a += l === "basic" ? "ZZZ" : "ZZ");
  let c = ze(e, a);
  return o && (c = "T" + c), c;
}
const Eo = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Tu = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Mu = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Lo = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Ou = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Du = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function es(e) {
  const t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[e.toLowerCase()];
  if (!t)
    throw new Js(e);
  return t;
}
function ts(e, t) {
  for (const l of Lo)
    A(e[l]) && (e[l] = Eo[l]);
  const n = Oo(e) || Do(e);
  if (n)
    return E.invalid(n);
  const s = Y.now(), o = t.offset(s), [r, i] = mt(e, o, t);
  return new E({
    ts: r,
    zone: t,
    o: i
  });
}
function ns(e, t, n) {
  const s = A(n.round) ? !0 : n.round, o = (i, l) => (i = pn(i, s || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(i, l)), r = (i) => n.calendary ? t.hasSame(e, i) ? 0 : t.startOf(i).diff(e.startOf(i), i).get(i) : t.diff(e, i).get(i);
  if (n.unit)
    return o(r(n.unit), n.unit);
  for (const i of n.units) {
    const l = r(i);
    if (Math.abs(l) >= 1)
      return o(l, i);
  }
  return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
class E {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || Y.defaultZone;
    let s = t.invalid || (Number.isNaN(t.ts) ? new be("invalid input") : null) || (n.isValid ? null : ut(n));
    this.ts = A(t.ts) ? Y.now() : t.ts;
    let o = null, r = null;
    if (!s)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [o, r] = [t.old.c, t.old.o];
      else {
        const l = n.offset(this.ts);
        o = Qn(this.ts, l), s = Number.isNaN(o.year) ? new be("invalid input") : null, o = s ? null : o, r = s ? null : l;
      }
    this._zone = n, this.loc = t.loc || j.create(), this.invalid = s, this.weekData = null, this.c = o, this.o = r, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new E({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local(t, n, s, o, r, i, l) {
    return A(t) ? E.now() : ts(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: r,
        second: i,
        millisecond: l
      },
      Y.defaultZone
    );
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  static utc(t, n, s, o, r, i, l) {
    return A(t) ? new E({
      ts: Y.now(),
      zone: x.utcInstance
    }) : ts(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: r,
        second: i,
        millisecond: l
      },
      x.utcInstance
    );
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(t, n = {}) {
    const s = Ha(t) ? t.valueOf() : NaN;
    if (Number.isNaN(s))
      return E.invalid("invalid input");
    const o = De(n.zone, Y.defaultZone);
    return o.isValid ? new E({
      ts: s,
      zone: o,
      loc: j.fromObject(n)
    }) : E.invalid(ut(o));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(t, n = {}) {
    if (Ee(t))
      return t < -Jn || t > Jn ? E.invalid("Timestamp out of range") : new E({
        ts: t,
        zone: De(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ue(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(t, n = {}) {
    if (Ee(t))
      return new E({
        ts: t * 1e3,
        zone: De(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ue("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(t) {
    const n = De(t.zone, Y.defaultZone);
    if (!n.isValid)
      return E.invalid(ut(n));
    const s = Y.now(), o = n.offset(s), r = vt(t, es, [
      "zone",
      "locale",
      "outputCalendar",
      "numberingSystem"
    ]), i = !A(r.ordinal), l = !A(r.year), a = !A(r.month) || !A(r.day), c = l || a, u = r.weekYear || r.weekNumber, f = j.fromObject(t);
    if ((c || i) && u)
      throw new Xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && i)
      throw new Xe("Can't mix ordinal dates with month/day");
    const m = u || r.weekday && !c;
    let g, S, Z = Qn(s, o);
    m ? (g = Ou, S = Tu, Z = Rt(Z)) : i ? (g = Du, S = Mu, Z = Et(Z)) : (g = Lo, S = Eo);
    let W = !1;
    for (const $e of g) {
      const _ = r[$e];
      A(_) ? W ? r[$e] = S[$e] : r[$e] = Z[$e] : W = !0;
    }
    const J = m ? Iu(r) : i ? Cu(r) : Oo(r), X = J || Do(r);
    if (X)
      return E.invalid(X);
    const R = m ? Gn(r) : i ? Kn(r) : r, [re, ie] = mt(R, o, n), te = new E({
      ts: re,
      zone: n,
      o: ie,
      loc: f
    });
    return r.weekday && c && t.weekday !== te.weekday ? E.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${te.toISO()}`
    ) : te;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(t, n = {}) {
    const [s, o] = Zc(t);
    return Je(s, o, n, "ISO 8601", t);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(t, n = {}) {
    const [s, o] = Wc(t);
    return Je(s, o, n, "RFC 2822", t);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(t, n = {}) {
    const [s, o] = qc(t);
    return Je(s, o, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(t, n, s = {}) {
    if (A(t) || A(n))
      throw new ue("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: r = null } = s, i = j.fromOpts({
      locale: o,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, a, c] = ku(i, t, n);
    return c ? E.invalid(c) : Je(l, a, s, `format ${n}`, t);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(t, n, s = {}) {
    return E.fromFormat(t, n, s);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(t, n = {}) {
    const [s, o] = Xc(t);
    return Je(s, o, n, "SQL", t);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new ue("need to specify a reason the DateTime is invalid");
    const s = t instanceof be ? t : new be(t, n);
    if (Y.throwOnInvalid)
      throw new _a(s);
    return new E({ invalid: s });
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(t) {
    return t && t.isLuxonDateTime || !1;
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(t) {
    return this[t];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Nt(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Nt(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Nt(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Et(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? xe.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? xe.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? xe.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? xe.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.universal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return rt(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return yt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? tt(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? gt(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOpts(t = {}) {
    const { locale: n, numberingSystem: s, calendar: o } = se.create(
      this.loc.clone(t),
      t
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: s, outputCalendar: o };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(t = 0, n = {}) {
    return this.setZone(x.instance(t), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Y.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: s = !1 } = {}) {
    if (t = De(t, Y.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let o = this.ts;
      if (n || s) {
        const r = t.offset(this.ts), i = this.toObject();
        [o] = mt(i, r, t);
      }
      return Ke(this, { ts: o, zone: t });
    } else
      return E.invalid(ut(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: s });
    return Ke(this, { loc: o });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(t) {
    if (!this.isValid)
      return this;
    const n = vt(t, es, []), s = !A(n.weekYear) || !A(n.weekNumber) || !A(n.weekday), o = !A(n.ordinal), r = !A(n.year), i = !A(n.month) || !A(n.day), l = r || i, a = n.weekYear || n.weekNumber;
    if ((l || o) && a)
      throw new Xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (i && o)
      throw new Xe("Can't mix ordinal dates with month/day");
    let c;
    s ? c = Gn(Object.assign(Rt(this.c), n)) : A(n.ordinal) ? (c = Object.assign(this.toObject(), n), A(n.day) && (c.day = Math.min(yt(c.year, c.month), c.day))) : c = Kn(Object.assign(Et(this.c), n));
    const [u, f] = mt(c, this.o, this.zone);
    return Ke(this, { ts: u, o: f });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(t) {
    if (!this.isValid)
      return this;
    const n = Ve(t);
    return Ke(this, Xn(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  minus(t) {
    if (!this.isValid)
      return this;
    const n = Ve(t).negate();
    return Ke(this, Xn(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(t) {
    if (!this.isValid)
      return this;
    const n = {}, s = B.normalizeUnit(t);
    switch (s) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (s === "weeks" && (n.weekday = 1), s === "quarters") {
      const o = Math.ceil(this.month / 3);
      n.month = (o - 1) * 3 + 1;
    }
    return this.set(n);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(t) {
    return this.isValid ? this.plus({ [t]: 1 }).startOf(t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(t, n = {}) {
    return this.isValid ? se.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Lt;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(t = pt) {
    return this.isValid ? se.create(this.loc.clone(t), t).formatDateTime(this) : Lt;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(t = {}) {
    return this.isValid ? se.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO(t = {}) {
    return this.isValid ? `${this.toISODate(t)}T${this.toISOTime(t)}` : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: t = "extended" } = {}) {
    let n = t === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (n = "+" + n), ze(this, n);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return ze(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: n = !1,
    includeOffset: s = !0,
    includePrefix: o = !1,
    format: r = "extended"
  } = {}) {
    return xn(this, {
      suppressSeconds: n,
      suppressMilliseconds: t,
      includeOffset: s,
      includePrefix: o,
      format: r
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return ze(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return ze(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return ze(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: t = !0, includeZone: n = !1 } = {}) {
    return xn(this, {
      includeOffset: t,
      includeZone: n,
      spaceZone: !0
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Lt;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const n = Object.assign({}, this.c);
    return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(t, n = "milliseconds", s = {}) {
    if (!this.isValid || !t.isValid)
      return B.invalid(
        this.invalid || t.invalid,
        "created by diffing an invalid DateTime"
      );
    const o = Object.assign(
      { locale: this.locale, numberingSystem: this.numberingSystem },
      s
    ), r = za(n).map(B.normalizeUnit), i = t.valueOf() > this.valueOf(), l = i ? this : t, a = i ? t : this, c = lu(l, a, r, o);
    return i ? c.negate() : c;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(t = "milliseconds", n = {}) {
    return this.diff(E.now(), t, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(t) {
    return this.isValid ? U.fromDateTimes(this, t) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(t, n) {
    if (!this.isValid)
      return !1;
    const s = t.valueOf(), o = this.setZone(t.zone, { keepLocalTime: !0 });
    return o.startOf(n) <= s && s <= o.endOf(n);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(t = {}) {
    if (!this.isValid)
      return null;
    const n = t.base || E.fromObject({ zone: this.zone }), s = t.padding ? this < n ? -t.padding : t.padding : 0;
    let o = ["years", "months", "days", "hours", "minutes", "seconds"], r = t.unit;
    return Array.isArray(t.unit) && (o = t.unit, r = void 0), ns(
      n,
      this.plus(s),
      Object.assign(t, {
        numeric: "always",
        units: o,
        unit: r
      })
    );
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(t = {}) {
    return this.isValid ? ns(
      t.base || E.fromObject({ zone: this.zone }),
      this,
      Object.assign(t, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: !0
      })
    ) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...t) {
    if (!t.every(E.isDateTime))
      throw new ue("min requires all arguments be DateTimes");
    return _n(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(E.isDateTime))
      throw new ue("max requires all arguments be DateTimes");
    return _n(t, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(t, n, s = {}) {
    const { locale: o = null, numberingSystem: r = null } = s, i = j.fromOpts({
      locale: o,
      numberingSystem: r,
      defaultToEN: !0
    });
    return So(i, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(t, n, s = {}) {
    return E.fromFormatExplain(t, n, s);
  }
  // FORMAT PRESETS
  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return pt;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Gt;
  }
  /**
   * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Qs;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Kt;
  }
  /**
   * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Jt;
  }
  /**
   * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Qt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Xt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return xt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return en;
  }
  /**
   * {@link toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return tn;
  }
  /**
   * {@link toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return nn;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return sn;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return on;
  }
  /**
   * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return rn;
  }
  /**
   * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return ln;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return an;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return cn;
  }
  /**
   * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Xs;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return un;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return dn;
  }
  /**
   * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return fn;
  }
  /**
   * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return mn;
  }
}
function Qe(e) {
  if (E.isDateTime(e))
    return e;
  if (e && e.valueOf && Ee(e.valueOf()))
    return E.fromJSDate(e);
  if (e && typeof e == "object")
    return E.fromObject(e);
  throw new ue(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
const ss = Math.min, Ae = Math.max;
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function _o(e) {
  return ["top", "bottom"].includes(kn(e)) ? "y" : "x";
}
function Vu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Eu(e) {
  return typeof e != "number" ? Vu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function os(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Lu(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: s,
    y: o,
    platform: r,
    rects: i,
    elements: l,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Sn(t, e), S = Eu(g), W = l[m ? f === "floating" ? "reference" : "floating" : f], J = os(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(W))) == null || n ? W : W.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), X = f === "floating" ? {
    ...i.floating,
    x: s,
    y: o
  } : i.reference, R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), re = await (r.isElement == null ? void 0 : r.isElement(R)) ? await (r.getScale == null ? void 0 : r.getScale(R)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, ie = os(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: X,
    offsetParent: R,
    strategy: a
  }) : X);
  return {
    top: (J.top - ie.top + S.top) / re.y,
    bottom: (ie.bottom - J.bottom + S.bottom) / re.y,
    left: (J.left - ie.left + S.left) / re.x,
    right: (ie.right - J.right + S.right) / re.x
  };
}
async function Nu(e, t) {
  const {
    placement: n,
    platform: s,
    elements: o
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), i = kn(n), l = No(n), a = _o(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, u = r && a ? -1 : 1, f = Sn(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: S
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return l && typeof S == "number" && (g = l === "end" ? S * -1 : S), a ? {
    x: g * u,
    y: m * c
  } : {
    x: m * c,
    y: g * u
  };
}
const Ct = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: s
      } = t, o = await Nu(t, e);
      return {
        x: n + o.x,
        y: s + o.y,
        data: o
      };
    }
  };
}, Tt = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: s,
        platform: o,
        elements: r
      } = t, {
        apply: i = () => {
        },
        ...l
      } = Sn(e, t), a = await Lu(t, l), c = kn(n), u = No(n), f = _o(n) === "y", {
        width: m,
        height: g
      } = s.floating;
      let S, Z;
      c === "top" || c === "bottom" ? (S = c, Z = u === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (Z = c, S = u === "end" ? "top" : "bottom");
      const W = g - a[S], J = m - a[Z], X = !t.middlewareData.shift;
      let R = W, re = J;
      if (f) {
        const te = m - a.left - a.right;
        re = u || X ? ss(J, te) : te;
      } else {
        const te = g - a.top - a.bottom;
        R = u || X ? ss(W, te) : te;
      }
      if (X && !u) {
        const te = Ae(a.left, 0), $e = Ae(a.right, 0), _ = Ae(a.top, 0), ye = Ae(a.bottom, 0);
        f ? re = m - 2 * (te !== 0 || $e !== 0 ? te + $e : Ae(a.left, a.right)) : R = g - 2 * (_ !== 0 || ye !== 0 ? _ + ye : Ae(a.top, a.bottom));
      }
      await i({
        ...t,
        availableWidth: re,
        availableHeight: R
      });
      const ie = await o.getDimensions(r.floating);
      return m !== ie.width || g !== ie.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rs(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const is = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, _u = /* @__PURE__ */ O({
  name: "h-date-picker",
  props: {
    ...sr,
    ...or,
    ...rr,
    ...ir,
    highlightToday: {
      type: Boolean,
      default: !0
    },
    displayFormat: {
      type: String,
      default: "yyyy-MM-dd"
    },
    align: {
      type: String,
      default: "start"
    },
    dots: {
      type: null,
      default: null
    }
  },
  emits: ["update:modelValue", "focus", "blur", "view-changed"],
  setup(e, t) {
    const n = D(), s = k(), o = k(), r = k(e.modelValue ? e.modelValue.toISODate() : ""), i = k(!1), l = k(E.now()), a = k(is.bottom), c = L(() => [Ct(4)]), u = L(() => {
      if (e.dots === null)
        return null;
      const _ = {};
      return e.dots.forEach((ye) => {
        const Ce = ye.date.toISODate();
        _[Ce] = _[Ce] || [], _[Ce].push(ye);
      }), _;
    }), f = L(() => {
      let _ = xe.weekdays("short");
      return e.firstDayOfWeek !== 0 && _.unshift(..._.splice(e.firstDayOfWeek, 7 - e.firstDayOfWeek)), _ = _.map((ye) => rs(ye.replace(/\./g, ""))), _;
    }), m = L(() => {
      const _ = [], ye = l.value.startOf("month");
      let Ce = ye.weekday - 1;
      Ce < e.firstDayOfWeek ? Ce += 7 - e.firstDayOfWeek : Ce -= e.firstDayOfWeek;
      const Ro = E.now();
      let Fe = ye.minus({
        days: Ce
      });
      for (let Cn = 0; Cn < 6 * 7; Cn++)
        _.push({
          date: Fe,
          classes: {
            "-outside-month": Fe.month !== ye.month,
            "-today": e.highlightToday && Fe.hasSame(Ro, "day"),
            "-selected": e.modelValue && Fe.hasSame(e.modelValue, "day")
          }
        }), Fe = Fe.plus({
          days: 1
        });
      return _;
    }), g = (_) => {
      l.value = l.value.plus(_);
    }, S = (_) => {
      l.value = l.value.minus(_);
    };
    oe(() => e.modelValue, () => {
      r.value = e.modelValue ? e.modelValue.toISODate() : "";
    });
    const Z = (_) => {
      r.value = _.toISODate(), t.emit("update:modelValue", _), i.value = !1;
    }, W = () => {
      const _ = E.fromISO(r.value);
      _.isValid && (l.value = _, t.emit("update:modelValue", _));
    }, J = k(!1), X = () => {
      i.value === !1 && (l.value = e.modelValue ? e.modelValue : E.now()), J.value = !0, i.value = !0, t.emit("focus");
    }, R = () => {
      J.value = !1, t.emit("blur");
    }, re = (_) => {
      a.value = is[Be(_.placement).placement];
    }, ie = (_) => {
      _.outsideFloating && _.outsideReference && (i.value = !1);
    };
    oe(() => e.disabled, () => {
      e.disabled && (i.value = !1);
    }), oe(m, (_) => {
      t.emit("view-changed", {
        from: _[0].date,
        to: _[_.length - 1].date
      });
    });
    const te = (_) => ({
      class: [n.css_root.value]
    }), $e = lr().as("div", te).props(["modelValue", "disabled", "visible"]).build();
    return {
      Icons: Q,
      capitalize: rs,
      input: s,
      icon: o,
      inputValue: r,
      weekdayNames: f,
      daysToShow: m,
      shownDate: l,
      plusShownDate: g,
      minusShownDate: S,
      onDateClick: Z,
      onDateInputChanged: W,
      core: $e,
      ...n,
      onInputFocus: X,
      onInputBlur: R,
      transition: a,
      onClickOutside: ie,
      onComputedPosition: re,
      floatingVisible: i,
      floatingMiddleware: c,
      cachedDots: u
    };
  }
}), Fu = ["onClick"];
function Pu(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-input"), a = v("h-icon-button"), c = v("h-floating"), u = v("hr-date-picker");
  return G((h(), C(u, F(e.core.props, P(e.core.listeners)), {
    default: w((f) => [
      I(l, {
        ref: (m) => {
          m && (e.input = m.$el);
        },
        disabled: f.disabled,
        modelValue: e.inputValue,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => e.inputValue = m),
        onChange: e.onDateInputChanged,
        onFocus: e.onInputFocus,
        onBlur: e.onInputBlur
      }, {
        customSuffix: w(() => [
          I(i, {
            ref: (m) => {
              m && (e.icon = m.$el);
            },
            icon: e.Icons.calendarMonth,
            class: d(["h-input__suffix-icon"]),
            size: "16px"
          }, null, 8, ["icon"])
        ]),
        _: 2
      }, 1032, ["disabled", "modelValue", "onChange", "onFocus", "onBlur"]),
      I(c, {
        class: d([e.css_ec("calendar-container")]),
        reference: e.input,
        "arrow-reference": e.icon,
        "show-arrow": "",
        transition: e.transition,
        visible: e.floatingVisible,
        placement: `bottom-${e.align}`,
        middleware: e.floatingMiddleware,
        onClickOutside: e.onClickOutside,
        onComputedPosition: e.onComputedPosition
      }, {
        arrow: w(() => [
          I(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          y("div", {
            class: d([e.css_ec("calendar-header")])
          }, [
            y("div", null, [
              I(a, {
                icon: e.Icons.chevronLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[1] || (t[1] = (m) => e.minusShownDate({ months: 1 }))
              }, null, 8, ["icon"]),
              I(a, {
                icon: e.Icons.chevronDoubleLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[2] || (t[2] = (m) => e.minusShownDate({ years: 1 }))
              }, null, 8, ["icon"])
            ]),
            y("div", null, [
              y("span", {
                class: d([e.css_ec("calendar-year-label")])
              }, N(`${e.capitalize(e.shownDate.monthLong)} ${e.shownDate.year}`), 3)
            ]),
            y("div", null, [
              I(a, {
                icon: e.Icons.chevronDoubleRight,
                size: "normal",
                styling: "subtle",
                onClick: t[3] || (t[3] = (m) => e.plusShownDate({ years: 1 }))
              }, null, 8, ["icon"]),
              I(a, {
                icon: e.Icons.chevronRight,
                size: "normal",
                styling: "subtle",
                onClick: t[4] || (t[4] = (m) => e.plusShownDate({ months: 1 }))
              }, null, 8, ["icon"])
            ])
          ], 2),
          y("div", {
            class: d([e.css_ec("calendar")])
          }, [
            y("div", {
              class: d([e.css_ec("calendar-weekdays")])
            }, [
              (h(!0), $(le, null, fe(e.weekdayNames, (m) => (h(), $("div", null, N(m), 1))), 256))
            ], 2),
            y("div", {
              class: d([e.css_ec("calendar-dates"), { "-has-dots": e.cachedDots !== null }])
            }, [
              (h(!0), $(le, null, fe(e.daysToShow, (m) => (h(), $("div", {
                key: `${m.date.toISODate()}-${e.shownDate.toISODate()}`,
                class: d([e.css_ec("calendar-date"), m.classes]),
                onClick: (g) => e.onDateClick(m.date)
              }, [
                ee(N(m.date.day) + " ", 1),
                e.cachedDots !== null && e.cachedDots[m.date.toISODate()] ? (h(), $("div", {
                  key: 0,
                  class: d([e.css_ec("dots-container")])
                }, [
                  (h(!0), $(le, null, fe(e.cachedDots[m.date.toISODate()], (g) => (h(), $("span", {
                    class: d([e.css_ec("dot")]),
                    style: z({ background: g.color || null })
                  }, null, 6))), 256))
                ], 2)) : M("", !0)
              ], 10, Fu))), 128))
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class", "reference", "arrow-reference", "transition", "visible", "placement", "middleware", "onClickOutside", "onComputedPosition"])
    ]),
    _: 1
  }, 16)), [
    [K, e.visible]
  ]);
}
const Au = /* @__PURE__ */ V(_u, [["render", Pu]]), Hu = O({
  name: "h-input",
  props: {
    ...ar,
    ...cr,
    ...ur,
    ...dr,
    ...fr,
    placeholder: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    minLength: {
      type: [String, Number],
      default: null
    },
    maxLength: {
      type: [String, Number],
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    prefixWidth: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    suffixWidth: {
      type: String,
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, t) {
    const n = k(), s = k(), o = k(!1), r = () => {
      o.value = !0, t.emit("focus");
    }, i = () => {
      o.value = !1, t.emit("blur");
    }, l = () => {
      s.value.focusInput();
    }, a = (u) => ({
      class: {
        "-readonly": u.readonly,
        "-disabled": u.disabled
      },
      onClick: u.onClick
    }), c = mr(n).as("div", a).props(["modelValue", "modelModifiers", "readonly", "disabled", "type"]).events(["update:modelValue"]).build();
    return {
      coreInput: s,
      input: n,
      hasFocus: o,
      onFocus: r,
      onBlur: i,
      focus: l,
      core: c,
      ...D()
    };
  }
}), zu = ["value", "type", "maxlength", "minlength", "min", "max", "disabled", "placeholder", "readonly", "autocomplete", "onInput"];
function Ru(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-input");
  return h(), C(l, F({
    ref: "coreInput",
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (h(), $("div", {
        key: 0,
        class: d([e.css_ec("prefix")]),
        style: z({ width: e.prefixWidth })
      }, [
        T(e.$slots, "prefix", {}, () => [
          ee(N(e.prefix), 1)
        ])
      ], 6)) : M("", !0),
      e.prefixIcon ? (h(), C(i, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      y("input", {
        ref: "input",
        class: d([e.css_ec("input")]),
        value: a.modelValue,
        type: e.type,
        maxlength: e.maxLength,
        minlength: e.minLength,
        min: e.min,
        max: e.max,
        disabled: a.disabled,
        placeholder: e.placeholder,
        readonly: a.readonly,
        autocomplete: e.autocomplete,
        onInput: (c) => a.modelValue = c.target.value,
        onFocus: t[0] || (t[0] = (...c) => e.onFocus && e.onFocus(...c)),
        onBlur: t[1] || (t[1] = (...c) => e.onBlur && e.onBlur(...c))
      }, null, 42, zu),
      e.suffixIcon ? (h(), C(i, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.$slots.suffix || e.suffix ? (h(), $("div", {
        key: 3,
        class: d([e.css_ec("suffix")]),
        style: z({ width: e.suffixWidth })
      }, [
        T(e.$slots, "suffix", {}, () => [
          ee(N(e.suffix), 1)
        ])
      ], 6)) : M("", !0),
      T(e.$slots, "customSuffix")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Bu = /* @__PURE__ */ V(Hu, [["render", Ru]]), Zu = O({
  name: "h-autocomplete",
  props: {
    ...hr,
    ...pr,
    ...yr,
    ...gr,
    placeholder: {
      type: String,
      default: null
    },
    type: {
      type: String
    },
    size: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    minLength: {
      type: Number,
      default: null
    },
    maxLength: {
      type: Number,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue", "focus", "blur", "itemSelected", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(), r = k(), i = k(), l = k(""), a = L(() => [
      Tt({
        padding: 8,
        apply(R) {
          Object.assign(R.elements.floating.style, {
            width: `${R.rects.reference.width}px`
          }), l.value = `${R.availableHeight}px`;
        }
      })
    ]);
    _s(() => {
      o.value = [];
    });
    const c = (R) => {
      r.value = R, i.value = R ? R.$el : null;
    }, u = k(!1), f = () => {
      u.value = !0, r.value.showList(), t.emit("focus");
    }, m = () => {
      u.value = !1, t.emit("blur");
    }, g = () => {
      r.value.focusInput();
    }, S = () => {
      r.value.hideList();
    }, Z = (R) => {
      R.outsideFloating && R.outsideReference && S();
    }, W = (R) => {
      const re = e.items.findIndex((te) => te === R), ie = o.value[re];
      ie && ie.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, J = (R) => ({
      class: {
        "-disabled": R.disabled
      }
    }), X = vr(n).as("div", J).props(["modelValue", "modelModifiers", "disabled", "items"]).events(["update:modelValue", "itemSelected", "focusedItemChanged"]).build();
    return {
      setCoreInput: c,
      coreAutocompleteEl: i,
      floatingMiddleware: a,
      listMaxHeight: l,
      input: n,
      items: o,
      scrollContainer: s,
      hasFocus: u,
      onFocus: f,
      onBlur: m,
      core: X,
      onClickOutside: Z,
      onFocusedItemChanged: W,
      ...D(),
      focus: g,
      hideList: S
    };
  }
}), Wu = ["value", "type", "maxlength", "minlength", "disabled", "placeholder", "readonly", "autocomplete", "onInput", "onKeydown"], qu = ["onKeydown"], ju = ["onClick"];
function Uu(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-autocomplete");
  return h(), C(c, F({
    ref: (u) => e.setCoreInput(u),
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, P(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (h(), $("div", {
        key: 0,
        class: d([e.css_ec("prefix")])
      }, [
        T(e.$slots, "prefix", {}, () => [
          ee(N(e.prefix), 1)
        ])
      ], 2)) : M("", !0),
      e.prefixIcon ? (h(), C(i, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      y("input", {
        ref: "input",
        class: d([e.css_ec("input")]),
        value: u.modelValue,
        type: e.type,
        maxlength: e.maxLength,
        minlength: e.minLength,
        disabled: u.disabled,
        placeholder: e.placeholder,
        readonly: u.readonly,
        autocomplete: e.autocomplete,
        onInput: (f) => u.modelValue = f.target.value,
        onFocus: t[0] || (t[0] = (...f) => e.onFocus && e.onFocus(...f)),
        onBlur: t[1] || (t[1] = (...f) => e.onBlur && e.onBlur(...f)),
        onKeydown: u.onKeyEvents
      }, null, 42, Wu),
      e.suffixIcon ? (h(), C(i, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.$slots.suffix || e.suffix ? (h(), $("div", {
        key: 3,
        class: d([e.css_ec("suffix")])
      }, [
        T(e.$slots, "suffix", {}, () => [
          ee(N(e.suffix), 1)
        ])
      ], 2)) : M("", !0),
      T(e.$slots, "customSuffix"),
      I(a, {
        as: "div",
        class: d([e.css_ec("list-container")]),
        reference: e.coreAutocompleteEl,
        transition: "fade-fast",
        visible: u.listVisible,
        placement: "bottom-start",
        middleware: e.floatingMiddleware,
        onHide: (f) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside
      }, {
        default: w(() => [
          y("div", {
            class: d([e.css_ec("list-box")]),
            onKeydown: u.onKeyEvents,
            style: z({ maxHeight: e.listMaxHeight })
          }, [
            I(l, { ref: "scrollContainer" }, {
              default: w(() => [
                T(e.$slots, "default", {
                  items: u.items,
                  focusedItem: u.focusedItem,
                  onItemClick: u.onItemClick
                }, () => [
                  y("ul", {
                    class: d([e.css_ec("list")])
                  }, [
                    (h(!0), $(le, null, fe(u.items, (f, m) => (h(), $("li", {
                      ref_for: !0,
                      ref: (g) => e.items[m] = g,
                      class: d([e.css_ec("list-item"), { "-focused": f === u.focusedItem }]),
                      onClick: (g) => u.onItemClick(f)
                    }, N(f), 11, ju))), 256))
                  ], 2)
                ])
              ]),
              _: 2
            }, 1536)
          ], 46, qu)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onHide", "onClickOutside"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const Yu = /* @__PURE__ */ V(Zu, [["render", Uu]]), Gu = O({
  name: "h-file-input",
  props: {
    modelValue: {
      type: [Object, FileList]
    },
    multiple: {
      type: Boolean
    },
    accept: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: "Choose file"
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = L(() => {
      if (e.modelValue === null)
        return null;
      if (e.modelValue.constructor.name === "FileList") {
        const r = e.modelValue;
        return r.length > 1 ? `${r.length} files selected` : r.length === 1 ? r[0].name : null;
      } else
        return e.modelValue.name;
    }), o = (r) => {
      const l = r.target.files;
      let a = null;
      l.length && (a = e.multiple ? l : l[0]), t.emit("update:modelValue", a);
    };
    return {
      ...D(),
      selectedFiles: n,
      filesChanged: o,
      text: s
    };
  }
}), Ku = ["multiple", "accept"];
function Ju(e, t, n, s, o, r) {
  return h(), $("label", {
    class: d([e.css_root])
  }, [
    y("span", {
      class: d([e.css_ec("text")])
    }, N(e.text), 3),
    y("input", {
      class: d([e.css_ec("input")]),
      multiple: e.multiple,
      type: "file",
      accept: e.accept,
      onChange: t[0] || (t[0] = (...i) => e.filesChanged && e.filesChanged(...i))
    }, null, 42, Ku),
    y("div", {
      class: d([e.css_ec("suffix")])
    }, N(e.label), 3)
  ], 2);
}
const Qu = /* @__PURE__ */ V(Gu, [["render", Ju]]), ls = "elementic-inputs", Xu = {
  Input: Bu,
  Autocomplete: Yu,
  FileInput: Qu
}, xu = {
  CoreInputsInstall: br
}, Fo = {
  install: (e, t) => {
    p.isModuleInstalled(e, ls) || (p.installDependencies(e, xu, t), p.installComponents(e, Xu), p.markModuleAsInstalled(e, ls));
  }
}, as = "elementic-date-pickers", ed = {
  DatePicker: Au
}, td = {
  CoreDatePickersInstall: wr,
  IconsInstall: Yt,
  InputsInstall: Fo
}, nd = {
  install: (e, t) => {
    p.isModuleInstalled(e, as) || (p.installDependencies(e, td, t), p.installComponents(e, ed), p.markModuleAsInstalled(e, as));
  }
};
function Po(e) {
  return Bo() ? (Zo(e), !0) : !1;
}
function et(e) {
  return typeof e == "function" ? e() : Wo(e);
}
const sd = typeof window < "u" && typeof document < "u";
function wt(e) {
  var t;
  const n = et(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const In = sd ? window : void 0;
function od() {
  const e = k(!1);
  return Bt() && nt(() => {
    e.value = !0;
  }), e;
}
function Ao(e) {
  const t = od();
  return L(() => (t.value, !!e()));
}
function rd(e, t, n = {}) {
  const { window: s = In, ...o } = n;
  let r;
  const i = Ao(() => s && "MutationObserver" in s), l = () => {
    r && (r.disconnect(), r = void 0);
  }, a = oe(
    () => wt(e),
    (u) => {
      l(), i.value && s && u && (r = new MutationObserver(t), r.observe(u, o));
    },
    { immediate: !0 }
  ), c = () => {
    l(), a();
  };
  return Po(c), {
    isSupported: i,
    stop: c
  };
}
function id(e, t, n = {}) {
  const { window: s = In, initialValue: o = "", observe: r = !1 } = n, i = k(o), l = L(() => {
    var c;
    return wt(t) || ((c = s == null ? void 0 : s.document) == null ? void 0 : c.documentElement);
  });
  function a() {
    var c;
    const u = et(e), f = et(l);
    if (f && s) {
      const m = (c = s.getComputedStyle(f).getPropertyValue(u)) == null ? void 0 : c.trim();
      i.value = m || o;
    }
  }
  return r && rd(l, a, {
    attributeFilter: ["style", "class"],
    window: s
  }), oe(
    [l, () => et(e)],
    a,
    { immediate: !0 }
  ), oe(
    i,
    (c) => {
      var u;
      (u = l.value) != null && u.style && l.value.style.setProperty(et(e), c);
    }
  ), i;
}
function ld(e, t, n = {}) {
  const { window: s = In, ...o } = n;
  let r;
  const i = Ao(() => s && "ResizeObserver" in s), l = () => {
    r && (r.disconnect(), r = void 0);
  }, a = L(() => Array.isArray(e) ? e.map((f) => wt(f)) : [wt(e)]), c = oe(
    a,
    (f) => {
      if (l(), i.value && s) {
        r = new ResizeObserver(t);
        for (const m of f)
          m && r.observe(m, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), u = () => {
    l(), c();
  };
  return Po(u), {
    isSupported: i,
    stop: u
  };
}
const ad = O({
  name: "h-dialog",
  props: {
    ...Ws,
    zIndex: {
      type: Number
    },
    title: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "primary"
    },
    backdropColor: {
      type: String,
      default: "light"
    },
    boxClasses: {
      type: String,
      default: null
    },
    showCloseButton: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    const n = pe("dialog-transition-end"), s = st({}), o = k(), r = pe("global-scrollbar-width"), i = id("--h-scrollbar-width", o);
    ld(o, (m) => {
      e.visible && (i.value = `${o.value.offsetWidth - o.value.clientWidth}px`);
    }), oe(s, () => {
      Object.keys(s).length === 0 && n && n();
    });
    const l = (m) => {
      e.visible === !1 && delete s[m];
    }, a = (m) => {
      e.visible === !1 && (s[m] = !0);
    }, c = (m, g) => m < g - 1 ? `scale(${1 - 0.1 * (g - m - 1)})` : null, u = (m, g) => m < g - 1 ? 1 - 0.25 * (g - m) : null, f = qs(["visible"]);
    return {
      Icons: Q,
      core: f,
      ...D(),
      transitionEnded: l,
      transitionStarted: a,
      activeTransitions: s,
      getScale: c,
      getOpacity: u,
      scrollContainer: o,
      bodyScrollbarWidth: r
    };
  }
}), cd = ["innerHTML"];
function ud(e, t, n, s, o, r) {
  const i = v("h-icon-button"), l = v("hr-dialog");
  return h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${a.stackIndex}`, `-count-${a.stackCount}`, `-visible-count-${a.visibleStackCount}`]),
        style: z({ zIndex: e.zIndex })
      }, [
        I(he, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: w(() => [
            G(y("div", {
              class: d([e.css_ec("backdrop"), `-color-${e.backdropColor}`]),
              style: z({ opacity: e.getOpacity(a.stackIndex, a.visibleStackCount) })
            }, null, 6), [
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1024),
        y("div", {
          ref: "scrollContainer",
          class: d([e.css_ec("scroll-container"), { "-transitioning": e.lockScroll && e.activeTransitions.box, "-body-has-scrollbar": e.lockScroll && e.bodyScrollbarWidth > 0 }])
        }, [
          I(he, {
            name: "small-slide-up-medium",
            appear: "",
            onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
            onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
          }, {
            default: w(() => [
              G(y("div", {
                class: d([e.css_ec("box-container"), e.boxClasses]),
                style: z({ transform: e.getScale(a.stackIndex, a.visibleStackCount) })
              }, [
                y("div", {
                  class: d([e.css_ec("box")])
                }, [
                  e.showCloseButton ? (h(), $("div", {
                    key: 0,
                    class: d([e.css_ec("close-icon")])
                  }, [
                    I(i, {
                      icon: e.Icons.close,
                      styling: "subtle",
                      size: "small",
                      onClick: a.close
                    }, null, 8, ["icon", "onClick"])
                  ], 2)) : M("", !0),
                  e.$slots.title || e.title ? (h(), $("div", {
                    key: 1,
                    class: d([e.css_ec("title")])
                  }, [
                    T(e.$slots, "title", {}, () => [
                      y("span", { innerHTML: e.title }, null, 8, cd)
                    ])
                  ], 2)) : M("", !0),
                  y("div", {
                    class: d([e.css_ec("content")])
                  }, [
                    T(e.$slots, "default")
                  ], 2),
                  e.$slots.footer ? (h(), $("div", {
                    key: 2,
                    class: d([e.css_ec("footer")])
                  }, [
                    T(e.$slots, "footer")
                  ], 2)) : M("", !0)
                ], 2)
              ], 6), [
                [K, a.visible]
              ])
            ]),
            _: 2
          }, 1024)
        ], 2)
      ], 6)
    ]),
    _: 3
  }, 16);
}
const dd = /* @__PURE__ */ V(ad, [["render", ud]]), cs = "elementic-dialgos", fd = {
  Dialog: dd
}, md = {
  CoreDialogsInstall: js
}, hd = {
  install: (e, t) => {
    p.isModuleInstalled(e, cs) || (p.installDependencies(e, md, t), p.installComponentAlias(e, "h-dialog-wrapper", $r), p.installComponents(e, fd), p.markModuleAsInstalled(e, cs));
  }
}, pd = O({
  name: "h-drawer",
  props: {
    ...Ws,
    zIndex: {
      type: Number
    },
    title: {
      type: String,
      default: "test"
    },
    color: {
      type: String,
      default: "primary"
    },
    placement: {
      type: String,
      default: "right"
    }
  },
  setup(e, t) {
    const n = pe("dialog-transition-end"), s = st({}), o = L(() => e.placement === "right" ? "large2x-slide-to-left-medium" : "large2x-slide-to-right-medium");
    oe(s, () => {
      Object.keys(s).length === 0 && n && n();
    });
    const r = (u) => {
      e.visible === !1 && delete s[u];
    }, i = (u) => {
      e.visible === !1 && (s[u] = !0);
    }, l = (u, f) => u < f - 1 ? `translateX(${e.placement === "right" ? "-" : ""}${(f - u - 1) * 64}px)` : null, a = (u, f) => u < f - 1 ? 1 - 0.25 * (f - u) : null;
    return {
      core: qs(["visible"]),
      ...D(),
      slideTransition: o,
      transitionEnded: r,
      transitionStarted: i,
      getScale: l,
      getOpacity: a
    };
  }
}), yd = ["innerHTML"];
function gd(e, t, n, s, o, r) {
  const i = v("h-scroll-container"), l = v("hr-dialog");
  return h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${a.stackIndex}`, `-count-${a.stackCount}`, `-active-count-${a.visibleStackCount}`]),
        style: z({ zIndex: e.zIndex })
      }, [
        I(he, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: w(() => [
            G(y("div", {
              class: d([e.css_ec("backdrop")]),
              style: z({ opacity: e.getOpacity(a.stackIndex, a.visibleStackCount) })
            }, null, 6), [
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1024),
        I(he, {
          name: e.slideTransition,
          appear: "",
          onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
          onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
        }, {
          default: w(() => [
            G(y("div", {
              class: d([e.css_ec("box"), `-placement-${e.placement}`, { "-has-footer": e.$slots.footer }]),
              style: z({ transform: e.getScale(a.stackIndex, a.visibleStackCount) })
            }, [
              e.$slots.title || e.title ? (h(), $("div", {
                key: 0,
                class: d([e.css_ec("title")])
              }, [
                T(e.$slots, "title", {}, () => [
                  y("span", { innerHTML: e.title }, null, 8, yd)
                ])
              ], 2)) : M("", !0),
              y("div", {
                class: d([e.css_ec("content")])
              }, [
                I(i, null, {
                  default: w(() => [
                    y("div", {
                      class: d([e.css_ec("inner-content")])
                    }, [
                      T(e.$slots, "default")
                    ], 2)
                  ]),
                  _: 3
                })
              ], 2),
              e.$slots.footer ? (h(), $("div", {
                key: 1,
                class: d([e.css_ec("footer")])
              }, [
                T(e.$slots, "footer")
              ], 2)) : M("", !0)
            ], 6), [
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1032, ["name"])
      ], 6)
    ]),
    _: 3
  }, 16);
}
const vd = /* @__PURE__ */ V(pd, [["render", gd]]), us = "elementic-drawers", bd = {
  Drawer: vd
}, wd = {
  CoreDialogsInstall: js
}, $d = {
  install: (e, t) => {
    p.isModuleInstalled(e, us) || (p.installDependencies(e, wd, t), p.installComponents(e, bd), p.markModuleAsInstalled(e, us));
  }
}, ds = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, Sd = O({
  name: "h-dropdown",
  props: {
    ...Sr,
    ...kr,
    ...Ir,
    ...Cr,
    label: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "start"
    },
    autoSize: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(), r = k(""), i = k({}), l = k(ds.bottom), a = L(() => [
      Ct(4),
      Tt({
        padding: 8,
        apply(S) {
          i.value = {
            [e.autoSize ? "minWidth" : "width"]: `${S.rects.reference.width}px`
          }, r.value = `${S.availableHeight}px`;
        }
      })
    ]), c = (S) => {
      S.outsideFloating && S.outsideReference && n.value.close();
    }, u = (S) => {
      l.value = ds[Be(S.placement).placement];
    }, f = (S) => {
      S && S.component && S.component.vnode && S.component.vnode.el && S.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, m = (S) => ({
      class: {
        "-active": S.menuVisible,
        "-disabled": S.disabled
      }
    }), g = Tr().as("div", m).props(["disabled", "hideOnClick", "splitButton", "visible"]).events(["click", "focusedItemChanged"]).build();
    return {
      Icons: Q,
      core: g,
      dropdown: n,
      button: s,
      icon: o,
      transition: l,
      floatingMiddleware: a,
      floatingStyle: i,
      menuMaxHeight: r,
      onClickOutside: c,
      onComputedPosition: u,
      onFocusedItemChanged: f,
      ...D()
    };
  }
}), kd = ["onClick", "onKeydown"], Id = ["onClick", "onKeydown"], Cd = ["onKeydown"];
function Td(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-dropdown");
  return G((h(), C(c, F({
    ref: "dropdown",
    class: [e.css_root]
  }, e.core.props, P(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      y("div", {
        ref: "button",
        tabindex: "0",
        class: d([e.css_ec("button"), { "-split-button": u.splitButton }]),
        onClick: u.onButtonClick,
        onKeydown: (f) => u.onKeyEvents(f, "main")
      }, [
        y("span", {
          class: d([e.css_ec("label")])
        }, [
          T(e.$slots, "label", {}, () => [
            ee(N(e.label), 1)
          ])
        ], 2),
        y("div", {
          tabindex: "0",
          class: d([e.css_ec("icon")]),
          onClick: Tn(u.onIconClick, ["stop"]),
          onKeydown: Tn((f) => u.onKeyEvents(f, "split"), ["stop"])
        }, [
          y("div", null, [
            I(i, {
              ref: "icon",
              icon: e.Icons.dotsHorizontal,
              size: "16px"
            }, null, 8, ["icon"])
          ])
        ], 42, Id)
      ], 42, kd),
      I(a, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        "arrow-reference": e.icon ? e.icon.$el : null,
        "show-arrow": "",
        transition: e.transition,
        visible: u.menuVisible,
        placement: `bottom-${e.align}`,
        middleware: e.floatingMiddleware,
        onHide: (f) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside,
        onComputedPosition: e.onComputedPosition,
        onTransitionStateChanged: u.onMenuTransitioning,
        style: z(e.floatingStyle)
      }, {
        arrow: w(() => [
          I(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: z({ maxHeight: e.menuMaxHeight })
          }, [
            I(l, null, {
              default: w(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, Cd)
        ]),
        _: 2
      }, 1032, ["class", "reference", "arrow-reference", "transition", "visible", "placement", "middleware", "onHide", "onClickOutside", "onComputedPosition", "onTransitionStateChanged", "style"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"])), [
    [K, e.visible]
  ]);
}
const Md = /* @__PURE__ */ V(Sd, [["render", Td]]), Od = O({
  name: "h-dropdown-item",
  props: {
    ...Mr,
    ...Or,
    icon: {
      type: String,
      default: null
    }
  },
  emits: ["click"],
  setup(e, t) {
    const n = (o) => ({
      class: {
        "-focused": o.focused,
        "-disabled": o.disabled
      },
      onClick: o.onClick
    });
    return {
      core: Dr().as("div", n).props(["disabled"]).events(["click"]).build(),
      ...D()
    };
  }
});
function Dd(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-dropdown-item");
  return h(), C(l, F({
    class: [e.css_root],
    tabindex: "-1"
  }, e.core.props, P(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (h(), C(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon
        }, null, 8, ["class", "icon"])) : M("", !0),
        y("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ])
    ]),
    _: 3
  }, 16, ["class"]);
}
const Vd = /* @__PURE__ */ V(Od, [["render", Dd]]), Ed = O({
  name: "h-dropdown-item-divider",
  setup(e, t) {
    const n = pe("dropdown"), s = L(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function Ld(e, t, n, s, o, r) {
  return e.visible ? (h(), $("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : M("", !0);
}
const Nd = /* @__PURE__ */ V(Ed, [["render", Ld]]), _d = O({
  name: "h-dropdown-item-header",
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = pe("dropdown"), s = L(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function Fd(e, t, n, s, o, r) {
  const i = v("h-icon");
  return e.visible ? (h(), $("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (h(), C(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      y("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : M("", !0);
}
const Pd = /* @__PURE__ */ V(_d, [["render", Fd]]), _t = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ad = {
  top: "offsetHeight",
  right: "offsetWidth",
  bottom: "offsetHeight",
  left: "offsetWidth"
}, Hd = O({
  name: "h-floating",
  props: {
    ...Vr,
    ...Er,
    ...Lr,
    ...Nr,
    ..._r,
    ...Ut(),
    arrowReference: {
      type: null
    },
    showArrow: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0,
    "update:visible": () => !0,
    show: () => !0,
    hide: () => !0
  },
  setup(e, t) {
    const n = D(), s = k(), o = k(null), r = k({}), i = k(_t[Be(e.placement).placement]), l = k(Be(e.placement).placement), a = k(Be(e.placement).alignment), c = L(() => {
      const m = [...e.middleware];
      return e.showArrow && m.push(Fr({
        reference: e.arrowReference,
        element: o.value
      })), m;
    }), u = (m) => {
      const g = Be(m.placement);
      l.value = g.placement, a.value = g.alignment;
      const S = l.value;
      m.middlewareData.arrowReference && (r.value = {
        left: m.middlewareData.arrowReference.x != null ? `${m.middlewareData.arrowReference.x}px` : "",
        top: m.middlewareData.arrowReference.y != null ? `${m.middlewareData.arrowReference.y}px` : "",
        [_t[S]]: `${-o.value[Ad[S]]}px`
      }, i.value = _t[S]), t.emit("computedPosition", m);
    }, f = Pr().props(["as", "reference", "visible", "placement", "transition"]).events(["clickOutside", "show", "hide"]).build();
    return {
      ...n,
      middleware: c,
      floating: s,
      floatingPlacement: l,
      floatingAlignment: a,
      floatingArrow: o,
      arrowStyle: r,
      arrowPlacement: i,
      core: f,
      onComputedPosition: u
    };
  }
}), zd = ["data-arrow-placement"];
function Rd(e, t, n, s, o, r) {
  const i = v("hr-floating");
  return h(), C(i, F({
    ref: "floating",
    middleware: e.middleware,
    "data-floating-placement": e.floatingPlacement,
    "data-floating-alignment": e.floatingAlignment
  }, { ...e.core.props, ...e.$attrs }, P(e.core.listeners), { onComputedPosition: e.onComputedPosition }), {
    default: w(() => [
      e.showArrow ? (h(), $("span", {
        key: 0,
        ref: "floatingArrow",
        style: z({ display: "flex", position: "absolute", ...e.arrowStyle }),
        "data-arrow-placement": e.arrowPlacement
      }, [
        T(e.$slots, "arrow")
      ], 12, zd)) : M("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["middleware", "data-floating-placement", "data-floating-alignment", "onComputedPosition"]);
}
const Bd = /* @__PURE__ */ V(Hd, [["render", Rd]]), fs = "elementic-floating", Zd = {
  Floating: Bd
}, Wd = {
  CoreFloatingInstall: Ar
}, lt = {
  install: (e, t) => {
    p.isModuleInstalled(e, fs) || (p.installDependencies(e, Wd, t), p.installComponents(e, Zd), p.markModuleAsInstalled(e, fs));
  }
}, ms = "elementic-dropdowns", qd = {
  Dropdown: Md,
  DropdownItem: Vd,
  DropdownItemDivider: Nd,
  DropdownItemHeader: Pd
}, jd = {
  CoreDropdownsInstall: Hr,
  FloatingInstall: lt
}, Ud = {
  install: (e, t) => {
    p.isModuleInstalled(e, ms) || (p.installDependencies(e, jd, t), p.installComponents(e, qd), p.markModuleAsInstalled(e, ms));
  }
}, Yd = O({
  name: "h-fragment",
  props: {
    id: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = Bt(), s = pe("fragmentContainer"), o = L(() => e.id === s.active.value), r = L(() => s.transition);
    return {
      isActive: o,
      transitionName: r,
      onEnter: () => {
        setTimeout(() => {
          s.setNewHeight(n.vnode.el.getBoundingClientRect().height);
        }, 5);
      },
      onBeforeLeave: () => {
        s.setOldHeight(n.vnode.el.getBoundingClientRect().height);
      },
      onAfterEnter: () => {
        s.clearHeights();
      },
      ...D()
    };
  }
});
function Gd(e, t, n, s, o, r) {
  return h(), C(he, {
    name: e.transitionName,
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave,
    "enter-active-class": `${e.transitionName}-enter-active -transitioning`,
    "leave-active-class": `${e.transitionName}-leave-active -transitioning`
  }, {
    default: w(() => [
      e.isActive ? (h(), $("div", {
        key: 0,
        class: d([e.css_root])
      }, [
        T(e.$slots, "default")
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 8, ["name", "onEnter", "onAfterEnter", "onBeforeLeave", "enter-active-class", "leave-active-class"]);
}
const Kd = /* @__PURE__ */ V(Yd, [["render", Gd]]), Jd = O({
  name: "h-fragment-container",
  props: {
    ...zr,
    transition: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = st({
      old: null,
      new: null,
      target: null
    }), s = L(() => n.target === null ? null : `${n.target}px`), o = () => {
      n.target = n.old, Re(() => {
        Re(() => {
          n.target = n.new;
        });
      });
    }, r = (c) => {
      n.new = c, n.old !== null && Re(o);
    }, i = (c) => {
      n.old = c, n.new !== null && Re(o);
    }, l = () => {
      n.old = null, n.new = null, n.target = null;
    }, a = Rr().as("div").props(["active"]).build();
    return ht("fragmentContainer", {
      active: L(() => e.active),
      transition: e.transition,
      setNewHeight: r,
      setOldHeight: i,
      clearHeights: l
    }), {
      core: a,
      actualHeight: s,
      heights: n,
      ...D()
    };
  }
});
function Qd(e, t, n, s, o, r) {
  const i = v("hr-fragment-container");
  return h(), C(i, F(e.core.props, {
    class: [e.css_root, e.transition ? `${e.transition}-container` : null],
    style: { height: e.actualHeight }
  }), {
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "style"]);
}
const Xd = /* @__PURE__ */ V(Jd, [["render", Qd]]), hs = "elementic-fragments", xd = {
  Fragment: Kd,
  FragmentContainer: Xd
}, ef = {
  CoreFragmentsInstall: Br
}, tf = {
  install: (e, t) => {
    p.isModuleInstalled(e, hs) || (p.installDependencies(e, ef, t), p.installComponents(e, xd), p.markModuleAsInstalled(e, hs));
  }
}, nf = /* @__PURE__ */ O({
  name: "h-list",
  props: {
    animate: {
      type: Boolean,
      default: !0
    },
    listStyle: {
      type: String,
      default: "line"
    }
  },
  setup(e, t) {
    const n = L(() => e.listStyle);
    return ht("list-style", n), {
      ...D()
    };
  },
  render() {
    return this.animate ? Mn(Fs, {
      name: "list-complete",
      tag: "ul",
      class: [this.css_root]
    }, this.$slots.default) : Mn("ul", {
      class: [this.css_root]
    }, this.$slots.default());
  }
}), sf = O({
  name: "h-list-item",
  props: {
    text: {
      type: String
    },
    subText: {
      type: String
    }
  },
  setup(e, t) {
    const n = pe("list-style");
    return {
      ...D(),
      listStyle: n
    };
  }
});
function of(e, t, n, s, o, r) {
  return h(), $("li", {
    class: d([e.css_root, `-list-style-${e.listStyle}`])
  }, [
    y("div", {
      class: d([e.css_ec("content")])
    }, [
      T(e.$slots, "default", {}, () => [
        y("div", {
          class: d([e.css_ec("text")])
        }, N(e.text), 3),
        e.subText ? (h(), $("div", {
          key: 0,
          class: d([e.css_ec("sub-text")])
        }, N(e.subText), 3)) : M("", !0)
      ])
    ], 2)
  ], 2);
}
const rf = /* @__PURE__ */ V(sf, [["render", of]]), ps = "elementic-lists", lf = {
  List: nf,
  ListItem: rf
}, af = {
  install: (e, t) => {
    p.isModuleInstalled(e, ps) || (p.installComponents(e, lf), p.markModuleAsInstalled(e, ps));
  }
}, cf = O({
  name: "h-notification",
  props: {
    ...Zr,
    title: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "primary"
    },
    showCloseButton: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    const n = D(), s = (r) => ({
      class: [n.css_root.value, `-color-${e.color}`]
    }), o = Wr().as("div", s).props(["visible"]).build();
    return {
      Icons: Q,
      core: o,
      ...D()
    };
  }
}), uf = ["onMouseenter", "onMouseleave"], df = ["innerHTML"];
function ff(e, t, n, s, o, r) {
  const i = v("h-icon-button"), l = v("hr-notification");
  return G((h(), C(l, F(e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      y("div", {
        class: d([e.css_ec("box")]),
        onMouseenter: a.pauseDuration,
        onMouseleave: a.resumeDuration
      }, [
        e.showCloseButton ? (h(), $("div", {
          key: 0,
          class: d([e.css_ec("close-icon")])
        }, [
          I(i, {
            icon: e.Icons.close,
            styling: "subtle",
            color: e.color,
            size: "small",
            onClick: a.close
          }, null, 8, ["icon", "color", "onClick"])
        ], 2)) : M("", !0),
        e.$slots.title || e.title ? (h(), $("div", {
          key: 1,
          class: d([e.css_ec("title")])
        }, [
          T(e.$slots, "title", {}, () => [
            y("span", { innerHTML: e.title }, null, 8, df)
          ])
        ], 2)) : M("", !0),
        y("div", {
          class: d([e.css_ec("content")])
        }, [
          T(e.$slots, "default")
        ], 2)
      ], 42, uf)
    ]),
    _: 3
  }, 16)), [
    [K, e.visible]
  ]);
}
const mf = /* @__PURE__ */ V(cf, [["render", ff]]), hf = /* @__PURE__ */ O({
  name: "h-notification-wrapper",
  components: {},
  props: {
    ...qr,
    placement: {
      type: String,
      default: "top-right"
    },
    width: {
      type: String,
      default: "400px"
    }
  },
  setup(e, t) {
    const n = D(), s = (l) => ({
      class: [n.css_root.value],
      "data-placement": e.placement
    }), o = jr().as("div", s).props(["name"]).build(), r = L(() => e.placement.indexOf("top") ? "notification-slide-down" : e.placement.indexOf("bottom") ? "notification-slide-up" : null);
    return {
      core: o,
      ...n,
      transitionEnded: (l) => {
        const a = l.dataset.id, u = Us.getWrapper(e.name).getNotification(a);
        u && u.transitionEnd();
      },
      transitionName: r
    };
  }
  /*render() {
      const hrWrapper = resolveComponent('hr-notification-wrapper');
      return h(hrWrapper, { ...this.core.props }, {
          default: (props) => {
              console.log(props.notifications);
              if(props.notifications && props.notifications.length) {
                  console.log(props.notifications);
                  return Object.values(props.notifications).map((d: any) => (
                      h(d.component, {
                          key: d.id, visible: d.visible, ...d.props, ...d.compiledListeners,
                      })
                  ));
              }
                return null;
          }},
      );
  }*/
});
function pf(e, t, n, s, o, r) {
  const i = v("hr-notification-wrapper");
  return h(), C(i, F(e.core.props, P(e.core.listeners), {
    style: { width: e.width }
  }), {
    default: w((l) => [
      I(Fs, {
        tag: "div",
        class: d(e.css_ec("transition-group")),
        name: e.transitionName,
        onAfterLeave: e.transitionEnded
      }, {
        default: w(() => [
          (h(!0), $(le, null, fe(l.notifications, (a) => (h(), C(Ns(a.component), F({
            key: a.id,
            class: e.css_ec("notification"),
            "data-id": a.id,
            visible: a.visible
          }, a.props, P(a.compiledListeners)), null, 16, ["class", "data-id", "visible"]))), 128))
        ]),
        _: 2
      }, 1032, ["class", "name", "onAfterLeave"])
    ]),
    _: 1
  }, 16, ["style"]);
}
const yf = /* @__PURE__ */ V(hf, [["render", pf]]), ys = "elementic-notifications", gf = {
  Notification: mf,
  NotificationWrapper: yf
}, vf = {
  CoreNotificationsInstall: Ur
}, bf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ys) || (p.installDependencies(e, vf, t), p.installComponents(e, gf), p.markModuleAsInstalled(e, ys));
  }
}, wf = O({
  name: "h-paginator",
  props: {
    ...Yr,
    ...Gr,
    ...Kr,
    ...Jr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(null), s = k(0), o = k(0), r = L(() => ({
      transform: `translate(${o.value}px, 0)`,
      width: `${s.value}px`
    })), i = () => {
      n.value && (o.value = n.value.offsetLeft + 4, s.value = n.value.offsetWidth - 8);
    };
    oe(() => e.modelValue, () => {
      Re(i);
    }), nt(i);
    const l = Qr().as("div").props(["modelValue", "pageSize", "count", "delta"]).events(["update:modelValue"]).build();
    return {
      Icons: Q,
      core: l,
      activeButton: n,
      indicatorStyle: r,
      ...D()
    };
  }
}), $f = ["disabled", "onClick"], Sf = ["onClick"], kf = ["onClick"], If = ["disabled", "onClick"];
function Cf(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-paginator");
  return h(), C(l, F(e.core.props, {
    class: [e.css_root]
  }, P(e.core.listeners)), {
    default: w((a) => [
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": e.activeButton === null }]),
        style: z(e.indicatorStyle)
      }, null, 6),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: a.currentPage === 1,
        onClick: (c) => a.onPaginationButtonClick(a.currentPage - 1)
      }, [
        I(i, {
          icon: e.Icons.arrowLeft,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, $f),
      (h(!0), $(le, null, fe(a.buttons, (c) => (h(), $(le, null, [
        c === a.currentPage ? (h(), $("button", {
          key: c,
          ref_for: !0,
          ref: "activeButton",
          class: d([e.css_ec("button"), "-active"]),
          onClick: (u) => a.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, Sf)) : (h(), $("button", {
          key: c,
          class: d([e.css_ec("button")]),
          onClick: (u) => a.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, kf))
      ], 64))), 256)),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: a.currentPage === a.pages,
        onClick: (c) => a.onPaginationButtonClick(a.currentPage + 1)
      }, [
        I(i, {
          icon: e.Icons.arrowRight,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, If)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Tf = /* @__PURE__ */ V(wf, [["render", Cf]]), gs = "elementic-paginators", Mf = {
  Paginator: Tf
}, Of = {
  CorePaginatorsInstall: Xr
}, Df = {
  install: (e, t) => {
    p.isModuleInstalled(e, gs) || (p.installDependencies(e, Of, t), p.installComponents(e, Mf), p.markModuleAsInstalled(e, gs));
  }
}, vs = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, Vf = O({
  name: "h-popover",
  props: {
    ...Ut(),
    reference: {
      type: null,
      required: !0
    },
    visible: {
      type: Boolean,
      required: !0
    },
    arrowReference: {
      type: null
    },
    showArrow: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    clickOutside: (e) => !0,
    computedPosition: (e) => !0
  },
  setup(e, t) {
    const n = k(vs[e.placement]);
    return {
      floatingMiddleware: k([
        Ct(4)
      ]),
      onClickOutside: (i) => {
        t.emit("clickOutside", i);
      },
      onComputedPosition: (i) => {
        const l = i.placement.split("-")[0];
        n.value = vs[l], t.emit("computedPosition", i);
      },
      transition: n,
      ...D()
    };
  }
});
function Ef(e, t, n, s, o, r) {
  const i = v("h-floating");
  return h(), C(i, {
    as: "div",
    class: d([e.css_root]),
    reference: e.reference,
    transition: e.transition,
    "show-arrow": "",
    visible: e.visible,
    placement: e.placement,
    middleware: e.floatingMiddleware,
    onClickOutside: e.onClickOutside,
    onComputedPosition: e.onComputedPosition
  }, {
    arrow: w(() => [
      y("div", {
        class: d([e.css_ec("arrow")])
      }, null, 2)
    ]),
    default: w(() => [
      y("div", {
        class: d([e.css_ec("content")])
      }, [
        T(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "reference", "transition", "visible", "placement", "middleware", "onClickOutside", "onComputedPosition"]);
}
const Lf = /* @__PURE__ */ V(Vf, [["render", Ef]]), bs = "elementic-popovers", Nf = {
  Popover: Lf
}, _f = {
  FloatingInstall: lt
}, Ff = {
  install: (e, t) => {
    p.isModuleInstalled(e, bs) || (p.installDependencies(e, _f, t), p.installComponents(e, Nf), p.markModuleAsInstalled(e, bs));
  }
}, Pf = O({
  name: "h-progress-bar",
  props: {
    ...xr,
    ...ei,
    ...ti,
    showOverflowIndicator: {
      type: Boolean,
      default: !1
    },
    striped: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: !1
    },
    styling: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "normal"
    },
    showPercentage: {
      type: Boolean,
      default: !1
    },
    showValue: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    const n = k(), s = L(() => n.value ? e.showPercentage ? `${n.value.percentage}%` : e.value : ""), o = L(() => n.value ? `${Math.min(100, n.value.percentage)}%` : "0%"), r = L(() => {
      const l = 100 / (e.value - e.minimum) * (e.maximum - e.minimum);
      return Math.round(l * 10) / 10;
    });
    return {
      core: ni().as("div").props(["value", "minimum", "maximum"]).build(),
      coreProgressBar: n,
      overflowOffset: r,
      label: s,
      width: o,
      ...D()
    };
  }
});
function Af(e, t, n, s, o, r) {
  const i = v("hr-progress-bar");
  return h(), C(i, F({
    ref: "coreProgressBar",
    class: [e.css_root, `-size-${e.size}`, `-styling-${e.styling}`, { "-striped": e.striped, "-animated": e.animated }]
  }, e.core.props, P(e.core.listeners)), {
    default: w(() => [
      y("div", {
        class: d([e.css_ec("back")])
      }, [
        y("div", {
          class: d([e.css_ec("filler")]),
          style: z({ width: e.width })
        }, [
          (e.showPercentage || e.showValue) && e.size === "large" ? (h(), $("span", {
            key: 0,
            class: d([e.css_ec("label")])
          }, N(e.label), 3)) : M("", !0)
        ], 6),
        e.showOverflowIndicator ? G((h(), $("div", {
          key: 0,
          class: d([e.css_ec("overflow-indicator")]),
          style: z({ left: `${e.overflowOffset}%` })
        }, null, 6)), [
          [K, e.overflowOffset < 100]
        ]) : M("", !0)
      ], 2),
      (e.showPercentage || e.showValue) && e.size === "normal" ? (h(), $("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : M("", !0)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Hf = /* @__PURE__ */ V(Pf, [["render", Af]]), ws = "elementic-progress-bars", zf = {
  ProgressBar: Hf
}, Rf = {
  CoreProgressBarsInstall: si
}, Bf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ws) || (p.installDependencies(e, Rf, t), p.installComponents(e, zf), p.markModuleAsInstalled(e, ws));
  }
}, Zf = O({
  name: "h-radio-button",
  props: {
    ...oi,
    ...ri,
    ...ii,
    label: {
      type: String,
      default: ""
    },
    bordered: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(!1), s = (r) => ({
      class: { "-checked": r.state, "-disabled": r.disabled }
    });
    return {
      core: li().as("label", s).props(["modelValue", "value", "disabled"]).events(["update:modelValue"]).build(),
      hasFocus: n,
      ...D()
    };
  }
}), Wf = ["checked", "disabled", "onChange"];
function qf(e, t, n, s, o, r) {
  const i = v("hr-radio-button");
  return h(), C(i, F({
    class: [e.css_root, { "-focus": e.hasFocus, "-bordered": e.bordered }]
  }, e.core.props, P(e.core.listeners)), {
    default: w((l) => [
      y("span", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("input")]),
          checked: l.state,
          type: "radio",
          disabled: l.disabled,
          onChange: l.onChange,
          onFocus: t[0] || (t[0] = (a) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (a) => e.hasFocus = !1)
        }, null, 42, Wf),
        y("div", {
          class: d([e.css_ec("check-icon")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.label ? (h(), $("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          ee(N(e.label), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const jf = /* @__PURE__ */ V(Zf, [["render", qf]]), $s = "elementic-radio-buttons", Uf = {
  RadioButton: jf
}, Yf = {
  CoreRadioButtonsInstall: ai
}, Gf = {
  install: (e, t) => {
    p.isModuleInstalled(e, $s) || (p.installDependencies(e, Yf, t), p.installComponents(e, Uf), p.markModuleAsInstalled(e, $s));
  }
}, Kf = O({
  name: "h-scroll-container",
  props: {
    ...ci,
    ...ui,
    ...di,
    ...fi,
    ...mi,
    ...hi,
    ...pi,
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e, t) {
    const n = k(), s = k(), o = k(), r = k(), i = k();
    oe([s, o], () => {
      n.value.registerBar("vertical", s.value, o.value);
    }), oe([r, i], () => {
      n.value.registerBar("horizontal", r.value, i.value);
    });
    const l = (u, f) => {
      n.value.scrollTo(u, f);
    }, a = (u) => ({
      class: { "-hover": u.anyHover, "-dragging": u.anyDragging, "-is-hidden": u.hidden }
    });
    return {
      core: yi().as("div", a).props(["horizontal", "vertical", "autoHide", "autoHideDelay", "minimumSize", "containerClasses", "wrapperClasses"]).build(),
      scrollContainer: n,
      verticalTrack: s,
      verticalThumb: o,
      horizontalTrack: r,
      horizontalThumb: i,
      ...D(),
      scrollTo: l
    };
  }
});
function Jf(e, t, n, s, o, r) {
  const i = v("hr-scroll-container");
  return h(), C(i, F({
    ref: "scrollContainer",
    class: [e.css_root, `-color-${e.color}`]
  }, e.core.props, P(e.core.listeners)), {
    verticalBar: w((l) => [
      G(y("div", {
        ref: "verticalTrack",
        class: d([e.css_ec("track"), "-vertical", { "-hover": l.trackHover, "-dragging": l.dragging }])
      }, [
        y("div", {
          ref: "verticalThumb",
          class: d([e.css_ec("thumb"), { "-hover": l.thumbHover, "-dragging": l.dragging }]),
          style: z({ height: `${l.size}px`, transform: `translate(0, ${l.offset}px)` })
        }, null, 6)
      ], 2), [
        [K, l.visible]
      ])
    ]),
    horizontal: w((l) => [
      G(y("div", {
        ref: "horizontalTrack",
        class: d([e.css_ec("track"), "-horizontal", { "-hover": l.trackHover, "-dragging": l.dragging }])
      }, [
        y("div", {
          ref: "horizontalThumb",
          class: d([e.css_ec("thumb"), { "-hover": l.thumbHover, "-dragging": l.dragging }]),
          style: z({ height: `${l.size}px`, transform: `translate(0, ${l.offset}px)` })
        }, null, 6)
      ], 2), [
        [K, l.visible]
      ])
    ]),
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Qf = /* @__PURE__ */ V(Kf, [["render", Jf]]), Ss = "elementic-scroll-containers", Xf = {
  ScrollContainer: Qf
}, xf = {
  CoreScrollContainersInstall: gi
}, Ho = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ss) || (p.installDependencies(e, xf, t), p.installComponents(e, Xf), p.markModuleAsInstalled(e, Ss));
  }
}, em = O({
  name: "h-select",
  props: {
    ...vi,
    ...bi,
    ...wi,
    ...$i,
    ...Si,
    ...ki,
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(""), r = L(() => [
      Tt({
        padding: 8,
        apply(u) {
          Object.assign(u.elements.floating.style, {
            width: `${u.rects.reference.width}px`
          }), o.value = `${u.availableHeight}px`;
        }
      })
    ]), i = (u) => {
      u.outsideFloating && u.outsideReference && n.value.close();
    }, l = (u) => {
      u && u.component && u.component.vnode && u.component.vnode.el && u.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, a = (u) => ({
      class: { "-active": u.menuVisible, "-disabled": u.disabled }
    }), c = Ii().as("div", a).props(["modelValue", "disabled", "hideOnSelect", "allowClear", "multiple", "compare"]).events(["update:modelValue", "focusedItemChanged"]).build();
    return {
      Icons: Q,
      core: c,
      select: n,
      button: s,
      menuMaxHeight: o,
      floatingMiddleware: r,
      onClickOutside: i,
      onFocusedItemChanged: l,
      ...D()
    };
  }
}), tm = ["disabled", "title", "onClick", "onKeydown"], nm = ["onClick"], sm = ["onKeydown"];
function om(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-select");
  return h(), C(c, F({
    ref: "select",
    class: [e.css_root]
  }, e.core.props, P(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      y("button", {
        ref: "button",
        type: "button",
        class: d([e.css_ec("button")]),
        disabled: u.disabled,
        title: u.modelValue && u.modelValue.length !== 0 ? u.selectedText : null,
        onClick: u.onButtonClick,
        onKeydown: u.onKeyEvents
      }, [
        y("span", {
          class: d([e.css_ec("label"), { "-placeholder": !u.anythingSelected }])
        }, [
          u.anythingSelected ? T(e.$slots, "selection", {
            key: 0,
            items: u.selectedItems
          }, () => [
            ee(N(u.selectedText), 1)
          ]) : T(e.$slots, "placeholder", { key: 1 }, () => [
            ee(N(e.placeholder), 1)
          ])
        ], 2),
        I(he, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? M("", !0) : (h(), $("div", {
              key: 0,
              class: d([e.css_ec("icon")])
            }, [
              I(i, {
                icon: e.Icons.chevronDown,
                size: "16px"
              }, null, 8, ["icon"])
            ], 2))
          ]),
          _: 2
        }, 1024),
        I(he, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? (h(), $("div", {
              key: 0,
              class: d([e.css_ec("clear-icon")]),
              title: "Clear",
              onClick: u.clearValue
            }, [
              I(i, {
                icon: e.Icons.close,
                size: "16px"
              }, null, 8, ["icon"])
            ], 10, nm)) : M("", !0)
          ]),
          _: 2
        }, 1024)
      ], 42, tm),
      I(a, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        transition: "fade-fast",
        keep: "",
        visible: u.menuVisible,
        placement: "bottom",
        middleware: e.floatingMiddleware,
        onClickOutside: e.onClickOutside,
        onHide: (f) => u.clearFocusedItem(),
        onTransitionStateChanged: u.onMenuTransitioning
      }, {
        default: w(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: z({ maxHeight: e.menuMaxHeight })
          }, [
            I(l, null, {
              default: w(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, sm)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onClickOutside", "onHide", "onTransitionStateChanged"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const rm = /* @__PURE__ */ V(em, [["render", om]]), im = O({
  name: "h-select-item",
  props: {
    ...Ci,
    ...Ti,
    ...Mi,
    icon: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = (o) => ({
      class: { "-selected": o.selected, "-focused": o.focused, "-disabled": o.disabled },
      onClick: o.onClick
    }), s = Oi().as("div", n).props(["value", "label", "disabled"]).build();
    return {
      Icons: Q,
      core: s,
      ...D()
    };
  }
});
function lm(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-select-item");
  return h(), C(l, F({
    tabindex: "-1",
    class: [e.css_root]
  }, e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (h(), C(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16"
        }, null, 8, ["class", "icon"])) : M("", !0),
        y("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ]),
      y("div", {
        class: d([e.css_ec("checkmark"), { "-selected": a.selected }])
      }, [
        I(i, {
          icon: e.Icons.check,
          size: "16px"
        }, null, 8, ["icon"])
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const am = /* @__PURE__ */ V(im, [["render", lm]]), cm = O({
  name: "h-select-item-divider",
  setup(e, t) {
    const n = pe("select"), s = L(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function um(e, t, n, s, o, r) {
  return e.visible ? (h(), $("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : M("", !0);
}
const dm = /* @__PURE__ */ V(cm, [["render", um]]), fm = O({
  name: "h-select-item-header",
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = pe("select"), s = L(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function mm(e, t, n, s, o, r) {
  const i = v("h-icon");
  return e.visible ? (h(), $("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (h(), C(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      y("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : M("", !0);
}
const hm = /* @__PURE__ */ V(fm, [["render", mm]]), pm = O({
  name: "h-simple-select",
  props: {
    ...Di,
    ...Vi,
    ...Ei,
    ...Li,
    ...Ni,
    ..._i,
    ...Fi,
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(""), r = L(() => [
      Tt({
        padding: 8,
        apply(u) {
          Object.assign(u.elements.floating.style, {
            width: `${u.rects.reference.width}px`
          }), o.value = `${u.availableHeight}px`;
        }
      })
    ]), i = (u) => {
      u.outsideFloating && u.outsideReference && n.value.close();
    }, l = (u) => {
      u && u.component && u.component.vnode && u.component.vnode.el && u.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, a = (u) => ({
      class: { "-active": u.menuVisible, "-disabled": u.disabled }
    }), c = Pi().as("div", a).props(["modelValue", "items", "disabled", "hideOnSelect", "allowClear", "multiple", "compare"]).events(["update:modelValue", "focusedItemChanged"]).build();
    return {
      Icons: Q,
      core: c,
      select: n,
      button: s,
      menuMaxHeight: o,
      floatingMiddleware: r,
      onClickOutside: i,
      onFocusedItemChanged: l,
      ...D()
    };
  }
}), ym = ["disabled", "title", "onClick", "onKeydown"], gm = ["onClick"], vm = ["onKeydown"], bm = ["onClick"];
function wm(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-simple-select");
  return h(), C(c, F({
    ref: "select",
    class: [e.css_root]
  }, e.core.props, P(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      y("button", {
        ref: "button",
        type: "button",
        class: d([e.css_ec("button")]),
        disabled: u.disabled,
        title: u.modelValue && u.modelValue.length !== 0 ? u.selectedText : null,
        onClick: u.onButtonClick,
        onKeydown: u.onKeyEvents
      }, [
        y("span", {
          class: d([e.css_ec("label"), { "-placeholder": !u.anythingSelected }])
        }, [
          u.anythingSelected ? T(e.$slots, "selection", {
            key: 0,
            items: u.selectedItems
          }, () => [
            ee(N(u.selectedText), 1)
          ]) : T(e.$slots, "placeholder", { key: 1 }, () => [
            ee(N(e.placeholder), 1)
          ])
        ], 2),
        I(he, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? M("", !0) : (h(), $("div", {
              key: 0,
              class: d([e.css_ec("icon")])
            }, [
              I(i, {
                icon: e.Icons.chevronDown,
                size: "16px"
              }, null, 8, ["icon"])
            ], 2))
          ]),
          _: 2
        }, 1024),
        I(he, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? (h(), $("div", {
              key: 0,
              class: d([e.css_ec("clear-icon")]),
              title: "Clear",
              onClick: u.clearValue
            }, [
              I(i, {
                icon: e.Icons.close,
                size: "16px"
              }, null, 8, ["icon"])
            ], 10, gm)) : M("", !0)
          ]),
          _: 2
        }, 1024)
      ], 42, ym),
      I(a, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        transition: "fade-fast",
        keep: "",
        visible: u.menuVisible,
        placement: "bottom",
        middleware: e.floatingMiddleware,
        onClickOutside: e.onClickOutside,
        onHide: (f) => u.clearFocusedItem(),
        onTransitionStateChanged: u.onMenuTransitioning
      }, {
        default: w(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: z({ maxHeight: e.menuMaxHeight })
          }, [
            I(l, null, {
              default: w(() => [
                (h(!0), $(le, null, fe(u.items, (f) => (h(), $("div", {
                  class: d([e.css_ec("item")]),
                  onClick: (m) => u.onItemClick(f)
                }, [
                  T(e.$slots, "default", { item: f }, () => [
                    f.icon ? (h(), C(i, {
                      key: 0,
                      class: d([e.css_ec("item-icon")]),
                      icon: f.icon,
                      size: "16"
                    }, null, 8, ["class", "icon"])) : M("", !0),
                    y("span", {
                      class: d([e.css_ec("item-label")])
                    }, N(f.label), 3)
                  ]),
                  y("div", {
                    class: d([e.css_ec("item-checkmark"), { "-selected": f.selected }])
                  }, [
                    I(i, {
                      icon: e.Icons.check,
                      size: "16px"
                    }, null, 8, ["icon"])
                  ], 2)
                ], 10, bm))), 256))
              ]),
              _: 2
            }, 1024)
          ], 46, vm)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onClickOutside", "onHide", "onTransitionStateChanged"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const $m = /* @__PURE__ */ V(pm, [["render", wm]]), ks = "elementic-selects", Sm = {
  SimpleSelect: $m,
  Select: rm,
  SelectItem: am,
  SelectItemDivider: dm,
  SelectItemHeader: hm
}, km = {
  CoreSelectsInstall: Ai,
  FloatingInstall: lt,
  ScrollContainersInstall: Ho
}, Im = {
  install: (e, t) => {
    p.isModuleInstalled(e, ks) || (p.installDependencies(e, km, t), p.installComponents(e, Sm), p.markModuleAsInstalled(e, ks));
  }
}, Cm = O({
  name: "h-slider",
  props: {
    ...Hi,
    ...zi,
    ...Ri,
    ...Bi,
    ...Zi,
    showSteps: {
      type: Boolean,
      default: !1
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    invert: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    const n = k(), s = k(!1), o = L(() => n.value && e.showSteps ? n.value.steps : 1), r = L(() => {
      if (n.value) {
        let f = n.value.percentage;
        return `${Math.max(0, Math.min(100, f))}%`;
      } else
        return "0%";
    }), i = (f) => {
      e.disabled || (s.value = !0, f.preventDefault());
    }, l = (f) => {
      if (s.value) {
        const m = n.value.$el.getBoundingClientRect();
        let g = e.vertical ? 100 / m.height * (f.pageY - m.top) : 100 / m.width * (f.pageX - m.left);
        e.invert && (g = 100 - g);
        const S = n.value.getValueFromPercentage(g);
        t.emit("update:modelValue", S), f.preventDefault();
      }
    }, a = (f) => {
      s.value = !1;
    }, c = (f) => {
      if (!e.disabled) {
        let m = e.vertical ? 100 / n.value.$el.clientHeight * f.offsetY : 100 / n.value.$el.clientWidth * f.offsetX;
        e.invert && (m = 100 - m);
        const g = n.value.getValueFromPercentage(m);
        t.emit("update:modelValue", g), f.preventDefault();
      }
    };
    return {
      core: Wi().as("div").props(["modelValue", "disabled", "minimum", "maximum", "stepSize"]).build(),
      coreSlider: n,
      size: r,
      steps: o,
      handleMouseDown: i,
      handleMouseMove: l,
      handleMouseUp: a,
      handleClick: c,
      dragging: s,
      ...D()
    };
  }
});
function Tm(e, t, n, s, o, r) {
  const i = v("hr-slider"), l = qo("document-event");
  return G((h(), C(i, F({
    ref: "coreSlider",
    class: [e.css_root, e.vertical ? "-vertical" : "-horizontal", { "-invert": e.invert, "-dragging": e.dragging, "-disabled": e.disabled }]
  }, e.core.props, P(e.core.listeners)), {
    default: w(() => [
      y("div", {
        class: d([e.css_ec("bar")]),
        onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
      }, [
        y("div", {
          class: d([e.css_ec("back")])
        }, [
          (h(!0), $(le, null, fe(e.steps, (a) => (h(), $("div", {
            class: d([e.css_ec("step")])
          }, null, 2))), 256))
        ], 2),
        y("div", {
          class: d([e.css_ec("filler")]),
          style: z({ "--size": e.size })
        }, null, 6)
      ], 2),
      y("div", {
        class: d([e.css_ec("handle")]),
        style: z({ "--offset": e.size }),
        onMousedown: t[1] || (t[1] = (...a) => e.handleMouseDown && e.handleMouseDown(...a))
      }, null, 38)
    ]),
    _: 1
  }, 16, ["class"])), [
    [l, e.handleMouseUp, "mouseup"],
    [l, e.handleMouseMove, "mousemove"]
  ]);
}
const Mm = /* @__PURE__ */ V(Cm, [["render", Tm]]), Is = "elementic-sliders", Om = {
  Slider: Mm
}, Dm = {
  CoreSlidersInstall: qi
}, Vm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Is) || (p.installDependencies(e, Dm, t), p.installComponents(e, Om), p.markModuleAsInstalled(e, Is));
  }
}, Em = O({
  name: "h-spinner",
  props: {
    size: {
      type: String,
      default: "32px"
    },
    thickness: {
      type: String,
      default: "4px"
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e, t) {
    return {
      ...D()
    };
  }
});
function Lm(e, t, n, s, o, r) {
  return h(), $("div", {
    class: d([e.css_root, `-color-${e.color}`]),
    style: z({ width: e.size, height: e.size, "--border-thickness": e.thickness })
  }, null, 6);
}
const zo = /* @__PURE__ */ V(Em, [["render", Lm]]), Nm = O({
  name: "h-spinner-overlay",
  components: { HSpinner: zo },
  props: {
    loading: {
      type: Boolean,
      required: !0
    },
    label: {
      type: String
    },
    color: {
      type: String,
      default: "light"
    }
  },
  setup(e, t) {
    return {
      ...D()
    };
  }
});
function _m(e, t, n, s, o, r) {
  const i = v("h-spinner");
  return h(), $("div", {
    class: d([e.css_root, { "-loading": e.loading, "-has-label": e.label }, `-color-${e.color}`])
  }, [
    y("div", {
      class: d([e.css_ec("content")])
    }, [
      T(e.$slots, "default")
    ], 2),
    y("div", {
      class: d([e.css_ec("overlay")])
    }, [
      I(i),
      e.label ? (h(), $("div", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : M("", !0)
    ], 2)
  ], 2);
}
const Fm = /* @__PURE__ */ V(Nm, [["render", _m]]), Cs = "elementic-spinners", Pm = {
  Spinner: zo,
  SpinnerOverlay: Fm
}, Am = {}, Hm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Cs) || (p.installDependencies(e, Am, t), p.installComponents(e, Pm), p.markModuleAsInstalled(e, Cs));
  }
}, zm = O({
  name: "h-step-item",
  props: {
    step: {
      type: Object,
      required: !0
    }
  },
  emits: ["click"],
  setup(e, t) {
    const n = () => {
      t.emit("click");
    };
    return {
      ...D(),
      Icons: Q,
      onClick: n
    };
  }
});
function Rm(e, t, n, s, o, r) {
  const i = v("h-icon");
  return h(), $("div", {
    class: d([e.css_root, { "-current": e.step.isCurrent, "-done": e.step.isDone, "-last": e.step.isLast, "-locked": e.step.isLocked }]),
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l))
  }, [
    y("div", {
      class: d([e.css_ec("container")])
    }, [
      e.step.data.icon ? (h(), C(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.step.data.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.step.data.icon ? (h(), C(i, {
        key: 1,
        class: d([e.css_ec("done-icon")]),
        icon: e.Icons.check,
        size: "20px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.step.data.label ? (h(), $("div", {
        key: 2,
        class: d([e.css_ec("label")])
      }, N(e.step.data.label), 3)) : M("", !0)
    ], 2)
  ], 2);
}
const Bm = /* @__PURE__ */ V(zm, [["render", Rm]]), Zm = O({
  name: "h-steps-navigator",
  props: {
    ...ji,
    ...Ui,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = L(() => e.steps.filter((m) => m.data.label).length > 0), r = k(0), i = k(0), l = L(() => e.vertical ? {
      top: `${i.value}px`,
      height: `${r.value}px`
    } : {
      left: `${i.value}px`,
      width: `${r.value}px`
    }), a = () => {
      if (s.value.length) {
        const m = s.value[0].$el;
        i.value = e.vertical ? m.offsetTop + m.offsetHeight : m.offsetLeft + m.offsetWidth;
        const g = s.value.find((S) => S.step.id === e.modelValue);
        g && (r.value = Math.max(0, (e.vertical ? g.$el.offsetTop : g.$el.offsetLeft) - i.value));
      }
    }, c = (m, g) => {
      g.id === e.modelValue && a();
    };
    _s(() => {
      s.value = [];
    }), nt(() => {
      a(), oe(() => n.value.visibleSteps, () => Re(a));
    }), oe(() => e.modelValue, a);
    const u = () => {
      n.value.nextStep();
    }, f = Yi().as("div").props(["modelValue", "steps"]).events(["update:modelValue"]).build();
    return {
      stepsNavigator: n,
      stepsRefs: s,
      setActiveStepRef: c,
      core: f,
      hasLabels: o,
      indicatorStyle: l,
      updateIndicator: a,
      nextStep: u,
      ...D()
    };
  }
});
function Wm(e, t, n, s, o, r) {
  const i = v("h-step-item"), l = v("hr-steps-navigator");
  return h(), C(l, F({
    ref: "stepsNavigator",
    class: [e.css_root, { "-vertical": e.vertical, "-has-labels": e.hasLabels }]
  }, e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      (h(!0), $(le, null, fe(a.visibleSteps, (c, u) => (h(), $(le, {
        key: c.id
      }, [
        I(i, {
          ref_for: !0,
          ref: (f) => e.stepsRefs[u] = f,
          step: c,
          onClick: (f) => a.onStepClick(c)
        }, null, 8, ["step", "onClick"]),
        u !== a.visibleSteps.length - 1 ? (h(), $("div", {
          key: `${c.id}-line`,
          class: d([e.css_ec("step-line")])
        }, null, 2)) : M("", !0)
      ], 64))), 128)),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": a.currentStep === null }]),
        style: z(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 1
  }, 16, ["class"]);
}
const qm = /* @__PURE__ */ V(Zm, [["render", Wm]]), Ts = "elementic-steps", jm = {
  StepItem: Bm,
  StepsNavigator: qm
}, Um = {
  CoreStepsInstall: Gi
}, Ym = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ts) || (p.installDependencies(e, Um, t), p.installComponents(e, jm), p.markModuleAsInstalled(e, Ts));
  }
}, Gm = O({
  name: "h-switch",
  props: {
    ...As,
    ...Hs,
    ...zs,
    ...Rs,
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = k(!1), o = (i) => ({
      class: [n.css_root.value, {
        "-focus": s,
        "-checked": i.state,
        "-indeterminate": i.indeterminate,
        "-disabled": i.disabled
      }]
    });
    return {
      core: Bs().as("label", o).props(["modelValue", "value", "disabled", "visible"]).events(["update:modelValue"]).build(),
      hasFocus: s,
      ...n
    };
  }
}), Km = ["checked", "disabled", "onChange"];
function Jm(e, t, n, s, o, r) {
  const i = v("hr-checkbox");
  return G((h(), C(i, F(e.core.props, P(e.core.listeners)), {
    default: w((l) => [
      e.$slots.leftText || e.leftText ? (h(), $("span", {
        key: 0,
        class: d([e.css_ec("left-label")])
      }, [
        T(e.$slots, "leftText", {}, () => [
          ee(N(e.leftText), 1)
        ])
      ], 2)) : M("", !0),
      y("div", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("back")]),
          checked: l.state,
          type: "checkbox",
          disabled: l.disabled,
          onChange: l.onChange,
          onFocus: t[0] || (t[0] = (a) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (a) => e.hasFocus = !1)
        }, null, 42, Km),
        y("span", {
          class: d([e.css_ec("back-inner")])
        }, null, 2),
        y("span", {
          class: d([e.css_ec("dot")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.rightText ? (h(), $("span", {
        key: 1,
        class: d([e.css_ec("right-label")])
      }, [
        T(e.$slots, "rightText", {}, () => [
          ee(N(e.rightText), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16)), [
    [K, e.visible]
  ]);
}
const Qm = /* @__PURE__ */ V(Gm, [["render", Jm]]), Ms = "elementic-switches", Xm = {
  Switch: Qm
}, xm = {
  CoreCheckboxInstall: Zs
}, eh = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ms) || (p.installDependencies(e, xm, t), p.installComponents(e, Xm), p.markModuleAsInstalled(e, Ms));
  }
}, th = O({
  name: "h-tab-item",
  props: {
    ...Ki,
    ...Ji,
    label: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = k(), s = pe("updateIndicator"), o = pe("tabsNavigator"), r = st({
      id: e.id
    });
    nt(() => {
      r.ref = n.value.$el, o.addTabInstance(r);
    }), jo(() => {
      o.removeTabInstance(r);
    }), Uo(() => {
      s && s();
    });
    const i = (a) => ({
      class: { "-active": a.active, "-disabled": a.disabled },
      onClick: a.onClick,
      onKeydown: (c) => {
        c.key === "Enter" && a.onClick();
      }
    });
    return {
      core: Qi().as("div", i).props(["id", "disabled"]).build(),
      tab: n,
      ...D()
    };
  }
});
function nh(e, t, n, s, o, r) {
  const i = v("hr-tab-item");
  return h(), C(i, F({
    ref: "tab",
    tabindex: "0",
    class: [e.css_root]
  }, e.core.props, P(e.core.listeners)), {
    default: w(() => [
      ee(N(e.label) + " ", 1)
    ]),
    _: 1
  }, 16, ["class"]);
}
const sh = /* @__PURE__ */ V(th, [["render", nh]]), oh = O({
  name: "h-tabs-navigator",
  props: {
    ...Xi,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = k(), n = k([]), s = (f) => {
      n.value.push(f);
    }, o = (f) => {
      n.value = el.remove(n.value, f);
    }, r = k(0), i = k(0), l = L(() => e.vertical ? {
      transform: `translate(0, ${i.value}px)`,
      height: `${r.value}px`
    } : {
      transform: `translate(${i.value}px, 0)`,
      width: `${r.value}px`
    }), a = () => {
      if (t.value && t.value.activeTab) {
        const f = t.value.activeTab.id, m = n.value.find((g) => g.id === f);
        m && m.ref && (i.value = e.vertical ? m.ref.offsetTop : m.ref.offsetLeft, r.value = e.vertical ? m.ref.offsetHeight : m.ref.offsetWidth);
      }
    }, c = (f) => {
      t.value = f, oe(() => t.value ? t.value.activeTab : null, a);
    };
    nt(() => a()), ht("updateIndicator", a), ht("tabsNavigator", {
      addTabInstance: s,
      removeTabInstance: o
    });
    const u = xi().as("div").props(["modelValue"]).events(["update:modelValue"]).build();
    return {
      setNavigator: c,
      core: u,
      indicatorStyle: l,
      updateIndicator: a,
      ...D()
    };
  }
});
function rh(e, t, n, s, o, r) {
  const i = v("hr-tabs-navigator");
  return h(), C(i, F({
    ref: (l) => e.setNavigator(l),
    class: [e.css_root, { "-vertical": e.vertical }]
  }, e.core.props, P(e.core.listeners)), {
    default: w((l) => [
      T(e.$slots, "default"),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": l.activeTab === null }]),
        style: z(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 3
  }, 16, ["class"]);
}
const ih = /* @__PURE__ */ V(oh, [["render", rh]]), Os = "elementic-tabs", lh = {
  TabItem: sh,
  TabsNavigator: ih
}, ah = {
  CoreTabsInstall: tl
}, ch = {
  install: (e, t) => {
    p.isModuleInstalled(e, Os) || (p.installDependencies(e, ah, t), p.installComponents(e, lh), p.markModuleAsInstalled(e, Os));
  }
}, uh = /* @__PURE__ */ O({
  name: "h-table-column-header",
  props: {
    column: {
      type: Object,
      required: !0
    },
    sort: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = pe("table"), n = L(() => e.sort.key === null ? "-unsorted" : e.sort.key === e.column.property ? `-sorting-${e.sort.direction}` : null), s = () => {
      t && t.setSorting(e.column.property);
    }, o = D(), r = () => I("div", {
      onClick: s,
      class: [o.css_ec("sorting-icon"), n.value]
    }, [I(v("h-icon"), {
      class: [o.css_ec("sort-up")],
      icon: "chevron-up",
      size: "16px"
    }, null), I(v("h-icon"), {
      class: [o.css_ec("sort-down")],
      icon: "chevron-down",
      size: "16px"
    }, null)]);
    return () => I("th", {
      class: [o.css_root.value, {
        "-sortable": e.column.sortable
      }]
    }, [I("div", {
      class: [o.css_ec("container")]
    }, [I("div", {
      class: [o.css_ec("content")]
    }, [e.column.headerTemplate ? e.column.headerTemplate({
      data: e.column.data
    }) : e.column.data.label]), e.column.sortable ? r() : null])]);
  }
}), dh = /* @__PURE__ */ O({
  name: "h-table-row",
  props: {
    column: {
      type: nl,
      required: !0
    },
    row: {
      type: sl,
      required: !0
    }
  },
  setup(e, t) {
    const n = L(() => [{
      "-minimum-width": e.column.data.width === "minimum"
    }]), s = e.column.data.width !== "minimum" ? e.column.data.width : null, o = () => I("td", {
      class: [n.value],
      style: {
        width: s
      }
    }, [e.column.template({
      row: e.row.data,
      rowId: e.row.id,
      isSelected: e.row.selected,
      rowSelectable: e.row.selectable
    })]), r = () => I("td", {
      class: [n.value],
      style: {
        width: s
      }
    }, [e.row.getValue(e.column.property, e.column.formatter)]);
    return () => e.column.template ? o() : r();
  }
}), fh = O({
  name: "h-table-row",
  components: { HTableCell: dh },
  props: {
    columns: {
      type: Array,
      // as PropType<CoreTableColumn>,
      required: !0
    },
    row: {
      type: Object,
      // as PropType<CoreTableRow>,
      required: !0
    },
    classes: {
      type: [String, Function],
      default: null
    }
  },
  emits: ["rowClick"],
  setup(e) {
    const t = L(() => typeof e.classes == "function" ? e.classes(e.row.data) : e.classes), n = (o) => ({
      onClick: o.onClick
    });
    return {
      core: ol().as("tr", n).props(["columns", "row"]).events(["rowClick"]).build(),
      rowClasses: t,
      ...D()
    };
  }
});
function mh(e, t, n, s, o, r) {
  const i = v("h-table-cell"), l = v("hr-table-row");
  return h(), C(l, F({
    class: [e.css_root, { "-selected": e.row.selected }, e.rowClasses]
  }, e.core.props, P(e.core.listeners)), {
    default: w((a) => [
      (h(!0), $(le, null, fe(e.columns, (c) => (h(), C(i, {
        key: c.property,
        row: e.row,
        column: c
      }, null, 8, ["row", "column"]))), 128))
    ]),
    _: 1
  }, 16, ["class"]);
}
const hh = /* @__PURE__ */ V(fh, [["render", mh]]), ph = O({
  name: "h-table",
  components: { HTableRow: hh, HTableColumnHeader: uh },
  props: {
    ...rl,
    ...il,
    ...ll,
    ...al,
    ...cl,
    rowClasses: {
      type: [String, Function],
      default: null
    },
    striped: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:sort", "update:selectedRows"],
  setup() {
    return {
      core: ul().as("table").props(["data", "rowKey", "selectable", "sort", "selectedRows"]).events(["update:sort", "update:selectedRows"]).build(),
      ...D()
    };
  }
}), yh = {
  key: 0,
  class: "-no-hover"
}, gh = ["colspan"], vh = { key: 0 };
function bh(e, t, n, s, o, r) {
  const i = v("h-table-column-header"), l = v("h-table-row"), a = v("h-checkbox"), c = v("h-table-column"), u = v("hr-table");
  return h(), C(u, F({
    class: [e.css_root, { "-striped": e.striped, "-hoverable": e.hover }]
  }, e.core.props, P(e.core.listeners)), {
    default: w((f) => [
      y("thead", null, [
        (h(!0), $(le, null, fe(f.orderedColumns, (m) => (h(), C(i, {
          key: m.property,
          column: m,
          sort: e.sort
        }, null, 8, ["column", "sort"]))), 128))
      ]),
      y("tbody", null, [
        (h(!0), $(le, null, fe(f.rows, (m) => (h(), C(l, {
          key: m.data[e.rowKey],
          row: m,
          columns: f.orderedColumns,
          classes: e.rowClasses
        }, null, 8, ["row", "columns", "classes"]))), 128)),
        e.$slots["no-items"] && f.rows.length === 0 ? (h(), $("tr", yh, [
          y("td", {
            colspan: f.orderedColumns.length
          }, [
            T(e.$slots, "no-items")
          ], 8, gh)
        ])) : M("", !0)
      ]),
      e.$slots.footer ? (h(), $("tfoot", vh, [
        T(e.$slots, "footer", {
          rows: f.rows
        })
      ])) : M("", !0),
      e.selectable && f.anySelectable ? (h(), C(c, {
        key: 1,
        width: "minimum",
        property: "__sortable",
        sortable: !1,
        order: -1
      }, {
        header: w(() => [
          I(a, {
            "model-value": f.allRowsSelected,
            indeterminate: !f.allRowsSelected && f.anyRowsSelected,
            "onUpdate:modelValue": f.toggleAllSelection
          }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])
        ]),
        default: w(({ rowId: m, isSelected: g, rowSelectable: S }) => [
          I(he, { name: "fade-fast" }, {
            default: w(() => [
              I(a, {
                visible: S,
                "model-value": g,
                "onUpdate:modelValue": (Z) => f.setRowSelectionState(m, Z)
              }, null, 8, ["visible", "model-value", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024)) : M("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const wh = /* @__PURE__ */ V(ph, [["render", bh]]), $h = O({
  name: "h-table-column",
  props: {
    ...dl,
    ...fl,
    ...ml,
    ...hl,
    label: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "minimum"].indexOf(e) !== -1 || !Number.isNaN(parseInt(e, 10))
    }
  },
  setup(e) {
    const t = st({
      label: L(() => e.label),
      width: L(() => e.width)
    });
    return {
      core: pl(t, ["property", "formatter", "sortable", "order"])
    };
  }
});
function Sh(e, t, n, s, o, r) {
  const i = v("hr-table-column");
  return h(), C(i, F(e.core.props, P(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default"),
      T(e.$slots, "header")
    ]),
    _: 3
  }, 16);
}
const kh = /* @__PURE__ */ V($h, [["render", Sh]]), Ds = "elementic-tables", Ih = {
  Table: wh,
  TableColumn: kh
}, Ch = {
  CoreTablesInstall: yl,
  CheckboxInstall: Ks
}, Th = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ds) || (p.installDependencies(e, Ch, t), p.installComponents(e, Ih), p.markModuleAsInstalled(e, Ds));
  }
}, Vs = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, Mh = O({
  name: "h-tooltip",
  props: {
    ...Ut("top"),
    ...gl,
    ...vl,
    ...bl,
    ...wl,
    content: {
      type: String
    },
    display: {
      type: String,
      default: "inline-block"
    }
  },
  emits: ["update:modelValue", "computedPosition"],
  setup(e, t) {
    const n = k(), s = k(Vs[e.placement]), o = k([
      Ct(4)
    ]), r = (l) => {
      const a = l.placement.split("-")[0];
      s.value = Vs[a], t.emit("computedPosition", l);
    };
    return {
      core: $l(n).props(["modelValue", "trigger"]).events(["update:modelValue"]).build(),
      reference: n,
      floatingMiddleware: o,
      onComputedPosition: r,
      transition: s,
      ...D()
    };
  }
}), Oh = ["innerHTML"];
function Dh(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-floating"), a = v("hr-tooltip");
  return h(), C(a, F(e.core.props, P(e.core.listeners)), {
    default: w((c) => [
      y("div", {
        ref: "reference",
        style: z({ display: e.display })
      }, [
        T(e.$slots, "default")
      ], 4),
      I(l, {
        as: "div",
        class: d([e.css_root]),
        reference: e.reference,
        transition: e.transition,
        "show-arrow": "",
        visible: c.visible,
        placement: e.placement,
        middleware: e.floatingMiddleware,
        onComputedPosition: e.onComputedPosition
      }, {
        arrow: w(() => [
          I(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          T(e.$slots, "content", {}, () => [
            y("span", { innerHTML: e.content }, null, 8, Oh)
          ])
        ]),
        _: 2
      }, 1032, ["class", "reference", "transition", "visible", "placement", "middleware", "onComputedPosition"])
    ]),
    _: 3
  }, 16);
}
const Vh = /* @__PURE__ */ V(Mh, [["render", Dh]]), Eh = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  data: '<polygon points="0,16 16,16 8,8"/>'
}, Es = "elementic-tooltips", Lh = {
  Tooltip: Vh
}, Nh = {
  CoreTooltipsInstall: Sl,
  FloatingInstall: lt
}, _h = {
  install: (e, t) => {
    p.isModuleInstalled(e, Es) || (p.installDependencies(e, Nh, t), p.installComponents(e, Lh), ke.register("tooltip-arrow", Eh), p.markModuleAsInstalled(e, Es));
  }
}, Fh = O({
  name: "SimpleNotification",
  props: {
    title: {
      type: String
    },
    text: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  emits: ["something"],
  setup(e, t) {
    return Us.setupNotification(), {};
  }
});
function Ph(e, t, n, s, o, r) {
  const i = v("h-notification");
  return h(), C(i, {
    title: e.title,
    color: e.color
  }, {
    default: w(() => [
      ee(N(e.text), 1)
    ]),
    _: 1
  }, 8, ["title", "color"]);
}
const Bh = /* @__PURE__ */ V(Fh, [["render", Ph]]), Ah = {
  AlertsInstall: ql,
  ButtonsInstall: la,
  CheckboxesInstall: Ks,
  CollapsesInstall: Na,
  DatePickersInstall: nd,
  DialogsInstall: hd,
  DrawersInstall: $d,
  DropdownsInstall: Ud,
  FloatingInstall: lt,
  FragmentsInstall: tf,
  IconsInstall: Yt,
  InputsInstall: Fo,
  ListsInstall: af,
  NotificationsInstall: bf,
  PaginatorsInstall: Df,
  PopoversInstall: Ff,
  ProgressBarsInstall: Bf,
  RadioButtonsInstall: Gf,
  ScrollContainersInstall: Ho,
  SelectsInstall: Im,
  SlidersInstall: Vm,
  SpinnersInstall: Hm,
  StepsInstall: Ym,
  SwitchesInstall: eh,
  TabsInstall: ch,
  TablesInstall: Th,
  TooltipsInstall: _h
}, Zh = {
  install: (e, t) => {
    Object.values(Ah).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  jh as DialogManager,
  Rh as IconRegistry,
  Uh as NotificationManager,
  Bh as SimpleNotification,
  Yh as coreFloatingArrowReference,
  Gh as createCoreStepItem,
  Zh as default
};
