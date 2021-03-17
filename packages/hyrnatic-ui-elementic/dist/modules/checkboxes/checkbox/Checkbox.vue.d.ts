declare const _default: import("vue").DefineComponent<any, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    asProps: (slotProps: any) => {
        class: (string | {
            '-focus': boolean;
            '-bordered': any;
            '-checked': any;
            '-indeterminate': any;
            '-disabled': any;
        })[];
    };
    core: any;
    hasFocus: import("vue").Ref<boolean>;
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
