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
                        <template v-if="capitalize">
                            <h-input v-model.capitalize="value" v-bind="vbind" style="margin-bottom: 12px"  />
                            <h-input v-model.capitalize="value" v-bind="vbind" prefix-icon="key" suffix-icon="key" style="margin-bottom: 12px"  />
                            <h-input v-model.capitalize="value" v-bind="vbind" prefix="Prefix" suffix="Suffix" style="margin-bottom: 12px"  />
                        </template>
                        <template v-else>
                            <h-input v-model="value" v-bind="vbind" style="margin-bottom: 12px"  />
                            <h-input v-model="value" v-bind="vbind" prefix-icon="key" suffix-icon="key" style="margin-bottom: 12px"  />
                            <h-input v-model="value" v-bind="vbind" prefix="Prefix" suffix="Suffix" style="margin-bottom: 12px"  />
                        </template>
                    </div>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="readonly" right-text="Readonly" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="capitalize" right-text="Capitalize" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model="placeholder" />
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
        const placeholder = ref('Placeholder');
        const disabled = ref(false);
        const readonly = ref(false);
        const capitalize = ref(false);
        const items = computed(() => {
            return ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine'].filter((s) => s.toLowerCase().indexOf(value.value.toLowerCase()) !== -1);
        });

        const alert = (item: string) => {
            console.log('Alert', item);
        }

        const previewExampleOptions = computed(() => {
            return {
                capitalize: capitalize.value,
                placeholder: placeholder.value,
                readonly: readonly.value,
                disabled: disabled.value,
            };
        });

        const vbind = computed(() => {
            return {
                placeholder: placeholder.value,
                readonly: readonly.value,
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
            readonly,
            capitalize,
            items,
            alert,
        };
    },
});
</script>
