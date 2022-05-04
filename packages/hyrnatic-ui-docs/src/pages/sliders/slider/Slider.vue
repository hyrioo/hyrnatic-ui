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
                    <div style="width: 100%; max-width: 256px">
                        <h-slider v-model="value" :step-size="1" />
                    </div>
                </template>
                <template #options>
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

        const previewExampleOptions = computed(() => {
            return {
                value: value.value,
                minimum: minimum.value,
                maximum: maximum.value,
            };
        });


        return {
            Slider,
            previewExample,
            previewExampleOptions,
            minimum,
            maximum,
            value,
        };
    },
});
</script>
