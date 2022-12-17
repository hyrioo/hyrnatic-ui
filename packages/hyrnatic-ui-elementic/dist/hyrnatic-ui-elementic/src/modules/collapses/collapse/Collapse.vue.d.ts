declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        required: boolean;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    accordion: boolean;
} & {
    modelValue?: string | number | unknown[];
}>, {
    accordion: boolean;
}>;
export default _default;
