<template>
    <hr-select ref="select" v-slot="props" :class="[css_root]" v-bind="core.props" v-on="core.listeners">
        <button ref="button" :class="[css_ec('button')]" :style="{...popperWidth}" :disabled="props.disabled" :title="props.modelValue && props.modelValue.length !== 0 ? props.selectedText : null" @click="props.onButtonClick" @keydown="props.onKeyEvents">
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
                    <h-icon icon="chevron-down" size="16px" />
                </div>
            </transition>
            <transition name="fade-fast">
                <div v-if="props.allowClear && props.menuVisible" :class="[css_ec('clear-icon')]" title="Clear" @click="props.clearValue">
                    <h-icon icon="close" size="16px" />
                </div>
            </transition>
        </button>

        <h-popper ref="popper" :classes="[css_ec('menu-container')]" :reference="button" keep transition="fade-fast"
                  :visible="props.menuVisible" :options="{placement: `bottom-${align}`}" :fixed-width="selectHasWidth"
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
    defineComponent, ref, computed, provide, onMounted, nextTick, SetupContext,
} from 'vue';
import componentCss from '@/utils/component-css';
import {
    CorePopperComponent,
    coreSelectAllowClearProp,
    coreSelectDisabledProp,
    coreSelectHideOnSelectProp,
    coreSelectModelValueProp,
    coreSelectMultipleProp,
    coreSelectSetup, CoreSelectSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-select',
    props: {
        ...coreSelectDisabledProp,
        ...coreSelectAllowClearProp,
        ...coreSelectHideOnSelectProp,
        ...coreSelectMultipleProp,
        ...coreSelectModelValueProp,
        placeholder: {
            type: String,
            default: '',
        },
        align: {
            type: String,
            default: 'start',
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const select = ref();
        const button = ref<HTMLButtonElement>();
        const popper = ref<CorePopperComponent>();

        onMounted(() => {
            nextTick(() => {
                popper.value.updatePopper();
            });
        });

        const popperWidth = ref({});
        const selectHasWidth = computed(() => (select.value && select.value.$el.style.width ? select.value.$el.style.width : null));
        const popperSizeChanged = (size) => {
            if (selectHasWidth.value || size.width === 0) {
                return;
            }
            popperWidth.value = select.value.$el.style.width ? { minWidth: `${size.width}px` } : { width: `${size.width}px` };
        };

        const onClickOutside = (value) => {
            if (value.outsidePopper && value.outsideReference) {
                select.value.close();
            }
        };
        let scheduledUpdatePopper = false;
        const updatePopper = () => {
            if (scheduledUpdatePopper) {
                return;
            }
            nextTick(() => {
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
        const core = coreSelectSetup().as('div', asProps).props(['modelValue', 'disabled', 'hideOnSelect', 'allowClear', 'multiple']).events(['update:modelValue'])
            .build();

        return {
            core,
            select,
            button,
            popper,

            selectHasWidth,

            popperWidth,
            popperSizeChanged,
            onClickOutside,

            ...componentCss(),
        };
    },
});
</script>
