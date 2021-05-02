import { ComputedRef, PropType, Ref } from 'vue';
export interface CoreStepsNavigatorStepItem {
    id: string;
    data: any;
    visible: boolean;
    validator(): boolean;
}
export interface CoreStepsNavigatorDetailedStepItem extends CoreStepsNavigatorStepItem {
    stepIndex: number;
    isCurrent: boolean;
    isDone: boolean;
    isLast: boolean;
    isLocked: boolean;
}
export declare function createStep(id: any, data: any, validator?: any, visible?: boolean): CoreStepsNavigatorStepItem;
export declare const coreStepsNavigatorModelValueProp: {
    modelValue: {
        type: StringConstructor;
        default: any;
    };
};
export declare const coreStepsNavigatorStepsProp: {
    steps: {
        type: PropType<CoreStepsNavigatorStepItem[]>;
        default: any;
    };
};
export declare type CoreStepsNavigatorReturn = {
    currentStep: CoreStepsNavigatorDetailedStepItem;
    visibleSteps: ComputedRef<CoreStepsNavigatorDetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
};
export declare type CoreStepsNavigatorSlotProps = {
    steps: Ref<CoreStepsNavigatorDetailedStepItem[]>;
    currentStep: ComputedRef<CoreStepsNavigatorDetailedStepItem>;
    currentIndex: ComputedRef<number>;
    visibleSteps: ComputedRef<CoreStepsNavigatorDetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
    onStepClick(step: CoreStepsNavigatorDetailedStepItem): void;
};
export declare function coreStepsNavigatorSetup(): {
    as(tag: string, func?: (slotProps: CoreStepsNavigatorSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    steps: {
        type: PropType<CoreStepsNavigatorStepItem[]>;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    nextStep: () => void;
    previousStep: () => void;
    visibleSteps: ComputedRef<CoreStepsNavigatorDetailedStepItem[]>;
    slotProps: {
        steps: {
            stepIndex: number;
            isCurrent: boolean;
            isDone: boolean;
            isLast: boolean;
            isLocked: boolean;
            id: string;
            data: any;
            visible: boolean;
            validator: () => boolean;
        }[];
        currentStep: {
            stepIndex: number;
            isCurrent: boolean;
            isDone: boolean;
            isLast: boolean;
            isLocked: boolean;
            id: string;
            data: any;
            visible: boolean;
            validator: () => boolean;
        };
        currentIndex: number;
        visibleSteps: {
            stepIndex: number;
            isCurrent: boolean;
            isDone: boolean;
            isLast: boolean;
            isLocked: boolean;
            id: string;
            data: any;
            visible: boolean;
            validator: () => boolean;
        }[];
        nextStep: () => void;
        previousStep: () => void;
        onStepClick: (step: CoreStepsNavigatorDetailedStepItem) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string;
    asProps: (slotProps: any) => any;
    as: string;
    steps: CoreStepsNavigatorStepItem[];
} & {}>, {
    modelValue: string;
    asProps: (slotProps: any) => any;
    as: string;
    steps: CoreStepsNavigatorStepItem[];
}>;
export default _default;
