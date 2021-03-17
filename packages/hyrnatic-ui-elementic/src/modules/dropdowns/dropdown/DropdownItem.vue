<template>
    <hr-dropdown-item :class="[css_root]" tabindex="-1" v-bind="core.props" v-on="core.listeners">
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
import componentCss from '@elementic/utils/component-css';
import HrDropdownItem, { coreDropdownItemDisabledProp, setup, SlotProps } from '@core/modules/dropdowns/dropdown/DropdownItem';

export default defineComponent({
    name: 'h-dropdown-item',
    components: { HrDropdownItem },
    props: {
        ...coreDropdownItemDisabledProp,
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: null,
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const updatePopper = inject<Function>('updatePopper');

        onMounted(() => updatePopper());
        onUnmounted(() => updatePopper());
        onUpdated(() => updatePopper());

        const asProps = (slotProps: SlotProps) => ({
            class: {
                '-focused': slotProps.focused, '-disabled': slotProps.disabled,
            },
            onClick: slotProps.onClick,
        });
        const core = setup().as('div', asProps).props(['disabled']).events(['click'])
            .build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
