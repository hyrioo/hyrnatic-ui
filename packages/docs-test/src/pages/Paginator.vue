<template>
    <page title="Paginator">
        <h-paginator v-model="value" :count="465" :page-size="25" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref(6);

        return {
            value,
        };
    },
});
</script>
