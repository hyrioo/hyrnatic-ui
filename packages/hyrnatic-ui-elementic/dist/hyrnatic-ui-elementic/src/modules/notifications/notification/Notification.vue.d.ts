import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: any;
    };
    color: {
        type: PropType<"primary" | "danger">;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    showCloseButton: boolean;
    visible: boolean;
    color: "primary" | "danger";
} & {}>, {
    title: string;
    showCloseButton: boolean;
    visible: boolean;
    color: "primary" | "danger";
}>;
export default _default;
