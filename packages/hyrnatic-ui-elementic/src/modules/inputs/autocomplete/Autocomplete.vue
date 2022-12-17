<template>
    <hr-autocomplete :ref="(com) => setCoreInput(com)" v-slot="props" :class="[css_root, {'-focus': hasFocus}]"
                     v-bind="core.props" v-on="core.listeners" @focused-item-changed="onFocusedItemChanged">
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
               @input="props.modelValue = $event.target.value" @focus="onFocus" @blur="onBlur"
               @keydown="props.onKeyEvents"
        />
        <h-icon v-if="suffixIcon" :class="[css_ec('suffix-icon')]" :icon="suffixIcon" size="16px" />
        <div v-if="$slots.suffix || suffix" :class="[css_ec('suffix')]">
            <slot name="suffix">
                {{ suffix }}
            </slot>
        </div>
        <slot name="customSuffix" />

        <h-floating as="div" :class="[css_ec('list-container')]"
                    :reference="coreAutocompleteEl" transition="fade-fast"
                    :visible="props.listVisible" placement="bottom-start" :middleware="floatingMiddleware"
                    @hide="props.clearFocusedItem()" @click-outside="onClickOutside"
        >
            <div :class="[css_ec('list-box')]" @keydown="props.onKeyEvents" :style="{maxHeight: listMaxHeight}">
                <h-scroll-container ref="scrollContainer">
                    <slot :items="props.items" :focused-item="props.focusedItem" :on-item-click="props.onItemClick">
                        <ul :class="[css_ec('list')]">
                            <li v-for="(item, index) in props.items" :ref="el => items[index] = el"
                                :class="[css_ec('list-item'), {'-focused': item === props.focusedItem}]"
                                @click="props.onItemClick(item)">{{ item }}
                            </li>
                        </ul>
                    </slot>
                </h-scroll-container>
            </div>
        </h-floating>
    </hr-autocomplete>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, nextTick, onBeforeUpdate, onMounted, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreAutocompleteSetup,
    coreAutocompleteDisabledProp,
    coreAutocompleteItemsProp,
    coreAutocompleteModelModifiersProp,
    coreAutocompleteModelValueProp,
    CoreAutocompleteSlotProps,
    CoreAutocompleteReturn,
    CoreFloatingClickOutsideEvent,
} from '@hyrioo/hyrnatic-ui-core';
import { size } from '@floating-ui/dom';

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
        const items = ref<HTMLElement[]>();
        const coreAutocomplete = ref<CoreAutocompleteReturn>();
        const coreAutocompleteEl = ref<HTMLElement>();
        const listMaxHeight = ref('');
        const floatingMiddleware = computed(() => {
            return [
                size({
                    padding: 8,
                    apply(data) {
                        Object.assign(data.elements.floating.style, {
                            width: `${data.rects.reference.width}px`,
                        });
                        listMaxHeight.value = `${data.availableHeight}px`;
                    }
                })
            ];
        });

        onBeforeUpdate(() => {
            items.value = [];
        });

        const setCoreInput = (com) => {
            coreAutocomplete.value = com;
            coreAutocompleteEl.value = com ? com.$el : null;
        };

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

        const onClickOutside = (value: CoreFloatingClickOutsideEvent) => {
            if (value.outsideFloating && value.outsideReference) {
                hideList();
            }
        };

        const onFocusedItemChanged = (item: any) => {
            const index = props.items.findIndex((i) => i === item);
            const el = items.value[index];
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        };

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
            floatingMiddleware,
            listMaxHeight,
            input,
            items,
            scrollContainer,
            hasFocus,
            onFocus,
            onBlur,
            core,
            onClickOutside,
            onFocusedItemChanged,
            ...componentCss(),

            focus,
            hideList,
        };
    },
});
</script>
