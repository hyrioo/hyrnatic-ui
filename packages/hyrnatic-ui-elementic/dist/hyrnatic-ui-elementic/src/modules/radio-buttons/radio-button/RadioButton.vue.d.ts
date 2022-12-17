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
    modelValue: any;
    disabled: boolean;
    value: any;
    label: string;
    bordered: boolean;
} & {}>, {
    modelValue: any;
    disabled: boolean;
    value: any;
    label: string;
    bordered: boolean;
}>;
export default _default;
