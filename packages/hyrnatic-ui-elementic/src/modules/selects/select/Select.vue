<template>
    <hr-select ref="select" v-slot="props" :class="[css_root]" v-bind="core.props" v-on="core.listeners" @focused-item-changed="onFocusedItemChanged">
        <button ref="button" type="button" :class="[css_ec('button')]" :style="{...selectWidth}" :disabled="props.disabled" :title="props.modelValue && props.modelValue.length !== 0 ? props.selectedText : null" @click="props.onButtonClick" @keydown="props.onKeyEvents">
            <span :class="[css_ec('label'), {'-placeholder': !props.anythingSelected}]">
                <template v-if="props.anythingSelected">
                    <slot name="selection" :items="props.selectedItems">{{ props.selectedText }}</slot>
                </template>
                <template v-else>
                    <slot name="placeholder">{{ placeholder }}</slot>
                </template>
            </span>
            <transition name="fade-fast">
                <div v-if="!(props.allowClear && props.menuVisible)" :class="[css_ec('icon')]">
                    <h-icon :icon="Icons.chevronDown" size="16px" />
                </div>
            </transition>
            <transition name="fade-fast">
                <div v-if="props.allowClear && props.menuVisible" :class="[css_ec('clear-icon')]" title="Clear" @click="props.clearValue">
                    <h-icon :icon="Icons.close" size="16px" />
                </div>
            </transition>
        </button>

        <h-popper ref="popper" :classes="[css_ec('menu-container')]" :reference="button" keep transition="fade-fast"
                  :visible="props.menuVisible" :options="{placement: `bottom-${align}`}" :modifiers="modifiers"
                  @popper-size-changed="popperSizeChanged" @hide="props.clearFocusedItem()" @click-outside="onClickOutside"
        >
            <div :class="[css_ec('menu')]" @keydown="props.onKeyEvents">
                <h-scroll-container>
                    <slot />
                </h-scroll-container>
            </div>
        </h-popper>
    </hr-select>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, provide, onMounted, nextTick, SetupContext, PropType,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CorePopperComponent,
    coreSelectAllowClearProp,
    coreSelectDisabledProp,
    coreSelectHideOnSelectProp,
    coreSelectModelValueProp,
    coreSelectMultipleProp,
    coreSelectCompareProp,
    coreSelectSetup,
    CoreSelectSlotProps,
    CoreSelectItemInstance,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-select',
    props: {
        ...coreSelectDisabledProp,
        ...coreSelectAllowClearProp,
        ...coreSelectHideOnSelectProp,
        ...coreSelectMultipleProp,
        ...coreSelectModelValueProp,
        ...coreSelectCompareProp,
        placeholder: {
            type: String,
            default: '',
        },
        autoSize: {
            type: Boolean,
            default: false,
        },
        sizingStrategy: {
            type: String as PropType<'match' | 'minimum'>,
            default: 'match',
        },
        align: {
            type: String as PropType<'start' | 'end'>,
            default: 'start',
        },
    },
    emits: ['update:modelValue', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const select = ref();
        const button = ref<HTMLButtonElement>();
        const popper = ref<CorePopperComponent>();
        const modifiers = computed( () => {
            const defaultModifiers = [
                // ...corePopperApplyMaxSizeModifier,
            ];
            if (!props.autoSize && props.sizingStrategy === 'minimum'){
                return [
                    ...defaultModifiers,
                    // ...corePopperMinimumReferenceSizeModifier,
                ]
            } else if (!props.autoSize && props.sizingStrategy === 'match'){
                return [
                    ...defaultModifiers,
                    // ...corePopperMatchReferenceSizeModifier,
                ]
            } else {
                return defaultModifiers;
            }
        });

        onMounted(() => {
            nextTick(() => {
                popper.value.updatePopper();
            });
        });

        const popperWidth = ref(null);
        const selectWidth = computed(() => {
            return props.autoSize ? { width: `${popperWidth.value}` } : null;
        });
        const popperSizeChanged = (size) => {
            popperWidth.value = `${size.width}px`;
        };

        const onClickOutside = (value) => {
            if (value.outsidePopper && value.outsideReference) {
                select.value.close();
            }
        };

        const onFocusedItemChanged = (item: CoreSelectItemInstance) => {
            if(item && item.element) {
                item.element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                })
            }
        }

        let scheduledUpdatePopper = false;
        const updatePopper = () => {
            // console.log('select updatePopper');
            if (scheduledUpdatePopper) {
                return;
            }
            nextTick(() => {
                // console.log('select nexttick updatePopper');
                if (popper.value) {
                    popper.value.updatePopper();
                }
                scheduledUpdatePopper = false;
            });
            scheduledUpdatePopper = true;
        };

        provide('updatePopper', updatePopper);

        const asProps = (slotProps: CoreSelectSlotProps) => ({
            class: { '-active': slotProps.menuVisible, '-disabled': slotProps.disabled },
        });
        const core = coreSelectSetup().as('div', asProps).props(['modelValue', 'disabled', 'hideOnSelect', 'allowClear', 'multiple', 'compare']).events(['update:modelValue', 'focusedItemChanged'])
            .build();

        return {
            Icons,
            core,
            select,
            button,
            popper,

            selectWidth,
            modifiers,

            popperSizeChanged,
            onClickOutside,
            onFocusedItemChanged,

            ...componentCss(),
        };
    },
});
</script>
