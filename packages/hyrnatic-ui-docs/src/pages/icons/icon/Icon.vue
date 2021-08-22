<template>
    <page title="Icon">
        <section>
            <h2>Intro</h2>
            <p>
                TODO
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)" style="color: #319C9C">
                <template #preview>
                    <vue-runtime-template :template="previewExample(previewExampleOptions)" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="spin" right-text="Spin" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="size" placeholder="Select size" style="width: 100%;">
                            <h-select-item value="16px" label="16px" />
                            <h-select-item value="24px" label="24px" />
                            <h-select-item value="32px" label="32px" />
                            <h-select-item value="48px" label="48px" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="icon" placeholder="Select icon" style="width: 100%;">
                            <h-select-item value="key" label="Key" />
                            <h-select-item value="loading" label="Loading" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Usage</h2>
            <p>To use a new icon you must first register it.</p>
            <code-example :code='usageExample' language="js"/>
        </section>

        <section v-if="Icon.props.length">
            <h2>Props</h2>
            <component-props-table :component="Icon" />
        </section>

        <section v-if="Icon.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Icon" />
        </section>

        <section v-if="Icon.events.length">
            <h2>Events</h2>
            <component-events-table :component="Icon" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Icon from '../../../../../hyrnatic-ui-elementic/src/modules/icons/icon/icon-docs';
import { previewExample, usageExample } from './snippets';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const spin = ref(false);
        const size = ref('24px');
        const icon = ref('key');

        const previewExampleOptions = computed(() => {
            return {
                spin: spin.value,
                size: size.value,
                icon: icon.value,
            };
        });

        return {
            Icon,
            previewExample,
            previewExampleOptions,
            usageExample,
            spin,
            size,
            icon,
        };
    },
});
</script>
