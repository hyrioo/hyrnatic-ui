<template>
    <page title="Dialog">
        <section>
            <h2>Intro</h2>
            <p>
                The dialog component allow you to programmatically open promisfied dialogs and pass props and listeners to them.
            </p>
        </section>
        <section>
            <h2>Preview</h2>
            <component-preview :code="code">
                <template #preview>
                    <h-button label="Show dialog" @click="onClick" />
                </template>
                <template #options>
                    <preview-option-form-control>
                        <h-switch v-model="showCloseButton" right-text="Show close button" />
                    </preview-option-form-control>
                    <preview-option-form-control>
                        <h-select v-model="color" placeholder="Select color" style="width: 100%;">
                            <h-select-item value="primary" label="Primary" />
                            <h-select-item value="danger" label="Danger" />
                        </h-select>
                    </preview-option-form-control>
                </template>
            </component-preview>
        </section>

        <section>
            <h2>Usage</h2>
            <p>To open a dialog you must use the DialogManager, and import the component to wish to open.</p>
            <code-example :code="code2" language="js" />
        </section>

        <section v-if="Dialog.props.length">
            <h2>Props</h2>
            <component-props-table :component="Dialog" />
        </section>

        <section v-if="Dialog.slots.length">
            <h2>Slots</h2>
            <component-slots-table :component="Dialog" />
        </section>

        <section v-if="Dialog.events.length">
            <h2>Events</h2>
            <component-events-table :component="Dialog" />
        </section>
    </page>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import Page from '../components/Page.vue';
import CodeExample from '../components/CodeExample.vue';
import ComponentPropsTable from '../components/ComponentPropsTable.vue';
import ComponentPreview from '../components/ComponentPreview.vue';
import ComponentSlotsTable from '../components/ComponentSlotsTable.vue';
import ComponentEventsTable from '../components/ComponentEventsTable.vue';
import PreviewOptionFormControl from '../components/PreviewOptionFormControl.vue';
import Dialog from '../../../hyrnatic-ui-elementic/src/modules/dialogs/dialog/dialog-docs';
import SampleDialog from '../components/SampleDialog.vue';

export default defineComponent({
    components: { PreviewOptionFormControl, CodeExample, ComponentEventsTable, ComponentSlotsTable, ComponentPreview, ComponentPropsTable, Page },
    setup(props, ctx: SetupContext) {
        const showCloseButton = ref(true);
        const color = ref('primary');
        const counter = ref(0);

        const onClick = async () => {
            const dialog = DialogManager.create(SampleDialog, { showCloseButton: showCloseButton, color: color, text: '1', counter: counter  }, {
                something: () => {
                    counter.value++;
                },
            }, { stack: 'dialog' });

            dialog.promise.then((result) => {
                console.log('resolve', result);
            }).catch((reason) => {
                console.log('reject', reason);
            });
        };

        const code =
`<h-dialog title="Some dialog title" :color="color" :show-close-button="showCloseButton">
    Dynamic counter: {{ counter }} <br /> <br />
    Nested status: {{ nested }} <br /> <br />

    <h-button label="Add to counter" @click="addCounter" style="margin-right: 12px" />
    <h-button label="Open nested dialog" @click="openNestedDialog" />

    <template #footer>
        <h-button label="Close" @click="close" />
    </template>
</h-dialog>`;
        const code2 =
`import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import CustomDialog from '../components/CustomDialog.vue';
const props = {
    prop: 'anything',
};
const listeners = {
    listener: () => {
        // React to something
    }
};
const options = {
    stack: 'dialog'
};
DialogManager.createPromise(CustomDialog, props, listeners, options).then(() => {
    // Resolved successfully
}).catch(() => {
    // Rejected
});`;

        return {
            Dialog,
            onClick,
            showCloseButton,
            color,
            code,
            code2,
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