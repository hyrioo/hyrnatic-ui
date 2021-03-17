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
} from '@/utils/component';
import Arr from '@/utils/array';

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

export function createStep(id, data, validator = null, visible = true) : StepItem {
    return reactive<StepItem>({
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
        type: Array as PropType<StepItem[]>,
        default: null,
    },
};

export type StepsNavigatorReturn = {
    currentStep: DetailedStepItem;
    visibleSteps: ComputedRef<DetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
};

export type SlotProps = {
    steps: Ref<DetailedStepItem[]>;
    currentStep: ComputedRef<DetailedStepItem>;
    currentIndex: ComputedRef<number>;
    visibleSteps: ComputedRef<DetailedStepItem[]>;
    nextStep(): void;
    previousStep(): void;
    onStepClick(step: DetailedStepItem): void;
}

export function setup() {
    return setupBuilder<SlotProps>(getCurrentInstance());
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
    setup(props, ctx: SetupContext) {
        const currentIndex = computed<number>(() => props.steps.findIndex((s) => s.id === props.modelValue));
        const visibleSteps = computed(() => props.steps.filter((s) => s.visible));
        const steps = computed(() => {
            const array: DetailedStepItem[] = [];
            props.steps.forEach((step: StepItem) => {
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
        const currentStep = computed<DetailedStepItem>(() => steps.value[currentIndex.value]);
        const visibleDetailedSteps = computed(() => steps.value.filter((s) => s.visible));

        const onStepClick = (step: DetailedStepItem) => {
            ctx.emit('update:modelValue', step.id);
        };

        const nextStep = () => {
            if (typeof currentStep.value.validator === 'function' && currentStep.value.validator() === false) {
                // this.active_step.alert.$emit('validation-failed');
            } else {
                console.log(steps.value, currentIndex.value);
                const newStep = Arr.next(steps.value, currentIndex.value, (step) => step.visible);
                console.log(newStep);
                ctx.emit('update:modelValue', newStep.id);
            }
        };
        const previousStep = () => {
            const newStep = Arr.prev(steps.value, currentIndex.value, (step) => step.visible);
            ctx.emit('update:modelValue', newStep.id);
        };

        const slotProps = reactive<SlotProps>({
            steps,
            currentStep,
            currentIndex,
            visibleSteps: visibleDetailedSteps,
            nextStep,
            previousStep,
            onStepClick,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

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
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
