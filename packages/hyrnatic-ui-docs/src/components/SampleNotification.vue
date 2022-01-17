<template>
    <h-notification :title="title" :color="color" />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, SetupContext } from 'vue';
import { NotificationManager } from '@hyrioo/hyrnatic-ui-elementic';

export default defineComponent({
    name: 'SampleNotification',
    props: {
        title: {
            type: String,
        },
        color: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary',
        },
    },
    emits: ['something'],
    setup(props, ctx: SetupContext) {
        const { reject } = NotificationManager.setupNotification();
        const nested = ref('-');
        const addCounter = () => {
            ctx.emit('something');
        };

        return {
            addCounter,
            reject,
            nested,
        };
    },
});
</script>
