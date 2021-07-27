<template>
    <h-dialog title="Some dialog title" :color="color" :show-close-button="showCloseButton">
        Dynamic counter: {{ counter }} <br /> <br />
        Nested status: {{ nested }} <br /> <br />

        <h-button label="Add to counter" @click="addCounter" style="margin-right: 12px" />
        <h-button label="Open nested dialog" @click="openNestedDialog" />

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
    emits: ['something', 'resolve'],
    setup(props, ctx: SetupContext) {
        const nested = ref('-');
        const { resolve } = DialogManager.setupDialog();
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
            addCounter,
            openNestedDialog,
            close,
            nested,
        };
    },
});
</script>
