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
        type: (ArrayConstructor | StringConstructor)[];
    };
    fills: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    spin: {
        type: BooleanConstructor;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    onClick: (e: any) => void;
    content: import("vue").ComputedRef<any>;
    viewBox: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon: string;
    width: string;
    height: string;
    size: string;
    fills: string | unknown[];
    spin: boolean;
} & {
    strokes?: string | unknown[];
}>, {
    width: string;
    height: string;
    size: string;
    fills: string | unknown[];
    spin: boolean;
}>;
export default _default;
