<template>
    <page title="Button">
        <section>
            <h2>Intro</h2>
            <p>
                A simple button component with icon and loading state. Designed to not change size when entering loading
                state while keeping most the content visible.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview>
                <template #preview>
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <h-button label="Subtle" :size="size" :icon="icon?'key':null" :rounded="rounded"
                                  :disabled="disabled" :loading="loading" styling="subtle" :color="color"
                                  style="margin-bottom: 8px" />
                        <h-button label="Simple" :size="size" :icon="icon?'key':null" :rounded="rounded"
                                  :disabled="disabled" :loading="loading" styling="simple" :color="color"
                                  style="margin-bottom: 8px" />
                        <h-button label="Block" :size="size" :icon="icon?'key':null" :rounded="rounded"
                                  :disabled="disabled" :loading="loading" styling="block" :color="color"
                                  style="margin-bottom: 8px" />
                        <h-button label="None" :size="size" :icon="icon?'key':null" :rounded="rounded"
                                  :disabled="disabled" :loading="loading" styling="none" :color="color"
                                  style="margin-bottom: 8px" />
                    </div>
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
                        <h-switch v-model="icon" right-text="Show icon" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="size" placeholder="Select size" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="small" label="Small" />
                            <h-select-item value="normal" label="Normal" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Select styling" style="margin-right: 12px; width: 100%;">
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

        <section>
            <h2>Example</h2>
            <code-example :code="code" language="html-vue" />
        </section>

        <section v-if="Button.props.length">
            <h2>Props</h2>
            <component-props-table :component="Button" />
        </section>

        <section v-if="Button.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Button" />
        </section>

        <section v-if="Button.events.length">
            <h2>Events</h2>
            <component-events-table :component="Button" />
        </section>
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';
import CodeExample from '../components/CodeExample.vue';
import Button from '../../../hyrnatic-ui-elementic/src/modules/buttons/button/button-docs';

export default defineComponent({
    components: {
        CodeExample,
        PreviewOptionFormControl,
        ComponentEventsTable,
        ComponentSlotsTable,
        ComponentPreview,
        ComponentPropsTable,
        Page,
    },
    setup(props, ctx: SetupContext) {
        const loading = ref(false);
        const rounded = ref(false);
        const disabled = ref(false);
        const icon = ref(false);
        const size = ref('normal');
        const styling = ref('simple');
        const color = ref('primary');

        const code = `<h-button label="Subtle" size="normal" icon="key" styling="subtle" color="primary" rounded disabled loading />`;
        console.log(Button);


        return {
            Button,
            loading,
            rounded,
            disabled,
            icon,
            size,
            styling,
            color,
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
