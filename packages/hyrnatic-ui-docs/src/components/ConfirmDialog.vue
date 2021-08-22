<template>
    <h-dialog title="Confirm" :show-close-button="false">
        {{ text }}<br /><br />
        <template #footer>
            <h-button label="Abort" styling="negative" style="margin-right: 12px" @click="reject" />
            <h-button label="Confirm" @click="confirmAgain" />
        </template>
    </h-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
// eslint-disable-next-line import/no-self-import
import ConfirmDialog from './ConfirmDialog.vue';

export default defineComponent({
    name: 'ConfirmDialog',
    props: {
        text: {
            type: String,
            default: 'Some action',
        },
    },
    setup(props, ctx: SetupContext) {
        const { resolve, reject } = DialogManager.setupDialog();
        const confirm = ref(false);

        const confirmAgain = () => {
            if (confirm.value) {
                DialogManager.createPromise(ConfirmDialog, {}, {}, { stack: 'dialog' }).then(() => {
                    resolve();
                }).catch(() => {
                });
            } else {
                resolve();
            }
        };

        return {
            confirm,
            resolve,
            confirmAgain,
            reject,
        };
    },
});
</script>
