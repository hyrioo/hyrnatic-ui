declare const _sfc_main: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    styling: {
        type: StringConstructor;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeText: {
        type: StringConstructor;
        default: null;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    onClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    styling: {
        type: StringConstructor;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeText: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    styling: string;
    showCloseButton: boolean;
    closeText: string;
}>;
export default _sfc_main;
