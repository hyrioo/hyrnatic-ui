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
        type: PropType<"button" | "submit" | "reset">;
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
    icon: string;
    styling: "subtle" | "simple" | "block";
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    size: "small" | "normal" | "large";
    type: "button" | "submit" | "reset";
    visible: boolean;
    loading: boolean;
    disabled: boolean;
} & {
    iconOptions?: Record<string, any>;
}>, {
    styling: "subtle" | "simple" | "block";
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    size: "small" | "normal" | "large";
    type: "button" | "submit" | "reset";
    visible: boolean;
    loading: boolean;
    disabled: boolean;
}>;
export default _default;
