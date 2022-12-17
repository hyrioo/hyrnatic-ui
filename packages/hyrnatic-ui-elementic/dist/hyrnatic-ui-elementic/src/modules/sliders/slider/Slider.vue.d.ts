declare const _default: import("vue").DefineComponent<{
    showSteps: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    invert: {
        type: BooleanConstructor;
        default: boolean;
    };
    stepSize: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: any;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
    coreSlider: import("vue").Ref<any>;
    size: import("vue").ComputedRef<string>;
    steps: import("vue").ComputedRef<any>;
    handleMouseDown: (e: any) => void;
    handleMouseMove: (e: any) => void;
    handleMouseUp: (e: any) => void;
    handleClick: (e: any) => void;
    dragging: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: any;
    disabled: boolean;
    minimum: number;
    vertical: boolean;
    maximum: number;
    showSteps: boolean;
    invert: boolean;
    stepSize: number;
} & {}>, {
    modelValue: any;
    disabled: boolean;
    minimum: number;
    vertical: boolean;
    maximum: number;
    showSteps: boolean;
    invert: boolean;
    stepSize: number;
}>;
export default _default;