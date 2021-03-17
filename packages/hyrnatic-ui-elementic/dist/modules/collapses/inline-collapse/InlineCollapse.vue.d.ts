declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandLabel: {
        type: StringConstructor;
        default: string;
    };
    collapseLabel: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    animate: boolean;
    modelValue: boolean;
    expandLabel: string;
    collapseLabel: string;
    textAlign: string;
} & {}>, {
    animate: boolean;
    modelValue: boolean;
    expandLabel: string;
    collapseLabel: string;
    textAlign: string;
}>;
export default _default;
