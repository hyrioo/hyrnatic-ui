import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    zIndex: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    transitionEnded: (key: string) => void;
    transitionStarted: (key: string) => void;
    activeTransitions: {
        [key: string]: boolean;
    };
    getScale: (index: number, count: number) => string | null;
    getOpacity: (index: number, count: number) => number | null;
    scrollContainer: import("vue").Ref<any>;
    bodyScrollbarWidth: number | undefined;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: {
        props: {
            [x: string]: any;
        };
        listeners: {
            [key: string]: any;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
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
    width: string;
    lockScroll: boolean;
}>;
export default _sfc_main;
