declare const _sfc_main: import("vue").DefineComponent<{
    delta: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: NumberConstructor;
        required: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        required: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
    activeButton: import("vue").Ref<HTMLElement>;
    indicatorStyle: import("vue").ComputedRef<{
        transform: string;
        width: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    delta: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: NumberConstructor;
        required: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        required: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        required: boolean;
    };
}>>, {
    delta: number;
}>;
export default _sfc_main;
