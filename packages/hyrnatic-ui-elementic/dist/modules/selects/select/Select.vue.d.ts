declare const _default: import("vue").DefineComponent<any, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    select: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLButtonElement>;
    popper: import("vue").Ref<any>;
    selectHasWidth: import("vue").ComputedRef<any>;
    modifiers: any[];
    popperWidth: import("vue").Ref<{}>;
    popperSizeChanged: (size: any) => void;
    onClickOutside: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
} | ({
    [x: string]: any;
} & {
    [x: number]: any;
})>, {} | {
    [x: string]: any;
}>;
export default _default;
