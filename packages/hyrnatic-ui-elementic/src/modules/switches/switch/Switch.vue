<template>
    <hr-checkbox v-show="visible" v-slot="props" v-bind="core.props" v-on="core.listeners">
        <span v-if="$slots.leftText || leftText" :class="[css_ec('left-label')]">
            <slot name="leftText">
                {{ leftText }}
            </slot>
        </span>
        <div :class="[css_ec('container')]">
            <input :class="[css_ec('back')]" :checked="props.state" type="checkbox" :disabled="props.disabled"
                   @change="props.onChange" @focus="hasFocus = true" @blur="hasFocus = false"
            />
            <span :class="[css_ec('back-inner')]" />
            <span :class="[css_ec('dot')]" />
        </div>
        <span v-if="$slots.default || rightText" :class="[css_ec('right-label')]">
            <slot name="rightText">
                {{ rightText }}
            </slot>
        </span>
    </hr-checkbox>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreCheckboxDisabledProp,
    coreCheckboxIndeterminateProp,
    coreCheckboxModelValueProp,
    coreCheckboxValueProp,
    coreCheckboxVisibleProp,
    coreCheckboxSetup,
    CoreCheckboxSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-switch',
    props: {
        ...coreCheckboxDisabledProp,
        ...coreCheckboxVisibleProp,
        ...coreCheckboxModelValueProp,
        ...coreCheckboxValueProp,

        leftText: {
            type: String,
            default: '',
        },
        rightText: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const hasFocus = ref(false);

        const asProps = (slotProps: CoreCheckboxSlotProps) => ({
            class: [componentCssHelpers.css_root.value, {
                '-focus': hasFocus, '-checked': slotProps.state, '-indeterminate': slotProps.indeterminate, '-disabled': slotProps.disabled,
            }],
        });
        const core = coreCheckboxSetup().as('label', asProps).props(['modelValue', 'value', 'disabled', 'visible']).events(['update:modelValue'])
            .build();

        return {
            core,
            hasFocus,
            ...componentCssHelpers,
        };
    },
});
</script>
