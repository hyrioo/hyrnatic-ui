<template>
    <hr-radio-button v-slot="props" :class="[css_root, {'-focus': hasFocus, '-bordered': bordered}]" v-bind="core.props" v-on="core.listeners">
        <span :class="[css_ec('container')]">
            <input :class="[css_ec('input')]" :checked="props.state" type="radio" :disabled="props.disabled" @change="props.onChange" @focus="hasFocus = true" @blur="hasFocus = false" />
            <div :class="[css_ec('check-icon')]" />
        </span>
        <span v-if="$slots.default || label" :class="[css_ec('label')]">
            <slot>
                {{ label }}
            </slot>
        </span>
    </hr-radio-button>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, SetupContext,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import HrRadioButton, {
    coreRadioButtonDisabledProp,
    coreRadioButtonModelValueProp,
    coreRadioButtonValueProp,
    setup,
    SlotProps,
} from '@core/modules/radio-buttons/radio-button/RadioButton';

export default defineComponent({
    name: 'h-radio-button',
    components: { HrRadioButton },
    props: {
        ...coreRadioButtonDisabledProp,
        ...coreRadioButtonModelValueProp,
        ...coreRadioButtonValueProp,

        label: {
            type: String,
            default: '',
        },
        bordered: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const hasFocus = ref(false);

        const asProps = (slotProps: SlotProps) => ({
            class: { '-checked': slotProps.state, '-disabled': slotProps.disabled },
        });
        const core = setup().as('label', asProps).props(['modelValue', 'value', 'disabled']).events(['update:modelValue'])
            .build();

        return {
            core,
            hasFocus,
            ...componentCss(),
        };
    },
});
</script>
