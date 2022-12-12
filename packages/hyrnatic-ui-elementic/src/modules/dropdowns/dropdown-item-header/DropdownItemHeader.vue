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
import { CoreDropdownProvide } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-dropdown-item-header',
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
