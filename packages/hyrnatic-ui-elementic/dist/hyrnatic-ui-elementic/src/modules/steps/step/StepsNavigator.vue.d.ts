import { CoreStepsNavigatorStepItem, CoreStepsNavigatorReturn } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: import("vue").PropType<CoreStepsNavigatorStepItem[]>;
        default: any;
    };
    modelValue: {
        type: StringConstructor;
        default: any;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    stepsNavigator: import("vue").Ref<CoreStepsNavigatorReturn>;
    stepsRefs: import("vue").Ref<any[]>;
    setActiveStepRef: (component: any, step: CoreStepsNavigatorStepItem) => void;
    core: any;
    hasLabels: import("vue").ComputedRef<boolean>;
    indicatorStyle: import("vue").ComputedRef<{
        top: string;
        height: string;
        left?: undefined;
        width?: undefined;
    } | {
        left: string;
        width: string;
        top?: undefined;
        height?: undefined;
    }>;
    updateIndicator: () => void;
    nextStep: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string;
    vertical: boolean;
    steps: CoreStepsNavigatorStepItem[];
} & {}>, {
    modelValue: string;
    vertical: boolean;
    steps: CoreStepsNavigatorStepItem[];
}>;
export default _default;
