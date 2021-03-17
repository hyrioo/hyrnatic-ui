<template>
    <page title="Installation">
        <h-icon icon="loading" />
    </page>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        return {};
    },
});
</script>
