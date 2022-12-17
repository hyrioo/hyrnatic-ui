declare const _default: import("vue").DefineComponent<{
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
        default: any;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    Icons: {
        arrowLeft: string;
        arrowRight: string;
        calendarMonth: string;
        check: string;
        chevronDoubleLeft: string;
        chevronDoubleRight: string;
        chevronDown: string;
        chevronLeft: string;
        chevronRight: string;
        chevronUp: string;
        close: string;
        dotsHorizontal: string;
        loading: string;
        minus: string;
        plus: string;
    };
    onClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    styling: string;
    showCloseButton: boolean;
    closeText: string;
} & {
    description?: string;
    icon?: string;
}>, {
    styling: string;
    showCloseButton: boolean;
    closeText: string;
}>;
export default _default;
