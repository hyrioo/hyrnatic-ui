import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: PropType<"right" | "left">;
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
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: boolean;
    animate: boolean;
    expandText: string;
    collapseText: string;
    textAlign: "right" | "left";
} & {}>, {
    modelValue: boolean;
    animate: boolean;
    expandText: string;
    collapseText: string;
    textAlign: "right" | "left";
}>;
export default _default;
