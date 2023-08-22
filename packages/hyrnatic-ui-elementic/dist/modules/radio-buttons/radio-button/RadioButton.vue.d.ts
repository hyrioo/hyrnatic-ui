declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: null;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: null;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    label: string;
    disabled: boolean;
    bordered: boolean;
    value: any;
}>;
export default _sfc_main;
