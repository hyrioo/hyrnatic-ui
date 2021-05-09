<template>
    <page title="Icon Button">
        <h-icon-button icon="key" />
        <h-icon-button icon="key" styling="secondary" />
        <h-icon-button icon="key" styling="negative" />
        <h-icon-button icon="key" styling="warning" />
        <h-icon-button icon="key" styling="danger" />
        <h-icon-button icon="key" styling="success" />
        <br /><br />
        <h-icon-button icon="key" loading />
        <h-icon-button icon="key" loading styling="secondary" />
        <h-icon-button icon="key" loading styling="negative" />
        <h-icon-button icon="key" loading styling="warning" />
        <h-icon-button icon="key" loading styling="danger" />
        <h-icon-button icon="key" loading styling="success" />
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
