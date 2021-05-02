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
} from '@/utils/component';
import Arr from '@/utils/array';
import { CoreDropdownItemInstance, CoreDropdownProvide } from '@/modules/dropdowns/dropdown/DropdownItem';

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
    focusedItem: ComputedRef<CoreDropdownItemInstance>;
    clearFocusedItem: (e) => any;
    onKeyEvents: (e, target: 'main' | 'split') => any;
    onButtonClick: (e) => any;
    onIconClick: (e) => any;
    onItemClick: (e) => any;
}

export function coreDropdownSetup() {
    return setupBuilder<CoreDropdownSlotProps>(getCurrentInstance());
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
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const menuVisible = ref(false);
        const items = ref<CoreDropdownItemInstance[]>([]);
        const focusedItem = ref<CoreDropdownItemInstance>();
        const focusableItems = computed(() => items.value.filter((i) => i.disabled === false));
        const clearFocusedItem = () => {
            focusedItem.value = null;
        };
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
        const onKeyEvents = (e, target: 'main' | 'split') => {
            if (props.disabled) {
                return false;
            }
            const currentIndex = focusedItem.value ? focusableItems.value.findIndex((i) => i === focusedItem.value) : null;

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
                focusedItem.value = Arr.next(focusableItems.value, currentIndex);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'ArrowUp') {
                focusedItem.value = Arr.prev(focusableItems.value, currentIndex);
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
        const onButtonClick = (e) => {
            if (props.disabled) {
                return false;
            }

            if (props.splitButton) {
                ctx.emit('click', e);
            } else {
                menuVisible.value = !menuVisible.value;
            }
        };
        const onIconClick = () => {
            if (props.disabled) {
                return false;
            }
            menuVisible.value = !menuVisible.value;
        };

        provide<CoreDropdownProvide>('dropdown', {
            focusedItem,
            onItemClick,
            addItemInstance,
            removeItemInstance,
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
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            close,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
