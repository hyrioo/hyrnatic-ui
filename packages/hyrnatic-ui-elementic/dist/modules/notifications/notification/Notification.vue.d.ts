import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    transitionEnded: (key: any) => void;
    transitionStarted: (key: any) => void;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    title: string;
    showCloseButton: boolean;
    color: "primary" | "danger";
    visible: boolean;
}>;
export default _sfc_main;
