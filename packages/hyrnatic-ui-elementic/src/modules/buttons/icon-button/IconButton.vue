<template>
    <hr-button v-show="visible" v-bind="core.props" v-on="core.listeners">
        <span :class="[css_ec('content')]">
            <h-icon :class="[css_ec('icon')]" :icon="icon" :size="iconSize" v-bind="iconOptions" />
            <div :class="[css_ec('loading-container')]">
                <div :class="[css_ec('loading-spinner')]" />
            </div>
        </span>
    </hr-button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from 'vue';
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
    name: 'h-icon-button',
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        ...coreButtonVisibleProp,
        icon: {
            type: String,
            required: true
        },
        iconOptions: {
            type: Object,
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String as PropType<'primary' | 'negative' | 'success' | 'warning' | 'danger' | 'none'>,
            default: 'primary',
        },
        styling: {
            type: String as PropType<'subtle' | 'simple' | 'block'>,
            default: 'simple',
        },
        size: {
            type: String as PropType<'small' | 'normal' | 'large'>,
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

        const iconSize = computed(() => {
            const sizes = {
                small: '12px',
                normal: '16px',
                large: '24px',
            };
            return sizes[props.size];
        })

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-styling-${props.styling}`,  `-color-${props.color}`, `-size-${props.size}`, { '-loading': slotProps.loading, '-rounded': props.rounded }],
            disabled: slotProps.disabled,
            onClick: slotProps.onClick,
            type: props.type,
        });
        const core = coreButtonSetup().as('button', asProps).props(['disabled', 'loading', 'visible']).events(['click']).build();

        return {
            Icons,
            core,
            iconSize,
            ...componentCss(),
        };
    },
});
</script>
