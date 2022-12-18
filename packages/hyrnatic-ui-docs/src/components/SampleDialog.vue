<template>
    <h-dialog title="Some dialog title" :color="color" :show-close-button="showCloseButton">
        Dynamic counter: {{ counter }} <br /> <br />
        Nested status: {{ nested }} <br /> <br />

        <h-button label="Increment counter" @click="addCounter" style="margin-right: 12px" />
        <h-button label="Open nested dialog" @click="openNestedDialog" />
        <h-select v-model="value" placeholder="Select option..." style="width: 100%;">
            <h-select-item value="1" label="Loooong option 1" />
            <h-select-item value="2" label="Option 2" />
            <h-select-item-divider />
            <h-select-item value="3" label="Option 3" disabled />
            <h-select-item value="4" label="Option 4" />
        </h-select>

        <template #footer>
            <h-button label="Close" @click="close" />
        </template>
    </h-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import ConfirmDialog from './ConfirmDialog.vue';

export default defineComponent({
    name: 'SampleDialog',
    props: {
        showCloseButton: {
            type: Boolean,
        },
        color: {
            type: String,
        },
        text: {
            type: String,
        },
        counter: {
            type: Number,
        },
    },
    emits: ['something'],
    setup(props, ctx: SetupContext) {
        const nested = ref('-');
        const { resolve } = DialogManager.setupDialog();
        const value = ref();
        const addCounter = () => {
            ctx.emit('something');
        };
        const openNestedDialog = () => {
            DialogManager.createPromise(ConfirmDialog, { }, { }, { stack: 'dialog' }).then(() => {
                nested.value = 'Resolved';
            }).catch(() => {
                nested.value = 'Rejected';
            });
        };
        const close = () => {
            resolve({ status: 'test', value: 1 });
        };

        return {
            value,
            addCounter,
            openNestedDialog,
            close,
            nested,
        };
    },
});
</script>
