<template>
    <page title="Progress bar">
        <h-progress-bar :value="70" show-percentage />
        <br />
        <h-progress-bar :value="2500" :maximum="2000" show-overflow-indicator show-percentage styling="error" />
        <br />
        <h-progress-bar :value="20" striped />
        <br />
        <h-progress-bar :value="45" animated />
        <br />
        <h-progress-bar :value="45" size="large" show-percentage />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref('');

        return {
            value,
        };
    },
});
</script>
