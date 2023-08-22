import { getCurrentInstance as Bt, computed as V, defineComponent as O, resolveComponent as v, openBlock as m, createElementBlock as S, normalizeClass as d, createVNode as C, createCommentVNode as M, createElementVNode as g, toDisplayString as N, createBlock as I, withDirectives as K, mergeProps as _, toHandlers as A, withCtx as $, renderSlot as T, vShow as J, createTextVNode as se, normalizeStyle as W, ref as k, withKeys as Vs, Transition as pe, resolveDynamicComponent as Ns, watch as ee, Fragment as oe, renderList as he, onBeforeUpdate as _s, getCurrentScope as Ro, onScopeDispose as Bo, unref as Zo, onMounted as st, inject as ie, reactive as je, withModifiers as Tn, provide as ht, nextTick as Re, h as On, TransitionGroup as Ps, resolveDirective as Wo, onUnmounted as qo, onUpdated as jo } from "vue";
import { StringHelper as Fs, ModuleHelper as p, coreButtonDisabledProp as Zt, coreButtonLoadingProp as Wt, coreButtonVisibleProp as qt, coreButtonSetup as jt, CoreButtonsInstall as Uo, coreCheckboxDisabledProp as As, coreCheckboxIndeterminateProp as Yo, coreCheckboxVisibleProp as Hs, coreCheckboxModelValueProp as zs, coreCheckboxValueProp as Rs, coreCheckboxSetup as Bs, CoreCheckboxInstall as Zs, coreCollapseAccordionProp as Go, coreCollapseModelValueProp as Ko, coreCollapseSetup as Jo, coreCollapseItemIdProp as Qo, coreCollapseItemSetup as Xo, coreInlineCollapseModelValueProp as xo, coreCollapseInlineSetup as er, CoreCollapsesInstall as tr, coreDatePickerModelValueProp as nr, coreDatePickerDisabledProp as sr, coreDatePickerVisibleProp as or, coreDatePickerFirstDayOfWeekProp as rr, coreDatePickerSetup as ir, splitPlacement as Be, coreInputDisabledProp as ar, coreInputReadonlyProp as lr, coreInputTypeProp as cr, coreInputModelValueProp as ur, coreInputModelModifiersProp as dr, coreInputSetup as fr, coreAutocompleteDisabledProp as mr, coreAutocompleteItemsProp as hr, coreAutocompleteModelValueProp as pr, coreAutocompleteModelModifiersProp as yr, coreAutocompleteSetup as gr, CoreInputsInstall as vr, CoreDatePickersInstall as br, coreDialogVisibleProp as Ws, coreDialogSetup as qs, coreDialogWrapper as wr, CoreDialogsInstall as js, coreDropdownDisabledProp as $r, coreDropdownVisibleProp as Sr, coreDropdownSplitButtonProp as kr, coreDropdownHideOnClickProp as Ir, coreDropdownSetup as Cr, coreDropdownItemDisabledProp as Tr, coreDropdownItemLabelProp as Or, coreDropdownItemSetup as Mr, coreComponentAsProp as Dr, coreFloatingReferenceProp as Er, coreFloatingVisibleProp as Lr, coreFloatingMiddlewareProp as Vr, coreFloatingTransitionProp as Nr, coreFloatingPlacementProp as Ut, coreFloatingArrowReference as _r, coreFloatingSetup as Pr, CoreFloatingInstall as Fr, CoreDropdownsInstall as Ar, coreFragmentContainerActiveProp as Hr, coreFragmentContainerSetup as zr, CoreFragmentsInstall as Rr, coreNotificationVisibleProp as Br, coreNotificationSetup as Zr, coreNotificationWrapperNameProp as Wr, coreNotificationWrapperSetup as qr, NotificationManager as Us, CoreNotificationsInstall as jr, corePaginatorModelValueProp as Ur, corePaginatorPageSizeProp as Yr, corePaginatorCountProp as Gr, corePaginatorDeltaProp as Kr, corePaginatorSetup as Jr, CorePaginatorsInstall as Qr, coreProgressBarValueProp as Xr, coreProgressBarMinimumProp as xr, coreProgressBarMaximumProp as ei, coreProgressBarSetup as ti, CoreProgressBarsInstall as ni, coreRadioButtonDisabledProp as si, coreRadioButtonModelValueProp as oi, coreRadioButtonValueProp as ri, coreRadioButtonSetup as ii, CoreRadioButtonsInstall as ai, coreScrollContainerHorizontalProp as li, coreScrollContainerVerticalProp as ci, coreScrollContainerAutoHideProp as ui, coreScrollContainerAutoHideDelayProp as di, coreScrollContainerMinimumSizeProp as fi, coreScrollContainerContainerClassesProp as mi, coreScrollContainerWrapperClassesProp as hi, coreScrollContainerSetup as pi, CoreScrollContainersInstall as yi, coreSelectDisabledProp as gi, coreSelectAllowClearProp as vi, coreSelectHideOnSelectProp as bi, coreSelectMultipleProp as wi, coreSelectModelValueProp as $i, coreSelectCompareProp as Si, coreSelectSetup as ki, coreSelectItemDisabledProp as Ii, coreSelectItemValueProp as Ci, coreSelectItemLabelProp as Ti, coreSelectItemSetup as Oi, CoreSelectsInstall as Mi, coreSliderModelValueProp as Di, coreSliderDisabledProp as Ei, coreSliderMaximumProp as Li, coreSliderMinimumProp as Vi, coreSliderStepSizeProp as Ni, coreSliderSetup as _i, CoreSlidersInstall as Pi, coreStepsNavigatorModelValueProp as Fi, coreStepsNavigatorStepsProp as Ai, coreStepsNavigatorSetup as Hi, CoreStepsInstall as zi, coreTabItemIdProp as Ri, coreTabItemIdDisabledProp as Bi, coreTabItemSetup as Zi, coreTabsNavigatorModelValueProp as Wi, coreTabsNavigatorSetup as qi, ArrayHelper as ji, CoreTabsInstall as Ui, CoreTableColumn as Yi, CoreTableRow as Gi, coreTableRowSetup as Ki, coreTableDataProp as Ji, coreTableRowKeyProp as Qi, coreTableSelectableProp as Xi, coreTableSelectedRowsProp as xi, coreTableSortProp as ea, coreTableSetup as ta, coreTableColumnPropertyProp as na, coreTableColumnFormatterProp as sa, coreTableColumnSortableProp as oa, coreTableColumnOrderProp as ra, coreTableColumnSetup as ia, CoreTablesInstall as aa, coreTooltipModelValueProp as la, coreTooltipTriggerProp as ca, coreTooltipShowDelayProp as ua, coreTooltipHideDelayProp as da, coreTooltipSetup as fa, CoreTooltipsInstall as ma } from "@hyrioo/hyrnatic-ui-core";
import { DialogManager as _h, NotificationManager as Ph, coreFloatingArrowReference as Fh, createCoreStepItem as Ah } from "@hyrioo/hyrnatic-ui-core";
const D = () => {
  const e = Bt(), t = V(() => e ? e.type.name : null);
  return {
    css_root: t,
    css_ec: (s) => `${t.value}__${s}`
  };
};
var ha = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", pa = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", ya = "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z", ga = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", va = "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z", ba = "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z", wa = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", $a = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", Sa = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", ka = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", Ia = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", Ca = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z", Ta = "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z", Oa = "M19,13H5V11H19V13Z", Ma = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
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
const be = {
  register: Ys,
  registerMDI: Gs,
  icons: $t
}, Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be,
  icons: $t,
  register: Ys,
  registerMDI: Gs
}, Symbol.toStringTag, { value: "Module" })), x = {
  arrowLeft: ha,
  arrowRight: pa,
  calendarMonth: ya,
  check: ga,
  chevronDoubleLeft: va,
  chevronDoubleRight: ba,
  chevronDown: wa,
  chevronLeft: $a,
  chevronRight: Sa,
  chevronUp: ka,
  close: Ia,
  dotsHorizontal: Ca,
  loading: Ta,
  minus: Oa,
  plus: Ma
};
Object.keys(x).forEach((e) => {
  const t = Fs.kebabize(e);
  be.registerMDI(t, x[e]), x[e] = t;
});
const Da = O({
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
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ea = { key: 1 };
function La(e, t, n, s, o, i) {
  const r = v("h-icon");
  return m(), S("div", {
    class: d([e.css_root, `-styling-${e.styling}`])
  }, [
    e.icon ? (m(), S("div", {
      key: 0,
      class: d([e.css_ec("icon")])
    }, [
      C(r, {
        icon: e.icon,
        size: e.description ? "24px" : "16px"
      }, null, 8, ["icon", "size"])
    ], 2)) : M("", !0),
    g("div", {
      class: d([e.css_ec("container")])
    }, [
      g("div", {
        class: d([e.css_ec("title")])
      }, N(e.title), 3),
      e.description ? (m(), S("div", {
        key: 0,
        class: d([e.css_ec("description")])
      }, N(e.description), 3)) : M("", !0)
    ], 2),
    e.showCloseButton || e.closeText ? (m(), S("div", {
      key: 1,
      class: d([e.css_ec("close")]),
      onClick: t[0] || (t[0] = (...a) => e.onClose && e.onClose(...a))
    }, [
      e.showCloseButton ? (m(), I(r, {
        key: 0,
        icon: e.Icons.close,
        size: "16px"
      }, null, 8, ["icon"])) : e.closeText ? (m(), S("span", Ea, N(e.closeText), 1)) : M("", !0)
    ], 2)) : M("", !0)
  ], 2);
}
const Va = /* @__PURE__ */ E(Da, [["render", La]]), Mn = "elementic-alerts", Na = {
  Alert: Va
}, _a = {}, Pa = {
  install: (e, t) => {
    p.isModuleInstalled(e, Mn) || (p.installDependencies(e, _a, t), p.installComponents(e, Na), p.markModuleAsInstalled(e, Mn));
  }
}, Fa = /* @__PURE__ */ O({
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
    const n = D(), s = V(() => !t.slots.default && !e.label), o = (r) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, {
        "-loading": r.loading,
        "-icon-only": s.value,
        "-has-icon": e.icon,
        "-rounded": e.rounded
      }],
      disabled: r.disabled,
      onClick: r.onClick,
      type: e.type
    }), i = jt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: i,
      ...n
    };
  }
});
function Aa(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-button");
  return K((m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      g("span", {
        class: d([e.css_ec("content")])
      }, [
        e.icon ? (m(), I(r, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16px"
        }, null, 8, ["class", "icon"])) : M("", !0),
        g("div", {
          class: d([e.css_ec("loading-container")])
        }, [
          g("div", {
            class: d([e.css_ec("loading-spinner")])
          }, null, 2)
        ], 2),
        T(e.$slots, "default", {}, () => [
          e.$slots.default || e.label ? (m(), S("span", {
            key: 0,
            class: d([e.css_ec("text")])
          }, N(e.label), 3)) : M("", !0)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const Ha = /* @__PURE__ */ E(Fa, [["render", Aa]]), za = O({
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
    const n = D(), s = V(() => ({
      small: "12px",
      normal: "16px",
      large: "24px"
    })[e.size]), o = (r) => ({
      class: [n.css_root.value, `-styling-${e.styling}`, `-color-${e.color}`, `-size-${e.size}`, { "-loading": r.loading, "-rounded": e.rounded }],
      disabled: r.disabled,
      onClick: r.onClick,
      type: e.type
    }), i = jt().as("button", o).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: i,
      iconSize: s,
      ...D()
    };
  }
});
function Ra(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-button");
  return K((m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      g("span", {
        class: d([e.css_ec("content")])
      }, [
        C(r, _({
          class: [e.css_ec("icon")],
          icon: e.icon,
          size: e.iconSize
        }, e.iconOptions), null, 16, ["class", "icon", "size"]),
        g("div", {
          class: d([e.css_ec("loading-container")])
        }, [
          g("div", {
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
const Ba = /* @__PURE__ */ E(za, [["render", Ra]]), Za = /* @__PURE__ */ O({
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
    const n = D(), s = (i) => ({
      class: [n.css_root.value, `-color-${e.color}`, `-size-${e.size}`, {
        "-loading": i.loading
      }],
      disabled: i.disabled,
      onClick: i.onClick,
      type: e.type
    }), o = jt().as("button", s).props(["disabled", "loading", "visible"]).events(["click"]).build();
    return {
      Icons: x,
      core: o,
      ...n
    };
  }
});
function Wa(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-button");
  return K((m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      C(r, {
        class: d([e.css_ec("loading-icon")]),
        icon: e.Icons.loading,
        size: "16px"
      }, null, 8, ["class", "icon"]),
      g("span", {
        class: d([e.css_ec("text")])
      }, [
        T(e.$slots, "default", {}, () => [
          se(N(e.label), 1)
        ])
      ], 2)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const qa = /* @__PURE__ */ E(Za, [["render", Wa]]), ja = O({
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
      return c.replace(u, (f, y, w) => y === "fill" || y === "stroke" ? "" : y === "style" ? (w = w.replace(h, (z, R) => R === "fill" || R === "stroke" ? "" : z), w.length !== 0 ? `${y}="${w}"` : "") : f);
    }, o = (c, u, h) => Array.isArray(u) ? u.length - 1 >= h ? `${c}="${n(u[h])}"` : "" : `${c}="${n(u)}"`, i = (c, u, h) => {
      const f = /<(path|rect|circle|polygon|line|polyline|ellipse).*?>/gi;
      let y = 0;
      return c.replace(f, (w, z) => {
        const R = o("fill", h, y), Q = o("stroke", u, y);
        let G = s(w);
        return G = `<${z} ${R} ${Q} ${G.substr(z.length + 1)}`, y++, G;
      });
    }, r = V(() => {
      const c = e.strokes ? e.strokes : [], u = e.fills ? e.fills : [];
      return i(be.icons[e.icon].data, c, u);
    }), a = V(() => be.icons[e.icon] ? be.icons[e.icon].viewBox : (console.warn(`No icon has been registered with the key "${e.icon}"`), "")), l = V(() => {
      const c = {};
      return c.width = e.width || e.size || be.icons[e.icon].width, c.height = e.height || e.size || be.icons[e.icon].height, isFinite(c.width) && (c.width = `${c.width}px`), isFinite(c.height) && (c.height = `${c.height}px`), c;
    });
    return {
      content: r,
      viewBox: a,
      style: l,
      ...D()
    };
  }
}), Ua = ["viewBox", "innerHTML"];
function Ya(e, t, n, s, o, i) {
  return m(), S("svg", {
    class: d([e.css_root, { "-spin": e.spin }]),
    viewBox: e.viewBox,
    style: W(e.style),
    innerHTML: e.content
  }, null, 14, Ua);
}
const Ga = /* @__PURE__ */ E(ja, [["render", Ya]]), Dn = "elementic-icons", Ka = {
  Icon: Ga
}, Yt = {
  install: (e, t) => {
    p.isModuleInstalled(e, Dn) || (p.installComponents(e, Ka), p.markModuleAsInstalled(e, Dn));
  }
}, En = "elementic-buttons", Ja = {
  Button: Ha,
  IconButton: Ba,
  LinkButton: qa
}, Qa = {
  CoreButtonsInstall: Uo,
  IconInstall: Yt
}, Xa = {
  install: (e, t) => {
    p.isModuleInstalled(e, En) || (p.installDependencies(e, Qa, t), p.installComponents(e, Ja), p.markModuleAsInstalled(e, En));
  }
}, xa = O({
  name: "h-checkbox",
  props: {
    ...As,
    ...Yo,
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
    const n = D(), s = k(!1), o = (r) => ({
      class: [n.css_root.value, {
        "-focus": s.value,
        "-bordered": e.bordered,
        "-checked": r.state,
        "-indeterminate": r.indeterminate,
        "-disabled": r.disabled
      }]
    }), i = Bs().as("label", o).props(["modelValue", "value", "indeterminate", "disabled", "visible"]).events(["update:modelValue"]).build();
    return {
      Icons: x,
      CheckboxIcons: dt,
      asProps: o,
      core: i,
      hasFocus: s,
      ...n
    };
  }
}), el = ["checked", "disabled", "onChange"];
function tl(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-checkbox");
  return K((m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      g("span", {
        class: d([e.css_ec("container")])
      }, [
        g("input", {
          class: d([e.css_ec("input")]),
          checked: l.state,
          type: "checkbox",
          disabled: l.disabled,
          onChange: l.onChange,
          onFocus: t[0] || (t[0] = (c) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (c) => e.hasFocus = !1)
        }, null, 42, el),
        K(C(r, {
          class: d([e.css_ec("check-icon")]),
          icon: e.CheckboxIcons.checkStroke,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [J, !l.indeterminate]
        ]),
        K(C(r, {
          class: d([e.css_ec("indeterminate-icon")]),
          icon: e.Icons.minus,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [J, l.indeterminate]
        ])
      ], 2),
      e.$slots.default || e.label ? (m(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          se(N(e.label), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const nl = /* @__PURE__ */ E(xa, [["render", tl]]), sl = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  data: '<polyline points="4.2,12.8 9,17.6 20.3,6.3 "/>'
}, Ln = "elementic-checkboxes", ol = {
  Checkbox: nl
}, rl = {
  CoreCheckboxInstall: Zs
}, dt = {
  checkStroke: sl
}, Ks = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ln) || (p.installDependencies(e, rl, t), p.installComponents(e, ol), Object.keys(dt).forEach((n) => {
      const s = Fs.kebabize(n);
      be.register(s, dt[n]), dt[n] = s;
    }), p.markModuleAsInstalled(e, Ln));
  }
}, il = O({
  name: "h-collapse",
  props: {
    ...Go,
    ...Ko
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = D(), s = () => ({
      class: [n.css_root.value]
    });
    return {
      core: Jo().as("div", s).props(["modelValue", "accordion"]).events(["update:modelValue"]).build()
    };
  }
});
function al(e, t, n, s, o, i) {
  const r = v("hr-collapse");
  return m(), I(r, _(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const ll = /* @__PURE__ */ E(il, [["render", al]]), cl = O({
  name: "h-collapse-item",
  props: {
    ...Qo,
    header: {
      type: String
    }
  },
  setup(e, t) {
    const n = D(), s = (i) => ({
      class: [n.css_root.value, {
        "-expanded": i.expanded
      }]
    }), o = Xo().as("div", s).props(["id"]).build();
    return {
      Icons: x,
      core: o,
      ...n
    };
  }
}), ul = ["onClick", "onKeydown"];
function dl(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-grow-transition"), l = v("hr-collapse-item");
  return m(), I(l, _(e.core.props, A(e.core.listeners)), {
    default: $((c) => [
      g("div", {
        tabindex: "0",
        class: d([e.css_ec("header")]),
        onClick: c.onClick,
        onKeydown: Vs(c.onClick, ["enter"])
      }, [
        T(e.$slots, "header", {}, () => [
          g("span", {
            class: d([e.css_ec("header-text")])
          }, N(e.header), 3)
        ]),
        g("div", {
          class: d([e.css_ec("expand-icon")])
        }, [
          C(pe, { name: "fade-medium" }, {
            default: $(() => [
              c.expanded ? (m(), I(r, {
                key: "contract",
                icon: e.Icons.minus,
                size: "16px"
              }, null, 8, ["icon"])) : (m(), I(r, {
                key: "expand",
                icon: e.Icons.plus,
                size: "16px"
              }, null, 8, ["icon"]))
            ]),
            _: 2
          }, 1024)
        ], 2)
      ], 42, ul),
      C(a, null, {
        default: $(() => [
          K(g("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            g("div", {
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
const fl = /* @__PURE__ */ E(cl, [["render", dl]]), ml = O({
  name: "h-inline-collapse",
  props: {
    ...xo,
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
      core: er().as("div", s).props(["modelValue"]).build(),
      ...n
    };
  }
}), hl = ["onClick", "onKeydown"];
function pl(e, t, n, s, o, i) {
  const r = v("hr-inline-collapse");
  return m(), I(r, _(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      g("div", {
        tabindex: "0",
        class: d([e.css_ec("toggle-line"), `-align-${e.textAlign}`]),
        onClick: a.onClick,
        onKeydown: Vs(a.onClick, ["enter"])
      }, [
        g("div", {
          class: d([e.css_ec("left-filler")])
        }, null, 2),
        g("div", {
          class: d([e.css_ec("toggle-text")])
        }, N(a.expanded ? e.collapseText : e.expandText), 3),
        g("div", {
          class: d([e.css_ec("right-filler")])
        }, null, 2)
      ], 42, hl),
      (m(), I(Ns(e.animate ? "h-grow-transition" : "div"), null, {
        default: $(() => [
          K(g("div", {
            class: d([e.css_ec("expanded-content")])
          }, [
            g("div", {
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
const yl = /* @__PURE__ */ E(ml, [["render", pl]]), gl = O({
  name: "h-grow-transition",
  setup(e, t) {
    return {
      beforeEnter: (r) => {
        const a = r.getBoundingClientRect();
        r.style.removeProperty("display"), r.style.removeProperty("height");
        const l = r.getBoundingClientRect();
        r.style.height = `${a.height}px`, setTimeout(() => {
          r.style.height = `${l.height}px`;
        }, 10);
      },
      afterEnter: (r) => {
        r.style.removeProperty("height");
      },
      beforeLeave: (r) => {
        const a = r.getBoundingClientRect();
        r.style.height = `${a.height}px`, setTimeout(() => {
          r.style.height = "0px";
        }, 10);
      },
      afterLeave: (r) => {
        r.style.removeProperty("height");
      }
    };
  }
});
function vl(e, t, n, s, o, i) {
  return m(), I(pe, {
    name: "grow",
    onBeforeEnter: e.beforeEnter,
    onAfterEnter: e.afterEnter,
    onBeforeLeave: e.beforeLeave,
    onAfterLeave: e.afterLeave
  }, {
    default: $(() => [
      T(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]);
}
const bl = /* @__PURE__ */ E(gl, [["render", vl], ["__scopeId", "data-v-7765f9ec"]]), Vn = "elementic-transitions", wl = {
  Grow: bl
}, $l = {
  install: (e, t) => {
    p.isModuleInstalled(e, Vn) || (p.installComponents(e, wl), p.markModuleAsInstalled(e, Vn));
  }
}, Nn = "elementic-collapses", Sl = {
  Collapse: ll,
  CollapseItem: fl,
  InlineCollapse: yl
}, kl = {
  CoreCollapsesInstall: tr,
  TransitionsInstall: $l
}, Il = {
  install: (e, t) => {
    p.isModuleInstalled(e, Nn) || (p.installDependencies(e, kl, t), p.installComponents(e, Sl), p.markModuleAsInstalled(e, Nn));
  }
};
class Ee extends Error {
}
class Cl extends Ee {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class Tl extends Ee {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class Ol extends Ee {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class xe extends Ee {
}
class Js extends Ee {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class le extends Ee {
}
class Se extends Ee {
  constructor() {
    super("Zone is an abstract class");
  }
}
const b = "numeric", ye = "short", re = "long", pt = {
  year: b,
  month: b,
  day: b
}, Gt = {
  year: b,
  month: ye,
  day: b
}, Qs = {
  year: b,
  month: ye,
  day: b,
  weekday: ye
}, Kt = {
  year: b,
  month: re,
  day: b
}, Jt = {
  year: b,
  month: re,
  day: b,
  weekday: re
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
  timeZoneName: ye
}, en = {
  hour: b,
  minute: b,
  second: b,
  timeZoneName: re
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
  timeZoneName: ye
}, on = {
  hour: b,
  minute: b,
  second: b,
  hour12: !1,
  timeZoneName: re
}, rn = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b
}, an = {
  year: b,
  month: b,
  day: b,
  hour: b,
  minute: b,
  second: b
}, ln = {
  year: b,
  month: ye,
  day: b,
  hour: b,
  minute: b
}, cn = {
  year: b,
  month: ye,
  day: b,
  hour: b,
  minute: b,
  second: b
}, Xs = {
  year: b,
  month: ye,
  day: b,
  weekday: ye,
  hour: b,
  minute: b
}, un = {
  year: b,
  month: re,
  day: b,
  hour: b,
  minute: b,
  timeZoneName: ye
}, dn = {
  year: b,
  month: re,
  day: b,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ye
}, fn = {
  year: b,
  month: re,
  day: b,
  weekday: re,
  hour: b,
  minute: b,
  timeZoneName: re
}, mn = {
  year: b,
  month: re,
  day: b,
  weekday: re,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: re
};
function F(e) {
  return typeof e > "u";
}
function De(e) {
  return typeof e == "number";
}
function St(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Ml(e) {
  return typeof e == "string";
}
function Dl(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ve() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function ot() {
  return !F(Intl.DateTimeFormat.prototype.formatToParts);
}
function xs() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function El(e) {
  return Array.isArray(e) ? e : [e];
}
function _n(e, t, n) {
  if (e.length !== 0)
    return e.reduce((s, o) => {
      const i = [t(o), o];
      return s && n(s[0], i[0]) === s[0] ? s : i;
    }, null)[1];
}
function eo(e, t) {
  return t.reduce((n, s) => (n[s] = e[s], n), {});
}
function qe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function we(e, t, n) {
  return St(e) && e >= t && e <= n;
}
function Ll(e, t) {
  return e - t * Math.floor(e / t);
}
function Ze(e, t = 2) {
  const n = e < 0 ? "-" : "", s = n ? e * -1 : e;
  let o;
  return s.toString().length < t ? o = ("0".repeat(t) + s).slice(-t) : o = s.toString(), `${n}${o}`;
}
function te(e) {
  if (!(F(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function hn(e) {
  if (!(F(e) || e === null || e === "")) {
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
function nt(e) {
  return rt(e) ? 366 : 365;
}
function yt(e, t) {
  const n = Ll(t - 1, 12) + 1, s = e + (t - n) / 12;
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
function Pt(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function to(e, t, n, s = null) {
  const o = new Date(e), i = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (i.timeZone = s);
  const r = Object.assign({ timeZoneName: t }, i), a = ve();
  if (a && ot()) {
    const l = new Intl.DateTimeFormat(n, r).formatToParts(o).find((c) => c.type.toLowerCase() === "timezonename");
    return l ? l.value : null;
  } else if (a) {
    const l = new Intl.DateTimeFormat(n, i).format(o);
    return new Intl.DateTimeFormat(n, r).format(o).substring(l.length).replace(/^[, \u200e]+/, "");
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
    throw new le(`Invalid unit value ${e}`);
  return t;
}
function vt(e, t, n) {
  const s = {};
  for (const o in e)
    if (qe(e, o)) {
      if (n.indexOf(o) >= 0)
        continue;
      const i = e[o];
      if (i == null)
        continue;
      s[t(o)] = no(i);
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
const Vl = [
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
], Nl = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ro(e) {
  switch (e) {
    case "narrow":
      return [...Nl];
    case "short":
      return [...oo];
    case "long":
      return [...Vl];
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
], ao = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], _l = ["M", "T", "W", "T", "F", "S", "S"];
function lo(e) {
  switch (e) {
    case "narrow":
      return [..._l];
    case "short":
      return [...ao];
    case "long":
      return [...io];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const co = ["AM", "PM"], Pl = ["Before Christ", "Anno Domini"], Fl = ["BC", "AD"], Al = ["B", "A"];
function uo(e) {
  switch (e) {
    case "narrow":
      return [...Al];
    case "short":
      return [...Fl];
    case "long":
      return [...Pl];
    default:
      return null;
  }
}
function Hl(e) {
  return co[e.hour < 12 ? 0 : 1];
}
function zl(e, t) {
  return lo(t)[e.weekday - 1];
}
function Rl(e, t) {
  return ro(t)[e.month - 1];
}
function Bl(e, t) {
  return uo(t)[e.year < 0 ? 0 : 1];
}
function Zl(e, t, n = "always", s = !1) {
  const o = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (n === "auto" && i) {
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
  const r = Object.is(t, -0) || t < 0, a = Math.abs(t), l = a === 1, c = o[e], u = s ? l ? c[1] : c[2] || c[1] : l ? o[e][0] : e;
  return r ? `${a} ${u} ago` : `in ${a} ${u}`;
}
function Wl(e) {
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
    case q(ln):
      return "LLL d, yyyy, h:mm a";
    case q(un):
      return "LLLL d, yyyy, h:mm a";
    case q(fn):
      return s;
    case q(an):
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
function Pn(e, t) {
  let n = "";
  for (const s of e)
    s.literal ? n += s.val : n += t(s.val);
  return n;
}
const ql = {
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
  ff: ln,
  fff: un,
  ffff: fn,
  F: an,
  FF: cn,
  FFF: dn,
  FFFF: mn
};
class ne {
  static create(t, n = {}) {
    return new ne(t, n);
  }
  static parseFormat(t) {
    let n = null, s = "", o = !1;
    const i = [];
    for (let r = 0; r < t.length; r++) {
      const a = t.charAt(r);
      a === "'" ? (s.length > 0 && i.push({ literal: o, val: s }), n = null, s = "", o = !o) : o || a === n ? s += a : (s.length > 0 && i.push({ literal: !1, val: s }), s = a, n = a);
    }
    return s.length > 0 && i.push({ literal: o, val: s }), i;
  }
  static macroTokenToFormatOpts(t) {
    return ql[t];
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
    const s = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && ot(), i = (y, w) => this.loc.extract(t, y, w), r = (y) => t.isOffsetFixed && t.offset === 0 && y.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, y.format) : "", a = () => s ? Hl(t) : i({ hour: "numeric", hour12: !0 }, "dayperiod"), l = (y, w) => s ? Rl(t, y) : i(w ? { month: y } : { month: y, day: "numeric" }, "month"), c = (y, w) => s ? zl(t, y) : i(
      w ? { weekday: y } : { weekday: y, month: "long", day: "numeric" },
      "weekday"
    ), u = (y) => {
      const w = ne.macroTokenToFormatOpts(y);
      return w ? this.formatWithSystemDefault(t, w) : y;
    }, h = (y) => s ? Bl(t, y) : i({ era: y }, "era"), f = (y) => {
      switch (y) {
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
          return r({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return r({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return r({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return t.zoneName;
        case "a":
          return a();
        case "d":
          return o ? i({ day: "numeric" }, "day") : this.num(t.day);
        case "dd":
          return o ? i({ day: "2-digit" }, "day") : this.num(t.day, 2);
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
          return o ? i({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
        case "LL":
          return o ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return o ? i({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return o ? i({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return o ? i({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return o ? i({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? i({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return o ? i({ year: "numeric" }, "year") : this.num(t.year, 6);
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
          return u(y);
      }
    };
    return Pn(ne.parseFormat(n), f);
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
    }, i = ne.parseFormat(n), r = i.reduce(
      (l, { literal: c, val: u }) => c ? l : l.concat(u),
      []
    ), a = t.shiftTo(...r.map(s).filter((l) => l));
    return Pn(i, o(a));
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
class it {
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
let Ot = null;
class gn extends it {
  /**
   * Get a singleton instance of the local zone
   * @return {LocalZone}
   */
  static get instance() {
    return Ot === null && (Ot = new gn()), Ot;
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
const jl = RegExp(`^${so.source}$`);
let ft = {};
function Ul(e) {
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
const Yl = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Gl(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, o, i, r, a, l, c] = s;
  return [r, o, i, a, l, c];
}
function Kl(e, t) {
  const n = e.formatToParts(t), s = [];
  for (let o = 0; o < n.length; o++) {
    const { type: i, value: r } = n[o], a = Yl[i];
    F(a) || (s[a] = parseInt(r, 10));
  }
  return s;
}
let lt = {};
class ue extends it {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    return lt[t] || (lt[t] = new ue(t)), lt[t];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    lt = {}, ft = {};
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
    return !!(t && t.match(jl));
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
    super(), this.zoneName = t, this.valid = ue.isValidZone(t);
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
    const s = Ul(this.name), [o, i, r, a, l, c] = s.formatToParts ? Kl(s, n) : Gl(s, n), h = yn({
      year: o,
      month: i,
      day: r,
      hour: a === 24 ? 0 : a,
      minute: l,
      second: c,
      millisecond: 0
    });
    let f = +n;
    const y = f % 1e3;
    return f -= y >= 0 ? y : 1e3 + y, (h - f) / (60 * 1e3);
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
let Mt = null;
class X extends it {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Mt === null && (Mt = new X(0)), Mt;
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
        return new X(kt(n[1], n[2]));
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
class Fn extends it {
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
function Oe(e, t) {
  let n;
  if (F(e) || e === null)
    return t;
  if (e instanceof it)
    return e;
  if (Ml(e)) {
    const s = e.toLowerCase();
    return s === "local" ? t : s === "utc" || s === "gmt" ? X.utcInstance : (n = ue.parseGMTOffset(e)) != null ? X.instance(n) : ue.isValidSpecifier(s) ? ue.create(e) : X.parseSpecifier(s) || new Fn(e);
  } else
    return De(e) ? X.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Fn(e);
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
    t ? Dt = Oe(t) : Dt = null;
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
    j.resetCache(), ue.resetCache();
  }
}
let Ft = {};
function At(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Ft[n];
  return s || (s = new Intl.DateTimeFormat(e, t), Ft[n] = s), s;
}
let Ht = {};
function Jl(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Ht[n];
  return s || (s = new Intl.NumberFormat(e, t), Ht[n] = s), s;
}
let zt = {};
function Ql(e, t = {}) {
  const { base: n, ...s } = t, o = JSON.stringify([e, s]);
  let i = zt[o];
  return i || (i = new Intl.RelativeTimeFormat(e, t), zt[o] = i), i;
}
let Te = null;
function Xl() {
  if (Te)
    return Te;
  if (ve()) {
    const e = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Te = !e || e === "und" ? "en-US" : e, Te;
  } else
    return Te = "en-US", Te;
}
function xl(e) {
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
    const { numberingSystem: o, calendar: i } = n;
    return [s, o, i];
  }
}
function ec(e, t, n) {
  return ve() ? ((n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e) : [];
}
function tc(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const s = L.utc(2016, n, 1);
    t.push(e(s));
  }
  return t;
}
function nc(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const s = L.utc(2016, 11, 13 + n);
    t.push(e(s));
  }
  return t;
}
function ct(e, t, n, s, o) {
  const i = e.listingMode(n);
  return i === "error" ? null : i === "en" ? s(t) : o(t);
}
function sc(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || ve() && new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class oc {
  constructor(t, n, s) {
    if (this.padTo = s.padTo || 0, this.floor = s.floor || !1, !n && ve()) {
      const o = { useGrouping: !1 };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = Jl(t, o);
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
class rc {
  constructor(t, n, s) {
    this.opts = s, this.hasIntl = ve();
    let o;
    if (t.zone.universal && this.hasIntl) {
      const i = -1 * (t.offset / 60), r = i >= 0 ? `Etc/GMT+${i}` : `Etc/GMT${i}`, a = ue.isValidZone(r);
      t.offset !== 0 && a ? (o = r, this.dt = t) : (o = "UTC", s.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : L.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "local" ? this.dt = t : (this.dt = t, o = t.zone.name);
    if (this.hasIntl) {
      const i = Object.assign({}, this.opts);
      o && (i.timeZone = o), this.dtf = At(n, i);
    }
  }
  format() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    {
      const t = Wl(this.opts), n = j.create("en-US");
      return ne.create(n).formatDateTimeFromString(this.dt, t);
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
class ic {
  constructor(t, n, s) {
    this.opts = Object.assign({ style: "long" }, s), !n && xs() && (this.rtf = Ql(t, s));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : Zl(n, t, this.opts.numeric, this.opts.style !== "long");
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
    const i = t || Y.defaultLocale, r = i || (o ? "en-US" : Xl()), a = n || Y.defaultNumberingSystem, l = s || Y.defaultOutputCalendar;
    return new j(r, a, l, i);
  }
  static resetCache() {
    Te = null, Ft = {}, Ht = {}, zt = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    return j.create(t, n, s);
  }
  constructor(t, n, s, o) {
    const [i, r, a] = xl(t);
    this.locale = i, this.numberingSystem = n || r || null, this.outputCalendar = s || a || null, this.intl = ec(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = sc(this)), this.fastNumbersCached;
  }
  listingMode(t = !0) {
    const n = ve(), s = n && ot(), o = this.isEnglish(), i = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !s && !(o && i) && !t ? "error" : !s || o && i ? "en" : "intl";
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
      const o = n ? { month: t, day: "numeric" } : { month: t }, i = n ? "format" : "standalone";
      return this.monthsCache[i][t] || (this.monthsCache[i][t] = tc((r) => this.extract(r, o, "month"))), this.monthsCache[i][t];
    });
  }
  weekdays(t, n = !1, s = !0) {
    return ct(this, t, s, lo, () => {
      const o = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][t] || (this.weekdaysCache[i][t] = nc(
        (r) => this.extract(r, o, "weekday")
      )), this.weekdaysCache[i][t];
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
          this.meridiemCache = [L.utc(2016, 11, 13, 9), L.utc(2016, 11, 13, 19)].map(
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
      return this.eraCache[t] || (this.eraCache[t] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map(
        (o) => this.extract(o, s, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, s) {
    const o = this.dtFormatter(t, n), i = o.formatToParts(), r = i.find((a) => a.type.toLowerCase() === s);
    return r ? r.value : null;
  }
  numberFormatter(t = {}) {
    return new oc(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new rc(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new ic(this.intl, this.isEnglish(), t);
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
function Le(...e) {
  return (t) => e.reduce(
    ([n, s, o], i) => {
      const [r, a, l] = i(t, o);
      return [Object.assign(n, r), s || a, l];
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
function fo(...e) {
  return (t, n) => {
    const s = {};
    let o;
    for (o = 0; o < e.length; o++)
      s[e[o]] = te(t[n + o]);
    return [s, null, n + o];
  };
}
const mo = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, vn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, ho = RegExp(`${vn.source}${mo.source}?`), bn = RegExp(`(?:T${ho.source})?`), ac = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, lc = /(\d{4})-?W(\d\d)(?:-?(\d))?/, cc = /(\d{4})-?(\d{3})/, uc = fo("weekYear", "weekNumber", "weekDay"), dc = fo("year", "ordinal"), fc = /(\d{4})-(\d\d)-(\d\d)/, po = RegExp(
  `${vn.source} ?(?:${mo.source}|(${so.source}))?`
), mc = RegExp(`(?: ${po.source})?`);
function We(e, t, n) {
  const s = e[t];
  return F(s) ? n : te(s);
}
function yo(e, t) {
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
    milliseconds: hn(e[t + 3])
  }, null, t + 4];
}
function Ge(e, t) {
  const n = !e[t] && !e[t + 1], s = kt(e[t + 1], e[t + 2]), o = n ? null : X.instance(s);
  return [{}, o, t + 3];
}
function go(e, t) {
  const n = e[t] ? ue.create(e[t]) : null;
  return [{}, n, t + 1];
}
const hc = RegExp(`^T?${vn.source}$`), pc = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function yc(e) {
  const [
    t,
    n,
    s,
    o,
    i,
    r,
    a,
    l,
    c
  ] = e, u = t[0] === "-", h = l && l[0] === "-", f = (y, w = !1) => y !== void 0 && (w || y && u) ? -y : y;
  return [
    {
      years: f(te(n)),
      months: f(te(s)),
      weeks: f(te(o)),
      days: f(te(i)),
      hours: f(te(r)),
      minutes: f(te(a)),
      seconds: f(te(l), l === "-0"),
      milliseconds: f(hn(c), h)
    }
  ];
}
const gc = {
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
function wn(e, t, n, s, o, i, r) {
  const a = {
    year: t.length === 2 ? Pt(te(t)) : te(t),
    month: oo.indexOf(n) + 1,
    day: te(s),
    hour: te(o),
    minute: te(i)
  };
  return r && (a.second = te(r)), e && (a.weekday = e.length > 3 ? io.indexOf(e) + 1 : ao.indexOf(e) + 1), a;
}
const vc = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function bc(e) {
  const [
    ,
    t,
    n,
    s,
    o,
    i,
    r,
    a,
    l,
    c,
    u,
    h
  ] = e, f = wn(t, o, s, n, i, r, a);
  let y;
  return l ? y = gc[l] : c ? y = 0 : y = kt(u, h), [f, new X(y)];
}
function wc(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const $c = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Sc = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, kc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Zn(e) {
  const [, t, n, s, o, i, r, a] = e;
  return [wn(t, o, s, n, i, r, a), X.utcInstance];
}
function Ic(e) {
  const [, t, n, s, o, i, r, a] = e;
  return [wn(t, a, n, s, o, i, r), X.utcInstance];
}
const Cc = Ue(ac, bn), Tc = Ue(lc, bn), Oc = Ue(cc, bn), Mc = Ue(ho), Dc = Le(
  yo,
  Ve,
  Ge
), Ec = Le(
  uc,
  Ve,
  Ge
), Lc = Le(
  dc,
  Ve,
  Ge
), Vc = Le(Ve, Ge);
function Nc(e) {
  return Ye(
    e,
    [Cc, Dc],
    [Tc, Ec],
    [Oc, Lc],
    [Mc, Vc]
  );
}
function _c(e) {
  return Ye(wc(e), [vc, bc]);
}
function Pc(e) {
  return Ye(
    e,
    [$c, Zn],
    [Sc, Zn],
    [kc, Ic]
  );
}
function Fc(e) {
  return Ye(e, [pc, yc]);
}
const Ac = Le(Ve);
function Hc(e) {
  return Ye(e, [hc, Ac]);
}
const zc = Ue(fc, mc), Rc = Ue(po), Bc = Le(
  yo,
  Ve,
  Ge,
  go
), Zc = Le(
  Ve,
  Ge,
  go
);
function Wc(e) {
  return Ye(
    e,
    [zc, Bc],
    [Rc, Zc]
  );
}
const qc = "Invalid Duration", vo = {
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
}, jc = Object.assign(
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
), ae = 146097 / 400, Fe = 146097 / 4800, Uc = Object.assign(
  {
    years: {
      quarters: 4,
      months: 12,
      weeks: ae / 7,
      days: ae,
      hours: ae * 24,
      minutes: ae * 24 * 60,
      seconds: ae * 24 * 60 * 60,
      milliseconds: ae * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: ae / 28,
      days: ae / 4,
      hours: ae * 24 / 4,
      minutes: ae * 24 * 60 / 4,
      seconds: ae * 24 * 60 * 60 / 4,
      milliseconds: ae * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: Fe / 7,
      days: Fe,
      hours: Fe * 24,
      minutes: Fe * 24 * 60,
      seconds: Fe * 24 * 60 * 60,
      milliseconds: Fe * 24 * 60 * 60 * 1e3
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
], Yc = He.slice(0).reverse();
function Ce(e, t, n = !1) {
  const s = {
    values: n ? t.values : Object.assign({}, e.values, t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new Z(s);
}
function Gc(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function bo(e, t, n, s, o) {
  const i = e[o][n], r = t[n] / i, a = Math.sign(r) === Math.sign(s[o]), l = !a && s[o] !== 0 && Math.abs(r) <= 1 ? Gc(r) : Math.trunc(r);
  s[o] += l, t[n] -= l * i;
}
function Kc(e, t) {
  Yc.reduce((n, s) => F(t[s]) ? n : (n && bo(e, t, n, t, s), s), null);
}
class Z {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || j.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? Uc : jc, this.isLuxonDuration = !0;
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
      throw new le(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new Z({
      values: vt(t, Z.normalizeUnit, [
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
    const [s] = Fc(t);
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
    const [s] = Hc(t);
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
      throw new le("need to specify a reason the Duration is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new Ol(s);
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
    return this.isValid ? ne.create(this.loc, s).formatDurationFromString(this, t) : qc;
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
    let i = s.toFormat(o);
    return t.includePrefix && (i = "T" + i), i;
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
    const n = Me(t), s = {};
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
    const n = Me(t);
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
    const n = Object.assign(this.values, vt(t, Z.normalizeUnit, []));
    return Ce(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n }), i = { loc: o };
    return s && (i.conversionAccuracy = s), Ce(this, i);
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
    return Kc(this.matrix, t), Ce(this, { values: t }, !0);
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
    t = t.map((r) => Z.normalizeUnit(r));
    const n = {}, s = {}, o = this.toObject();
    let i;
    for (const r of He)
      if (t.indexOf(r) >= 0) {
        i = r;
        let a = 0;
        for (const c in s)
          a += this.matrix[c][r] * s[c], s[c] = 0;
        De(o[r]) && (a += o[r]);
        const l = Math.trunc(a);
        n[r] = l, s[r] = a - l;
        for (const c in o)
          He.indexOf(c) > He.indexOf(r) && bo(this.matrix, o, c, n, r);
      } else
        De(o[r]) && (s[r] = o[r]);
    for (const r in s)
      s[r] !== 0 && (n[i] += r === i ? s[r] : s[r] / this.matrix[i][r]);
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
function Me(e) {
  if (De(e))
    return Z.fromMillis(e);
  if (Z.isDuration(e))
    return e;
  if (typeof e == "object")
    return Z.fromObject(e);
  throw new le(
    `Unknown duration argument ${e} of type ${typeof e}`
  );
}
const Ke = "Invalid Interval";
function Jc(e, t) {
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
      throw new le("need to specify a reason the Interval is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new Tl(s);
    return new U({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const s = Xe(t), o = Xe(n), i = Jc(s, o);
    return i ?? new U({
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
    const s = Me(n), o = Xe(t);
    return U.fromDateTimes(o, o.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const s = Me(n), o = Xe(t);
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
      let i, r;
      try {
        i = L.fromISO(s, n), r = i.isValid;
      } catch {
        r = !1;
      }
      let a, l;
      try {
        a = L.fromISO(o, n), l = a.isValid;
      } catch {
        l = !1;
      }
      if (r && l)
        return U.fromDateTimes(i, a);
      if (r) {
        const c = Z.fromISO(o, n);
        if (c.isValid)
          return U.after(i, c);
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
    const n = t.map(Xe).filter((r) => this.contains(r)).sort(), s = [];
    let { s: o } = this, i = 0;
    for (; o < this.e; ) {
      const r = n[i] || this.e, a = +r > +this.e ? this.e : r;
      s.push(U.fromDateTimes(o, a)), o = a, i += 1;
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
    const n = Me(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, o = 1, i;
    const r = [];
    for (; s < this.e; ) {
      const a = this.start.plus(n.mapUnits((l) => l * o));
      i = +a > +this.e ? this.e : a, r.push(U.fromDateTimes(s, i)), s = i, o += 1;
    }
    return r;
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
    const [n, s] = t.sort((o, i) => o.s - i.s).reduce(
      ([o, i], r) => i ? i.overlaps(r) || i.abutsStart(r) ? [o, i.union(r)] : [o.concat([i]), r] : [o, r],
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
    const o = [], i = t.map((l) => [{ time: l.s, type: "s" }, { time: l.e, type: "e" }]), r = Array.prototype.concat(...i), a = r.sort((l, c) => l.time - c.time);
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
    const n = L.now().setZone(t).set({ month: 12 });
    return !t.universal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(t) {
    return ue.isValidSpecifier(t) && ue.isValidZone(t);
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
    return Oe(t, Y.defaultZone);
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
  static months(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: i = "gregory" } = {}) {
    return (o || j.create(n, s, i)).months(t);
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
  static monthsFormat(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: i = "gregory" } = {}) {
    return (o || j.create(n, s, i)).months(t, !0);
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
  return Math.floor(Z.fromMillis(s).as("days"));
}
function Qc(e, t, n) {
  const s = [
    ["years", (a, l) => l.year - a.year],
    ["quarters", (a, l) => l.quarter - a.quarter],
    ["months", (a, l) => l.month - a.month + (l.year - a.year) * 12],
    [
      "weeks",
      (a, l) => {
        const c = Wn(a, l);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Wn]
  ], o = {};
  let i, r;
  for (const [a, l] of s)
    if (n.indexOf(a) >= 0) {
      i = a;
      let c = l(e, t);
      r = e.plus({ [a]: c }), r > t ? (e = e.plus({ [a]: c - 1 }), c -= 1) : e = r, o[a] = c;
    }
  return [e, o, r, i];
}
function Xc(e, t, n, s) {
  let [o, i, r, a] = Qc(e, t, n);
  const l = t - o, c = n.filter(
    (h) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(h) >= 0
  );
  c.length === 0 && (r < t && (r = o.plus({ [a]: 1 })), r !== o && (i[a] = (i[a] || 0) + l / (r - o)));
  const u = Z.fromObject(Object.assign(i, s));
  return c.length > 0 ? Z.fromMillis(l, s).shiftTo(...c).plus(u) : u;
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
}, xc = $n.hanidec.replace(/[\[|\]]/g, "").split("");
function eu(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const s = e.charCodeAt(n);
      if (e[n].search($n.hanidec) !== -1)
        t += xc.indexOf(e[n]);
      else
        for (const o in qn) {
          const [i, r] = qn[o];
          s >= i && s <= r && (t += s - i);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function de({ numberingSystem: e }, t = "") {
  return new RegExp(`${$n[e || "latn"]}${t}`);
}
const tu = "missing Intl.DateTimeFormat.formatToParts support";
function H(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(eu(n)) };
}
const nu = String.fromCharCode(160), wo = `( |${nu})`, $o = new RegExp(wo, "g");
function su(e) {
  return e.replace(/\./g, "\\.?").replace($o, wo);
}
function jn(e) {
  return e.replace(/\./g, "").replace($o, " ").toLowerCase();
}
function fe(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(su).join("|")),
    deser: ([n]) => e.findIndex((s) => jn(n) === jn(s)) + t
  };
}
function Un(e, t) {
  return { regex: e, deser: ([, n, s]) => kt(n, s), groups: t };
}
function Yn(e) {
  return { regex: e, deser: ([t]) => t };
}
function ou(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function ru(e, t) {
  const n = de(t), s = de(t, "{2}"), o = de(t, "{3}"), i = de(t, "{4}"), r = de(t, "{6}"), a = de(t, "{1,2}"), l = de(t, "{1,3}"), c = de(t, "{1,6}"), u = de(t, "{1,9}"), h = de(t, "{2,4}"), f = de(t, "{4,6}"), y = (R) => ({ regex: RegExp(ou(R.val)), deser: ([Q]) => Q, literal: !0 }), z = ((R) => {
    if (e.literal)
      return y(R);
    switch (R.val) {
      case "G":
        return fe(t.eras("short", !1), 0);
      case "GG":
        return fe(t.eras("long", !1), 0);
      case "y":
        return H(c);
      case "yy":
        return H(h, Pt);
      case "yyyy":
        return H(i);
      case "yyyyy":
        return H(f);
      case "yyyyyy":
        return H(r);
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
        return Yn(u);
      case "a":
        return fe(t.meridiems(), 0);
      case "kkkk":
        return H(i);
      case "kk":
        return H(h, Pt);
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
        return Un(new RegExp(`([+-]${a.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Un(new RegExp(`([+-]${a.source})(${s.source})?`), 2);
      case "z":
        return Yn(/[a-z_+-/]{1,256}?/i);
      default:
        return y(R);
    }
  })(e) || {
    invalidReason: tu
  };
  return z.token = e, z;
}
const iu = {
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
function au(e, t, n) {
  const { type: s, value: o } = e;
  if (s === "literal")
    return {
      literal: !0,
      val: o
    };
  const i = n[s];
  let r = iu[s];
  if (typeof r == "object" && (r = r[i]), r)
    return {
      literal: !1,
      val: r
    };
}
function lu(e) {
  return [`^${e.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, e];
}
function cu(e, t, n) {
  const s = e.match(t);
  if (s) {
    const o = {};
    let i = 1;
    for (const r in n)
      if (qe(n, r)) {
        const a = n[r], l = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (o[a.token.val[0]] = a.deser(s.slice(i, i + l))), i += l;
      }
    return [s, o];
  } else
    return [s, {}];
}
function uu(e) {
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
  return F(e.Z) ? F(e.z) ? n = null : n = ue.create(e.z) : n = new X(e.Z), F(e.q) || (e.M = (e.q - 1) * 3 + 1), F(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), F(e.u) || (e.S = hn(e.u)), [Object.keys(e).reduce((o, i) => {
    const r = t(i);
    return r && (o[r] = e[i]), o;
  }, {}), n];
}
let Et = null;
function du() {
  return Et || (Et = L.fromMillis(1555555555555)), Et;
}
function fu(e, t) {
  if (e.literal)
    return e;
  const n = ne.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const i = ne.create(t, n).formatDateTimeParts(du()).map((r) => au(r, t, n));
  return i.includes(void 0) ? e : i;
}
function mu(e, t) {
  return Array.prototype.concat(...e.map((n) => fu(n, t)));
}
function So(e, t, n) {
  const s = mu(ne.parseFormat(n), e), o = s.map((r) => ru(r, e)), i = o.find((r) => r.invalidReason);
  if (i)
    return { input: t, tokens: s, invalidReason: i.invalidReason };
  {
    const [r, a] = lu(o), l = RegExp(r, "i"), [c, u] = cu(t, l, a), [h, f] = u ? uu(u) : [null, null];
    if (qe(u, "a") && qe(u, "H"))
      throw new xe(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: s, regex: l, rawMatches: c, matches: u, result: h, zone: f };
  }
}
function hu(e, t, n) {
  const { result: s, zone: o, invalidReason: i } = So(e, t, n);
  return [s, o, i];
}
const ko = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Io = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ce(e, t) {
  return new me(
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
function Oo(e, t) {
  const n = rt(e) ? Io : ko, s = n.findIndex((i) => i < t), o = t - n[s];
  return { month: s + 1, day: o };
}
function Rt(e) {
  const { year: t, month: n, day: s } = e, o = To(t, n, s), i = Co(t, n, s);
  let r = Math.floor((o - i + 10) / 7), a;
  return r < 1 ? (a = t - 1, r = gt(a)) : r > gt(t) ? (a = t + 1, r = 1) : a = t, Object.assign({ weekYear: a, weekNumber: r, weekday: i }, It(e));
}
function Gn(e) {
  const { weekYear: t, weekNumber: n, weekday: s } = e, o = Co(t, 1, 4), i = nt(t);
  let r = n * 7 + s - o - 3, a;
  r < 1 ? (a = t - 1, r += nt(a)) : r > i ? (a = t + 1, r -= nt(t)) : a = t;
  const { month: l, day: c } = Oo(a, r);
  return Object.assign({ year: a, month: l, day: c }, It(e));
}
function Lt(e) {
  const { year: t, month: n, day: s } = e, o = To(t, n, s);
  return Object.assign({ year: t, ordinal: o }, It(e));
}
function Kn(e) {
  const { year: t, ordinal: n } = e, { month: s, day: o } = Oo(t, n);
  return Object.assign({ year: t, month: s, day: o }, It(e));
}
function pu(e) {
  const t = St(e.weekYear), n = we(e.weekNumber, 1, gt(e.weekYear)), s = we(e.weekday, 1, 7);
  return t ? n ? s ? !1 : ce("weekday", e.weekday) : ce("week", e.week) : ce("weekYear", e.weekYear);
}
function yu(e) {
  const t = St(e.year), n = we(e.ordinal, 1, nt(e.year));
  return t ? n ? !1 : ce("ordinal", e.ordinal) : ce("year", e.year);
}
function Mo(e) {
  const t = St(e.year), n = we(e.month, 1, 12), s = we(e.day, 1, yt(e.year, e.month));
  return t ? n ? s ? !1 : ce("day", e.day) : ce("month", e.month) : ce("year", e.year);
}
function Do(e) {
  const { hour: t, minute: n, second: s, millisecond: o } = e, i = we(t, 0, 23) || t === 24 && n === 0 && s === 0 && o === 0, r = we(n, 0, 59), a = we(s, 0, 59), l = we(o, 0, 999);
  return i ? r ? a ? l ? !1 : ce("millisecond", o) : ce("second", s) : ce("minute", n) : ce("hour", t);
}
const Vt = "Invalid DateTime", Jn = 864e13;
function ut(e) {
  return new me("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Nt(e) {
  return e.weekData === null && (e.weekData = Rt(e.c)), e.weekData;
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
  return new L(Object.assign({}, n, t, { old: n }));
}
function Eo(e, t, n) {
  let s = e - t * 60 * 1e3;
  const o = n.offset(s);
  if (t === o)
    return [s, t];
  s -= (o - t) * 60 * 1e3;
  const i = n.offset(s);
  return o === i ? [s, o] : [e - Math.min(o, i) * 60 * 1e3, Math.max(o, i)];
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
  return Eo(yn(e), t, n);
}
function Xn(e, t) {
  const n = e.o, s = e.c.year + Math.trunc(t.years), o = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, i = Object.assign({}, e.c, {
    year: s,
    month: o,
    day: Math.min(e.c.day, yt(s, o)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }), r = Z.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), a = yn(i);
  let [l, c] = Eo(a, n, e.zone);
  return r !== 0 && (l += r, c = e.zone.offset(l)), { ts: l, o: c };
}
function Qe(e, t, n, s, o) {
  const { setZone: i, zone: r } = n;
  if (e && Object.keys(e).length !== 0) {
    const a = t || r, l = L.fromObject(
      Object.assign(e, n, {
        zone: a,
        // setZone is a valid option in the calling methods, but not in fromObject
        setZone: void 0
      })
    );
    return i ? l : l.setZone(r);
  } else
    return L.invalid(
      new me("unparsable", `the input "${o}" can't be parsed as ${s}`)
    );
}
function ze(e, t, n = !0) {
  return e.isValid ? ne.create(j.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function xn(e, {
  suppressSeconds: t = !1,
  suppressMilliseconds: n = !1,
  includeOffset: s,
  includePrefix: o = !1,
  includeZone: i = !1,
  spaceZone: r = !1,
  format: a = "extended"
}) {
  let l = a === "basic" ? "HHmm" : "HH:mm";
  (!t || e.second !== 0 || e.millisecond !== 0) && (l += a === "basic" ? "ss" : ":ss", (!n || e.millisecond !== 0) && (l += ".SSS")), (i || s) && r && (l += " "), i ? l += "z" : s && (l += a === "basic" ? "ZZZ" : "ZZ");
  let c = ze(e, l);
  return o && (c = "T" + c), c;
}
const Lo = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, gu = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, vu = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Vo = ["year", "month", "day", "hour", "minute", "second", "millisecond"], bu = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], wu = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
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
  for (const a of Vo)
    F(e[a]) && (e[a] = Lo[a]);
  const n = Mo(e) || Do(e);
  if (n)
    return L.invalid(n);
  const s = Y.now(), o = t.offset(s), [i, r] = mt(e, o, t);
  return new L({
    ts: i,
    zone: t,
    o: r
  });
}
function ns(e, t, n) {
  const s = F(n.round) ? !0 : n.round, o = (r, a) => (r = pn(r, s || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(r, a)), i = (r) => n.calendary ? t.hasSame(e, r) ? 0 : t.startOf(r).diff(e.startOf(r), r).get(r) : t.diff(e, r).get(r);
  if (n.unit)
    return o(i(n.unit), n.unit);
  for (const r of n.units) {
    const a = i(r);
    if (Math.abs(a) >= 1)
      return o(a, r);
  }
  return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
class L {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || Y.defaultZone;
    let s = t.invalid || (Number.isNaN(t.ts) ? new me("invalid input") : null) || (n.isValid ? null : ut(n));
    this.ts = F(t.ts) ? Y.now() : t.ts;
    let o = null, i = null;
    if (!s)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [o, i] = [t.old.c, t.old.o];
      else {
        const a = n.offset(this.ts);
        o = Qn(this.ts, a), s = Number.isNaN(o.year) ? new me("invalid input") : null, o = s ? null : o, i = s ? null : a;
      }
    this._zone = n, this.loc = t.loc || j.create(), this.invalid = s, this.weekData = null, this.c = o, this.o = i, this.isLuxonDateTime = !0;
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
    return new L({});
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
  static local(t, n, s, o, i, r, a) {
    return F(t) ? L.now() : ts(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: i,
        second: r,
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
  static utc(t, n, s, o, i, r, a) {
    return F(t) ? new L({
      ts: Y.now(),
      zone: X.utcInstance
    }) : ts(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: i,
        second: r,
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
    const s = Dl(t) ? t.valueOf() : NaN;
    if (Number.isNaN(s))
      return L.invalid("invalid input");
    const o = Oe(n.zone, Y.defaultZone);
    return o.isValid ? new L({
      ts: s,
      zone: o,
      loc: j.fromObject(n)
    }) : L.invalid(ut(o));
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
      return t < -Jn || t > Jn ? L.invalid("Timestamp out of range") : new L({
        ts: t,
        zone: Oe(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new le(
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
      return new L({
        ts: t * 1e3,
        zone: Oe(n.zone, Y.defaultZone),
        loc: j.fromObject(n)
      });
    throw new le("fromSeconds requires a numerical input");
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
    const n = Oe(t.zone, Y.defaultZone);
    if (!n.isValid)
      return L.invalid(ut(n));
    const s = Y.now(), o = n.offset(s), i = vt(t, es, [
      "zone",
      "locale",
      "outputCalendar",
      "numberingSystem"
    ]), r = !F(i.ordinal), a = !F(i.year), l = !F(i.month) || !F(i.day), c = a || l, u = i.weekYear || i.weekNumber, h = j.fromObject(t);
    if ((c || r) && u)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && r)
      throw new xe("Can't mix ordinal dates with month/day");
    const f = u || i.weekday && !c;
    let y, w, z = Qn(s, o);
    f ? (y = bu, w = gu, z = Rt(z)) : r ? (y = wu, w = vu, z = Lt(z)) : (y = Vo, w = Lo);
    let R = !1;
    for (const Ie of y) {
      const P = i[Ie];
      F(P) ? R ? i[Ie] = w[Ie] : i[Ie] = z[Ie] : R = !0;
    }
    const Q = f ? pu(i) : r ? yu(i) : Mo(i), G = Q || Do(i);
    if (G)
      return L.invalid(G);
    const B = f ? Gn(i) : r ? Kn(i) : i, [ge, Ne] = mt(B, o, n), ke = new L({
      ts: ge,
      zone: n,
      o: Ne,
      loc: h
    });
    return i.weekday && c && t.weekday !== ke.weekday ? L.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${i.weekday} and a date of ${ke.toISO()}`
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
    const [s, o] = Nc(t);
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
    const [s, o] = _c(t);
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
    const [s, o] = Pc(t);
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
    if (F(t) || F(n))
      throw new le("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: i = null } = s, r = j.fromOpts({
      locale: o,
      numberingSystem: i,
      defaultToEN: !0
    }), [a, l, c] = hu(r, t, n);
    return c ? L.invalid(c) : Qe(a, l, s, `format ${n}`, t);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(t, n, s = {}) {
    return L.fromFormat(t, n, s);
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
    const [s, o] = Wc(t);
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
      throw new le("need to specify a reason the DateTime is invalid");
    const s = t instanceof me ? t : new me(t, n);
    if (Y.throwOnInvalid)
      throw new Cl(s);
    return new L({ invalid: s });
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
    return this.isValid ? Lt(this.c).ordinal : NaN;
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
    return this.isValid ? nt(this.year) : NaN;
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
    const { locale: n, numberingSystem: s, calendar: o } = ne.create(
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
    if (t = Oe(t, Y.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let o = this.ts;
      if (n || s) {
        const i = t.offset(this.ts), r = this.toObject();
        [o] = mt(r, i, t);
      }
      return Je(this, { ts: o, zone: t });
    } else
      return L.invalid(ut(t));
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
    const n = vt(t, es, []), s = !F(n.weekYear) || !F(n.weekNumber) || !F(n.weekday), o = !F(n.ordinal), i = !F(n.year), r = !F(n.month) || !F(n.day), a = i || r, l = n.weekYear || n.weekNumber;
    if ((a || o) && l)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (r && o)
      throw new xe("Can't mix ordinal dates with month/day");
    let c;
    s ? c = Gn(Object.assign(Rt(this.c), n)) : F(n.ordinal) ? (c = Object.assign(this.toObject(), n), F(n.day) && (c.day = Math.min(yt(c.year, c.month), c.day))) : c = Kn(Object.assign(Lt(this.c), n));
    const [u, h] = mt(c, this.o, this.zone);
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
    const n = Me(t);
    return Je(this, Xn(this, n));
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
    const n = Me(t).negate();
    return Je(this, Xn(this, n));
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
    return this.isValid ? ne.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Vt;
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
    return this.isValid ? ne.create(this.loc.clone(t), t).formatDateTime(this) : Vt;
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
    return this.isValid ? ne.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
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
    format: i = "extended"
  } = {}) {
    return xn(this, {
      suppressSeconds: n,
      suppressMilliseconds: t,
      includeOffset: s,
      includePrefix: o,
      format: i
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
    return this.isValid ? this.toISO() : Vt;
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
    ), i = El(n).map(Z.normalizeUnit), r = t.valueOf() > this.valueOf(), a = r ? this : t, l = r ? t : this, c = Xc(a, l, i, o);
    return r ? c.negate() : c;
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
    return this.diff(L.now(), t, n);
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
    const n = t.base || L.fromObject({ zone: this.zone }), s = t.padding ? this < n ? -t.padding : t.padding : 0;
    let o = ["years", "months", "days", "hours", "minutes", "seconds"], i = t.unit;
    return Array.isArray(t.unit) && (o = t.unit, i = void 0), ns(
      n,
      this.plus(s),
      Object.assign(t, {
        numeric: "always",
        units: o,
        unit: i
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
      t.base || L.fromObject({ zone: this.zone }),
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
    if (!t.every(L.isDateTime))
      throw new le("min requires all arguments be DateTimes");
    return _n(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(L.isDateTime))
      throw new le("max requires all arguments be DateTimes");
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
    const { locale: o = null, numberingSystem: i = null } = s, r = j.fromOpts({
      locale: o,
      numberingSystem: i,
      defaultToEN: !0
    });
    return So(r, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(t, n, s = {}) {
    return L.fromFormatExplain(t, n, s);
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
    return an;
  }
  /**
   * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return ln;
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
function Xe(e) {
  if (L.isDateTime(e))
    return e;
  if (e && e.valueOf && De(e.valueOf()))
    return L.fromJSDate(e);
  if (e && typeof e == "object")
    return L.fromObject(e);
  throw new le(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
function Sn(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function $u(e) {
  return ["top", "bottom"].includes(Sn(e)) ? "x" : "y";
}
function Su(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ss(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ku(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: o, platform: i, rects: r, elements: a, strategy: l } = e, { boundary: c = "clippingAncestors", rootBoundary: u = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: y = 0 } = t, w = Su(y), z = a[f ? h === "floating" ? "reference" : "floating" : h], R = ss(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(z))) == null || n ? z : z.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)), boundary: c, rootBoundary: u, strategy: l })), Q = h === "floating" ? { ...r.floating, x: s, y: o } : r.reference, G = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), B = await (i.isElement == null ? void 0 : i.isElement(G)) && await (i.getScale == null ? void 0 : i.getScale(G)) || { x: 1, y: 1 }, ge = ss(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: Q, offsetParent: G, strategy: l }) : Q);
  return { top: (R.top - ge.top + w.top) / B.y, bottom: (ge.bottom - R.bottom + w.bottom) / B.y, left: (R.left - ge.left + w.left) / B.x, right: (ge.right - R.right + w.right) / B.x };
}
const Ae = Math.max, Iu = ["top", "right", "bottom", "left"];
Iu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ct = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, o = await async function(i, r) {
      const { placement: a, platform: l, elements: c } = i, u = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), h = Sn(a), f = No(a), y = $u(a) === "x", w = ["left", "top"].includes(h) ? -1 : 1, z = u && y ? -1 : 1, R = typeof r == "function" ? r(i) : r;
      let { mainAxis: Q, crossAxis: G, alignmentAxis: B } = typeof R == "number" ? { mainAxis: R, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...R };
      return f && typeof B == "number" && (G = f === "end" ? -1 * B : B), y ? { x: G * z, y: Q * w } : { x: Q * w, y: G * z };
    }(t, e);
    return { x: n + o.x, y: s + o.y, data: o };
  } };
}, kn = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: s, platform: o, elements: i } = t, { apply: r = () => {
    }, ...a } = e, l = await ku(t, a), c = Sn(n), u = No(n);
    let h, f;
    c === "top" || c === "bottom" ? (h = c, f = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (f = c, h = u === "end" ? "top" : "bottom");
    const y = Ae(l.left, 0), w = Ae(l.right, 0), z = Ae(l.top, 0), R = Ae(l.bottom, 0), Q = { availableHeight: s.floating.height - (["left", "right"].includes(n) ? 2 * (z !== 0 || R !== 0 ? z + R : Ae(l.top, l.bottom)) : l[h]), availableWidth: s.floating.width - (["top", "bottom"].includes(n) ? 2 * (y !== 0 || w !== 0 ? y + w : Ae(l.left, l.right)) : l[f]) };
    await r({ ...t, ...Q });
    const G = await o.getDimensions(i.floating);
    return s.floating.width !== G.width || s.floating.height !== G.height ? { reset: { rects: !0 } } : {};
  } };
}, os = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, Cu = /* @__PURE__ */ O({
  name: "h-date-picker",
  props: {
    ...nr,
    ...sr,
    ...or,
    ...rr,
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
    const n = D(), s = k(), o = k(), i = k(e.modelValue ? e.modelValue.toISODate() : ""), r = k(!1), a = k(L.now()), l = k(os.bottom), c = V(() => [Ct(4)]), u = V(() => {
      if (e.dots === null)
        return null;
      const P = {};
      return e.dots.forEach((_e) => {
        const $e = _e.date.toISODate();
        P[$e] = P[$e] || [], P[$e].push(_e);
      }), P;
    }), h = V(() => {
      let P = et.weekdays("short", {
        locale: "en"
      });
      return e.firstDayOfWeek !== 0 && P.unshift(...P.splice(e.firstDayOfWeek, 7 - e.firstDayOfWeek)), P;
    }), f = V(() => {
      const P = [], _e = a.value.startOf("month");
      let $e = _e.weekday - 1;
      $e < e.firstDayOfWeek ? $e += 7 - e.firstDayOfWeek : $e -= e.firstDayOfWeek;
      const zo = L.now();
      let Pe = _e.minus({
        days: $e
      });
      for (let Cn = 0; Cn < 6 * 7; Cn++)
        P.push({
          date: Pe,
          classes: {
            "-outside-month": Pe.month !== _e.month,
            "-today": e.highlightToday && Pe.hasSame(zo, "day"),
            "-selected": e.modelValue && Pe.hasSame(e.modelValue, "day")
          }
        }), Pe = Pe.plus({
          days: 1
        });
      return P;
    }), y = (P) => {
      a.value = a.value.plus(P);
    }, w = (P) => {
      a.value = a.value.minus(P);
    };
    ee(() => e.modelValue, () => {
      i.value = e.modelValue ? e.modelValue.toISODate() : "";
    });
    const z = (P) => {
      i.value = P.toISODate(), t.emit("update:modelValue", P), r.value = !1;
    }, R = () => {
      const P = L.fromISO(i.value);
      P.isValid && (a.value = P, t.emit("update:modelValue", P));
    }, Q = k(!1), G = () => {
      r.value === !1 && (a.value = e.modelValue ? e.modelValue : L.now()), Q.value = !0, r.value = !0, t.emit("focus");
    }, B = () => {
      Q.value = !1, t.emit("blur");
    }, ge = (P) => {
      l.value = os[Be(P.placement).placement];
    }, Ne = (P) => {
      P.outsideFloating && P.outsideReference && (r.value = !1);
    };
    ee(() => e.disabled, () => {
      e.disabled && (r.value = !1);
    }), ee(f, (P) => {
      t.emit("view-changed", {
        from: P[0].date,
        to: P[P.length - 1].date
      });
    });
    const ke = (P) => ({
      class: [n.css_root.value]
    }), Ie = ir().as("div", ke).props(["modelValue", "disabled", "visible"]).build();
    return {
      Icons: x,
      input: s,
      icon: o,
      inputValue: i,
      weekdayNames: h,
      daysToShow: f,
      shownDate: a,
      plusShownDate: y,
      minusShownDate: w,
      onDateClick: z,
      onDateInputChanged: R,
      core: Ie,
      ...n,
      onInputFocus: G,
      onInputBlur: B,
      transition: l,
      onClickOutside: Ne,
      onComputedPosition: ge,
      floatingVisible: r,
      floatingMiddleware: c,
      cachedDots: u
    };
  }
}), Tu = ["onClick"];
function Ou(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-input"), l = v("h-icon-button"), c = v("h-floating"), u = v("hr-date-picker");
  return K((m(), I(u, _(e.core.props, A(e.core.listeners)), {
    default: $((h) => [
      C(a, {
        ref: (f) => {
          f && (e.input = f.$el);
        },
        disabled: h.disabled,
        modelValue: e.inputValue,
        "onUpdate:modelValue": t[0] || (t[0] = (f) => e.inputValue = f),
        onChange: e.onDateInputChanged,
        onFocus: e.onInputFocus,
        onBlur: e.onInputBlur
      }, {
        customSuffix: $(() => [
          C(r, {
            ref: (f) => {
              f && (e.icon = f.$el);
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
        arrow: $(() => [
          C(r, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
          g("div", {
            class: d([e.css_ec("calendar-header")])
          }, [
            g("div", null, [
              C(l, {
                icon: e.Icons.chevronLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[1] || (t[1] = (f) => e.minusShownDate({ months: 1 }))
              }, null, 8, ["icon"]),
              C(l, {
                icon: e.Icons.chevronDoubleLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[2] || (t[2] = (f) => e.minusShownDate({ years: 1 }))
              }, null, 8, ["icon"])
            ]),
            g("div", null, [
              g("span", {
                class: d([e.css_ec("calendar-year-label")])
              }, N(`${e.shownDate.monthLong} ${e.shownDate.year}`), 3)
            ]),
            g("div", null, [
              C(l, {
                icon: e.Icons.chevronDoubleRight,
                size: "normal",
                styling: "subtle",
                onClick: t[3] || (t[3] = (f) => e.plusShownDate({ years: 1 }))
              }, null, 8, ["icon"]),
              C(l, {
                icon: e.Icons.chevronRight,
                size: "normal",
                styling: "subtle",
                onClick: t[4] || (t[4] = (f) => e.plusShownDate({ months: 1 }))
              }, null, 8, ["icon"])
            ])
          ], 2),
          g("div", {
            class: d([e.css_ec("calendar")])
          }, [
            g("div", {
              class: d([e.css_ec("calendar-weekdays")])
            }, [
              (m(!0), S(oe, null, he(e.weekdayNames, (f) => (m(), S("div", null, N(f), 1))), 256))
            ], 2),
            g("div", {
              class: d([e.css_ec("calendar-dates"), { "-has-dots": e.cachedDots !== null }])
            }, [
              (m(!0), S(oe, null, he(e.daysToShow, (f) => (m(), S("div", {
                key: `${f.date.toISODate()}-${e.shownDate.toISODate()}`,
                class: d([e.css_ec("calendar-date"), f.classes]),
                onClick: (y) => e.onDateClick(f.date)
              }, [
                se(N(f.date.day) + " ", 1),
                e.cachedDots !== null && e.cachedDots[f.date.toISODate()] ? (m(), S("div", {
                  key: 0,
                  class: d([e.css_ec("dots-container")])
                }, [
                  (m(!0), S(oe, null, he(e.cachedDots[f.date.toISODate()], (y) => (m(), S("span", {
                    class: d([e.css_ec("dot")]),
                    style: W({ background: y.color || null })
                  }, null, 6))), 256))
                ], 2)) : M("", !0)
              ], 10, Tu))), 128))
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
const Mu = /* @__PURE__ */ E(Cu, [["render", Ou]]), Du = O({
  name: "h-input",
  props: {
    ...ar,
    ...lr,
    ...cr,
    ...ur,
    ...dr,
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
    const n = k(), s = k(), o = k(!1), i = () => {
      o.value = !0, t.emit("focus");
    }, r = () => {
      o.value = !1, t.emit("blur");
    }, a = () => {
      s.value.focusInput();
    }, l = (u) => ({
      class: {
        "-readonly": u.readonly,
        "-disabled": u.disabled
      },
      onClick: u.onClick
    }), c = fr(n).as("div", l).props(["modelValue", "modelModifiers", "readonly", "disabled", "type"]).events(["update:modelValue"]).build();
    return {
      coreInput: s,
      input: n,
      hasFocus: o,
      onFocus: i,
      onBlur: r,
      focus: a,
      core: c,
      ...D()
    };
  }
}), Eu = ["value", "type", "maxlength", "minlength", "min", "max", "disabled", "placeholder", "readonly", "autocomplete", "onInput"];
function Lu(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-input");
  return m(), I(a, _({
    ref: "coreInput",
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (m(), S("div", {
        key: 0,
        class: d([e.css_ec("prefix")]),
        style: W({ width: e.prefixWidth })
      }, [
        T(e.$slots, "prefix", {}, () => [
          se(N(e.prefix), 1)
        ])
      ], 6)) : M("", !0),
      e.prefixIcon ? (m(), I(r, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      g("input", {
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
      }, null, 42, Eu),
      e.suffixIcon ? (m(), I(r, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.$slots.suffix || e.suffix ? (m(), S("div", {
        key: 3,
        class: d([e.css_ec("suffix")]),
        style: W({ width: e.suffixWidth })
      }, [
        T(e.$slots, "suffix", {}, () => [
          se(N(e.suffix), 1)
        ])
      ], 6)) : M("", !0),
      T(e.$slots, "customSuffix")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Vu = /* @__PURE__ */ E(Du, [["render", Lu]]), Nu = O({
  name: "h-autocomplete",
  props: {
    ...mr,
    ...hr,
    ...pr,
    ...yr,
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
    const n = k(), s = k(), o = k(), i = k(), r = k(), a = k(""), l = V(() => [
      kn({
        padding: 8,
        apply(B) {
          Object.assign(B.elements.floating.style, {
            width: `${B.rects.reference.width}px`
          }), a.value = `${B.availableHeight}px`;
        }
      })
    ]);
    _s(() => {
      o.value = [];
    });
    const c = (B) => {
      i.value = B, r.value = B ? B.$el : null;
    }, u = k(!1), h = () => {
      u.value = !0, i.value.showList(), t.emit("focus");
    }, f = () => {
      u.value = !1, t.emit("blur");
    }, y = () => {
      i.value.focusInput();
    }, w = () => {
      i.value.hideList();
    }, z = (B) => {
      B.outsideFloating && B.outsideReference && w();
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
    }), G = gr(n).as("div", Q).props(["modelValue", "modelModifiers", "disabled", "items"]).events(["update:modelValue", "itemSelected", "focusedItemChanged"]).build();
    return {
      setCoreInput: c,
      coreAutocompleteEl: r,
      floatingMiddleware: l,
      listMaxHeight: a,
      input: n,
      items: o,
      scrollContainer: s,
      hasFocus: u,
      onFocus: h,
      onBlur: f,
      core: G,
      onClickOutside: z,
      onFocusedItemChanged: R,
      ...D(),
      focus: y,
      hideList: w
    };
  }
}), _u = ["value", "type", "maxlength", "minlength", "disabled", "placeholder", "readonly", "autocomplete", "onInput", "onKeydown"], Pu = ["onKeydown"], Fu = ["onClick"];
function Au(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-autocomplete");
  return m(), I(c, _({
    ref: (u) => e.setCoreInput(u),
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (m(), S("div", {
        key: 0,
        class: d([e.css_ec("prefix")])
      }, [
        T(e.$slots, "prefix", {}, () => [
          se(N(e.prefix), 1)
        ])
      ], 2)) : M("", !0),
      e.prefixIcon ? (m(), I(r, {
        key: 1,
        class: d([e.css_ec("prefix-icon")]),
        icon: e.prefixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      g("input", {
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
      }, null, 42, _u),
      e.suffixIcon ? (m(), I(r, {
        key: 2,
        class: d([e.css_ec("suffix-icon")]),
        icon: e.suffixIcon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.$slots.suffix || e.suffix ? (m(), S("div", {
        key: 3,
        class: d([e.css_ec("suffix")])
      }, [
        T(e.$slots, "suffix", {}, () => [
          se(N(e.suffix), 1)
        ])
      ], 2)) : M("", !0),
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
        default: $(() => [
          g("div", {
            class: d([e.css_ec("list-box")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.listMaxHeight })
          }, [
            C(a, { ref: "scrollContainer" }, {
              default: $(() => [
                T(e.$slots, "default", {
                  items: u.items,
                  focusedItem: u.focusedItem,
                  onItemClick: u.onItemClick
                }, () => [
                  g("ul", {
                    class: d([e.css_ec("list")])
                  }, [
                    (m(!0), S(oe, null, he(u.items, (h, f) => (m(), S("li", {
                      ref_for: !0,
                      ref: (y) => e.items[f] = y,
                      class: d([e.css_ec("list-item"), { "-focused": h === u.focusedItem }]),
                      onClick: (y) => u.onItemClick(h)
                    }, N(h), 11, Fu))), 256))
                  ], 2)
                ])
              ]),
              _: 2
            }, 1536)
          ], 46, Pu)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onHide", "onClickOutside"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const Hu = /* @__PURE__ */ E(Nu, [["render", Au]]), zu = O({
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
        const i = e.modelValue;
        return i.length > 1 ? `${i.length} files selected` : i.length === 1 ? i[0].name : null;
      } else
        return e.modelValue.name;
    }), o = (i) => {
      const a = i.target.files;
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
}), Ru = ["multiple", "accept"];
function Bu(e, t, n, s, o, i) {
  return m(), S("label", {
    class: d([e.css_root])
  }, [
    g("span", {
      class: d([e.css_ec("text")])
    }, N(e.text), 3),
    g("input", {
      class: d([e.css_ec("input")]),
      multiple: e.multiple,
      type: "file",
      accept: e.accept,
      onChange: t[0] || (t[0] = (...r) => e.filesChanged && e.filesChanged(...r))
    }, null, 42, Ru),
    g("div", {
      class: d([e.css_ec("suffix")])
    }, N(e.label), 3)
  ], 2);
}
const Zu = /* @__PURE__ */ E(zu, [["render", Bu]]), rs = "elementic-inputs", Wu = {
  Input: Vu,
  Autocomplete: Hu,
  FileInput: Zu
}, qu = {
  CoreInputsInstall: vr
}, _o = {
  install: (e, t) => {
    p.isModuleInstalled(e, rs) || (p.installDependencies(e, qu, t), p.installComponents(e, Wu), p.markModuleAsInstalled(e, rs));
  }
}, is = "elementic-date-pickers", ju = {
  DatePicker: Mu
}, Uu = {
  CoreDatePickersInstall: br,
  IconsInstall: Yt,
  InputsInstall: _o
}, Yu = {
  install: (e, t) => {
    p.isModuleInstalled(e, is) || (p.installDependencies(e, Uu, t), p.installComponents(e, ju), p.markModuleAsInstalled(e, is));
  }
};
function Po(e) {
  return Ro() ? (Bo(e), !0) : !1;
}
function tt(e) {
  return typeof e == "function" ? e() : Zo(e);
}
const Tt = typeof window < "u";
function wt(e) {
  var t;
  const n = tt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const In = Tt ? window : void 0;
Tt && window.document;
Tt && window.navigator;
Tt && window.location;
function Gu() {
  const e = k(!1);
  return Bt() && st(() => {
    e.value = !0;
  }), e;
}
function Fo(e) {
  const t = Gu();
  return V(() => (t.value, Boolean(e())));
}
var as = Object.getOwnPropertySymbols, Ku = Object.prototype.hasOwnProperty, Ju = Object.prototype.propertyIsEnumerable, Qu = (e, t) => {
  var n = {};
  for (var s in e)
    Ku.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && as)
    for (var s of as(e))
      t.indexOf(s) < 0 && Ju.call(e, s) && (n[s] = e[s]);
  return n;
};
function Xu(e, t, n = {}) {
  const s = n, { window: o = In } = s, i = Qu(s, ["window"]);
  let r;
  const a = Fo(() => o && "MutationObserver" in o), l = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ee(
    () => wt(e),
    (h) => {
      l(), a.value && o && h && (r = new MutationObserver(t), r.observe(h, i));
    },
    { immediate: !0 }
  ), u = () => {
    l(), c();
  };
  return Po(u), {
    isSupported: a,
    stop: u
  };
}
function xu(e, t, n = {}) {
  const { window: s = In, initialValue: o = "", observe: i = !1 } = n, r = k(o), a = V(() => {
    var c;
    return wt(t) || ((c = s == null ? void 0 : s.document) == null ? void 0 : c.documentElement);
  });
  function l() {
    var c;
    const u = tt(e), h = tt(a);
    if (h && s) {
      const f = (c = s.getComputedStyle(h).getPropertyValue(u)) == null ? void 0 : c.trim();
      r.value = f || o;
    }
  }
  return i && Xu(a, l, {
    attributes: !0,
    window: s
  }), ee(
    [a, () => tt(e)],
    l,
    { immediate: !0 }
  ), ee(
    r,
    (c) => {
      var u;
      (u = a.value) != null && u.style && a.value.style.setProperty(tt(e), c);
    }
  ), r;
}
var ls = Object.getOwnPropertySymbols, ed = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, nd = (e, t) => {
  var n = {};
  for (var s in e)
    ed.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ls)
    for (var s of ls(e))
      t.indexOf(s) < 0 && td.call(e, s) && (n[s] = e[s]);
  return n;
};
function sd(e, t, n = {}) {
  const s = n, { window: o = In } = s, i = nd(s, ["window"]);
  let r;
  const a = Fo(() => o && "ResizeObserver" in o), l = () => {
    r && (r.disconnect(), r = void 0);
  }, c = V(
    () => Array.isArray(e) ? e.map((f) => wt(f)) : [wt(e)]
  ), u = ee(
    c,
    (f) => {
      if (l(), a.value && o) {
        r = new ResizeObserver(t);
        for (const y of f)
          y && r.observe(y, i);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), h = () => {
    l(), u();
  };
  return Po(h), {
    isSupported: a,
    stop: h
  };
}
const od = O({
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
    width: {
      type: String,
      default: "400px"
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
    const n = ie("dialog-transition-end"), s = je({}), o = k(), i = ie("global-scrollbar-width"), r = xu("--h-scrollbar-width", o);
    sd(o, (f) => {
      e.visible && (r.value = `${o.value.offsetWidth - o.value.clientWidth}px`, console.log(r.value));
    }), ee(s, () => {
      Object.keys(s).length === 0 && n && n();
    });
    const a = (f) => {
      e.visible === !1 && delete s[f];
    }, l = (f) => {
      e.visible === !1 && (s[f] = !0);
    }, c = (f, y) => f < y - 1 ? `scale(${1 - 0.1 * (y - f - 1)})` : null, u = (f, y) => f < y - 1 ? 1 - 0.25 * (y - f) : null, h = qs(["visible"]);
    return {
      Icons: x,
      core: h,
      ...D(),
      transitionEnded: a,
      transitionStarted: l,
      activeTransitions: s,
      getScale: c,
      getOpacity: u,
      scrollContainer: o,
      bodyScrollbarWidth: i
    };
  }
}), rd = ["innerHTML"];
function id(e, t, n, s, o, i) {
  const r = v("h-icon-button"), a = v("hr-dialog");
  return m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      g("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${l.stackIndex}`, `-count-${l.stackCount}`, `-visible-count-${l.visibleStackCount}`]),
        style: W({ zIndex: e.zIndex })
      }, [
        C(pe, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: $(() => [
            K(g("div", {
              class: d([e.css_ec("backdrop")]),
              style: W({ opacity: e.getOpacity(l.stackIndex, l.visibleStackCount) })
            }, null, 6), [
              [J, l.visible]
            ])
          ]),
          _: 2
        }, 1024),
        g("div", {
          ref: "scrollContainer",
          class: d([e.css_ec("scroll-container"), { "-transitioning": e.lockScroll && e.activeTransitions.box, "-body-has-scrollbar": e.lockScroll && e.bodyScrollbarWidth > 0 }])
        }, [
          C(pe, {
            name: "small-slide-up-medium",
            appear: "",
            onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
            onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
          }, {
            default: $(() => [
              K(g("div", {
                class: d([e.css_ec("box-container")]),
                style: W({ width: e.width, transform: e.getScale(l.stackIndex, l.visibleStackCount) })
              }, [
                g("div", {
                  class: d([e.css_ec("box")])
                }, [
                  e.showCloseButton ? (m(), S("div", {
                    key: 0,
                    class: d([e.css_ec("close-icon")])
                  }, [
                    C(r, {
                      icon: e.Icons.close,
                      styling: "subtle",
                      size: "small",
                      onClick: l.close
                    }, null, 8, ["icon", "onClick"])
                  ], 2)) : M("", !0),
                  e.$slots.title || e.title ? (m(), S("div", {
                    key: 1,
                    class: d([e.css_ec("title")])
                  }, [
                    T(e.$slots, "title", {}, () => [
                      g("span", { innerHTML: e.title }, null, 8, rd)
                    ])
                  ], 2)) : M("", !0),
                  g("div", {
                    class: d([e.css_ec("content")])
                  }, [
                    T(e.$slots, "default")
                  ], 2),
                  e.$slots.footer ? (m(), S("div", {
                    key: 2,
                    class: d([e.css_ec("footer")])
                  }, [
                    T(e.$slots, "footer")
                  ], 2)) : M("", !0)
                ], 2)
              ], 6), [
                [J, l.visible]
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
const ad = /* @__PURE__ */ E(od, [["render", id]]), cs = "elementic-dialgos", ld = {
  Dialog: ad
}, cd = {
  CoreDialogsInstall: js
}, ud = {
  install: (e, t) => {
    p.isModuleInstalled(e, cs) || (p.installDependencies(e, cd, t), p.installComponentAlias(e, "h-dialog-wrapper", wr), p.installComponents(e, ld), p.markModuleAsInstalled(e, cs));
  }
}, dd = O({
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
    const n = ie("dialog-transition-end"), s = je({}), o = V(() => e.placement === "right" ? "large2x-slide-to-left-medium" : "large2x-slide-to-right-medium");
    ee(s, () => {
      Object.keys(s).length === 0 && n && n();
    });
    const i = (u) => {
      e.visible === !1 && delete s[u];
    }, r = (u) => {
      e.visible === !1 && (s[u] = !0);
    }, a = (u, h) => u < h - 1 ? `translateX(${e.placement === "right" ? "-" : ""}${(h - u - 1) * 64}px)` : null, l = (u, h) => u < h - 1 ? 1 - 0.25 * (h - u) : null;
    return {
      core: qs(["visible"]),
      ...D(),
      slideTransition: o,
      transitionEnded: i,
      transitionStarted: r,
      getScale: a,
      getOpacity: l
    };
  }
}), fd = ["innerHTML"];
function md(e, t, n, s, o, i) {
  const r = v("h-scroll-container"), a = v("hr-dialog");
  return m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      g("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${l.stackIndex}`, `-count-${l.stackCount}`, `-active-count-${l.visibleStackCount}`]),
        style: W({ zIndex: e.zIndex })
      }, [
        C(pe, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: $(() => [
            K(g("div", {
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
          default: $(() => [
            K(g("div", {
              class: d([e.css_ec("box"), `-placement-${e.placement}`, { "-has-footer": e.$slots.footer }]),
              style: W({ transform: e.getScale(l.stackIndex, l.visibleStackCount) })
            }, [
              e.$slots.title || e.title ? (m(), S("div", {
                key: 0,
                class: d([e.css_ec("title")])
              }, [
                T(e.$slots, "title", {}, () => [
                  g("span", { innerHTML: e.title }, null, 8, fd)
                ])
              ], 2)) : M("", !0),
              g("div", {
                class: d([e.css_ec("content")])
              }, [
                C(r, null, {
                  default: $(() => [
                    g("div", {
                      class: d([e.css_ec("inner-content")])
                    }, [
                      T(e.$slots, "default")
                    ], 2)
                  ]),
                  _: 3
                })
              ], 2),
              e.$slots.footer ? (m(), S("div", {
                key: 1,
                class: d([e.css_ec("footer")])
              }, [
                T(e.$slots, "footer")
              ], 2)) : M("", !0)
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
const hd = /* @__PURE__ */ E(dd, [["render", md]]), us = "elementic-drawers", pd = {
  Drawer: hd
}, yd = {
  CoreDialogsInstall: js
}, gd = {
  install: (e, t) => {
    p.isModuleInstalled(e, us) || (p.installDependencies(e, yd, t), p.installComponents(e, pd), p.markModuleAsInstalled(e, us));
  }
}, ds = {
  top: "tiny2x-slide-down-medium",
  bottom: "tiny2x-slide-up-medium"
}, vd = O({
  name: "h-dropdown",
  props: {
    ...$r,
    ...Sr,
    ...kr,
    ...Ir,
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
    const n = k(), s = k(), o = k(), i = k(""), r = k({}), a = k(ds.bottom), l = V(() => [
      Ct(4),
      kn({
        padding: 8,
        apply(w) {
          r.value = {
            [e.autoSize ? "minWidth" : "width"]: `${w.rects.reference.width}px`
          }, i.value = `${w.availableHeight}px`;
        }
      })
    ]), c = (w) => {
      w.outsideFloating && w.outsideReference && n.value.close();
    }, u = (w) => {
      a.value = ds[Be(w.placement).placement];
    }, h = (w) => {
      w && w.component && w.component.vnode && w.component.vnode.el && w.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, f = (w) => ({
      class: {
        "-active": w.menuVisible,
        "-disabled": w.disabled
      }
    }), y = Cr().as("div", f).props(["disabled", "hideOnClick", "splitButton", "visible"]).events(["click", "focusedItemChanged"]).build();
    return {
      Icons: x,
      core: y,
      dropdown: n,
      button: s,
      icon: o,
      transition: a,
      floatingMiddleware: l,
      floatingStyle: r,
      menuMaxHeight: i,
      onClickOutside: c,
      onComputedPosition: u,
      onFocusedItemChanged: h,
      ...D()
    };
  }
}), bd = ["onClick", "onKeydown"], wd = ["onClick", "onKeydown"], $d = ["onKeydown"];
function Sd(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-dropdown");
  return K((m(), I(c, _({
    ref: "dropdown",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
      g("div", {
        ref: "button",
        tabindex: "0",
        class: d([e.css_ec("button"), { "-split-button": u.splitButton }]),
        onClick: u.onButtonClick,
        onKeydown: (h) => u.onKeyEvents(h, "main")
      }, [
        g("span", {
          class: d([e.css_ec("label")])
        }, [
          T(e.$slots, "label", {}, () => [
            se(N(e.label), 1)
          ])
        ], 2),
        g("div", {
          tabindex: "0",
          class: d([e.css_ec("icon")]),
          onClick: Tn(u.onIconClick, ["stop"]),
          onKeydown: Tn((h) => u.onKeyEvents(h, "split"), ["stop"])
        }, [
          g("div", null, [
            C(r, {
              ref: "icon",
              icon: e.Icons.dotsHorizontal,
              size: "16px"
            }, null, 8, ["icon"])
          ])
        ], 42, wd)
      ], 42, bd),
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
        arrow: $(() => [
          C(r, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
          g("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.menuMaxHeight })
          }, [
            C(a, null, {
              default: $(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, $d)
        ]),
        _: 2
      }, 1032, ["class", "reference", "arrow-reference", "transition", "visible", "placement", "middleware", "onHide", "onClickOutside", "onComputedPosition", "onTransitionStateChanged", "style"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"])), [
    [J, e.visible]
  ]);
}
const kd = /* @__PURE__ */ E(vd, [["render", Sd]]), Id = O({
  name: "h-dropdown-item",
  props: {
    ...Tr,
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
      core: Mr().as("div", n).props(["disabled"]).events(["click"]).build(),
      ...D()
    };
  }
});
function Cd(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-dropdown-item");
  return m(), I(a, _({
    class: [e.css_root],
    tabindex: "-1"
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (m(), I(r, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon
        }, null, 8, ["class", "icon"])) : M("", !0),
        g("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ])
    ]),
    _: 3
  }, 16, ["class"]);
}
const Td = /* @__PURE__ */ E(Id, [["render", Cd]]), Od = O({
  name: "h-dropdown-item-divider",
  setup(e, t) {
    const n = ie("dropdown"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function Md(e, t, n, s, o, i) {
  return e.visible ? (m(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : M("", !0);
}
const Dd = /* @__PURE__ */ E(Od, [["render", Md]]), Ed = O({
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
    const n = ie("dropdown"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function Ld(e, t, n, s, o, i) {
  const r = v("h-icon");
  return e.visible ? (m(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (m(), I(r, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      g("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : M("", !0);
}
const Vd = /* @__PURE__ */ E(Ed, [["render", Ld]]), _t = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Nd = {
  top: "offsetHeight",
  right: "offsetWidth",
  bottom: "offsetHeight",
  left: "offsetWidth"
}, _d = O({
  name: "h-floating",
  props: {
    ...Dr,
    ...Er,
    ...Lr,
    ...Vr,
    ...Nr,
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
    const n = D(), s = k(), o = k(null), i = k({}), r = k(_t[Be(e.placement).placement]), a = k(Be(e.placement).placement), l = k(Be(e.placement).alignment), c = V(() => {
      const f = [...e.middleware];
      return e.showArrow && f.push(_r({
        reference: e.arrowReference,
        element: o.value
      })), f;
    }), u = (f) => {
      const y = Be(f.placement);
      a.value = y.placement, l.value = y.alignment;
      const w = a.value;
      f.middlewareData.arrowReference && (i.value = {
        left: f.middlewareData.arrowReference.x != null ? `${f.middlewareData.arrowReference.x}px` : "",
        top: f.middlewareData.arrowReference.y != null ? `${f.middlewareData.arrowReference.y}px` : "",
        [_t[w]]: `${-o.value[Nd[w]]}px`
      }, r.value = _t[w]), t.emit("computedPosition", f);
    }, h = Pr().props(["as", "reference", "visible", "placement", "transition"]).events(["clickOutside", "show", "hide"]).build();
    return {
      ...n,
      middleware: c,
      floating: s,
      floatingPlacement: a,
      floatingAlignment: l,
      floatingArrow: o,
      arrowStyle: i,
      arrowPlacement: r,
      core: h,
      onComputedPosition: u
    };
  }
}), Pd = ["data-arrow-placement"];
function Fd(e, t, n, s, o, i) {
  const r = v("hr-floating");
  return m(), I(r, _({
    ref: "floating",
    middleware: e.middleware,
    "data-floating-placement": e.floatingPlacement,
    "data-floating-alignment": e.floatingAlignment
  }, { ...e.core.props, ...e.$attrs }, A(e.core.listeners), { onComputedPosition: e.onComputedPosition }), {
    default: $(() => [
      e.showArrow ? (m(), S("span", {
        key: 0,
        ref: "floatingArrow",
        style: W({ display: "flex", position: "absolute", ...e.arrowStyle }),
        "data-arrow-placement": e.arrowPlacement
      }, [
        T(e.$slots, "arrow")
      ], 12, Pd)) : M("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["middleware", "data-floating-placement", "data-floating-alignment", "onComputedPosition"]);
}
const Ad = /* @__PURE__ */ E(_d, [["render", Fd]]), fs = "elementic-floating", Hd = {
  Floating: Ad
}, zd = {
  CoreFloatingInstall: Fr
}, at = {
  install: (e, t) => {
    p.isModuleInstalled(e, fs) || (p.installDependencies(e, zd, t), p.installComponents(e, Hd), p.markModuleAsInstalled(e, fs));
  }
}, ms = "elementic-dropdowns", Rd = {
  Dropdown: kd,
  DropdownItem: Td,
  DropdownItemDivider: Dd,
  DropdownItemHeader: Vd
}, Bd = {
  CoreDropdownsInstall: Ar,
  FloatingInstall: at
}, Zd = {
  install: (e, t) => {
    p.isModuleInstalled(e, ms) || (p.installDependencies(e, Bd, t), p.installComponents(e, Rd), p.markModuleAsInstalled(e, ms));
  }
}, Wd = O({
  name: "h-fragment",
  props: {
    id: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = Bt(), s = ie("fragmentContainer"), o = V(() => e.id === s.active.value), i = V(() => s.transition);
    return {
      isActive: o,
      transitionName: i,
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
function qd(e, t, n, s, o, i) {
  return m(), I(pe, {
    name: e.transitionName,
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave,
    "enter-active-class": `${e.transitionName}-enter-active -transitioning`,
    "leave-active-class": `${e.transitionName}-leave-active -transitioning`
  }, {
    default: $(() => [
      e.isActive ? (m(), S("div", {
        key: 0,
        class: d([e.css_root])
      }, [
        T(e.$slots, "default")
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 8, ["name", "onEnter", "onAfterEnter", "onBeforeLeave", "enter-active-class", "leave-active-class"]);
}
const jd = /* @__PURE__ */ E(Wd, [["render", qd]]), Ud = O({
  name: "h-fragment-container",
  props: {
    ...Hr,
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
    }, i = (c) => {
      n.new = c, n.old !== null && Re(o);
    }, r = (c) => {
      n.old = c, n.new !== null && Re(o);
    }, a = () => {
      n.old = null, n.new = null, n.target = null;
    }, l = zr().as("div").props(["active"]).build();
    return ht("fragmentContainer", {
      active: V(() => e.active),
      transition: e.transition,
      setNewHeight: i,
      setOldHeight: r,
      clearHeights: a
    }), {
      core: l,
      actualHeight: s,
      heights: n,
      ...D()
    };
  }
});
function Yd(e, t, n, s, o, i) {
  const r = v("hr-fragment-container");
  return m(), I(r, _(e.core.props, {
    class: [e.css_root, e.transition ? `${e.transition}-container` : null],
    style: { height: e.actualHeight }
  }), {
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "style"]);
}
const Gd = /* @__PURE__ */ E(Ud, [["render", Yd]]), hs = "elementic-fragments", Kd = {
  Fragment: jd,
  FragmentContainer: Gd
}, Jd = {
  CoreFragmentsInstall: Rr
}, Qd = {
  install: (e, t) => {
    p.isModuleInstalled(e, hs) || (p.installDependencies(e, Jd, t), p.installComponents(e, Kd), p.markModuleAsInstalled(e, hs));
  }
}, Xd = /* @__PURE__ */ O({
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
    return ht("list-style", n), {
      ...D()
    };
  },
  render() {
    return this.animate ? On(Ps, {
      name: "list-complete",
      tag: "ul",
      class: [this.css_root]
    }, this.$slots.default) : On("ul", {
      class: [this.css_root]
    }, this.$slots.default());
  }
}), xd = O({
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
    const n = ie("list-style");
    return {
      ...D(),
      listStyle: n
    };
  }
});
function ef(e, t, n, s, o, i) {
  return m(), S("li", {
    class: d([e.css_root, `-list-style-${e.listStyle}`])
  }, [
    g("div", {
      class: d([e.css_ec("content")])
    }, [
      T(e.$slots, "default", {}, () => [
        g("div", {
          class: d([e.css_ec("text")])
        }, N(e.text), 3),
        e.subText ? (m(), S("div", {
          key: 0,
          class: d([e.css_ec("sub-text")])
        }, N(e.subText), 3)) : M("", !0)
      ])
    ], 2)
  ], 2);
}
const tf = /* @__PURE__ */ E(xd, [["render", ef]]), ps = "elementic-lists", nf = {
  List: Xd,
  ListItem: tf
}, sf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ps) || (p.installComponents(e, nf), p.markModuleAsInstalled(e, ps));
  }
}, of = O({
  name: "h-notification",
  props: {
    ...Br,
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
    const n = D(), s = ie("notification-transition-end"), o = je({});
    ee(o, () => {
      Object.keys(o).length === 0 && s();
    });
    const i = (c) => {
      e.visible === !1 && delete o[c];
    }, r = (c) => {
      e.visible === !1 && (o[c] = !0);
    }, a = (c) => ({
      class: [n.css_root.value, `-color-${e.color}`]
    }), l = Zr().as("div", a).props(["visible"]).build();
    return {
      Icons: x,
      core: l,
      ...D(),
      transitionEnded: i,
      transitionStarted: r
    };
  }
}), rf = ["onMouseenter", "onMouseleave"], af = ["innerHTML"];
function lf(e, t, n, s, o, i) {
  const r = v("h-icon-button"), a = v("hr-notification");
  return K((m(), I(a, _(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      g("div", {
        class: d([e.css_ec("box")]),
        onMouseenter: l.pauseDuration,
        onMouseleave: l.resumeDuration
      }, [
        e.showCloseButton ? (m(), S("div", {
          key: 0,
          class: d([e.css_ec("close-icon")])
        }, [
          C(r, {
            icon: e.Icons.close,
            styling: "subtle",
            color: e.color,
            size: "small",
            onClick: l.close
          }, null, 8, ["icon", "color", "onClick"])
        ], 2)) : M("", !0),
        e.$slots.title || e.title ? (m(), S("div", {
          key: 1,
          class: d([e.css_ec("title")])
        }, [
          T(e.$slots, "title", {}, () => [
            g("span", { innerHTML: e.title }, null, 8, af)
          ])
        ], 2)) : M("", !0),
        g("div", {
          class: d([e.css_ec("content")])
        }, [
          T(e.$slots, "default")
        ], 2)
      ], 42, rf)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const cf = /* @__PURE__ */ E(of, [["render", lf]]), uf = /* @__PURE__ */ O({
  name: "h-notification-wrapper",
  components: {},
  props: {
    ...Wr,
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
    const n = D(), s = (r) => ({
      class: [n.css_root.value],
      "data-placement": e.placement
    });
    return {
      core: qr().as("div", s).props(["name"]).build(),
      ...n,
      transitionEnded: (r) => {
        const a = r.dataset.id;
        Us.getWrapper(e.name).getNotification(a).transitionEnd();
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
function df(e, t, n, s, o, i) {
  const r = v("hr-notification-wrapper");
  return m(), I(r, _(e.core.props, A(e.core.listeners), {
    style: { width: e.width }
  }), {
    default: $((a) => [
      C(Ps, {
        tag: "div",
        class: d(e.css_ec("transition-group")),
        name: "notification-slide-in",
        onAfterLeave: e.transitionEnded
      }, {
        default: $(() => [
          (m(!0), S(oe, null, he(a.notifications, (l) => (m(), I(Ns(l.component), _({
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
const ff = /* @__PURE__ */ E(uf, [["render", df]]), ys = "elementic-notifications", mf = {
  Notification: cf,
  NotificationWrapper: ff
}, hf = {
  CoreNotificationsInstall: jr
}, pf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ys) || (p.installDependencies(e, hf, t), p.installComponents(e, mf), p.markModuleAsInstalled(e, ys));
  }
}, yf = O({
  name: "h-paginator",
  props: {
    ...Ur,
    ...Yr,
    ...Gr,
    ...Kr
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(null), s = k(0), o = k(0), i = V(() => ({
      transform: `translate(${o.value}px, 0)`,
      width: `${s.value}px`
    })), r = () => {
      n.value && (o.value = n.value.offsetLeft + 4, s.value = n.value.offsetWidth - 8);
    };
    ee(() => e.modelValue, () => {
      Re(r);
    }), st(r);
    const a = Jr().as("div").props(["modelValue", "pageSize", "count", "delta"]).events(["update:modelValue"]).build();
    return {
      Icons: x,
      core: a,
      activeButton: n,
      indicatorStyle: i,
      ...D()
    };
  }
}), gf = ["disabled", "onClick"], vf = ["onClick"], bf = ["onClick"], wf = ["disabled", "onClick"];
function $f(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-paginator");
  return m(), I(a, _(e.core.props, {
    class: [e.css_root]
  }, A(e.core.listeners)), {
    default: $((l) => [
      g("div", {
        class: d([e.css_ec("indicator"), { "-hidden": e.activeButton === null }]),
        style: W(e.indicatorStyle)
      }, null, 6),
      g("button", {
        class: d([e.css_ec("button")]),
        disabled: l.currentPage === 1,
        onClick: (c) => l.onPaginationButtonClick(l.currentPage - 1)
      }, [
        C(r, {
          icon: e.Icons.arrowLeft,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, gf),
      (m(!0), S(oe, null, he(l.buttons, (c) => (m(), S(oe, null, [
        c === l.currentPage ? (m(), S("button", {
          key: c,
          ref_for: !0,
          ref: "activeButton",
          class: d([e.css_ec("button"), "-active"]),
          onClick: (u) => l.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, vf)) : (m(), S("button", {
          key: c,
          class: d([e.css_ec("button")]),
          onClick: (u) => l.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, bf))
      ], 64))), 256)),
      g("button", {
        class: d([e.css_ec("button")]),
        disabled: l.currentPage === l.pages,
        onClick: (c) => l.onPaginationButtonClick(l.currentPage + 1)
      }, [
        C(r, {
          icon: e.Icons.arrowRight,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, wf)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Sf = /* @__PURE__ */ E(yf, [["render", $f]]), gs = "elementic-paginators", kf = {
  Paginator: Sf
}, If = {
  CorePaginatorsInstall: Qr
}, Cf = {
  install: (e, t) => {
    p.isModuleInstalled(e, gs) || (p.installDependencies(e, If, t), p.installComponents(e, kf), p.markModuleAsInstalled(e, gs));
  }
}, vs = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, Tf = O({
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
      onClickOutside: (r) => {
        t.emit("clickOutside", r);
      },
      onComputedPosition: (r) => {
        const a = r.placement.split("-")[0];
        n.value = vs[a], t.emit("computedPosition", r);
      },
      transition: n,
      ...D()
    };
  }
});
function Of(e, t, n, s, o, i) {
  const r = v("h-floating");
  return m(), I(r, {
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
    arrow: $(() => [
      g("div", {
        class: d([e.css_ec("arrow")])
      }, null, 2)
    ]),
    default: $(() => [
      g("div", {
        class: d([e.css_ec("content")])
      }, [
        T(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "reference", "transition", "visible", "placement", "middleware", "onClickOutside", "onComputedPosition"]);
}
const Mf = /* @__PURE__ */ E(Tf, [["render", Of]]), bs = "elementic-popovers", Df = {
  Popover: Mf
}, Ef = {
  FloatingInstall: at
}, Lf = {
  install: (e, t) => {
    p.isModuleInstalled(e, bs) || (p.installDependencies(e, Ef, t), p.installComponents(e, Df), p.markModuleAsInstalled(e, bs));
  }
}, Vf = O({
  name: "h-progress-bar",
  props: {
    ...Xr,
    ...xr,
    ...ei,
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
    const n = k(), s = V(() => n.value ? e.showPercentage ? `${n.value.percentage}%` : e.value : ""), o = V(() => n.value ? `${Math.min(100, n.value.percentage)}%` : "0%"), i = V(() => {
      const a = 100 / (e.value - e.minimum) * (e.maximum - e.minimum);
      return Math.round(a * 10) / 10;
    });
    return {
      core: ti().as("div").props(["value", "minimum", "maximum"]).build(),
      coreProgressBar: n,
      overflowOffset: i,
      label: s,
      width: o,
      ...D()
    };
  }
});
function Nf(e, t, n, s, o, i) {
  const r = v("hr-progress-bar");
  return m(), I(r, _({
    ref: "coreProgressBar",
    class: [e.css_root, `-size-${e.size}`, `-styling-${e.styling}`, { "-striped": e.striped, "-animated": e.animated }]
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
      g("div", {
        class: d([e.css_ec("back")])
      }, [
        g("div", {
          class: d([e.css_ec("filler")]),
          style: W({ width: e.width })
        }, [
          (e.showPercentage || e.showValue) && e.size === "large" ? (m(), S("span", {
            key: 0,
            class: d([e.css_ec("label")])
          }, N(e.label), 3)) : M("", !0)
        ], 6),
        e.showOverflowIndicator ? K((m(), S("div", {
          key: 0,
          class: d([e.css_ec("overflow-indicator")]),
          style: W({ left: `${e.overflowOffset}%` })
        }, null, 6)), [
          [J, e.overflowOffset < 100]
        ]) : M("", !0)
      ], 2),
      (e.showPercentage || e.showValue) && e.size === "normal" ? (m(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : M("", !0)
    ]),
    _: 1
  }, 16, ["class"]);
}
const _f = /* @__PURE__ */ E(Vf, [["render", Nf]]), ws = "elementic-progress-bars", Pf = {
  ProgressBar: _f
}, Ff = {
  CoreProgressBarsInstall: ni
}, Af = {
  install: (e, t) => {
    p.isModuleInstalled(e, ws) || (p.installDependencies(e, Ff, t), p.installComponents(e, Pf), p.markModuleAsInstalled(e, ws));
  }
}, Hf = O({
  name: "h-radio-button",
  props: {
    ...si,
    ...oi,
    ...ri,
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
    const n = k(!1), s = (i) => ({
      class: { "-checked": i.state, "-disabled": i.disabled }
    });
    return {
      core: ii().as("label", s).props(["modelValue", "value", "disabled"]).events(["update:modelValue"]).build(),
      hasFocus: n,
      ...D()
    };
  }
}), zf = ["checked", "disabled", "onChange"];
function Rf(e, t, n, s, o, i) {
  const r = v("hr-radio-button");
  return m(), I(r, _({
    class: [e.css_root, { "-focus": e.hasFocus, "-bordered": e.bordered }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      g("span", {
        class: d([e.css_ec("container")])
      }, [
        g("input", {
          class: d([e.css_ec("input")]),
          checked: a.state,
          type: "radio",
          disabled: a.disabled,
          onChange: a.onChange,
          onFocus: t[0] || (t[0] = (l) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (l) => e.hasFocus = !1)
        }, null, 42, zf),
        g("div", {
          class: d([e.css_ec("check-icon")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.label ? (m(), S("span", {
        key: 0,
        class: d([e.css_ec("label")])
      }, [
        T(e.$slots, "default", {}, () => [
          se(N(e.label), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Bf = /* @__PURE__ */ E(Hf, [["render", Rf]]), $s = "elementic-radio-buttons", Zf = {
  RadioButton: Bf
}, Wf = {
  CoreRadioButtonsInstall: ai
}, qf = {
  install: (e, t) => {
    p.isModuleInstalled(e, $s) || (p.installDependencies(e, Wf, t), p.installComponents(e, Zf), p.markModuleAsInstalled(e, $s));
  }
}, jf = O({
  name: "h-scroll-container",
  props: {
    ...li,
    ...ci,
    ...ui,
    ...di,
    ...fi,
    ...mi,
    ...hi,
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e, t) {
    const n = k(), s = k(), o = k(), i = k(), r = k();
    ee([s, o], () => {
      n.value.registerBar("vertical", s.value, o.value);
    }), ee([i, r], () => {
      n.value.registerBar("horizontal", i.value, r.value);
    });
    const a = (u, h) => {
      n.value.scrollTo(u, h);
    }, l = (u) => ({
      class: { "-hover": u.anyHover, "-dragging": u.anyDragging, "-is-hidden": u.hidden }
    });
    return {
      core: pi().as("div", l).props(["horizontal", "vertical", "autoHide", "autoHideDelay", "minimumSize", "containerClasses", "wrapperClasses"]).build(),
      scrollContainer: n,
      verticalTrack: s,
      verticalThumb: o,
      horizontalTrack: i,
      horizontalThumb: r,
      ...D(),
      scrollTo: a
    };
  }
});
function Uf(e, t, n, s, o, i) {
  const r = v("hr-scroll-container");
  return m(), I(r, _({
    ref: "scrollContainer",
    class: [e.css_root, `-color-${e.color}`]
  }, e.core.props, A(e.core.listeners)), {
    verticalBar: $((a) => [
      K(g("div", {
        ref: "verticalTrack",
        class: d([e.css_ec("track"), "-vertical", { "-hover": a.trackHover, "-dragging": a.dragging }])
      }, [
        g("div", {
          ref: "verticalThumb",
          class: d([e.css_ec("thumb"), { "-hover": a.thumbHover, "-dragging": a.dragging }]),
          style: W({ height: `${a.size}px`, transform: `translate(0, ${a.offset}px)` })
        }, null, 6)
      ], 2), [
        [J, a.visible]
      ])
    ]),
    horizontal: $((a) => [
      K(g("div", {
        ref: "horizontalTrack",
        class: d([e.css_ec("track"), "-horizontal", { "-hover": a.trackHover, "-dragging": a.dragging }])
      }, [
        g("div", {
          ref: "horizontalThumb",
          class: d([e.css_ec("thumb"), { "-hover": a.thumbHover, "-dragging": a.dragging }]),
          style: W({ height: `${a.size}px`, transform: `translate(0, ${a.offset}px)` })
        }, null, 6)
      ], 2), [
        [J, a.visible]
      ])
    ]),
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Yf = /* @__PURE__ */ E(jf, [["render", Uf]]), Ss = "elementic-scroll-containers", Gf = {
  ScrollContainer: Yf
}, Kf = {
  CoreScrollContainersInstall: yi
}, Ao = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ss) || (p.installDependencies(e, Kf, t), p.installComponents(e, Gf), p.markModuleAsInstalled(e, Ss));
  }
}, Jf = O({
  name: "h-select",
  props: {
    ...gi,
    ...vi,
    ...bi,
    ...wi,
    ...$i,
    ...Si,
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "focusedItemChanged"],
  setup(e, t) {
    const n = k(), s = k(), o = k(""), i = V(() => [
      kn({
        padding: 8,
        apply(u) {
          Object.assign(u.elements.floating.style, {
            width: `${u.rects.reference.width}px`
          }), o.value = `${u.availableHeight}px`;
        }
      })
    ]), r = (u) => {
      u.outsideFloating && u.outsideReference && n.value.close();
    }, a = (u) => {
      u && u.component && u.component.vnode && u.component.vnode.el && u.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, l = (u) => ({
      class: { "-active": u.menuVisible, "-disabled": u.disabled }
    }), c = ki().as("div", l).props(["modelValue", "disabled", "hideOnSelect", "allowClear", "multiple", "compare"]).events(["update:modelValue", "focusedItemChanged"]).build();
    return {
      Icons: x,
      core: c,
      select: n,
      button: s,
      menuMaxHeight: o,
      floatingMiddleware: i,
      onClickOutside: r,
      onFocusedItemChanged: a,
      ...D()
    };
  }
}), Qf = ["disabled", "title", "onClick", "onKeydown"], Xf = ["onClick"], xf = ["onKeydown"];
function em(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-scroll-container"), l = v("h-floating"), c = v("hr-select");
  return m(), I(c, _({
    ref: "select",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
      g("button", {
        ref: "button",
        type: "button",
        class: d([e.css_ec("button")]),
        disabled: u.disabled,
        title: u.modelValue && u.modelValue.length !== 0 ? u.selectedText : null,
        onClick: u.onButtonClick,
        onKeydown: u.onKeyEvents
      }, [
        g("span", {
          class: d([e.css_ec("label"), { "-placeholder": !u.anythingSelected }])
        }, [
          u.anythingSelected ? T(e.$slots, "selection", {
            key: 0,
            items: u.selectedItems
          }, () => [
            se(N(u.selectedText), 1)
          ]) : T(e.$slots, "placeholder", { key: 1 }, () => [
            se(N(e.placeholder), 1)
          ])
        ], 2),
        C(pe, { name: "fade-fast" }, {
          default: $(() => [
            u.allowClear && u.menuVisible ? M("", !0) : (m(), S("div", {
              key: 0,
              class: d([e.css_ec("icon")])
            }, [
              C(r, {
                icon: e.Icons.chevronDown,
                size: "16px"
              }, null, 8, ["icon"])
            ], 2))
          ]),
          _: 2
        }, 1024),
        C(pe, { name: "fade-fast" }, {
          default: $(() => [
            u.allowClear && u.menuVisible ? (m(), S("div", {
              key: 0,
              class: d([e.css_ec("clear-icon")]),
              title: "Clear",
              onClick: u.clearValue
            }, [
              C(r, {
                icon: e.Icons.close,
                size: "16px"
              }, null, 8, ["icon"])
            ], 10, Xf)) : M("", !0)
          ]),
          _: 2
        }, 1024)
      ], 42, Qf),
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
        default: $(() => [
          g("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: W({ maxHeight: e.menuMaxHeight })
          }, [
            C(a, null, {
              default: $(() => [
                T(e.$slots, "default")
              ]),
              _: 3
            })
          ], 46, xf)
        ]),
        _: 2
      }, 1032, ["class", "reference", "visible", "middleware", "onClickOutside", "onHide", "onTransitionStateChanged"])
    ]),
    _: 3
  }, 16, ["class", "onFocusedItemChanged"]);
}
const tm = /* @__PURE__ */ E(Jf, [["render", em]]), nm = O({
  name: "h-select-item",
  props: {
    ...Ii,
    ...Ci,
    ...Ti,
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
      Icons: x,
      core: s,
      ...D()
    };
  }
});
function sm(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("hr-select-item");
  return m(), I(a, _({
    tabindex: "-1",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      T(e.$slots, "default", {}, () => [
        e.icon ? (m(), I(r, {
          key: 0,
          class: d([e.css_ec("icon")]),
          icon: e.icon,
          size: "16"
        }, null, 8, ["class", "icon"])) : M("", !0),
        g("span", {
          class: d([e.css_ec("label")])
        }, N(e.label), 3)
      ]),
      g("div", {
        class: d([e.css_ec("checkmark")])
      }, [
        C(pe, { name: "fade-fast" }, {
          default: $(() => [
            K(C(r, {
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
const om = /* @__PURE__ */ E(nm, [["render", sm]]), rm = O({
  name: "h-select-item-divider",
  setup(e, t) {
    const n = ie("select"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function im(e, t, n, s, o, i) {
  return e.visible ? (m(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : M("", !0);
}
const am = /* @__PURE__ */ E(rm, [["render", im]]), lm = O({
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
    const n = ie("select"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function cm(e, t, n, s, o, i) {
  const r = v("h-icon");
  return e.visible ? (m(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, [
    T(e.$slots, "default", {}, () => [
      e.icon ? (m(), I(r, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      g("span", {
        class: d([e.css_ec("text")])
      }, N(e.label), 3)
    ])
  ], 2)) : M("", !0);
}
const um = /* @__PURE__ */ E(lm, [["render", cm]]), ks = "elementic-selects", dm = {
  Select: tm,
  SelectItem: om,
  SelectItemDivider: am,
  SelectItemHeader: um
}, fm = {
  CoreSelectsInstall: Mi,
  FloatingInstall: at,
  ScrollContainersInstall: Ao
}, mm = {
  install: (e, t) => {
    p.isModuleInstalled(e, ks) || (p.installDependencies(e, fm, t), p.installComponents(e, dm), p.markModuleAsInstalled(e, ks));
  }
}, hm = O({
  name: "h-slider",
  props: {
    ...Di,
    ...Ei,
    ...Li,
    ...Vi,
    ...Ni,
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
    const n = k(), s = k(!1), o = V(() => n.value && e.showSteps ? n.value.steps : 1), i = V(() => {
      if (n.value) {
        let h = n.value.percentage;
        return `${Math.max(0, Math.min(100, h))}%`;
      } else
        return "0%";
    }), r = (h) => {
      e.disabled || (s.value = !0, h.preventDefault());
    }, a = (h) => {
      if (s.value) {
        const f = n.value.$el.getBoundingClientRect();
        let y = e.vertical ? 100 / f.height * (h.pageY - f.top) : 100 / f.width * (h.pageX - f.left);
        e.invert && (y = 100 - y);
        const w = n.value.getValueFromPercentage(y);
        t.emit("update:modelValue", w), h.preventDefault();
      }
    }, l = (h) => {
      s.value = !1;
    }, c = (h) => {
      if (!e.disabled) {
        let f = e.vertical ? 100 / n.value.$el.clientHeight * h.offsetY : 100 / n.value.$el.clientWidth * h.offsetX;
        e.invert && (f = 100 - f);
        const y = n.value.getValueFromPercentage(f);
        t.emit("update:modelValue", y), h.preventDefault();
      }
    };
    return {
      core: _i().as("div").props(["modelValue", "disabled", "minimum", "maximum", "stepSize"]).build(),
      coreSlider: n,
      size: i,
      steps: o,
      handleMouseDown: r,
      handleMouseMove: a,
      handleMouseUp: l,
      handleClick: c,
      dragging: s,
      ...D()
    };
  }
});
function pm(e, t, n, s, o, i) {
  const r = v("hr-slider"), a = Wo("document-event");
  return K((m(), I(r, _({
    ref: "coreSlider",
    class: [e.css_root, e.vertical ? "-vertical" : "-horizontal", { "-invert": e.invert, "-dragging": e.dragging, "-disabled": e.disabled }]
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
      g("div", {
        class: d([e.css_ec("bar")]),
        onClick: t[0] || (t[0] = (...l) => e.handleClick && e.handleClick(...l))
      }, [
        g("div", {
          class: d([e.css_ec("back")])
        }, [
          (m(!0), S(oe, null, he(e.steps, (l) => (m(), S("div", {
            class: d([e.css_ec("step")])
          }, null, 2))), 256))
        ], 2),
        g("div", {
          class: d([e.css_ec("filler")]),
          style: W({ "--size": e.size })
        }, null, 6)
      ], 2),
      g("div", {
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
const ym = /* @__PURE__ */ E(hm, [["render", pm]]), Is = "elementic-sliders", gm = {
  Slider: ym
}, vm = {
  CoreSlidersInstall: Pi
}, bm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Is) || (p.installDependencies(e, vm, t), p.installComponents(e, gm), p.markModuleAsInstalled(e, Is));
  }
}, wm = O({
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
function $m(e, t, n, s, o, i) {
  return m(), S("div", {
    class: d([e.css_root, `-color-${e.color}`]),
    style: W({ width: e.size, height: e.size, "--border-thickness": e.thickness })
  }, null, 6);
}
const Ho = /* @__PURE__ */ E(wm, [["render", $m]]), Sm = O({
  name: "h-spinner-overlay",
  components: { HSpinner: Ho },
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
function km(e, t, n, s, o, i) {
  const r = v("h-spinner");
  return m(), S("div", {
    class: d([e.css_root, { "-loading": e.loading, "-has-label": e.label }, `-color-${e.color}`])
  }, [
    g("div", {
      class: d([e.css_ec("content")])
    }, [
      T(e.$slots, "default")
    ], 2),
    g("div", {
      class: d([e.css_ec("overlay")])
    }, [
      C(r),
      e.label ? (m(), S("div", {
        key: 0,
        class: d([e.css_ec("label")])
      }, N(e.label), 3)) : M("", !0)
    ], 2)
  ], 2);
}
const Im = /* @__PURE__ */ E(Sm, [["render", km]]), Cs = "elementic-spinners", Cm = {
  Spinner: Ho,
  SpinnerOverlay: Im
}, Tm = {}, Om = {
  install: (e, t) => {
    p.isModuleInstalled(e, Cs) || (p.installDependencies(e, Tm, t), p.installComponents(e, Cm), p.markModuleAsInstalled(e, Cs));
  }
}, Mm = O({
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
function Dm(e, t, n, s, o, i) {
  const r = v("h-icon");
  return m(), S("div", {
    class: d([e.css_root, { "-current": e.step.isCurrent, "-done": e.step.isDone, "-last": e.step.isLast, "-locked": e.step.isLocked }]),
    onClick: t[0] || (t[0] = (...a) => e.onClick && e.onClick(...a))
  }, [
    g("div", {
      class: d([e.css_ec("container")])
    }, [
      e.step.data.icon ? (m(), I(r, {
        key: 0,
        class: d([e.css_ec("icon")]),
        icon: e.step.data.icon,
        size: "16px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.step.data.icon ? (m(), I(r, {
        key: 1,
        class: d([e.css_ec("done-icon")]),
        icon: e.Icons.check,
        size: "20px"
      }, null, 8, ["class", "icon"])) : M("", !0),
      e.step.data.label ? (m(), S("div", {
        key: 2,
        class: d([e.css_ec("label")])
      }, N(e.step.data.label), 3)) : M("", !0)
    ], 2)
  ], 2);
}
const Em = /* @__PURE__ */ E(Mm, [["render", Dm]]), Lm = O({
  name: "h-steps-navigator",
  props: {
    ...Fi,
    ...Ai,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = V(() => e.steps.filter((f) => f.data.label).length > 0), i = k(0), r = k(0), a = V(() => e.vertical ? {
      top: `${r.value}px`,
      height: `${i.value}px`
    } : {
      left: `${r.value}px`,
      width: `${i.value}px`
    }), l = () => {
      if (s.value.length) {
        const f = s.value[0].$el;
        r.value = e.vertical ? f.offsetTop + f.offsetHeight : f.offsetLeft + f.offsetWidth;
        const y = s.value.find((w) => w.step.id === e.modelValue);
        y && (i.value = Math.max(0, (e.vertical ? y.$el.offsetTop : y.$el.offsetLeft) - r.value));
      }
    }, c = (f, y) => {
      y.id === e.modelValue && l();
    };
    _s(() => {
      s.value = [];
    }), st(() => {
      l(), ee(() => n.value.visibleSteps, () => Re(l));
    }), ee(() => e.modelValue, l);
    const u = () => {
      n.value.nextStep();
    }, h = Hi().as("div").props(["modelValue", "steps"]).events(["update:modelValue"]).build();
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
function Vm(e, t, n, s, o, i) {
  const r = v("h-step-item"), a = v("hr-steps-navigator");
  return m(), I(a, _({
    ref: "stepsNavigator",
    class: [e.css_root, { "-vertical": e.vertical, "-has-labels": e.hasLabels }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      (m(!0), S(oe, null, he(l.visibleSteps, (c, u) => (m(), S(oe, {
        key: c.id
      }, [
        C(r, {
          ref_for: !0,
          ref: (h) => e.stepsRefs[u] = h,
          step: c,
          onClick: (h) => l.onStepClick(c)
        }, null, 8, ["step", "onClick"]),
        u !== l.visibleSteps.length - 1 ? (m(), S("div", {
          key: `${c.id}-line`,
          class: d([e.css_ec("step-line")])
        }, null, 2)) : M("", !0)
      ], 64))), 128)),
      g("div", {
        class: d([e.css_ec("indicator"), { "-hidden": l.currentStep === null }]),
        style: W(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Nm = /* @__PURE__ */ E(Lm, [["render", Vm]]), Ts = "elementic-steps", _m = {
  StepItem: Em,
  StepsNavigator: Nm
}, Pm = {
  CoreStepsInstall: zi
}, Fm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ts) || (p.installDependencies(e, Pm, t), p.installComponents(e, _m), p.markModuleAsInstalled(e, Ts));
  }
}, Am = O({
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
    const n = D(), s = k(!1), o = (r) => ({
      class: [n.css_root.value, {
        "-focus": s,
        "-checked": r.state,
        "-indeterminate": r.indeterminate,
        "-disabled": r.disabled
      }]
    });
    return {
      core: Bs().as("label", o).props(["modelValue", "value", "disabled", "visible"]).events(["update:modelValue"]).build(),
      hasFocus: s,
      ...n
    };
  }
}), Hm = ["checked", "disabled", "onChange"];
function zm(e, t, n, s, o, i) {
  const r = v("hr-checkbox");
  return K((m(), I(r, _(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      e.$slots.leftText || e.leftText ? (m(), S("span", {
        key: 0,
        class: d([e.css_ec("left-label")])
      }, [
        T(e.$slots, "leftText", {}, () => [
          se(N(e.leftText), 1)
        ])
      ], 2)) : M("", !0),
      g("div", {
        class: d([e.css_ec("container")])
      }, [
        g("input", {
          class: d([e.css_ec("back")]),
          checked: a.state,
          type: "checkbox",
          disabled: a.disabled,
          onChange: a.onChange,
          onFocus: t[0] || (t[0] = (l) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (l) => e.hasFocus = !1)
        }, null, 42, Hm),
        g("span", {
          class: d([e.css_ec("back-inner")])
        }, null, 2),
        g("span", {
          class: d([e.css_ec("dot")])
        }, null, 2)
      ], 2),
      e.$slots.default || e.rightText ? (m(), S("span", {
        key: 1,
        class: d([e.css_ec("right-label")])
      }, [
        T(e.$slots, "rightText", {}, () => [
          se(N(e.rightText), 1)
        ])
      ], 2)) : M("", !0)
    ]),
    _: 3
  }, 16)), [
    [J, e.visible]
  ]);
}
const Rm = /* @__PURE__ */ E(Am, [["render", zm]]), Os = "elementic-switches", Bm = {
  Switch: Rm
}, Zm = {
  CoreCheckboxInstall: Zs
}, Wm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Os) || (p.installDependencies(e, Zm, t), p.installComponents(e, Bm), p.markModuleAsInstalled(e, Os));
  }
}, qm = O({
  name: "h-tab-item",
  props: {
    ...Ri,
    ...Bi,
    label: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = k(), s = ie("updateIndicator"), o = ie("tabsNavigator"), i = je({
      id: e.id
    });
    st(() => {
      i.ref = n.value.$el, o.addTabInstance(i);
    }), qo(() => {
      o.removeTabInstance(i);
    }), jo(() => {
      s && s();
    });
    const r = (l) => ({
      class: { "-active": l.active, "-disabled": l.disabled },
      onClick: l.onClick,
      onKeydown: (c) => {
        c.key === "Enter" && l.onClick();
      }
    });
    return {
      core: Zi().as("div", r).props(["id", "disabled"]).build(),
      tab: n,
      ...D()
    };
  }
});
function jm(e, t, n, s, o, i) {
  const r = v("hr-tab-item");
  return m(), I(r, _({
    ref: "tab",
    tabindex: "0",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
      se(N(e.label) + " ", 1)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Um = /* @__PURE__ */ E(qm, [["render", jm]]), Ym = O({
  name: "h-tabs-navigator",
  props: {
    ...Wi,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = (f) => {
      s.value.push(f);
    }, i = (f) => {
      s.value = ji.remove(s.value, f);
    }, r = k(0), a = k(0), l = V(() => e.vertical ? {
      transform: `translate(0, ${a.value}px)`,
      height: `${r.value}px`
    } : {
      transform: `translate(${a.value}px, 0)`,
      width: `${r.value}px`
    }), c = () => {
      if (n.value && n.value.activeTab) {
        const f = n.value.activeTab.id, y = s.value.find((w) => w.id === f);
        y && y.ref && (a.value = e.vertical ? y.ref.offsetTop : y.ref.offsetLeft, r.value = e.vertical ? y.ref.offsetHeight : y.ref.offsetWidth);
      }
    }, u = (f) => {
      n.value = f, ee(() => n.value ? n.value.activeTab : null, c);
    };
    st(() => c()), ht("updateIndicator", c), ht("tabsNavigator", {
      addTabInstance: o,
      removeTabInstance: i
    });
    const h = qi().as("div").props(["modelValue"]).events(["update:modelValue"]).build();
    return {
      setNavigator: u,
      core: h,
      indicatorStyle: l,
      updateIndicator: c,
      ...D()
    };
  }
});
function Gm(e, t, n, s, o, i) {
  const r = v("hr-tabs-navigator");
  return m(), I(r, _({
    ref: (a) => e.setNavigator(a),
    class: [e.css_root, { "-vertical": e.vertical }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      T(e.$slots, "default"),
      g("div", {
        class: d([e.css_ec("indicator"), { "-hidden": a.activeTab === null }]),
        style: W(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Km = /* @__PURE__ */ E(Ym, [["render", Gm]]), Ms = "elementic-tabs", Jm = {
  TabItem: Um,
  TabsNavigator: Km
}, Qm = {
  CoreTabsInstall: Ui
}, Xm = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ms) || (p.installDependencies(e, Qm, t), p.installComponents(e, Jm), p.markModuleAsInstalled(e, Ms));
  }
}, xm = /* @__PURE__ */ O({
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
    const n = ie("table"), s = V(() => e.sort.key === null ? "-unsorted" : e.sort.key === e.column.property ? `-sorting-${e.sort.direction}` : null), o = () => {
      n.setSorting(e.column.property);
    }, i = D(), r = () => C("div", {
      onClick: o,
      class: [i.css_ec("sorting-icon"), s.value]
    }, [C(v("h-icon"), {
      class: [i.css_ec("sort-up")],
      icon: "chevron-up",
      size: "16px"
    }, null), C(v("h-icon"), {
      class: [i.css_ec("sort-down")],
      icon: "chevron-down",
      size: "16px"
    }, null)]);
    return () => C("th", {
      class: [i.css_root.value, {
        "-sortable": e.column.sortable
      }]
    }, [C("div", {
      class: [i.css_ec("container")]
    }, [C("div", {
      class: [i.css_ec("content")]
    }, [e.column.headerTemplate ? e.column.headerTemplate({
      data: e.column.data
    }) : e.column.data.label]), e.column.sortable ? r() : null])]);
  }
}), eh = /* @__PURE__ */ O({
  name: "h-table-row",
  props: {
    column: {
      type: Yi,
      required: !0
    },
    row: {
      type: Gi,
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
    })]), i = () => C("td", {
      class: [n.value],
      style: {
        width: s
      }
    }, [e.row.getValue(e.column.property, e.column.formatter)]);
    return () => e.column.template ? o() : i();
  }
}), th = O({
  name: "h-table-row",
  components: { HTableCell: eh },
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
    const n = V(() => typeof e.classes == "function" ? e.classes(e.row.data) : e.classes), s = (i) => ({
      onClick: i.onClick
    });
    return {
      core: Ki().as("tr", s).props(["columns", "row"]).events(["rowClick"]).build(),
      rowClasses: n,
      ...D()
    };
  }
});
function nh(e, t, n, s, o, i) {
  const r = v("h-table-cell"), a = v("hr-table-row");
  return m(), I(a, _({
    class: [e.css_root, { "-selected": e.row.selected }, e.rowClasses]
  }, e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      (m(!0), S(oe, null, he(e.columns, (c) => (m(), I(r, {
        key: c.property,
        row: e.row,
        column: c
      }, null, 8, ["row", "column"]))), 128))
    ]),
    _: 1
  }, 16, ["class"]);
}
const sh = /* @__PURE__ */ E(th, [["render", nh]]), oh = O({
  name: "h-table",
  components: { HTableRow: sh, HTableColumnHeader: xm },
  props: {
    ...Ji,
    ...Qi,
    ...Xi,
    ...xi,
    ...ea,
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
      core: ta().as("table").props(["data", "rowKey", "selectable", "sort", "selectedRows"]).events(["update:sort", "update:selectedRows"]).build(),
      ...D()
    };
  }
}), rh = {
  key: 0,
  class: "-no-hover"
}, ih = ["colspan"], ah = { key: 0 };
function lh(e, t, n, s, o, i) {
  const r = v("h-table-column-header"), a = v("h-table-row"), l = v("h-checkbox"), c = v("h-table-column"), u = v("hr-table");
  return m(), I(u, _({
    class: [e.css_root, { "-striped": e.striped, "-hoverable": e.hover }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((h) => [
      g("thead", null, [
        (m(!0), S(oe, null, he(h.orderedColumns, (f) => (m(), I(r, {
          key: f.property,
          column: f,
          sort: e.sort
        }, null, 8, ["column", "sort"]))), 128))
      ]),
      g("tbody", null, [
        (m(!0), S(oe, null, he(h.rows, (f) => (m(), I(a, {
          key: f.data[e.rowKey],
          row: f,
          columns: h.orderedColumns,
          classes: e.rowClasses
        }, null, 8, ["row", "columns", "classes"]))), 128)),
        e.$slots["no-items"] && h.rows.length === 0 ? (m(), S("tr", rh, [
          g("td", {
            colspan: h.orderedColumns.length
          }, [
            T(e.$slots, "no-items")
          ], 8, ih)
        ])) : M("", !0)
      ]),
      e.$slots.footer ? (m(), S("tfoot", ah, [
        T(e.$slots, "footer", {
          rows: h.rows
        })
      ])) : M("", !0),
      e.selectable && h.anySelectable ? (m(), I(c, {
        key: 1,
        width: "minimum",
        property: "__sortable",
        sortable: !1,
        order: -1
      }, {
        header: $(() => [
          C(l, {
            "model-value": h.allRowsSelected,
            indeterminate: !h.allRowsSelected && h.anyRowsSelected,
            "onUpdate:modelValue": h.toggleAllSelection
          }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])
        ]),
        default: $(({ rowId: f, isSelected: y, rowSelectable: w }) => [
          C(pe, { name: "fade-fast" }, {
            default: $(() => [
              C(l, {
                visible: w,
                "model-value": y,
                "onUpdate:modelValue": (z) => h.setRowSelectionState(f, z)
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
const ch = /* @__PURE__ */ E(oh, [["render", lh]]), uh = O({
  name: "h-table-column",
  props: {
    ...na,
    ...sa,
    ...oa,
    ...ra,
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
      core: ia(n, ["property", "formatter", "sortable", "order"])
    };
  }
});
function dh(e, t, n, s, o, i) {
  const r = v("hr-table-column");
  return m(), I(r, _(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      T(e.$slots, "default"),
      T(e.$slots, "header")
    ]),
    _: 3
  }, 16);
}
const fh = /* @__PURE__ */ E(uh, [["render", dh]]), Ds = "elementic-tables", mh = {
  Table: ch,
  TableColumn: fh
}, hh = {
  CoreTablesInstall: aa,
  CheckboxInstall: Ks
}, ph = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ds) || (p.installDependencies(e, hh, t), p.installComponents(e, mh), p.markModuleAsInstalled(e, Ds));
  }
}, Es = {
  top: "tiny2x-slide-down-medium",
  right: "tiny2x-slide-to-left-medium",
  bottom: "tiny2x-slide-up-medium",
  left: "tiny2x-slide-to-right-medium"
}, yh = O({
  name: "h-tooltip",
  props: {
    ...Ut("top"),
    ...la,
    ...ca,
    ...ua,
    ...da,
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
    const n = k(), s = k(Es[e.placement]), o = k([
      Ct(4)
    ]), i = (a) => {
      const l = a.placement.split("-")[0];
      s.value = Es[l], t.emit("computedPosition", a);
    };
    return {
      core: fa(n).props(["modelValue", "trigger"]).events(["update:modelValue"]).build(),
      reference: n,
      floatingMiddleware: o,
      onComputedPosition: i,
      transition: s,
      ...D()
    };
  }
}), gh = ["innerHTML"];
function vh(e, t, n, s, o, i) {
  const r = v("h-icon"), a = v("h-floating"), l = v("hr-tooltip");
  return m(), I(l, _(e.core.props, A(e.core.listeners)), {
    default: $((c) => [
      g("div", {
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
        arrow: $(() => [
          C(r, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
          T(e.$slots, "content", {}, () => [
            g("span", { innerHTML: e.content }, null, 8, gh)
          ])
        ]),
        _: 2
      }, 1032, ["class", "reference", "transition", "visible", "placement", "middleware", "onComputedPosition"])
    ]),
    _: 3
  }, 16);
}
const bh = /* @__PURE__ */ E(yh, [["render", vh]]), wh = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  data: '<polygon points="0,16 16,16 8,8"/>'
}, Ls = "elementic-tooltips", $h = {
  Tooltip: bh
}, Sh = {
  CoreTooltipsInstall: ma,
  FloatingInstall: at
}, kh = {
  install: (e, t) => {
    p.isModuleInstalled(e, Ls) || (p.installDependencies(e, Sh, t), p.installComponents(e, $h), be.register("tooltip-arrow", wh), p.markModuleAsInstalled(e, Ls));
  }
}, Ih = O({
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
function Ch(e, t, n, s, o, i) {
  const r = v("h-notification");
  return m(), I(r, {
    title: e.title,
    color: e.color
  }, {
    default: $(() => [
      se(N(e.text), 1)
    ]),
    _: 1
  }, 8, ["title", "color"]);
}
const Eh = /* @__PURE__ */ E(Ih, [["render", Ch]]), Th = {
  AlertsInstall: Pa,
  ButtonsInstall: Xa,
  CheckboxesInstall: Ks,
  CollapsesInstall: Il,
  DatePickersInstall: Yu,
  DialogsInstall: ud,
  DrawersInstall: gd,
  DropdownsInstall: Zd,
  FloatingInstall: at,
  FragmentsInstall: Qd,
  IconsInstall: Yt,
  InputsInstall: _o,
  ListsInstall: sf,
  NotificationsInstall: pf,
  PaginatorsInstall: Cf,
  PopoversInstall: Lf,
  ProgressBarsInstall: Af,
  RadioButtonsInstall: qf,
  ScrollContainersInstall: Ao,
  SelectsInstall: mm,
  SlidersInstall: bm,
  SpinnersInstall: Om,
  StepsInstall: Fm,
  SwitchesInstall: Wm,
  TabsInstall: Xm,
  TablesInstall: ph,
  TooltipsInstall: kh
}, Lh = {
  install: (e, t) => {
    Object.values(Th).forEach((n) => {
      n.install(e, t);
    });
  }
};
export {
  _h as DialogManager,
  Dh as IconRegistry,
  Ph as NotificationManager,
  Eh as SimpleNotification,
  Fh as coreFloatingArrowReference,
  Ah as createCoreStepItem,
  Lh as default
};
