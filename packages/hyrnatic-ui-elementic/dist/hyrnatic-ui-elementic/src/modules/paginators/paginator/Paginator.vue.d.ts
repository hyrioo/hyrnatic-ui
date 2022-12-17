declare const _default: import("vue").DefineComponent<{
    delta: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: NumberConstructor;
        required: boolean;
    };
    pageSize: {
        type: NumberConstructor;
        required: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        required: boolean;
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
    core: any;
    activeButton: import("vue").Ref<HTMLElement>;
    indicatorStyle: import("vue").ComputedRef<{
        transform: string;
        width: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    delta: number;
} & {
    modelValue?: number;
    count?: number;
    pageSize?: number;
}>, {
    delta: number;
}>;
export default _default;
