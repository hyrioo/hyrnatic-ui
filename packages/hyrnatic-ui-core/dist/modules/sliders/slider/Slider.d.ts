import { ComputedRef } from 'vue';
export declare const coreSliderModelValueProp: {
    modelValue: {
        type: null;
    };
};
export declare const coreSliderDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSliderMinimumProp: {
    minimum: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreSliderMaximumProp: {
    maximum: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreSliderStepSizeProp: {
    stepSize: {
        type: NumberConstructor;
        default: number;
    };
};
export type CoreSliderSlotProps = {
    modelValue: ComputedRef;
    percentage: ComputedRef<number>;
    steps: ComputedRef<number>;
};
export declare function coreSliderSetup(): {
    as(tag: string, func?: (slotProps: CoreSliderSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    stepSize: {
        type: NumberConstructor;
        default: number;
    };
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    percentage: ComputedRef<number>;
    steps: ComputedRef<number>;
    getValueFromPercentage: (percentage: number) => number;
    slotProps: {
        modelValue: any;
        percentage: number;
        steps: number;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    stepSize: {
        type: NumberConstructor;
        default: number;
    };
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    maximum: number;
    minimum: number;
    stepSize: number;
}>;
export default _default;
