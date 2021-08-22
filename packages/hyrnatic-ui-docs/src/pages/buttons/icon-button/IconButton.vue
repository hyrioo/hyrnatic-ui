<template>
    <page title="Icon Button">
        <section>
            <h2>Intro</h2>
            <p>
                A simple button component with icon and loading state. Designed to not change size when entering loading
                state while keeping most the content visible.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)">
                <template #preview>
                    <vue-runtime-template :template="previewExample(previewExampleOptions)" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="loading" right-text="Loading" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="rounded" right-text="Rounded" style="margin-right: 12px"
                                  :rounded="rounded" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="styling" placeholder="Select styling" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="subtle" label="Subtle" />
                            <h-select-item value="simple" label="Simple" />
                            <h-select-item value="block" label="Block" />
                            <h-select-item value="none" label="None" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="size" placeholder="Select size" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="small" label="Small" />
                            <h-select-item value="normal" label="Normal" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Select color" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="negative" label="Negative" />
                            <h-select-item value="success" label="Success" />
                            <h-select-item value="warning" label="Warning" />
                            <h-select-item value="danger" label="Danger" />
                            <h-select-item value="none" label="None" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="IconButton.props.length">
            <h2>Props</h2>
            <component-props-table :component="IconButton" />
        </section>

        <section v-if="IconButton.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="IconButton" />
        </section>

        <section v-if="IconButton.events.length">
            <h2>Events</h2>
            <component-events-table :component="IconButton" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import CodeExample from '../../../components/CodeExample.vue';
import ComponentPropsTable from '../../../components/ComponentPropsTable.vue';
import ComponentPreview from '../../../components/ComponentPreview.vue';
import ComponentSlotsTable from '../../../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../../../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../../../components/PreviewOptionFormControl.vue';
import IconButton from '../../../../../hyrnatic-ui-elementic/src/modules/buttons/icon-button/icon-button-docs';
import { previewExample } from './snippets';

export default defineComponent({
    components: { CodeExample, PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const loading = ref(false);
        const rounded = ref(false);
        const disabled = ref(false);
        const styling = ref('simple');
        const size = ref('normal');
        const color = ref('primary');

        const previewExampleOptions = computed(() => {
            return {size: size.value, styling: styling.value, color: color.value, disabled: disabled.value, rounded: rounded.value, loading: loading.value};
        });

        return {
            IconButton,
            previewExample,
            previewExampleOptions,
            loading,
            rounded,
            disabled,
            styling,
            size,
            color,
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

