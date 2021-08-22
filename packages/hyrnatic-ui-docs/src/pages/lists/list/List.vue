<template>
    <page title="List">
        <section>
            <h2>Intro</h2>
            <p>
                TBW
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="previewExample({showSubText, animate})" :center-preview-vertically="false">
                <template #preview>
                    <h-list :animate="animate" style="min-height: 250px; width: 50%">
                        <h-list-item v-for="item in list" :key="item.key" :text="item.text" v-bind="{'sub-text': showSubText ? item.subText : null}" />
                    </h-list>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="animate" right-text="Animate" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="showSubText" right-text="Show sub text" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-button label="Add list item" style="width: 100%;" @click="addItem" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-button label="Remove list item" style="width: 100%;" @click="removeItem" />
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <h-tabs-navigator v-model="selectedTab" style="margin-bottom: 12px">
            <h-tab-item id="list" label="List" />
            <h-tab-item id="list-item" label="List item" />
        </h-tabs-navigator>

        <h-fragment-container :active="selectedTab">
            <h-fragment id="list">
                <section v-if="List.props.length">
                    <h2>Props</h2>
                    <component-props-table :component="List" />
                </section>

                <section v-if="List.slots.length">
                    <h2>Slots</h2>
                    <component-slots-table :component="List" />
                </section>

                <section v-if="List.events.length">
                    <h2>Events</h2>
                    <component-events-table :component="List" />
                </section>
            </h-fragment>
            <h-fragment id="list-item">
                <section v-if="ListItem.props.length">
                    <h2>Props</h2>
                    <component-props-table :component="ListItem" />
                </section>

                <section v-if="ListItem.slots.length">
                    <h2>Slots</h2>
                    <component-slots-table :component="ListItem" />
                </section>

                <section v-if="ListItem.events.length">
                    <h2>Events</h2>
                    <component-events-table :component="ListItem" />
                </section>
            </h-fragment>
        </h-fragment-container>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Page from '../../../components/Page.vue';
import { previewExample } from './snippets';
import List from '../../../../../hyrnatic-ui-elementic/src/modules/lists/list/list-docs';
import ListItem from '../../../../../hyrnatic-ui-elementic/src/modules/lists/list-item/list-item-docs';

export default defineComponent({
    components: { Page },
    setup(props, ctx: SetupContext) {
        let key = 1;
        const selectedTab = ref('list');
        const list = ref([]);
        const showSubText = ref(true);
        const animate = ref(true);

        const randomIndex = () => Math.floor(Math.random() * list.value.length);
        const addItem = () => {
            list.value.splice(randomIndex(), 0, {
                key: (key++).toString(),
                text: `This is a list element: ${key}`,
                subText: 'This is a sub line',
            });
        };
        const removeItem = () => {
            list.value.splice(randomIndex(), 1);
        };

        addItem();
        addItem();
        addItem();
        addItem();
        addItem();

        return {
            List,
            ListItem,
            previewExample,
            selectedTab,
            list,
            showSubText,
            animate,
            addItem,
            removeItem,
        };
    },
});
</script>
