import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    zIndex: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: any;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    transitionEnded: (key: any) => void;
    transitionStarted: (key: any) => void;
    getScale: (index: any, count: any) => string;
    getOpacity: (index: any, count: any) => number;
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
    core: {
        props: {
            [x: string]: any;
        };
        listeners: {
            [key: string]: any;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width: string;
    title: string;
    showCloseButton: boolean;
    visible: boolean;
    color: "primary" | "danger";
} & {
    zIndex?: number;
}>, {
    width: string;
    title: string;
    showCloseButton: boolean;
    visible: boolean;
    color: "primary" | "danger";
}>;
export default _default;
