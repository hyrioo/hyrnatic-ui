import { CoreStepsNavigatorStepItem, CoreStepsNavigatorReturn } from '@hyrioo/hyrnatic-ui-core';
declare const _sfc_main: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: import("vue").PropType<CoreStepsNavigatorStepItem[]>;
        default: null;
    };
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    stepsNavigator: import("vue").Ref<CoreStepsNavigatorReturn | undefined>;
    stepsRefs: import("vue").Ref<never[]>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: {
        type: import("vue").PropType<CoreStepsNavigatorStepItem[]>;
        default: null;
    };
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    modelValue: string;
    vertical: boolean;
    steps: CoreStepsNavigatorStepItem[];
}>;
export default _sfc_main;
