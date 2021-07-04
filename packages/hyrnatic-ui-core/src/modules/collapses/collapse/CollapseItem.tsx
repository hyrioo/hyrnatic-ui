import {
    computed, ComputedRef, defineComponent, getCurrentInstance, h, inject, reactive, SetupContext,
} from 'vue';
import { CollapseProvide } from './Collapse';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export const coreCollapseItemIdProp = {
    id: {
        type: String,
        required: true,
    },
};

export type CoreCollapseItemSlotProps = {
    expanded: ComputedRef<boolean>;
    onClick: (e) => void;
}
export function coreCollapseItemSetup() {
    return setupBuilder<CoreCollapseItemSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-collapse-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreCollapseItemIdProp,
    },
    setup(props, ctx: SetupContext) {
        const collapse = inject<CollapseProvide>('collapse');
        const expanded = computed(() => collapse.expandedItems.value.indexOf(props.id) !== -1);

        const onClick = () => {
            collapse.onItemClick(props.id);
        };

        const slotProps = reactive<CoreCollapseItemSlotProps>({
            expanded,
            onClick,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

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
