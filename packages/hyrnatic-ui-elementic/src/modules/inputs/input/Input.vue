<template>
    <hr-input ref="coreInput" v-slot="props" :class="[css_root, {'-focus': hasFocus}]" v-bind="core.props" v-on="core.listeners">
        <slot name="customPrefix" />
        <div v-if="$slots.prefix || prefix" :class="[css_ec('prefix')]" :style="{width: prefixWidth}">
            <slot name="prefix">
                {{ prefix }}
            </slot>
        </div>
        <h-icon v-if="prefixIcon" :class="[css_ec('prefix-icon')]" :icon="prefixIcon" size="16px" />
        <input ref="input" :class="[css_ec('input')]" :value="props.modelValue" :type="type"
               :max-length="maxLength" :min-length="minLength" :min="min" :max="max" :disabled="props.disabled"
               :placeholder="placeholder" :readonly="props.readonly" :autocomplete="autocomplete"
               @input="props.modelValue = $event.target.value" @focus="onFocus" @blur="onBlur"
        />
        <h-icon v-if="suffixIcon" :class="[css_ec('suffix-icon')]" :icon="suffixIcon" size="16px" />
        <div v-if="$slots.suffix || suffix" :class="[css_ec('suffix')]" :style="{width: suffixWidth}">
            <slot name="suffix">
                {{ suffix }}
            </slot>
        </div>
        <slot name="customSuffix" />
    </hr-input>
</template>

<script lang="ts">
import {
    defineComponent, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreInputDisabledProp,
    coreInputModelModifiersProp,
    coreInputModelValueProp,
    coreInputReadonlyProp,
    coreInputTypeProp,
    coreInputSetup,
    CoreInputSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-input',
    props: {
        ...coreInputDisabledProp,
        ...coreInputReadonlyProp,
        ...coreInputTypeProp,
        ...coreInputModelValueProp,
        ...coreInputModelModifiersProp,
        placeholder: {
            type: String,
            default: null,
        },
        autocomplete: {
            type: String,
            default: null
        },

        minLength: {
            type: Number,
            default: null,
        },
        maxLength: {
            type: Number,
            default: null,
        },
        min: {
            type: Number,
            default: null,
        },
        max: {
            type: Number,
            default: null,
        },
        prefix: {
            type: String,
            default: null,
        },
        prefixWidth: {
            type: String,
            default: null,
        },
        suffix: {
            type: String,
            default: null,
        },
        suffixWidth: {
            type: String,
            default: null,
        },
        prefixIcon: {
            type: String,
            default: null,
        },
        suffixIcon: {
            type: String,
            default: null,
        },
    },
    emits: ['update:modelValue', 'focus', 'blur'],
    setup(props, ctx: SetupContext) {
        const input = ref<HTMLInputElement>();
        const coreInput = ref();

        const hasFocus = ref(false);
        const onFocus = () => {
            hasFocus.value = true;
            ctx.emit('focus');
        };
        const onBlur = () => {
            hasFocus.value = false;
            ctx.emit('blur');
        };
        const focus = () => {
            coreInput.value.focusInput();
        };

        const asProps = (slotProps: CoreInputSlotProps) => ({
            class: {
                '-readonly': slotProps.readonly,
                '-disabled': slotProps.disabled,
            },
            onClick: slotProps.onClick,
        });
        const core = coreInputSetup(input).as('div', asProps).props(['modelValue', 'modelModifiers', 'readonly', 'disabled', 'type']).events(['update:modelValue'])
            .build();

        return {
            coreInput,
            input,
            hasFocus,
            onFocus,
            onBlur,
            focus,
            core,
            ...componentCss(),
        };
    },
});
</script>
