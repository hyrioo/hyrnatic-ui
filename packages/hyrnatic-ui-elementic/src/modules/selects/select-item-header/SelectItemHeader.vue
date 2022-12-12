<template>
    <div v-if="visible" :class="[css_root]">
        <slot>
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
            <span :class="[css_ec('text')]">{{ label }}</span>
        </slot>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, inject, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { CoreSelectProvide } from '@hyrioo/hyrnatic-ui-core';

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
