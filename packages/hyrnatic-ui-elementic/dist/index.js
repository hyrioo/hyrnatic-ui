import { getCurrentInstance as Cs, computed as V, defineComponent as M, resolveComponent as v, openBlock as f, createElementBlock as S, normalizeClass as d, createVNode as C, createCommentVNode as O, createElementVNode as y, toDisplayString as N, createBlock as I, withDirectives as G, mergeProps as F, toHandlers as A, withCtx as $, renderSlot as T, vShow as K, createTextVNode as ne, normalizeStyle as R, ref as k, withKeys as Ts, Transition as ye, resolveDynamicComponent as Ms, watch as ae, Fragment as se, renderList as pe, onBeforeUpdate as Os, inject as ue, reactive as je, withModifiers as $n, provide as ft, nextTick as Re, h as Sn, TransitionGroup as Ds, onMounted as vt, resolveDirective as Vo, onUnmounted as No, onUpdated as Fo } from "vue";
import { StringHelper as Es, ModuleHelper as p, coreButtonDisabledProp as Ht, coreButtonLoadingProp as zt, coreButtonVisibleProp as Rt, coreButtonSetup as Bt, CoreButtonsInstall as Po, coreCheckboxDisabledProp as Ls, coreCheckboxIndeterminateProp as _o, coreCheckboxVisibleProp as Vs, coreCheckboxModelValueProp as Ns, coreCheckboxValueProp as Fs, coreCheckboxSetup as Ps, CoreCheckboxInstall as _s, coreCollapseAccordionProp as Ao, coreCollapseModelValueProp as Ho, coreCollapseSetup as zo, coreCollapseItemIdProp as Ro, coreCollapseItemSetup as Bo, coreInlineCollapseModelValueProp as Zo, coreCollapseInlineSetup as Wo, CoreCollapsesInstall as qo, coreDatePickerModelValueProp as jo, coreDatePickerDisabledProp as Uo, coreDatePickerVisibleProp as Yo, coreDatePickerFirstDayOfWeekProp as Go, coreDatePickerSetup as Ko, splitPlacement as Be, coreInputDisabledProp as Jo, coreInputReadonlyProp as Qo, coreInputTypeProp as Xo, coreInputModelValueProp as xo, coreInputModelModifiersProp as er, coreInputSetup as tr, coreAutocompleteDisabledProp as nr, coreAutocompleteItemsProp as sr, coreAutocompleteModelValueProp as or, coreAutocompleteModelModifiersProp as rr, coreAutocompleteSetup as ir, CoreInputsInstall as lr, CoreDatePickersInstall as ar, coreDialogVisibleProp as As, coreDialogSetup as Hs, coreDialogWrapper as cr, CoreDialogsInstall as zs, coreDropdownDisabledProp as ur, coreDropdownVisibleProp as dr, coreDropdownSplitButtonProp as fr, coreDropdownHideOnClickProp as mr, coreDropdownSetup as hr, coreDropdownItemDisabledProp as pr, coreDropdownItemLabelProp as yr, coreDropdownItemSetup as gr, coreComponentAsProp as vr, coreFloatingReferenceProp as br, coreFloatingVisibleProp as wr, coreFloatingMiddlewareProp as $r, coreFloatingTransitionProp as Sr, coreFloatingPlacementProp as Zt, coreFloatingArrowReference as kr, coreFloatingSetup as Ir, CoreFloatingInstall as Cr, CoreDropdownsInstall as Tr, coreFragmentContainerActiveProp as Mr, coreFragmentContainerSetup as Or, CoreFragmentsInstall as Dr, coreNotificationVisibleProp as Er, coreNotificationSetup as Lr, coreNotificationWrapperNameProp as Vr, coreNotificationWrapperSetup as Nr, NotificationManager as Rs, CoreNotificationsInstall as Fr, corePaginatorModelValueProp as Pr, corePaginatorPageSizeProp as _r, corePaginatorCountProp as Ar, corePaginatorDeltaProp as Hr, corePaginatorSetup as zr, CorePaginatorsInstall as Rr, coreProgressBarValueProp as Br, coreProgressBarMinimumProp as Zr, coreProgressBarMaximumProp as Wr, coreProgressBarSetup as qr, CoreProgressBarsInstall as jr, coreRadioButtonDisabledProp as Ur, coreRadioButtonModelValueProp as Yr, coreRadioButtonValueProp as Gr, coreRadioButtonSetup as Kr, CoreRadioButtonsInstall as Jr, coreScrollContainerHorizontalProp as Qr, coreScrollContainerVerticalProp as Xr, coreScrollContainerAutoHideProp as xr, coreScrollContainerAutoHideDelayProp as ei, coreScrollContainerMinimumSizeProp as ti, coreScrollContainerClassesProp as ni, coreScrollContainerSetup as si, CoreScrollContainersInstall as oi, coreSelectDisabledProp as ri, coreSelectAllowClearProp as ii, coreSelectHideOnSelectProp as li, coreSelectMultipleProp as ai, coreSelectModelValueProp as ci, coreSelectCompareProp as ui, coreSelectSetup as di, coreSelectItemDisabledProp as fi, coreSelectItemValueProp as mi, coreSelectItemLabelProp as hi, coreSelectItemSetup as pi, CoreSelectsInstall as yi, coreSliderModelValueProp as gi, coreSliderDisabledProp as vi, coreSliderMaximumProp as bi, coreSliderMinimumProp as wi, coreSliderStepSizeProp as $i, coreSliderSetup as Si, CoreSlidersInstall as ki, coreStepsNavigatorModelValueProp as Ii, coreStepsNavigatorStepsProp as Ci, coreStepsNavigatorSetup as Ti, CoreStepsInstall as Mi, coreTabItemIdProp as Oi, coreTabItemIdDisabledProp as Di, coreTabItemSetup as Ei, coreTabsNavigatorModelValueProp as Li, coreTabsNavigatorSetup as Vi, ArrayHelper as Ni, CoreTabsInstall as Fi, CoreTableColumn as Pi, CoreTableRow as _i, coreTableRowSetup as Ai, coreTableDataProp as Hi, coreTableRowKeyProp as zi, coreTableSelectableProp as Ri, coreTableSelectedRowsProp as Bi, coreTableSortProp as Zi, coreTableSetup as Wi, coreTableColumnPropertyProp as qi, coreTableColumnFormatterProp as ji, coreTableColumnSortableProp as Ui, coreTableColumnOrderProp as Yi, coreTableColumnSetup as Gi, CoreTablesInstall as Ki, coreTooltipModelValueProp as Ji, coreTooltipTriggerProp as Qi, coreTooltipShowDelayProp as Xi, coreTooltipHideDelayProp as xi, coreTooltipSetup as el, CoreTooltipsInstall as tl } from "@hyrioo/hyrnatic-ui-core";
import { DialogManager as mh, NotificationManager as hh, coreFloatingArrowReference as ph, createCoreStepItem as yh } from "@hyrioo/hyrnatic-ui-core";
const D = () => {
  const e = Cs(), t = V(() => e ? e.type.name : null);
  return {
    css_root: t,
    css_ec: (s) => `${t.value}__${s}`
  };
};
var nl = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", sl = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", ol = "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z", rl = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", il = "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z", ll = "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z", al = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", cl = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", ul = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", dl = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", fl = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", ml = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z", hl = "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z", pl = "M19,13H5V11H19V13Z", yl = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
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
const we = {
  register: Bs,
  registerMDI: Zs,
  icons: bt
}, ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  icons: bt,
  register: Bs,
  registerMDI: Zs,
  default: we
}, Symbol.toStringTag, { value: "Module" })), X = {
  arrowLeft: nl,
  arrowRight: sl,
  calendarMonth: ol,
  check: rl,
  chevronDoubleLeft: il,
  chevronDoubleRight: ll,
  chevronDown: al,
  chevronLeft: cl,
  chevronRight: ul,
  chevronUp: dl,
  close: fl,
  dotsHorizontal: ml,
  loading: hl,
  minus: pl,
  plus: yl
};
Object.keys(X).forEach((e) => {
  const t = Es.kebabize(e);
  we.registerMDI(t, X[e]), X[e] = t;
});
const gl = M({
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
      Icons: X,
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
}, vl = { key: 1 };
function bl(e, t, n, s, o, r) {
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
      onClick: t[0] || (t[0] = (...l) => e.onClose && e.onClose(...l))
    }, [
      e.showCloseButton ? (f(), I(i, {
        key: 0,
        icon: e.Icons.close,
        size: "16px"
      }, null, 8, ["icon"])) : e.closeText ? (f(), S("span", vl, N(e.closeText), 1)) : O("", !0)
    ], 2)) : O("", !0)
  ], 2);
}
const wl = /* @__PURE__ */ E(gl, [["render", bl]]), kn = "elementic-alerts", $l = {
  Alert: wl
}, Sl = {}, kl = {
  install: (e, t) => {
    p.isModuleInstalled(e, kn) || (p.installDependencies(e, Sl, t), p.installComponents(e, $l), p.markModuleAsInstalled(e, kn));
  }
}, Il = /* @__PURE__ */ M({
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
      Icons: X,
      core: r,
      ...n
    };
  }
});
function Cl(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $(() => [
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
    [K, e.visible]
  ]);
}
const Tl = /* @__PURE__ */ E(Il, [["render", Cl]]), Ml = M({
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
      Icons: X,
      core: r,
      iconSize: s,
      ...D()
    };
  }
});
function Ol(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $(() => [
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
    [K, e.visible]
  ]);
}
const Dl = /* @__PURE__ */ E(Ml, [["render", Ol]]), El = /* @__PURE__ */ M({
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
      Icons: X,
      core: o,
      ...n
    };
  }
});
function Ll(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-button");
  return G((f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $(() => [
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
    [K, e.visible]
  ]);
}
const Vl = /* @__PURE__ */ E(El, [["render", Ll]]), Nl = M({
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
      const u = /(\w*)="(.*?)"/gi, m = /([^:]+?):([^;]+);?/gi;
      return c.replace(u, (h, g, w) => g === "fill" || g === "stroke" ? "" : g === "style" ? (w = w.replace(m, (Z, B) => B === "fill" || B === "stroke" ? "" : Z), w.length !== 0 ? `${g}="${w}"` : "") : h);
    }, o = (c, u, m) => Array.isArray(u) ? u.length - 1 >= m ? `${c}="${n(u[m])}"` : "" : `${c}="${n(u)}"`, r = (c, u, m) => {
      const h = /<(path|rect|circle|polygon|line|polyline|ellipse).*?>/gi;
      let g = 0;
      return c.replace(h, (w, Z) => {
        const B = o("fill", m, g), J = o("stroke", u, g);
        let x = s(w);
        return x = `<${Z} ${B} ${J} ${x.substr(Z.length + 1)}`, g++, x;
      });
    }, i = V(() => {
      const c = e.strokes ? e.strokes : [], u = e.fills ? e.fills : [];
      return r(we.icons[e.icon].data, c, u);
    }), l = V(() => we.icons[e.icon] ? we.icons[e.icon].viewBox : (console.warn(`No icon has been registered with the key "${e.icon}"`), "")), a = V(() => {
      const c = {};
      return c.width = e.width || e.size || we.icons[e.icon].width, c.height = e.height || e.size || we.icons[e.icon].height, isFinite(c.width) && (c.width = `${c.width}px`), isFinite(c.height) && (c.height = `${c.height}px`), c;
    });
    return {
      content: i,
      viewBox: l,
      style: a,
      ...D()
    };
  }
}), Fl = ["viewBox", "innerHTML"];
function Pl(e, t, n, s, o, r) {
  return f(), S("svg", {
    class: d([e.css_root, { "-spin": e.spin }]),
    viewBox: e.viewBox,
    style: R(e.style),
    innerHTML: e.content
  }, null, 14, Fl);
}
const _l = /* @__PURE__ */ E(Nl, [["render", Pl]]), In = "elementic-icons", Al = {
  Icon: _l
}, Wt = {
  install: (e, t) => {
    p.isModuleInstalled(e, In) || (p.installComponents(e, Al), p.markModuleAsInstalled(e, In));
  }
}, Cn = "elementic-buttons", Hl = {
  Button: Tl,
  IconButton: Dl,
  LinkButton: Vl
}, zl = {
  CoreButtonsInstall: Po,
  IconInstall: Wt
}, Rl = {
  install: (e, t) => {
    p.isModuleInstalled(e, Cn) || (p.installDependencies(e, zl, t), p.installComponents(e, Hl), p.markModuleAsInstalled(e, Cn));
  }
}, Bl = M({
  name: "h-checkbox",
  props: {
    ...Ls,
    ..._o,
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
    }), r = Ps().as("label", o).props(["modelValue", "value", "indeterminate", "disabled", "visible"]).events(["update:modelValue"]).build();
    return {
      Icons: X,
      CheckboxIcons: ct,
      asProps: o,
      core: r,
      hasFocus: s,
      ...n
    };
  }
}), Zl = ["checked", "disabled", "onChange"];
function Wl(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-checkbox");
  return G((f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
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
        }, null, 42, Zl),
        G(C(i, {
          class: d([e.css_ec("check-icon")]),
          icon: e.CheckboxIcons.checkStroke,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [K, !a.indeterminate]
        ]),
        G(C(i, {
          class: d([e.css_ec("indeterminate-icon")]),
          icon: e.Icons.minus,
          size: "10px",
          fills: null
        }, null, 8, ["class", "icon"]), [
          [K, a.indeterminate]
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
    [K, e.visible]
  ]);
}
const ql = /* @__PURE__ */ E(Bl, [["render", Wl]]), jl = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  data: '<polyline points="4.2,12.8 9,17.6 20.3,6.3 "/>'
}, Tn = "elementic-checkboxes", Ul = {
  Checkbox: ql
}, Yl = {
  CoreCheckboxInstall: _s
}, ct = {
  checkStroke: jl
}, Ws = {
  install: (e, t) => {
    p.isModuleInstalled(e, Tn) || (p.installDependencies(e, Yl, t), p.installComponents(e, Ul), Object.keys(ct).forEach((n) => {
      const s = Es.kebabize(n);
      we.register(s, ct[n]), ct[n] = s;
    }), p.markModuleAsInstalled(e, Tn));
  }
}, Gl = M({
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
function Kl(e, t, n, s, o, r) {
  const i = v("hr-collapse");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Jl = /* @__PURE__ */ E(Gl, [["render", Kl]]), Ql = M({
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
      Icons: X,
      core: o,
      ...n
    };
  }
}), Xl = ["onClick", "onKeydown"];
function xl(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-grow-transition"), a = v("hr-collapse-item");
  return f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: $((c) => [
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
          C(ye, { name: "fade-medium" }, {
            default: $(() => [
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
      ], 42, Xl),
      C(l, null, {
        default: $(() => [
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
const ea = /* @__PURE__ */ E(Ql, [["render", xl]]), ta = M({
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
}), na = ["onClick", "onKeydown"];
function sa(e, t, n, s, o, r) {
  const i = v("hr-inline-collapse");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      y("div", {
        tabindex: "0",
        class: d([e.css_ec("toggle-line"), `-align-${e.textAlign}`]),
        onClick: l.onClick,
        onKeydown: Ts(l.onClick, ["enter"])
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
      ], 42, na),
      (f(), I(Ms(e.animate ? "h-grow-transition" : "div"), null, {
        default: $(() => [
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
const oa = /* @__PURE__ */ E(ta, [["render", sa]]), ra = M({
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
function ia(e, t, n, s, o, r) {
  return f(), I(ye, {
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
const la = /* @__PURE__ */ E(ra, [["render", ia], ["__scopeId", "data-v-7765f9ec"]]), Mn = "elementic-transitions", aa = {
  Grow: la
}, ca = {
  install: (e, t) => {
    p.isModuleInstalled(e, Mn) || (p.installComponents(e, aa), p.markModuleAsInstalled(e, Mn));
  }
}, On = "elementic-collapses", ua = {
  Collapse: Jl,
  CollapseItem: ea,
  InlineCollapse: oa
}, da = {
  CoreCollapsesInstall: qo,
  TransitionsInstall: ca
}, fa = {
  install: (e, t) => {
    p.isModuleInstalled(e, On) || (p.installDependencies(e, da, t), p.installComponents(e, ua), p.markModuleAsInstalled(e, On));
  }
};
class Le extends Error {
}
class ma extends Le {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class ha extends Le {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class pa extends Le {
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
class ke extends Le {
  constructor() {
    super("Zone is an abstract class");
  }
}
const b = "numeric", ge = "short", oe = "long", mt = {
  year: b,
  month: b,
  day: b
}, qt = {
  year: b,
  month: ge,
  day: b
}, js = {
  year: b,
  month: ge,
  day: b,
  weekday: ge
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
  timeZoneName: ge
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
  timeZoneName: ge
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
  month: ge,
  day: b,
  hour: b,
  minute: b
}, on = {
  year: b,
  month: ge,
  day: b,
  hour: b,
  minute: b,
  second: b
}, Us = {
  year: b,
  month: ge,
  day: b,
  weekday: ge,
  hour: b,
  minute: b
}, rn = {
  year: b,
  month: oe,
  day: b,
  hour: b,
  minute: b,
  timeZoneName: ge
}, ln = {
  year: b,
  month: oe,
  day: b,
  hour: b,
  minute: b,
  second: b,
  timeZoneName: ge
}, an = {
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
function _(e) {
  return typeof e > "u";
}
function Ee(e) {
  return typeof e == "number";
}
function wt(e) {
  return typeof e == "number" && e % 1 === 0;
}
function ya(e) {
  return typeof e == "string";
}
function ga(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function be() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function nt() {
  return !_(Intl.DateTimeFormat.prototype.formatToParts);
}
function Ys() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function va(e) {
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
function $e(e, t, n) {
  return wt(e) && e >= t && e <= n;
}
function ba(e, t) {
  return e - t * Math.floor(e / t);
}
function Ze(e, t = 2) {
  const n = e < 0 ? "-" : "", s = n ? e * -1 : e;
  let o;
  return s.toString().length < t ? o = ("0".repeat(t) + s).slice(-t) : o = s.toString(), `${n}${o}`;
}
function ee(e) {
  if (!(_(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function un(e) {
  if (!(_(e) || e === null || e === "")) {
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
  const n = ba(t - 1, 12) + 1, s = e + (t - n) / 12;
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
  const i = Object.assign({ timeZoneName: t }, r), l = be();
  if (l && nt()) {
    const a = new Intl.DateTimeFormat(n, i).formatToParts(o).find((c) => c.type.toLowerCase() === "timezonename");
    return a ? a.value : null;
  } else if (l) {
    const a = new Intl.DateTimeFormat(n, r).format(o);
    return new Intl.DateTimeFormat(n, i).format(o).substring(a.length).replace(/^[, \u200e]+/, "");
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
function W(e) {
  return JSON.stringify(e, Object.keys(e).sort());
}
const wa = [
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
], $a = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function xs(e) {
  switch (e) {
    case "narrow":
      return [...$a];
    case "short":
      return [...Xs];
    case "long":
      return [...wa];
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
], to = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Sa = ["M", "T", "W", "T", "F", "S", "S"];
function no(e) {
  switch (e) {
    case "narrow":
      return [...Sa];
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
const so = ["AM", "PM"], ka = ["Before Christ", "Anno Domini"], Ia = ["BC", "AD"], Ca = ["B", "A"];
function oo(e) {
  switch (e) {
    case "narrow":
      return [...Ca];
    case "short":
      return [...Ia];
    case "long":
      return [...ka];
    default:
      return null;
  }
}
function Ta(e) {
  return so[e.hour < 12 ? 0 : 1];
}
function Ma(e, t) {
  return no(t)[e.weekday - 1];
}
function Oa(e, t) {
  return xs(t)[e.month - 1];
}
function Da(e, t) {
  return oo(t)[e.year < 0 ? 0 : 1];
}
function Ea(e, t, n = "always", s = !1) {
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
    const m = e === "days";
    switch (t) {
      case 1:
        return m ? "tomorrow" : `next ${o[e][0]}`;
      case -1:
        return m ? "yesterday" : `last ${o[e][0]}`;
      case 0:
        return m ? "today" : `this ${o[e][0]}`;
    }
  }
  const i = Object.is(t, -0) || t < 0, l = Math.abs(t), a = l === 1, c = o[e], u = s ? a ? c[1] : c[2] || c[1] : a ? o[e][0] : e;
  return i ? `${l} ${u} ago` : `in ${l} ${u}`;
}
function La(e) {
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
  ]), n = W(t), s = "EEEE, LLLL d, yyyy, h:mm a";
  switch (n) {
    case W(mt):
      return "M/d/yyyy";
    case W(qt):
      return "LLL d, yyyy";
    case W(js):
      return "EEE, LLL d, yyyy";
    case W(jt):
      return "LLLL d, yyyy";
    case W(Ut):
      return "EEEE, LLLL d, yyyy";
    case W(Yt):
      return "h:mm a";
    case W(Gt):
      return "h:mm:ss a";
    case W(Kt):
      return "h:mm a";
    case W(Jt):
      return "h:mm a";
    case W(Qt):
      return "HH:mm";
    case W(Xt):
      return "HH:mm:ss";
    case W(xt):
      return "HH:mm";
    case W(en):
      return "HH:mm";
    case W(tn):
      return "M/d/yyyy, h:mm a";
    case W(sn):
      return "LLL d, yyyy, h:mm a";
    case W(rn):
      return "LLLL d, yyyy, h:mm a";
    case W(an):
      return s;
    case W(nn):
      return "M/d/yyyy, h:mm:ss a";
    case W(on):
      return "LLL d, yyyy, h:mm:ss a";
    case W(Us):
      return "EEE, d LLL yyyy, h:mm a";
    case W(ln):
      return "LLLL d, yyyy, h:mm:ss a";
    case W(cn):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return s;
  }
}
function En(e, t) {
  let n = "";
  for (const s of e)
    s.literal ? n += s.val : n += t(s.val);
  return n;
}
const Va = {
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
  ffff: an,
  F: nn,
  FF: on,
  FFF: ln,
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
      const l = t.charAt(i);
      l === "'" ? (s.length > 0 && r.push({ literal: o, val: s }), n = null, s = "", o = !o) : o || l === n ? s += l : (s.length > 0 && r.push({ literal: !1, val: s }), s = l, n = l);
    }
    return s.length > 0 && r.push({ literal: o, val: s }), r;
  }
  static macroTokenToFormatOpts(t) {
    return Va[t];
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
    const s = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && nt(), r = (g, w) => this.loc.extract(t, g, w), i = (g) => t.isOffsetFixed && t.offset === 0 && g.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, g.format) : "", l = () => s ? Ta(t) : r({ hour: "numeric", hour12: !0 }, "dayperiod"), a = (g, w) => s ? Oa(t, g) : r(w ? { month: g } : { month: g, day: "numeric" }, "month"), c = (g, w) => s ? Ma(t, g) : r(
      w ? { weekday: g } : { weekday: g, month: "long", day: "numeric" },
      "weekday"
    ), u = (g) => {
      const w = te.macroTokenToFormatOpts(g);
      return w ? this.formatWithSystemDefault(t, w) : g;
    }, m = (g) => s ? Da(t, g) : r({ era: g }, "era"), h = (g) => {
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
          return m("short");
        case "GG":
          return m("long");
        case "GGGGG":
          return m("narrow");
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
    return En(te.parseFormat(n), h);
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
    }, r = te.parseFormat(n), i = r.reduce(
      (a, { literal: c, val: u }) => c ? a : a.concat(u),
      []
    ), l = t.shiftTo(...i.map(s).filter((a) => a));
    return En(r, o(l));
  }
}
class he {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class ot {
  get type() {
    throw new ke();
  }
  get name() {
    throw new ke();
  }
  get universal() {
    throw new ke();
  }
  offsetName(t, n) {
    throw new ke();
  }
  formatOffset(t, n) {
    throw new ke();
  }
  offset(t) {
    throw new ke();
  }
  equals(t) {
    throw new ke();
  }
  get isValid() {
    throw new ke();
  }
}
let It = null;
class mn extends ot {
  static get instance() {
    return It === null && (It = new mn()), It;
  }
  get type() {
    return "local";
  }
  get name() {
    return be() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
  }
  get universal() {
    return !1;
  }
  offsetName(t, { format: n, locale: s }) {
    return Ks(t, n, s);
  }
  formatOffset(t, n) {
    return gt(this.offset(t), n);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return t.type === "local";
  }
  get isValid() {
    return !0;
  }
}
const Na = RegExp(`^${Qs.source}$`);
let ut = {};
function Fa(e) {
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
const Pa = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function _a(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), [, o, r, i, l, a, c] = s;
  return [i, o, r, l, a, c];
}
function Aa(e, t) {
  const n = e.formatToParts(t), s = [];
  for (let o = 0; o < n.length; o++) {
    const { type: r, value: i } = n[o], l = Pa[r];
    _(l) || (s[l] = parseInt(i, 10));
  }
  return s;
}
let it = {};
class ce extends ot {
  static create(t) {
    return it[t] || (it[t] = new ce(t)), it[t];
  }
  static resetCache() {
    it = {}, ut = {};
  }
  static isValidSpecifier(t) {
    return !!(t && t.match(Na));
  }
  static isValidZone(t) {
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
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
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get universal() {
    return !1;
  }
  offsetName(t, { format: n, locale: s }) {
    return Ks(t, n, s, this.name);
  }
  formatOffset(t, n) {
    return gt(this.offset(t), n);
  }
  offset(t) {
    const n = new Date(t);
    if (isNaN(n))
      return NaN;
    const s = Fa(this.name), [o, r, i, l, a, c] = s.formatToParts ? Aa(s, n) : _a(s, n), m = fn({
      year: o,
      month: r,
      day: i,
      hour: l === 24 ? 0 : l,
      minute: a,
      second: c,
      millisecond: 0
    });
    let h = +n;
    const g = h % 1e3;
    return h -= g >= 0 ? g : 1e3 + g, (m - h) / (60 * 1e3);
  }
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let Ct = null;
class Q extends ot {
  static get utcInstance() {
    return Ct === null && (Ct = new Q(0)), Ct;
  }
  static instance(t) {
    return t === 0 ? Q.utcInstance : new Q(t);
  }
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Q($t(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super(), this.fixed = t;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${gt(this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, n) {
    return gt(this.fixed, n);
  }
  get universal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class Ln extends ot {
  constructor(t) {
    super(), this.zoneName = t;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get universal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Oe(e, t) {
  let n;
  if (_(e) || e === null)
    return t;
  if (e instanceof ot)
    return e;
  if (ya(e)) {
    const s = e.toLowerCase();
    return s === "local" ? t : s === "utc" || s === "gmt" ? Q.utcInstance : (n = ce.parseGMTOffset(e)) != null ? Q.instance(n) : ce.isValidSpecifier(s) ? ce.create(e) : Q.parseSpecifier(s) || new Ln(e);
  } else
    return Ee(e) ? Q.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Ln(e);
}
let Vn = () => Date.now(), Tt = null, Nn = null, Fn = null, Pn = null, _n = !1;
class Y {
  static get now() {
    return Vn;
  }
  static set now(t) {
    Vn = t;
  }
  static get defaultZoneName() {
    return Y.defaultZone.name;
  }
  static set defaultZoneName(t) {
    t ? Tt = Oe(t) : Tt = null;
  }
  static get defaultZone() {
    return Tt || mn.instance;
  }
  static get defaultLocale() {
    return Nn;
  }
  static set defaultLocale(t) {
    Nn = t;
  }
  static get defaultNumberingSystem() {
    return Fn;
  }
  static set defaultNumberingSystem(t) {
    Fn = t;
  }
  static get defaultOutputCalendar() {
    return Pn;
  }
  static set defaultOutputCalendar(t) {
    Pn = t;
  }
  static get throwOnInvalid() {
    return _n;
  }
  static set throwOnInvalid(t) {
    _n = t;
  }
  static resetCaches() {
    q.resetCache(), ce.resetCache();
  }
}
let Nt = {};
function Ft(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Nt[n];
  return s || (s = new Intl.DateTimeFormat(e, t), Nt[n] = s), s;
}
let Pt = {};
function Ha(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let s = Pt[n];
  return s || (s = new Intl.NumberFormat(e, t), Pt[n] = s), s;
}
let _t = {};
function za(e, t = {}) {
  const { base: n, ...s } = t, o = JSON.stringify([e, s]);
  let r = _t[o];
  return r || (r = new Intl.RelativeTimeFormat(e, t), _t[o] = r), r;
}
let Me = null;
function Ra() {
  if (Me)
    return Me;
  if (be()) {
    const e = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Me = !e || e === "und" ? "en-US" : e, Me;
  } else
    return Me = "en-US", Me;
}
function Ba(e) {
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
function Za(e, t, n) {
  return be() ? ((n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e) : [];
}
function Wa(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const s = L.utc(2016, n, 1);
    t.push(e(s));
  }
  return t;
}
function qa(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const s = L.utc(2016, 11, 13 + n);
    t.push(e(s));
  }
  return t;
}
function lt(e, t, n, s, o) {
  const r = e.listingMode(n);
  return r === "error" ? null : r === "en" ? s(t) : o(t);
}
function ja(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || be() && new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class Ua {
  constructor(t, n, s) {
    if (this.padTo = s.padTo || 0, this.floor = s.floor || !1, !n && be()) {
      const o = { useGrouping: !1 };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = Ha(t, o);
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
class Ya {
  constructor(t, n, s) {
    this.opts = s, this.hasIntl = be();
    let o;
    if (t.zone.universal && this.hasIntl) {
      const r = -1 * (t.offset / 60), i = r >= 0 ? `Etc/GMT+${r}` : `Etc/GMT${r}`, l = ce.isValidZone(i);
      t.offset !== 0 && l ? (o = i, this.dt = t) : (o = "UTC", s.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : L.fromMillis(t.ts + t.offset * 60 * 1e3));
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
      const t = La(this.opts), n = q.create("en-US");
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
class Ga {
  constructor(t, n, s) {
    this.opts = Object.assign({ style: "long" }, s), !n && Ys() && (this.rtf = za(t, s));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : Ea(n, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
class q {
  static fromOpts(t) {
    return q.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }
  static create(t, n, s, o = !1) {
    const r = t || Y.defaultLocale, i = r || (o ? "en-US" : Ra()), l = n || Y.defaultNumberingSystem, a = s || Y.defaultOutputCalendar;
    return new q(i, l, a, r);
  }
  static resetCache() {
    Me = null, Nt = {}, Pt = {}, _t = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    return q.create(t, n, s);
  }
  constructor(t, n, s, o) {
    const [r, i, l] = Ba(t);
    this.locale = r, this.numberingSystem = n || i || null, this.outputCalendar = s || l || null, this.intl = Za(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = ja(this)), this.fastNumbersCached;
  }
  listingMode(t = !0) {
    const n = be(), s = n && nt(), o = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !s && !(o && r) && !t ? "error" : !s || o && r ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : q.create(
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
    return lt(this, t, s, xs, () => {
      const o = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      return this.monthsCache[r][t] || (this.monthsCache[r][t] = Wa((i) => this.extract(i, o, "month"))), this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1, s = !0) {
    return lt(this, t, s, no, () => {
      const o = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, r = n ? "format" : "standalone";
      return this.weekdaysCache[r][t] || (this.weekdaysCache[r][t] = qa(
        (i) => this.extract(i, o, "weekday")
      )), this.weekdaysCache[r][t];
    });
  }
  meridiems(t = !0) {
    return lt(
      this,
      void 0,
      t,
      () => so,
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
    return lt(this, t, n, oo, () => {
      const s = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map(
        (o) => this.extract(o, s, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, s) {
    const o = this.dtFormatter(t, n), r = o.formatToParts(), i = r.find((l) => l.type.toLowerCase() === s);
    return i ? i.value : null;
  }
  numberFormatter(t = {}) {
    return new Ua(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new Ya(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new Ga(this.intl, this.isEnglish(), t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || be() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
}
function Ue(...e) {
  const t = e.reduce((n, s) => n + s.source, "");
  return RegExp(`^${t}$`);
}
function Ve(...e) {
  return (t) => e.reduce(
    ([n, s, o], r) => {
      const [i, l, a] = r(t, o);
      return [Object.assign(n, i), s || l, a];
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
const io = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, hn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, lo = RegExp(`${hn.source}${io.source}?`), pn = RegExp(`(?:T${lo.source})?`), Ka = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ja = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Qa = /(\d{4})-?(\d{3})/, Xa = ro("weekYear", "weekNumber", "weekDay"), xa = ro("year", "ordinal"), ec = /(\d{4})-(\d\d)-(\d\d)/, ao = RegExp(
  `${hn.source} ?(?:${io.source}|(${Qs.source}))?`
), tc = RegExp(`(?: ${ao.source})?`);
function We(e, t, n) {
  const s = e[t];
  return _(s) ? n : ee(s);
}
function co(e, t) {
  return [{
    year: We(e, t),
    month: We(e, t + 1, 1),
    day: We(e, t + 2, 1)
  }, null, t + 3];
}
function Ne(e, t) {
  return [{
    hours: We(e, t, 0),
    minutes: We(e, t + 1, 0),
    seconds: We(e, t + 2, 0),
    milliseconds: un(e[t + 3])
  }, null, t + 4];
}
function Ge(e, t) {
  const n = !e[t] && !e[t + 1], s = $t(e[t + 1], e[t + 2]), o = n ? null : Q.instance(s);
  return [{}, o, t + 3];
}
function uo(e, t) {
  const n = e[t] ? ce.create(e[t]) : null;
  return [{}, n, t + 1];
}
const nc = RegExp(`^T?${hn.source}$`), sc = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function oc(e) {
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
  ] = e, u = t[0] === "-", m = a && a[0] === "-", h = (g, w = !1) => g !== void 0 && (w || g && u) ? -g : g;
  return [
    {
      years: h(ee(n)),
      months: h(ee(s)),
      weeks: h(ee(o)),
      days: h(ee(r)),
      hours: h(ee(i)),
      minutes: h(ee(l)),
      seconds: h(ee(a), a === "-0"),
      milliseconds: h(un(c), m)
    }
  ];
}
const rc = {
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
  const l = {
    year: t.length === 2 ? Vt(ee(t)) : ee(t),
    month: Xs.indexOf(n) + 1,
    day: ee(s),
    hour: ee(o),
    minute: ee(r)
  };
  return i && (l.second = ee(i)), e && (l.weekday = e.length > 3 ? eo.indexOf(e) + 1 : to.indexOf(e) + 1), l;
}
const ic = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function lc(e) {
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
    m
  ] = e, h = yn(t, o, s, n, r, i, l);
  let g;
  return a ? g = rc[a] : c ? g = 0 : g = $t(u, m), [h, new Q(g)];
}
function ac(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const cc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, uc = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, dc = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function An(e) {
  const [, t, n, s, o, r, i, l] = e;
  return [yn(t, o, s, n, r, i, l), Q.utcInstance];
}
function fc(e) {
  const [, t, n, s, o, r, i, l] = e;
  return [yn(t, l, n, s, o, r, i), Q.utcInstance];
}
const mc = Ue(Ka, pn), hc = Ue(Ja, pn), pc = Ue(Qa, pn), yc = Ue(lo), gc = Ve(
  co,
  Ne,
  Ge
), vc = Ve(
  Xa,
  Ne,
  Ge
), bc = Ve(
  xa,
  Ne,
  Ge
), wc = Ve(Ne, Ge);
function $c(e) {
  return Ye(
    e,
    [mc, gc],
    [hc, vc],
    [pc, bc],
    [yc, wc]
  );
}
function Sc(e) {
  return Ye(ac(e), [ic, lc]);
}
function kc(e) {
  return Ye(
    e,
    [cc, An],
    [uc, An],
    [dc, fc]
  );
}
function Ic(e) {
  return Ye(e, [sc, oc]);
}
const Cc = Ve(Ne);
function Tc(e) {
  return Ye(e, [nc, Cc]);
}
const Mc = Ue(ec, tc), Oc = Ue(ao), Dc = Ve(
  co,
  Ne,
  Ge,
  uo
), Ec = Ve(
  Ne,
  Ge,
  uo
);
function Lc(e) {
  return Ye(
    e,
    [Mc, Dc],
    [Oc, Ec]
  );
}
const Vc = "Invalid Duration", fo = {
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
}, Nc = Object.assign(
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
), re = 146097 / 400, _e = 146097 / 4800, Fc = Object.assign(
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
      weeks: _e / 7,
      days: _e,
      hours: _e * 24,
      minutes: _e * 24 * 60,
      seconds: _e * 24 * 60 * 60,
      milliseconds: _e * 24 * 60 * 60 * 1e3
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
function Te(e, t, n = !1) {
  const s = {
    values: n ? t.values : Object.assign({}, e.values, t.values || {}),
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new z(s);
}
function _c(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mo(e, t, n, s, o) {
  const r = e[o][n], i = t[n] / r, l = Math.sign(i) === Math.sign(s[o]), a = !l && s[o] !== 0 && Math.abs(i) <= 1 ? _c(i) : Math.trunc(i);
  s[o] += a, t[n] -= a * r;
}
function Ac(e, t) {
  Pc.reduce((n, s) => _(t[s]) ? n : (n && mo(e, t, n, t, s), s), null);
}
class z {
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || q.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? Fc : Nc, this.isLuxonDuration = !0;
  }
  static fromMillis(t, n) {
    return z.fromObject(Object.assign({ milliseconds: t }, n));
  }
  static fromObject(t) {
    if (t == null || typeof t != "object")
      throw new ie(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new z({
      values: yt(t, z.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
      ]),
      loc: q.fromObject(t),
      conversionAccuracy: t.conversionAccuracy
    });
  }
  static fromISO(t, n) {
    const [s] = Ic(t);
    if (s) {
      const o = Object.assign(s, n);
      return z.fromObject(o);
    } else
      return z.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t, n) {
    const [s] = Tc(t);
    if (s) {
      const o = Object.assign(s, n);
      return z.fromObject(o);
    } else
      return z.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static invalid(t, n = null) {
    if (!t)
      throw new ie("need to specify a reason the Duration is invalid");
    const s = t instanceof he ? t : new he(t, n);
    if (Y.throwOnInvalid)
      throw new pa(s);
    return new z({ invalid: s });
  }
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
  static isDuration(t) {
    return t && t.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, n = {}) {
    const s = Object.assign({}, n, {
      floor: n.round !== !1 && n.floor !== !1
    });
    return this.isValid ? te.create(this.loc, s).formatDurationFromString(this, t) : Vc;
  }
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const n = Object.assign({}, this.values);
    return t.includeConfig && (n.conversionAccuracy = this.conversionAccuracy, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toISO() {
    if (!this.isValid)
      return null;
    let t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += dn(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }
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
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid)
      return this;
    const n = De(t), s = {};
    for (const o of He)
      (qe(n.values, o) || qe(this.values, o)) && (s[o] = n.get(o) + this.get(o));
    return Te(this, { values: s }, !0);
  }
  minus(t) {
    if (!this.isValid)
      return this;
    const n = De(t);
    return this.plus(n.negate());
  }
  mapUnits(t) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const s of Object.keys(this.values))
      n[s] = Js(t(this.values[s], s));
    return Te(this, { values: n }, !0);
  }
  get(t) {
    return this[z.normalizeUnit(t)];
  }
  set(t) {
    if (!this.isValid)
      return this;
    const n = Object.assign(this.values, yt(t, z.normalizeUnit, []));
    return Te(this, { values: n });
  }
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n }), r = { loc: o };
    return s && (r.conversionAccuracy = s), Te(this, r);
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const t = this.toObject();
    return Ac(this.matrix, t), Te(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid)
      return this;
    if (t.length === 0)
      return this;
    t = t.map((i) => z.normalizeUnit(i));
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
          He.indexOf(c) > He.indexOf(i) && mo(this.matrix, o, c, n, i);
      } else
        Ee(o[i]) && (s[i] = o[i]);
    for (const i in s)
      s[i] !== 0 && (n[r] += i === r ? s[i] : s[i] / this.matrix[r][i]);
    return Te(this, { values: n }, !0).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = -this.values[n];
    return Te(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
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
function De(e) {
  if (Ee(e))
    return z.fromMillis(e);
  if (z.isDuration(e))
    return e;
  if (typeof e == "object")
    return z.fromObject(e);
  throw new ie(
    `Unknown duration argument ${e} of type ${typeof e}`
  );
}
const Ke = "Invalid Interval";
function Hc(e, t) {
  return !e || !e.isValid ? U.invalid("missing or invalid start") : !t || !t.isValid ? U.invalid("missing or invalid end") : t < e ? U.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
  ) : null;
}
class U {
  constructor(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(t, n = null) {
    if (!t)
      throw new ie("need to specify a reason the Interval is invalid");
    const s = t instanceof he ? t : new he(t, n);
    if (Y.throwOnInvalid)
      throw new ha(s);
    return new U({ invalid: s });
  }
  static fromDateTimes(t, n) {
    const s = Xe(t), o = Xe(n), r = Hc(s, o);
    return r ?? new U({
      start: s,
      end: o
    });
  }
  static after(t, n) {
    const s = De(n), o = Xe(t);
    return U.fromDateTimes(o, o.plus(s));
  }
  static before(t, n) {
    const s = De(n), o = Xe(t);
    return U.fromDateTimes(o.minus(s), o);
  }
  static fromISO(t, n) {
    const [s, o] = (t || "").split("/", 2);
    if (s && o) {
      let r, i;
      try {
        r = L.fromISO(s, n), i = r.isValid;
      } catch {
        i = !1;
      }
      let l, a;
      try {
        l = L.fromISO(o, n), a = l.isValid;
      } catch {
        a = !1;
      }
      if (i && a)
        return U.fromDateTimes(r, l);
      if (i) {
        const c = z.fromISO(o, n);
        if (c.isValid)
          return U.after(r, c);
      } else if (a) {
        const c = z.fromISO(s, n);
        if (c.isValid)
          return U.before(l, c);
      }
    }
    return U.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static isInterval(t) {
    return t && t.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(t), s = this.end.startOf(t);
    return Math.floor(s.diff(n, t).get(t)) + 1;
  }
  hasSame(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  set({ start: t, end: n } = {}) {
    return this.isValid ? U.fromDateTimes(t || this.s, n || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid)
      return [];
    const n = t.map(Xe).filter((i) => this.contains(i)).sort(), s = [];
    let { s: o } = this, r = 0;
    for (; o < this.e; ) {
      const i = n[r] || this.e, l = +i > +this.e ? this.e : i;
      s.push(U.fromDateTimes(o, l)), o = l, r += 1;
    }
    return s;
  }
  splitBy(t) {
    const n = De(t);
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
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  equals(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }
  intersection(t) {
    if (!this.isValid)
      return this;
    const n = this.s > t.s ? this.s : t.s, s = this.e < t.e ? this.e : t.e;
    return n >= s ? null : U.fromDateTimes(n, s);
  }
  union(t) {
    if (!this.isValid)
      return this;
    const n = this.s < t.s ? this.s : t.s, s = this.e > t.e ? this.e : t.e;
    return U.fromDateTimes(n, s);
  }
  static merge(t) {
    const [n, s] = t.sort((o, r) => o.s - r.s).reduce(
      ([o, r], i) => r ? r.overlaps(i) || r.abutsStart(i) ? [o, r.union(i)] : [o.concat([r]), i] : [o, i],
      [[], null]
    );
    return s && n.push(s), n;
  }
  static xor(t) {
    let n = null, s = 0;
    const o = [], r = t.map((a) => [{ time: a.s, type: "s" }, { time: a.e, type: "e" }]), i = Array.prototype.concat(...r), l = i.sort((a, c) => a.time - c.time);
    for (const a of l)
      s += a.type === "s" ? 1 : -1, s === 1 ? n = a.time : (n && +n != +a.time && o.push(U.fromDateTimes(n, a.time)), n = null);
    return U.merge(o);
  }
  difference(...t) {
    return U.xor([this].concat(t)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ke;
  }
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Ke;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ke;
  }
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Ke;
  }
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Ke;
  }
  toDuration(t, n) {
    return this.isValid ? this.e.diff(this.s, t, n) : z.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return U.fromDateTimes(t(this.s), t(this.e));
  }
}
class et {
  static hasDST(t = Y.defaultZone) {
    const n = L.now().setZone(t).set({ month: 12 });
    return !t.universal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return ce.isValidSpecifier(t) && ce.isValidZone(t);
  }
  static normalizeZone(t) {
    return Oe(t, Y.defaultZone);
  }
  static months(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: r = "gregory" } = {}) {
    return (o || q.create(n, s, r)).months(t);
  }
  static monthsFormat(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null, outputCalendar: r = "gregory" } = {}) {
    return (o || q.create(n, s, r)).months(t, !0);
  }
  static weekdays(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null } = {}) {
    return (o || q.create(n, s, null)).weekdays(t);
  }
  static weekdaysFormat(t = "long", { locale: n = null, numberingSystem: s = null, locObj: o = null } = {}) {
    return (o || q.create(n, s, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return q.create(t).meridiems();
  }
  static eras(t = "short", { locale: n = null } = {}) {
    return q.create(n, null, "gregory").eras(t);
  }
  static features() {
    let t = !1, n = !1, s = !1, o = !1;
    if (be()) {
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
  return Math.floor(z.fromMillis(s).as("days"));
}
function zc(e, t, n) {
  const s = [
    ["years", (l, a) => a.year - l.year],
    ["quarters", (l, a) => a.quarter - l.quarter],
    ["months", (l, a) => a.month - l.month + (a.year - l.year) * 12],
    [
      "weeks",
      (l, a) => {
        const c = Hn(l, a);
        return (c - c % 7) / 7;
      }
    ],
    ["days", Hn]
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
function Rc(e, t, n, s) {
  let [o, r, i, l] = zc(e, t, n);
  const a = t - o, c = n.filter(
    (m) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(m) >= 0
  );
  c.length === 0 && (i < t && (i = o.plus({ [l]: 1 })), i !== o && (r[l] = (r[l] || 0) + a / (i - o)));
  const u = z.fromObject(Object.assign(r, s));
  return c.length > 0 ? z.fromMillis(a, s).shiftTo(...c).plus(u) : u;
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
}, Bc = gn.hanidec.replace(/[\[|\]]/g, "").split("");
function Zc(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const s = e.charCodeAt(n);
      if (e[n].search(gn.hanidec) !== -1)
        t += Bc.indexOf(e[n]);
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
function fe({ numberingSystem: e }, t = "") {
  return new RegExp(`${gn[e || "latn"]}${t}`);
}
const Wc = "missing Intl.DateTimeFormat.formatToParts support";
function H(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(Zc(n)) };
}
const qc = String.fromCharCode(160), ho = `( |${qc})`, po = new RegExp(ho, "g");
function jc(e) {
  return e.replace(/\./g, "\\.?").replace(po, ho);
}
function Rn(e) {
  return e.replace(/\./g, "").replace(po, " ").toLowerCase();
}
function me(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(jc).join("|")),
    deser: ([n]) => e.findIndex((s) => Rn(n) === Rn(s)) + t
  };
}
function Bn(e, t) {
  return { regex: e, deser: ([, n, s]) => $t(n, s), groups: t };
}
function Zn(e) {
  return { regex: e, deser: ([t]) => t };
}
function Uc(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Yc(e, t) {
  const n = fe(t), s = fe(t, "{2}"), o = fe(t, "{3}"), r = fe(t, "{4}"), i = fe(t, "{6}"), l = fe(t, "{1,2}"), a = fe(t, "{1,3}"), c = fe(t, "{1,6}"), u = fe(t, "{1,9}"), m = fe(t, "{2,4}"), h = fe(t, "{4,6}"), g = (B) => ({ regex: RegExp(Uc(B.val)), deser: ([J]) => J, literal: !0 }), Z = ((B) => {
    if (e.literal)
      return g(B);
    switch (B.val) {
      case "G":
        return me(t.eras("short", !1), 0);
      case "GG":
        return me(t.eras("long", !1), 0);
      case "y":
        return H(c);
      case "yy":
        return H(m, Vt);
      case "yyyy":
        return H(r);
      case "yyyyy":
        return H(h);
      case "yyyyyy":
        return H(i);
      case "M":
        return H(l);
      case "MM":
        return H(s);
      case "MMM":
        return me(t.months("short", !0, !1), 1);
      case "MMMM":
        return me(t.months("long", !0, !1), 1);
      case "L":
        return H(l);
      case "LL":
        return H(s);
      case "LLL":
        return me(t.months("short", !1, !1), 1);
      case "LLLL":
        return me(t.months("long", !1, !1), 1);
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
        return Zn(u);
      case "a":
        return me(t.meridiems(), 0);
      case "kkkk":
        return H(r);
      case "kk":
        return H(m, Vt);
      case "W":
        return H(l);
      case "WW":
        return H(s);
      case "E":
      case "c":
        return H(n);
      case "EEE":
        return me(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return me(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return me(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return me(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Bn(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Bn(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      case "z":
        return Zn(/[a-z_+-/]{1,256}?/i);
      default:
        return g(B);
    }
  })(e) || {
    invalidReason: Wc
  };
  return Z.token = e, Z;
}
const Gc = {
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
function Kc(e, t, n) {
  const { type: s, value: o } = e;
  if (s === "literal")
    return {
      literal: !0,
      val: o
    };
  const r = n[s];
  let i = Gc[s];
  if (typeof i == "object" && (i = i[r]), i)
    return {
      literal: !1,
      val: i
    };
}
function Jc(e) {
  return [`^${e.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, e];
}
function Qc(e, t, n) {
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
function Xc(e) {
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
  return _(e.Z) ? _(e.z) ? n = null : n = ce.create(e.z) : n = new Q(e.Z), _(e.q) || (e.M = (e.q - 1) * 3 + 1), _(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), _(e.u) || (e.S = un(e.u)), [Object.keys(e).reduce((o, r) => {
    const i = t(r);
    return i && (o[i] = e[r]), o;
  }, {}), n];
}
let Mt = null;
function xc() {
  return Mt || (Mt = L.fromMillis(1555555555555)), Mt;
}
function eu(e, t) {
  if (e.literal)
    return e;
  const n = te.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const r = te.create(t, n).formatDateTimeParts(xc()).map((i) => Kc(i, t, n));
  return r.includes(void 0) ? e : r;
}
function tu(e, t) {
  return Array.prototype.concat(...e.map((n) => eu(n, t)));
}
function yo(e, t, n) {
  const s = tu(te.parseFormat(n), e), o = s.map((i) => Yc(i, e)), r = o.find((i) => i.invalidReason);
  if (r)
    return { input: t, tokens: s, invalidReason: r.invalidReason };
  {
    const [i, l] = Jc(o), a = RegExp(i, "i"), [c, u] = Qc(t, a, l), [m, h] = u ? Xc(u) : [null, null];
    if (qe(u, "a") && qe(u, "H"))
      throw new xe(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: s, regex: a, rawMatches: c, matches: u, result: m, zone: h };
  }
}
function nu(e, t, n) {
  const { result: s, zone: o, invalidReason: r } = yo(e, t, n);
  return [s, o, r];
}
const go = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], vo = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function le(e, t) {
  return new he(
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
  let i = Math.floor((o - r + 10) / 7), l;
  return i < 1 ? (l = t - 1, i = pt(l)) : i > pt(t) ? (l = t + 1, i = 1) : l = t, Object.assign({ weekYear: l, weekNumber: i, weekday: r }, St(e));
}
function Wn(e) {
  const { weekYear: t, weekNumber: n, weekday: s } = e, o = bo(t, 1, 4), r = tt(t);
  let i = n * 7 + s - o - 3, l;
  i < 1 ? (l = t - 1, i += tt(l)) : i > r ? (l = t + 1, i -= tt(t)) : l = t;
  const { month: a, day: c } = $o(l, i);
  return Object.assign({ year: l, month: a, day: c }, St(e));
}
function Ot(e) {
  const { year: t, month: n, day: s } = e, o = wo(t, n, s);
  return Object.assign({ year: t, ordinal: o }, St(e));
}
function qn(e) {
  const { year: t, ordinal: n } = e, { month: s, day: o } = $o(t, n);
  return Object.assign({ year: t, month: s, day: o }, St(e));
}
function su(e) {
  const t = wt(e.weekYear), n = $e(e.weekNumber, 1, pt(e.weekYear)), s = $e(e.weekday, 1, 7);
  return t ? n ? s ? !1 : le("weekday", e.weekday) : le("week", e.week) : le("weekYear", e.weekYear);
}
function ou(e) {
  const t = wt(e.year), n = $e(e.ordinal, 1, tt(e.year));
  return t ? n ? !1 : le("ordinal", e.ordinal) : le("year", e.year);
}
function So(e) {
  const t = wt(e.year), n = $e(e.month, 1, 12), s = $e(e.day, 1, ht(e.year, e.month));
  return t ? n ? s ? !1 : le("day", e.day) : le("month", e.month) : le("year", e.year);
}
function ko(e) {
  const { hour: t, minute: n, second: s, millisecond: o } = e, r = $e(t, 0, 23) || t === 24 && n === 0 && s === 0 && o === 0, i = $e(n, 0, 59), l = $e(s, 0, 59), a = $e(o, 0, 999);
  return r ? i ? l ? a ? !1 : le("millisecond", o) : le("second", s) : le("minute", n) : le("hour", t);
}
const Dt = "Invalid DateTime", jn = 864e13;
function at(e) {
  return new he("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Et(e) {
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
  return new L(Object.assign({}, n, t, { old: n }));
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
  }), i = z.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), l = fn(r);
  let [a, c] = Io(l, n, e.zone);
  return i !== 0 && (a += i, c = e.zone.offset(a)), { ts: a, o: c };
}
function Qe(e, t, n, s, o) {
  const { setZone: r, zone: i } = n;
  if (e && Object.keys(e).length !== 0) {
    const l = t || i, a = L.fromObject(
      Object.assign(e, n, {
        zone: l,
        setZone: void 0
      })
    );
    return r ? a : a.setZone(i);
  } else
    return L.invalid(
      new he("unparsable", `the input "${o}" can't be parsed as ${s}`)
    );
}
function ze(e, t, n = !0) {
  return e.isValid ? te.create(q.create("en-US"), {
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
  format: l = "extended"
}) {
  let a = l === "basic" ? "HHmm" : "HH:mm";
  (!t || e.second !== 0 || e.millisecond !== 0) && (a += l === "basic" ? "ss" : ":ss", (!n || e.millisecond !== 0) && (a += ".SSS")), (r || s) && i && (a += " "), r ? a += "z" : s && (a += l === "basic" ? "ZZZ" : "ZZ");
  let c = ze(e, a);
  return o && (c = "T" + c), c;
}
const Co = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ru = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, iu = {
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
], au = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
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
  for (const l of To)
    _(e[l]) && (e[l] = Co[l]);
  const n = So(e) || ko(e);
  if (n)
    return L.invalid(n);
  const s = Y.now(), o = t.offset(s), [r, i] = dt(e, o, t);
  return new L({
    ts: r,
    zone: t,
    o: i
  });
}
function Qn(e, t, n) {
  const s = _(n.round) ? !0 : n.round, o = (i, l) => (i = dn(i, s || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(i, l)), r = (i) => n.calendary ? t.hasSame(e, i) ? 0 : t.startOf(i).diff(e.startOf(i), i).get(i) : t.diff(e, i).get(i);
  if (n.unit)
    return o(r(n.unit), n.unit);
  for (const i of n.units) {
    const l = r(i);
    if (Math.abs(l) >= 1)
      return o(l, i);
  }
  return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
class L {
  constructor(t) {
    const n = t.zone || Y.defaultZone;
    let s = t.invalid || (Number.isNaN(t.ts) ? new he("invalid input") : null) || (n.isValid ? null : at(n));
    this.ts = _(t.ts) ? Y.now() : t.ts;
    let o = null, r = null;
    if (!s)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [o, r] = [t.old.c, t.old.o];
      else {
        const l = n.offset(this.ts);
        o = Un(this.ts, l), s = Number.isNaN(o.year) ? new he("invalid input") : null, o = s ? null : o, r = s ? null : l;
      }
    this._zone = n, this.loc = t.loc || q.create(), this.invalid = s, this.weekData = null, this.c = o, this.o = r, this.isLuxonDateTime = !0;
  }
  static now() {
    return new L({});
  }
  static local(t, n, s, o, r, i, l) {
    return _(t) ? L.now() : Jn(
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
  static utc(t, n, s, o, r, i, l) {
    return _(t) ? new L({
      ts: Y.now(),
      zone: Q.utcInstance
    }) : Jn(
      {
        year: t,
        month: n,
        day: s,
        hour: o,
        minute: r,
        second: i,
        millisecond: l
      },
      Q.utcInstance
    );
  }
  static fromJSDate(t, n = {}) {
    const s = ga(t) ? t.valueOf() : NaN;
    if (Number.isNaN(s))
      return L.invalid("invalid input");
    const o = Oe(n.zone, Y.defaultZone);
    return o.isValid ? new L({
      ts: s,
      zone: o,
      loc: q.fromObject(n)
    }) : L.invalid(at(o));
  }
  static fromMillis(t, n = {}) {
    if (Ee(t))
      return t < -jn || t > jn ? L.invalid("Timestamp out of range") : new L({
        ts: t,
        zone: Oe(n.zone, Y.defaultZone),
        loc: q.fromObject(n)
      });
    throw new ie(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
    );
  }
  static fromSeconds(t, n = {}) {
    if (Ee(t))
      return new L({
        ts: t * 1e3,
        zone: Oe(n.zone, Y.defaultZone),
        loc: q.fromObject(n)
      });
    throw new ie("fromSeconds requires a numerical input");
  }
  static fromObject(t) {
    const n = Oe(t.zone, Y.defaultZone);
    if (!n.isValid)
      return L.invalid(at(n));
    const s = Y.now(), o = n.offset(s), r = yt(t, Kn, [
      "zone",
      "locale",
      "outputCalendar",
      "numberingSystem"
    ]), i = !_(r.ordinal), l = !_(r.year), a = !_(r.month) || !_(r.day), c = l || a, u = r.weekYear || r.weekNumber, m = q.fromObject(t);
    if ((c || i) && u)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && i)
      throw new xe("Can't mix ordinal dates with month/day");
    const h = u || r.weekday && !c;
    let g, w, Z = Un(s, o);
    h ? (g = lu, w = ru, Z = At(Z)) : i ? (g = au, w = iu, Z = Ot(Z)) : (g = To, w = Co);
    let B = !1;
    for (const Ce of g) {
      const P = r[Ce];
      _(P) ? B ? r[Ce] = w[Ce] : r[Ce] = Z[Ce] : B = !0;
    }
    const J = h ? su(r) : i ? ou(r) : So(r), x = J || ko(r);
    if (x)
      return L.invalid(x);
    const j = h ? Wn(r) : i ? qn(r) : r, [ve, de] = dt(j, o, n), Ie = new L({
      ts: ve,
      zone: n,
      o: de,
      loc: m
    });
    return r.weekday && c && t.weekday !== Ie.weekday ? L.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${Ie.toISO()}`
    ) : Ie;
  }
  static fromISO(t, n = {}) {
    const [s, o] = $c(t);
    return Qe(s, o, n, "ISO 8601", t);
  }
  static fromRFC2822(t, n = {}) {
    const [s, o] = Sc(t);
    return Qe(s, o, n, "RFC 2822", t);
  }
  static fromHTTP(t, n = {}) {
    const [s, o] = kc(t);
    return Qe(s, o, n, "HTTP", n);
  }
  static fromFormat(t, n, s = {}) {
    if (_(t) || _(n))
      throw new ie("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: r = null } = s, i = q.fromOpts({
      locale: o,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, a, c] = nu(i, t, n);
    return c ? L.invalid(c) : Qe(l, a, s, `format ${n}`, t);
  }
  static fromString(t, n, s = {}) {
    return L.fromFormat(t, n, s);
  }
  static fromSQL(t, n = {}) {
    const [s, o] = Lc(t);
    return Qe(s, o, n, "SQL", t);
  }
  static invalid(t, n = null) {
    if (!t)
      throw new ie("need to specify a reason the DateTime is invalid");
    const s = t instanceof he ? t : new he(t, n);
    if (Y.throwOnInvalid)
      throw new ma(s);
    return new L({ invalid: s });
  }
  static isDateTime(t) {
    return t && t.isLuxonDateTime || !1;
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Et(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Et(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Et(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Ot(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? et.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? et.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? et.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? et.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.universal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return st(this.year);
  }
  get daysInMonth() {
    return ht(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? tt(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? pt(this.weekYear) : NaN;
  }
  resolvedLocaleOpts(t = {}) {
    const { locale: n, numberingSystem: s, calendar: o } = te.create(
      this.loc.clone(t),
      t
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: s, outputCalendar: o };
  }
  toUTC(t = 0, n = {}) {
    return this.setZone(Q.instance(t), n);
  }
  toLocal() {
    return this.setZone(Y.defaultZone);
  }
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: s = !1 } = {}) {
    if (t = Oe(t, Y.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let o = this.ts;
      if (n || s) {
        const r = t.offset(this.ts), i = this.toObject();
        [o] = dt(i, r, t);
      }
      return Je(this, { ts: o, zone: t });
    } else
      return L.invalid(at(t));
  }
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: s } = {}) {
    const o = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: s });
    return Je(this, { loc: o });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid)
      return this;
    const n = yt(t, Kn, []), s = !_(n.weekYear) || !_(n.weekNumber) || !_(n.weekday), o = !_(n.ordinal), r = !_(n.year), i = !_(n.month) || !_(n.day), l = r || i, a = n.weekYear || n.weekNumber;
    if ((l || o) && a)
      throw new xe(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (i && o)
      throw new xe("Can't mix ordinal dates with month/day");
    let c;
    s ? c = Wn(Object.assign(At(this.c), n)) : _(n.ordinal) ? (c = Object.assign(this.toObject(), n), _(n.day) && (c.day = Math.min(ht(c.year, c.month), c.day))) : c = qn(Object.assign(Ot(this.c), n));
    const [u, m] = dt(c, this.o, this.zone);
    return Je(this, { ts: u, o: m });
  }
  plus(t) {
    if (!this.isValid)
      return this;
    const n = De(t);
    return Je(this, Yn(this, n));
  }
  minus(t) {
    if (!this.isValid)
      return this;
    const n = De(t).negate();
    return Je(this, Yn(this, n));
  }
  startOf(t) {
    if (!this.isValid)
      return this;
    const n = {}, s = z.normalizeUnit(t);
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
  endOf(t) {
    return this.isValid ? this.plus({ [t]: 1 }).startOf(t).minus(1) : this;
  }
  toFormat(t, n = {}) {
    return this.isValid ? te.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Dt;
  }
  toLocaleString(t = mt) {
    return this.isValid ? te.create(this.loc.clone(t), t).formatDateTime(this) : Dt;
  }
  toLocaleParts(t = {}) {
    return this.isValid ? te.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }
  toISO(t = {}) {
    return this.isValid ? `${this.toISODate(t)}T${this.toISOTime(t)}` : null;
  }
  toISODate({ format: t = "extended" } = {}) {
    let n = t === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (n = "+" + n), ze(this, n);
  }
  toISOWeekDate() {
    return ze(this, "kkkk-'W'WW-c");
  }
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
  toRFC2822() {
    return ze(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return ze(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return ze(this, "yyyy-MM-dd");
  }
  toSQLTime({ includeOffset: t = !0, includeZone: n = !1 } = {}) {
    return Gn(this, {
      includeOffset: t,
      includeZone: n,
      spaceZone: !0
    });
  }
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Dt;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const n = Object.assign({}, this.c);
    return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, n = "milliseconds", s = {}) {
    if (!this.isValid || !t.isValid)
      return z.invalid(
        this.invalid || t.invalid,
        "created by diffing an invalid DateTime"
      );
    const o = Object.assign(
      { locale: this.locale, numberingSystem: this.numberingSystem },
      s
    ), r = va(n).map(z.normalizeUnit), i = t.valueOf() > this.valueOf(), l = i ? this : t, a = i ? t : this, c = Rc(l, a, r, o);
    return i ? c.negate() : c;
  }
  diffNow(t = "milliseconds", n = {}) {
    return this.diff(L.now(), t, n);
  }
  until(t) {
    return this.isValid ? U.fromDateTimes(this, t) : this;
  }
  hasSame(t, n) {
    if (!this.isValid)
      return !1;
    const s = t.valueOf(), o = this.setZone(t.zone, { keepLocalTime: !0 });
    return o.startOf(n) <= s && s <= o.endOf(n);
  }
  equals(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }
  toRelative(t = {}) {
    if (!this.isValid)
      return null;
    const n = t.base || L.fromObject({ zone: this.zone }), s = t.padding ? this < n ? -t.padding : t.padding : 0;
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
  toRelativeCalendar(t = {}) {
    return this.isValid ? Qn(
      t.base || L.fromObject({ zone: this.zone }),
      this,
      Object.assign(t, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: !0
      })
    ) : null;
  }
  static min(...t) {
    if (!t.every(L.isDateTime))
      throw new ie("min requires all arguments be DateTimes");
    return Dn(t, (n) => n.valueOf(), Math.min);
  }
  static max(...t) {
    if (!t.every(L.isDateTime))
      throw new ie("max requires all arguments be DateTimes");
    return Dn(t, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(t, n, s = {}) {
    const { locale: o = null, numberingSystem: r = null } = s, i = q.fromOpts({
      locale: o,
      numberingSystem: r,
      defaultToEN: !0
    });
    return yo(i, t, n);
  }
  static fromStringExplain(t, n, s = {}) {
    return L.fromFormatExplain(t, n, s);
  }
  static get DATE_SHORT() {
    return mt;
  }
  static get DATE_MED() {
    return qt;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return js;
  }
  static get DATE_FULL() {
    return jt;
  }
  static get DATE_HUGE() {
    return Ut;
  }
  static get TIME_SIMPLE() {
    return Yt;
  }
  static get TIME_WITH_SECONDS() {
    return Gt;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Kt;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Jt;
  }
  static get TIME_24_SIMPLE() {
    return Qt;
  }
  static get TIME_24_WITH_SECONDS() {
    return Xt;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return xt;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return en;
  }
  static get DATETIME_SHORT() {
    return tn;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return nn;
  }
  static get DATETIME_MED() {
    return sn;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return on;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Us;
  }
  static get DATETIME_FULL() {
    return rn;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return ln;
  }
  static get DATETIME_HUGE() {
    return an;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return cn;
  }
}
function Xe(e) {
  if (L.isDateTime(e))
    return e;
  if (e && e.valueOf && Ee(e.valueOf()))
    return L.fromJSDate(e);
  if (e && typeof e == "object")
    return L.fromObject(e);
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
function cu(e) {
  return ["top", "bottom"].includes(vn(e)) ? "x" : "y";
}
function uu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function du(e) {
  return typeof e != "number" ? uu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function fu(e, t) {
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
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = t, w = du(g), B = l[h ? m === "floating" ? "reference" : "floating" : m], J = Xn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(B))) == null || n ? B : B.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), x = m === "floating" ? {
    ...i.floating,
    x: s,
    y: o
  } : i.reference, j = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), ve = await (r.isElement == null ? void 0 : r.isElement(j)) ? await (r.getScale == null ? void 0 : r.getScale(j)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, de = Xn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: j,
    strategy: a
  }) : x);
  return process.env.NODE_ENV, {
    top: (J.top - de.top + w.top) / ve.y,
    bottom: (de.bottom - J.bottom + w.bottom) / ve.y,
    left: (J.left - de.left + w.left) / ve.x,
    right: (de.right - J.right + w.right) / ve.x
  };
}
const Ae = Math.max;
async function mu(e, t) {
  const {
    placement: n,
    platform: s,
    elements: o
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), i = vn(n), l = Mo(n), a = cu(n) === "x", c = ["left", "top"].includes(i) ? -1 : 1, u = r && a ? -1 : 1, m = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return l && typeof w == "number" && (g = l === "end" ? w * -1 : w), a ? {
    x: g * u,
    y: h * c
  } : {
    x: h * c,
    y: g * u
  };
}
const kt = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: s
      } = t, o = await mu(t, e);
      return {
        x: n + o.x,
        y: s + o.y,
        data: o
      };
    }
  };
}, bn = function(e) {
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
      } = e, a = await fu(t, l), c = vn(n), u = Mo(n);
      let m, h;
      c === "top" || c === "bottom" ? (m = c, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = c, m = u === "end" ? "top" : "bottom");
      const g = Ae(a.left, 0), w = Ae(a.right, 0), Z = Ae(a.top, 0), B = Ae(a.bottom, 0), J = {
        availableHeight: s.floating.height - (["left", "right"].includes(n) ? 2 * (Z !== 0 || B !== 0 ? Z + B : Ae(a.top, a.bottom)) : a[m]),
        availableWidth: s.floating.width - (["top", "bottom"].includes(n) ? 2 * (g !== 0 || w !== 0 ? g + w : Ae(a.left, a.right)) : a[h])
      };
      await i({
        ...t,
        ...J
      });
      const x = await o.getDimensions(r.floating);
      return s.floating.width !== x.width || s.floating.height !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
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
    const n = D(), s = k(), o = k(), r = k(e.modelValue ? e.modelValue.toISODate() : ""), i = k(!1), l = k(L.now()), a = k(xn.bottom), c = V(() => [kt(4)]), u = V(() => {
      if (e.dots === null)
        return null;
      const P = {};
      return e.dots.forEach((Fe) => {
        const Se = Fe.date.toISODate();
        P[Se] = P[Se] || [], P[Se].push(Fe);
      }), P;
    }), m = V(() => {
      let P = et.weekdays("short", {
        locale: "en"
      });
      return e.firstDayOfWeek !== 0 && P.unshift(...P.splice(e.firstDayOfWeek, 7 - e.firstDayOfWeek)), P;
    }), h = V(() => {
      const P = [], Fe = l.value.startOf("month");
      let Se = Fe.weekday - 1;
      Se < e.firstDayOfWeek ? Se += 7 - e.firstDayOfWeek : Se -= e.firstDayOfWeek;
      const Lo = L.now();
      let Pe = Fe.minus({
        days: Se
      });
      for (let wn = 0; wn < 6 * 7; wn++)
        P.push({
          date: Pe,
          classes: {
            "-outside-month": Pe.month !== Fe.month,
            "-today": e.highlightToday && Pe.hasSame(Lo, "day"),
            "-selected": e.modelValue && Pe.hasSame(e.modelValue, "day")
          }
        }), Pe = Pe.plus({
          days: 1
        });
      return P;
    }), g = (P) => {
      l.value = l.value.plus(P);
    }, w = (P) => {
      l.value = l.value.minus(P);
    };
    ae(() => e.modelValue, () => {
      r.value = e.modelValue ? e.modelValue.toISODate() : "";
    });
    const Z = (P) => {
      r.value = P.toISODate(), t.emit("update:modelValue", P), i.value = !1;
    }, B = () => {
      const P = L.fromISO(r.value);
      P.isValid && (l.value = P, t.emit("update:modelValue", P));
    }, J = k(!1), x = () => {
      i.value === !1 && (l.value = e.modelValue ? e.modelValue : L.now()), J.value = !0, i.value = !0, t.emit("focus");
    }, j = () => {
      J.value = !1, t.emit("blur");
    }, ve = (P) => {
      a.value = xn[Be(P.placement).placement];
    }, de = (P) => {
      P.outsideFloating && P.outsideReference && (i.value = !1);
    };
    ae(() => e.disabled, () => {
      e.disabled && (i.value = !1);
    }), ae(h, (P) => {
      t.emit("view-changed", {
        from: P[0].date,
        to: P[P.length - 1].date
      });
    });
    const Ie = (P) => ({
      class: [n.css_root.value]
    }), Ce = Ko().as("div", Ie).props(["modelValue", "disabled", "visible"]).build();
    return {
      Icons: X,
      input: s,
      icon: o,
      inputValue: r,
      weekdayNames: m,
      daysToShow: h,
      shownDate: l,
      plusShownDate: g,
      minusShownDate: w,
      onDateClick: Z,
      onDateInputChanged: B,
      core: Ce,
      ...n,
      onInputFocus: x,
      onInputBlur: j,
      transition: a,
      onClickOutside: de,
      onComputedPosition: ve,
      floatingVisible: i,
      floatingMiddleware: c,
      cachedDots: u
    };
  }
}), pu = ["onClick"];
function yu(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-input"), a = v("h-icon-button"), c = v("h-floating"), u = v("hr-date-picker");
  return G((f(), I(u, F(e.core.props, A(e.core.listeners)), {
    default: $((m) => [
      C(l, {
        ref: (h) => {
          h && (e.input = h.$el);
        },
        disabled: m.disabled,
        modelValue: e.inputValue,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => e.inputValue = h),
        onChange: e.onDateInputChanged,
        onFocus: e.onInputFocus,
        onBlur: e.onInputBlur
      }, {
        customSuffix: $(() => [
          C(i, {
            ref: (h) => {
              h && (e.icon = h.$el);
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
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
          y("div", {
            class: d([e.css_ec("calendar-header")])
          }, [
            y("div", null, [
              C(a, {
                icon: e.Icons.chevronLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[1] || (t[1] = (h) => e.minusShownDate({ months: 1 }))
              }, null, 8, ["icon"]),
              C(a, {
                icon: e.Icons.chevronDoubleLeft,
                size: "normal",
                styling: "subtle",
                onClick: t[2] || (t[2] = (h) => e.minusShownDate({ years: 1 }))
              }, null, 8, ["icon"])
            ]),
            y("div", null, [
              y("span", {
                class: d([e.css_ec("calendar-year-label")])
              }, N(`${e.shownDate.monthLong} ${e.shownDate.year}`), 3)
            ]),
            y("div", null, [
              C(a, {
                icon: e.Icons.chevronDoubleRight,
                size: "normal",
                styling: "subtle",
                onClick: t[3] || (t[3] = (h) => e.plusShownDate({ years: 1 }))
              }, null, 8, ["icon"]),
              C(a, {
                icon: e.Icons.chevronRight,
                size: "normal",
                styling: "subtle",
                onClick: t[4] || (t[4] = (h) => e.plusShownDate({ months: 1 }))
              }, null, 8, ["icon"])
            ])
          ], 2),
          y("div", {
            class: d([e.css_ec("calendar")])
          }, [
            y("div", {
              class: d([e.css_ec("calendar-weekdays")])
            }, [
              (f(!0), S(se, null, pe(e.weekdayNames, (h) => (f(), S("div", null, N(h), 1))), 256))
            ], 2),
            y("div", {
              class: d([e.css_ec("calendar-dates"), { "-has-dots": e.cachedDots !== null }])
            }, [
              (f(!0), S(se, null, pe(e.daysToShow, (h) => (f(), S("div", {
                key: `${h.date.toISODate()}-${e.shownDate.toISODate()}`,
                class: d([e.css_ec("calendar-date"), h.classes]),
                onClick: (g) => e.onDateClick(h.date)
              }, [
                ne(N(h.date.day) + " ", 1),
                e.cachedDots !== null && e.cachedDots[h.date.toISODate()] ? (f(), S("div", {
                  key: 0,
                  class: d([e.css_ec("dots-container")])
                }, [
                  (f(!0), S(se, null, pe(e.cachedDots[h.date.toISODate()], (g) => (f(), S("span", {
                    class: d([e.css_ec("dot")]),
                    style: R({ background: g.color || null })
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
    [K, e.visible]
  ]);
}
const gu = /* @__PURE__ */ E(hu, [["render", yu]]), vu = M({
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
    }, l = () => {
      s.value.focusInput();
    }, a = (u) => ({
      class: {
        "-readonly": u.readonly,
        "-disabled": u.disabled
      },
      onClick: u.onClick
    }), c = tr(n).as("div", a).props(["modelValue", "modelModifiers", "readonly", "disabled", "type"]).events(["update:modelValue"]).build();
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
}), bu = ["value", "type", "max-length", "min-length", "min", "max", "disabled", "placeholder", "readonly", "autocomplete", "onInput"];
function wu(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-input");
  return f(), I(l, F({
    ref: "coreInput",
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      T(e.$slots, "customPrefix"),
      e.$slots.prefix || e.prefix ? (f(), S("div", {
        key: 0,
        class: d([e.css_ec("prefix")]),
        style: R({ width: e.prefixWidth })
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
        value: a.modelValue,
        type: e.type,
        "max-length": e.maxLength,
        "min-length": e.minLength,
        min: e.min,
        max: e.max,
        disabled: a.disabled,
        placeholder: e.placeholder,
        readonly: a.readonly,
        autocomplete: e.autocomplete,
        onInput: (c) => a.modelValue = c.target.value,
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
        style: R({ width: e.suffixWidth })
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
const $u = /* @__PURE__ */ E(vu, [["render", wu]]), Su = M({
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
    const n = k(), s = k(), o = k(), r = k(), i = k(), l = k(""), a = V(() => [
      bn({
        padding: 8,
        apply(j) {
          Object.assign(j.elements.floating.style, {
            width: `${j.rects.reference.width}px`
          }), l.value = `${j.availableHeight}px`;
        }
      })
    ]);
    Os(() => {
      o.value = [];
    });
    const c = (j) => {
      r.value = j, i.value = j ? j.$el : null;
    }, u = k(!1), m = () => {
      u.value = !0, r.value.showList(), t.emit("focus");
    }, h = () => {
      u.value = !1, t.emit("blur");
    }, g = () => {
      r.value.focusInput();
    }, w = () => {
      r.value.hideList();
    }, Z = (j) => {
      j.outsideFloating && j.outsideReference && w();
    }, B = (j) => {
      const ve = e.items.findIndex((Ie) => Ie === j), de = o.value[ve];
      de && de.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, J = (j) => ({
      class: {
        "-disabled": j.disabled
      }
    }), x = ir(n).as("div", J).props(["modelValue", "modelModifiers", "disabled", "items"]).events(["update:modelValue", "itemSelected", "focusedItemChanged"]).build();
    return {
      setCoreInput: c,
      coreAutocompleteEl: i,
      floatingMiddleware: a,
      listMaxHeight: l,
      input: n,
      items: o,
      scrollContainer: s,
      hasFocus: u,
      onFocus: m,
      onBlur: h,
      core: x,
      onClickOutside: Z,
      onFocusedItemChanged: B,
      ...D(),
      focus: g,
      hideList: w
    };
  }
}), ku = ["value", "type", "max-length", "min-length", "disabled", "placeholder", "readonly", "autocomplete", "onInput", "onKeydown"], Iu = ["onKeydown"], Cu = ["onClick"];
function Tu(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-autocomplete");
  return f(), I(c, F({
    ref: (u) => e.setCoreInput(u),
    class: [e.css_root, { "-focus": e.hasFocus }]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
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
        "max-length": e.maxLength,
        "min-length": e.minLength,
        disabled: u.disabled,
        placeholder: e.placeholder,
        readonly: u.readonly,
        autocomplete: e.autocomplete,
        onInput: (m) => u.modelValue = m.target.value,
        onFocus: t[0] || (t[0] = (...m) => e.onFocus && e.onFocus(...m)),
        onBlur: t[1] || (t[1] = (...m) => e.onBlur && e.onBlur(...m)),
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
      C(a, {
        as: "div",
        class: d([e.css_ec("list-container")]),
        reference: e.coreAutocompleteEl,
        transition: "fade-fast",
        visible: u.listVisible,
        placement: "bottom-start",
        middleware: e.floatingMiddleware,
        onHide: (m) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside
      }, {
        default: $(() => [
          y("div", {
            class: d([e.css_ec("list-box")]),
            onKeydown: u.onKeyEvents,
            style: R({ maxHeight: e.listMaxHeight })
          }, [
            C(l, { ref: "scrollContainer" }, {
              default: $(() => [
                T(e.$slots, "default", {
                  items: u.items,
                  focusedItem: u.focusedItem,
                  onItemClick: u.onItemClick
                }, () => [
                  y("ul", {
                    class: d([e.css_ec("list")])
                  }, [
                    (f(!0), S(se, null, pe(u.items, (m, h) => (f(), S("li", {
                      ref_for: !0,
                      ref: (g) => e.items[h] = g,
                      class: d([e.css_ec("list-item"), { "-focused": m === u.focusedItem }]),
                      onClick: (g) => u.onItemClick(m)
                    }, N(m), 11, Cu))), 256))
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
const Mu = /* @__PURE__ */ E(Su, [["render", Tu]]), Ou = M({
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
}), Du = ["multiple", "accept"];
function Eu(e, t, n, s, o, r) {
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
const Lu = /* @__PURE__ */ E(Ou, [["render", Eu]]), es = "elementic-inputs", Vu = {
  Input: $u,
  Autocomplete: Mu,
  FileInput: Lu
}, Nu = {
  CoreInputsInstall: lr
}, Oo = {
  install: (e, t) => {
    p.isModuleInstalled(e, es) || (p.installDependencies(e, Nu, t), p.installComponents(e, Vu), p.markModuleAsInstalled(e, es));
  }
}, ts = "elementic-date-pickers", Fu = {
  DatePicker: gu
}, Pu = {
  CoreDatePickersInstall: ar,
  IconsInstall: Wt,
  InputsInstall: Oo
}, _u = {
  install: (e, t) => {
    p.isModuleInstalled(e, ts) || (p.installDependencies(e, Pu, t), p.installComponents(e, Fu), p.markModuleAsInstalled(e, ts));
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
    ae(s, () => {
      Object.keys(s).length === 0 && n();
    });
    const o = (c) => {
      e.visible === !1 && delete s[c];
    }, r = (c) => {
      e.visible === !1 && (s[c] = !0);
    }, i = (c, u) => c < u - 1 ? `scale(${1 - 0.1 * (u - c - 1)})` : null, l = (c, u) => c < u - 1 ? 1 - 0.25 * (u - c) : null, a = Hs(["visible"]);
    return {
      Icons: X,
      core: a,
      ...D(),
      transitionEnded: o,
      transitionStarted: r,
      getScale: i,
      getOpacity: l
    };
  }
}), Hu = ["innerHTML"];
function zu(e, t, n, s, o, r) {
  const i = v("h-icon-button"), l = v("hr-dialog");
  return f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${a.stackIndex}`, `-count-${a.stackCount}`, `-visible-count-${a.visibleStackCount}`]),
        style: R({ zIndex: e.zIndex })
      }, [
        C(ye, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: $(() => [
            G(y("div", {
              class: d([e.css_ec("backdrop")]),
              style: R({ opacity: e.getOpacity(a.stackIndex, a.visibleStackCount) })
            }, null, 6), [
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1024),
        C(ye, {
          name: "small-slide-up-medium",
          appear: "",
          onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
          onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
        }, {
          default: $(() => [
            G(y("div", {
              class: d([e.css_ec("box-container")]),
              style: R({ width: e.width, transform: e.getScale(a.stackIndex, a.visibleStackCount) })
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
                    onClick: a.close
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
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1024)
      ], 6)
    ]),
    _: 3
  }, 16);
}
const Ru = /* @__PURE__ */ E(Au, [["render", zu]]), ns = "elementic-dialgos", Bu = {
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
    ae(s, () => {
      Object.keys(s).length === 0 && n();
    });
    const r = (u) => {
      e.visible === !1 && delete s[u];
    }, i = (u) => {
      e.visible === !1 && (s[u] = !0);
    }, l = (u, m) => u < m - 1 ? `translateX(${e.placement === "right" ? "-" : ""}${(m - u - 1) * 64}px)` : null, a = (u, m) => u < m - 1 ? 1 - 0.25 * (m - u) : null;
    return {
      core: Hs(["visible"]),
      ...D(),
      slideTransition: o,
      transitionEnded: r,
      transitionStarted: i,
      getScale: l,
      getOpacity: a
    };
  }
}), ju = ["innerHTML"];
function Uu(e, t, n, s, o, r) {
  const i = v("h-scroll-container"), l = v("hr-dialog");
  return f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      y("div", {
        class: d([e.css_root, `-color-${e.color}`, `-index-${a.stackIndex}`, `-count-${a.stackCount}`, `-active-count-${a.visibleStackCount}`]),
        style: R({ zIndex: e.zIndex })
      }, [
        C(ye, {
          name: "fade-medium",
          appear: "",
          onBeforeLeave: t[0] || (t[0] = (c) => e.transitionStarted("backdrop")),
          onAfterLeave: t[1] || (t[1] = (c) => e.transitionEnded("backdrop"))
        }, {
          default: $(() => [
            G(y("div", {
              class: d([e.css_ec("backdrop")]),
              style: R({ opacity: e.getOpacity(a.stackIndex, a.visibleStackCount) })
            }, null, 6), [
              [K, a.visible]
            ])
          ]),
          _: 2
        }, 1024),
        C(ye, {
          name: e.slideTransition,
          appear: "",
          onBeforeLeave: t[2] || (t[2] = (c) => e.transitionStarted("box")),
          onAfterLeave: t[3] || (t[3] = (c) => e.transitionEnded("box"))
        }, {
          default: $(() => [
            G(y("div", {
              class: d([e.css_ec("box"), `-placement-${e.placement}`, { "-has-footer": e.$slots.footer }]),
              style: R({ transform: e.getScale(a.stackIndex, a.visibleStackCount) })
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
                  default: $(() => [
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
const Yu = /* @__PURE__ */ E(qu, [["render", Uu]]), ss = "elementic-drawers", Gu = {
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
    const n = k(), s = k(), o = k(), r = k(""), i = k({}), l = k(os.bottom), a = V(() => [
      kt(4),
      bn({
        padding: 8,
        apply(w) {
          i.value = {
            [e.autoSize ? "minWidth" : "width"]: `${w.rects.reference.width}px`
          }, r.value = `${w.availableHeight}px`;
        }
      })
    ]), c = (w) => {
      w.outsideFloating && w.outsideReference && n.value.close();
    }, u = (w) => {
      l.value = os[Be(w.placement).placement];
    }, m = (w) => {
      w && w.component && w.component.vnode && w.component.vnode.el && w.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, h = (w) => ({
      class: {
        "-active": w.menuVisible,
        "-disabled": w.disabled
      }
    }), g = hr().as("div", h).props(["disabled", "hideOnClick", "splitButton", "visible"]).events(["click", "focusedItemChanged"]).build();
    return {
      Icons: X,
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
      onFocusedItemChanged: m,
      ...D()
    };
  }
}), Xu = ["onClick", "onKeydown"], xu = ["onClick", "onKeydown"], ed = ["onKeydown"];
function td(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-dropdown");
  return G((f(), I(c, F({
    ref: "dropdown",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
      y("div", {
        ref: "button",
        tabindex: "0",
        class: d([e.css_ec("button"), { "-split-button": u.splitButton }]),
        onClick: u.onButtonClick,
        onKeydown: (m) => u.onKeyEvents(m, "main")
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
          onKeydown: $n((m) => u.onKeyEvents(m, "split"), ["stop"])
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
      C(a, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        "arrow-reference": e.icon ? e.icon.$el : null,
        "show-arrow": "",
        transition: e.transition,
        visible: u.menuVisible,
        placement: `bottom-${e.align}`,
        middleware: e.floatingMiddleware,
        onHide: (m) => u.clearFocusedItem(),
        onClickOutside: e.onClickOutside,
        onComputedPosition: e.onComputedPosition,
        onTransitionStateChanged: u.onMenuTransitioning,
        style: R(e.floatingStyle)
      }, {
        arrow: $(() => [
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: R({ maxHeight: e.menuMaxHeight })
          }, [
            C(l, null, {
              default: $(() => [
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
    [K, e.visible]
  ]);
}
const nd = /* @__PURE__ */ E(Qu, [["render", td]]), sd = M({
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
  const i = v("h-icon"), l = v("hr-dropdown-item");
  return f(), I(l, F({
    class: [e.css_root],
    tabindex: "-1"
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
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
const rd = /* @__PURE__ */ E(sd, [["render", od]]), id = M({
  name: "h-dropdown-item-divider",
  setup(e, t) {
    const n = ue("dropdown"), s = V(() => n.itemsVisible.value);
    return {
      ...D(),
      visible: s
    };
  }
});
function ld(e, t, n, s, o, r) {
  return e.visible ? (f(), S("div", {
    key: 0,
    class: d([e.css_root])
  }, null, 2)) : O("", !0);
}
const ad = /* @__PURE__ */ E(id, [["render", ld]]), cd = M({
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
const dd = /* @__PURE__ */ E(cd, [["render", ud]]), Lt = {
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
    const n = D(), s = k(), o = k(null), r = k({}), i = k(Lt[Be(e.placement).placement]), l = k(Be(e.placement).placement), a = k(Be(e.placement).alignment), c = V(() => {
      const h = [...e.middleware];
      return e.showArrow && h.push(kr({
        reference: e.arrowReference,
        element: o.value
      })), h;
    }), u = (h) => {
      const g = Be(h.placement);
      l.value = g.placement, a.value = g.alignment;
      const w = l.value;
      h.middlewareData.arrowReference && (r.value = {
        left: h.middlewareData.arrowReference.x != null ? `${h.middlewareData.arrowReference.x}px` : "",
        top: h.middlewareData.arrowReference.y != null ? `${h.middlewareData.arrowReference.y}px` : "",
        [Lt[w]]: `${-o.value[fd[w]]}px`
      }, i.value = Lt[w]), t.emit("computedPosition", h);
    }, m = Ir().props(["as", "reference", "visible", "placement", "transition"]).events(["clickOutside", "show", "hide"]).build();
    return {
      ...n,
      middleware: c,
      floating: s,
      floatingPlacement: l,
      floatingAlignment: a,
      floatingArrow: o,
      arrowStyle: r,
      arrowPlacement: i,
      core: m,
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
    default: $(() => [
      e.showArrow ? (f(), S("span", {
        key: 0,
        ref: "floatingArrow",
        style: R({ display: "flex", position: "absolute", ...e.arrowStyle }),
        "data-arrow-placement": e.arrowPlacement
      }, [
        T(e.$slots, "arrow")
      ], 12, hd)) : O("", !0),
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["middleware", "data-floating-placement", "data-floating-alignment", "onComputedPosition"]);
}
const yd = /* @__PURE__ */ E(md, [["render", pd]]), rs = "elementic-floating", gd = {
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
  DropdownItemDivider: ad,
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
  return f(), I(ye, {
    name: e.transitionName,
    onEnter: e.onEnter,
    onAfterEnter: e.onAfterEnter,
    onBeforeLeave: e.onBeforeLeave,
    "enter-active-class": `${e.transitionName}-enter-active -transitioning`,
    "leave-active-class": `${e.transitionName}-leave-active -transitioning`
  }, {
    default: $(() => [
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
const Id = /* @__PURE__ */ E(Sd, [["render", kd]]), Cd = M({
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
    }, l = () => {
      n.old = null, n.new = null, n.target = null;
    }, a = Or().as("div").props(["active"]).build();
    return ft("fragmentContainer", {
      active: V(() => e.active),
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
function Td(e, t, n, s, o, r) {
  const i = v("hr-fragment-container");
  return f(), I(i, F(e.core.props, {
    class: [e.css_root, e.transition ? `${e.transition}-container` : null],
    style: { height: e.actualHeight }
  }), {
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "style"]);
}
const Md = /* @__PURE__ */ E(Cd, [["render", Td]]), ls = "elementic-fragments", Od = {
  Fragment: Id,
  FragmentContainer: Md
}, Dd = {
  CoreFragmentsInstall: Dr
}, Ed = {
  install: (e, t) => {
    p.isModuleInstalled(e, ls) || (p.installDependencies(e, Dd, t), p.installComponents(e, Od), p.markModuleAsInstalled(e, ls));
  }
}, Ld = /* @__PURE__ */ M({
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
const Fd = /* @__PURE__ */ E(Vd, [["render", Nd]]), as = "elementic-lists", Pd = {
  List: Ld,
  ListItem: Fd
}, _d = {
  install: (e, t) => {
    p.isModuleInstalled(e, as) || (p.installComponents(e, Pd), p.markModuleAsInstalled(e, as));
  }
}, Ad = M({
  name: "h-notification",
  props: {
    ...Er,
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
    ae(o, () => {
      Object.keys(o).length === 0 && s();
    });
    const r = (c) => {
      e.visible === !1 && delete o[c];
    }, i = (c) => {
      e.visible === !1 && (o[c] = !0);
    }, l = (c) => ({
      class: [n.css_root.value, `-color-${e.color}`]
    }), a = Lr().as("div", l).props(["visible"]).build();
    return {
      Icons: X,
      core: a,
      ...D(),
      transitionEnded: r,
      transitionStarted: i
    };
  }
}), Hd = ["onMouseenter", "onMouseleave"], zd = ["innerHTML"];
function Rd(e, t, n, s, o, r) {
  const i = v("h-icon-button"), l = v("hr-notification");
  return G((f(), I(l, F(e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      y("div", {
        class: d([e.css_ec("box")]),
        onMouseenter: a.pauseDuration,
        onMouseleave: a.resumeDuration
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
            onClick: a.close
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
    [K, e.visible]
  ]);
}
const Bd = /* @__PURE__ */ E(Ad, [["render", Rd]]), Zd = /* @__PURE__ */ M({
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
        const l = i.dataset.id;
        Rs.getWrapper(e.name).getNotification(l).transitionEnd();
      }
    };
  }
});
function Wd(e, t, n, s, o, r) {
  const i = v("hr-notification-wrapper");
  return f(), I(i, F(e.core.props, A(e.core.listeners), {
    style: { width: e.width }
  }), {
    default: $((l) => [
      C(Ds, {
        tag: "div",
        class: d(e.css_ec("transition-group")),
        name: "notification-slide-in",
        onAfterLeave: e.transitionEnded
      }, {
        default: $(() => [
          (f(!0), S(se, null, pe(l.notifications, (a) => (f(), I(Ms(a.component), F({
            key: a.id,
            class: e.css_ec("notification"),
            "data-id": a.id,
            visible: a.visible
          }, a.props, A(a.compiledListeners)), null, 16, ["class", "data-id", "visible"]))), 128))
        ]),
        _: 2
      }, 1032, ["class", "onAfterLeave"])
    ]),
    _: 1
  }, 16, ["style"]);
}
const qd = /* @__PURE__ */ E(Zd, [["render", Wd]]), cs = "elementic-notifications", jd = {
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
    ...Pr,
    ..._r,
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
    ae(() => e.modelValue, () => {
      Re(i);
    }), vt(i);
    const l = zr().as("div").props(["modelValue", "pageSize", "count", "delta"]).events(["update:modelValue"]).build();
    return {
      Icons: X,
      core: l,
      activeButton: n,
      indicatorStyle: r,
      ...D()
    };
  }
}), Kd = ["disabled", "onClick"], Jd = ["onClick"], Qd = ["onClick"], Xd = ["disabled", "onClick"];
function xd(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-paginator");
  return f(), I(l, F(e.core.props, {
    class: [e.css_root]
  }, A(e.core.listeners)), {
    default: $((a) => [
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": e.activeButton === null }]),
        style: R(e.indicatorStyle)
      }, null, 6),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: a.currentPage === 1 || a.pages === 0,
        onClick: (c) => a.onPaginationButtonClick(a.currentPage - 1)
      }, [
        C(i, {
          icon: e.Icons.arrowLeft,
          size: "16px"
        }, null, 8, ["icon"])
      ], 10, Kd),
      (f(!0), S(se, null, pe(a.buttons, (c, u) => (f(), S(se, null, [
        c === a.currentPage ? (f(), S("button", {
          key: c !== null ? c : `dots-${u}`,
          ref_for: !0,
          ref: (m) => e.activeButton = m,
          class: d([e.css_ec("button"), "-active"]),
          onClick: (m) => a.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, Jd)) : (f(), S("button", {
          key: c !== null ? c : `dots-${u}`,
          class: d([e.css_ec("button")]),
          onClick: (m) => a.onPaginationButtonClick(c)
        }, N(c !== null ? c : "..."), 11, Qd))
      ], 64))), 256)),
      y("button", {
        class: d([e.css_ec("button")]),
        disabled: a.currentPage === a.pages || a.pages === 0,
        onClick: (c) => a.onPaginationButtonClick(a.currentPage + 1)
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
const ef = /* @__PURE__ */ E(Gd, [["render", xd]]), us = "elementic-paginators", tf = {
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
        const l = i.placement.split("-")[0];
        n.value = ds[l], t.emit("computedPosition", i);
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
    arrow: $(() => [
      y("div", {
        class: d([e.css_ec("arrow")])
      }, null, 2)
    ]),
    default: $(() => [
      y("div", {
        class: d([e.css_ec("content")])
      }, [
        T(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 8, ["class", "reference", "transition", "visible", "placement", "middleware", "onClickOutside", "onComputedPosition"]);
}
const lf = /* @__PURE__ */ E(of, [["render", rf]]), fs = "elementic-popovers", af = {
  Popover: lf
}, cf = {
  FloatingInstall: rt
}, uf = {
  install: (e, t) => {
    p.isModuleInstalled(e, fs) || (p.installDependencies(e, cf, t), p.installComponents(e, af), p.markModuleAsInstalled(e, fs));
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
      const l = 100 / (e.value - e.minimum) * (e.maximum - e.minimum);
      return Math.round(l * 10) / 10;
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
    default: $(() => [
      y("div", {
        class: d([e.css_ec("back")])
      }, [
        y("div", {
          class: d([e.css_ec("filler")]),
          style: R({ width: e.width })
        }, [
          (e.showPercentage || e.showValue) && e.size === "large" ? (f(), S("span", {
            key: 0,
            class: d([e.css_ec("label")])
          }, N(e.label), 3)) : O("", !0)
        ], 6),
        e.showOverflowIndicator ? G((f(), S("div", {
          key: 0,
          class: d([e.css_ec("overflow-indicator")]),
          style: R({ left: `${e.overflowOffset}%` })
        }, null, 6)), [
          [K, e.overflowOffset < 100]
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
const mf = /* @__PURE__ */ E(df, [["render", ff]]), ms = "elementic-progress-bars", hf = {
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
    default: $((l) => [
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
const wf = /* @__PURE__ */ E(gf, [["render", bf]]), hs = "elementic-radio-buttons", $f = {
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
    color: {
      type: String,
      default: "primary"
    }
  },
  setup(e, t) {
    const n = k(), s = k(), o = k(), r = k(), i = k();
    ae([s, o], () => {
      n.value.registerBar("vertical", s.value, o.value);
    }), ae([r, i], () => {
      n.value.registerBar("horizontal", r.value, i.value);
    });
    const l = (u, m) => {
      n.value.scrollTo(u, m);
    }, a = (u) => ({
      class: { "-hover": u.anyHover, "-dragging": u.anyDragging, "-is-hidden": u.hidden }
    });
    return {
      core: si().as("div", a).props(["horizontal", "vertical", "autoHide", "autoHideDelay", "minimumSize", "classes"]).build(),
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
function Cf(e, t, n, s, o, r) {
  const i = v("hr-scroll-container");
  return f(), I(i, F({
    ref: "scrollContainer",
    class: [e.css_root, `-color-${e.color}`]
  }, e.core.props, A(e.core.listeners)), {
    verticalBar: $((l) => [
      G(y("div", {
        ref: "verticalTrack",
        class: d([e.css_ec("track"), "-vertical", { "-hover": l.trackHover, "-dragging": l.dragging }])
      }, [
        y("div", {
          ref: "verticalThumb",
          class: d([e.css_ec("thumb"), { "-hover": l.thumbHover, "-dragging": l.dragging }]),
          style: R({ height: `${l.size}px`, transform: `translate(0, ${l.offset}px)` })
        }, null, 6)
      ], 2), [
        [K, l.visible]
      ])
    ]),
    horizontal: $((l) => [
      G(y("div", {
        ref: "horizontalTrack",
        class: d([e.css_ec("track"), "-horizontal", { "-hover": l.trackHover, "-dragging": l.dragging }])
      }, [
        y("div", {
          ref: "horizontalThumb",
          class: d([e.css_ec("thumb"), { "-hover": l.thumbHover, "-dragging": l.dragging }]),
          style: R({ height: `${l.size}px`, transform: `translate(0, ${l.offset}px)` })
        }, null, 6)
      ], 2), [
        [K, l.visible]
      ])
    ]),
    default: $(() => [
      T(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Tf = /* @__PURE__ */ E(If, [["render", Cf]]), ps = "elementic-scroll-containers", Mf = {
  ScrollContainer: Tf
}, Of = {
  CoreScrollContainersInstall: oi
}, Do = {
  install: (e, t) => {
    p.isModuleInstalled(e, ps) || (p.installDependencies(e, Of, t), p.installComponents(e, Mf), p.markModuleAsInstalled(e, ps));
  }
}, Df = M({
  name: "h-select",
  props: {
    ...ri,
    ...ii,
    ...li,
    ...ai,
    ...ci,
    ...ui,
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
    }, l = (u) => {
      u && u.component && u.component.vnode && u.component.vnode.el && u.component.vnode.el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, a = (u) => ({
      class: { "-active": u.menuVisible, "-disabled": u.disabled }
    }), c = di().as("div", a).props(["modelValue", "disabled", "hideOnSelect", "allowClear", "multiple", "compare"]).events(["update:modelValue", "focusedItemChanged"]).build();
    return {
      Icons: X,
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
}), Ef = ["disabled", "title", "onClick", "onKeydown"], Lf = ["onClick"], Vf = ["onKeydown"];
function Nf(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-scroll-container"), a = v("h-floating"), c = v("hr-select");
  return f(), I(c, F({
    ref: "select",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners), { onFocusedItemChanged: e.onFocusedItemChanged }), {
    default: $((u) => [
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
        C(ye, { name: "fade-fast" }, {
          default: $(() => [
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
        C(ye, { name: "fade-fast" }, {
          default: $(() => [
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
            ], 10, Lf)) : O("", !0)
          ]),
          _: 2
        }, 1024)
      ], 42, Ef),
      C(a, {
        as: "div",
        class: d([e.css_ec("menu-container")]),
        reference: e.button,
        transition: "fade-fast",
        keep: "",
        visible: u.menuVisible,
        placement: "bottom",
        middleware: e.floatingMiddleware,
        onClickOutside: e.onClickOutside,
        onHide: (m) => u.clearFocusedItem(),
        onTransitionStateChanged: u.onMenuTransitioning
      }, {
        default: $(() => [
          y("div", {
            class: d([e.css_ec("menu")]),
            onKeydown: u.onKeyEvents,
            style: R({ maxHeight: e.menuMaxHeight })
          }, [
            C(l, null, {
              default: $(() => [
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
const Ff = /* @__PURE__ */ E(Df, [["render", Nf]]), Pf = M({
  name: "h-select-item",
  props: {
    ...fi,
    ...mi,
    ...hi,
    icon: {
      type: String,
      default: null
    }
  },
  setup(e, t) {
    const n = (o) => ({
      class: { "-selected": o.selected, "-focused": o.focused, "-disabled": o.disabled },
      onClick: o.onClick
    }), s = pi().as("div", n).props(["value", "label", "disabled"]).build();
    return {
      Icons: X,
      core: s,
      ...D()
    };
  }
});
function _f(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("hr-select-item");
  return f(), I(l, F({
    tabindex: "-1",
    class: [e.css_root]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
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
        C(ye, { name: "fade-fast" }, {
          default: $(() => [
            G(C(i, {
              icon: e.Icons.check,
              size: "16px"
            }, null, 8, ["icon"]), [
              [K, a.selected]
            ])
          ]),
          _: 2
        }, 1024)
      ], 2)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Af = /* @__PURE__ */ E(Pf, [["render", _f]]), Hf = M({
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
const Rf = /* @__PURE__ */ E(Hf, [["render", zf]]), Bf = M({
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
const Wf = /* @__PURE__ */ E(Bf, [["render", Zf]]), ys = "elementic-selects", qf = {
  Select: Ff,
  SelectItem: Af,
  SelectItemDivider: Rf,
  SelectItemHeader: Wf
}, jf = {
  CoreSelectsInstall: yi,
  FloatingInstall: rt,
  ScrollContainersInstall: Do
}, Uf = {
  install: (e, t) => {
    p.isModuleInstalled(e, ys) || (p.installDependencies(e, jf, t), p.installComponents(e, qf), p.markModuleAsInstalled(e, ys));
  }
}, Yf = M({
  name: "h-slider",
  props: {
    ...gi,
    ...vi,
    ...bi,
    ...wi,
    ...$i,
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
        let m = n.value.percentage;
        return `${Math.max(0, Math.min(100, m))}%`;
      } else
        return "0%";
    }), i = (m) => {
      e.disabled || (s.value = !0, m.preventDefault());
    }, l = (m) => {
      if (s.value) {
        const h = n.value.$el.getBoundingClientRect();
        let g = e.vertical ? 100 / h.height * (m.pageY - h.top) : 100 / h.width * (m.pageX - h.left);
        e.invert && (g = 100 - g);
        const w = n.value.getValueFromPercentage(g);
        t.emit("update:modelValue", w), m.preventDefault();
      }
    }, a = (m) => {
      s.value = !1;
    }, c = (m) => {
      if (!e.disabled) {
        let h = e.vertical ? 100 / n.value.$el.clientHeight * m.offsetY : 100 / n.value.$el.clientWidth * m.offsetX;
        e.invert && (h = 100 - h);
        const g = n.value.getValueFromPercentage(h);
        t.emit("update:modelValue", g), m.preventDefault();
      }
    };
    return {
      core: Si().as("div").props(["modelValue", "disabled", "minimum", "maximum", "stepSize"]).build(),
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
function Gf(e, t, n, s, o, r) {
  const i = v("hr-slider"), l = Vo("document-event");
  return G((f(), I(i, F({
    ref: "coreSlider",
    class: [e.css_root, e.vertical ? "-vertical" : "-horizontal", { "-invert": e.invert, "-dragging": e.dragging, "-disabled": e.disabled }]
  }, e.core.props, A(e.core.listeners)), {
    default: $(() => [
      y("div", {
        class: d([e.css_ec("bar")]),
        onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
      }, [
        y("div", {
          class: d([e.css_ec("back")])
        }, [
          (f(!0), S(se, null, pe(e.steps, (a) => (f(), S("div", {
            class: d([e.css_ec("step")])
          }, null, 2))), 256))
        ], 2),
        y("div", {
          class: d([e.css_ec("filler")]),
          style: R({ "--size": e.size })
        }, null, 6)
      ], 2),
      y("div", {
        class: d([e.css_ec("handle")]),
        style: R({ "--offset": e.size }),
        onMousedown: t[1] || (t[1] = (...a) => e.handleMouseDown && e.handleMouseDown(...a))
      }, null, 38)
    ]),
    _: 1
  }, 16, ["class"])), [
    [l, e.handleMouseUp, "mouseup"],
    [l, e.handleMouseMove, "mousemove"]
  ]);
}
const Kf = /* @__PURE__ */ E(Yf, [["render", Gf]]), gs = "elementic-sliders", Jf = {
  Slider: Kf
}, Qf = {
  CoreSlidersInstall: ki
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
    style: R({ width: e.size, height: e.size, "--border-thickness": e.thickness })
  }, null, 6);
}
const Eo = /* @__PURE__ */ E(xf, [["render", em]]), tm = M({
  name: "h-spinner-overlay",
  components: { HSpinner: Eo },
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
const sm = /* @__PURE__ */ E(tm, [["render", nm]]), vs = "elementic-spinners", om = {
  Spinner: Eo,
  SpinnerOverlay: sm
}, rm = {}, im = {
  install: (e, t) => {
    p.isModuleInstalled(e, vs) || (p.installDependencies(e, rm, t), p.installComponents(e, om), p.markModuleAsInstalled(e, vs));
  }
}, lm = M({
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
      Icons: X,
      onClick: n
    };
  }
});
function am(e, t, n, s, o, r) {
  const i = v("h-icon");
  return f(), S("div", {
    class: d([e.css_root, { "-current": e.step.isCurrent, "-done": e.step.isDone, "-last": e.step.isLast, "-locked": e.step.isLocked }]),
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l))
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
const cm = /* @__PURE__ */ E(lm, [["render", am]]), um = M({
  name: "h-steps-navigator",
  props: {
    ...Ii,
    ...Ci,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = V(() => e.steps.filter((h) => h.data.label).length > 0), r = k(0), i = k(0), l = V(() => e.vertical ? {
      top: `${i.value}px`,
      height: `${r.value}px`
    } : {
      left: `${i.value}px`,
      width: `${r.value}px`
    }), a = () => {
      if (s.value.length) {
        const h = s.value[0].$el;
        i.value = e.vertical ? h.offsetTop + h.offsetHeight : h.offsetLeft + h.offsetWidth;
        const g = s.value.find((w) => w.step.id === e.modelValue);
        g && (r.value = Math.max(0, (e.vertical ? g.$el.offsetTop : g.$el.offsetLeft) - i.value));
      }
    }, c = (h, g) => {
      g.id === e.modelValue && a();
    };
    Os(() => {
      s.value = [];
    }), vt(() => {
      a(), ae(() => n.value.visibleSteps, () => Re(a));
    }), ae(() => e.modelValue, a);
    const u = () => {
      n.value.nextStep();
    }, m = Ti().as("div").props(["modelValue", "steps"]).events(["update:modelValue"]).build();
    return {
      stepsNavigator: n,
      stepsRefs: s,
      setActiveStepRef: c,
      core: m,
      hasLabels: o,
      indicatorStyle: l,
      updateIndicator: a,
      nextStep: u,
      ...D()
    };
  }
});
function dm(e, t, n, s, o, r) {
  const i = v("h-step-item"), l = v("hr-steps-navigator");
  return f(), I(l, F({
    ref: "stepsNavigator",
    class: [e.css_root, { "-vertical": e.vertical, "-has-labels": e.hasLabels }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      (f(!0), S(se, null, pe(a.visibleSteps, (c, u) => (f(), S(se, {
        key: c.id
      }, [
        C(i, {
          ref_for: !0,
          ref: (m) => e.stepsRefs[u] = m,
          step: c,
          onClick: (m) => a.onStepClick(c)
        }, null, 8, ["step", "onClick"]),
        u !== a.visibleSteps.length - 1 ? (f(), S("div", {
          key: `${c.id}-line`,
          class: d([e.css_ec("step-line")])
        }, null, 2)) : O("", !0)
      ], 64))), 128)),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": a.currentStep === null }]),
        style: R(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 1
  }, 16, ["class"]);
}
const fm = /* @__PURE__ */ E(um, [["render", dm]]), bs = "elementic-steps", mm = {
  StepItem: cm,
  StepsNavigator: fm
}, hm = {
  CoreStepsInstall: Mi
}, pm = {
  install: (e, t) => {
    p.isModuleInstalled(e, bs) || (p.installDependencies(e, hm, t), p.installComponents(e, mm), p.markModuleAsInstalled(e, bs));
  }
}, ym = M({
  name: "h-switch",
  props: {
    ...Ls,
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
      core: Ps().as("label", o).props(["modelValue", "value", "disabled", "visible"]).events(["update:modelValue"]).build(),
      hasFocus: s,
      ...n
    };
  }
}), gm = ["checked", "disabled", "onChange"];
function vm(e, t, n, s, o, r) {
  const i = v("hr-checkbox");
  return G((f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: $((l) => [
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
          checked: l.state,
          type: "checkbox",
          disabled: l.disabled,
          onChange: l.onChange,
          onFocus: t[0] || (t[0] = (a) => e.hasFocus = !0),
          onBlur: t[1] || (t[1] = (a) => e.hasFocus = !1)
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
    [K, e.visible]
  ]);
}
const bm = /* @__PURE__ */ E(ym, [["render", vm]]), ws = "elementic-switches", wm = {
  Switch: bm
}, $m = {
  CoreCheckboxInstall: _s
}, Sm = {
  install: (e, t) => {
    p.isModuleInstalled(e, ws) || (p.installDependencies(e, $m, t), p.installComponents(e, wm), p.markModuleAsInstalled(e, ws));
  }
}, km = M({
  name: "h-tab-item",
  props: {
    ...Oi,
    ...Di,
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
    const i = (a) => ({
      class: { "-active": a.active, "-disabled": a.disabled },
      onClick: a.onClick,
      onKeydown: (c) => {
        c.key === "Enter" && a.onClick();
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
    default: $(() => [
      ne(N(e.label) + " ", 1)
    ]),
    _: 1
  }, 16, ["class"]);
}
const Cm = /* @__PURE__ */ E(km, [["render", Im]]), Tm = M({
  name: "h-tabs-navigator",
  props: {
    ...Li,
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, t) {
    const n = k(), s = k([]), o = (h) => {
      s.value.push(h);
    }, r = (h) => {
      s.value = Ni.remove(s.value, h);
    }, i = k(0), l = k(0), a = V(() => e.vertical ? {
      transform: `translate(0, ${l.value}px)`,
      height: `${i.value}px`
    } : {
      transform: `translate(${l.value}px, 0)`,
      width: `${i.value}px`
    }), c = () => {
      if (n.value && n.value.activeTab) {
        const h = s.value.find((g) => g.id === n.value.activeTab.id);
        h && (l.value = e.vertical ? h.ref.offsetTop : h.ref.offsetLeft, i.value = e.vertical ? h.ref.offsetHeight : h.ref.offsetWidth);
      }
    }, u = (h) => {
      n.value = h, ae(() => n.value ? n.value.activeTab : null, c);
    };
    vt(() => c()), ft("updateIndicator", c), ft("tabsNavigator", {
      addTabInstance: o,
      removeTabInstance: r
    });
    const m = Vi().as("div").props(["modelValue"]).events(["update:modelValue"]).build();
    return {
      setNavigator: u,
      core: m,
      indicatorStyle: a,
      updateIndicator: c,
      ...D()
    };
  }
});
function Mm(e, t, n, s, o, r) {
  const i = v("hr-tabs-navigator");
  return f(), I(i, F({
    ref: (l) => e.setNavigator(l),
    class: [e.css_root, { "-vertical": e.vertical }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((l) => [
      T(e.$slots, "default"),
      y("div", {
        class: d([e.css_ec("indicator"), { "-hidden": l.activeTab === null }]),
        style: R(e.indicatorStyle)
      }, null, 6)
    ]),
    _: 3
  }, 16, ["class"]);
}
const Om = /* @__PURE__ */ E(Tm, [["render", Mm]]), $s = "elementic-tabs", Dm = {
  TabItem: Cm,
  TabsNavigator: Om
}, Em = {
  CoreTabsInstall: Fi
}, Lm = {
  install: (e, t) => {
    p.isModuleInstalled(e, $s) || (p.installDependencies(e, Em, t), p.installComponents(e, Dm), p.markModuleAsInstalled(e, $s));
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
      type: _i,
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
      required: !0
    },
    row: {
      type: Object,
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
      core: Ai().as("tr", s).props(["columns", "row"]).events(["rowClick"]).build(),
      rowClasses: n,
      ...D()
    };
  }
});
function Pm(e, t, n, s, o, r) {
  const i = v("h-table-cell"), l = v("hr-table-row");
  return f(), I(l, F({
    class: [e.css_root, { "-selected": e.row.selected }, e.rowClasses]
  }, e.core.props, A(e.core.listeners)), {
    default: $((a) => [
      (f(!0), S(se, null, pe(e.columns, (c) => (f(), I(i, {
        key: c.property,
        row: e.row,
        column: c
      }, null, 8, ["row", "column"]))), 128))
    ]),
    _: 1
  }, 16, ["class"]);
}
const _m = /* @__PURE__ */ E(Fm, [["render", Pm]]), Am = M({
  name: "h-table",
  components: { HTableRow: _m, HTableColumnHeader: Vm },
  props: {
    ...Hi,
    ...zi,
    ...Ri,
    ...Bi,
    ...Zi,
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
      core: Wi().as("table").props(["data", "rowKey", "selectable", "sort", "selectedRows"]).events(["update:sort", "update:selectedRows"]).build(),
      ...D()
    };
  }
}), Hm = {
  key: 0,
  class: "-no-hover"
}, zm = ["colspan"], Rm = { key: 0 };
function Bm(e, t, n, s, o, r) {
  const i = v("h-table-column-header"), l = v("h-table-row"), a = v("h-checkbox"), c = v("h-table-column"), u = v("hr-table");
  return f(), I(u, F({
    class: [e.css_root, { "-striped": e.striped, "-hoverable": e.hover }]
  }, e.core.props, A(e.core.listeners)), {
    default: $((m) => [
      y("thead", null, [
        (f(!0), S(se, null, pe(m.orderedColumns, (h) => (f(), I(i, {
          key: h.property,
          column: h,
          sort: e.sort
        }, null, 8, ["column", "sort"]))), 128))
      ]),
      y("tbody", null, [
        (f(!0), S(se, null, pe(m.rows, (h) => (f(), I(l, {
          key: h.data[e.rowKey],
          row: h,
          columns: m.orderedColumns,
          classes: e.rowClasses
        }, null, 8, ["row", "columns", "classes"]))), 128)),
        e.$slots["no-items"] && m.rows.length === 0 ? (f(), S("tr", Hm, [
          y("td", {
            colspan: m.orderedColumns.length
          }, [
            T(e.$slots, "no-items")
          ], 8, zm)
        ])) : O("", !0)
      ]),
      e.$slots.footer ? (f(), S("tfoot", Rm, [
        T(e.$slots, "footer", {
          rows: m.rows
        })
      ])) : O("", !0),
      e.selectable && m.anySelectable ? (f(), I(c, {
        key: 1,
        width: "minimum",
        property: "__sortable",
        sortable: !1,
        order: -1
      }, {
        header: $(() => [
          C(a, {
            "model-value": m.allRowsSelected,
            indeterminate: !m.allRowsSelected && m.anyRowsSelected,
            "onUpdate:modelValue": m.toggleAllSelection
          }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])
        ]),
        default: $(({ rowId: h, isSelected: g, rowSelectable: w }) => [
          C(ye, { name: "fade-fast" }, {
            default: $(() => [
              C(a, {
                visible: w,
                "model-value": g,
                "onUpdate:modelValue": (Z) => m.setRowSelectionState(h, Z)
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
const Zm = /* @__PURE__ */ E(Am, [["render", Bm]]), Wm = M({
  name: "h-table-column",
  props: {
    ...qi,
    ...ji,
    ...Ui,
    ...Yi,
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
      core: Gi(n, ["property", "formatter", "sortable", "order"])
    };
  }
});
function qm(e, t, n, s, o, r) {
  const i = v("hr-table-column");
  return f(), I(i, F(e.core.props, A(e.core.listeners)), {
    default: $(() => [
      T(e.$slots, "default"),
      T(e.$slots, "header")
    ]),
    _: 3
  }, 16);
}
const jm = /* @__PURE__ */ E(Wm, [["render", qm]]), Ss = "elementic-tables", Um = {
  Table: Zm,
  TableColumn: jm
}, Ym = {
  CoreTablesInstall: Ki,
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
    ...Ji,
    ...Qi,
    ...Xi,
    ...xi,
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
    ]), r = (l) => {
      const a = l.placement.split("-")[0];
      s.value = ks[a], t.emit("computedPosition", l);
    };
    return {
      core: el(n).props(["modelValue", "trigger"]).events(["update:modelValue"]).build(),
      reference: n,
      floatingMiddleware: o,
      onComputedPosition: r,
      transition: s,
      ...D()
    };
  }
}), Jm = ["innerHTML"];
function Qm(e, t, n, s, o, r) {
  const i = v("h-icon"), l = v("h-floating"), a = v("hr-tooltip");
  return f(), I(a, F(e.core.props, A(e.core.listeners)), {
    default: $((c) => [
      y("div", {
        ref: "reference",
        style: R({ display: e.display })
      }, [
        T(e.$slots, "default")
      ], 4),
      C(l, {
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
          C(i, {
            icon: "tooltip-arrow",
            class: d([e.css_ec("arrow")])
          }, null, 8, ["class"])
        ]),
        default: $(() => [
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
const Xm = /* @__PURE__ */ E(Km, [["render", Qm]]), xm = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  data: '<polygon points="0,16 16,16 8,8"/>'
}, Is = "elementic-tooltips", eh = {
  Tooltip: Xm
}, th = {
  CoreTooltipsInstall: tl,
  FloatingInstall: rt
}, nh = {
  install: (e, t) => {
    p.isModuleInstalled(e, Is) || (p.installDependencies(e, th, t), p.installComponents(e, eh), we.register("tooltip-arrow", xm), p.markModuleAsInstalled(e, Is));
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
    default: $(() => [
      ne(N(e.text), 1)
    ]),
    _: 1
  }, 8, ["title", "color"]);
}
const ch = /* @__PURE__ */ E(sh, [["render", oh]]), rh = {
  AlertsInstall: kl,
  ButtonsInstall: Rl,
  CheckboxesInstall: Ws,
  CollapsesInstall: fa,
  DatePickersInstall: _u,
  DialogsInstall: Wu,
  DrawersInstall: Ju,
  DropdownsInstall: $d,
  FloatingInstall: rt,
  FragmentsInstall: Ed,
  IconsInstall: Wt,
  InputsInstall: Oo,
  ListsInstall: _d,
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
  TabsInstall: Lm,
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
  ah as IconRegistry,
  hh as NotificationManager,
  ch as SimpleNotification,
  ph as coreFloatingArrowReference,
  yh as createCoreStepItem,
  uh as default,
  rh as modules
};
