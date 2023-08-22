import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
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
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
    iconSize: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    loading: boolean;
    styling: "subtle" | "simple" | "block";
    type: "button" | "submit" | "reset";
    rounded: boolean;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "none";
    size: "small" | "normal" | "large";
    visible: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
