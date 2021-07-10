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
    name: 'h-button',
    docs: {
        slots: [
            {
                name: 'default',
                description: 'The content of the button. Note: this will also overwrite the icon',
                props: null,
            }
        ],
        events: [
            {
                event: 'click',
                description: 'Emitted when clicked, while not in loading or disabled state',
                parameters: null,
            }
        ]
    },
    emits: ['click'],
    props: {
        ...coreButtonDisabledProp,
        ...coreButtonLoadingProp,
        ...coreButtonVisibleProp,
        label: {
            type: [String, Number],
            default: null,
            docs: {
                origin: 'elementic',
                description: 'A simple way to define the content',
                type: ['string', 'number'],
                values: null,
                default: null,
            },
        },
        icon: {
            type: String,
            default: null,
            docs: {
                origin: 'elementic',
                description: 'Key for the icon registered in the IconRegistry',
                type: ['string'],
                values: null,
                default: null,
            },
        },
        rounded: {
            type: Boolean,
            default: false,
            docs: {
                origin: 'elementic',
                description: 'Style the button as rounded',
                type: ['boolean'],
                values: null,
                default: false,
            },
        },
        color: {
            type: String as PropType<'primary' | 'secondary' | 'negative' | 'success' | 'warning' | 'danger' | 'none'>,
            default: 'primary',
            docs: {
                origin: 'elementic',
                description: 'The color used by the styling',
                type: ['string'],
                values: ['primary', 'secondary', 'negative', 'success', 'warning', 'danger', 'none'],
                default: 'primary',
            },
        },
        styling: {
            type: String as PropType<'subtle' | 'simple' | 'block' | 'none'>,
            default: 'simple',
            docs: {
                origin: 'elementic',
                description: 'The styling of the button',
                type: ['string'],
                values: ['subtle', 'simple', 'block', 'none'],
                default: 'simple',
            },
        },
        size: {
            type: String as PropType<'small' | 'normal'>,
            default: 'normal',
            docs: {
                origin: 'elementic',
                description: 'The size of the button',
                type: ['string'],
                values: ['small', 'normal'],
                default: 'normal',
            },
        },
        type: {
            type: String as PropType<'button' | 'submit' | 'reset'>,
            default: 'button',
            docs: {
                origin: 'elementic',
                description: 'The HTML type set on the button',
                type: ['string'],
                values: ['button', 'submit', 'reset'],
                default: 'button',
            },
        }
    },
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const iconOnly = computed(() => !ctx.slots.default && !props.label);

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value,  `-styling-${props.styling}`,  `-color-${props.color}`, `-size-${props.size}`, { '-loading': slotProps.loading, '-icon-only': iconOnly.value, '-has-icon': props.icon, '-rounded': props.rounded }],
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
