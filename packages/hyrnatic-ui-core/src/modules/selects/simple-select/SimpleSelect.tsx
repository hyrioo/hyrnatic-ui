import {
    defineComponent,
    ref,
    computed,
    reactive,
    getCurrentInstance,
    provide, ComputedRef, h, PropType, watch, ComponentInternalInstance, Ref,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import Arr from '../../../utils/array';
import Obj from '../../../utils/object';

export const coreSimpleSelectModelValueProp = {
    modelValue: {
        type: null,
    },
};
export const coreSimpleSelectItemsProp = {
    items: {
        type: Array,
        required: true,
    },
};
export const coreSimpleSelectDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreSimpleSelectMultipleProp = {
    multiple: {
        type: Boolean,
        default: false,
    },
};
export const coreSimpleSelectAllowClearProp = {
    allowClear: {
        type: Boolean,
        default: false,
    },
};
export const coreSimpleSelectHideOnSelectProp = {
    hideOnSelect: {
        type: Boolean,
        default: true,
    },
};
/*export const coreSimpleSelectValueProp = {
    value: {
        type: [Function, String] as PropType<((itemValue: any) => any) | string>,
        default: null,
    },
};*/
export const coreSimpleSelectLabelProp = {
    label: {
        type: [Function, String] as PropType<((itemValue: any) => string) | string>,
        default: 'label',
    },
};
export const coreSimpleSelectCompareProp = {
    compare: {
        type: [Function, String] as PropType<((modelValue: any[], itemValue: any) => boolean) | string>,
        default: null,
    },
};

export type CoreSimpleSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    selected: boolean;
};

