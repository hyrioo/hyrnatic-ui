<template>
    <page title="Date picker">
        <section>
            <h2>Preview</h2>
            <component-preview :code="code">
                <template #preview>
                    <h-date-picker v-model="date" :highlight-today="highlightToday" :first-day-of-week="firstDayOfWeek" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="highlightToday" right-text="Highlight today" />
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
import { ref, defineComponent, SetupContext } from 'vue';
import Page from '../components/Page.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';
import DatePicker from '../../../hyrnatic-ui-elementic/src/modules/date-pickers/date-picker/date-picker-docs';
import { DateTime, Duration, Info as DateTimeInfo } from 'luxon';

export default defineComponent({
    components: { PreviewOptionFormControl, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const date = ref(DateTime.now());
        const highlightToday = ref(true);
        const firstDayOfWeek = ref(0);

        const code = `<h-date-picker v-model="date" :highlight-today="highlightToday" />`;

        return {
            DatePicker,
            date,
            code,
            highlightToday,
            firstDayOfWeek,
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