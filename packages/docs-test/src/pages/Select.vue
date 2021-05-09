<template>
    <page title="Select">
        <h-select v-model="value" placeholder="Select option..." multiple allow-clear :hide-on-select="false">
            <h-select-item-header v-if="showHeader" :label="header" />
            <h-select-item value="1" label="Loooong option 1" />
            <h-select-item value="2" label="Option 2" />
            <h-select-item-divider />
            <h-select-item value="3" label="Option 3" />
            <h-select-item value="4" label="Option 4" />
        </h-select>
        <br /><br />
        <h-select v-model="value" placeholder="Select option..." style="width: 250px;">
            <h-select-item-header v-if="showHeader" :label="header" />
            <h-select-item value="1" label="Loooong option 1" />
            <h-select-item value="2" label="Option 2" />
            <h-select-item-divider />
            <h-select-item value="3" label="Option 3" disabled />
            <h-select-item value="4" label="Option 4" />
        </h-select>
        <br /><br />
        <h-select v-model="value" placeholder="Select option..." style="width: 175px;">
            <h-select-item-header v-if="showHeader" label="Header" />
            <h-select-item value="1" label="Looooooooooooooooooooooooooong option 1" />
            <h-select-item value="2" icon="plus" label="Option 2" />
            <h-select-item-divider />
            <h-select-item value="3" label="Option 3" />
            <h-select-item value="4" label="Option 4" />
        </h-select>
        <br /><br />
        <h-select v-model="value" placeholder="Select option...">
            <h-select-item v-for="n in 100" :key="n" :value="n" :label="`Option ${n}`" />
        </h-select>
        <br /><br />
        <h-input v-model="header" />
        <br />
        <h-checkbox v-model="showHeader" label="Show header" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref([]);
        const header = ref('Header');
        const showHeader = ref(true);

        return {
            value,
            header,
            showHeader,
        };
    },
});
</script>
