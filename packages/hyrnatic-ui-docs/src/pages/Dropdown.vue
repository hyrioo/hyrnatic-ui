<template>
    <page title="Dropdown">
        <section>
            <h2>Intro</h2>
            <p>
                TODO
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="code">
                <template #preview>
                    <h-dropdown label="Action" :split-button="split" :hide-on-click="hideOnClick" :align="align" style="width: 150px;" @click="onClick('Action')">
                        <h-dropdown-item-header label="Header" />
                        <h-dropdown-item label="Looooooooooooooooong option 1" @click="onClick('1')" />
                        <h-dropdown-item label="Option 2" @click="onClick('2')" />
                        <h-dropdown-item label="Option 3" @click="onClick('3')" />
                        <h-dropdown-item label="Option 4" @click="onClick('4')" />
                        <h-dropdown-item-divider />
                        <h-dropdown-item v-for="n in 10" :key="n" :label="`Extra ${n}`" @click="onClick(`Extra ${n}`)" />
                    </h-dropdown>
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="split" right-text="Split button" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-switch v-model="hideOnClick" right-text="Hide on click" style="margin-right: 12px" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="align" placeholder="Select alignment" style="width: 100%;">
                            <h-select-item value="start" label="Start" />
                            <h-select-item value="end" label="End" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section v-if="Dropdown.props.length">
            <h2>Props</h2>
            <component-props-table :component="Dropdown" />
        </section>

        <section v-if="Dropdown.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Dropdown" />
        </section>

        <section v-if="Dropdown.events.length">
            <h2>Events</h2>
            <component-events-table :component="Dropdown" />
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Dropdown from '../../../hyrnatic-ui-elementic/src/modules/dropdowns/dropdown/dropdown-docs';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const value = ref([]);
        const header = ref('Header');
        const align = ref('start');
        const split = ref(true);
        const hideOnClick = ref(true);

        const onClick = (text) => {
            // eslint-disable-next-line no-spinner
            alert(`Clicked on: ${text}`);
        };

        const code =
`<h-dropdown label="Action" split-button @click="onClick('Action')">
    <h-dropdown-item-header label="Header" />
    <h-dropdown-item label="Option 1" @click="onClick('1')" />
    <h-dropdown-item label="Option 2" @click="onClick('2')" />
    <h-dropdown-item-divider />
    <h-dropdown-item label="Option 3" @click="onClick('3')" />
    <h-dropdown-item label="Option 4" @click="onClick('4')" />
</h-dropdown>`;

        return {
            Dropdown,
            value,
            header,
            align,
            split,
            hideOnClick,
            onClick,
            code,
        };
    },
});
</script>
