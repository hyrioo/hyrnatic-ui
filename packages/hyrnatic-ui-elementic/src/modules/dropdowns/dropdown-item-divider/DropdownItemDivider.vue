<template>
    <div v-if="visible" :class="[css_root]" />
</template>

<script lang="ts">
import { computed, defineComponent, inject, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import { CoreDropdownProvide } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-dropdown-item-divider',
    setup(props, ctx: SetupContext) {
        const dropdown = inject<CoreDropdownProvide>('dropdown');
        const visible = computed(() => {
            return dropdown.itemsVisible.value;
        });

        return {
            ...componentCss(),
            visible,
        };
    },
});
</script>
