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
        type: PropType<"right" | "left">;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    slideTransition: import("vue").ComputedRef<"large2x-slide-to-left-medium" | "large2x-slide-to-right-medium">;
    transitionEnded: (key: any) => void;
    transitionStarted: (key: any) => void;
    getScale: (index: any, count: any) => string;
    getOpacity: (index: any, count: any) => number;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: {
        props: {
            [x: string]: any;
        };
        listeners: {
            [key: string]: any;
        };
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placement: "right" | "left";
    title: string;
    visible: boolean;
    color: "primary" | "danger";
} & {
    zIndex?: number;
}>, {
    placement: "right" | "left";
    title: string;
    visible: boolean;
    color: "primary" | "danger";
}>;
export default _default;
