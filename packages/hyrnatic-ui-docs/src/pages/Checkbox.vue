<template>
    <page title="Checkbox">
        <section>
            <h2>Preview</h2>
            <component-preview :code="code">
                <template #preview>
                    <h-checkbox v-model="value" :label="label?'Label':null" :bordered="bordered" :indeterminate="indeterminate" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="bordered" right-text="Bordered" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="indeterminate" right-text="Indeterminate" style="margin-right: 12px"/>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="label" right-text="Show label" style="margin-right: 12px"/>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="Checkbox.props.length">
            <h2>Props</h2>
            <component-props-table :component="Checkbox" />
        </section>

        <section v-if="Checkbox.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Checkbox" />
        </section>

        <section v-if="Checkbox.events.length">
            <h2>Events</h2>
            <component-events-table :component="Checkbox" />
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../components/Page.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';
import Checkbox from '../../../hyrnatic-ui-elementic/src/modules/checkboxes/checkbox/checkbox-docs';

export default defineComponent({
    components: { PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const value = ref(false);
        const bordered = ref(false);
        const indeterminate = ref(false);
        const label = ref(true);

        const code = `<h-checkbox v-model="value" :label="label?'Label':null" :bordered="bordered" :indeterminate="indeterminate" />`;

        return {
            Checkbox,
            value,
            bordered,
            indeterminate,
            label,
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
