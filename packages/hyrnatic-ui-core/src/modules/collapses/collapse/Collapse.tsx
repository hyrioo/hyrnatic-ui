import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, provide, reactive, Ref, SetupContext,
} from 'vue';
import Arr from '../../../utils/array';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreCollapseAccordionProp = {
    accordion: {
        type: Boolean,
        default: false,
    },
};
export const coreCollapseModelValueProp = {
    modelValue: {
        type: [Array, String, Number],
        required: true,
    },
};

export type CoreCollapseSlotProps = {
    accordion: ComputedRef<boolean>;
    expandedItems: ComputedRef<any[]>;
}
export type CollapseProvide = {
    onItemClick(id: string): void;
    expandedItems: Ref<any[]>;
}

export function coreCollapseSetup() {
    return setupBuilder<CoreCollapseSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-collapse',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreCollapseAccordionProp,
        ...coreCollapseModelValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const expandedItems = computed(() => ([] as any[]).concat(props.modelValue));

        const onItemClick = (id: string) => {
            if (props.accordion) {
                ctx.emit('update:modelValue', props.modelValue === id ? null : id);
            } else if (Array.isArray(props.modelValue)) {
                let copy = props.modelValue.slice(0);

                if (props.modelValue.indexOf(id) === -1) {
                    copy.push(id);
                } else {
                    copy = Arr.remove(copy, id);
                }
                ctx.emit('update:modelValue', copy);
            } else {
                ctx.emit('update:modelValue', props.modelValue === id ? null : id);
            }
        };

        provide('collapse', {
            onItemClick,
            expandedItems,
        });

        const slotProps = reactive<CoreCollapseSlotProps>({
            accordion: computed(() => props.accordion),
            expandedItems,
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
