<template>
    <hr-button v-show="visible" v-bind="core.props" v-on="core.listeners">
        <span :class="[css_ec('content')]">
            <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
            <div :class="[css_ec('loading-container')]">
                <div :class="[css_ec('loading-spinner')]" />
            </div>
            <slot>
                <span v-if="$slots.default || label" :class="[css_ec('text')]">
                    {{ label }}
                </span>
            </slot>
        </span>
    </hr-button>
</template>

<script lang="tsx">
import { computed, defineComponent, PropType } from 'vue';
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
    name: 'h-button',
    emits: ['click'],
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        ...coreButtonVisibleProp,
        label: {
            type: [String, Number],
            default: null,
        },
        icon: {
            type: String,
            default: null,
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
            type: String as PropType<'subtle' | 'simple' | 'block' | 'none'>,
            default: 'simple',
        },
        size: {
            type: String as PropType<'small' | 'normal' | 'large'>,
            default: 'normal',
        },
        type: {
            type: String as PropType<'button' | 'submit' | 'reset'>,
            default: 'button',
        },
    },
    setup(props, ctx) {
        const componentCssHelpers = componentCss();
        const iconOnly = computed(() => !ctx.slots.default && !props.label);

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-styling-${props.styling}`, `-color-${props.color}`, `-size-${props.size}`, {
                '-loading': slotProps.loading,
                '-icon-only': iconOnly.value,
                '-has-icon': props.icon,
                '-rounded': props.rounded
            }],
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
