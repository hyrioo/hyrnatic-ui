<template>
    <hr-table v-slot="props" :class="[css_root, {'-striped': striped, '-hoverable': hover}]" v-bind="core.props" v-on="core.listeners">
        <thead>
            <h-table-column-header v-for="column in props.orderedColumns" :key="column.property" :column="column" :sort="sort" />
        </thead>
        <tbody>
            <h-table-row v-for="row in props.rows" :key="row.data[rowKey]" :row="row" :columns="props.orderedColumns" :classes="rowClasses" />
        </tbody>
        <tfoot v-if="$slots.footer">
            <slot name="footer" :rows="props.rows" />
        </tfoot>

        <h-table-column v-if="selectable && props.anySelectable" width="minimum" property="__sortable" :sortable="false" :order="-1">
            <template #header>
                <h-checkbox :model-value="props.allRowsSelected" :indeterminate="!props.allRowsSelected && props.anyRowsSelected" @update:model-value="props.toggleAllSelection" />
            </template>
            <template #default="{rowId, isSelected, rowSelectable}">
                <transition name="fade-fast">
                    <h-checkbox :visible="rowSelectable" :model-value="isSelected" @update:model-value="props.setRowSelectionState(rowId, $event)" />
                </transition>
            </template>
        </h-table-column>
        <slot />
    </hr-table>
</template>

<script lang="ts">
import {
    defineComponent,
    SetupContext, watch,
} from 'vue';
import componentCss from '@/utils/component-css';
import {
    coreTableDataProp,
    coreTableRowKeyProp,
    coreTableSelectableProp,
    coreTableSelectedRowsProp,
    coreTableSortProp,
    coreTableSetup,
} from '@hyrioo/hyrnatic-ui-core';
import HTableColumnHeader from '@/modules/tables/table/TableColumnHeader';
import HTableRow from '@/modules/tables/table/TableRow.vue';

export default defineComponent({
    name: 'h-table',
    components: { HTableRow, HTableColumnHeader },
    props: {
        ...coreTableDataProp,
        ...coreTableRowKeyProp,
        ...coreTableSelectableProp,
        ...coreTableSelectedRowsProp,
        ...coreTableSortProp,
        rowClasses: {
            type: [String, Function],
            default: null,
        },
        striped: {
            type: Boolean,
            default: false,
        },
        hover: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:sort', 'update:selectedRows'],
    setup(props, ctx: SetupContext) {
        const core = coreTableSetup().as('table').props(['data', 'rowKey', 'selectable', 'sort', 'selectedRows']).events(['update:sort', 'update:selectedRows'])
            .build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
