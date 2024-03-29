<template>
    <hr-checkbox v-show="visible" v-slot="props" v-bind="core.props" v-on="core.listeners">
        <span :class="[css_ec('container')]">
            <input :class="[css_ec('input')]" :checked="props.state" type="checkbox" :disabled="props.disabled" @change="props.onChange" @focus="hasFocus = true" @blur="hasFocus = false" />
            <h-icon v-show="!props.indeterminate" :class="[css_ec('check-icon')]" :icon="CheckboxIcons.checkStroke" size="10px" :fills="null" />
            <h-icon v-show="props.indeterminate" :class="[css_ec('indeterminate-icon')]" :icon="Icons.minus" size="10px" :fills="null" />
        </span>
        <span v-if="$slots.default || label" :class="[css_ec('label')]">
            <slot>
                {{ label }}
            </slot>
        </span>
    </hr-checkbox>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, SetupContext, onMounted,
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
import Icons from '../../../icons';
import { CheckboxIcons } from '../install';

export default defineComponent({
    name: 'h-checkbox',
    props: {
        ...coreCheckboxDisabledProp,
        ...coreCheckboxIndeterminateProp,
        ...coreCheckboxVisibleProp,
        ...coreCheckboxModelValueProp,
        ...coreCheckboxValueProp,
        label: {
            type: String,
            default: null,
        },
        bordered: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const hasFocus = ref(false);

        const asProps = (slotProps: CoreCheckboxSlotProps) => ({
            class: [componentCssHelpers.css_root.value, {
                '-focus': hasFocus.value, '-bordered': props.bordered, '-checked': slotProps.state, '-indeterminate': slotProps.indeterminate, '-disabled': slotProps.disabled,
            }],
        });
        const core = coreCheckboxSetup().as('label', asProps).props(['modelValue', 'value', 'indeterminate', 'disabled', 'visible']).events(['update:modelValue'])
            .build();

        return {
            Icons,
            CheckboxIcons,
            asProps,
            core,
            hasFocus,
            ...componentCssHelpers,
        };
    },
});
</script>
