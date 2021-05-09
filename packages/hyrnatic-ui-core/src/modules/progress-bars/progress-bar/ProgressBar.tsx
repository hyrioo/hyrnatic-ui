import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, reactive, SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreProgressBarValueProp = {
    value: {
        type: Number,
        required: true,
    },
};
export const coreProgressBarMinimumProp = {
    minimum: {
        type: Number,
        default: 0,
    },
};
export const coreProgressBarMaximumProp = {
    maximum: {
        type: Number,
        default: 100,
    },
};

export type CoreProgressBarSlotProps = {
    percentage: ComputedRef<number>;
}

export function coreProgressBarSetup() {
    return setupBuilder<CoreProgressBarSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-progress-bar',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreProgressBarValueProp,
        ...coreProgressBarMinimumProp,
        ...coreProgressBarMaximumProp,
    },
    setup(props, ctx: SetupContext) {
        const percentage = computed(() => {
            const p = (100 / (props.maximum - props.minimum)) * props.value;
            return Math.round(p);
        });

        const slotProps = reactive<CoreProgressBarSlotProps>({
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
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
