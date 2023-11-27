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
                        <h-select v-model="value" multiple v-bind="vbind" style="margin-bottom: 12px; width: 175px">
                            <h-select-item-header v-if="showHeader" :label="header" />
                            <h-select-item value="1" label="Loooong option 1" />
                            <h-select-item value="2" icon="plus" label="Option 2" />
                            <h-select-item-divider />
                            <h-select-item value="3" label="Option 3" disabled />
                            <h-select-item value="4" label="Option 4" />
                            <h-select-item v-for="n in 100" :key="n" :value="n" :label="`Extra option ${n}`" />
                        </h-select>
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
                        <h-switch v-model="showHeader" right-text="Show header" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="header" :disabled="!showHeader" />
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
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import { capitalizeTemplateExample, previewExample, templateExample } from './snippets';
import Input from '../../../../../hyrnatic-ui-elementic/src/modules/inputs/input/input-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref('');
        const disabled = ref(false);
        const allowClear = ref(false);
        const placeholder = ref('Select item');
        const header = ref('Header');
        const showHeader = ref(false);

        const previewExampleOptions = computed(() => {
            return {
                placeholder: placeholder.value,
                disabled: disabled.value,
                showHeader: showHeader.value,
                header: header.value,
            };
        });

        const vbind = computed(() => {
            return {
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
            header,
            showHeader,
            allowClear,
        };
    },
});
</script>
