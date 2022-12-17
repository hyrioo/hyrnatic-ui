import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
    };
    color: {
        type: PropType<"light" | "dark">;
        default: string;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: "light" | "dark";
    loading: boolean;
} & {
    label?: string;
}>, {
    color: "light" | "dark";
}>;
export default _default;
