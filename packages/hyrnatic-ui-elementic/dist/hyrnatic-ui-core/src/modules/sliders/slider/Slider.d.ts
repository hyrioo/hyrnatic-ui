import { ComputedRef } from 'vue';
export declare const coreSliderModelValueProp: {
    modelValue: {
        type: any;
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
export declare type CoreSliderSlotProps = {
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
        type: any;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    percentage: ComputedRef<number>;
    steps: ComputedRef<number>;
    getValueFromPercentage: (percentage: any) => number;
    slotProps: {
        modelValue: any;
        percentage: number;
        steps: number;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    modelValue: any;
    as: string;
    maximum: number;
    minimum: number;
    stepSize: number;
    asProps: (slotProps: any) => any;
} & {}>, {
    disabled: boolean;
    modelValue: any;
    as: string;
    maximum: number;
    minimum: number;
    stepSize: number;
    asProps: (slotProps: any) => any;
}>;
export default _default;
