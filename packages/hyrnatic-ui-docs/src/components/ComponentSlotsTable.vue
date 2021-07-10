<template>
    <h-table :data="componentSlots" row-key="key">
        <!--<h-table-column property="origin" label="Origin" width="minimum">
            <template #default="{ row }">
                {{ row.origin }}
            </template>
        </h-table-column>-->
        <h-table-column property="name" label="Name" />
        <h-table-column property="description" label="Description" />
        <h-table-column property="props" label="Props" :formatter="valuesFormatter" />
    </h-table>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, Ref, SetupContext,
} from 'vue';

export default defineComponent({
    name: 'component-slots-table',
    props: {
        component: {
            required: true,
        }
    },
    setup(props, ctx: SetupContext) {
        const componentSlots = computed(() => {
            const p = [];
            props.component.docs.slots.forEach((slot) => {
                p.push(slot);
            });
            return p;
        });
        const valuesFormatter = (cellValue) => {
            if(cellValue === null) {
                return '-';
            } else if (Array.isArray(cellValue)) {
                return cellValue.join(', ');
            } else {
                return cellValue;
            }
        };

        return {
            componentSlots,
            valuesFormatter,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>