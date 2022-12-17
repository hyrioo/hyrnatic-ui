declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    label: string;
    icon: string;
} & {}>, {
    disabled: boolean;
    label: string;
    icon: string;
}>;
export default _default;
