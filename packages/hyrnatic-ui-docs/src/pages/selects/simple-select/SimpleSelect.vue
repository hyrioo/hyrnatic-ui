<template>
    <page title="Input">
        <section>
            <h2>Intro</h2>
            <p>
                Tester
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)">
                <template #preview>
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <h-simple-select v-model="value" v-bind="vbind" style="margin-bottom: 12px; width: 175px" />
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="allowClear" right-text="Allow clear" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="placeholder"/>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="Input.props.length">
            <h2>Props</h2>
            <component-props-table :component="Input" />
        </section>

        <section v-if="Input.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Input" />
        </section>

        <section v-if="Input.events.length">
            <h2>Events</h2>
            <component-events-table :component="Input" />
        </section>
        <!--<h-autocomplete v-model="value" :items="items" @item-selected="alert">-->
        <!--    &lt;!&ndash;<template v-slot="props">&ndash;&gt;-->
        <!--    &lt;!&ndash;    <span>{{ props.focusedItem }}</span>&ndash;&gt;-->
        <!--    &lt;!&ndash;    <li v-for="item in props.items" :class="{'-focused': item === props.focusedItem}">{{ item }}</li>&ndash;&gt;-->
        <!--    &lt;!&ndash;</template>&ndash;&gt;-->
        <!--</h-autocomplete>-->
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Page from '../../../components/Page.vue';
import { previewExample } from './snippets';
import Input from '../../../../../hyrnatic-ui-elementic/src/modules/inputs/input/input-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx) {
        const value = ref('');
        const disabled = ref(false);
        const allowClear = ref(false);
        const placeholder = ref('Select item');
        const items = computed(() => {
            const arr = [];
            for (let i=0;i<30;i++){
                arr.push(`Option ${i}`);
            }
            return arr;
        });

        const previewExampleOptions = computed(() => {
            return {
                placeholder: placeholder.value,
                disabled: disabled.value,
                allowClear: allowClear.value,
            };
        });

        const vbind = computed(() => {
            return {
                items: items.value,
                allowClear: allowClear.value,
                placeholder: placeholder.value,
                disabled: disabled.value,
            };
        });


        return {
            Input,
            previewExample,
            previewExampleOptions,
            vbind,
            value,
            disabled,
            placeholder,
            allowClear,
        };
    },
});
</script>
