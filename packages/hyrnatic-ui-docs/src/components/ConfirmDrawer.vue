<template>
    <h-drawer title="Confirm" :placement="placement">
        {{ text }}<br /><br />
        <template #footer>
            <h-button label="Abort" styling="negative" style="margin-right: 12px" @click="reject" />
            <h-button label="Confirm" @click="confirmAgain" />
        </template>
    </h-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue';
import { DialogManager } from '@hyrioo/hyrnatic-ui-elementic';

export default defineComponent({
    name: 'ConfirmDrawer',
    props: {
        text: {
            type: String,
            default: 'Some action',
        },
        placement: {
            type: String,
            default: 'right',
        },
    },
    setup(props, ctx: SetupContext) {
        const { resolve, reject } = DialogManager.setupDialog();

        const confirmAgain = () => {
            resolve();
        };

        return {
            resolve,
            confirmAgain,
            reject,
        };
    },
});
</script>
