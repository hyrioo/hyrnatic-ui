<template>
    <page title="Tab">
        <h-tabs-navigator v-model="value">
            <h-tab-item id="1" label="Tab 1" />
            <h-tab-item id="3" :label="tab" />
            <h-tab-item id="2" label="Taaaaaaaaaaaaaaaaaab 2" />
        </h-tabs-navigator>
        <br />
        <h-input v-model="tab" />
        <br /><br />
        <h-fragment-container :active="value">
            <h-fragment id="1">
                Fragment 1<br />
                Fragment 1<br />
                Fragment 1<br />
            </h-fragment>
            <h-fragment id="2">
                Fragment 2<br />
                Fragment 2<br />
            </h-fragment>
            <h-fragment id="3">
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
                Fragment 3<br />
            </h-fragment>
        </h-fragment-container>
        Under fragments
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref('1');
        const tab = ref('Tab 3');

        return {
            tab,
            value,
        };
    },
});
</script>
