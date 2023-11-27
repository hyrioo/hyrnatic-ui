declare const _default: import("vue").DefineComponent<{
    header: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
}>>, {}, {}>;
export default _default;
