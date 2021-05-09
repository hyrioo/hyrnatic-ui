<template>
    <page title="Inline Collapse">
        <h-inline-collapse v-model="expanded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in tristique est. Duis ullamcorper leo non
            viverra suscipit. Proin scelerisque tempor sapien vitae congue. Sed quis erat leo. Aliquam consectetur magna
            et arcu bibendum iaculis. Proin arcu enim, eleifend vel dui sit amet, porttitor lacinia nisi. Suspendisse
            gravida ut tellus et rutrum.
            <br /><br />
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget mauris gravida, tincidunt mi vel,
            fringilla dui. Aliquam eu elit eu ligula pulvinar varius id a arcu. Integer volutpat nibh a tellus
            tincidunt, at luctus lorem blandit. Ut ac lacus vestibulum, vestibulum diam et, luctus urna. Donec nec
            libero nulla. Quisque eu risus tincidunt lacus semper consectetur sit amet at justo. Sed nec risus est.
            Maecenas dapibus scelerisque tristique. Morbi at libero bibendum, malesuada urna ut, commodo tortor.
            <br /><br />
            Ut feugiat tempor nisi, non euismod massa ullamcorper id. Suspendisse maximus elementum velit, vitae
            interdum sem ultricies ac. Etiam facilisis placerat nunc ut faucibus. Integer pretium gravida hendrerit.
            Maecenas et elit elit. Mauris quis egestas ipsum. Nulla imperdiet fringilla commodo. Ut massa eros,
            convallis nec lacus sed, rutrum molestie ipsum. Nullam auctor pulvinar massa vel convallis. Morbi in tortor
            vel augue sollicitudin bibendum et id nunc. In sit amet metus consequat, aliquet ex a, ullamcorper tellus.
            Vestibulum vitae eros felis. Pellentesque et turpis ultrices, venenatis eros feugiat, pharetra magna.
            Quisque volutpat, felis ut semper eleifend, metus justo dignissim ante, sit amet blandit nisl lorem a odio.
        </h-inline-collapse>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const expanded = ref(true);

        return {
            expanded,
        };
    },
});
</script>
