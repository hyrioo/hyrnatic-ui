import {
    computed, ComputedRef, defineComponent,
    getCurrentInstance, h, PropType,
    reactive, Ref,
    SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import Arr from '../../../utils/array';

export interface CoreStepsNavigatorStepItem {
    id: string;
    data: any;
    visible: boolean;
    validator: (() => boolean) | null;
}
export interface CoreStepsNavigatorDetailedStepItem extends CoreStepsNavigatorStepItem {
    stepIndex: number;
    isCurrent: boolean;
    isDone: boolean;
    isLast: boolean;
    isLocked: boolean;
}

export function createCoreStepItem(id: string, data: any, validator: (() => boolean) | null = null, visible = true) : CoreStepsNavigatorStepItem {
    return reactive<CoreStepsNavigatorStepItem>({
        id,
        visible,
        validator,
        data,
    });
}
export const coreStepsNavigatorModelValueProp = {
    modelValue: {
        type: String,
        default: null,
    },
};
export const coreStepsNavigatorStepsProp = {
    steps: {
        type: Array as PropType<CoreStepsNavigatorStepItem[]>,
        default: null,
    },
};

export type CoreStepsNavigatorReturn = {
    currentStep: CoreStepsNavigatorDetailedStepItem;
    visibleSteps: ComputedRef<CoreStepsNavigatorDetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
};

export type CoreStepsNavigatorSlotProps = {
    steps: Ref<CoreStepsNavigatorDetailedStepItem[]>;
    currentStep: ComputedRef<CoreStepsNavigatorDetailedStepItem>;
    currentIndex: ComputedRef<number>;
    visibleSteps: ComputedRef<CoreStepsNavigatorDetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
    onStepClick(step: CoreStepsNavigatorDetailedStepItem): void;
}

export function coreStepsNavigatorSetup() {
    return setupBuilder<CoreStepsNavigatorSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-steps-navigator',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreStepsNavigatorModelValueProp,
        ...coreStepsNavigatorStepsProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const currentIndex = computed<number>(() => props.steps.findIndex((s) => s.id === props.modelValue));
        const visibleSteps = computed(() => props.steps.filter((s) => s.visible));
        const steps = computed(() => {
            const array: CoreStepsNavigatorDetailedStepItem[] = [];
            props.steps.forEach((step: CoreStepsNavigatorStepItem) => {
                const stepIndex = props.steps.findIndex((s) => s.id === step.id);
                array.push({
                    id: step.id,
                    visible: step.visible,
                    validator: step.validator,
                    data: step.data,
                    stepIndex,
                    isCurrent: step.id === props.modelValue,
                    isDone: currentIndex.value !== -1 && stepIndex < currentIndex.value,
                    isLast: visibleSteps.value.findIndex((s) => s.id === step.id) === visibleSteps.value.length - 1,
                    isLocked: false,
                });
            });
            return array;
        });
        const currentStep = computed<CoreStepsNavigatorDetailedStepItem>(() => steps.value[currentIndex.value]);
        const visibleDetailedSteps = computed(() => steps.value.filter((s) => s.visible));

        const onStepClick = (step: CoreStepsNavigatorDetailedStepItem) => {
            ctx.emit('update:modelValue', step.id);
        };

        const nextStep = () => {
            if (typeof currentStep.value.validator === 'function' && !currentStep.value.validator()) {
                // this.active_step.spinner.$emit('validation-failed');
            } else {
                const newStep = Arr.next(steps.value, currentIndex.value, (step) => step.visible);
                ctx.emit('update:modelValue', newStep.id);
            }
        };
        const previousStep = () => {
            const newStep = Arr.prev(steps.value, currentIndex.value, (step) => step.visible);
            ctx.emit('update:modelValue', newStep.id);
        };

        const slotProps = reactive<CoreStepsNavigatorSlotProps>({
            steps,
            currentStep,
            currentIndex,
            visibleSteps: visibleDetailedSteps,
            nextStep,
            previousStep,
            onStepClick,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            nextStep,
            previousStep,
            visibleSteps: visibleDetailedSteps,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
