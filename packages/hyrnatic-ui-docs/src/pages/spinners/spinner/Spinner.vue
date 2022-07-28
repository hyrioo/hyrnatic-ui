<template>
    <page title="Spinner">
        <section>
            <h2>Intro</h2>
            <p>
                The button component
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview>
                <template #preview>
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <h-spinner :color="color" :thickness="thickness" />
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Select color" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="negative" label="Negative" />
                            <h-select-item value="success" label="Success" />
                            <h-select-item value="warning" label="Warning" />
                            <h-select-item value="danger" label="Danger" />
                            <h-select-item value="current" label="Current" />
                        </h-select>
                        <h-select v-model="thickness" placeholder="Select thickness" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="1px" label="1px" />
                            <h-select-item value="2px" label="2px" />
                            <h-select-item value="3px" label="3px" />
                            <h-select-item value="4px" label="4px" />
                            <h-select-item value="5px" label="5px" />
                            <h-select-item value="6px" label="6px" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Props</h2>
            <component-props-table :component="Spinner" />
        </section>
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import ComponentPropsTable from '../../../components/ComponentPropsTable.vue';
import ComponentPreview from '../../../components/ComponentPreview.vue';
import ComponentSlotsTable from '../../../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../../../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../../../components/PreviewOptionFormControl.vue';
import Spinner from '../../../../../hyrnatic-ui-elementic/src/modules/spinners/spinner/spinner-docs';

export default defineComponent({
    components: { PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const color = ref('primary');
        const thickness = ref('4px');

        return {
            Spinner,
            color,
            thickness,
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
