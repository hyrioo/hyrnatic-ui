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
        <br /><br />
        <h-select v-model="value" placeholder="Select option..." style="width: 100%;">
            <h-select-item value="1" label="Loooong option 1" />
            <h-select-item value="2" label="Option 2" />
            <h-select-item-divider />
            <h-select-item value="3" label="Option 3" disabled />
            <h-select-item value="4" label="Option 4" />
        </h-select>

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
        const value = ref();
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
            value,
            something,
            confirmAgain,
            confirmAgainDialog,
            close,
        };
    },
});
</script>
