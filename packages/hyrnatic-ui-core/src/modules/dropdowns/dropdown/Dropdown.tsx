import {
    defineComponent,
    ref,
    SetupContext,
    computed,
    reactive,
    getCurrentInstance,
    provide, ComputedRef, h, watch,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import Arr from '../../../utils/array';
import { CoreDropdownItemInstance, CoreDropdownProvide } from './DropdownItem';

export const coreDropdownDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreDropdownHideOnClickProp = {
    hideOnClick: {
        type: Boolean,
        default: true,
    },
};
export const coreDropdownSplitButtonProp = {
    splitButton: {
        type: Boolean,
        default: false,
    },
};
export const coreDropdownVisibleProp = {
    visible: {
        type: Boolean,
        default: true,
    },
};

export type CoreDropdownSlotProps = {
    menuVisible: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    splitButton: ComputedRef<boolean>;
    focusedItem: ComputedRef<CoreDropdownItemInstance | null>;
    clearFocusedItem: () => any;
    onKeyEvents: (e: KeyboardEvent, target: 'main' | 'split') => any;
    onButtonClick: () => any;
    onIconClick: () => any;
    onItemClick: () => any;

    onMenuTransitioning: (state: boolean) => void;
}

export function coreDropdownSetup() {
    return setupBuilder<CoreDropdownSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-dropdown',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreDropdownDisabledProp,
        ...coreDropdownHideOnClickProp,
        ...coreDropdownSplitButtonProp,
        ...coreDropdownVisibleProp,
    },
    emits: ['click', 'focusedItemChanged'],
    setup(props, ctx) {
        const menuVisible = ref(false);
        const transitioning = ref(false);
        const items = ref<CoreDropdownItemInstance[]>([]);
        const focusedItem = ref<CoreDropdownItemInstance | null>(null);
        const focusableItems = computed(() => items.value.filter((i) => i.disabled === false));
        const clearFocusedItem = () => {
            focusedItem.value = null;
        };
        watch(focusedItem, () => {
            ctx.emit('focusedItemChanged', focusedItem.value);
        });

        const interactivityDisabled = computed(() => {
            return props.disabled || !props.visible;
        });

        const addItemInstance = (instance: CoreDropdownItemInstance) => {
            items.value.push(instance);
        };
        const removeItemInstance = (instance: CoreDropdownItemInstance) => {
            items.value = Arr.remove(items.value, instance);
        };

        const close = () => {
            menuVisible.value = false;
        };
        watch(() => props.visible, (value) => {
            if (value === false) {
                close();
            }
        });
        const onItemClick = () => {
            if (props.hideOnClick) {
                close();
            }
        };
        const onKeyEvents = (e: KeyboardEvent, target: 'main' | 'split') => {
            if (interactivityDisabled.value) {
                return false;
            }
            const getCurrentIndex = () => focusedItem.value ? focusableItems.value.findIndex((i) => i === focusedItem.value) : null;

            if (!menuVisible.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter')) {
                if (e.key === 'Enter') {
                    if (target === 'main') {
                        ctx.emit('click', e);
                    } else if (target === 'split') {
                        menuVisible.value = !menuVisible.value;
                    }
                } else {
                    menuVisible.value = !menuVisible.value;
                }
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'ArrowDown') {
                focusedItem.value = Arr.next(focusableItems.value, getCurrentIndex());
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'ArrowUp') {
                focusedItem.value = Arr.prev(focusableItems.value, getCurrentIndex());
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'Enter' && focusedItem.value) {
                focusedItem.value.onClick(e);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'Tab') {
                close();
            } else if (e.key === 'Escape') {
                close();
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };
        const onButtonClick = () => {
            if (interactivityDisabled.value) {
                return false;
            }

            if (props.splitButton) {
                ctx.emit('click');
            } else {
                menuVisible.value = !menuVisible.value;
            }
        };
        const onIconClick = () => {
            if (interactivityDisabled.value) {
                return false;
            }
            menuVisible.value = !menuVisible.value;
        };

        const onMenuTransitioning = (state: boolean) => {
            transitioning.value = state;
        }

        const itemsVisible = computed(() => {
            return menuVisible.value || transitioning.value;
        });

        provide<CoreDropdownProvide>('dropdown', {
            focusedItem,
            onItemClick,
            addItemInstance,
            removeItemInstance,
            menuVisible: computed(() => menuVisible.value),
            itemsVisible,
        });

        const slotProps = reactive<CoreDropdownSlotProps>({
            menuVisible: computed(() => menuVisible.value),
            disabled: computed(() => props.disabled),
            splitButton: computed(() => props.splitButton),
            focusedItem: computed(() => focusedItem.value),
            clearFocusedItem,
            onKeyEvents,
            onButtonClick,
            onIconClick,
            onItemClick,

            onMenuTransitioning,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            close,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
