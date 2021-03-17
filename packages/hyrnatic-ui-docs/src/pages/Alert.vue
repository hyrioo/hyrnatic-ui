<template>
    <page title="Alert">
        <h-alert title="Brand alert" show-close-button />
        <br />
        <h-alert title="Warning alert" show-close-button styling="warning" />
        <br />
        <h-alert title="Danger alert" show-close-button styling="danger" />
        <br />
        <h-alert title="Success alert" show-close-button styling="success" />

        <br /><br />

        <h-alert title="Brand alert" icon="information-outline" close-text="Close" />
        <br />
        <h-alert title="Warning alert" icon="alert-circle-outline" close-text="Hide" styling="warning" />
        <br />
        <h-alert title="Danger alert" icon="close-circle-outline" close-text="Gotcha" styling="danger" />
        <br />
        <h-alert title="Success alert" icon="check-circle-outline" close-text="Close" styling="success" />

        <br /><br />

        <h-alert title="Brand alert" description="Description text" icon="information-outline" show-close-button />
        <br />
        <h-alert title="Warning alert" description="Description text" icon="alert-circle-outline" styling="warning" />
        <br />
        <h-alert title="Danger alert" description="Description text" icon="close-circle-outline" styling="danger" />
        <br />
        <h-alert title="Success alert" description="Description text" icon="check-circle-outline" styling="success" />
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
