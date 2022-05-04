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
                    <div style="width: 100%">
                        <vue-runtime-template :template="previewExample(previewExampleOptions)" />
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="styling" placeholder="Select styling"
                                  style="margin-right: 12px; width: 100%;">
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="danger" label="Danger" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="size" placeholder="Select size" style="margin-right: 12px; width: 100%;">
                            <h-select-item value="normal" label="Normal" />
                            <h-select-item value="large" label="Large" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="showPercentage" right-text="Show percentage" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="showOverflowIndicator" right-text="Show overflow indicator" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="striped" right-text="Striped" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="animated" right-text="Animated" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="minimum" prefix="Minimum" prefix-width="60px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="maximum" prefix="Maximum" prefix-width="60px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="value" prefix="Value" prefix-width="60px" />
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="ProgressBar.props.length">
            <h2>Props</h2>
            <component-props-table :component="ProgressBar" />
        </section>

        <section v-if="ProgressBar.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="ProgressBar" />
        </section>

        <section v-if="ProgressBar.events.length">
            <h2>Events</h2>
            <component-events-table :component="ProgressBar" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import { previewExample } from './snippets';
import ProgressBar from '../../../../../hyrnatic-ui-elementic/src/modules/progress-bars/progress-bar/progress-bar-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const minimum = ref(0);
        const maximum = ref(100);
        const value = ref(70);
        const styling = ref('primary');
        const size = ref('normal');
        const showPercentage = ref(false);
        const showOverflowIndicator = ref(false);
        const striped = ref(false);
        const animated = ref(false);

        const previewExampleOptions = computed(() => {
            return {
                value: value.value,
                minimum: minimum.value,
                maximum: maximum.value,
                styling: styling.value,
                size: size.value,
                showPercentage: showPercentage.value,
                showOverflowIndicator: showOverflowIndicator.value,
                striped: striped.value,
                animated: animated.value,
            };
        });


        return {
            ProgressBar,
            previewExample,
            previewExampleOptions,
            minimum,
            maximum,
            value,
            styling,
            size,
            showPercentage,
            showOverflowIndicator,
            striped,
            animated,
        };
    },
});
</script>
