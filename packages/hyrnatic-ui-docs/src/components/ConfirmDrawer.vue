<template>
    <h-drawer title="Confirm">
        {{ text }}<br /><br />
        <h-checkbox v-model="confirm" />
        <template #footer>
            <h-button label="Abort" styling="negative" style="margin-right: 12px" @click="reject" />
            <h-button label="Confirm" @click="confirmAgain" />
        </template>
    </h-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';
// eslint-disable-next-line import/no-self-import
import ConfirmDrawer from './ConfirmDrawer.vue';

export default defineComponent({
    name: 'ConfirmDrawer',
    props: {
        text: {
            type: String,
            default: 'Some action',
        },
    },
    emits: ['resolve', 'reject'],
    setup(props, ctx: SetupContext) {
        const { resolve, reject } = DialogManager.setupDialog();
        const confirm = ref(true);

        const confirmAgain = () => {
            if (confirm.value) {
                DialogManager.createPromise(ConfirmDrawer, {}, {}, { stack: 'drawer' }).then(() => {
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
