<template>
    <page title="Button">
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
                        <h-button label="Subtle" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="subtle" :color="color"  style="margin-bottom: 8px" />
                        <h-button label="Simple" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="simple" :color="color"  style="margin-bottom: 8px" />
                        <h-button label="Block" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="block" :color="color"  style="margin-bottom: 8px" />
                        <h-button label="None" :size="size" :icon="icon?'key':null" :rounded="rounded" :disabled="disabled" :loading="loading" styling="none" :color="color"  style="margin-bottom: 8px" />
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="loading" right-text="Loading" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="rounded" right-text="Rounded" style="margin-right: 12px"  :rounded="rounded"/>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="icon" right-text="Icon" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="size" placeholder="Select size" auto-size style="margin-right: 12px" >
                            <h-select-item value="small" label="Small" />
                            <h-select-item value="normal" label="Normal" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Select styling" auto-size style="margin-right: 12px" >
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="secondary" label="Secondary" />
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
            <h2>Props</h2>
            <component-props-table :component="Button" />
        </section>

        <section>
            <h2>Slots</h2>
            <component-slots-table :component="Button" />
        </section>

        <section>
            <h2>Events</h2>
            <component-events-table :component="Button" />
        </section>
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue';
import { Button } from '@hyrioo/hyrnatic-ui-elementic';
import Page from '../components/Page.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';

export default defineComponent({
    components: { PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        console.log(Button);
        const loading = ref(false);
        const rounded = ref(false);
        const disabled = ref(false);
        const icon = ref(false);
        const size = ref('normal');
        const styling = ref('simple');
        const color = ref('primary');

        return {
            Button,
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
