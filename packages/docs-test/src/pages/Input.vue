<template>
    <page title="Input">
        <h-input v-model="value" />
        <br /><br /><br /><br />
        <h-input v-model.capitalize="value2" prefix-icon="key" prefix="Test" suffix="Test" />
        <br /><br />
        <h-input v-model="value2" :readonly="value3" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref('');
        const value2 = ref('');
        const value3 = ref(true);

        return {
            value,
            value2,
            value3,
        };
    },
});
</script>
