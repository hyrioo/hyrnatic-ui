import {
    defineComponent, getCurrentInstance, h, PropType, reactive, SetupContext,
} from 'vue';
import Row from './Row';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';

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
    onClick: () => any;
}

export function coreTableRowSetup() {
    return setupBuilder<CoreTableRowSlotProps>(getCurrentInstance()!);
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
    setup(props, ctx) {
        const onClick = () => {
            ctx.emit('rowClick', props.row);
        };

        const slotProps = reactive<CoreTableRowSlotProps>({
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
