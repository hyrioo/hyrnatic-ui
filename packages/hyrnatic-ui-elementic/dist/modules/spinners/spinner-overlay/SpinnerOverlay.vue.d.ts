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
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    color: "light" | "dark";
}, {}>;
export default _default;
