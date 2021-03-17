<template>
    <hr-input ref="coreInput" v-slot="props" :class="[css_root, {'-focus': hasFocus}]" v-bind="core.props" v-on="core.listeners">
        <div v-if="$slots.prefix || prefix" :class="[css_ec('prefix')]">
            <slot name="prefix">
                {{ prefix }}
            </slot>
        </div>
        <h-icon v-if="prefixIcon" :class="[css_ec('prefix-icon')]" :icon="prefixIcon" size="16px" />
        <input ref="input" :class="[css_ec('input')]" :value="props.modelValue" :type="type"
               :max-length="maxLength" :min-length="minLength" :disabled="props.disabled"
               :placeholder="placeholder" :readonly="props.readonly"
               @input="props.modelValue = $event.target.value" @focus="onFocus" @blur="onBlur"
        />
        <h-icon v-if="suffixIcon" :class="[css_ec('suffix-icon')]" :icon="suffixIcon" size="16px" />
        <div v-if="$slots.suffix || suffix" :class="[css_ec('suffix')]">
            <slot name="suffix">
                {{ suffix }}
            </slot>
        </div>
    </hr-input>
</template>

<script lang="ts">
import {
    defineComponent, ref, SetupContext,
} from 'vue';
import componentCss from '@/utils/component-css';
import {
    coreInputDisabledProp,
    coreInputModelModifiersProp,
    coreInputModelValueProp,
    coreInputReadonlyProp,
    coreInputSetup,
    CoreInputSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-input',
    props: {
        ...coreInputDisabledProp,
        ...coreInputReadonlyProp,
        ...coreInputModelValueProp,
        ...coreInputModelModifiersProp,
        placeholder: {
            type: String,
            default: null,
        },
        type: {
            type: String,
        },
        size: {
            type: String,
            default: null,
        },

        minLength: {
            type: Number,
            default: null,
        },
        maxLength: {
            type: Number,
            default: null,
        },
        prefix: {
            type: String,
            default: null,
        },
        suffix: {
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
        const core = coreInputSetup(input).as('div', asProps).props(['modelValue', 'modelModifiers', 'readonly', 'disabled']).events(['update:modelValue'])
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
