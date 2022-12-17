import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "something", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: "primary" | "danger";
    text: string;
} & {
    title?: string;
}>, {
    color: "primary" | "danger";
}>;
export default _default;
