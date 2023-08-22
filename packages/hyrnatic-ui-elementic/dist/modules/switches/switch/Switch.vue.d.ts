declare const _sfc_main: import("vue").DefineComponent<{
    leftText: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: null;
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
            values: null;
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
            values: null;
            default: boolean;
        };
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    leftText: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: null;
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
            values: null;
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
            values: null;
            default: boolean;
        };
    };
}>>, {
    visible: boolean;
    disabled: boolean;
    value: any;
    leftText: string;
    rightText: string;
}>;
export default _sfc_main;
