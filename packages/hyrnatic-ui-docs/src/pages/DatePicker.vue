<template>
    <page title="Date picker">
        <h-date-picker v-model="date" />
        <br><br>
        <h-date-picker v-model="date" />
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const date = ref(null);

        return {
            date,
        };
    },
});
</script>
