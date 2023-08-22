declare const _sfc_main: import("vue").DefineComponent<{
    transition: {
        type: StringConstructor;
        default: null;
    };
    active: {
        type: StringConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    actualHeight: import("vue").ComputedRef<string | null>;
    heights: {
        old: null;
        new: null;
        target: null;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    transition: {
        type: StringConstructor;
        default: null;
    };
    active: {
        type: StringConstructor;
        required: boolean;
    };
}>>, {
    transition: string;
}>;
export default _sfc_main;
