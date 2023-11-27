import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    zIndex: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    slideTransition: import("vue").ComputedRef<"large2x-slide-to-left-medium" | "large2x-slide-to-right-medium">;
    transitionEnded: (key: string) => void;
    transitionStarted: (key: string) => void;
    getScale: (index: number, count: number) => string | null;
    getOpacity: (index: number, count: number) => number | null;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: {
        props: {
            [x: string]: any;
        };
        listeners: {
            [key: string]: any;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<"primary" | "danger">;
        default: string;
    };
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    title: string;
    color: "primary" | "danger";
    visible: boolean;
    placement: "left" | "right";
}, {}>;
export default _default;
