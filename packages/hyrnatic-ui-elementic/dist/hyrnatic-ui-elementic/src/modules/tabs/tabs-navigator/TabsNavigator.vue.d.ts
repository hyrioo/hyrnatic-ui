declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    setNavigator: (el: any) => void;
    core: any;
    indicatorStyle: import("vue").ComputedRef<{
        transform: string;
        height: string;
        width?: undefined;
    } | {
        transform: string;
        width: string;
        height?: undefined;
    }>;
    updateIndicator: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string;
    vertical: boolean;
} & {}>, {
    modelValue: string;
    vertical: boolean;
}>;
export default _default;
