import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: PropType<"primary" | "light">;
        default: string;
    };
    wrapperClasses: {
        type: null;
        default: null;
    };
    containerClasses: {
        type: null;
        default: null;
    };
    minimumSize: {
        type: NumberConstructor;
        default: number;
    };
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    scrollTo: (x: any, y: any) => void;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    scrollContainer: import("vue").Ref<any>;
    verticalTrack: import("vue").Ref<any>;
    verticalThumb: import("vue").Ref<any>;
    horizontalTrack: import("vue").Ref<any>;
    horizontalThumb: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<"primary" | "light">;
        default: string;
    };
    wrapperClasses: {
        type: null;
        default: null;
    };
    containerClasses: {
        type: null;
        default: null;
    };
    minimumSize: {
        type: NumberConstructor;
        default: number;
    };
    autoHideDelay: {
        type: NumberConstructor;
        default: number;
    };
    autoHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: "primary" | "light";
    wrapperClasses: any;
    containerClasses: any;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    vertical: boolean;
    horizontal: boolean;
}>;
export default _sfc_main;
