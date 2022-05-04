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

        const slotProps = reactive<CoreSliderSlotProps>({
            modelValue: computed(() => props.modelValue),
            percentage,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            percentage,
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
