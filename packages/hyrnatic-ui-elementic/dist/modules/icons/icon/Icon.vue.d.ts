declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        default: null;
    };
    height: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: null;
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
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    content: import("vue").ComputedRef<any>;
    viewBox: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        default: null;
    };
    height: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: null;
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
}>>, {
    size: string;
    fills: string | unknown[];
    width: string;
    height: string;
    spin: boolean;
}, {}>;
export default _default;
