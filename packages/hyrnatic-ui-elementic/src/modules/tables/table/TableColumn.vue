<template>
    <hr-table-column v-bind="core.props" v-on="core.listeners">
        <slot />
        <slot name="header" />
    </hr-table-column>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, reactive, SetupContext,
} from 'vue';
import {
    coreTableColumnFormatterProp,
    coreTableColumnOrderProp,
    coreTableColumnPropertyProp,
    coreTableColumnSortableProp,
    coreTableColumnSetup,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-table-column',
    props: {
        ...coreTableColumnPropertyProp,
        ...coreTableColumnFormatterProp,
        ...coreTableColumnSortableProp,
        ...coreTableColumnOrderProp,
        label: {
            type: String,
            default: null,
        },
        width: {
            type: String,
            default: 'auto',
            validator: (e: string) => ['auto', 'minimum'].indexOf(e) !== -1 || !Number.isNaN(parseInt(e, 10)),
        },
    },
    setup(props, ctx: SetupContext) {
        const data = reactive({
            label: computed(() => props.label),
            width: computed(() => props.width),
        });
        const core = coreTableColumnSetup(data, ['property', 'formatter', 'sortable', 'order']);
        return {
            core,
        };
    },
});
</script>
