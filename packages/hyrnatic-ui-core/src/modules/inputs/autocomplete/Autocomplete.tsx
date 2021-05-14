import {
    defineComponent, nextTick, SetupContext, PropType, computed, reactive, getCurrentInstance, Ref, ComputedRef, h,
    WritableComputedRef, ref,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import Arr from '../../../utils/array';

export const coreAutocompleteModelValueProp = {
    modelValue: {
        type: String,
        required: true,
    },
};
export const coreAutocompleteModelModifiersProp = {
    modelModifiers: {
        type: Object,
        default: () => ({}),
    },
};
export const coreAutocompleteDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreAutocompleteItemsProp = {
    items: {
        type: Array,
        default: () => ([]),
    },
};

export type CoreAutocompleteSlotProps = {
    modelValue: WritableComputedRef<string>;
    disabled: ComputedRef<boolean>;
    listVisible: ComputedRef<boolean>;
    items: ComputedRef;
    focusedItem: ComputedRef;
    onItemClick: (item) => any;
    onKeyEvents: (e) => any;
    clearFocusedItem: () => any;
}

export function coreAutocompleteSetup(input: Ref<HTMLInputElement>) {
    return setupBuilder<CoreAutocompleteSlotProps>(getCurrentInstance()).setProp('input', input);
}

export default defineComponent({
    name: 'hr-autocomplete',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreAutocompleteDisabledProp,
        ...coreAutocompleteItemsProp,
        ...coreAutocompleteModelValueProp,
        ...coreAutocompleteModelModifiersProp,
        input: {
            type: null as PropType<HTMLInputElement>,
            required: true,
        },
    },
    emits: ['update:modelValue', 'itemSelected', 'focusedItemChanged'],
    setup(props, ctx: SetupContext) {
        const focusInput = (e) => {
            props.input.focus();
        };

        const emitValue = (value) => {
            let newValue = value;
            if (props.modelModifiers.capitalize) {
                newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);
            }

            // Remember selection (Caret position)
            const { selectionStart } = props.input;
            const { selectionEnd } = props.input;

            // Update prop
            ctx.emit('update:modelValue', newValue);

            // Restore selection (Caret position)
            nextTick(() => {
                props.input.setSelectionRange(selectionStart, selectionEnd);
            });
        };

        const listVisible = ref(false);
        const focusedItem = ref();
        const onItemClick = (item) => {
            ctx.emit('itemSelected', item);
        };
        const hideList = () => {
            listVisible.value = false;
        };
        const showList = () => {
            listVisible.value = true;
        };
        const onKeyEvents = (e) => {
            if (props.disabled) {
                return false;
            }
            const currentIndex = focusedItem.value ? props.items.findIndex((i) => i === focusedItem.value) : null;

            if (!listVisible.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter')) {
                showList();
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'ArrowDown') {
                focusedItem.value = Arr.next(props.items, currentIndex);
            ctx.emit('focusedItemChanged', focusedItem.value);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'ArrowUp') {
                focusedItem.value = Arr.prev(props.items, currentIndex);
            ctx.emit('focusedItemChanged', focusedItem.value);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'Enter' && focusedItem.value) {
                onItemClick(focusedItem.value);
                e.preventDefault();
                e.stopImmediatePropagation();
            } else if (e.key === 'Tab') {
                hideList();
            } else if (e.key === 'Escape') {
                hideList();
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };
        const clearFocusedItem = () => {
            focusedItem.value = null;
            ctx.emit('focusedItemChanged', focusedItem.value);
        };

        const slotProps = reactive<CoreAutocompleteSlotProps>({
            modelValue: computed({ get: () => props.modelValue, set: (value) => emitValue(value) }),
            disabled: computed(() => props.disabled),
            items: computed(() => props.items),
            focusedItem: computed(() => focusedItem.value),
            listVisible: computed(() => listVisible.value && props.items.length > 0 && props.modelValue.length > 0),
            onItemClick: onItemClick,
            onKeyEvents: onKeyEvents,
            clearFocusedItem: clearFocusedItem,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            slotProps,
            focusInput,
            defaultRender,
            hideList,
            showList,
        };
    },
    render() {
        if (this.$props.as) {
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
