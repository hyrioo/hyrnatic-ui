declare const _default: import("vue").DefineComponent<{
    leftText: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: any;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        required: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: any;
            default: boolean;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: any;
            default: boolean;
        };
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    disabled: boolean;
    value: any;
    leftText: string;
    rightText: string;
} & {
    modelValue?: string | boolean | unknown[];
}>, {
    visible: boolean;
    disabled: boolean;
    value: any;
    leftText: string;
    rightText: string;
}>;
export default _default;
