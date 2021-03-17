import {
    defineComponent, getCurrentInstance, h, PropType, reactive, SetupContext,
} from 'vue';
import Row from '@/modules/tables/table/Row';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '@/utils/component';

export const coreTableRowColumnsProp = {
    columns: {
        type: Array,
        required: true,
    },
};
export const coreTableRowRowProp = {
    row: {
        type: Object as PropType<Row>,
        default: false,
    },
};

export type CoreTableRowSlotProps = {
    onClick: (e) => any;
}

export function coreTableRowSetup() {
    return setupBuilder<CoreTableRowSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-table-row',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreTableRowColumnsProp,
        ...coreTableRowRowProp,
    },
    emits: ['update:modelValue', 'rowClick'],
    setup(props, ctx: SetupContext) {
        const onClick = () => {
            ctx.emit('rowClick', props.row);
        };

        const slotProps = reactive<CoreTableRowSlotProps>({
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
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
