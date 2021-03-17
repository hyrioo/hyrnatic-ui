<template>
    <h-dialog title="Some dialog title" :show-close-icon="closable">
        This is dynamic content: {{ text }} <br />
        Counter: {{ counter }} <br />
        <h-checkbox v-model="closable" /> <br />
        <h-button label="Something" @click="something" />
        <h-button label="Something More" @click="somethingMore" />

        <template #footer>
            <h-button label="Close" @click="close" />
        </template>
    </h-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { createPromise, setupDialog } from '@core/modules/dialogs/dialog/DialogManager';
import ConfirmDialog from './ConfirmDialog.vue';

export default defineComponent({
    name: 'SampleDialog',
    props: {
        text: {
            type: String,
        },
        counter: {
            type: Number,
        },
    },
    emits: ['something', 'something-more', 'resolve'],
    setup(props, ctx: SetupContext) {
        const { resolve } = setupDialog();
        const closable = ref(true);
        const something = () => {
            ctx.emit('something');
        };
        const somethingMore = () => {
            createPromise(ConfirmDialog, { }, { }, { stack: 'dialog' }).then(() => {
                ctx.emit('something-more');
            }).catch(() => {});
        };
        const close = () => {
            resolve({ status: 'test', value: 1 });
        };

        return {
            closable,
            something,
            somethingMore,
            close,
        };
    },
});
</script>
