import {
    defineComponent,
    SetupContext,
    computed,
    reactive,
    getCurrentInstance,
    ComputedRef, h,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreSliderModelValueProp = {
    modelValue: {
        type: null,
    },
};
export const coreSliderDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreSliderMinimumProp = {
    minimum: {
        type: Number,
        default: 0,
    },
};
export const coreSliderMaximumProp = {
    maximum: {
        type: Number,
        default: 100,
    },
};
export const coreSliderStepSizeProp = {
    stepSize: {
        type: Number,
        default: 1,
    },
};

export type CoreSliderSlotProps = {
    modelValue: ComputedRef;
    percentage: ComputedRef<number>;
    steps: ComputedRef<number>;
}

export function coreSliderSetup() {
    return setupBuilder<CoreSliderSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-slider',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreSliderModelValueProp,
        ...coreSliderDisabledProp,
        ...coreSliderMinimumProp,
        ...coreSliderMaximumProp,
        ...coreSliderStepSizeProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const percentage = computed(() => {
            const p = ((props.modelValue - props.minimum) * 100) / (props.maximum - props.minimum);
            return Math.round(p);
        });
        const steps = computed(() => {
            return Math.round((props.maximum - props.minimum) / props.stepSize);
        });

        const getValueFromPercentage = (percentage) => {
            let value = ((props.maximum - props.minimum) / 100 * percentage) + props.minimum;
            if (value < props.minimum) {
                value = props.minimum;
            } else if (value > props.maximum) {
                value = props.maximum;
            }
            return Math.round(value / props.stepSize) * props.stepSize;
        };

        const slotProps = reactive<CoreSliderSlotProps>({
            modelValue: computed(() => props.modelValue),
            percentage,
            steps,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            percentage,
            steps,
            getValueFromPercentage,
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
