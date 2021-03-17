<template>
    <div :class="[css_root]">
        <slot>
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
            <span :class="[css_ec('text')]">{{ label }}</span>
        </slot>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, inject, onMounted, onUnmounted, onUpdated, SetupContext,
} from 'vue';
import componentCss from '@/utils/component-css';

export default defineComponent({
    name: 'h-select-item-header',
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: null,
        },
    },
    setup(props, ctx: SetupContext) {
        const updatePopper = inject<Function>('updatePopper');

        onMounted(() => updatePopper());
        onUnmounted(() => updatePopper());
        onUpdated(() => updatePopper());

        return {
            ...componentCss(),
        };
    },
});
</script>
