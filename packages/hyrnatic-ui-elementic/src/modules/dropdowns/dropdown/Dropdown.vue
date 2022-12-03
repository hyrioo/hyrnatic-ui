<template>
    <hr-dropdown v-show="visible" ref="dropdown" v-slot="props" :class="[css_root]" v-bind="core.props" v-on="core.listeners" @focused-item-changed="onFocusedItemChanged">
        <div ref="button" tabindex="0" :class="[css_ec('button'), {'-split-button': props.splitButton}]" :style="{...popperWidth}" @click="props.onButtonClick" @keydown="props.onKeyEvents($event, 'main')">
            <span :class="[css_ec('label')]">
                <slot name="label">
                    {{ label }}
                </slot>
            </span>
            <div ref="icon" tabindex="0" :class="[css_ec('icon')]" @click.stop="props.onIconClick" @keydown.stop="props.onKeyEvents($event, 'split')">
                <h-icon :icon="Icons.dotsHorizontal" size="16px" />
            </div>
        </div>

        <h-floating ref="popper" :classes="[css_ec('menu-container')]" :reference="button" :arrow-reference="icon" show-arrow keep transition="tiny2x-slide-up-medium"
                  :visible="props.menuVisible" :options="{placement: `bottom-${align}`}" :minimum-width="dropdownHasWidth" :modifiers="popperModifiers"
                  @popper-size-changed="popperSizeChanged" @hide="props.clearFocusedItem()" @click-outside="onClickOutside"
        >
            <div :class="[css_ec('menu')]" @keydown="props.onKeyEvents">
                <h-scroll-container>
                    <slot />
                </h-scroll-container>
            </div>
            <template #arrow>
                <div :class="[css_ec('arrow')]" />
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
    CoreDropdownItemInstance,
} from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

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
        const popper = ref<CorePopperComponent>();

        /*onMounted(() => {
            nextTick(() => {
                popper.value.updatePopper();
            });
        });*/

        const popperWidth = ref({});
        const popperModifiers = [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                },
            },
        ];
        const dropdownHasWidth = computed(() => (dropdown.value && dropdown.value.$el.style.width ? dropdown.value.$el.style.width : null));
        const popperSizeChanged = (size) => {
            if (dropdownHasWidth.value || size.width === 0) {
                popperWidth.value = null;
                return;
            }
            popperWidth.value = { minWidth: `${size.width}px` };
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
        const onClickOutside = (value) => {
            if (value.outsidePopper && value.outsideReference) {
                dropdown.value.close();
            }
        };

        const onFocusedItemChanged = (item: CoreDropdownItemInstance) => {
            if(item && item.element) {
                item.element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                })
            }
        }

        provide('updatePopper', updatePopper);

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
            popper,

            popperWidth,
            popperModifiers,
            popperSizeChanged,
            dropdownHasWidth,

            onClickOutside,
            onFocusedItemChanged,

            ...componentCss(),
        };
    },
});
</script>
