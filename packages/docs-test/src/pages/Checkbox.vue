<template>
    <page title="Checkbox">
        <h-checkbox v-model="value" label="Text" :bordered="true" />
        <br /><br />
        <transition name="fade-slow">
            <h-checkbox v-model="value" :visible="!value" label="Text" />
        </transition>
        <br /><br />
        <h-checkbox v-model="value" label="Text" :indeterminate="value2" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref(false);
        const value2 = ref(true);

        return {
            value,
            value2,
        };
    },
});
</script>
