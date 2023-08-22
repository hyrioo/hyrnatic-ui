import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "something", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    color: "primary" | "danger";
}>;
export default _sfc_main;
