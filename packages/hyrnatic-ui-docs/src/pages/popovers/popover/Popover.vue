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
            <component-preview>
                <template #preview>
                    <div style="width: 100%; max-width: 256px;">
                        <h-icon-button ref="button" icon="key" styling="subtle" @click="visible = !visible" />

                        <h-popover :reference="button ? button.$el : null" :visible="visible" @clickOutside="onClickOutside">
                            Content
                        </h-popover>
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
import Slider from '../../../../../hyrnatic-ui-elementic/src/modules/popovers/popover/popover-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const visible = ref(false);
        const button = ref<HTMLElement>();

        const previewExampleOptions = computed(() => {
            return {
            };
        });

        const onClickOutside = (value: any) => {
            console.log(value);
        };

        return {
            Slider,
            previewExample,
            previewExampleOptions,
            visible,
            button,
            onClickOutside,
        };
    },
});
</script>
