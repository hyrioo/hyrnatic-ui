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
                        <h-spinner-overlay :loading="loading" :label="label" :color="color">
                            Some content goes here<br>
                            test<br>
                            test<br>
                            test
                        </h-spinner-overlay>
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="loading" right-text="Loading" />
                    </preview-option-form-control>
                    <!--<preview-option-form-control>
                        <h-select v-model="color" placeholder="Select color" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="light" label="Light" />
                            <h-select-item value="dark" label="Dark" />
                        </h-select>
                    </preview-option-form-control>-->
                    <preview-option-form-control>
                        <h-input v-model="label" prefix="Label" prefix-width="60px" />
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
        const loading = ref(true);
        const label = ref('');

        return {
            Spinner,
            color,
            loading,
            label,
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
