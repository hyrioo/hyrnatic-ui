<template>
    <h-drawer title="Some dialog title" :placement="placement">
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
        counter: {
            type: Number,
        },
        placement: {
            type: String,
            default: 'right',
        },
    },
    emits: ['addCounter', 'resolve'],
    setup(props, ctx: SetupContext) {
        const value = ref();
        const { resolve } = DialogManager.setupDialog();
        const something = () => {
            ctx.emit('addCounter');
        };
        const confirmAgain = () => {
            DialogManager.createPromise(ConfirmDrawer, { placement: props.placement }, { }, { stack: 'drawer' }).then(() => {
                ctx.emit('addCounter');
            }).catch(() => {});
        };
        const confirmAgainDialog = () => {
            DialogManager.createPromise(ConfirmDialog, { }, { }, { stack: 'dialog' }).then(() => {
                ctx.emit('addCounter');
            }).catch(() => {});
        };
        const close = () => {
            resolve({ status: 'test', value: 1 });
        };

        return {
            value,
            something,
            confirmAgain,
            confirmAgainDialog,
            close,
        };
    },
});
</script>
