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
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: string;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "current";
    thickness: string;
} & {}>, {
    size: string;
    color: "primary" | "negative" | "success" | "warning" | "danger" | "current";
    thickness: string;
}>;
export default _default;
