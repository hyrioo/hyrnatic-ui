<template>
    <hr-button v-show="visible" v-bind="core.props" v-on="core.listeners">
        <h-icon :class="[css_ec('loading-icon')]" :icon="Icons.loading" size="16px" />

        <span :class="[css_ec('text')]">
            <slot>
                {{ label }}
            </slot>
        </span>
    </hr-button>
</template>

<script lang="tsx">
import { defineComponent, PropType, SetupContext } from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreButtonDisabledProp,
    coreButtonLoadingProp,
    coreButtonVisibleProp,
    coreButtonSetup,
    CoreButtonSlotProps,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-link-button',
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        ...coreButtonVisibleProp,
        label: {
            type: [String, Number],
            default: null,
        },
        color: {
            type: String as PropType<'primary' | 'negative' | 'success' | 'warning' | 'danger' | 'none'>,
            default: 'primary',
        },
        size: {
            type: String as PropType<'normal' | 'small'>,
            default: 'normal',
        },
        type: {
            type: String as PropType<'button' | 'submit' | 'reset'>,
            default: 'button',
        }
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-color-${props.color}`, `-size-${props.size}`, { '-loading': slotProps.loading }],
            disabled: slotProps.disabled,
            onClick: slotProps.onClick,
            type: props.type,
        });
        const core = coreButtonSetup().as('button', asProps).props(['disabled', 'loading', 'visible']).events(['click'])
            .build();

        return {
            Icons,
            core,
            ...componentCssHelpers,
        };
    },
});
</script>
