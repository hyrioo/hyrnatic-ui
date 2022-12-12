<template>
    <hr-select-item v-slot="props" tabindex="-1" :class="[css_root]" v-bind="core.props"
                    v-on="core.listeners">
        <slot>
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16" />
            <span :class="[css_ec('label')]">{{ label }}</span>
        </slot>
        <div :class="[css_ec('checkmark')]">
            <transition name="fade-fast">
                <h-icon v-show="props.selected" :icon="Icons.check" size="16px" />
            </transition>
        </div>
    </hr-select-item>
</template>

<script lang="ts">
import {
    defineComponent, inject, onMounted, onUnmounted, onUpdated, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreSelectItemDisabledProp,
    coreSelectItemValueProp,
    coreSelectItemLabelProp,
    coreSelectItemSetup,
    CoreSelectItemSlotProps,
    CoreSelectProvide,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-select-item',
    props: {
        ...coreSelectItemDisabledProp,
        ...coreSelectItemValueProp,
        ...coreSelectItemLabelProp,
        icon: {
            type: String,
            default: null,
        },
    },
    setup(props, ctx: SetupContext) {
        const asProps = (slotProps: CoreSelectItemSlotProps) => ({
            class: { '-selected': slotProps.selected, '-focused': slotProps.focused, '-disabled': slotProps.disabled },
            onClick: slotProps.onClick,
        });
        const core = coreSelectItemSetup().as('div', asProps).props(['value', 'label', 'disabled']).build();

        return {
            Icons,
            core,
            ...componentCss(),
        };
    },
});
</script>
