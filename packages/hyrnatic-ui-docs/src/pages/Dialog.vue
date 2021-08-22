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
            <component-preview :code="templateExample">
                <template #preview>
                    <h-button label="Open dialog" @click="onClick" />
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
            <p>First add the wrapper to your layout component.</p>
            <code-example :code='wrapperExample' language="html-vue"/>
            <p>To open a dialog you must use the <span class="inline-highlight">DialogManager</span>, and import the component to wish to open.</p>
            <code-example :code="usageExample" language="js" />
            <p>Your custom dialog must call <span class="inline-highlight">DialogManager.setupDialog()</span> in the setup.</p>
            <code-example :code="dialogExample" language="js" />
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
import Dialog from '../../../hyrnatic-ui-elementic/src/modules/dialogs/dialog/dialog-docs';
import SampleDialog from '../components/SampleDialog.vue';
import { dialogExample, templateExample, usageExample, wrapperExample } from '../snippets/dialog';

export default defineComponent({
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

            dialog.promise.then((result: any) => {
                console.log('resolve', result);
            }).catch((reason: any) => {
                console.log('reject', reason);
            });
        };

        return {
            Dialog,
            onClick,
            showCloseButton,
            color,
            templateExample,
            usageExample,
            dialogExample,
            wrapperExample,
        };
    },
});
</script>

<style lang="scss" scoped>
</style>