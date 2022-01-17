<template>
    <page title="Table">
        <!--<h-input v-model="data[0].name" />-->
        <h-button label="Add" style="margin-right: 16px" @click="add" />
        <h-button label="Replace" style="margin-right: 16px" @click="replace" />
        <h-checkbox v-model="selectableBoolean" />
        <br /><br />
        <h-table v-model:selected-rows="selected" v-model:sort="sort" :data="sortedData" row-key="id" :selectable="selectable">
            <h-table-column property="id" label="#" sortable :formatter="formatter" width="minimum" />
            <h-table-column property="name" label="Name" sortable />
            <h-table-column property="email" label="E-mail" sortable />
            <h-table-column property="address" label="Address" />
            <template #no-items>
                Test
            </template>
        </h-table>
    </page>
</template>

<script lang="ts">
import {
    computed, defineComponent, ref, SetupContext,
} from 'vue';
import { CoreTableSortDefinition } from '@hyrioo/hyrnatic-ui-elementic';
import { ArrayHelper as Arr } from '@hyrioo/hyrnatic-ui-core';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        let id = 1;
        const data = ref([
            {
                id: id++,
                name: 'Grant Marshall',
                email: 'marshall@yahoo.com',
                address: '225 Bills Place',
            },
            {
                id: id++,
                name: 'Pena Valdez',
                email: 'Valdez@yahoo.com',
                address: '266 Tiffany Place',
            },
            {
                id: id++,
                name: 'Jessica Miles',
                email: 'Miles@mail.com',
                address: '240 Hillel Place',
            },
            {
                id: id++,
                name: 'Kerri Barber',
                email: 'Barber@gmail.com',
                address: '500 Gold Street',
            },
            {
                id: id++,
                name: 'Natasha Gamble',
                email: 'gamble@outlook.com',
                address: '463 Harbor Court',
            },
            {
                id: id++,
                name: 'White Castaneda',
                email: 'castaneda@mail.com',
                address: '219 Ivan Court',
            },
        ]);
        data.value = [];
        const sort = ref<CoreTableSortDefinition>({
            key: null,
            direction: 'asc',
        });
        const sortedData = computed(() => {
            if (sort.value.key === null) {
                return data.value;
            }
            return data.value.sort((a, b) => {
                const aV = a[sort.value.key];
                const bV = b[sort.value.key];
                return Arr.simpleSort(aV, bV, sort.value.direction === 'desc');
            });
        });
        const formatter = (cellValue) => `#${cellValue}`;
        const selected = ref();
        const selectableBoolean = ref(false);
        const selectable = (rowData) => computed(() => rowData.name.length > 13 && selectableBoolean.value);
        const add = () => {
            data.value.push(
                {
                    id: id++,
                    name: 'Grant Marshall',
                    email: 'marshall@yahoo.com',
                    address: '225 Bills Place',
                },
            );
        };
        const replace = () => {
            data.value[2] = {
                id: id++,
                name: 'Grant Marshall',
                email: 'marshall@yahoo.com',
                address: '225 Bills Place',
            };
        };

        return {
            data,
            sort,
            sortedData,
            formatter,
            add,
            replace,
            selected,
            selectable,
            selectableBoolean,
        };
    },
});
</script>
