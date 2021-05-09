<template>
    <page title="Radio Button">
        <h-radio-button v-model="value" value="1" label="Text" bordered />
        <h-radio-button v-model="value" value="2" label="Text" bordered />
        <br /><br />
        <h-radio-button v-model="value" value="3" label="Text" />
        <br /><br />
        <h-radio-button v-model="value" value="3" label="Text" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref(false);
        const value2 = ref(false);

        return {
            value,
            value2,
        };
    },
});
</script>
