import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: null;
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
        type: PropType<"none" | "subtle" | "simple" | "block">;
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
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: null;
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
        type: PropType<"none" | "subtle" | "simple" | "block">;
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
}>>, {
    loading: boolean;
    icon: string;
    styling: "none" | "subtle" | "simple" | "block";
    type: "button" | "submit" | "reset";
    label: string | number;
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    size: "small" | "normal" | "large";
    visible: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
