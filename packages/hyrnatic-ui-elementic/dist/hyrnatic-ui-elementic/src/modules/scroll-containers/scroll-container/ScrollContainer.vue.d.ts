import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<"primary" | "light">;
        default: string;
    };
    classes: {
        type: any;
        default: any;
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
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    scrollContainer: import("vue").Ref<any>;
    verticalTrack: import("vue").Ref<any>;
    verticalThumb: import("vue").Ref<any>;
    horizontalTrack: import("vue").Ref<any>;
    horizontalThumb: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    classes: any;
    color: "primary" | "light";
    vertical: boolean;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    horizontal: boolean;
} & {}>, {
    classes: any;
    color: "primary" | "light";
    vertical: boolean;
    minimumSize: number;
    autoHideDelay: number;
    autoHide: boolean;
    horizontal: boolean;
}>;
export default _default;
