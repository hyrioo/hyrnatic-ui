<template>
    <page title="Inline collapse">
        <section>
            <h2>Preview</h2>
            <component-preview :code="code" :center-preview-vertically="false">
                <template #preview>
                    <h-inline-collapse v-model="expanded" :animate="animate" :text-align="textAlign" style="flex-grow: 1">
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
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="animate" right-text="Animate" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="textAlign" placeholder="Select text align" style="width: 100%;">
                            <h-select-item value="left" label="Left" />
                            <h-select-item value="right" label="Right" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="InlineCollapse.props.length">
            <h2>Props</h2>
            <component-props-table :component="InlineCollapse" />
        </section>

        <section v-if="InlineCollapse.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="InlineCollapse" />
        </section>

        <section v-if="InlineCollapse.events.length">
            <h2>Events</h2>
            <component-events-table :component="InlineCollapse" />
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext, watch } from 'vue';
import Page from '../components/Page.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';
import InlineCollapse from '../../../hyrnatic-ui-elementic/src/modules/collapses/inline-collapse/inline-collapse-docs';

export default defineComponent({
    components: { PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const expanded = ref(false);
        const animate = ref(true);
        const textAlign = ref('left');

        const code =
`<h-inline-collapse v-model="expanded" :animate="animate">
    ...content
</h-inline-collapse>`;

        return {
            InlineCollapse,
            expanded,
            animate,
            textAlign,
            code,
        };
    },
});
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 32px;
}

h2 {
    color: #319C9C;
    font-size: 18px;
    margin: 0;
    margin-bottom: 12px;
}
</style>