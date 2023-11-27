import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
    };
    thickness: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<"primary" | "negative" | "success" | "warning" | "danger" | "current">;
        default: string;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
    };
    thickness: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<"primary" | "negative" | "success" | "warning" | "danger" | "current">;
        default: string;
    };
}>>, {
    size: string;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "current";
    thickness: string;
}, {}>;
export default _default;
