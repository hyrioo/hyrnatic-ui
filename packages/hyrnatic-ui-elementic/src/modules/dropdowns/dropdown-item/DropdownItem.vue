<template>
    <hr-dropdown-item :class="[css_root]" tabindex="-1" v-bind="core.props"
                      v-on="core.listeners">
        <slot>
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" />
            <span :class="[css_ec('label')]">{{ label }}</span>
        </slot>
    </hr-dropdown-item>
</template>

<script lang="ts">
import {
    defineComponent,
    SetupContext,
    inject,
    onUpdated, onMounted, onUnmounted,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreDropdownItemDisabledProp,
    coreDropdownItemSetup,
    CoreDropdownItemSlotProps,
    coreDropdownItemLabelProp,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-dropdown-item',
    props: {
        ...coreDropdownItemDisabledProp,
        ...coreDropdownItemLabelProp,
        icon: {
            type: String,
            default: null,
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const asProps = (slotProps: CoreDropdownItemSlotProps) => ({
            class: {
                '-focused': slotProps.focused, '-disabled': slotProps.disabled,
            },
            onClick: slotProps.onClick,
        });
        const core = coreDropdownItemSetup().as('div', asProps).props(['disabled']).events(['click'])
            .build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
