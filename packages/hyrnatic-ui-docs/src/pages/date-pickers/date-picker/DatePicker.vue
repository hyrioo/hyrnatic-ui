<template>
    <page title="Date picker">
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)">
                <template #preview>
                    <h-date-picker v-model="date" v-bind="previewExampleOptions" @view-changed="viewChanged" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="highlightToday" right-text="Highlight today" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="disabled" right-text="Disabled" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="showDots" right-text="Show dots" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="firstDayOfWeek" placeholder="Select weekday" style="width: 100%;">
                            <h-select-item :value="0" label="Monday" />
                            <h-select-item :value="1" label="Tuesday" />
                            <h-select-item :value="2" label="Wednesday" />
                            <h-select-item :value="3" label="Thursday" />
                            <h-select-item :value="4" label="Friday" />
                            <h-select-item :value="5" label="Saturday" />
                            <h-select-item :value="6" label="Sunday" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="DatePicker.props.length">
            <h2>Props</h2>
            <component-props-table :component="DatePicker" />
        </section>

        <section v-if="DatePicker.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="DatePicker" />
        </section>

        <section v-if="DatePicker.events.length">
            <h2>Events</h2>
            <component-events-table :component="DatePicker" />
        </section>
    </page>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext, computed } from 'vue';
import DatePicker from '../../../../../hyrnatic-ui-elementic/src/modules/date-pickers/date-picker/date-picker-docs';
import { DateTime } from 'luxon';
import { previewExample } from './snippets';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const date = ref<DateTime>(DateTime.now().minus({days: 3}));
        const highlightToday = ref(true);
        const disabled = ref(false);
        const showDots = ref(false);
        const firstDayOfWeek = ref(0);
        const exampleDots =[
            {
                date: DateTime.now().minus({days: 2}),
            },
            {
                date: DateTime.now().minus({days: 5}),
                color: '#ff8585',
            },
            {
                date: DateTime.now().minus({days: 7}),
                color: '#6ACC6A',
            },
            {
                date: DateTime.now().minus({days: 7}),
                color: '#8595ff',
            },
            {
                date: DateTime.now().minus({days: 19}),
            },
        ];

        const previewExampleOptions = computed(() => {
            return {
                highlightToday: highlightToday.value,
                firstDayOfWeek: firstDayOfWeek.value,
                disabled: disabled.value,
                dots: showDots.value ? exampleDots : null,
            };
        });

        const viewChanged = (obj) => {
            console.log('view-changed', obj);
        };

        return {
            DatePicker,
            previewExample,
            previewExampleOptions,
            date,
            highlightToday,
            firstDayOfWeek,
            disabled,
            showDots,
            viewChanged,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>