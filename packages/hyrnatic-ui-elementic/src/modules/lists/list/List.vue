<template>
    <transition-group name="list-complete" tag="ul" :class="[css_root]">
        <slot />
    </transition-group>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import componentCss from '@/utils/component-css';

export default defineComponent({
    name: 'h-list',
    props: {
        animated: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, ctx: SetupContext) {
        return {
            ...componentCss(),
        };
    },
});
</script>
