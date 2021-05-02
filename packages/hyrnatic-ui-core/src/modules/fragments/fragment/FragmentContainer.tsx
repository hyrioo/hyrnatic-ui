import {
    computed,
    ComputedRef,
    defineComponent,
    getCurrentInstance, h, provide,
    reactive,
    SetupContext,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '@/utils/component';

export const coreFragmentContainerActiveProp = {
    active: {
        type: String,
        required: true,
    },
};

export type CoreFragmentContainerSlotProps = {
    active: ComputedRef<string>;
}

export function coreFragmentContainerSetup() {
    return setupBuilder<CoreFragmentContainerSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-fragment-container',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreFragmentContainerActiveProp,
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const slotProps = reactive<CoreFragmentContainerSlotProps>({
            active: computed(() => props.active),
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        provide('coreFragmentContainer', {
            active: computed(() => props.active),
        });

        return {
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
