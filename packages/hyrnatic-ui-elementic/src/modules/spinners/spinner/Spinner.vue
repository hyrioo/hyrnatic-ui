<template>
    <div :class="[css_root, `-color-${color}`]" :style="{width: size, height: size, '--border-thickness': thickness}" />
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';

export default defineComponent({
    name: 'h-spinner',
    props: {
        size: {
            type: String,
            default: '32px',
        },
        thickness: {
            type: String,
            default: '4px',
        },
        color: {
            type: String as PropType<'primary' | 'negative' | 'success' | 'warning' | 'danger' | 'current'>,
            default: 'primary',
        },
    },
    setup(props, ctx: SetupContext) {

        return {
            ...componentCss(),
        };
    },
});
</script>
