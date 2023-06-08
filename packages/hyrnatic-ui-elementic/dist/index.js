import { getCurrentInstance as Cs, computed as V, defineComponent as M, resolveComponent as v, openBlock as f, createElementBlock as S, normalizeClass as d, createVNode as C, createCommentVNode as O, createElementVNode as y, toDisplayString as N, createBlock as I, withDirectives as K, mergeProps as F, toHandlers as A, withCtx as w, renderSlot as T, vShow as J, createTextVNode as ne, normalizeStyle as W, ref as k, withKeys as Ts, Transition as pe, resolveDynamicComponent as Ms, watch as le, Fragment as se, renderList as he, onBeforeUpdate as Os, inject as ue, reactive as je, withModifiers as $n, provide as ft, nextTick as Re, h as Sn, TransitionGroup as Ds, onMounted as vt, resolveDirective as Vo, onUnmounted as No, onUpdated as Fo } from "vue";
import { StringHelper as Ls, ModuleHelper as p, coreButtonDisabledProp as Ht, coreButtonLoadingProp as zt, coreButtonVisibleProp as Rt, coreButtonSetup as Bt, CoreButtonsInstall as _o, coreCheckboxDisabledProp as Es, coreCheckboxIndeterminateProp as Po, coreCheckboxVisibleProp as Vs, coreCheckboxModelValueProp as Ns, coreCheckboxValueProp as Fs, coreCheckboxSetup as _s, CoreCheckboxInstall as Ps, coreCollapseAccordionProp as Ao, coreCollapseModelValueProp as Ho, coreCollapseSetup as zo, coreCollapseItemIdProp as Ro, coreCollapseItemSetup as Bo, coreInlineCollapseModelValueProp as Zo, coreCollapseInlineSetup as Wo, CoreCollapsesInstall as qo, coreDatePickerModelValueProp as jo, coreDatePickerDisabledProp as Uo, coreDatePickerVisibleProp as Yo, coreDatePickerFirstDayOfWeekProp as Go, coreDatePickerSetup as Ko, splitPlacement as Be, coreInputDisabledProp as Jo, coreInputReadonlyProp as Qo, coreInputTypeProp as Xo, coreInputModelValueProp as xo, coreInputModelModifiersProp as er, coreInputSetup as tr, coreAutocompleteDisabledProp as nr, coreAutocompleteItemsProp as sr, coreAutocompleteModelValueProp as or, coreAutocompleteModelModifiersProp as rr, coreAutocompleteSetup as ir, CoreInputsInstall as ar, CoreDatePickersInstall as lr, coreDialogVisibleProp as As, coreDialogSetup as Hs, coreDialogWrapper as cr, CoreDialogsInstall as zs, coreDropdownDisabledProp as ur, coreDropdownVisibleProp as dr, coreDropdownSplitButtonProp as fr, coreDropdownHideOnClickProp as mr, coreDropdownSetup as hr, coreDropdownItemDisabledProp as pr, coreDropdownItemLabelProp as yr, coreDropdownItemSetup as gr, coreComponentAsProp as vr, coreFloatingReferenceProp as br, coreFloatingVisibleProp as wr, coreFloatingMiddlewareProp as $r, coreFloatingTransitionProp as Sr, coreFloatingPlacementProp as Zt, coreFloatingArrowReference as kr, coreFloatingSetup as Ir, CoreFloatingInstall as Cr, CoreDropdownsInstall as Tr, coreFragmentContainerActiveProp as Mr, coreFragmentContainerSetup as Or, CoreFragmentsInstall as Dr, coreNotificationVisibleProp as Lr, coreNotificationSetup as Er, coreNotificationWrapperNameProp as Vr, coreNotificationWrapperSetup as Nr, NotificationManager as Rs, CoreNotificationsInstall as Fr, corePaginatorModelValueProp as _r, corePaginatorPageSizeProp as Pr, corePaginatorCountProp as Ar, corePaginatorDeltaProp as Hr, corePaginatorSetup as zr, CorePaginatorsInstall as Rr, coreProgressBarValueProp as Br, coreProgressBarMinimumProp as Zr, coreProgressBarMaximumProp as Wr, coreProgressBarSetup as qr, CoreProgressBarsInstall as jr, coreRadioButtonDisabledProp as Ur, coreRadioButtonModelValueProp as Yr, coreRadioButtonValueProp as Gr, coreRadioButtonSetup as Kr, CoreRadioButtonsInstall as Jr, coreScrollContainerHorizontalProp as Qr, coreScrollContainerVerticalProp as Xr, coreScrollContainerAutoHideProp as xr, coreScrollContainerAutoHideDelayProp as ei, coreScrollContainerMinimumSizeProp as ti, coreScrollContainerContainerClassesProp as ni, coreScrollContainerWrapperClassesProp as si, coreScrollContainerSetup as oi, CoreScrollContainersInstall as ri, coreSelectDisabledProp as ii, coreSelectAllowClearProp as ai, coreSelectHideOnSelectProp as li, coreSelectMultipleProp as ci, coreSelectModelValueProp as ui, coreSelectCompareProp as di, coreSelectSetup as fi, coreSelectItemDisabledProp as mi, coreSelectItemValueProp as hi, coreSelectItemLabelProp as pi, coreSelectItemSetup as yi, CoreSelectsInstall as gi, coreSliderModelValueProp as vi, coreSliderDisabledProp as bi, coreSliderMaximumProp as wi, coreSliderMinimumProp as $i, coreSliderStepSizeProp as Si, coreSliderSetup as ki, CoreSlidersInstall as Ii, coreStepsNavigatorModelValueProp as Ci, coreStepsNavigatorStepsProp as Ti, coreStepsNavigatorSetup as Mi, CoreStepsInstall as Oi, coreTabItemIdProp as Di, coreTabItemIdDisabledProp as Li, coreTabItemSetup as Ei, coreTabsNavigatorModelValueProp as Vi, coreTabsNavigatorSetup as Ni, ArrayHelper as Fi, CoreTabsInstall as _i, CoreTableColumn as Pi, CoreTableRow as Ai, coreTableRowSetup as Hi, coreTableDataProp as zi, coreTableRowKeyProp as Ri, coreTableSelectableProp as Bi, coreTableSelectedRowsProp as Zi, coreTableSortProp as Wi, coreTableSetup as qi, coreTableColumnPropertyProp as ji, coreTableColumnFormatterProp as Ui, coreTableColumnSortableProp as Yi, coreTableColumnOrderProp as Gi, coreTableColumnSetup as Ki, CoreTablesInstall as Ji, coreTooltipModelValueProp as Qi, coreTooltipTriggerProp as Xi, coreTooltipShowDelayProp as xi, coreTooltipHideDelayProp as ea, coreTooltipSetup as ta, CoreTooltipsInstall as na } from "@hyrioo/hyrnatic-ui-core";
import { DialogManager as mh, NotificationManager as hh, coreFloatingArrowReference as ph, createCoreStepItem as yh } from "@hyrioo/hyrnatic-ui-core";
const D = () => {
  const e = Cs(), t = V(() => e ? e.type.name : null);
  return {
    css_root: t,
    css_ec: (s) => `${t.value}__${s}`
  };
};
var sa = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", oa = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", ra = "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z", ia = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", aa = "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z", la = "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z", ca = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", ua = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", da = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", fa = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", ma = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", ha = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z", pa = "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z", ya = "M19,13H5V11H19V13Z", ga = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
const bt = {};
function Bs(e, t) {
  bt[e] = t;
}
function Zs(e, t) {
  bt[e] = {
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    data: `<path d="${t}" />`
  };
}
const be = {
  register: Bs,
  registerMDI: Zs,
  icons: bt
}, lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be,
  icons: bt,
  register: Bs,
  registerMDI: Zs
}, Symbol.toStringTag, { value: "Module" })), x = {
  arrowLeft: sa,
  arrowRight: oa,
  calendarMonth: ra,
  check: ia,
  chevronDoubleLeft: aa,
  chevronDoubleRight: la,
  chevronDown: ca,
  chevronLeft: ua,
  chevronRight: da,
  chevronUp: fa,
  close: ma,
  dotsHorizontal: ha,
  loading: pa,
  minus: ya,
  plus: ga
};
Object.keys(x).forEach((e) => {
  const t = Ls.kebabize(e);
  be.registerMDI(t, x[e]), x[e] = t;
});
const va = M({
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
      Icons: x,
      onClose: () => {
        t.emit("close");
      },
      ...D()
    };
  }
}), L = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ba = { key: 1 };
function wa(e, t, n, s, o, r) {
  const i = v("h-icon");
  return f(), S("div", {
    class: d([e.css_root, `-styling-${e.styling}`])
  }, [
    e.icon ? (f(), S("div", {
      key: 0,
      class: d([e.css_ec("icon")])
    }, [
      C(i, {
        icon: e.icon,
        size: e.description ? "24px" : "16px"
      }, null, 8, ["icon", "size"])
    ], 2)) : O("", !0),
    y("div", {
      class: d([e.css_ec("container")])
    }, [
      y("div", {
        class: d([e.css_ec("title")])
      }, N(e.title), 3),
      e.description ? (f(), S("div", {
        key: 0,
        class: d([e.css_ec("description")])
      }, N(e.description), 3)) : O("", !0)
    ], 2),
    e.showCloseButton || e.closeText ? (f(), S("div", {
      key: 1,
      class: d([e.css_ec("close")]),
      onClick: t[0] || (t[0] = (...a) => e.onClose && e.onClose(...a))
    }, [
      e.showCloseButton ? (f(), I(i, {
        key: 0,
        icon: e.Icons.close,
        size: "16px"
      }, null, 8, ["icon"])) : e.closeText ? (f(), S("span", ba, N(e.closeText), 1)) : O("", !0)
    ], 2)) : O("", !0)
  ], 2);
}
const $a = /* @__PURE__ */ L(va, [["render", wa]]), kn = "elementic-alerts", Sa = {
  Alert: $a
}, ka = {}, Ia = {
  install: (e, t) => {
    p.isModuleInstalled(e, kn) || (p.installDependencies(e, ka, t), p.installComponents(e, Sa), p.markModuleAsInstalled(e, kn));
  }
}, Ca = /* @__PURE__ */ M({
  name: "h-button",
  emits: ["click"],
  props: {
    ...Ht,
    ...zt,
    ...Rt,
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
    const n = D(), s = V(() => !t.slots.default && !e.label), o = (i) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, {
        "-loading": i.loading,
        "-icon-only": s.value,
        "-has-icon": e.icon,
        "-rounded": e.rounded
      }],
      disabled: i.disabled,
      onClick: i.onClick,
      type: e.type
    }), r = Bt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: r,
      ...n
    };
  }
});
function Ta(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-button");
  return K((f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w(() => [
      y("span", {
        class: d([e.css_ec("content")])
      }, [
        e.icon ? (f(), I(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16px"
        }, null, 8, ["class", "icon"])) : O("", !0),
        y("div", {
          class: d([e.css_ec("loading-container")])
        }, [
          y("div", {
            class: d([e.css_ec("loading-spinner")])
          }, null, 2)
        ], 2),
        T(e.$slots, "default", {}, () => [
          e.$slots.default || e.label ? (f(), S("span", {
            key: 0,
            class: d([e.css_ec("text")])
          }, N(e.label), 3)) : O("", !0)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const Ma = /* @__PURE__ */ L(Ca, [["render", Ta]]), Oa = M({
  name: "h-icon-button",
  props: {
    ...Ht,
    ...zt,
    ...Rt,
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
    const n = D(), s = V(() => ({
      small: "12px",
      normal: "16px",
      large: "24px"
    })[e.size]), o = (i) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, { "-loading": i.loading, "-rounded": e.rounded }],
      disabled: i.disabled,
      onClick: i.onClick,
      type: e.type
    }), r = Bt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: r,
      iconSize: s,
      ...D()
    };
  }
});
function Da(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-button");
  return K((f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w(() => [
      y("span", {
        class: d([e.css_ec("content")])
      }, [
        C(i, F({
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
    [J, e.visible]
  ]);
}
const La = /* @__PURE__ */ L(Oa, [["render", Da]]), Ea = /* @__PURE__ */ M({
  name: "h-link-button",
  props: {
    ...Ht,
    ...zt,
    ...Rt,
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
    }), o = Bt().as("button", s).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: o,
      ...n
    };
  }
});
function Va(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-button");
  return K((f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w(() => [
      C(i, {
        class: d([e.css_ec("loading-icon")]),
        icon: e.Icons.loading,
        size: "16px"
      }, null, 8, ["class", "icon"]),
      y("span", {
        class: d([e.css_ec("text")])
      }, [
        T(e.$slots, "default", {}, () => [
          ne(N(e.label), 1)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const Na = /* @__PURE__ */ L(Ea, [["render", Va]]), Fa = M({
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
      const u = /(\w*)="(.*?)"/gi, h = /([^:]+?):([^;]+);?/gi;
      return c.replace(u, (m, g, $) => g === "fill" || g === "stroke" ? "" : g === "style" ? ($ = $.replace(h, (z, R) => R === "fill" || R === "stroke" ? "" : z), $.length !== 0 ? `${g}="${$}"` : "") : m);
    }, o = (c, u, h) => Array.isArray(u) ? u.length - 1 >= h ? `${c}="${n(u[h])}"` : "" : `${c}="${n(u)}"`, r = (c, u, h) => {
      const m = /<(path|rect|circle|polygon|line|polyline|ellipse).*?>/gi;
      let g = 0;
      return c.replace(m, ($, z) => {
        const R = o("fill", h, g), Q = o("stroke", u, g);
        let G = s($);
        return G = `<${z} ${R} ${Q} ${G.substr(z.length + 1)}`, g++, G;
      });
    }, i = V(() => {
      const c = e.strokes ? e.strokes : [], u = e.fills ? e.fills : [];
      return r(be.icons[e.icon].data, c, u);
    }), a = V(() => be.icons[e.icon] ? be.icons[e.icon].viewBox : (console.warn(`No icon has been registered with the key "${e.icon}"`), "")), l = V(() => {
      const c = {};
      return c.width = e.width || e.size || be.icons[e.icon].width, c.height = e.height || e.size || be.icons[e.icon].height, isFinite(c.width) && (c.width = `${c.width}px`), isFinite(c.height) && (c.height = `${c.height}px`), c;
    });
    return {
      content: i,
      viewBox: a,
      style: l,
      ...D()
    };
  }
}), _a = ["viewBox", "innerHTML"];
function Pa(e, t, n, s, o, r) {
  return f(), S("svg", {
    class: d([e.css_root, { "-spin": e.spin }]),
    viewBox: e.viewBox,
    style: W(e.style),
    innerHTML: e.content
  }, null, 14, _a);
}
const Aa = /* @__PURE__ */ L(Fa, [["render", Pa]]), In = "elementic-icons", Ha = {
  Icon: Aa
}, Wt = {
  install: (e, t) => {
    p.isModuleInstalled(e, In) || (p.installComponents(e, Ha), p.markModuleAsInstalled(e, In));
  }
}, Cn = "elementic-buttons", za = {
  Button: Ma,
  IconButton: La,
  LinkButton: Na
}, Ra = {
  CoreButtonsInstall: _o,
  IconInstall: Wt
}, Ba = {
  install: (e, t) => {
    p.isModuleInstalled(e, Cn) || (p.installDependencies(e, Ra, t), p.installComponents(e, za), p.markModuleAsInstalled(e, Cn));
  }
}, Za = M({
  name: "h-checkbox",
  props: {
    ...Es,
    ...Po,
    ...Vs,
    ...Ns,
    ...Fs,
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
    }), r = _s().as("label", o).props(["modelValue", "value", "indeterminate", "disabled", "visible"]).events(["update:modelValue"]).build();
    return {
      Icons: x,
      CheckboxIcons: ct,
      asProps: o,
      core: r,
      hasFocus: s,
      ...n
    };
  }
}), Wa = ["checked", "disabled", "onChange"];
function qa(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-checkbox");
  return K((f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      y("span", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("input")]),
          checked: l.state,
          type: "checkbox",
          disabled: l.disabled,
          onChange: l.onChange,
          onFocus: t[0] || (t[0] = (c) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (c) => e.hasFocus = !1)
        }, null, 42, Wa),
        K(C(i, {
          class: d([e.css_ec("check-icon")]),
          icon: e.CheckboxIcons.checkStroke,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [J, !l.indeterminate]
        ]),
        K(C(i, {
          class: d([e.css_ec("indeterminate-icon")]),
          icon: e.Icons.minus,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [J, l.indeterminate]
        ])
      ], 2),
      e.$slots.default || e.label ? (f(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          ne(N(e.label), 1)
        ])
      ], 2)) : O("", !0)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const ja = /* @__PURE__ */ L(Za, [["render", qa]]), Ua = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  data: '<polyline points="4.2,12.8 9,17.6 20.3,6.3 "/>'
}, Tn = "elementic-checkboxes", Ya = {
  Checkbox: ja
}, Ga = {
  CoreCheckboxInstall: Ps
}, ct = {
  checkStroke: Ua
}, Ws = {
  install: (e, t) => {
    p.isModuleInstalled(e, Tn) || (p.installDependencies(e, Ga, t), p.installComponents(e, Ya), Object.keys(ct).forEach((n) => {
      const s = Ls.kebabize(n);
      be.register(s, ct[n]), ct[n] = s;
    }), p.markModuleAsInstalled(e, Tn));
  }
}, Ka = M({
  name: "h-collapse",
  props: {
    ...Ao,
    ...Ho
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = () => ({
      class: [n.css_root.value]
    });
    return {
      core: zo().as("div", s).props(["modelValue", "accordion"]).events(["update:modelValue"]).build()
    };
  }
});
function Ja(e, t, n, s, o, r) {
  const i = v("hr-collapse");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Qa = /* @__PURE__ */ L(Ka, [["render", Ja]]), Xa = M({
  name: "h-collapse-item",
  props: {
    ...Ro,
    header: {
      type: String
    }
  },
  setup(e, t) {
    const n = D(), s = (r) => ({
      class: [n.css_root.value, {
        "-expanded": r.expanded
      }]
    }), o = Bo().as("div", s).props(["id"]).build();
    return {
      Icons: x,
      core: o,
      ...n
    };
  }
}), xa = ["onClick", "onKeydown"];
function el(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-grow-transition"), l = v("hr-collapse-item");
  return f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: w((c) => [
      y("div", {
        tabindex: "0",
        class: d([e.css_ec("header")]),
        onClick: c.onClick,
        onKeydown: Ts(c.onClick, ["enter"])
      }, [
        T(e.$slots, "header", {}, () => [
          y("span", {
            class: d([e.css_ec("header-text")])
          }, N(e.header), 3)
        ]),
        y("div", {
          class: d([e.css_ec("expand-icon")])
        }, [
          C(pe, { name: "fade-medium" }, {
            default: w(() => [
              c.expanded ? (f(), I(i, {
                key: "contract",
                icon: e.Icons.minus,
                size: "16px"
              }, null, 8, ["icon"])) : (f(), I(i, {
                key: "expand",
                icon: e.Icons.plus,
                size: "16px"
              }, null, 8, ["icon"]))
            ]),
            _: 2
          }, 1024)
        ], 2)
      ], 42, xa),
      C(a, null, {
        default: w(() => [
          K(y("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            y("div", {
              class: d([e.css_ec("expanded-content-inner")])
            }, [
              T(e.$slots, "default")
            ], 2)
          ], 2), [
            [J, c.expanded]
          ])
        ]),
        _: 2
      }, 1024)
    ]),
    _: 3
  }, 16);
}
const tl = /* @__PURE__ */ L(Xa, [["render", el]]), nl = M({
  name: "h-inline-collapse",
  props: {
    ...Zo,
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
      core: Wo().as("div", s).props(["modelValue"]).build(),
      ...n
    };
  }
}), sl = ["onClick", "onKeydown"];
function ol(e, t, n, s, o, r) {
  const i = v("hr-inline-collapse");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: w((a) => [
      y("div", {
        tabindex: "0",
        class: d([e.css_ec("toggle-line"), `-align-${e.textAlign}`]),
        onClick: a.onClick,
        onKeydown: Ts(a.onClick, ["enter"])
      }, [
        y("div", {
          class: d([e.css_ec("left-filler")])
        }, null, 2),
        y("div", {
          class: d([e.css_ec("toggle-text")])
        }, N(a.expanded ? e.collapseText : e.expandText), 3),
        y("div", {
          class: d([e.css_ec("right-filler")])
        }, null, 2)
      ], 42, sl),
      (f(), I(Ms(e.animate ? "h-grow-transition" : "div"), null, {
        default: w(() => [
          K(y("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            y("div", {
              class: d([e.css_ec("expanded-content-inner")])
            }, [
              T(e.$slots, "default")
            ], 2)
          ], 2), [
            [J, a.expanded]
          ])
        ]),
        _: 2
      }, 1024))
    ]),
    _: 3
  }, 16);
}
const rl = /* @__PURE__ */ L(nl, [["render", ol]]), il = M({
  name: "h-grow-transition",
  setup(e, t) {
    return {
      beforeEnter: (i) => {
        const a = i.getBoundingClientRect();
        i.style.removeProperty("display"), i.style.removeProperty("height");
        const l = i.getBoundingClientRect();
        i.style.height = `${a.height}px`, setTimeout(() => {
          i.style.height = `${l.height}px`;
        }, 10);
      },
      afterEnter: (i) => {
        i.style.removeProperty("height");
      },
      beforeLeave: (i) => {
        const a = i.getBoundingClientRect();
        i.style.height = `${a.height}px`, setTimeout(() => {
          i.style.height = "0px";
        }, 10);
      },
      afterLeave: (i) => {
        i.style.removeProperty("height");
      }
    };
  }
});
function al(e, t, n, s, o, r) {
  return f(), I(pe, {
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
const ll = /* @__PURE__ */ L(il, [["render", al], ["__scopeId", "data-v-7765f9ec"]]), Mn = "elementic-transitions", cl = {
  Grow: ll
}, ul = {
  install: (e, t) => {
    p.isModuleInstalled(e, Mn) || (p.installComponents(e, cl), p.markModuleAsInstalled(e, Mn));
  }
}, On = "elementic-collapses", dl = {
  Collapse: Qa,
  CollapseItem: tl,
  InlineCollapse: rl
}, fl = {
  CoreCollapsesInstall: qo,
  TransitionsInstall: ul
}, ml = {
  install: (e, t) => {
    p.isModuleInstalled(e, On) || (p.installDependencies(e, fl, t), p.installComponents(e, dl), p.markModuleAsInstalled(e, On));
  }
};
class Le extends Error {
}
class hl extends Le {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class pl extends Le {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class yl extends Le {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class xe extends Le {
}
class qs extends Le {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class ie extends Le {
}
class Se extends Le {
  constructor() {
    super("Zone is an abstract class");
  }
}
const b = "numeric", ye = "short", oe = "long", mt = {
  year: b,
  month: b,
  day: b
}, qt = {
  year: b,
  month: ye,
  day: b
}, js = {
  year: b,
  month: ye,
  day: b,
  weekday: ye
}, jt = {
  year: b,
  month: oe,
  day: b
}, Ut = {
  year: b,
  month: oe,
  day: b,
  weekday: oe
}, Yt = {
  hour: b,
  minute: b
}, Gt = {
  hour: b,
  minute: b,
  second: b
}, Kt = {
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ye
}, Jt = {
  hour: b,
  minute: b,
  second: b,
  timeZoneName: oe
}, Qt = {
  hour: b,
  minute: b,
  hour12: !1
}, Xt = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1
}, xt = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1,
  timeZoneName: ye
}, en = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1,
  timeZoneName: oe
}, tn = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b
}, nn = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b,
  second: b
}, sn = {
  year: b,
  month: ye,
  day: b,
  hour: b,
  minute: b
}, on = {
  year: b,
  month: ye,
  day: b,
  hour: b,
  minute: b,
  second: b
}, Us = {
  year: b,
  month: ye,
  day: b,
  weekday: ye,
  hour: b,
  minute: b
}, rn = {
  year: b,
  month: oe,
  day: b,
  hour: b,
  minute: b,
  timeZoneName: ye
}, an = {
  year: b,
  month: oe,
  day: b,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ye
}, ln = {
  year: b,
  month: oe,
  day: b,
  weekday: oe,
  hour: b,
  minute: b,
  timeZoneName: oe
}, cn = {
  year: b,
  month: oe,
  day: b,
  weekday: oe,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: oe
};
function P(e) {
  return typeof e > "u";
}
function De(e) {
  return typeof e == "number";
}
function wt(e) {
  return typeof e == "number" && e % 1 === 0;
}
function gl(e) {
  return typeof e == "string";
}
function vl(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ve() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function nt() {
  return !P(Intl.DateTimeFormat.prototype.formatToParts);
}
function Ys() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function bl(e) {
  return Array.isArray(e) ? e : [e];
}
function Dn(e, t, n) {
  if (e.length !== 0)
    return e.reduce((s, o) => {
      const r = [t(o), o];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function Gs(e, t) {
  return t.reduce((n, s) => (n[s] = e[s], n), {});
}
function qe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function we(e, t, n) {
  return wt(e) && e >= t && e <= n;
}
function wl(e, t) {
  return e - t * Math.floor(e / t);
}
function Ze(e, t = 2) {
  const n = e < 0 ? "-" : "", s = n ? e * -1 : e;
  let o;
  return s.toString().length < t ? o = ("0".repeat(t) + s).slice(-t) : o = s.toString(), `${n}${o}`;
}
function ee(e) {
  if (!(P(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function un(e) {
  if (!(P(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function dn(e, t, n = !1) {
  const s = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * s) / s;
}
function st(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function tt(e) {
  return st(e) ? 366 : 365;
}
function ht(e, t) {
  const n = wl(t - 1, 12) + 1, s = e + (t - n) / 12;
  return n === 2 ? st(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function fn(e) {
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
function pt(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, n = e - 1, s = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return t === 4 || s === 3 ? 53 : 52;
}
function Vt(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function Ks(e, t, n, s = null) {
  const o = new Date(e), r = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (r.timeZone = s);
  const i = Object.assign({ timeZoneName: t }, r), a = ve();
  if (a && nt()) {
    const l = new Intl.DateTimeFormat(n, i).formatToParts(o).find((c) => c.type.toLowerCase() === "timezonename");
    return l ? l.value : null;
  } else if (a) {
    const l = new Intl.DateTimeFormat(n, r).format(o);
    return new Intl.DateTimeFormat(n, i).format(o).substring(l.length).replace(/^[, \u200e]+/, "");
  } else
    return null;
}
function $t(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(t, 10) || 0, o = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + o;
}
function Js(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new ie(`Invalid unit value ${e}`);
  return t;
}
function yt(e, t, n) {
  const s = {};
  for (const o in e)
    if (qe(e, o)) {
      if (n.indexOf(o) >= 0)
        continue;
      const r = e[o];
      if (r == null)
        continue;
      s[t(o)] = Js(r);
    }
  return s;
}
function gt(e, t) {
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
function St(e) {
  return Gs(e, ["hour", "minute", "second", "millisecond"]);
}
const Qs = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function q(e) {
  return JSON.stringify(e, Object.keys(e).sort());
}
const $l = [
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
], Xs = [
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
], Sl = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function xs(e) {
  switch (e) {
    case "narrow":
      return [...Sl];
    case "short":
      return [...Xs];
    case "long":
      return [...$l];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const eo = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], to = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], kl = ["M", "T", "W", "T", "F", "S", "S"];
function no(e) {
  switch (e) {
    case "narrow":
      return [...kl];
    case "short":
      return [...to];
    case "long":
      return [...eo];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const so = ["AM", "PM"], Il = ["Before Christ", "Anno Domini"], Cl = ["BC", "AD"], Tl = ["B", "A"];
function oo(e) {
  switch (e) {
    case "narrow":
      return [...Tl];
    case "short":
      return [...Cl];
    case "long":
      return [...Il];
    default:
      return null;
  }
}
function Ml(e) {
  return so[e.hour < 12 ? 0 : 1];
}
function Ol(e, t) {
  return no(t)[e.weekday - 1];
}
function Dl(e, t) {
  return xs(t)[e.month - 1];
}
function Ll(e, t) {
  return oo(t)[e.year < 0 ? 0 : 1];
}
function El(e, t, n = "always", s = !1) {
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
    const h = e === "days";
    switch (t) {
      case 1:
        return h ? "tomorrow" : `next ${o[e][0]}`;
      case -1:
        return h ? "yesterday" : `last ${o[e][0]}`;
      case 0:
        return h ? "today" : `this ${o[e][0]}`;
    }
  }
  const i = Object.is(t, -0) || t < 0, a = Math.abs(t), l = a === 1, c = o[e], u = s ? l ? c[1] : c[2] || c[1] : l ? o[e][0] : e;
  return i ? `${a} ${u} ago` : `in ${a} ${u}`;
}
function Vl(e) {
  const t = Gs(e, [
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
    case q(mt):
      return "M/d/yyyy";
    case q(qt):
      return "LLL d, yyyy";
    case q(js):
      return "EEE, LLL d, yyyy";
    case q(jt):
      return "LLLL d, yyyy";
    case q(Ut):
      return "EEEE, LLLL d, yyyy";
    case q(Yt):
      return "h:mm a";
    case q(Gt):
      return "h:mm:ss a";
    case q(Kt):
      return "h:mm a";
    case q(Jt):
      return "h:mm a";
    case q(Qt):
      return "HH:mm";
    case q(Xt):
      return "HH:mm:ss";
    case q(xt):
      return "HH:mm";
    case q(en):
      return "HH:mm";
    case q(tn):
      return "M/d/yyyy, h:mm a";
    case q(sn):
      return "LLL d, yyyy, h:mm a";
    case q(rn):
      return "LLLL d, yyyy, h:mm a";
    case q(ln):
      return s;
    case q(nn):
      return "M/d/yyyy, h:mm:ss a";
    case q(on):
      return "LLL d, yyyy, h:mm:ss a";
    case q(Us):
      return "EEE, d LLL yyyy, h:mm a";
    case q(an):
      return "LLLL d, yyyy, h:mm:ss a";
    case q(cn):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return s;
  }
}
function Ln(e, t) {
  let n = "";
  for (const s of e)
    s.literal ? n += s.val : n += t(s.val);
  return n;
}
const Nl = {
  D: mt,
  DD: qt,
  DDD: jt,
  DDDD: Ut,
  t: Yt,
  tt: Gt,
  ttt: Kt,
  tttt: Jt,
  T: Qt,
  TT: Xt,
  TTT: xt,
  TTTT: en,
  f: tn,
  ff: sn,
  fff: rn,
  ffff: ln,
  F: nn,
  FF: on,
  FFF: an,
  FFFF: cn
};
class te {
  static create(t, n = {}) {
    return new te(t, n);
  }
  static parseFormat(t) {
    let n = null, s = "", o = !1;
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const a = t.charAt(i);
      a === "'" ? (s.length > 0 && r.push({ literal: o, val: s }), n = null, s = "", o = !o) : o || a === n ? s += a : (s.length > 0 && r.push({ literal: !1, val: s }), s = a, n = a);
    }
    return s.length > 0 && r.push({ literal: o, val: s }), r;
  }
  static macroTokenToFormatOpts(t) {
    return Nl[t];
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
    const s = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && nt(), r = (g, $) => this.loc.extract(t, g, $), i = (g) => t.isOffsetFixed && t.offset === 0 && g.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, g.format) : "", a = () => s ? Ml(t) : r({ hour: "numeric", hour12: !0 }, "dayperiod"), l = (g, $) => s ? Dl(t, g) : r($ ? { month: g } : { month: g, day: "numeric" }, "month"), c = (g, $) => s ? Ol(t, g) : r(
      $ ? { weekday: g } : { weekday: g, month: "long", day: "numeric" },
      "weekday"
    ), u = (g) => {
      const $ = te.macroTokenToFormatOpts(g);
      return $ ? this.formatWithSystemDefault(t, $) : g;
    }, h = (g) => s ? Ll(t, g) : r({ era: g }, "era"), m = (g) => {
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
          return a();
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
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return o ? r({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return o ? r({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return o ? r({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return o ? r({ year: "numeric" }, "year") : this.num(t.year, 6);
        case "G":
          return h("short");
        case "GG":
          return h("long");
        case "GGGGG":
          return h("narrow");
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
    return Ln(te.parseFormat(n), m);
  }
  formatDurationFromString(t, n) {
    const s = (l) => {
      switch (l[0]) {
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
    }, o = (l) => (c) => {
      const u = s(c);
      return u ? this.num(l.get(u), c.length) : c;
    }, r = te.parseFormat(n), i = r.reduce(
      (l, { literal: c, val: u }) => c ? l : l.concat(u),
      []
    ), a = t.shiftTo(...i.map(s).filter((l) => l));
    return Ln(r, o(a));
  }
}
class me {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class ot {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Se();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Se();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get universal() {
    throw new Se();
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
    throw new Se();
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
    throw new Se();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    throw new Se();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(t) {
    throw new Se();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Se();
  }
}
let It = null;
class mn extends ot {
  /**
   * Get a singleton instance of the local zone
   * @return {LocalZone}
   */
  static get instance() {
    return It === null && (It = new mn()), It;
  }
  /** @override **/
  get type() {
    return "local";
  }
  /** @override **/
  get name() {
    return ve() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
  }
  /** @override **/
  get universal() {
    return !1;
  }
  /** @override **/
  offsetName(t, { format: n, locale: s }) {
    return Ks(t, n, s);
  }
  /** @override **/
  formatOffset(t, n) {
    return gt(this.offset(t), n);
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
const Fl = RegExp(`^${Qs.source}$`);
let ut = {};
function _l(e) {
  return ut[e] || (ut[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), ut[e];
}
const Pl = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Al(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, o, r, i, a, l, c] = s;
  return [i, o, r, a, l, c];
}
function Hl(e, t) {
  const n = e.formatToParts(t), s = [];
  for (let o = 0; o < n.length; o++) {
    const { type: r, value: i } = n[o], a = Pl[r];
    P(a) || (s[a] = parseInt(i, 10));
  }
  return s;
}
let it = {};
class ce extends ot {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    return it[t] || (it[t] = new ce(t)), it[t];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    it = {}, ut = {};
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
    return !!(t && t.match(Fl));
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
    super(), this.zoneName = t, this.valid = ce.isValidZone(t);
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
    return Ks(t, n, s, this.name);
  }
  /** @override **/
  formatOffset(t, n) {
    return gt(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    const n = new Date(t);
    if (isNaN(n))
      return NaN;
    const s = _l(this.name), [o, r, i, a, l, c] = s.formatToParts ? Hl(s, n) : Al(s, n), h = fn({
      year: o,
      month: r,
      day: i,
      hour: a === 24 ? 0 : a,
      minute: l,
      second: c,
      millisecond: 0
    });
    let m = +n;
    const g = m % 1e3;
    return m -= g >= 0 ? g : 1e3 + g, (h - m) / (60 * 1e3);
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
let Ct = null;
class X extends ot {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ct === null && (Ct = new X(0)), Ct;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(t) {
    return t === 0 ? X.utcInstance : new X(t);
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
        return new X($t(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${gt(this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(t, n) {
    return gt(this.fixed, n);
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
class En extends ot {
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
function Me(e, t) {
  let n;
  if (P(e) || e === null)
    return t;
  if (e instanceof ot)
    return e;
  if (gl(e)) {
    const s = e.toLowerCase();
    return s === "local" ? t : s === "utc" || s === "gmt" ? X.utcInstance : (n = ce.parseGMTOffset(e)) != null ? X.instance(n) : ce.isValidSpecifier(s) ? ce.create(e) : X.parseSpecifier(s) || new En(e);
  } else
    return De(e) ? X.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new En(e);
}
let Vn = () => Date.now(), Tt = null, Nn = null, Fn = null, _n = null, Pn = !1;
class Y {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Vn;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(t) {
    Vn = t;
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
    t ? Tt = Me(t) : Tt = null;
  }
  /**
   * Get the default time zone object to create DateTimes in. Does not affect existing instances.
   * @type {Zone}
   */
  static get defaultZone() {
    return Tt || mn.instance;
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Nn;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(t) {
    Nn = t;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Fn;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(t) {
    Fn = t;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return _n;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(t) {
    _n = t;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Pn;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    Pn = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    j.resetCache(), ce.resetCache();
  }
}
let Nt = {};
function Ft(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Nt[n];
  return s || (s = new Intl.DateTimeFormat(e, t), Nt[n] = s), s;
}
let _t = {};
function zl(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = _t[n];
  return s || (s = new Intl.NumberFormat(e, t), _t[n] = s), s;
}
let Pt = {};
function Rl(e, t = {}) {
  const { base: n, ...s } = t, o = JSON.stringify([e, s]);
  let r = Pt[o];
  return r || (r = new Intl.RelativeTimeFormat(e, t), Pt[o] = r), r;
}
let Te = null;
function Bl() {
  if (Te)
    return Te;
  if (ve()) {
    const e = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Te = !e || e === "und" ? "en-US" : e, Te;
  } else
    return Te = "en-US", Te;
}
function Zl(e) {
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let n;
    const s = e.substring(0, t);
    try {
      n = Ft(e).resolvedOptions();
    } catch {
      n = Ft(s).resolvedOptions();
    }
    const { numberingSystem: o, calendar: r } = n;
    return [s, o, r];
  }
}
function Wl(e, t, n) {
  return ve() ? ((n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e) : [];
}
function ql(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const s = E.utc(2016, n, 1);
    t.push(e(s));
  }
  return t;
}
function jl(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const s = E.utc(2016, 11, 13 + n);
    t.push(e(s));
  }
  return t;
}
function at(e, t, n, s, o) {
  const r = e.listingMode(n);
  return r === "error" ? null : r === "en" ? s(t) : o(t);
}
function Ul(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || ve() && new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class Yl {
  constructor(t, n, s) {
    if (this.padTo = s.padTo || 0, this.floor = s.floor || !1, !n && ve()) {
      const o = { useGrouping: !1 };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = zl(t, o);
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : dn(t, 3);
      return Ze(n, this.padTo);
    }
  }
}
class Gl {
  constructor(t, n, s) {
    this.opts = s, this.hasIntl = ve();
    let o;
    if (t.zone.universal && this.hasIntl) {
      const r = -1 * (t.offset / 60), i = r >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`, a = ce.isValidZone(i);
      t.offset !== 0 && a ? (o = i, this.dt = t) : (o = "UTC", s.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : E.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "local" ? this.dt = t : (this.dt = t, o = t.zone.name);
    if (this.hasIntl) {
      const r = Object.assign({}, this.opts);
      o && (r.timeZone = o), this.dtf = Ft(n, r);
    }
  }
  format() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    {
      const t = Vl(this.opts), n = j.create("en-US");
      return te.create(n).formatDateTimeFromString(this.dt, t);
    }
  }
  formatToParts() {
    return this.hasIntl && nt() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }
  resolvedOptions() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }
}
class Kl {
  constructor(t, n, s) {
    this.opts = Object.assign({ style: "long" }, s), !n && Ys() && (this.rtf = Rl(t, s));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : El(n, t, this.opts.numeric, this.opts.style !== "long");
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
    const r = t || Y.defaultLocale, i = r || (o ? "en-US" : Bl()), a = n || Y.defaultNumberingSystem, l = s || Y.defaultOutputCalendar;
    return new j(i, a, l, r);
  }
  static resetCache() {
    Te = null, Nt = {}, _t = {}, Pt = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    return j.create(t, n, s);
  }
  constructor(t, n, s, o) {
    const [r, i, a] = Zl(t);
    this.locale = r, this.numberingSystem = n || i || null, this.outputCalendar = s || a || null, this.intl = Wl(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Ul(this)), this.fastNumbersCached;
  }
  listingMode(t = !0) {
    const n = ve(), s = n && nt(), o = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
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
    return at(this, t, s, xs, () => {
      const o = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      return this.monthsCache[r][t] || (this.monthsCache[r][t] = ql((i) => this.extract(i, o, "month"))), this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1, s = !0) {
    return at(this, t, s, no, () => {
      const o = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, r = n ? "format" : "standalone";
      return this.weekdaysCache[r][t] || (this.weekdaysCache[r][t] = jl(
        (i) => this.extract(i, o, "weekday")
      )), this.weekdaysCache[r][t];
    });
  }
  meridiems(t = !0) {
    return at(
      this,
      void 0,
      t,
      () => so,
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
    return at(this, t, n, oo, () => {
      const s = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [E.utc(-40, 1, 1), E.utc(2017, 1, 1)].map(
        (o) => this.extract(o, s, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, s) {
    const o = this.dtFormatter(t, n), r = o.formatToParts(), i = r.find((a) => a.type.toLowerCase() === s);
    return i ? i.value : null;
  }
  numberFormatter(t = {}) {
    return new Yl(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new Gl(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new Kl(this.intl, this.isEnglish(), t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || ve() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
}
function Ue(...e) {
  const t = e.reduce((n, s) => n + s.source, "");
  return RegExp(`^${t}$`);
}
function Ee(...e) {
  return (t) => e.reduce(
    ([n, s, o], r) => {
      const [i, a, l] = r(t, o);
      return [Object.assign(n, i), s || a, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ye(e, ...t) {
  if (e == null)
    return [null, null];
  for (const [n, s] of t) {
    const o = n.exec(e);
    if (o)
      return s(o);
  }
  return [null, null];
}
function ro(...e) {
  return (t, n) => {
    const s = {};
    let o;
    for (o = 0; o < e.length; o++)
      s[e[o]] = ee(t[n + o]);
    return [s, null, n + o];
  };
}
const io = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, hn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, ao = RegExp(`${hn.source}${io.source}?`), pn = RegExp(`(?:T${ao.source})?`), Jl = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ql = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Xl = /(\d{4})-?(\d{3})/, xl = ro("weekYear", "weekNumber", "weekDay"), ec = ro("year", "ordinal"), tc = /(\d{4})-(\d\d)-(\d\d)/, lo = RegExp(
  `${hn.source} ?(?:${io.source}|(${Qs.source}))?`
), nc = RegExp(`(?: ${lo.source})?`);
function We(e, t, n) {
  const s = e[t];
  return P(s) ? n : ee(s);
}
function co(e, t) {
  return [{
    year: We(e, t),
    month: We(e, t + 1, 1),
    day: We(e, t + 2, 1)
  }, null, t + 3];
}
function Ve(e, t) {
  return [{
    hours: We(e, t, 0),
    minutes: We(e, t + 1, 0),
    seconds: We(e, t + 2, 0),
    milliseconds: un(e[t + 3])
  }, null, t + 4];
}
function Ge(e, t) {
  const n = !e[t] && !e[t + 1], s = $t(e[t + 1], e[t + 2]), o = n ? null : X.instance(s);
  return [{}, o, t + 3];
}
function uo(e, t) {
  const n = e[t] ? ce.create(e[t]) : null;
  return [{}, n, t + 1];
}
const sc = RegExp(`^T?${hn.source}$`), oc = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function rc(e) {
  const [
    t,
    n,
    s,
    o,
    r,
    i,
    a,
    l,
    c
  ] = e, u = t[0] === "-", h = l && l[0] === "-", m = (g, $ = !1) => g !== void 0 && ($ || g && u) ? -g : g;
  return [
    {
      years: m(ee(n)),
      months: m(ee(s)),
      weeks: m(ee(o)),
      days: m(ee(r)),
      hours: m(ee(i)),
      minutes: m(ee(a)),
      seconds: m(ee(l), l === "-0"),
      milliseconds: m(un(c), h)
    }
  ];
}
const ic = {
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
function yn(e, t, n, s, o, r, i) {
  const a = {
    year: t.length === 2 ? Vt(ee(t)) : ee(t),
    month: Xs.indexOf(n) + 1,
    day: ee(s),
    hour: ee(o),
    minute: ee(r)
  };
  return i && (a.second = ee(i)), e && (a.weekday = e.length > 3 ? eo.indexOf(e) + 1 : to.indexOf(e) + 1), a;
}
const ac = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function lc(e) {
  const [
    ,
    t,
    n,
    s,
    o,
    r,
    i,
    a,
    l,
    c,
    u,
    h
  ] = e, m = yn(t, o, s, n, r, i, a);
  let g;
  return l ? g = ic[l] : c ? g = 0 : g = $t(u, h), [m, new X(g)];
}
function cc(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const uc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, dc = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, fc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function An(e) {
  const [, t, n, s, o, r, i, a] = e;
  return [yn(t, o, s, n, r, i, a), X.utcInstance];
}
function mc(e) {
  const [, t, n, s, o, r, i, a] = e;
  return [yn(t, a, n, s, o, r, i), X.utcInstance];
}
const hc = Ue(Jl, pn), pc = Ue(Ql, pn), yc = Ue(Xl, pn), gc = Ue(ao), vc = Ee(
  co,
  Ve,
  Ge
), bc = Ee(
  xl,
  Ve,
  Ge
), wc = Ee(
  ec,
  Ve,
  Ge
), $c = Ee(Ve, Ge);
function Sc(e) {
  return Ye(
    e,
    [hc, vc],
    [pc, bc],
    [yc, wc],
    [gc, $c]
  );
}
function kc(e) {
  return Ye(cc(e), [ac, lc]);
}
function Ic(e) {
  return Ye(
    e,
    [uc, An],
    [dc, An],
    [fc, mc]
  );
}
function Cc(e) {
  return Ye(e, [oc, rc]);
}
const Tc = Ee(Ve);
function Mc(e) {
  return Ye(e, [sc, Tc]);
}
const Oc = Ue(tc, nc), Dc = Ue(lo), Lc = Ee(
  co,
  Ve,
  Ge,
  uo
), Ec = Ee(
  Ve,
  Ge,
  uo
);
function Vc(e) {
  return Ye(
    e,
    [Oc, Lc],
    [Dc, Ec]
  );
}
const Nc = "Invalid Duration", fo = {
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
}, Fc = Object.assign(
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
  fo
), re = 146097 / 400, Pe = 146097 / 4800, _c = Object.assign(
  {
    years: {
      quarters: 4,
      months: 12,
      weeks: re / 7,
      days: re,
      hours: re * 24,
      minutes: re * 24 * 60,
      seconds: re * 24 * 60 * 60,
      milliseconds: re * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: re / 28,
      days: re / 4,
      hours: re * 24 / 4,
      minutes: re * 24 * 60 / 4,
      seconds: re * 24 * 60 * 60 / 4,
      milliseconds: re * 24 * 60 * 60 * 1e3 / 4
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
  fo
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
], Pc = He.slice(0).reverse();
function Ce(e, t, n = !1) {
  const s = {
    values: n ? t.values : Object.assign({}, e.values, t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new Z(s);
}
function Ac(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mo(e, t, n, s, o) {
  const r = e[o][n], i = t[n] / r, a = Math.sign(i) === Math.sign(s[o]), l = !a && s[o] !== 0 && Math.abs(i) <= 1 ? Ac(i) : Math.trunc(i);
  s[o] += l, t[n] -= l * r;
}
function Hc(e, t) {
  Pc.reduce((n, s) => P(t[s]) ? n : (n && mo(e, t, n, t, s), s), null);
}
class Z {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || j.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? _c : Fc, this.isLuxonDuration = !0;
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
    return Z.fromObject(Object.assign({ milliseconds: t }, n));
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
      throw new ie(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new Z({
      values: yt(t, Z.normalizeUnit, [
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
    const [s] = Cc(t);
    if (s) {
      const o = Object.assign(s, n);
      return Z.fromObject(o);
    } else
      return Z.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
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
    const [s] = Mc(t);
    if (s) {
      const o = Object.assign(s, n);
      return Z.fromObject(o);
    } else
      return Z.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new ie("need to specify a reason the Duration is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new yl(s);
    return new Z({ invalid: s });
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
      throw new qs(t);
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
    return this.isValid ? te.create(this.loc, s).formatDurationFromString(this, t) : Nc;
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
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += dn(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
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
    const n = Oe(t), s = {};
    for (const o of He)
      (qe(n.values, o) || qe(this.values, o)) && (s[o] = n.get(o) + this.get(o));
    return Ce(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(t) {
    if (!this.isValid)
      return this;
    const n = Oe(t);
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
      n[s] = Js(t(this.values[s], s));
    return Ce(this, { values: n }, !0);
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
    return this[Z.normalizeUnit(t)];
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
    const n = Object.assign(this.values, yt(t, Z.normalizeUnit, []));
    return Ce(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n }), r = { loc: o };
    return s && (r.conversionAccuracy = s), Ce(this, r);
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
    return Hc(this.matrix, t), Ce(this, { values: t }, !0);
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
    t = t.map((i) => Z.normalizeUnit(i));
    const n = {}, s = {}, o = this.toObject();
    let r;
    for (const i of He)
      if (t.indexOf(i) >= 0) {
        r = i;
        let a = 0;
        for (const c in s)
          a += this.matrix[c][i] * s[c], s[c] = 0;
        De(o[i]) && (a += o[i]);
        const l = Math.trunc(a);
        n[i] = l, s[i] = a - l;
        for (const c in o)
          He.indexOf(c) > He.indexOf(i) && mo(this.matrix, o, c, n, i);
      } else
        De(o[i]) && (s[i] = o[i]);
    for (const i in s)
      s[i] !== 0 && (n[r] += i === r ? s[i] : s[i] / this.matrix[r][i]);
    return Ce(this, { values: n }, !0).normalize();
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
    return Ce(this, { values: t }, !0);
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
function Oe(e) {
  if (De(e))
    return Z.fromMillis(e);
  if (Z.isDuration(e))
    return e;
  if (typeof e == "object")
    return Z.fromObject(e);
  throw new ie(
    `Unknown duration argument ${e} of type ${typeof e}`
  );
}
const Ke = "Invalid Interval";
function zc(e, t) {
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
      throw new ie("need to specify a reason the Interval is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new pl(s);
    return new U({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const s = Xe(t), o = Xe(n), r = zc(s, o);
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
    const s = Oe(n), o = Xe(t);
    return U.fromDateTimes(o, o.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const s = Oe(n), o = Xe(t);
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
      let a, l;
      try {
        a = E.fromISO(o, n), l = a.isValid;
      } catch {
        l = !1;
      }
      if (i && l)
        return U.fromDateTimes(r, a);
      if (i) {
        const c = Z.fromISO(o, n);
        if (c.isValid)
          return U.after(r, c);
      } else if (l) {
        const c = Z.fromISO(s, n);
        if (c.isValid)
          return U.before(a, c);
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
    const n = t.map(Xe).filter((i) => this.contains(i)).sort(), s = [];
    let { s: o } = this, r = 0;
    for (; o < this.e; ) {
      const i = n[r] || this.e, a = +i > +this.e ? this.e : i;
      s.push(U.fromDateTimes(o, a)), o = a, r += 1;
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
    const n = Oe(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, o = 1, r;
    const i = [];
    for (; s < this.e; ) {
      const a = this.start.plus(n.mapUnits((l) => l * o));
      r = +a > +this.e ? this.e : a, i.push(U.fromDateTimes(s, r)), s = r, o += 1;
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
    const o = [], r = t.map((l) => [{ time: l.s, type: "s" }, { time: l.e, type: "e" }]), i = Array.prototype.concat(...r), a = i.sort((l, c) => l.time - c.time);
    for (const l of a)
      s += l.type === "s" ? 1 : -1, s === 1 ? n = l.time : (n && +n != +l.time && o.push(U.fromDateTimes(n, l.time)), n = null);
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
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ke;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Ke;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ke;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Ke;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Ke;
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
    return this.isValid ? this.e.diff(this.s, t, n) : Z.invalid(this.invalidReason);
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
class et {
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
    return ce.isValidSpecifier(t) && ce.isValidZone(t);
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
    return Me(t, Y.defaultZone);
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
    if (ve()) {
      t = !0, n = nt(), o = Ys();
      try {
        s = new Intl.DateTimeFormat("en", { timeZone: "America/New_York" }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        s = !1;
      }
    }
    return { intl: t, intlTokens: n, zones: s, relative: o };
  }
}
function Hn(e, t) {
  const n = (o) => o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(t) - n(e);
  return Math.floor(Z.fromMillis(s).as("days"));
}
function Rc(e, t, n) {
  const s = [
    ["years", (a, l) => l.year - a.year],
    ["quarters", (a, l) => l.quarter - a.quarter],
    ["months", (a, l) => l.month - a.month + (l.year - a.year) * 12],
    [
      "weeks",
      (a, l) => {
        const c = Hn(a, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Hn]
  ], o = {};
  let r, i;
  for (const [a, l] of s)
    if (n.indexOf(a) >= 0) {
      r = a;
      let c = l(e, t);
      i = e.plus({ [a]: c }), i > t ? (e = e.plus({ [a]: c - 1 }), c -= 1) : e = i, o[a] = c;
    }
  return [e, o, i, r];
}
function Bc(e, t, n, s) {
  let [o, r, i, a] = Rc(e, t, n);
  const l = t - o, c = n.filter(
    (h) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(h) >= 0
  );
  c.length === 0 && (i < t && (i = o.plus({ [a]: 1 })), i !== o && (r[a] = (r[a] || 0) + l / (i - o)));
  const u = Z.fromObject(Object.assign(r, s));
  return c.length > 0 ? Z.fromMillis(l, s).shiftTo(...c).plus(u) : u;
}
const gn = {
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
}, zn = {
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
}, Zc = gn.hanidec.replace(/[\[|\]]/g, "").split("");
function Wc(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const s = e.charCodeAt(n);
      if (e[n].search(gn.hanidec) !== -1)
        t += Zc.indexOf(e[n]);
      else
        for (const o in zn) {
          const [r, i] = zn[o];
          s >= r && s <= i && (t += s - r);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function de({ numberingSystem: e }, t = "") {
  return new RegExp(`${gn[e || "latn"]}${t}`);
}
const qc = "missing Intl.DateTimeFormat.formatToParts support";
function H(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(Wc(n)) };
}
const jc = String.fromCharCode(160), ho = `( |${jc})`, po = new RegExp(ho, "g");
function Uc(e) {
  return e.replace(/\./g, "\\.?").replace(po, ho);
}
function Rn(e) {
  return e.replace(/\./g, "").replace(po, " ").toLowerCase();
}
function fe(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(Uc).join("|")),
    deser: ([n]) => e.findIndex((s) => Rn(n) === Rn(s)) + t
  };
}
function Bn(e, t) {
  return { regex: e, deser: ([, n, s]) => $t(n, s), groups: t };
}
function Zn(e) {
  return { regex: e, deser: ([t]) => t };
}
function Yc(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Gc(e, t) {
  const n = de(t), s = de(t, "{2}"), o = de(t, "{3}"), r = de(t, "{4}"), i = de(t, "{6}"), a = de(t, "{1,2}"), l = de(t, "{1,3}"), c = de(t, "{1,6}"), u = de(t, "{1,9}"), h = de(t, "{2,4}"), m = de(t, "{4,6}"), g = (R) => ({ regex: RegExp(Yc(R.val)), deser: ([Q]) => Q, literal: !0 }), z = ((R) => {
    if (e.literal)
      return g(R);
    switch (R.val) {
      case "G":
        return fe(t.eras("short", !1), 0);
      case "GG":
        return fe(t.eras("long", !1), 0);
      case "y":
        return H(c);
      case "yy":
        return H(h, Vt);
      case "yyyy":
        return H(r);
      case "yyyyy":
        return H(m);
      case "yyyyyy":
        return H(i);
      case "M":
        return H(a);
      case "MM":
        return H(s);
      case "MMM":
        return fe(t.months("short", !0, !1), 1);
      case "MMMM":
        return fe(t.months("long", !0, !1), 1);
      case "L":
        return H(a);
      case "LL":
        return H(s);
      case "LLL":
        return fe(t.months("short", !1, !1), 1);
      case "LLLL":
        return fe(t.months("long", !1, !1), 1);
      case "d":
        return H(a);
      case "dd":
        return H(s);
      case "o":
        return H(l);
      case "ooo":
        return H(o);
      case "HH":
        return H(s);
      case "H":
        return H(a);
      case "hh":
        return H(s);
      case "h":
        return H(a);
      case "mm":
        return H(s);
      case "m":
        return H(a);
      case "q":
        return H(a);
      case "qq":
        return H(s);
      case "s":
        return H(a);
      case "ss":
        return H(s);
      case "S":
        return H(l);
      case "SSS":
        return H(o);
      case "u":
        return Zn(u);
      case "a":
        return fe(t.meridiems(), 0);
      case "kkkk":
        return H(r);
      case "kk":
        return H(h, Vt);
      case "W":
        return H(a);
      case "WW":
        return H(s);
      case "E":
      case "c":
        return H(n);
      case "EEE":
        return fe(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return fe(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return fe(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return fe(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Bn(new RegExp(`([+-]${a.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Bn(new RegExp(`([+-]${a.source})(${s.source})?`), 2);
      case "z":
        return Zn(/[a-z_+-/]{1,256}?/i);
      default:
        return g(R);
    }
  })(e) || {
    invalidReason: qc
  };
  return z.token = e, z;
}
const Kc = {
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
function Jc(e, t, n) {
  const { type: s, value: o } = e;
  if (s === "literal")
    return {
      literal: !0,
      val: o
    };
  const r = n[s];
  let i = Kc[s];
  if (typeof i == "object" && (i = i[r]), i)
    return {
      literal: !1,
      val: i
    };
}
function Qc(e) {
  return [`^${e.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, e];
}
function Xc(e, t, n) {
  const s = e.match(t);
  if (s) {
    const o = {};
    let r = 1;
    for (const i in n)
      if (qe(n, i)) {
        const a = n[i], l = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (o[a.token.val[0]] = a.deser(s.slice(r, r + l))), r += l;
      }
    return [s, o];
  } else
    return [s, {}];
}
function xc(e) {
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
  return P(e.Z) ? P(e.z) ? n = null : n = ce.create(e.z) : n = new X(e.Z), P(e.q) || (e.M = (e.q - 1) * 3 + 1), P(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), P(e.u) || (e.S = un(e.u)), [Object.keys(e).reduce((o, r) => {
    const i = t(r);
    return i && (o[i] = e[r]), o;
  }, {}), n];
}
let Mt = null;
function eu() {
  return Mt || (Mt = E.fromMillis(1555555555555)), Mt;
}
function tu(e, t) {
  if (e.literal)
    return e;
  const n = te.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const r = te.create(t, n).formatDateTimeParts(eu()).map((i) => Jc(i, t, n));
  return r.includes(void 0) ? e : r;
}
function nu(e, t) {
  return Array.prototype.concat(...e.map((n) => tu(n, t)));
}
function yo(e, t, n) {
  const s = nu(te.parseFormat(n), e), o = s.map((i) => Gc(i, e)), r = o.find((i) => i.invalidReason);
  if (r)
    return { input: t, tokens: s, invalidReason: r.invalidReason };
  {
    const [i, a] = Qc(o), l = RegExp(i, "i"), [c, u] = Xc(t, l, a), [h, m] = u ? xc(u) : [null, null];
    if (qe(u, "a") && qe(u, "H"))
      throw new xe(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: s, regex: l, rawMatches: c, matches: u, result: h, zone: m };
  }
}
function su(e, t, n) {
  const { result: s, zone: o, invalidReason: r } = yo(e, t, n);
  return [s, o, r];
}
const go = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], vo = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ae(e, t) {
  return new me(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function bo(e, t, n) {
  const s = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
  return s === 0 ? 7 : s;
}
function wo(e, t, n) {
  return n + (st(e) ? vo : go)[t - 1];
}
function $o(e, t) {
  const n = st(e) ? vo : go, s = n.findIndex((r) => r < t), o = t - n[s];
  return { month: s + 1, day: o };
}
function At(e) {
  const { year: t, month: n, day: s } = e, o = wo(t, n, s), r = bo(t, n, s);
  let i = Math.floor((o - r + 10) / 7), a;
  return i < 1 ? (a = t - 1, i = pt(a)) : i > pt(t) ? (a = t + 1, i = 1) : a = t, Object.assign({ weekYear: a, weekNumber: i, weekday: r }, St(e));
}
function Wn(e) {
  const { weekYear: t, weekNumber: n, weekday: s } = e, o = bo(t, 1, 4), r = tt(t);
  let i = n * 7 + s - o - 3, a;
  i < 1 ? (a = t - 1, i += tt(a)) : i > r ? (a = t + 1, i -= tt(t)) : a = t;
  const { month: l, day: c } = $o(a, i);
  return Object.assign({ year: a, month: l, day: c }, St(e));
}
function Ot(e) {
  const { year: t, month: n, day: s } = e, o = wo(t, n, s);
  return Object.assign({ year: t, ordinal: o }, St(e));
}
function qn(e) {
  const { year: t, ordinal: n } = e, { month: s, day: o } = $o(t, n);
  return Object.assign({ year: t, month: s, day: o }, St(e));
}
function ou(e) {
  const t = wt(e.weekYear), n = we(e.weekNumber, 1, pt(e.weekYear)), s = we(e.weekday, 1, 7);
  return t ? n ? s ? !1 : ae("weekday", e.weekday) : ae("week", e.week) : ae("weekYear", e.weekYear);
}
function ru(e) {
  const t = wt(e.year), n = we(e.ordinal, 1, tt(e.year));
  return t ? n ? !1 : ae("ordinal", e.ordinal) : ae("year", e.year);
}
function So(e) {
  const t = wt(e.year), n = we(e.month, 1, 12), s = we(e.day, 1, ht(e.year, e.month));
  return t ? n ? s ? !1 : ae("day", e.day) : ae("month", e.month) : ae("year", e.year);
}
function ko(e) {
  const { hour: t, minute: n, second: s, millisecond: o } = e, r = we(t, 0, 23) || t === 24 && n === 0 && s === 0 && o === 0, i = we(n, 0, 59), a = we(s, 0, 59), l = we(o, 0, 999);
  return r ? i ? a ? l ? !1 : ae("millisecond", o) : ae("second", s) : ae("minute", n) : ae("hour", t);
}
const Dt = "Invalid DateTime", jn = 864e13;
function lt(e) {
  return new me("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Lt(e) {
  return e.weekData === null && (e.weekData = At(e.c)), e.weekData;
}
function Je(e, t) {
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
function Io(e, t, n) {
  let s = e - t * 60 * 1e3;
  const o = n.offset(s);
  if (t === o)
    return [s, t];
  s -= (o - t) * 60 * 1e3;
  const r = n.offset(s);
  return o === r ? [s, o] : [e - Math.min(o, r) * 60 * 1e3, Math.max(o, r)];
}
function Un(e, t) {
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
function dt(e, t, n) {
  return Io(fn(e), t, n);
}
function Yn(e, t) {
  const n = e.o, s = e.c.year + Math.trunc(t.years), o = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, r = Object.assign({}, e.c, {
    year: s,
    month: o,
    day: Math.min(e.c.day, ht(s, o)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }), i = Z.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), a = fn(r);
  let [l, c] = Io(a, n, e.zone);
  return i !== 0 && (l += i, c = e.zone.offset(l)), { ts: l, o: c };
}
function Qe(e, t, n, s, o) {
  const { setZone: r, zone: i } = n;
  if (e && Object.keys(e).length !== 0) {
    const a = t || i, l = E.fromObject(
      Object.assign(e, n, {
        zone: a,
        // setZone is a valid option in the calling methods, but not in fromObject
        setZone: void 0
      })
    );
    return r ? l : l.setZone(i);
  } else
    return E.invalid(
      new me("unparsable", `the input "${o}" can't be parsed as ${s}`)
    );
}
function ze(e, t, n = !0) {
  return e.isValid ? te.create(j.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function Gn(e, {
  suppressSeconds: t = !1,
  suppressMilliseconds: n = !1,
  includeOffset: s,
  includePrefix: o = !1,
  includeZone: r = !1,
  spaceZone: i = !1,
  format: a = "extended"
}) {
  let l = a === "basic" ? "HHmm" : "HH:mm";
  (!t || e.second !== 0 || e.millisecond !== 0) && (l += a === "basic" ? "ss" : ":ss", (!n || e.millisecond !== 0) && (l += ".SSS")), (r || s) && i && (l += " "), r ? l += "z" : s && (l += a === "basic" ? "ZZZ" : "ZZ");
  let c = ze(e, l);
  return o && (c = "T" + c), c;
}
const Co = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, iu = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, au = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, To = ["year", "month", "day", "hour", "minute", "second", "millisecond"], lu = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], cu = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Kn(e) {
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
    throw new qs(e);
  return t;
}
function Jn(e, t) {
  for (const a of To)
    P(e[a]) && (e[a] = Co[a]);
  const n = So(e) || ko(e);
  if (n)
    return E.invalid(n);
  const s = Y.now(), o = t.offset(s), [r, i] = dt(e, o, t);
  return new E({
    ts: r,
    zone: t,
    o: i
  });
}
function Qn(e, t, n) {
  const s = P(n.round) ? !0 : n.round, o = (i, a) => (i = dn(i, s || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(i, a)), r = (i) => n.calendary ? t.hasSame(e, i) ? 0 : t.startOf(i).diff(e.startOf(i), i).get(i) : t.diff(e, i).get(i);
  if (n.unit)
    return o(r(n.unit), n.unit);
  for (const i of n.units) {
    const a = r(i);
    if (Math.abs(a) >= 1)
      return o(a, i);
  }
  return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
class E {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || Y.defaultZone;
    let s = t.invalid || (Number.isNaN(t.ts) ? new me("invalid input") : null) || (n.isValid ? null : lt(n));
    this.ts = P(t.ts) ? Y.now() : t.ts;
    let o = null, r = null;
    if (!s)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [o, r] = [t.old.c, t.old.o];
      else {
        const a = n.offset(this.ts);
        o = Un(this.ts, a), s = Number.isNaN(o.year) ? new me("invalid input") : null, o = s ? null : o, r = s ? null : a;
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
  static local(t, n, s, o, r, i, a) {
    return P(t) ? E.now() : Jn(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: r,
        second: i,
        millisecond: a
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
  static utc(t, n, s, o, r, i, a) {
    return P(t) ? new E({
      ts: Y.now(),
      zone: X.utcInstance
    }) : Jn(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: r,
        second: i,
        millisecond: a
      },
      X.utcInstance
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
    const s = vl(t) ? t.valueOf() : NaN;
    if (Number.isNaN(s))
      return E.invalid("invalid input");
    const o = Me(n.zone, Y.defaultZone);
    return o.isValid ? new E({
      ts: s,
      zone: o,
      loc: j.fromObject(n)
    }) : E.invalid(lt(o));
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
    if (De(t))
      return t < -jn || t > jn ? E.invalid("Timestamp out of range") : new E({
        ts: t,
        zone: Me(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ie(
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
    if (De(t))
      return new E({
        ts: t * 1e3,
        zone: Me(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new ie("fromSeconds requires a numerical input");
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
    const n = Me(t.zone, Y.defaultZone);
    if (!n.isValid)
      return E.invalid(lt(n));
    const s = Y.now(), o = n.offset(s), r = yt(t, Kn, [
      "zone",
      "locale",
      "outputCalendar",
      "numberingSystem"
    ]), i = !P(r.ordinal), a = !P(r.year), l = !P(r.month) || !P(r.day), c = a || l, u = r.weekYear || r.weekNumber, h = j.fromObject(t);
    if ((c || i) && u)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && i)
      throw new xe("Can't mix ordinal dates with month/day");
    const m = u || r.weekday && !c;
    let g, $, z = Un(s, o);
    m ? (g = lu, $ = iu, z = At(z)) : i ? (g = cu, $ = au, z = Ot(z)) : (g = To, $ = Co);
    let R = !1;
    for (const Ie of g) {
      const _ = r[Ie];
      P(_) ? R ? r[Ie] = $[Ie] : r[Ie] = z[Ie] : R = !0;
    }
    const Q = m ? ou(r) : i ? ru(r) : So(r), G = Q || ko(r);
    if (G)
      return E.invalid(G);
    const B = m ? Wn(r) : i ? qn(r) : r, [ge, Ne] = dt(B, o, n), ke = new E({
      ts: ge,
      zone: n,
      o: Ne,
      loc: h
    });
    return r.weekday && c && t.weekday !== ke.weekday ? E.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${ke.toISO()}`
    ) : ke;
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
    const [s, o] = Sc(t);
    return Qe(s, o, n, "ISO 8601", t);
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
    const [s, o] = kc(t);
    return Qe(s, o, n, "RFC 2822", t);
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
    const [s, o] = Ic(t);
    return Qe(s, o, n, "HTTP", n);
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
    if (P(t) || P(n))
      throw new ie("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: r = null } = s, i = j.fromOpts({
      locale: o,
      numberingSystem: r,
      defaultToEN: !0
    }), [a, l, c] = su(i, t, n);
    return c ? E.invalid(c) : Qe(a, l, s, `format ${n}`, t);
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
    const [s, o] = Vc(t);
    return Qe(s, o, n, "SQL", t);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new ie("need to specify a reason the DateTime is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new hl(s);
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
    return this.isValid ? Lt(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Lt(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Lt(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ot(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? et.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? et.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? et.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? et.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    return st(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return ht(this.year, this.month);
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
    return this.isValid ? pt(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOpts(t = {}) {
    const { locale: n, numberingSystem: s, calendar: o } = te.create(
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
    return this.setZone(X.instance(t), n);
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
    if (t = Me(t, Y.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let o = this.ts;
      if (n || s) {
        const r = t.offset(this.ts), i = this.toObject();
        [o] = dt(i, r, t);
      }
      return Je(this, { ts: o, zone: t });
    } else
      return E.invalid(lt(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: s });
    return Je(this, { loc: o });
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
    const n = yt(t, Kn, []), s = !P(n.weekYear) || !P(n.weekNumber) || !P(n.weekday), o = !P(n.ordinal), r = !P(n.year), i = !P(n.month) || !P(n.day), a = r || i, l = n.weekYear || n.weekNumber;
    if ((a || o) && l)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (i && o)
      throw new xe("Can't mix ordinal dates with month/day");
    let c;
    s ? c = Wn(Object.assign(At(this.c), n)) : P(n.ordinal) ? (c = Object.assign(this.toObject(), n), P(n.day) && (c.day = Math.min(ht(c.year, c.month), c.day))) : c = qn(Object.assign(Ot(this.c), n));
    const [u, h] = dt(c, this.o, this.zone);
    return Je(this, { ts: u, o: h });
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
    const n = Oe(t);
    return Je(this, Yn(this, n));
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
    const n = Oe(t).negate();
    return Je(this, Yn(this, n));
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
    const n = {}, s = Z.normalizeUnit(t);
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
    return this.isValid ? te.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Dt;
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
  toLocaleString(t = mt) {
    return this.isValid ? te.create(this.loc.clone(t), t).formatDateTime(this) : Dt;
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
    return this.isValid ? te.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
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
    return Gn(this, {
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
    return Gn(this, {
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
    return this.isValid ? this.toISO() : Dt;
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
      return Z.invalid(
        this.invalid || t.invalid,
        "created by diffing an invalid DateTime"
      );
    const o = Object.assign(
      { locale: this.locale, numberingSystem: this.numberingSystem },
      s
    ), r = bl(n).map(Z.normalizeUnit), i = t.valueOf() > this.valueOf(), a = i ? this : t, l = i ? t : this, c = Bc(a, l, r, o);
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
    return Array.isArray(t.unit) && (o = t.unit, r = void 0), Qn(
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
    return this.isValid ? Qn(
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
      throw new ie("min requires all arguments be DateTimes");
    return Dn(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(E.isDateTime))
      throw new ie("max requires all arguments be DateTimes");
    return Dn(t, (n) => n.valueOf(), Math.max);
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
    return yo(i, t, n);
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
    return mt;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return qt;
  }
  /**
   * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return js;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return jt;
  }
  /**
   * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Ut;
  }
  /**
   * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Yt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Gt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Kt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Jt;
  }
  /**
   * {@link toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Qt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Xt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return xt;
  }
  /**
   * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return en;
  }
  /**
   * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return tn;
  }
  /**
   * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return nn;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return sn;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return on;
  }
  /**
   * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Us;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return rn;
  }
  /**
   * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return an;
  }
  /**
   * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return ln;
  }
  /**
   * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return cn;
  }
}
function Xe(e) {
  if (E.isDateTime(e))
    return e;
  if (e && e.valueOf && De(e.valueOf()))
    return E.fromJSDate(e);
  if (e && typeof e == "object")
    return E.fromObject(e);
  throw new ie(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
function vn(e) {
  return e.split("-")[0];
}
function Mo(e) {
  return e.split("-")[1];
}
function uu(e) {
  return ["top", "bottom"].includes(vn(e)) ? "x" : "y";
}
function du(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Xn(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function fu(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: o, platform: r, rects: i, elements: a, strategy: l } = e, { boundary: c = "clippingAncestors", rootBoundary: u = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: g = 0 } = t, $ = du(g), z = a[m ? h === "floating" ? "reference" : "floating" : h], R = Xn(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(z))) == null || n ? z : z.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: c, rootBoundary: u, strategy: l })), Q = h === "floating" ? { ...i.floating, x: s, y: o } : i.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), B = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || { x: 1, y: 1 }, ge = Xn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: Q, offsetParent: G, strategy: l }) : Q);
  return { top: (R.top - ge.top + $.top) / B.y, bottom: (ge.bottom - R.bottom + $.bottom) / B.y, left: (R.left - ge.left + $.left) / B.x, right: (ge.right - R.right + $.right) / B.x };
}
const Ae = Math.max, mu = ["top", "right", "bottom", "left"];
mu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const kt = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, o = await async function(r, i) {
      const { placement: a, platform: l, elements: c } = r, u = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), h = vn(a), m = Mo(a), g = uu(a) === "x", $ = ["left", "top"].includes(h) ? -1 : 1, z = u && g ? -1 : 1, R = typeof i == "function" ? i(r) : i;
      let { mainAxis: Q, crossAxis: G, alignmentAxis: B } = typeof R == "number" ? { mainAxis: R, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...R };
      return m && typeof B == "number" && (G = m === "end" ? -1 * B : B), g ? { x: G * z, y: Q * $ } : { x: Q * $, y: G * z };
    }(t, e);
    return { x: n + o.x, y: s + o.y, data: o };
  } };
}, bn = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: s, platform: o, elements: r } = t, { apply: i = () => {
    }, ...a } = e, l = await fu(t, a), c = vn(n), u = Mo(n);
    let h, m;
    c === "top" || c === "bottom" ? (h = c, m = u === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (m = c, h = u === "end" ? "top" : "bottom");
    const g = Ae(l.left, 0), $ = Ae(l.right, 0), z = Ae(l.top, 0), R = Ae(l.bottom, 0), Q = { availableHeight: s.floating.height - (["left", "right"].includes(n) ? 2 * (z !== 0 || R !== 0 ? z + R : Ae(l.top, l.bottom)) : l[h]), availableWidth: s.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || $ !== 0 ? g + $ : Ae(l.left, l.right)) : l[m]) };
    await i({ ...t, ...Q });
    const G = await o.getDimensions(r.floating);
    return s.floating.width !== G.width || s.floating.height !== G.height ? { reset: { rects: !0 } } : {};
  } };
}, xn = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, hu = /* @__PURE__ */ M({
  name: "h-date-picker",
  props: {
    ...jo,
    ...Uo,
    ...Yo,
    ...Go,
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
    const n = D(), s = k(), o = k(), r = k(e.modelValue ? e.modelValue.toISODate() : ""), i = k(!1), a = k(E.now()), l = k(xn.bottom), c = V(() => [kt(4)]), u = V(() => {
      if (e.dots === null)
        return null;
      const _ = {};
      return e.dots.forEach((Fe) => {
        const $e = Fe.date.toISODate();
        _[$e] = _[$e] || [], _[$e].push(Fe);
      }), _;
    }), h = V(() => {
      let _ = et.weekdays("short", {
        locale: "en"
      });
      return e.firstDayOfWeek !== 0 && _.unshift(..._.splice(e.firstDayOfWeek, 7 - e.firstDayOfWeek)), _;
    }), m = V(() => {
      const _ = [], Fe = a.value.startOf("month");
      let $e = Fe.weekday - 1;
      $e < e.firstDayOfWeek ? $e += 7 - e.firstDayOfWeek : $e -= e.firstDayOfWeek;
      const Eo = E.now();
      let _e = Fe.minus({
        days: $e
      });
      for (let wn = 0; wn < 6 * 7; wn++)
        _.push({
          date: _e,
          classes: {
            "-outside-month": _e.month !== Fe.month,
            "-today": e.highlightToday && _e.hasSame(Eo, "day"),
            "-selected": e.modelValue && _e.hasSame(e.modelValue, "day")
          }
        }), _e = _e.plus({
          days: 1
        });
      return _;
    }), g = (_) => {
      a.value = a.value.plus(_);
    }, $ = (_) => {
      a.value = a.value.minus(_);
    };
    le(() => e.modelValue, () => {
      r.value = e.modelValue ? e.modelValue.toISODate() : "";
    });
    const z = (_) => {
      r.value = _.toISODate(), t.emit("update:modelValue", _), i.value = !1;
    }, R = () => {
      const _ = E.fromISO(r.value);
      _.isValid && (a.value = _, t.emit("update:modelValue", _));
    }, Q = k(!1), G = () => {
      i.value === !1 && (a.value = e.modelValue ? e.modelValue : E.now()), Q.value = !0, i.value = !0, t.emit("focus");
    }, B = () => {
      Q.value = !1, t.emit("blur");
    }, ge = (_) => {
      l.value = xn[Be(_.placement).placement];
    }, Ne = (_) => {
      _.outsideFloating && _.outsideReference && (i.value = !1);
    };
    le(() => e.disabled, () => {
      e.disabled && (i.value = !1);
    }), le(m, (_) => {
      t.emit("view-changed", {
        from: _[0].date,
        to: _[_.length - 1].date
      });
    });
    const ke = (_) => ({
      class: [n.css_root.value]
    }), Ie = Ko().as("div", ke).props(["modelValue", "disabled", "visible"]).build();
    return {
      Icons: x,
      input: s,
      icon: o,
      inputValue: r,
      weekdayNames: h,
      daysToShow: m,
      shownDate: a,
      plusShownDate: g,
      minusShownDate: $,
      onDateClick: z,
      onDateInputChanged: R,
      core: Ie,
      ...n,
      onInputFocus: G,
      onInputBlur: B,
      transition: l,
      onClickOutside: Ne,
      onComputedPosition: ge,
      floatingVisible: i,
      floatingMiddleware: c,
      cachedDots: u
    };
  }
}), pu = ["onClick"];
function yu(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-input"), l = v("h-icon-button"), c = v("h-floating"), u = v("hr-date-picker");
  return K((f(), I(u, F(e.core.props, A(e.core.listeners)), {
    default: w((h) => [
      C(a, {
        ref: (m) => {
          m && (e.input = m.$el);
        },
        disabled: h.disabled,
        modelValue: e.inputValue,
        "onUpdate:modelValue": t[0] || (t[0] = (m) => e.inputValue = m),
        onChange: e.onDateInputChanged,
        onFocus: e.onInputFocus,
        onBlur: e.onInputBlur
      }, {
        customSuffix: w(() => [
          C(i, {
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
      C(c, {
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
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          y("div", {
            class: d([e.css_ec("calendar-header")])
          }, [
            y("div", null, [
              C(l, {
                icon: e.Icons.chevronLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[1] || (t[1] = (m) => e.minusShownDate({ months: 1 }))
              }, null, 8, ["icon"]),
              C(l, {
                icon: e.Icons.chevronDoubleLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[2] || (t[2] = (m) => e.minusShownDate({ years: 1 }))
              }, null, 8, ["icon"])
            ]),
            y("div", null, [
              y("span", {
                class: d([e.css_ec("calendar-year-label")])
              }, N(`${e.shownDate.monthLong} ${e.shownDate.year}`), 3)
            ]),
            y("div", null, [
              C(l, {
                icon: e.Icons.chevronDoubleRight,
                size: "normal",
                styling: "subtle",
                onClick: t[3] || (t[3] = (m) => e.plusShownDate({ years: 1 }))
              }, null, 8, ["icon"]),
              C(l, {
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
              (f(!0), S(se, null, he(e.weekdayNames, (m) => (f(), S("div", null, N(m), 1))), 256))
            ], 2),
            y("div", {
              class: d([e.css_ec("calendar-dates"), { "-has-dots": e.cachedDots !== null }])
            }, [
              (f(!0), S(se, null, he(e.daysToShow, (m) => (f(), S("div", {
                key: `${m.date.toISODate()}-${e.shownDate.toISODate()}`,
                class: d([e.css_ec("calendar-date"), m.classes]),
                onClick: (g) => e.onDateClick(m.date)
              }, [
                ne(N(m.date.day) + " ", 1),
                e.cachedDots !== null && e.cachedDots[m.date.toISODate()] ? (f(), S("div", {
                  key: 0,
                  class: d([e.css_ec("dots-container")])
                }, [
                  (f(!0), S(se, null, he(e.cachedDots[m.date.toISODate()], (g) => (f(), S("span", {
                    class: d([e.css_ec("dot")]),
                    style: W({ background: g.color || null })
                  }, null, 6))), 256))
                ], 2)) : O("", !0)
              ], 10, pu))), 128))
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class", "reference", "arrow-reference", "transition", "visible", "placement", "middleware", "onClickOutside", "onComputedPosition"])
    ]),
    _: 1
  }, 16)), [
    [J, e.visible]
  ]);
}
const gu = /* @__PURE__ */ L(hu, [["render", yu]]), vu = M({
  name: "h-input",
  props: {
    ...Jo,
    ...Qo,
    ...Xo,
    ...xo,
    ...er,
    placeholder: {
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
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
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
    }, a = () => {
      s.value.focusInput();
    }, l = (u) => ({
      class: {
        "-readonly": u.readonly,
        "-disabled": u.disabled
      },
      onClick: u.onClick
    }), c = tr(n).as("div", l).props(["modelValue", "modelModifiers", "readonly", "disabled", "type"]).events(["update:modelValue"]).build();
    return {
      coreInput: s,
      input: n,
      hasFocus: o,
      onFocus: r,
      onBlur: i,
      focus: a,
      core: c,
      ...D()
    };
  }
}), bu = ["value", "type", "maxlength", "minlength", "min", "max", "disabled", "placeholder", "readonly", "autocomplete", "onInput"];
function wu(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-input");
  return f(), I(a, F({
    ref: "coreInput",
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (f(), S("div", {
        key: 0,
        class: d([e.css_ec("prefix")]),
        style: W({ width: e.prefixWidth })
      }, [
        T(e.$slots, "prefix", {}, () => [
          ne(N(e.prefix), 1)
        ])
      ], 6)) : O("", !0),
      e.prefixIcon ? (f(), I(i, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      y("input", {
        ref: "input",
        class: d([e.css_ec("input")]),
        value: l.modelValue,
        type: e.type,
        maxlength: e.maxLength,
        minlength: e.minLength,
        min: e.min,
        max: e.max,
        disabled: l.disabled,
        placeholder: e.placeholder,
        readonly: l.readonly,
        autocomplete: e.autocomplete,
        onInput: (c) => l.modelValue = c.target.value,
        onFocus: t[0] || (t[0] = (...c) => e.onFocus && e.onFocus(...c)),
        onBlur: t[1] || (t[1] = (...c) => e.onBlur && e.onBlur(...c))
      }, null, 42, bu),
      e.suffixIcon ? (f(), I(i, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      e.$slots.suffix || e.suffix ? (f(), S("div", {
        key: 3,
        class: d([e.css_ec("suffix")]),
        style: W({ width: e.suffixWidth })
      }, [
        T(e.$slots, "suffix", {}, () => [
          ne(N(e.suffix), 1)
        ])
      ], 6)) : O("", !0),
      T(e.$slots, "customSuffix")
    ]),
    _: 3
  }, 16, ["class"]);
}
const $u = /* @__PURE__ */ L(vu, [["render", wu]]), Su = M({
  name: "h-autocomplete",
  props: {
    ...nr,
    ...sr,
    ...or,
    ...rr,
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
    const n = k(), s = k(), o = k(), r = k(), i = k(), a = k(""), l = V(() => [
      bn({
        padding: 8,
        apply(B) {
          Object.assign(B.elements.floating.style, {
            width: `${B.rects.reference.width}px`
          }), a.value = `${B.availableHeight}px`;
        }
      })
    ]);
    Os(() => {
      o.value = [];
    });
    const c = (B) => {
      r.value = B, i.value = B ? B.$el : null;
    }, u = k(!1), h = () => {
      u.value = !0, r.value.showList(), t.emit("focus");
    }, m = () => {
      u.value = !1, t.emit("blur");
    }, g = () => {
      r.value.focusInput();
    }, $ = () => {
      r.value.hideList();
    }, z = (B) => {
      B.outsideFloating && B.outsideReference && $();
    }, R = (B) => {
      const ge = e.items.findIndex((ke) => ke === B), Ne = o.value[ge];
      Ne && Ne.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, Q = (B) => ({
      class: {
        "-disabled": B.disabled
      }
    }), G = ir(n).as("div", Q).props(["modelValue", "modelModifiers", "disabled", "items"]).events(["update:modelValue", "itemSelected", "focusedItemChanged"]).build();
    return {
      setCoreInput: c,
      coreAutocompleteEl: i,
      floatingMiddleware: l,
      listMaxHeight: a,
      input: n,
      items: o,
      scrollContainer: s,
      hasFocus: u,
      onFocus: h,
      onBlur: m,
      core: G,
      onClickOutside: z,
      onFocusedItemChanged: R,
      ...D(),
      focus: g,
      hideList: $
    };
  }
}), ku = ["value", "type", "maxlength", "minlength", "disabled", "placeholder", "readonly", "autocomplete", "onInput", "onKeydown"], Iu = ["onKeydown"], Cu = ["onClick"];
function Tu(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-autocomplete");
  return f(), I(c, F({
    ref: (u) => e.setCoreInput(u),
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (f(), S("div", {
        key: 0,
        class: d([e.css_ec("prefix")])
      }, [
        T(e.$slots, "prefix", {}, () => [
          ne(N(e.prefix), 1)
        ])
      ], 2)) : O("", !0),
      e.prefixIcon ? (f(), I(i, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
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
        onInput: (h) => u.modelValue = h.target.value,
        onFocus: t[0] || (t[0] = (...h) => e.onFocus && e.onFocus(...h)),
        onBlur: t[1] || (t[1] = (...h) => e.onBlur && e.onBlur(...h)),
        onKeydown: u.onKeyEvents
      }, null, 42, ku),
      e.suffixIcon ? (f(), I(i, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      e.$slots.suffix || e.suffix ? (f(), S("div", {
        key: 3,
        class: d([e.css_ec("suffix")])
      }, [
        T(e.$slots, "suffix", {}, () => [
          ne(N(e.suffix), 1)
        ])
      ], 2)) : O("", !0),
      T(e.$slots, "customSuffix"),
      C(l, {
        as: "div",
        class: d([e.css_ec("list-container")]),
        reference: e.coreAutocompleteEl,
        transition: "fade-fast",
        visible: u.listVisible,
        placement: "bottom-start",
        middleware: e.floatingMiddleware,
        onHide: (h) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside
      }, {
        default: w(() => [
          y("div", {
            class: d([e.css_ec("list-box")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.listMaxHeight })
          }, [
            C(a, { ref: "scrollContainer" }, {
              default: w(() => [
                T(e.$slots, "default", {
                  items: u.items,
                  focusedItem: u.focusedItem,
                  onItemClick: u.onItemClick
                }, () => [
                  y("ul", {
                    class: d([e.css_ec("list")])
                  }, [
                    (f(!0), S(se, null, he(u.items, (h, m) => (f(), S("li", {
                      ref_for: !0,
                      ref: (g) => e.items[m] = g,
                      class: d([e.css_ec("list-item"), { "-focused": h === u.focusedItem }]),
                      onClick: (g) => u.onItemClick(h)
                    }, N(h), 11, Cu))), 256))
                  ], 2)
                ])
              ]),
              _: 2
            }, 1536)
          ], 46, Iu)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onHide", "onClickOutside"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const Mu = /* @__PURE__ */ L(Su, [["render", Tu]]), Ou = M({
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
    const n = k(), s = V(() => {
      if (e.modelValue === null)
        return null;
      if (e.modelValue.constructor.name === "FileList") {
        const r = e.modelValue;
        return r.length > 1 ? `${r.length} files selected` : r.length === 1 ? r[0].name : null;
      } else
        return e.modelValue.name;
    }), o = (r) => {
      const a = r.target.files;
      let l = null;
      a.length && (l = e.multiple ? a : a[0]), t.emit("update:modelValue", l);
    };
    return {
      ...D(),
      selectedFiles: n,
      filesChanged: o,
      text: s
    };
  }
}), Du = ["multiple", "accept"];
function Lu(e, t, n, s, o, r) {
  return f(), S("label", {
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
    }, null, 42, Du),
    y("div", {
      class: d([e.css_ec("suffix")])
    }, N(e.label), 3)
  ], 2);
}
const Eu = /* @__PURE__ */ L(Ou, [["render", Lu]]), es = "elementic-inputs", Vu = {
  Input: $u,
  Autocomplete: Mu,
  FileInput: Eu
}, Nu = {
  CoreInputsInstall: ar
}, Oo = {
  install: (e, t) => {
    p.isModuleInstalled(e, es) || (p.installDependencies(e, Nu, t), p.installComponents(e, Vu), p.markModuleAsInstalled(e, es));
  }
}, ts = "elementic-date-pickers", Fu = {
  DatePicker: gu
}, _u = {
  CoreDatePickersInstall: lr,
  IconsInstall: Wt,
  InputsInstall: Oo
}, Pu = {
  install: (e, t) => {
    p.isModuleInstalled(e, ts) || (p.installDependencies(e, _u, t), p.installComponents(e, Fu), p.markModuleAsInstalled(e, ts));
  }
}, Au = M({
  name: "h-dialog",
  props: {
    ...As,
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
    width: {
      type: String,
      default: "400px"
    },
    showCloseButton: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    const n = ue("dialog-transition-end"), s = je({});
    le(s, () => {
      Object.keys(s).length === 0 && n && n();
    });
    const o = (c) => {
      e.visible === !1 && delete s[c];
    }, r = (c) => {
      e.visible === !1 && (s[c] = !0);
    }, i = (c, u) => c < u - 1 ? `scale(${1 - 0.1 * (u - c - 1)})` : null, a = (c, u) => c < u - 1 ? 1 - 0.25 * (u - c) : null, l = Hs(["visible"]);
    return {
      Icons: x,
      core: l,
      ...D(),
      transitionEnded: o,
      transitionStarted: r,
      getScale: i,
      getOpacity: a
    };
  }
}), Hu = ["innerHTML"];
function zu(e, t, n, s, o, r) {
  const i = v("h-icon-button"), a = v("hr-dialog");
  return f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${l.stackIndex}`, `-count-${l.stackCount}`, `-visible-count-${l.visibleStackCount}`]),
        style: W({ zIndex: e.zIndex })
      }, [
        C(pe, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: w(() => [
            K(y("div", {
              class: d([e.css_ec("backdrop")]),
              style: W({ opacity: e.getOpacity(l.stackIndex, l.visibleStackCount) })
            }, null, 6), [
              [J, l.visible]
            ])
          ]),
          _: 2
        }, 1024),
        C(pe, {
          name: "small-slide-up-medium",
          appear: "",
          onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
          onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
        }, {
          default: w(() => [
            K(y("div", {
              class: d([e.css_ec("box-container")]),
              style: W({ width: e.width, transform: e.getScale(l.stackIndex, l.visibleStackCount) })
            }, [
              y("div", {
                class: d([e.css_ec("box")])
              }, [
                e.showCloseButton ? (f(), S("div", {
                  key: 0,
                  class: d([e.css_ec("close-icon")])
                }, [
                  C(i, {
                    icon: e.Icons.close,
                    styling: "subtle",
                    size: "small",
                    onClick: l.close
                  }, null, 8, ["icon", "onClick"])
                ], 2)) : O("", !0),
                e.$slots.title || e.title ? (f(), S("div", {
                  key: 1,
                  class: d([e.css_ec("title")])
                }, [
                  T(e.$slots, "title", {}, () => [
                    y("span", { innerHTML: e.title }, null, 8, Hu)
                  ])
                ], 2)) : O("", !0),
                y("div", {
                  class: d([e.css_ec("content")])
                }, [
                  T(e.$slots, "default")
                ], 2),
                e.$slots.footer ? (f(), S("div", {
                  key: 2,
                  class: d([e.css_ec("footer")])
                }, [
                  T(e.$slots, "footer")
                ], 2)) : O("", !0)
              ], 2)
            ], 6), [
              [J, l.visible]
            ])
          ]),
          _: 2
        }, 1024)
      ], 6)
    ]),
    _: 3
  }, 16);
}
const Ru = /* @__PURE__ */ L(Au, [["render", zu]]), ns = "elementic-dialgos", Bu = {
  Dialog: Ru
}, Zu = {
  CoreDialogsInstall: zs
}, Wu = {
  install: (e, t) => {
    p.isModuleInstalled(e, ns) || (p.installDependencies(e, Zu, t), p.installComponentAlias(e, "h-dialog-wrapper", cr), p.installComponents(e, Bu), p.markModuleAsInstalled(e, ns));
  }
}, qu = M({
  name: "h-drawer",
  props: {
    ...As,
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
    const n = ue("dialog-transition-end"), s = je({}), o = V(() => e.placement === "right" ? "large2x-slide-to-left-medium" : "large2x-slide-to-right-medium");
    le(s, () => {
      Object.keys(s).length === 0 && n();
    });
    const r = (u) => {
      e.visible === !1 && delete s[u];
    }, i = (u) => {
      e.visible === !1 && (s[u] = !0);
    }, a = (u, h) => u < h - 1 ? `translateX(${e.placement === "right" ? "-" : ""}${(h - u - 1) * 64}px)` : null, l = (u, h) => u < h - 1 ? 1 - 0.25 * (h - u) : null;
    return {
      core: Hs(["visible"]),
      ...D(),
      slideTransition: o,
      transitionEnded: r,
      transitionStarted: i,
      getScale: a,
      getOpacity: l
    };
  }
}), ju = ["innerHTML"];
function Uu(e, t, n, s, o, r) {
  const i = v("h-scroll-container"), a = v("hr-dialog");
  return f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${l.stackIndex}`, `-count-${l.stackCount}`, `-active-count-${l.visibleStackCount}`]),
        style: W({ zIndex: e.zIndex })
      }, [
        C(pe, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: w(() => [
            K(y("div", {
              class: d([e.css_ec("backdrop")]),
              style: W({ opacity: e.getOpacity(l.stackIndex, l.visibleStackCount) })
            }, null, 6), [
              [J, l.visible]
            ])
          ]),
          _: 2
        }, 1024),
        C(pe, {
          name: e.slideTransition,
          appear: "",
          onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
          onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
        }, {
          default: w(() => [
            K(y("div", {
              class: d([e.css_ec("box"), `-placement-${e.placement}`, { "-has-footer": e.$slots.footer }]),
              style: W({ transform: e.getScale(l.stackIndex, l.visibleStackCount) })
            }, [
              e.$slots.title || e.title ? (f(), S("div", {
                key: 0,
                class: d([e.css_ec("title")])
              }, [
                T(e.$slots, "title", {}, () => [
                  y("span", { innerHTML: e.title }, null, 8, ju)
                ])
              ], 2)) : O("", !0),
              y("div", {
                class: d([e.css_ec("content")])
              }, [
                C(i, null, {
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
              e.$slots.footer ? (f(), S("div", {
                key: 1,
                class: d([e.css_ec("footer")])
              }, [
                T(e.$slots, "footer")
              ], 2)) : O("", !0)
            ], 6), [
              [J, l.visible]
            ])
          ]),
          _: 2
        }, 1032, ["name"])
      ], 6)
    ]),
    _: 3
  }, 16);
}
const Yu = /* @__PURE__ */ L(qu, [["render", Uu]]), ss = "elementic-drawers", Gu = {
  Drawer: Yu
}, Ku = {
  CoreDialogsInstall: zs
}, Ju = {
  install: (e, t) => {
    p.isModuleInstalled(e, ss) || (p.installDependencies(e, Ku, t), p.installComponents(e, Gu), p.markModuleAsInstalled(e, ss));
  }
}, os = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, Qu = M({
  name: "h-dropdown",
  props: {
    ...ur,
    ...dr,
    ...fr,
    ...mr,
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
    const n = k(), s = k(), o = k(), r = k(""), i = k({}), a = k(os.bottom), l = V(() => [
      kt(4),
      bn({
        padding: 8,
        apply($) {
          i.value = {
            [e.autoSize ? "minWidth" : "width"]: `${$.rects.reference.width}px`
          }, r.value = `${$.availableHeight}px`;
        }
      })
    ]), c = ($) => {
      $.outsideFloating && $.outsideReference && n.value.close();
    }, u = ($) => {
      a.value = os[Be($.placement).placement];
    }, h = ($) => {
      $ && $.component && $.component.vnode && $.component.vnode.el && $.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, m = ($) => ({
      class: {
        "-active": $.menuVisible,
        "-disabled": $.disabled
      }
    }), g = hr().as("div", m).props(["disabled", "hideOnClick", "splitButton", "visible"]).events(["click", "focusedItemChanged"]).build();
    return {
      Icons: x,
      core: g,
      dropdown: n,
      button: s,
      icon: o,
      transition: a,
      floatingMiddleware: l,
      floatingStyle: i,
      menuMaxHeight: r,
      onClickOutside: c,
      onComputedPosition: u,
      onFocusedItemChanged: h,
      ...D()
    };
  }
}), Xu = ["onClick", "onKeydown"], xu = ["onClick", "onKeydown"], ed = ["onKeydown"];
function td(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-dropdown");
  return K((f(), I(c, F({
    ref: "dropdown",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: w((u) => [
      y("div", {
        ref: "button",
        tabindex: "0",
        class: d([e.css_ec("button"), { "-split-button": u.splitButton }]),
        onClick: u.onButtonClick,
        onKeydown: (h) => u.onKeyEvents(h, "main")
      }, [
        y("span", {
          class: d([e.css_ec("label")])
        }, [
          T(e.$slots, "label", {}, () => [
            ne(N(e.label), 1)
          ])
        ], 2),
        y("div", {
          tabindex: "0",
          class: d([e.css_ec("icon")]),
          onClick: $n(u.onIconClick, ["stop"]),
          onKeydown: $n((h) => u.onKeyEvents(h, "split"), ["stop"])
        }, [
          y("div", null, [
            C(i, {
              ref: "icon",
              icon: e.Icons.dotsHorizontal,
              size: "16px"
            }, null, 8, ["icon"])
          ])
        ], 42, xu)
      ], 42, Xu),
      C(l, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        "arrow-reference": e.icon ? e.icon.$el : null,
        "show-arrow": "",
        transition: e.transition,
        visible: u.menuVisible,
        placement: `bottom-${e.align}`,
        middleware: e.floatingMiddleware,
        onHide: (h) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside,
        onComputedPosition: e.onComputedPosition,
        onTransitionStateChanged: u.onMenuTransitioning,
        style: W(e.floatingStyle)
      }, {
        arrow: w(() => [
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.menuMaxHeight })
          }, [
            C(a, null, {
              default: w(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, ed)
        ]),
        _: 2
      }, 1032, ["class", "reference", "arrow-reference", "transition", "visible", "placement", "middleware", "onHide", "onClickOutside", "onComputedPosition", "onTransitionStateChanged", "style"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"])), [
    [J, e.visible]
  ]);
}
const nd = /* @__PURE__ */ L(Qu, [["render", td]]), sd = M({
  name: "h-dropdown-item",
  props: {
    ...pr,
    ...yr,
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
      core: gr().as("div", n).props(["disabled"]).events(["click"]).build(),
      ...D()
    };
  }
});
function od(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-dropdown-item");
  return f(), I(a, F({
    class: [e.css_root],
    tabindex: "-1"
  }, e.core.props, A(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (f(), I(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon
        }, null, 8, ["class", "icon"])) : O("", !0),
        y("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ])
    ]),
    _: 3
  }, 16, ["class"]);
}
const rd = /* @__PURE__ */ L(sd, [["render", od]]), id = M({
  name: "h-dropdown-item-divider",
  setup(e, t) {
    const n = ue("dropdown"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function ad(e, t, n, s, o, r) {
  return e.visible ? (f(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : O("", !0);
}
const ld = /* @__PURE__ */ L(id, [["render", ad]]), cd = M({
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
    const n = ue("dropdown"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function ud(e, t, n, s, o, r) {
  const i = v("h-icon");
  return e.visible ? (f(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (f(), I(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      y("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : O("", !0);
}
const dd = /* @__PURE__ */ L(cd, [["render", ud]]), Et = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fd = {
  top: "offsetHeight",
  right: "offsetWidth",
  bottom: "offsetHeight",
  left: "offsetWidth"
}, md = M({
  name: "h-floating",
  props: {
    ...vr,
    ...br,
    ...wr,
    ...$r,
    ...Sr,
    ...Zt(),
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
    const n = D(), s = k(), o = k(null), r = k({}), i = k(Et[Be(e.placement).placement]), a = k(Be(e.placement).placement), l = k(Be(e.placement).alignment), c = V(() => {
      const m = [...e.middleware];
      return e.showArrow && m.push(kr({
        reference: e.arrowReference,
        element: o.value
      })), m;
    }), u = (m) => {
      const g = Be(m.placement);
      a.value = g.placement, l.value = g.alignment;
      const $ = a.value;
      m.middlewareData.arrowReference && (r.value = {
        left: m.middlewareData.arrowReference.x != null ? `${m.middlewareData.arrowReference.x}px` : "",
        top: m.middlewareData.arrowReference.y != null ? `${m.middlewareData.arrowReference.y}px` : "",
        [Et[$]]: `${-o.value[fd[$]]}px`
      }, i.value = Et[$]), t.emit("computedPosition", m);
    }, h = Ir().props(["as", "reference", "visible", "placement", "transition"]).events(["clickOutside", "show", "hide"]).build();
    return {
      ...n,
      middleware: c,
      floating: s,
      floatingPlacement: a,
      floatingAlignment: l,
      floatingArrow: o,
      arrowStyle: r,
      arrowPlacement: i,
      core: h,
      onComputedPosition: u
    };
  }
}), hd = ["data-arrow-placement"];
function pd(e, t, n, s, o, r) {
  const i = v("hr-floating");
  return f(), I(i, F({
    ref: "floating",
    middleware: e.middleware,
    "data-floating-placement": e.floatingPlacement,
    "data-floating-alignment": e.floatingAlignment
  }, { ...e.core.props, ...e.$attrs }, A(e.core.listeners), { onComputedPosition: e.onComputedPosition }), {
    default: w(() => [
      e.showArrow ? (f(), S("span", {
        key: 0,
        ref: "floatingArrow",
        style: W({ display: "flex", position: "absolute", ...e.arrowStyle }),
        "data-arrow-placement": e.arrowPlacement
      }, [
        T(e.$slots, "arrow")
      ], 12, hd)) : O("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["middleware", "data-floating-placement", "data-floating-alignment", "onComputedPosition"]);
}
const yd = /* @__PURE__ */ L(md, [["render", pd]]), rs = "elementic-floating", gd = {
  Floating: yd
}, vd = {
  CoreFloatingInstall: Cr
}, rt = {
  install: (e, t) => {
    p.isModuleInstalled(e, rs) || (p.installDependencies(e, vd, t), p.installComponents(e, gd), p.markModuleAsInstalled(e, rs));
  }
}, is = "elementic-dropdowns", bd = {
  Dropdown: nd,
  DropdownItem: rd,
  DropdownItemDivider: ld,
  DropdownItemHeader: dd
}, wd = {
  CoreDropdownsInstall: Tr,
  FloatingInstall: rt
}, $d = {
  install: (e, t) => {
    p.isModuleInstalled(e, is) || (p.installDependencies(e, wd, t), p.installComponents(e, bd), p.markModuleAsInstalled(e, is));
  }
}, Sd = M({
  name: "h-fragment",
  props: {
    id: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = Cs(), s = ue("fragmentContainer"), o = V(() => e.id === s.active.value), r = V(() => s.transition);
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
function kd(e, t, n, s, o, r) {
  return f(), I(pe, {
    name: e.transitionName,
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave,
    "enter-active-class": `${e.transitionName}-enter-active -transitioning`,
    "leave-active-class": `${e.transitionName}-leave-active -transitioning`
  }, {
    default: w(() => [
      e.isActive ? (f(), S("div", {
        key: 0,
        class: d([e.css_root])
      }, [
        T(e.$slots, "default")
      ], 2)) : O("", !0)
    ]),
    _: 3
  }, 8, ["name", "onEnter", "onAfterEnter", "onBeforeLeave", "enter-active-class", "leave-active-class"]);
}
const Id = /* @__PURE__ */ L(Sd, [["render", kd]]), Cd = M({
  name: "h-fragment-container",
  props: {
    ...Mr,
    transition: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = je({
      old: null,
      new: null,
      target: null
    }), s = V(() => n.target === null ? null : `${n.target}px`), o = () => {
      n.target = n.old, Re(() => {
        Re(() => {
          n.target = n.new;
        });
      });
    }, r = (c) => {
      n.new = c, n.old !== null && Re(o);
    }, i = (c) => {
      n.old = c, n.new !== null && Re(o);
    }, a = () => {
      n.old = null, n.new = null, n.target = null;
    }, l = Or().as("div").props(["active"]).build();
    return ft("fragmentContainer", {
      active: V(() => e.active),
      transition: e.transition,
      setNewHeight: r,
      setOldHeight: i,
      clearHeights: a
    }), {
      core: l,
      actualHeight: s,
      heights: n,
      ...D()
    };
  }
});
function Td(e, t, n, s, o, r) {
  const i = v("hr-fragment-container");
  return f(), I(i, F(e.core.props, {
    class: [e.css_root, e.transition ? `${e.transition}-container` : null],
    style: { height: e.actualHeight }
  }), {
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "style"]);
}
const Md = /* @__PURE__ */ L(Cd, [["render", Td]]), as = "elementic-fragments", Od = {
  Fragment: Id,
  FragmentContainer: Md
}, Dd = {
  CoreFragmentsInstall: Dr
}, Ld = {
  install: (e, t) => {
    p.isModuleInstalled(e, as) || (p.installDependencies(e, Dd, t), p.installComponents(e, Od), p.markModuleAsInstalled(e, as));
  }
}, Ed = /* @__PURE__ */ M({
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
    const n = V(() => e.listStyle);
    return ft("list-style", n), {
      ...D()
    };
  },
  render() {
    return this.animate ? Sn(Ds, {
      name: "list-complete",
      tag: "ul",
      class: [this.css_root]
    }, this.$slots.default) : Sn("ul", {
      class: [this.css_root]
    }, this.$slots.default());
  }
}), Vd = M({
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
    const n = ue("list-style");
    return {
      ...D(),
      listStyle: n
    };
  }
});
function Nd(e, t, n, s, o, r) {
  return f(), S("li", {
    class: d([e.css_root, `-list-style-${e.listStyle}`])
  }, [
    y("div", {
      class: d([e.css_ec("content")])
    }, [
      T(e.$slots, "default", {}, () => [
        y("div", {
          class: d([e.css_ec("text")])
        }, N(e.text), 3),
        e.subText ? (f(), S("div", {
          key: 0,
          class: d([e.css_ec("sub-text")])
        }, N(e.subText), 3)) : O("", !0)
      ])
    ], 2)
  ], 2);
}
const Fd = /* @__PURE__ */ L(Vd, [["render", Nd]]), ls = "elementic-lists", _d = {
  List: Ed,
  ListItem: Fd
}, Pd = {
  install: (e, t) => {
    p.isModuleInstalled(e, ls) || (p.installComponents(e, _d), p.markModuleAsInstalled(e, ls));
  }
}, Ad = M({
  name: "h-notification",
  props: {
    ...Lr,
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
    const n = D(), s = ue("notification-transition-end"), o = je({});
    le(o, () => {
      Object.keys(o).length === 0 && s();
    });
    const r = (c) => {
      e.visible === !1 && delete o[c];
    }, i = (c) => {
      e.visible === !1 && (o[c] = !0);
    }, a = (c) => ({
      class: [n.css_root.value, `-color-${e.color}`]
    }), l = Er().as("div", a).props(["visible"]).build();
    return {
      Icons: x,
      core: l,
      ...D(),
      transitionEnded: r,
      transitionStarted: i
    };
  }
}), Hd = ["onMouseenter", "onMouseleave"], zd = ["innerHTML"];
function Rd(e, t, n, s, o, r) {
  const i = v("h-icon-button"), a = v("hr-notification");
  return K((f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      y("div", {
        class: d([e.css_ec("box")]),
        onMouseenter: l.pauseDuration,
        onMouseleave: l.resumeDuration
      }, [
        e.showCloseButton ? (f(), S("div", {
          key: 0,
          class: d([e.css_ec("close-icon")])
        }, [
          C(i, {
            icon: e.Icons.close,
            styling: "subtle",
            color: e.color,
            size: "small",
            onClick: l.close
          }, null, 8, ["icon", "color", "onClick"])
        ], 2)) : O("", !0),
        e.$slots.title || e.title ? (f(), S("div", {
          key: 1,
          class: d([e.css_ec("title")])
        }, [
          T(e.$slots, "title", {}, () => [
            y("span", { innerHTML: e.title }, null, 8, zd)
          ])
        ], 2)) : O("", !0),
        y("div", {
          class: d([e.css_ec("content")])
        }, [
          T(e.$slots, "default")
        ], 2)
      ], 42, Hd)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const Bd = /* @__PURE__ */ L(Ad, [["render", Rd]]), Zd = /* @__PURE__ */ M({
  name: "h-notification-wrapper",
  components: {},
  props: {
    ...Vr,
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
    const n = D(), s = (i) => ({
      class: [n.css_root.value],
      "data-placement": e.placement
    });
    return {
      core: Nr().as("div", s).props(["name"]).build(),
      ...n,
      transitionEnded: (i) => {
        const a = i.dataset.id;
        Rs.getWrapper(e.name).getNotification(a).transitionEnd();
      }
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
function Wd(e, t, n, s, o, r) {
  const i = v("hr-notification-wrapper");
  return f(), I(i, F(e.core.props, A(e.core.listeners), {
    style: { width: e.width }
  }), {
    default: w((a) => [
      C(Ds, {
        tag: "div",
        class: d(e.css_ec("transition-group")),
        name: "notification-slide-in",
        onAfterLeave: e.transitionEnded
      }, {
        default: w(() => [
          (f(!0), S(se, null, he(a.notifications, (l) => (f(), I(Ms(l.component), F({
            key: l.id,
            class: e.css_ec("notification"),
            "data-id": l.id,
            visible: l.visible
          }, l.props, A(l.compiledListeners)), null, 16, ["class", "data-id", "visible"]))), 128))
        ]),
        _: 2
      }, 1032, ["class", "onAfterLeave"])
    ]),
    _: 1
  }, 16, ["style"]);
}
const qd = /* @__PURE__ */ L(Zd, [["render", Wd]]), cs = "elementic-notifications", jd = {
  Notification: Bd,
  NotificationWrapper: qd
}, Ud = {
  CoreNotificationsInstall: Fr
}, Yd = {
  install: (e, t) => {
    p.isModuleInstalled(e, cs) || (p.installDependencies(e, Ud, t), p.installComponents(e, jd), p.markModuleAsInstalled(e, cs));
  }
}, Gd = M({
  name: "h-paginator",
  props: {
    ..._r,
    ...Pr,
    ...Ar,
    ...Hr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(null), s = k(0), o = k(0), r = V(() => ({
      transform: `translate(${o.value}px, 0)`,
      width: `${s.value}px`
    })), i = () => {
      n.value && (o.value = n.value.offsetLeft + 4, s.value = n.value.offsetWidth - 8);
    };
    le(() => e.modelValue, () => {
      Re(i);
    }), vt(i);
    const a = zr().as("div").props(["modelValue", "pageSize", "count", "delta"]).events(["update:modelValue"]).build();
    return {
      Icons: x,
      core: a,
      activeButton: n,
      indicatorStyle: r,
      ...D()
    };
  }
}), Kd = ["disabled", "onClick"], Jd = ["onClick"], Qd = ["onClick"], Xd = ["disabled", "onClick"];
function xd(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-paginator");
  return f(), I(a, F(e.core.props, {
    class: [e.css_root]
  }, A(e.core.listeners)), {
    default: w((l) => [
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": e.activeButton === null }]),
        style: W(e.indicatorStyle)
      }, null, 6),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: l.currentPage === 1,
        onClick: (c) => l.onPaginationButtonClick(l.currentPage - 1)
      }, [
        C(i, {
          icon: e.Icons.arrowLeft,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, Kd),
      (f(!0), S(se, null, he(l.buttons, (c) => (f(), S(se, null, [
        c === l.currentPage ? (f(), S("button", {
          key: c,
          ref_for: !0,
          ref: "activeButton",
          class: d([e.css_ec("button"), "-active"]),
          onClick: (u) => l.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, Jd)) : (f(), S("button", {
          key: c,
          class: d([e.css_ec("button")]),
          onClick: (u) => l.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, Qd))
      ], 64))), 256)),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: l.currentPage === l.pages,
        onClick: (c) => l.onPaginationButtonClick(l.currentPage + 1)
      }, [
        C(i, {
          icon: e.Icons.arrowRight,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, Xd)
    ]),
    _: 1
  }, 16, ["class"]);
}
const ef = /* @__PURE__ */ L(Gd, [["render", xd]]), us = "elementic-paginators", tf = {
  Paginator: ef
}, nf = {
  CorePaginatorsInstall: Rr
}, sf = {
  install: (e, t) => {
    p.isModuleInstalled(e, us) || (p.installDependencies(e, nf, t), p.installComponents(e, tf), p.markModuleAsInstalled(e, us));
  }
}, ds = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, of = M({
  name: "h-popover",
  props: {
    ...Zt(),
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
    const n = k(ds[e.placement]);
    return {
      floatingMiddleware: k([
        kt(4)
      ]),
      onClickOutside: (i) => {
        t.emit("clickOutside", i);
      },
      onComputedPosition: (i) => {
        const a = i.placement.split("-")[0];
        n.value = ds[a], t.emit("computedPosition", i);
      },
      transition: n,
      ...D()
    };
  }
});
function rf(e, t, n, s, o, r) {
  const i = v("h-floating");
  return f(), I(i, {
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
const af = /* @__PURE__ */ L(of, [["render", rf]]), fs = "elementic-popovers", lf = {
  Popover: af
}, cf = {
  FloatingInstall: rt
}, uf = {
  install: (e, t) => {
    p.isModuleInstalled(e, fs) || (p.installDependencies(e, cf, t), p.installComponents(e, lf), p.markModuleAsInstalled(e, fs));
  }
}, df = M({
  name: "h-progress-bar",
  props: {
    ...Br,
    ...Zr,
    ...Wr,
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
    const n = k(), s = V(() => n.value ? e.showPercentage ? `${n.value.percentage}%` : e.value : ""), o = V(() => n.value ? `${Math.min(100, n.value.percentage)}%` : "0%"), r = V(() => {
      const a = 100 / (e.value - e.minimum) * (e.maximum - e.minimum);
      return Math.round(a * 10) / 10;
    });
    return {
      core: qr().as("div").props(["value", "minimum", "maximum"]).build(),
      coreProgressBar: n,
      overflowOffset: r,
      label: s,
      width: o,
      ...D()
    };
  }
});
function ff(e, t, n, s, o, r) {
  const i = v("hr-progress-bar");
  return f(), I(i, F({
    ref: "coreProgressBar",
    class: [e.css_root, `-size-${e.size}`, `-styling-${e.styling}`, { "-striped": e.striped, "-animated": e.animated }]
  }, e.core.props, A(e.core.listeners)), {
    default: w(() => [
      y("div", {
        class: d([e.css_ec("back")])
      }, [
        y("div", {
          class: d([e.css_ec("filler")]),
          style: W({ width: e.width })
        }, [
          (e.showPercentage || e.showValue) && e.size === "large" ? (f(), S("span", {
            key: 0,
            class: d([e.css_ec("label")])
          }, N(e.label), 3)) : O("", !0)
        ], 6),
        e.showOverflowIndicator ? K((f(), S("div", {
          key: 0,
          class: d([e.css_ec("overflow-indicator")]),
          style: W({ left: `${e.overflowOffset}%` })
        }, null, 6)), [
          [J, e.overflowOffset < 100]
        ]) : O("", !0)
      ], 2),
      (e.showPercentage || e.showValue) && e.size === "normal" ? (f(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : O("", !0)
    ]),
    _: 1
  }, 16, ["class"]);
}
const mf = /* @__PURE__ */ L(df, [["render", ff]]), ms = "elementic-progress-bars", hf = {
  ProgressBar: mf
}, pf = {
  CoreProgressBarsInstall: jr
}, yf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ms) || (p.installDependencies(e, pf, t), p.installComponents(e, hf), p.markModuleAsInstalled(e, ms));
  }
}, gf = M({
  name: "h-radio-button",
  props: {
    ...Ur,
    ...Yr,
    ...Gr,
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
      core: Kr().as("label", s).props(["modelValue", "value", "disabled"]).events(["update:modelValue"]).build(),
      hasFocus: n,
      ...D()
    };
  }
}), vf = ["checked", "disabled", "onChange"];
function bf(e, t, n, s, o, r) {
  const i = v("hr-radio-button");
  return f(), I(i, F({
    class: [e.css_root, { "-focus": e.hasFocus, "-bordered": e.bordered }]
  }, e.core.props, A(e.core.listeners)), {
    default: w((a) => [
      y("span", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("input")]),
          checked: a.state,
          type: "radio",
          disabled: a.disabled,
          onChange: a.onChange,
          onFocus: t[0] || (t[0] = (l) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (l) => e.hasFocus = !1)
        }, null, 42, vf),
        y("div", {
          class: d([e.css_ec("check-icon")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.label ? (f(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          ne(N(e.label), 1)
        ])
      ], 2)) : O("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const wf = /* @__PURE__ */ L(gf, [["render", bf]]), hs = "elementic-radio-buttons", $f = {
  RadioButton: wf
}, Sf = {
  CoreRadioButtonsInstall: Jr
}, kf = {
  install: (e, t) => {
    p.isModuleInstalled(e, hs) || (p.installDependencies(e, Sf, t), p.installComponents(e, $f), p.markModuleAsInstalled(e, hs));
  }
}, If = M({
  name: "h-scroll-container",
  props: {
    ...Qr,
    ...Xr,
    ...xr,
    ...ei,
    ...ti,
    ...ni,
    ...si,
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e, t) {
    const n = k(), s = k(), o = k(), r = k(), i = k();
    le([s, o], () => {
      n.value.registerBar("vertical", s.value, o.value);
    }), le([r, i], () => {
      n.value.registerBar("horizontal", r.value, i.value);
    });
    const a = (u, h) => {
      n.value.scrollTo(u, h);
    }, l = (u) => ({
      class: { "-hover": u.anyHover, "-dragging": u.anyDragging, "-is-hidden": u.hidden }
    });
    return {
      core: oi().as("div", l).props(["horizontal", "vertical", "autoHide", "autoHideDelay", "minimumSize", "containerClasses", "wrapperClasses"]).build(),
      scrollContainer: n,
      verticalTrack: s,
      verticalThumb: o,
      horizontalTrack: r,
      horizontalThumb: i,
      ...D(),
      scrollTo: a
    };
  }
});
function Cf(e, t, n, s, o, r) {
  const i = v("hr-scroll-container");
  return f(), I(i, F({
    ref: "scrollContainer",
    class: [e.css_root, `-color-${e.color}`]
  }, e.core.props, A(e.core.listeners)), {
    verticalBar: w((a) => [
      K(y("div", {
        ref: "verticalTrack",
        class: d([e.css_ec("track"), "-vertical", { "-hover": a.trackHover, "-dragging": a.dragging }])
      }, [
        y("div", {
          ref: "verticalThumb",
          class: d([e.css_ec("thumb"), { "-hover": a.thumbHover, "-dragging": a.dragging }]),
          style: W({ height: `${a.size}px`, transform: `translate(0, ${a.offset}px)` })
        }, null, 6)
      ], 2), [
        [J, a.visible]
      ])
    ]),
    horizontal: w((a) => [
      K(y("div", {
        ref: "horizontalTrack",
        class: d([e.css_ec("track"), "-horizontal", { "-hover": a.trackHover, "-dragging": a.dragging }])
      }, [
        y("div", {
          ref: "horizontalThumb",
          class: d([e.css_ec("thumb"), { "-hover": a.thumbHover, "-dragging": a.dragging }]),
          style: W({ height: `${a.size}px`, transform: `translate(0, ${a.offset}px)` })
        }, null, 6)
      ], 2), [
        [J, a.visible]
      ])
    ]),
    default: w(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Tf = /* @__PURE__ */ L(If, [["render", Cf]]), ps = "elementic-scroll-containers", Mf = {
  ScrollContainer: Tf
}, Of = {
  CoreScrollContainersInstall: ri
}, Do = {
  install: (e, t) => {
    p.isModuleInstalled(e, ps) || (p.installDependencies(e, Of, t), p.installComponents(e, Mf), p.markModuleAsInstalled(e, ps));
  }
}, Df = M({
  name: "h-select",
  props: {
    ...ii,
    ...ai,
    ...li,
    ...ci,
    ...ui,
    ...di,
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(""), r = V(() => [
      bn({
        padding: 8,
        apply(u) {
          Object.assign(u.elements.floating.style, {
            width: `${u.rects.reference.width}px`
          }), o.value = `${u.availableHeight}px`;
        }
      })
    ]), i = (u) => {
      u.outsideFloating && u.outsideReference && n.value.close();
    }, a = (u) => {
      u && u.component && u.component.vnode && u.component.vnode.el && u.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, l = (u) => ({
      class: { "-active": u.menuVisible, "-disabled": u.disabled }
    }), c = fi().as("div", l).props(["modelValue", "disabled", "hideOnSelect", "allowClear", "multiple", "compare"]).events(["update:modelValue", "focusedItemChanged"]).build();
    return {
      Icons: x,
      core: c,
      select: n,
      button: s,
      menuMaxHeight: o,
      floatingMiddleware: r,
      onClickOutside: i,
      onFocusedItemChanged: a,
      ...D()
    };
  }
}), Lf = ["disabled", "title", "onClick", "onKeydown"], Ef = ["onClick"], Vf = ["onKeydown"];
function Nf(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-select");
  return f(), I(c, F({
    ref: "select",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
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
            ne(N(u.selectedText), 1)
          ]) : T(e.$slots, "placeholder", { key: 1 }, () => [
            ne(N(e.placeholder), 1)
          ])
        ], 2),
        C(pe, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? O("", !0) : (f(), S("div", {
              key: 0,
              class: d([e.css_ec("icon")])
            }, [
              C(i, {
                icon: e.Icons.chevronDown,
                size: "16px"
              }, null, 8, ["icon"])
            ], 2))
          ]),
          _: 2
        }, 1024),
        C(pe, { name: "fade-fast" }, {
          default: w(() => [
            u.allowClear && u.menuVisible ? (f(), S("div", {
              key: 0,
              class: d([e.css_ec("clear-icon")]),
              title: "Clear",
              onClick: u.clearValue
            }, [
              C(i, {
                icon: e.Icons.close,
                size: "16px"
              }, null, 8, ["icon"])
            ], 10, Ef)) : O("", !0)
          ]),
          _: 2
        }, 1024)
      ], 42, Lf),
      C(l, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        transition: "fade-fast",
        keep: "",
        visible: u.menuVisible,
        placement: "bottom",
        middleware: e.floatingMiddleware,
        onClickOutside: e.onClickOutside,
        onHide: (h) => u.clearFocusedItem(),
        onTransitionStateChanged: u.onMenuTransitioning
      }, {
        default: w(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.menuMaxHeight })
          }, [
            C(a, null, {
              default: w(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, Vf)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onClickOutside", "onHide", "onTransitionStateChanged"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const Ff = /* @__PURE__ */ L(Df, [["render", Nf]]), _f = M({
  name: "h-select-item",
  props: {
    ...mi,
    ...hi,
    ...pi,
    icon: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = (o) => ({
      class: { "-selected": o.selected, "-focused": o.focused, "-disabled": o.disabled },
      onClick: o.onClick
    }), s = yi().as("div", n).props(["value", "label", "disabled"]).build();
    return {
      Icons: x,
      core: s,
      ...D()
    };
  }
});
function Pf(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("hr-select-item");
  return f(), I(a, F({
    tabindex: "-1",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (f(), I(i, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16"
        }, null, 8, ["class", "icon"])) : O("", !0),
        y("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ]),
      y("div", {
        class: d([e.css_ec("checkmark")])
      }, [
        C(pe, { name: "fade-fast" }, {
          default: w(() => [
            K(C(i, {
              icon: e.Icons.check,
              size: "16px"
            }, null, 8, ["icon"]), [
              [J, l.selected]
            ])
          ]),
          _: 2
        }, 1024)
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Af = /* @__PURE__ */ L(_f, [["render", Pf]]), Hf = M({
  name: "h-select-item-divider",
  setup(e, t) {
    const n = ue("select"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function zf(e, t, n, s, o, r) {
  return e.visible ? (f(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : O("", !0);
}
const Rf = /* @__PURE__ */ L(Hf, [["render", zf]]), Bf = M({
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
    const n = ue("select"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function Zf(e, t, n, s, o, r) {
  const i = v("h-icon");
  return e.visible ? (f(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (f(), I(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      y("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : O("", !0);
}
const Wf = /* @__PURE__ */ L(Bf, [["render", Zf]]), ys = "elementic-selects", qf = {
  Select: Ff,
  SelectItem: Af,
  SelectItemDivider: Rf,
  SelectItemHeader: Wf
}, jf = {
  CoreSelectsInstall: gi,
  FloatingInstall: rt,
  ScrollContainersInstall: Do
}, Uf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ys) || (p.installDependencies(e, jf, t), p.installComponents(e, qf), p.markModuleAsInstalled(e, ys));
  }
}, Yf = M({
  name: "h-slider",
  props: {
    ...vi,
    ...bi,
    ...wi,
    ...$i,
    ...Si,
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
    const n = k(), s = k(!1), o = V(() => n.value && e.showSteps ? n.value.steps : 1), r = V(() => {
      if (n.value) {
        let h = n.value.percentage;
        return `${Math.max(0, Math.min(100, h))}%`;
      } else
        return "0%";
    }), i = (h) => {
      e.disabled || (s.value = !0, h.preventDefault());
    }, a = (h) => {
      if (s.value) {
        const m = n.value.$el.getBoundingClientRect();
        let g = e.vertical ? 100 / m.height * (h.pageY - m.top) : 100 / m.width * (h.pageX - m.left);
        e.invert && (g = 100 - g);
        const $ = n.value.getValueFromPercentage(g);
        t.emit("update:modelValue", $), h.preventDefault();
      }
    }, l = (h) => {
      s.value = !1;
    }, c = (h) => {
      if (!e.disabled) {
        let m = e.vertical ? 100 / n.value.$el.clientHeight * h.offsetY : 100 / n.value.$el.clientWidth * h.offsetX;
        e.invert && (m = 100 - m);
        const g = n.value.getValueFromPercentage(m);
        t.emit("update:modelValue", g), h.preventDefault();
      }
    };
    return {
      core: ki().as("div").props(["modelValue", "disabled", "minimum", "maximum", "stepSize"]).build(),
      coreSlider: n,
      size: r,
      steps: o,
      handleMouseDown: i,
      handleMouseMove: a,
      handleMouseUp: l,
      handleClick: c,
      dragging: s,
      ...D()
    };
  }
});
function Gf(e, t, n, s, o, r) {
  const i = v("hr-slider"), a = Vo("document-event");
  return K((f(), I(i, F({
    ref: "coreSlider",
    class: [e.css_root, e.vertical ? "-vertical" : "-horizontal", { "-invert": e.invert, "-dragging": e.dragging, "-disabled": e.disabled }]
  }, e.core.props, A(e.core.listeners)), {
    default: w(() => [
      y("div", {
        class: d([e.css_ec("bar")]),
        onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
      }, [
        y("div", {
          class: d([e.css_ec("back")])
        }, [
          (f(!0), S(se, null, he(e.steps, (l) => (f(), S("div", {
            class: d([e.css_ec("step")])
          }, null, 2))), 256))
        ], 2),
        y("div", {
          class: d([e.css_ec("filler")]),
          style: W({ "--size": e.size })
        }, null, 6)
      ], 2),
      y("div", {
        class: d([e.css_ec("handle")]),
        style: W({ "--offset": e.size }),
        onMousedown: t[1] || (t[1] = (...l) => e.handleMouseDown && e.handleMouseDown(...l))
      }, null, 38)
    ]),
    _: 1
  }, 16, ["class"])), [
    [a, e.handleMouseUp, "mouseup"],
    [a, e.handleMouseMove, "mousemove"]
  ]);
}
const Kf = /* @__PURE__ */ L(Yf, [["render", Gf]]), gs = "elementic-sliders", Jf = {
  Slider: Kf
}, Qf = {
  CoreSlidersInstall: Ii
}, Xf = {
  install: (e, t) => {
    p.isModuleInstalled(e, gs) || (p.installDependencies(e, Qf, t), p.installComponents(e, Jf), p.markModuleAsInstalled(e, gs));
  }
}, xf = M({
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
function em(e, t, n, s, o, r) {
  return f(), S("div", {
    class: d([e.css_root, `-color-${e.color}`]),
    style: W({ width: e.size, height: e.size, "--border-thickness": e.thickness })
  }, null, 6);
}
const Lo = /* @__PURE__ */ L(xf, [["render", em]]), tm = M({
  name: "h-spinner-overlay",
  components: { HSpinner: Lo },
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
function nm(e, t, n, s, o, r) {
  const i = v("h-spinner");
  return f(), S("div", {
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
      C(i),
      e.label ? (f(), S("div", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : O("", !0)
    ], 2)
  ], 2);
}
const sm = /* @__PURE__ */ L(tm, [["render", nm]]), vs = "elementic-spinners", om = {
  Spinner: Lo,
  SpinnerOverlay: sm
}, rm = {}, im = {
  install: (e, t) => {
    p.isModuleInstalled(e, vs) || (p.installDependencies(e, rm, t), p.installComponents(e, om), p.markModuleAsInstalled(e, vs));
  }
}, am = M({
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
      Icons: x,
      onClick: n
    };
  }
});
function lm(e, t, n, s, o, r) {
  const i = v("h-icon");
  return f(), S("div", {
    class: d([e.css_root, { "-current": e.step.isCurrent, "-done": e.step.isDone, "-last": e.step.isLast, "-locked": e.step.isLocked }]),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    y("div", {
      class: d([e.css_ec("container")])
    }, [
      e.step.data.icon ? (f(), I(i, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.step.data.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      e.step.data.icon ? (f(), I(i, {
        key: 1,
        class: d([e.css_ec("done-icon")]),
        icon: e.Icons.check,
        size: "20px"
      }, null, 8, ["class", "icon"])) : O("", !0),
      e.step.data.label ? (f(), S("div", {
        key: 2,
        class: d([e.css_ec("label")])
      }, N(e.step.data.label), 3)) : O("", !0)
    ], 2)
  ], 2);
}
const cm = /* @__PURE__ */ L(am, [["render", lm]]), um = M({
  name: "h-steps-navigator",
  props: {
    ...Ci,
    ...Ti,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = V(() => e.steps.filter((m) => m.data.label).length > 0), r = k(0), i = k(0), a = V(() => e.vertical ? {
      top: `${i.value}px`,
      height: `${r.value}px`
    } : {
      left: `${i.value}px`,
      width: `${r.value}px`
    }), l = () => {
      if (s.value.length) {
        const m = s.value[0].$el;
        i.value = e.vertical ? m.offsetTop + m.offsetHeight : m.offsetLeft + m.offsetWidth;
        const g = s.value.find(($) => $.step.id === e.modelValue);
        g && (r.value = Math.max(0, (e.vertical ? g.$el.offsetTop : g.$el.offsetLeft) - i.value));
      }
    }, c = (m, g) => {
      g.id === e.modelValue && l();
    };
    Os(() => {
      s.value = [];
    }), vt(() => {
      l(), le(() => n.value.visibleSteps, () => Re(l));
    }), le(() => e.modelValue, l);
    const u = () => {
      n.value.nextStep();
    }, h = Mi().as("div").props(["modelValue", "steps"]).events(["update:modelValue"]).build();
    return {
      stepsNavigator: n,
      stepsRefs: s,
      setActiveStepRef: c,
      core: h,
      hasLabels: o,
      indicatorStyle: a,
      updateIndicator: l,
      nextStep: u,
      ...D()
    };
  }
});
function dm(e, t, n, s, o, r) {
  const i = v("h-step-item"), a = v("hr-steps-navigator");
  return f(), I(a, F({
    ref: "stepsNavigator",
    class: [e.css_root, { "-vertical": e.vertical, "-has-labels": e.hasLabels }]
  }, e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      (f(!0), S(se, null, he(l.visibleSteps, (c, u) => (f(), S(se, {
        key: c.id
      }, [
        C(i, {
          ref_for: !0,
          ref: (h) => e.stepsRefs[u] = h,
          step: c,
          onClick: (h) => l.onStepClick(c)
        }, null, 8, ["step", "onClick"]),
        u !== l.visibleSteps.length - 1 ? (f(), S("div", {
          key: `${c.id}-line`,
          class: d([e.css_ec("step-line")])
        }, null, 2)) : O("", !0)
      ], 64))), 128)),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": l.currentStep === null }]),
        style: W(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 1
  }, 16, ["class"]);
}
const fm = /* @__PURE__ */ L(um, [["render", dm]]), bs = "elementic-steps", mm = {
  StepItem: cm,
  StepsNavigator: fm
}, hm = {
  CoreStepsInstall: Oi
}, pm = {
  install: (e, t) => {
    p.isModuleInstalled(e, bs) || (p.installDependencies(e, hm, t), p.installComponents(e, mm), p.markModuleAsInstalled(e, bs));
  }
}, ym = M({
  name: "h-switch",
  props: {
    ...Es,
    ...Vs,
    ...Ns,
    ...Fs,
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
      core: _s().as("label", o).props(["modelValue", "value", "disabled", "visible"]).events(["update:modelValue"]).build(),
      hasFocus: s,
      ...n
    };
  }
}), gm = ["checked", "disabled", "onChange"];
function vm(e, t, n, s, o, r) {
  const i = v("hr-checkbox");
  return K((f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: w((a) => [
      e.$slots.leftText || e.leftText ? (f(), S("span", {
        key: 0,
        class: d([e.css_ec("left-label")])
      }, [
        T(e.$slots, "leftText", {}, () => [
          ne(N(e.leftText), 1)
        ])
      ], 2)) : O("", !0),
      y("div", {
        class: d([e.css_ec("container")])
      }, [
        y("input", {
          class: d([e.css_ec("back")]),
          checked: a.state,
          type: "checkbox",
          disabled: a.disabled,
          onChange: a.onChange,
          onFocus: t[0] || (t[0] = (l) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (l) => e.hasFocus = !1)
        }, null, 42, gm),
        y("span", {
          class: d([e.css_ec("back-inner")])
        }, null, 2),
        y("span", {
          class: d([e.css_ec("dot")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.rightText ? (f(), S("span", {
        key: 1,
        class: d([e.css_ec("right-label")])
      }, [
        T(e.$slots, "rightText", {}, () => [
          ne(N(e.rightText), 1)
        ])
      ], 2)) : O("", !0)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const bm = /* @__PURE__ */ L(ym, [["render", vm]]), ws = "elementic-switches", wm = {
  Switch: bm
}, $m = {
  CoreCheckboxInstall: Ps
}, Sm = {
  install: (e, t) => {
    p.isModuleInstalled(e, ws) || (p.installDependencies(e, $m, t), p.installComponents(e, wm), p.markModuleAsInstalled(e, ws));
  }
}, km = M({
  name: "h-tab-item",
  props: {
    ...Di,
    ...Li,
    label: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = k(), s = ue("updateIndicator"), o = ue("tabsNavigator"), r = je({
      id: e.id
    });
    vt(() => {
      r.ref = n.value.$el, o.addTabInstance(r);
    }), No(() => {
      o.removeTabInstance(r);
    }), Fo(() => {
      s();
    });
    const i = (l) => ({
      class: { "-active": l.active, "-disabled": l.disabled },
      onClick: l.onClick,
      onKeydown: (c) => {
        c.key === "Enter" && l.onClick();
      }
    });
    return {
      core: Ei().as("div", i).props(["id", "disabled"]).build(),
      tab: n,
      ...D()
    };
  }
});
function Im(e, t, n, s, o, r) {
  const i = v("hr-tab-item");
  return f(), I(i, F({
    ref: "tab",
    tabindex: "0",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners)), {
    default: w(() => [
      ne(N(e.label) + " ", 1)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Cm = /* @__PURE__ */ L(km, [["render", Im]]), Tm = M({
  name: "h-tabs-navigator",
  props: {
    ...Vi,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = (m) => {
      s.value.push(m);
    }, r = (m) => {
      s.value = Fi.remove(s.value, m);
    }, i = k(0), a = k(0), l = V(() => e.vertical ? {
      transform: `translate(0, ${a.value}px)`,
      height: `${i.value}px`
    } : {
      transform: `translate(${a.value}px, 0)`,
      width: `${i.value}px`
    }), c = () => {
      if (n.value && n.value.activeTab) {
        const m = s.value.find((g) => g.id === n.value.activeTab.id);
        m && (a.value = e.vertical ? m.ref.offsetTop : m.ref.offsetLeft, i.value = e.vertical ? m.ref.offsetHeight : m.ref.offsetWidth);
      }
    }, u = (m) => {
      n.value = m, le(() => n.value ? n.value.activeTab : null, c);
    };
    vt(() => c()), ft("updateIndicator", c), ft("tabsNavigator", {
      addTabInstance: o,
      removeTabInstance: r
    });
    const h = Ni().as("div").props(["modelValue"]).events(["update:modelValue"]).build();
    return {
      setNavigator: u,
      core: h,
      indicatorStyle: l,
      updateIndicator: c,
      ...D()
    };
  }
});
function Mm(e, t, n, s, o, r) {
  const i = v("hr-tabs-navigator");
  return f(), I(i, F({
    ref: (a) => e.setNavigator(a),
    class: [e.css_root, { "-vertical": e.vertical }]
  }, e.core.props, A(e.core.listeners)), {
    default: w((a) => [
      T(e.$slots, "default"),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": a.activeTab === null }]),
        style: W(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Om = /* @__PURE__ */ L(Tm, [["render", Mm]]), $s = "elementic-tabs", Dm = {
  TabItem: Cm,
  TabsNavigator: Om
}, Lm = {
  CoreTabsInstall: _i
}, Em = {
  install: (e, t) => {
    p.isModuleInstalled(e, $s) || (p.installDependencies(e, Lm, t), p.installComponents(e, Dm), p.markModuleAsInstalled(e, $s));
  }
}, Vm = /* @__PURE__ */ M({
  name: "h-table-column-header",
  props: {
    column: {
      type: Object
    },
    sort: {
      type: Object,
      default: null
    }
  },
  setup(e, t) {
    const n = ue("table"), s = V(() => e.sort.key === null ? "-unsorted" : e.sort.key === e.column.property ? `-sorting-${e.sort.direction}` : null), o = () => {
      n.setSorting(e.column.property);
    }, r = D(), i = () => C("div", {
      onClick: o,
      class: [r.css_ec("sorting-icon"), s.value]
    }, [C(v("h-icon"), {
      class: [r.css_ec("sort-up")],
      icon: "chevron-up",
      size: "16px"
    }, null), C(v("h-icon"), {
      class: [r.css_ec("sort-down")],
      icon: "chevron-down",
      size: "16px"
    }, null)]);
    return () => C("th", {
      class: [r.css_root.value, {
        "-sortable": e.column.sortable
      }]
    }, [C("div", {
      class: [r.css_ec("container")]
    }, [C("div", {
      class: [r.css_ec("content")]
    }, [e.column.headerTemplate ? e.column.headerTemplate({
      data: e.column.data
    }) : e.column.data.label]), e.column.sortable ? i() : null])]);
  }
}), Nm = /* @__PURE__ */ M({
  name: "h-table-row",
  props: {
    column: {
      type: Pi,
      required: !0
    },
    row: {
      type: Ai,
      required: !0
    }
  },
  setup(e, t) {
    const n = V(() => [{
      "-minimum-width": e.column.data.width === "minimum"
    }]), s = e.column.data.width !== "minimum" ? e.column.data.width : null, o = () => C("td", {
      class: [n.value],
      style: {
        width: s
      }
    }, [e.column.template({
      row: e.row.data,
      rowId: e.row.id,
      isSelected: e.row.selected,
      rowSelectable: e.row.selectable
    })]), r = () => C("td", {
      class: [n.value],
      style: {
        width: s
      }
    }, [e.row.getValue(e.column.property, e.column.formatter)]);
    return () => e.column.template ? o() : r();
  }
}), Fm = M({
  name: "h-table-row",
  components: { HTableCell: Nm },
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
  setup(e, t) {
    const n = V(() => typeof e.classes == "function" ? e.classes(e.row.data) : e.classes), s = (r) => ({
      onClick: r.onClick
    });
    return {
      core: Hi().as("tr", s).props(["columns", "row"]).events(["rowClick"]).build(),
      rowClasses: n,
      ...D()
    };
  }
});
function _m(e, t, n, s, o, r) {
  const i = v("h-table-cell"), a = v("hr-table-row");
  return f(), I(a, F({
    class: [e.css_root, { "-selected": e.row.selected }, e.rowClasses]
  }, e.core.props, A(e.core.listeners)), {
    default: w((l) => [
      (f(!0), S(se, null, he(e.columns, (c) => (f(), I(i, {
        key: c.property,
        row: e.row,
        column: c
      }, null, 8, ["row", "column"]))), 128))
    ]),
    _: 1
  }, 16, ["class"]);
}
const Pm = /* @__PURE__ */ L(Fm, [["render", _m]]), Am = M({
  name: "h-table",
  components: { HTableRow: Pm, HTableColumnHeader: Vm },
  props: {
    ...zi,
    ...Ri,
    ...Bi,
    ...Zi,
    ...Wi,
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
  setup(e, t) {
    return {
      core: qi().as("table").props(["data", "rowKey", "selectable", "sort", "selectedRows"]).events(["update:sort", "update:selectedRows"]).build(),
      ...D()
    };
  }
}), Hm = {
  key: 0,
  class: "-no-hover"
}, zm = ["colspan"], Rm = { key: 0 };
function Bm(e, t, n, s, o, r) {
  const i = v("h-table-column-header"), a = v("h-table-row"), l = v("h-checkbox"), c = v("h-table-column"), u = v("hr-table");
  return f(), I(u, F({
    class: [e.css_root, { "-striped": e.striped, "-hoverable": e.hover }]
  }, e.core.props, A(e.core.listeners)), {
    default: w((h) => [
      y("thead", null, [
        (f(!0), S(se, null, he(h.orderedColumns, (m) => (f(), I(i, {
          key: m.property,
          column: m,
          sort: e.sort
        }, null, 8, ["column", "sort"]))), 128))
      ]),
      y("tbody", null, [
        (f(!0), S(se, null, he(h.rows, (m) => (f(), I(a, {
          key: m.data[e.rowKey],
          row: m,
          columns: h.orderedColumns,
          classes: e.rowClasses
        }, null, 8, ["row", "columns", "classes"]))), 128)),
        e.$slots["no-items"] && h.rows.length === 0 ? (f(), S("tr", Hm, [
          y("td", {
            colspan: h.orderedColumns.length
          }, [
            T(e.$slots, "no-items")
          ], 8, zm)
        ])) : O("", !0)
      ]),
      e.$slots.footer ? (f(), S("tfoot", Rm, [
        T(e.$slots, "footer", {
          rows: h.rows
        })
      ])) : O("", !0),
      e.selectable && h.anySelectable ? (f(), I(c, {
        key: 1,
        width: "minimum",
        property: "__sortable",
        sortable: !1,
        order: -1
      }, {
        header: w(() => [
          C(l, {
            "model-value": h.allRowsSelected,
            indeterminate: !h.allRowsSelected && h.anyRowsSelected,
            "onUpdate:modelValue": h.toggleAllSelection
          }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])
        ]),
        default: w(({ rowId: m, isSelected: g, rowSelectable: $ }) => [
          C(pe, { name: "fade-fast" }, {
            default: w(() => [
              C(l, {
                visible: $,
                "model-value": g,
                "onUpdate:modelValue": (z) => h.setRowSelectionState(m, z)
              }, null, 8, ["visible", "model-value", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024)) : O("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Zm = /* @__PURE__ */ L(Am, [["render", Bm]]), Wm = M({
  name: "h-table-column",
  props: {
    ...ji,
    ...Ui,
    ...Yi,
    ...Gi,
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
  setup(e, t) {
    const n = je({
      label: V(() => e.label),
      width: V(() => e.width)
    });
    return {
      core: Ki(n, ["property", "formatter", "sortable", "order"])
    };
  }
});
function qm(e, t, n, s, o, r) {
  const i = v("hr-table-column");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: w(() => [
      T(e.$slots, "default"),
      T(e.$slots, "header")
    ]),
    _: 3
  }, 16);
}
const jm = /* @__PURE__ */ L(Wm, [["render", qm]]), Ss = "elementic-tables", Um = {
  Table: Zm,
  TableColumn: jm
}, Ym = {
  CoreTablesInstall: Ji,
  CheckboxInstall: Ws
}, Gm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ss) || (p.installDependencies(e, Ym, t), p.installComponents(e, Um), p.markModuleAsInstalled(e, Ss));
  }
}, ks = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, Km = M({
  name: "h-tooltip",
  props: {
    ...Zt("top"),
    ...Qi,
    ...Xi,
    ...xi,
    ...ea,
    content: {
      type: String
    },
    display: {
      type: String,
      default: "inline-block"
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k(ks[e.placement]), o = k([
      kt(4)
    ]), r = (a) => {
      const l = a.placement.split("-")[0];
      s.value = ks[l], t.emit("computedPosition", a);
    };
    return {
      core: ta(n).props(["modelValue", "trigger"]).events(["update:modelValue"]).build(),
      reference: n,
      floatingMiddleware: o,
      onComputedPosition: r,
      transition: s,
      ...D()
    };
  }
}), Jm = ["innerHTML"];
function Qm(e, t, n, s, o, r) {
  const i = v("h-icon"), a = v("h-floating"), l = v("hr-tooltip");
  return f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: w((c) => [
      y("div", {
        ref: "reference",
        style: W({ display: e.display })
      }, [
        T(e.$slots, "default")
      ], 4),
      C(a, {
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
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: w(() => [
          T(e.$slots, "content", {}, () => [
            y("span", { innerHTML: e.content }, null, 8, Jm)
          ])
        ]),
        _: 2
      }, 1032, ["class", "reference", "transition", "visible", "placement", "middleware", "onComputedPosition"])
    ]),
    _: 3
  }, 16);
}
const Xm = /* @__PURE__ */ L(Km, [["render", Qm]]), xm = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  data: '<polygon points="0,16 16,16 8,8"/>'
}, Is = "elementic-tooltips", eh = {
  Tooltip: Xm
}, th = {
  CoreTooltipsInstall: na,
  FloatingInstall: rt
}, nh = {
  install: (e, t) => {
    p.isModuleInstalled(e, Is) || (p.installDependencies(e, th, t), p.installComponents(e, eh), be.register("tooltip-arrow", xm), p.markModuleAsInstalled(e, Is));
  }
}, sh = M({
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
    return Rs.setupNotification(), {};
  }
});
function oh(e, t, n, s, o, r) {
  const i = v("h-notification");
  return f(), I(i, {
    title: e.title,
    color: e.color
  }, {
    default: w(() => [
      ne(N(e.text), 1)
    ]),
    _: 1
  }, 8, ["title", "color"]);
}
const ch = /* @__PURE__ */ L(sh, [["render", oh]]), rh = {
  AlertsInstall: Ia,
  ButtonsInstall: Ba,
  CheckboxesInstall: Ws,
  CollapsesInstall: ml,
  DatePickersInstall: Pu,
  DialogsInstall: Wu,
  DrawersInstall: Ju,
  DropdownsInstall: $d,
  FloatingInstall: rt,
  FragmentsInstall: Ld,
  IconsInstall: Wt,
  InputsInstall: Oo,
  ListsInstall: Pd,
  NotificationsInstall: Yd,
  PaginatorsInstall: sf,
  PopoversInstall: uf,
  ProgressBarsInstall: yf,
  RadioButtonsInstall: kf,
  ScrollContainersInstall: Do,
  SelectsInstall: Uf,
  SlidersInstall: Xf,
  SpinnersInstall: im,
  StepsInstall: pm,
  SwitchesInstall: Sm,
  TabsInstall: Em,
  TablesInstall: Gm,
  TooltipsInstall: nh
}, uh = {
  install: (e, t) => {
    Object.values(rh).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  mh as DialogManager,
  lh as IconRegistry,
  hh as NotificationManager,
  ch as SimpleNotification,
  ph as coreFloatingArrowReference,
  yh as createCoreStepItem,
  uh as default
};
