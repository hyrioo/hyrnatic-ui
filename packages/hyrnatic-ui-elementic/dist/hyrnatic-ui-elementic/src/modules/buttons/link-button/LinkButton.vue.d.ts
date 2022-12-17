import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    color: {
        type: PropType<"primary" | "negative" | "success" | "warning" | "danger" | "none">;
        default: string;
    };
    size: {
        type: PropType<"small" | "normal">;
        default: string;
    };
    type: {
        type: PropType<"reset" | "submit" | "button">;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "reset" | "submit" | "button";
    size: "small" | "normal";
    disabled: boolean;
    label: string | number;
    visible: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    loading: boolean;
} & {}>, {
    type: "reset" | "submit" | "button";
    size: "small" | "normal";
    disabled: boolean;
    label: string | number;
    visible: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    loading: boolean;
}>;
export default _default;
