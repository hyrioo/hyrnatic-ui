<template>
    <h-table :data="component.props" row-key="key">
        <h-table-column property="origin" label="Origin" width="minimum">
            <template #default="{ row }">
                {{ row.origin }}
            </template>
        </h-table-column>
        <h-table-column property="property" label="Property" />
        <h-table-column property="description" label="Description" />
        <h-table-column property="type" label="Type" :formatter="typeFormatter" />
        <h-table-column property="values" label="Accepted values" :formatter="valuesFormatter" />
        <h-table-column property="default" label="Default" :formatter="defaultFormatter" />
    </h-table>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, Ref, SetupContext,
} from 'vue';

export default defineComponent({
    name: 'component-props-table',
    props: {
        component: {
            required: true,
        }
    },
    setup(props, ctx) {
        const typeFormatter = (cellValue) => {
            if(cellValue === null || cellValue === undefined) {
                return 'Any';
            } else if (Array.isArray(cellValue)) {
                return cellValue.join(', ');
            } else {
                return cellValue.toString();
            }
        };
        const valuesFormatter = (cellValue) => {
            if(cellValue === null || cellValue === undefined) {
                return '-';
            } else if (Array.isArray(cellValue)) {
                return cellValue.join(', ');
            } else {
                return cellValue.toString();
            }
        };
        const defaultFormatter = (cellValue) => {
            if(cellValue === null || cellValue === undefined) {
                return '-';
            } else {
                return cellValue.toString();
            }
        };

        return {
            typeFormatter,
            valuesFormatter,
            defaultFormatter,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>