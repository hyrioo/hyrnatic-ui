import { ComputedRef, PropType, Ref } from 'vue';
export interface StepItem {
    id: string;
    data: any;
    visible: boolean;
    validator(): boolean;
}
export interface DetailedStepItem extends StepItem {
    stepIndex: number;
    isCurrent: boolean;
    isDone: boolean;
    isLast: boolean;
    isLocked: boolean;
}
export declare function createStep(id: any, data: any, validator?: any, visible?: boolean): StepItem;
export declare const coreStepsNavigatorModelValueProp: {
    modelValue: {
        type: StringConstructor;
        default: any;
    };
};
export declare const coreStepsNavigatorStepsProp: {
    steps: {
        type: PropType<StepItem[]>;
        default: any;
    };
};
export declare type StepsNavigatorReturn = {
    currentStep: DetailedStepItem;
    visibleSteps: ComputedRef<DetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
};
export declare type SlotProps = {
    steps: Ref<DetailedStepItem[]>;
    currentStep: ComputedRef<DetailedStepItem>;
    currentIndex: ComputedRef<number>;
    visibleSteps: ComputedRef<DetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
    onStepClick(step: DetailedStepItem): void;
};
export declare function setup(): {
    as(tag: string, func?: (slotProps: SlotProps) => any): any;
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
        type: PropType<StepItem[]>;
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
    visibleSteps: ComputedRef<DetailedStepItem[]>;
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
        onStepClick: (step: DetailedStepItem) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: string;
    steps: StepItem[];
} & {}>, {
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: string;
    steps: StepItem[];
}>;
export default _default;
