<template>
    <page title="Input">
        <section>
            <h2>Intro</h2>
            <p>
                TBW
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)">
                <template #preview>
                    <div style="width: 100%; max-width: 256px;" :style="[vertical ? {height: '150px', display: 'flex', justifyContent: 'center'} : null]">
                        <h-slider v-model="value" :step-size="10" :show-steps="showSteps" :disabled="disabled" :vertical="vertical" :invert="invert" />
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="showSteps" right-text="Show steps" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="vertical" right-text="Vertical" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="invert" right-text="Invert" />
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="Slider.props.length">
            <h2>Props</h2>
            <component-props-table :component="Slider" />
        </section>

        <section v-if="Slider.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Slider" />
        </section>

        <section v-if="Slider.events.length">
            <h2>Events</h2>
            <component-events-table :component="Slider" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import { previewExample } from './snippets';
import Slider from '../../../../../hyrnatic-ui-elementic/src/modules/sliders/slider/slider-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const minimum = ref(0);
        const maximum = ref(100);
        const value = ref(75);
        const disabled = ref(false);
        const showSteps = ref(false);
        const vertical = ref(false);
        const invert = ref(false);

        const previewExampleOptions = computed(() => {
            return {
                value: value.value,
                minimum: minimum.value,
                maximum: maximum.value,
                disabled: disabled.value,
                showSteps: showSteps.value,
                vertical: vertical.value,
                invert: invert.value,
            };
        });


        return {
            Slider,
            previewExample,
            previewExampleOptions,
            minimum,
            maximum,
            value,
            disabled,
            showSteps,
            vertical,
            invert,
        };
    },
});
</script>
