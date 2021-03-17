declare const _default: import("vue").DefineComponent<any, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    coreInput: import("vue").Ref<any>;
    input: import("vue").Ref<HTMLInputElement>;
    hasFocus: import("vue").Ref<boolean>;
    onFocus: () => void;
    onBlur: () => void;
    focus: () => void;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: string]: any;
} | ({
    [x: string]: any;
} & {
    [x: number]: any;
})>, {} | {
    [x: string]: any;
}>;
export default _default;
