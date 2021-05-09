<template>
    <div :class="[css_root]" />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';

export default defineComponent({
    name: 'h-select-item-divider',
    setup(props, ctx: SetupContext) {
        return {
            ...componentCss(),
        };
    },
});
</script>
