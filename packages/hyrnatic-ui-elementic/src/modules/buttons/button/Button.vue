<template>
    <hr-button v-show="visible" v-bind="core.props" v-on="core.listeners">
        <h-icon :class="[css_ec('loading-icon')]" icon="loading" size="16px" />

        <span :class="[css_ec('content')]">
            <slot>
                <h-icon v-if="icon" :class="[css_ec('icon')]" :icon="icon" size="16px" />
                <span v-if="$slots.default || label" :class="[css_ec('text')]">
                    {{ label }}
                </span>
            </slot>
        </span>
    </hr-button>
</template>

<script lang="tsx">
import { computed, defineComponent, PropType, SetupContext } from 'vue';
import componentCss from '@/utils/component-css';
import {
    coreButtonDisabledProp,
    coreButtonLoadingProp,
    coreButtonVisibleProp,
    coreButtonSetup,
    CoreButtonSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-button',
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
        const iconOnly = computed(() => !ctx.slots.default && !props.label);

        const asProps = (slotProps: CoreButtonSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-styling-${props.styling}`, `-size-${props.size}`, { '-loading': slotProps.loading, '-icon-only': iconOnly.value, '-has-icon': props.icon }],
            disabled: slotProps.disabled,
            onClick: slotProps.onClick,
        });
        const core = coreButtonSetup().as('button', asProps).props(['disabled', 'loading', 'visible']).events(['click'])
            .build();

        return {
            core,
            ...componentCssHelpers,
        };
    },
    /*render() {
        return <hr-buttons v-slots={{
            default: (props) => (
                <buttons v-show={this.$props.visible} onClick={props.onClick}
                    class={[componentCss().css_root.value, `-styling-${this.$props.styling}`, `-size-${this.$props.size}`, this.iconOnly ? '-icon-only' : null, this.icon ? '-has-icon' : null, props.loading ? '-loading' : null]}>
                    <h-icon class={[componentCss().css_ec('loading-icon')]} icon="loading" size="16px" />
                    {this.$props.label}
                </buttons>
            ),
        }} />;
    },*/
});
</script>
