import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, reactive, ref, SetupContext, watch,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';

export const coreInlineCollapseModelValueProp = {
    modelValue: {
        type: Boolean,
        default: false,
    },
};

export type CoreCollapseInlineSlotProps = {
    expanded: ComputedRef<boolean>;
    onClick: () => void;
}
export function coreCollapseInlineSetup() {
    return setupBuilder<CoreCollapseInlineSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-inline-collapse',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreInlineCollapseModelValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const expanded = ref(props.modelValue);
        watch(() => props.modelValue, (newValue) => {
            expanded.value = newValue;
        });

        const onClick = () => {
            expanded.value = !expanded.value;
            ctx.emit('update:modelValue', !props.modelValue);
        };

        const slotProps = reactive<CoreCollapseInlineSlotProps>({
            expanded: computed(() => expanded.value),
            onClick,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
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
