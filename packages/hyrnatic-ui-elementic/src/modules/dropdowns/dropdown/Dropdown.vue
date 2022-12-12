<template>
    <hr-dropdown v-show="visible" ref="dropdown" v-slot="props" :class="[css_root]" v-bind="core.props"
                 v-on="core.listeners" @focused-item-changed="onFocusedItemChanged">
        <div ref="button" tabindex="0" :class="[css_ec('button'), {'-split-button': props.splitButton}]"
             @click="props.onButtonClick" @keydown="props.onKeyEvents($event, 'main')">
            <span :class="[css_ec('label')]">
                <slot name="label">
                    {{ label }}
                </slot>
            </span>
            <div tabindex="0" :class="[css_ec('icon')]" @click.stop="props.onIconClick"
                 @keydown.stop="props.onKeyEvents($event, 'split')">
                <div>
                    <h-icon ref="icon" :icon="Icons.dotsHorizontal" size="16px" />
                </div>
            </div>
        </div>

        <h-floating as="div" :class="[css_ec('menu-container')]" :reference="button"
                    :arrow-reference="icon ? icon.$el : null" show-arrow keep transition="tiny2x-slide-up-medium"
                    :visible="props.menuVisible" :placement="`bottom-${align}`"
                    :middleware="floatingMiddleware"
                    @hide="props.clearFocusedItem()"
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
            <template #arrow>
                <h-icon icon="tooltip-arrow" :class="[css_ec('arrow')]" />
            </template>
        </h-floating>
    </hr-dropdown>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, provide, onMounted, nextTick, SetupContext, PropType,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CorePopperComponent,
    coreDropdownDisabledProp,
    coreDropdownHideOnClickProp,
    coreDropdownSplitButtonProp,
    coreDropdownVisibleProp,
    coreDropdownSetup,
    CoreDropdownSlotProps,
    CoreDropdownItemInstance, CoreFloatingClickOutsideEvent,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';
import { ComputePositionReturn, offset, size } from '@floating-ui/dom';

export default defineComponent({
    name: 'h-dropdown',
    props: {
        ...coreDropdownDisabledProp,
        ...coreDropdownVisibleProp,
        ...coreDropdownSplitButtonProp,
        ...coreDropdownHideOnClickProp,
        label: {
            type: String,
            default: '',
        },
        align: {
            type: String as PropType<'start' | 'end'>,
            default: 'start',
        },
    },
    emits: ['click', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const dropdown = ref();
        const button = ref<HTMLElement>();
        const icon = ref<HTMLElement>();
        const menuMaxHeight = ref('');
        const floatingPlacement = ref('bottom');
        const floatingMiddleware = computed(() => {
            return [
                offset(4),
                size({
                    padding: 8,
                    apply(data) {
                        Object.assign(data.elements.floating.style, {
                            minWidth: `${data.rects.reference.width}px`,
                        });
                        menuMaxHeight.value = `${data.availableHeight}px`;
                    }
                })
            ];
        });

        const onClickOutside = (value: CoreFloatingClickOutsideEvent) => {
            if (value.outsideFloating && value.outsideReference) {
                dropdown.value.close();
            }
        };

        const onComputedPosition = (data: ComputePositionReturn) => {
            floatingPlacement.value = data.placement.split('-')[0];
        };

        const onFocusedItemChanged = (item: CoreDropdownItemInstance) => {
            if (item && item.component && item.component.vnode && item.component.vnode.el) {
                item.component.vnode.el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        };

        const asProps = (slotProps: CoreDropdownSlotProps) => ({
            class: {
                '-active': slotProps.menuVisible, '-disabled': slotProps.disabled,
            },
        });
        const core = coreDropdownSetup().as('div', asProps).props(['disabled', 'hideOnClick', 'splitButton', 'visible']).events(['click', 'focusedItemChanged'])
            .build();

        return {
            Icons,
            core,
            dropdown,
            button,
            icon,

            floatingPlacement,
            floatingMiddleware,
            menuMaxHeight,

            onClickOutside,
            onComputedPosition,
            onFocusedItemChanged,

            ...componentCss(),
        };
    },
});
</script>
