import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    iconOptions: {
        type: ObjectConstructor;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<"primary" | "negative" | "success" | "warning" | "danger" | "none">;
        default: string;
    };
    styling: {
        type: PropType<"subtle" | "simple" | "block">;
        default: string;
    };
    size: {
        type: PropType<"small" | "normal" | "large">;
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
    iconSize: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "reset" | "submit" | "button";
    size: "small" | "normal" | "large";
    disabled: boolean;
    icon: string;
    styling: "subtle" | "simple" | "block";
    visible: boolean;
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    loading: boolean;
} & {
    iconOptions?: Record<string, any>;
}>, {
    type: "reset" | "submit" | "button";
    size: "small" | "normal" | "large";
    disabled: boolean;
    styling: "subtle" | "simple" | "block";
    visible: boolean;
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    loading: boolean;
}>;
export default _default;
