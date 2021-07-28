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

        <h-tabs-navigator v-model="selectedTab">
            <h-tab-item id="dropdown" label="Dropdown" />
            <h-tab-item id="dropdown-item" label="Dropdown item" />
            <h-tab-item id="dropdown-header" label="Dropdown item header" />
            <h-tab-item id="dropdown-divider" label="Dropdown item divider" />
        </h-tabs-navigator>

        <h-fragment-container :active="selectedTab" style="margin-top: 12px">
            <h-fragment id="dropdown">
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
            </h-fragment>
            <h-fragment id="dropdown-item">
                <section v-if="DropdownItem.props.length">
                    <h2>Props</h2>
                    <component-props-table :component="DropdownItem" />
                </section>

                <section v-if="DropdownItem.slots.length">
                    <h2>Slots</h2>
                    <component-slots-table :component="DropdownItem" />
                </section>

                <section v-if="DropdownItem.events.length">
                    <h2>Events</h2>
                    <component-events-table :component="DropdownItem" />
                </section>
            </h-fragment>
            <h-fragment id="dropdown-header">
                <section v-if="DropdownItemHeader.props.length">
                    <h2>Props</h2>
                    <component-props-table :component="DropdownItemHeader" />
                </section>

                <section v-if="DropdownItemHeader.slots.length">
                    <h2>Slots</h2>
                    <component-slots-table :component="DropdownItemHeader" />
                </section>

                <section v-if="DropdownItemHeader.events.length">
                    <h2>Events</h2>
                    <component-events-table :component="DropdownItemHeader" />
                </section>
            </h-fragment>
            <h-fragment id="dropdown-divider">
                <p v-if="!DropdownItemDivider.props.length && !DropdownItemDivider.slots.length && !DropdownItemDivider.events.length">This component does not have any props, slots or events.</p>
                <section v-if="DropdownItemDivider.props.length">
                    <h2>Props</h2>
                    <component-props-table :component="DropdownItemDivider" />
                </section>

                <section v-if="DropdownItemDivider.slots.length">
                    <h2>Slots</h2>
                    <component-slots-table :component="DropdownItemDivider" />
                </section>

                <section v-if="DropdownItemDivider.events.length">
                    <h2>Events</h2>
                    <component-events-table :component="DropdownItemDivider" />
                </section>
            </h-fragment>
        </h-fragment-container>

    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import Dropdown from '../../../hyrnatic-ui-elementic/src/modules/dropdowns/dropdown/dropdown-docs';
import DropdownItem from '../../../hyrnatic-ui-elementic/src/modules/dropdowns/dropdown-item/dropdown-item-docs';
import DropdownItemHeader from '../../../hyrnatic-ui-elementic/src/modules/dropdowns/dropdown-item-header/dropdown-item-header-docs';
import DropdownItemDivider from '../../../hyrnatic-ui-elementic/src/modules/dropdowns/dropdown-item-divider/dropdown-item-divider-docs';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const selectedTab = ref('dropdown');
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
            DropdownItem,
            DropdownItemHeader,
            DropdownItemDivider,
            selectedTab,
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
