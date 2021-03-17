import { OptionsGeneric } from '@popperjs/core';
declare const _default: import("vue").DefineComponent<any, {
    classes: import("vue").ComputedRef<any[]>;
    modifiers: import("vue").ComputedRef<any[]>;
    options: import("vue").ComputedRef<OptionsGeneric<any>>;
    popper: import("vue").Ref<any>;
    popperArrow: import("vue").Ref<HTMLElement>;
    core: any;
    updatePopper: () => void;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "show" | "hide" | "created" | "clickOutside" | "popperSizeChanged" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
} | ({
    [x: string]: any;
} & {
    [x: number]: any;
})>, {} | {
    [x: string]: any;
}>;
export default _default;
