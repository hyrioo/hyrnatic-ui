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
                        <h-switch v-model="icon" right-text="Show icon" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="styling" placeholder="Select styling"
                                  style="margin-right: 12px; width: 100%;">
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
            <h2>Content slot example</h2>
            <p>
                You can customize the content completely by using the default slot.
            </p>
            <component-preview :code="slotExample">
                <template #preview>
                    <vue-runtime-template :template="slotExample" />
                </template>
            </component-preview>
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
import { ref, defineComponent, SetupContext, computed } from 'vue';
import Button from '../../../../../hyrnatic-ui-elementic/src/modules/buttons/button/button-docs';
import { previewExample, slotExample } from './snippets';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const loading = ref(false);
        const rounded = ref(false);
        const disabled = ref(false);
        const icon = ref(false);
        const size = ref('normal');
        const styling = ref('simple');
        const color = ref('primary');

        const previewExampleOptions = computed(() => {
            return {
                size: size.value,
                icon: icon.value,
                styling: styling.value,
                color: color.value,
                disabled: disabled.value,
                rounded: rounded.value,
                loading: loading.value
            };
        });

        return {
            Button,
            previewExample,
            previewExampleOptions,
            slotExample,
            loading,
            rounded,
            disabled,
            icon,
            size,
            styling,
            color,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>
