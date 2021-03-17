<template>
    <page title="Switch">
        <h-switch v-model="value" value="1" right-text="Text" />
        <br /><br />
        <h-switch v-model="value" value="2" left-text="Text" />
        <br /><br />
        <h-switch v-model="value" value="2" left-text="Text" right-text="Text" disabled />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref([]);

        return {
            value,
        };
    },
});
</script>
