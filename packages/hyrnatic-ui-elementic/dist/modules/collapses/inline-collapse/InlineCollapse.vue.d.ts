import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: PropType<"left" | "right">;
        default: string;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: PropType<"left" | "right">;
        default: string;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    modelValue: boolean;
    expandText: string;
    collapseText: string;
    textAlign: "left" | "right";
    animate: boolean;
}>;
export default _sfc_main;
