<template>
    <h-notification :title="title" :color="color">
        {{ text }}
    </h-notification>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, SetupContext } from 'vue';
import { NotificationManager } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'SimpleNotification',
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary',
        },
    },
    emits: ['something'],
    setup(props, ctx) {
        NotificationManager.setupNotification();

        return { };
    },
});
</script>
