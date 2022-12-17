declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: any;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string;
    disabled: boolean;
    bordered: boolean;
    value: any;
    modelValue: any;
} & {}>, {
    label: string;
    disabled: boolean;
    bordered: boolean;
    value: any;
    modelValue: any;
}>;
export default _default;