export type CoreSimpleSelectProvide = {
    selectedItems: ComputedRef<CoreSimpleSelectItemInstance[]>;
    focusedItem: Ref<CoreSimpleSelectItemInstance | null>;
    onItemClick(instance: CoreSimpleSelectItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
};

export type CoreSimpleSelectSlotProps = {
    modelValue: ComputedRef;
    disabled: ComputedRef<boolean>;
    allowClear: ComputedRef<boolean>;
    menuVisible: ComputedRef<boolean>;
    items: ComputedRef<any[]>;
    focusedItem: ComputedRef<CoreSimpleSelectItemInstance | null>;
    clearFocusedItem: () => any;
    anythingSelected: ComputedRef<boolean>;
    selectedItems: ComputedRef<CoreSimpleSelectItemInstance[]>;
    selectedText: ComputedRef<string>;

    clearValue: () => any;
    close: () => any;

    onButtonClick: () => any;
    onItemClick: (item: CoreSimpleSelectItemInstance) => any;
    onKeyEvents: (e: KeyboardEvent) => any;
    onMenuTransitioning: (state: boolean) => void;
}

export function coreSimpleSelectSetup(): any {
    return setupBuilder<CoreSimpleSelectSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-simple-select',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreSimpleSelectItemsProp,
        ...coreSimpleSelectDisabledProp,
        ...coreSimpleSelectMultipleProp,
        ...coreSimpleSelectAllowClearProp,
        ...coreSimpleSelectHideOnSelectProp,
        ...coreSimpleSelectModelValueProp,
        // ...coreSimpleSelectValueProp,
        ...coreSimpleSelectLabelProp,
        ...coreSimpleSelectCompareProp,
    },
    emits: ['update:modelValue', 'focusedItemChanged'],
    setup(props, ctx) {
        const menuVisible = ref(false);
        const transitioning = ref(false);
        const internalItems = computed<CoreSimpleSelectItemInstance[]>(() => {
            const copy: any[] = [].concat(props.modelValue);
            return props.items!.map((item: any) => {
                let label = typeof item === 'string' ? item : typeof props.label === 'string' ? item[props.label] : props.label(item);
                let selected = false;

                const index = copy.indexOf(item);
                if (index !== -1) {
                    selected = true;
                } else if (props.compare) {
                    if (typeof props.compare === 'string') {
                        selected = copy.find((c) => (c !== null && Obj.getProperty(c, props.compare as string)) === (item !== null && Obj.getProperty(item, props.compare as string)));
                    } else {
                        selected = props.compare(copy, item);
                    }
                }

                return ({
                    value: item,
                    label: label,
                    disabled: false,
                    selected: selected,
                });
            });
        });
        const focusedItem = ref<CoreSimpleSelectItemInstance | null>(null);
        const selectedItems = computed(() => {
            return internalItems.value.filter((i) => i.selected);
        });
        const anythingSelected = computed(() => selectedItems.value.length > 0);
        const selectedText = computed(() => {
            const texts: string[] = [];
            selectedItems.value.forEach((selected) => {
                texts.push(selected.label);
            });
            return texts.join(', ');
        });
        const searchText = ref('');
        const searchTimeout = ref();
        const focusableItems = computed(() => internalItems.value.filter((i) => !i.disabled));
        const clearFocusedItem = () => {
            focusedItem.value = null;
        };
        watch(focusedItem, () => {
            ctx.emit('focusedItemChanged', focusedItem.value);
        });

        const close = () => {
            menuVisible.value = false;
        };
        const onItemClick = (item: CoreSimpleSelectItemInstance) => {
            const { value } = item;
            if (props.hideOnSelect && !props.multiple) {
                close();
            }

            let selected = value;

            if (props.multiple) {
                selected = [];
                if (props.modelValue !== undefined) {
                    selected = selected.concat(props.modelValue);
                }
                if (selected.includes(value)) {
                    selected.splice(selected.indexOf(value), 1);
                } else {
                    selected.push(value);
                }
            }

            focusedItem.value = item;
            ctx.emit('update:modelValue', selected);
        };
        const onButtonClick = () => {
            if (props.disabled) {
                return false;
            }
            menuVisible.value = !menuVisible.value;
        };
        const clearValue = () => {
            ctx.emit('update:modelValue', props.multiple ? [] : undefined);
        };
        const onKeyEvents = (e: KeyboardEvent) => {
            if (props.disabled) {
                return false;
            }

            const getCurrentIndex = () => focusedItem.value ? focusableItems.value.findIndex((i) => i === focusedItem.value) : null;

            if (!menuVisible.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter')) {
                menuVisible.value = true;
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
                onItemClick(focusedItem.value);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'Tab') {
                close();
            } else if (e.key === 'Escape') {
                close();
                e.preventDefault();
                e.stopImmediatePropagation();
            } else {
                clearTimeout(searchTimeout.value);
                const input = e.key.toLowerCase();
                const match = input.match(/^\p{L}$/u);

                if (match) {
                    let currentIndex = null;
                    if (input == searchText.value) {
                        // If the user pressed the same letter again, it should select the next item instead
                        currentIndex = focusedItem.value ? searchItems.value.findIndex((i) => i === focusedItem.value) : null;
                    } else {
                        // Search for a more specific item
                        searchText.value += input;
                    }
                    focusedItem.value = Arr.next(searchItems.value, currentIndex);
                    searchTimeout.value = setTimeout(clearSearch, 1500);
                }
            }
        };
        const searchItems = computed(() => {
            return internalItems.value.filter((i) => i.label.toLowerCase().startsWith(searchText.value));
        });
        const clearSearch = () => {
            searchText.value = '';
        };

        const onMenuTransitioning = (state: boolean) => {
            transitioning.value = state;
        };

        const itemsVisible = computed(() => {
            return menuVisible.value || transitioning.value;
        });

        provide<CoreSimpleSelectProvide>('select', {
            selectedItems,
            focusedItem,
            onItemClick,
            menuVisible: computed(() => menuVisible.value),
            itemsVisible,
        });

        const slotProps = reactive<CoreSimpleSelectSlotProps>({
            modelValue: computed(() => props.modelValue),
            disabled: computed(() => props.disabled),
            allowClear: computed(() => props.allowClear),
            menuVisible: computed(() => menuVisible.value),
            items: computed(() => internalItems.value),
            focusedItem: computed(() => focusedItem.value),
            clearFocusedItem,
            anythingSelected,
            selectedItems,
            selectedText,

            clearValue,
            close,

            onButtonClick,
            onItemClick,
            onKeyEvents,
            onMenuTransitioning,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            close,
            slotProps,
            defaultRender,
            items: internalItems,
        };
    },
    render() {
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            // @ts-ignore
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
