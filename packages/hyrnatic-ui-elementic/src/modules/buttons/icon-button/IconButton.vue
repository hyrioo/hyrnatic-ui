<template>
    <hr-button v-show="visible" v-bind="core.props" v-on="core.listeners">
        <h-icon :class="[css_ec('loading-icon')]" icon="loading" size="16px" />

        <span :class="[css_ec('content')]">
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
        </span>
    </hr-button>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreButtonDisabledProp,
    coreButtonLoadingProp,
    coreButtonVisibleProp,
    coreButtonSetup,
    CoreButtonSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-icon-button',
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        ...coreButtonVisibleProp,
        icon: {
            type: String,
            required: true,
        },
        styling: {
            type: String as PropType<'primary' | 'secondary' | 'negative' | 'success' | 'warning' | 'danger' | 'none'>,
            default: 'primary',
        },
        size: {
            type: String as PropType<'normal' | 'small'>,
            default: 'normal',
        },
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-styling-${props.styling}`, `-size-${props.size}`, { '-loading': slotProps.loading }],
            disabled: slotProps.disabled,
            onClick: slotProps.onClick,
            type: 'button',
        });
        const core = coreButtonSetup().as('button', asProps).props(['disabled', 'loading', 'visible']).events(['click']).build();

        return {
            core,
            ...componentCss(),
        };
    },
});
</script>
