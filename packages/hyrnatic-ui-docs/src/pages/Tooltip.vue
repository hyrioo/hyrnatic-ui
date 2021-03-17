<template>
    <page title="Tab">
        <h-tooltip :content="content" placement="left">
            <h-button label="Left" />
        </h-tooltip>
        <h-tooltip :content="content" placement="top">
            <h-button label="Top" />
        </h-tooltip>
        <h-tooltip :content="content" placement="right">
            <h-button label="Right" />
        </h-tooltip>
        <h-tooltip :content="content" placement="bottom">
            <h-button label="Bottom" />
            <template #content>
                This is <b>the</b> content
            </template>
        </h-tooltip>
        <br /><br />
        <h-input v-model="content" />
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const content = ref('This is the very long long long long long long long long long long long content there can be in a tooltip');

        return {
            content,
        };
    },
});
</script>
