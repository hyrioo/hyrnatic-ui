<template>
    <page title="Paginator">
        <section>
            <h2>Intro</h2>
            <p>
                TBW
            </p>
        </section>

        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample(previewExampleOptions)" :center-preview-vertically="false">
                <template #preview>
                    <h-paginator v-model="value" :count="count" :page-size="pageSize" :delta="delta" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="delta" placeholder="Select delta" style="width: 100%;">
                            <h-select-item :value="0" label="0" />
                            <h-select-item :value="1" label="1" />
                            <h-select-item :value="2" label="2" />
                            <h-select-item :value="3" label="3" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="pageSize" placeholder="Select page size" style="width: 100%;">
                            <h-select-item :value="10" label="10" />
                            <h-select-item :value="25" label="25" />
                            <h-select-item :value="50" label="50" />
                        </h-select>
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-input v-model.number="count" placeholder="Total count" />
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="Paginator.props.length">
            <h2>Props</h2>
            <component-props-table :component="Paginator" />
        </section>

        <section v-if="Paginator.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Paginator" />
        </section>

        <section v-if="Paginator.events.length">
            <h2>Events</h2>
            <component-events-table :component="Paginator" />
        </section>
    </page>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from 'vue';
import Paginator from '../../../../../hyrnatic-ui-elementic/src/modules/paginators/paginator/paginator-docs';
import Page from '../../../components/Page.vue';
import { previewExample } from './snippets';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        const value = ref(6);
        const delta = ref(1);
        const count = ref(425);
        const pageSize = ref(25);

        const previewExampleOptions = computed(() => {
            return {
                delta: delta.value,
                count: count.value,
                pageSize: pageSize.value,
            };
        });

        return {
            Paginator,
            previewExample,
            previewExampleOptions,
            value,
            delta,
            count,
            pageSize,
        };
    },
});
</script>
