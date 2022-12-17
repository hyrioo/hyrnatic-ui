declare const _default: import("vue").DefineComponent<{
    transition: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: StringConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    actualHeight: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    transition: string;
} & {
    active?: string;
}>, {
    transition: string;
}>;
export default _default;
