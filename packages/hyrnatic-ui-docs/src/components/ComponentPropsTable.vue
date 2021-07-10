<template>
    <h-table :data="componentProps" row-key="key">
        <h-table-column property="origin" label="Origin" width="minimum">
            <template #default="{ row }">
                {{ row.origin }}
            </template>
        </h-table-column>
        <h-table-column property="key" label="Property" />
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
    setup(props, ctx: SetupContext) {
        const componentProps = computed(() => {
            const p = [];
            Object.keys(props.component.props).forEach((key) => {
                if (props.component.props[key].docs) {
                    props.component.props[key].docs.key = key;
                    p.push(props.component.props[key].docs);
                }
            });
            return p;
        });
        const typeFormatter = (cellValue) => {
            if(cellValue === null) {
                return 'Any';
            } else if (Array.isArray(cellValue)) {
                return cellValue.join(', ');
            } else {
                return cellValue;
            }
        };
        const valuesFormatter = (cellValue) => {
            if(cellValue === null) {
                return '-';
            } else if (Array.isArray(cellValue)) {
                return cellValue.join(', ');
            } else {
                return cellValue;
            }
        };
        const defaultFormatter = (cellValue) => {
            if(cellValue === null) {
                return '-';
            } else {
                return cellValue.toString();
            }
        };
        console.log(componentProps);

        return {
            componentProps,
            typeFormatter,
            valuesFormatter,
            defaultFormatter,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>