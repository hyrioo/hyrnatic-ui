<template>
    <hr-autocomplete :ref="(el) => setCoreInput(el)" v-slot="props" :class="[css_root, {'-focus': hasFocus}]" v-bind="core.props" v-on="core.listeners" @item-selected="onItemSelected" @focused-item-changed="onFocusedItemChanged">
        <slot name="customPrefix" />
        <div v-if="$slots.prefix || prefix" :class="[css_ec('prefix')]">
            <slot name="prefix">
                {{ prefix }}
            </slot>
        </div>
        <h-icon v-if="prefixIcon" :class="[css_ec('prefix-icon')]" :icon="prefixIcon" size="16px" />
        <input ref="input" :class="[css_ec('input')]" :value="props.modelValue" :type="type"
               :max-length="maxLength" :min-length="minLength" :disabled="props.disabled"
               :placeholder="placeholder" :readonly="props.readonly" :autocomplete="autocomplete"
               @input="props.modelValue = $event.target.value" @focus="onFocus" @blur="onBlur" @keydown="props.onKeyEvents"
        />
        <h-icon v-if="suffixIcon" :class="[css_ec('suffix-icon')]" :icon="suffixIcon" size="16px" />
        <div v-if="$slots.suffix || suffix" :class="[css_ec('suffix')]">
            <slot name="suffix">
                {{ suffix }}
            </slot>
        </div>
        <slot name="customSuffix" />

        <h-popper ref="popper" :classes="[css_ec('list-container')]" :reference="coreAutocompleteEl" transition="fade-fast"
                  :visible="props.listVisible" :options="{placement: `bottom`}" :modifiers="modifiers"
                  @hide="props.clearFocusedItem()" @click-outside="onClickOutside"
        >
            <div :class="[css_ec('list-box')]" @keydown="props.onKeyEvents">
                <h-scroll-container ref="scrollContainer">
                    <slot :items="props.items" :focused-item="props.focusedItem" :on-item-click="props.onItemClick">
                        <ul :class="[css_ec('list')]">
                            <li v-for="item in props.items" :class="[css_ec('list-item'), {'-focused': item === props.focusedItem}]" @click="props.onItemClick(item)">{{ item }}</li>
                        </ul>
                    </slot>
                </h-scroll-container>
            </div>
        </h-popper>
    </hr-autocomplete>
</template>

<script lang="ts">
import {
    defineComponent, nextTick, onMounted, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreAutocompleteSetup,
    coreAutocompleteDisabledProp,
    coreAutocompleteItemsProp,
    coreAutocompleteModelModifiersProp,
    coreAutocompleteModelValueProp,
    CoreAutocompleteSlotProps,
    corePopperMatchReferenceSizeModifier,
    CorePopperComponent,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-autocomplete',
    props: {
        ...coreAutocompleteDisabledProp,
        ...coreAutocompleteItemsProp,
        ...coreAutocompleteModelValueProp,
        ...coreAutocompleteModelModifiersProp,
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
    emits: ['update:modelValue', 'focus', 'blur', 'itemSelected', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const input = ref<HTMLInputElement>();
        const scrollContainer = ref<HTMLElement>();
        const coreAutocomplete = ref();
        const coreAutocompleteEl = ref<HTMLElement>();
        const popper = ref<CorePopperComponent>();
        const modifiers = [
            ...corePopperMatchReferenceSizeModifier,
        ];

        console.log(scrollContainer);
        /*onMounted(() => {
            nextTick(() => {
                popper.value.updatePopper();
            });
        });*/

        const setCoreInput = (el) => {
            coreAutocomplete.value = el;
            coreAutocompleteEl.value = el ? el.$el : null;
        }

        const hasFocus = ref(false);
        const onFocus = () => {
            hasFocus.value = true;
            coreAutocomplete.value.showList();
            ctx.emit('focus');
        };
        const onBlur = () => {
            hasFocus.value = false;
            ctx.emit('blur');
        };
        const focus = () => {
            coreAutocomplete.value.focusInput();
        };
        const hideList = () => {
            coreAutocomplete.value.hideList();
        };

        const onClickOutside = (value) => {
            console.log('onClickOutside', value);
            if (value.outsidePopper && value.outsideReference) {
                hideList();
            }
        };

        const onItemSelected = (item) => {
            console.log('onItemSelected', item);
        }
        const onFocusedItemChanged = (item) => {
            //TODO: Scroll to item
        }

        const asProps = (slotProps: CoreAutocompleteSlotProps) => ({
            class: {
                '-disabled': slotProps.disabled,
            }
        });
        const core = coreAutocompleteSetup(input).as('div', asProps).props(['modelValue', 'modelModifiers', 'disabled', 'items']).events(['update:modelValue', 'itemSelected', 'focusedItemChanged'])
            .build();

        return {
            setCoreInput,
            coreAutocompleteEl,
            modifiers,
            input,
            scrollContainer,
            hasFocus,
            onFocus,
            onBlur,
            popper,
            core,
            onClickOutside,
            onItemSelected,
            onFocusedItemChanged,
            ...componentCss(),

            focus,
            hideList,
        };
    },
});
</script>
