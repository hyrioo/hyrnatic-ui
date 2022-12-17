declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        default: any;
    };
    height: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: StringConstructor;
        default: any;
    };
    strokes: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    fills: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    spin: {
        type: BooleanConstructor;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    content: import("vue").ComputedRef<any>;
    viewBox: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon: string;
    size: string;
    width: string;
    height: string;
    fills: string | unknown[];
    spin: boolean;
} & {
    strokes?: string | unknown[];
}>, {
    size: string;
    width: string;
    height: string;
    fills: string | unknown[];
    spin: boolean;
}>;
export default _default;
