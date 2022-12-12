<template>
    <hr-select ref="select" v-slot="props" :class="[css_root]" v-bind="core.props" v-on="core.listeners"
               @focused-item-changed="onFocusedItemChanged">
        <button ref="button" type="button" :class="[css_ec('button')]"
                :disabled="props.disabled"
                :title="props.modelValue && props.modelValue.length !== 0 ? props.selectedText : null"
                @click="props.onButtonClick" @keydown="props.onKeyEvents">
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
                <div v-if="props.allowClear && props.menuVisible" :class="[css_ec('clear-icon')]" title="Clear"
                     @click="props.clearValue">
                    <h-icon :icon="Icons.close" size="16px" />
                </div>
            </transition>
        </button>

        <h-floating as="div" :class="[css_ec('menu-container')]" :reference="button"
                    transition="fade-fast" keep
                    :visible="props.menuVisible" placement="bottom"
                    :middleware="floatingMiddleware"
                    @click-outside="onClickOutside"
                    @computed-position="onComputedPosition"
                    @transition-state-changed="props.onMenuTransitioning"
                    :data-floating-placement="floatingPlacement"
        >
            <div :class="[css_ec('menu')]" @keydown="props.onKeyEvents" :style="{maxHeight: menuMaxHeight}">
                <h-scroll-container>
                    <slot />
                </h-scroll-container>
            </div>
        </h-floating>
    </hr-select>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext, } from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CoreFloatingClickOutsideEvent,
    CorePopperComponent,
    coreSelectAllowClearProp,
    coreSelectCompareProp,
    coreSelectDisabledProp,
    coreSelectHideOnSelectProp,
    CoreSelectItemInstance,
    coreSelectModelValueProp,
    coreSelectMultipleProp,
    coreSelectSetup,
    CoreSelectSlotProps,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';
import { ComputePositionReturn, size } from '@floating-ui/dom';

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
    },
    emits: ['update:modelValue', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const select = ref();
        const button = ref<HTMLButtonElement>();
        const menuMaxHeight = ref('');
        const floatingPlacement = ref('bottom');
        const floatingMiddleware = computed(() => {
            return [
                size({
                    padding: 8,
                    apply(data) {
                        Object.assign(data.elements.floating.style, {
                            width: `${data.rects.reference.width}px`,
                        });
                        menuMaxHeight.value = `${data.availableHeight}px`;
                    }
                })
            ];
        });

        const onClickOutside = (value: CoreFloatingClickOutsideEvent) => {
            if (value.outsideFloating && value.outsideReference) {
                select.value.close();
            }
        };

        const onComputedPosition = (data: ComputePositionReturn) => {
            floatingPlacement.value = data.placement.split('-')[0];
        };

        const onFocusedItemChanged = (item: CoreSelectItemInstance) => {
            console.log(item);
            if (item && item.component && item.component.vnode && item.component.vnode.el) {
                item.component.vnode.el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        };

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
            floatingPlacement,
            onComputedPosition,
            menuMaxHeight,
            floatingMiddleware,

            onClickOutside,
            onFocusedItemChanged,

            ...componentCss(),
        };
    },
});
</script>
