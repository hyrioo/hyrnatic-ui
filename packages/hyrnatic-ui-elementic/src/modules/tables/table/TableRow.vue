<template>
    <tr :class="['h-table-header', {'-selected': row.selected}]">
        <h-table-cell v-for="column in columns" :key="column.property" :row="row" :column="column" />
    </tr>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext, PropType,
} from 'vue';
import componentCss from '@/utils/component-css';
import { coreTableRowSetup, CoreTableRowSlotProps, CoreTableRow } from '@hyrioo/hyrnatic-ui-core';
import HTableCell from './TableCell';

export default defineComponent({
    name: 'h-table-row',
    components: { HTableCell },
    props: {
        columns: {
            type: Array,
            required: true,
        },
        row: {
            type: Object as PropType<CoreTableRow>,
            required: true,
        },
    },
    emits: ['rowClick'],
    setup(props, ctx: SetupContext) {
        const asProps = (slotProps: CoreTableRowSlotProps) => ({
            onClick: slotProps.onClick,
        });

        const core = coreTableRowSetup().as('tr', asProps).props(['columns', 'row']).events(['rowClick'])
            .build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
