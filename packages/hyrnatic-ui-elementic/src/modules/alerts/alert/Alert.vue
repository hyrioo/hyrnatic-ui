<template>
    <div :class="[css_root, `-styling-${styling}`]">
        <div v-if="icon" :class="[css_ec('icon')]">
            <h-icon :icon="icon" :size="description ? '24px' : '16px'" />
        </div>
        <div :class="[css_ec('container')]">
            <div :class="[css_ec('title')]">{{ title }}</div>
            <div v-if="description" :class="[css_ec('description')]">{{ description }}</div>
        </div>
        <div v-if="showCloseButton || closeText" :class="[css_ec('close')]" @click="onClose">
            <h-icon v-if="showCloseButton" icon="close" size="16px" />
            <span v-else-if="closeText">{{ closeText }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import componentCss from '@/utils/component-css';

export default defineComponent({
    name: 'h-alert',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        icon: {
            type: String,
        },
        styling: {
            type: String,
            default: 'primary',
        },
        showCloseButton: {
            type: Boolean,
            default: false,
        },
        closeText: {
            type: String,
            default: null,
        },
    },
    emits: ['close'],
    setup(props, ctx: SetupContext) {
        const onClose = () => {
            ctx.emit('close');
        };

        return {
            onClose,
            ...componentCss(),
        };
    },
});
</script>
