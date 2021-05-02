<template>
    <h-drawer title="Some dialog title" :placement="placement">
        This is dynamic content: {{ text }}
        <br />
        Counter: {{ counter }}
        <br /><br />
        <h-button label="Emit 'something'" @click="something" />
        <br /><br />
        <h-button label="Emit 'something-more' after confirm" @click="confirmAgain" />
        <br /><br />
        <h-button label="Emit 'something-more' after confirm dialog" @click="confirmAgainDialog" />

        <template #footer>
            <h-button label="Close" styling="negative" style="margin-right: 12px" @click="close" />
            <h-button label="Save" @click="close" />
        </template>
    </h-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
import ConfirmDrawer from './ConfirmDrawer.vue';
import ConfirmDialog from './ConfirmDialog.vue';

export default defineComponent({
    name: 'SampleDrawer',
    props: {
        text: {
            type: String,
        },
        counter: {
            type: Number,
        },
        placement: {
            type: String,
            default: 'right',
        },
    },
    emits: ['something', 'something-more', 'resolve'],
    setup(props, ctx: SetupContext) {
        const { resolve } = DialogManager.setupDialog();
        const something = () => {
            ctx.emit('something');
        };
        const confirmAgain = () => {
            DialogManager.createPromise(ConfirmDrawer, { }, { }, { stack: 'drawer' }).then(() => {
                ctx.emit('something-more');
            }).catch(() => {});
        };
        const confirmAgainDialog = () => {
            DialogManager.createPromise(ConfirmDialog, { }, { }, { stack: 'dialog' }).then(() => {
                ctx.emit('something-more');
            }).catch(() => {});
        };
        const close = () => {
            resolve({ status: 'test', value: 1 });
        };

        return {
            something,
            confirmAgain,
            confirmAgainDialog,
            close,
        };
    },
});
</script>
