<template>
    <hr-table-row v-slot="props" :class="[css_root, {'-selected': row.selected}, rowClasses]" v-bind="core.props" v-on="core.listeners">
        <h-table-cell v-for="column in columns" :key="column.property" :row="row" :column="column" />
    </hr-table-row>
</template>

<script lang="ts">
import {
    defineComponent, SetupContext, PropType, computed, watch,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreTableRowSetup, CoreTableRowSlotProps, CoreTableRow, CoreTableColumn } from '@hyrioo/hyrnatic-ui-core';
import HTableCell from './TableCell';

export default defineComponent({
    name: 'h-table-row',
    components: { HTableCell },
    props: {
        columns: {
            type: Array, // as PropType<CoreTableColumn>,
            required: true,
        },
        row: {
            type: Object, // as PropType<CoreTableRow>,
            required: true,
        },
        classes: {
            type: [String, Function],
            default: null,
        },
    },
    emits: ['rowClick'],
    setup(props, ctx: SetupContext) {
        const rowClasses = computed(() => {
            if (typeof props.classes === 'function') {
                return props.classes(props.row.data);
            } else {
                return props.classes;
            }
        })
        const asProps = (slotProps: CoreTableRowSlotProps) => ({
            onClick: slotProps.onClick,
        });
        const core = coreTableRowSetup().as('tr', asProps).props(['columns', 'row']).events(['rowClick'])
            .build();

        return {
            core,
            rowClasses,
            ...componentCss(),
        };
    },
});
</script>
