<template>
    <page title="Collapse">
        <h-collapse v-model="expanded" :accordion="accordion">
            <h-collapse-item id="1" header="Collapse">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in tristique est. Duis ullamcorper leo
                non viverra suscipit. Proin scelerisque tempor sapien vitae congue. Sed quis erat leo. Aliquam
                consectetur magna et arcu bibendum iaculis. Proin arcu enim, eleifend vel dui sit amet, porttitor
                lacinia nisi. Suspendisse gravida ut tellus et rutrum.
                <br /><br />
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget mauris gravida, tincidunt mi
                vel, fringilla dui. Aliquam eu elit eu ligula pulvinar varius id a arcu. Integer volutpat nibh a tellus
                tincidunt, at luctus lorem blandit. Ut ac lacus vestibulum, vestibulum diam et, luctus urna. Donec nec
                libero nulla. Quisque eu risus tincidunt lacus semper consectetur sit amet at justo. Sed nec risus est.
                Maecenas dapibus scelerisque tristique. Morbi at libero bibendum, malesuada urna ut, commodo tortor.
                <br /><br />
                Ut feugiat tempor nisi, non euismod massa ullamcorper id. Suspendisse maximus elementum velit, vitae
                interdum sem ultricies ac. Etiam facilisis placerat nunc ut faucibus. Integer pretium gravida hendrerit.
                Maecenas et elit elit. Mauris quis egestas ipsum. Nulla imperdiet fringilla commodo. Ut massa eros,
                convallis nec lacus sed, rutrum molestie ipsum. Nullam auctor pulvinar massa vel convallis. Morbi in
                tortor vel augue sollicitudin bibendum et id nunc. In sit amet metus consequat, aliquet ex a,
                ullamcorper tellus. Vestibulum vitae eros felis. Pellentesque et turpis ultrices, venenatis eros
                feugiat, pharetra magna. Quisque volutpat, felis ut semper eleifend, metus justo dignissim ante, sit
                amet blandit nisl lorem a odio.
            </h-collapse-item>
            <h-collapse-item id="2" header="Collapse">
                Donec vel erat vitae neque pulvinar gravida. Praesent vehicula condimentum est. Cras id ullamcorper
                ligula. Morbi vel ultrices ipsum. Cras faucibus condimentum imperdiet. Aenean finibus orci id iaculis
                tempus. Donec interdum euismod hendrerit. Duis vestibulum, felis in cursus feugiat, neque purus placerat
                lacus, rhoncus bibendum metus enim at elit. Donec venenatis risus nec dolor pretium, a convallis risus
                posuere. In a fermentum eros. Nulla at eros quis odio sodales lobortis. Nulla sapien arcu, sagittis vel
                lorem sit amet, dapibus gravida metus. Donec sodales eu turpis id pharetra. Nunc ullamcorper maximus
                gravida.
                <br /><br />
                Mauris laoreet dolor non nibh suscipit mollis. Proin vestibulum ipsum non accumsan mattis. Sed feugiat
                consequat libero ut faucibus. Donec efficitur convallis velit id maximus. Ut consectetur risus pharetra
                posuere convallis. Sed eget pharetra est. Proin vulputate elementum dignissim. Morbi aliquet consequat
                facilisis. Sed varius risus eget ligula pellentesque cursus. Sed a lacus sollicitudin, molestie felis a,
                tempus nibh. Fusce eget lacus id augue pellentesque cursus ac ut nulla. Vestibulum ultricies venenatis
                nibh vitae luctus. Aenean aliquet laoreet ligula, ut tristique enim elementum quis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec gravida elit, non
                efficitur turpis.
            </h-collapse-item>
        </h-collapse>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const expanded = ref([]);
        const accordion = ref(false);

        return {
            expanded,
            accordion,
        };
    },
});
</script>
