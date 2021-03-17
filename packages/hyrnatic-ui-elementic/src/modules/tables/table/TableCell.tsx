import {
    defineComponent, SetupContext, computed,
} from 'vue';
import { CoreTableRow, CoreTableColumn } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-table-row',
    props: {
        column: {
            type: CoreTableColumn,
            required: true,
        },
        row: {
            type: CoreTableRow,
            required: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const classes = computed(() => [
            {
                '-minimum-width': props.column.data.width === 'minimum',
            },
        ]);
        const templateRender = () => (
            <td class={[classes.value]}>
                {props.column.template({
                    row: props.row.data, rowId: props.row.id, isSelected: props.row.selected, rowSelectable: props.row.selectable,
                })}
            </td>
        );
        const defaultRender = () => (
            <td class={[classes.value]}>
                {props.row.getValue(props.column.property, props.column.formatter)}
            </td>
        );

        return () => (props.column.template ? templateRender() : defaultRender());
    },
});
