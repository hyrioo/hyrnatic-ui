<template>
    <page title="Icon" style="color: #319C9C">
        <h-icon icon="key" />
        <br /><br />
        <h-icon icon="loading" spin />
        <br /><br />
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
