import {
    defineComponent,
    ref,
    SetupContext,
    computed,
    reactive,
    getCurrentInstance,
    provide, ComputedRef, h, PropType, watch,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import { SelectItemInstance, CoreSelectProvide } from './SelectItem';
import Arr from '../../../utils/array';
import Obj from '../../../utils/object';

export const coreSelectModelValueProp = {
    modelValue: {
        type: null,
    },
};
export const coreSelectDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreSelectMultipleProp = {
    multiple: {
        type: Boolean,
        default: false,
    },
};
export const coreSelectAllowClearProp = {
    allowClear: {
        type: Boolean,
        default: false,
    },
};
export const coreSelectHideOnSelectProp = {
    hideOnSelect: {
        type: Boolean,
        default: true,
    },
};
export const coreSelectCompareProp = {
    compare: {
        type: [Function, String] as PropType<((modelValue: any[], itemValue: any) => boolean) | string>,
        default: null,
    },
};

export type CoreSelectSlotProps = {
    modelValue: ComputedRef;
    disabled: ComputedRef<boolean>;
    allowClear: ComputedRef<boolean>;
    menuVisible: ComputedRef<boolean>;
    focusedItem: ComputedRef<SelectItemInstance>;
    clearFocusedItem: (e) => any;
    anythingSelected: ComputedRef<boolean>;
    selectedItems: ComputedRef<SelectItemInstance[]>;
    selectedText: ComputedRef<string>;

    clearValue: (e) => any;
    close: (e) => any;

    onButtonClick: (e) => any;
    onItemClick: (e) => any;
    onKeyEvents: (e) => any;
}

export function coreSelectSetup() {
    return setupBuilder<CoreSelectSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-select',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreSelectDisabledProp,
        ...coreSelectMultipleProp,
        ...coreSelectAllowClearProp,
        ...coreSelectHideOnSelectProp,
        ...coreSelectModelValueProp,
        ...coreSelectCompareProp,
    },
    emits: ['update:modelValue', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const menuVisible = ref(false);
        const items = ref<SelectItemInstance[]>([]);
        const focusedItem = ref<SelectItemInstance>();
        const selectedItems = computed(() => {
            const copy = [].concat(props.modelValue);
            return items.value.filter((i) => {
                const index = copy.indexOf(i.value);
                if(index !== -1) {
                    return true;
                } else if(props.compare) {
                    if(typeof props.compare === 'string'){
                        console.log(copy, i, props.compare);
                        return copy.find((c) => (c !== null && Obj.getProperty(c, props.compare as string)) === (i.value !== null && Obj.getProperty(i.value, props.compare as string)));
                    } else {
                        return props.compare(copy, i.value);
                    }
                } else {
                    return false;
                }
            });
        });
        const anythingSelected = computed(() => selectedItems.value.length > 0);
        const selectedText = computed(() => {
            const texts = [];
            selectedItems.value.forEach((selected) => {
                texts.push(selected.label);
            });
            return texts.join(', ');
        });
        const focusableItems = computed(() => items.value.filter((i) => i.disabled === false));
        const clearFocusedItem = () => {
            focusedItem.value = null;
        };
        watch(focusedItem, () => {
            ctx.emit('focusedItemChanged', focusedItem.value);
        });

        const addItemInstance = (instance) => {
            items.value.push(instance);
        };
        const removeItemInstance = (instance) => {
            items.value = Arr.remove(items.value, instance);
        };

        const close = () => {
            menuVisible.value = false;
        };
        const onItemClick = (item: SelectItemInstance) => {
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
        const onKeyEvents = (e) => {
            if (props.disabled) {
                return false;
            }
            const currentIndex = focusedItem.value ? focusableItems.value.findIndex((i) => i === focusedItem.value) : null;

            if (!menuVisible.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter')) {
                menuVisible.value = true;
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
                onItemClick(focusedItem.value);
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

        provide<CoreSelectProvide>('select', {
            selectedItems,
            focusedItem,
            onItemClick,
            addItemInstance,
            removeItemInstance,
        });

        const slotProps = reactive<CoreSelectSlotProps>({
            modelValue: computed(() => props.modelValue),
            disabled: computed(() => props.disabled),
            allowClear: computed(() => props.allowClear),
            menuVisible: computed(() => menuVisible.value),
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
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            close,
            slotProps,
            defaultRender,
            items,
        };
    },
    render() {
        if (this.$props.as) {
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
