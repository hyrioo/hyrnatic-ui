<template>
    <page title="Drawer">
        <section>
            <h2>Intro</h2>
            <p>
                The drawer component allow you to programmatically open promisfied drawers and pass props and listeners to them.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="code">
                <template #preview>
                    <h-button label="Open drawer" @click="openDrawer" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-select v-model="placement" placeholder="Select placement" style="width: 100%;">
                            <h-select-item value="left" label="Left" />
                            <h-select-item value="right" label="Right" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Usage</h2>
            <p>First add the wrapper to your layout component.</p>
            <code-example :code='code3' language="html-vue"/>
            <p>To open a dialog you must use the DialogManager, and import the component to wish to open.</p>
            <code-example :code="code2" language="js" />
        </section>

        <section v-if="Drawer.props.length">
            <h2>Props</h2>
            <component-props-table :component="Drawer" />
        </section>

        <section v-if="Drawer.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Drawer" />
        </section>

        <section v-if="Drawer.events.length">
            <h2>Events</h2>
            <component-events-table :component="Drawer" />
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import Drawer from '../../../hyrnatic-ui-elementic/src/modules/drawers/drawer/drawer-docs';
import SampleDrawer from '../components/SampleDrawer.vue';

export default defineComponent({
    setup(props, ctx: SetupContext) {
        const counter = ref(0);
        const placement = ref('right');

        const openDrawer = async () => {
            DialogManager.createPromise(SampleDrawer, { text: 'Testing', placement, counter }, {
                incrementCounter: () => {
                    counter.value++;
                },
            }, { stack: 'drawer' }).then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });
        };


        const code =
`<h-drawer title="Some dialog title" :placement="placement">
    Counter: {{ counter }}
    <br /><br />
    <h-button label="Emit 'addCounter'" @click="something" />
    <br /><br />
    <h-button label="Emit 'addCounter' after confirm drawer" @click="confirmAgain" />
    <br /><br />
    <h-button label="Emit 'addCounter' after confirm dialog" @click="confirmAgainDialog" />

    <template #footer>
        <h-button label="Close" styling="negative" style="margin-right: 12px" @click="close" />
        <h-button label="Save" @click="close" />
    </template>
</h-drawer>`;
        const code2 =
`// Component.vue
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import CustomDrawer from '../components/CustomDrawer.vue';
const props = {
    prop: 'anything',
};
const listeners = {
    listener: () => {
        // React to something
    }
};
const options = {
    stack: 'drawer'
};
DialogManager.createPromise(CustomDrawer, props, listeners, options).then(() => {
    // Resolved successfully
}).catch(() => {
    // Rejected
});`;
        const code3 =
`<!-- App.vue -->
<hr-dialog-wrapper></hr-dialog-wrapper>`;

        return {
            Drawer,
            openDrawer,
            placement,
            code,
            code2,
            code3,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>