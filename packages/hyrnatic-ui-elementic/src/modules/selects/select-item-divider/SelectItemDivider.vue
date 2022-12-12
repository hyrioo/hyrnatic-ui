<template>
    <div v-if="visible" :class="[css_root]" />
</template>

<script lang="ts">
import { computed, defineComponent, inject, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import { CoreSelectProvide } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-select-item-divider',
    setup(props, ctx: SetupContext) {
        const select = inject<CoreSelectProvide>('select');
        const visible = computed(() => {
            return select.itemsVisible.value;
        });

        return {
            ...componentCss(),
            visible,
        };
    },
});
</script>
