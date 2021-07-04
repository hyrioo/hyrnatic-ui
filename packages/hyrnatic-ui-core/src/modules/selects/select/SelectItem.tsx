import {
    computed, ComputedRef,
    defineComponent, getCurrentInstance, h,
    inject,
    onMounted,
    onUnmounted,
    reactive, ref, Ref,
    SetupContext, watch,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export type SelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    element?: HTMLElement;
};

export type CoreSelectProvide = {
    selectedItems: ComputedRef<SelectItemInstance[]>;
    focusedItem: Ref<SelectItemInstance>;
    onItemClick(instance: SelectItemInstance): void;
    addItemInstance(instance: SelectItemInstance): void;
    removeItemInstance(instance: SelectItemInstance): void;
};

export const coreSelectItemValueProp = {
    value: {
        type: null,
        required: true,
    },
};
export const coreSelectItemDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreSelectItemElementProp = {
    element: {
        type: HTMLElement,
    },
};

export type CoreSelectItemSlotProps = {
    selected: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    value: ComputedRef;
    onClick: (e) => any;
}

export type CoreSelectItemReturn = {
    setElement: (element: HTMLElement) => void;
}

export function coreSelectItemSetup() {
    return setupBuilder<CoreSelectItemSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-select-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreSelectItemDisabledProp,
        ...coreSelectItemValueProp,
        label: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const select = inject<CoreSelectProvide>('select');
        const instance = reactive<SelectItemInstance>({
            value: props.value,
            label: props.label,
            disabled: props.disabled,
            element: null,
        });

        const setElement = (element: HTMLElement) => {
            instance.element = element;
        }

        onMounted(() => {
            select.addItemInstance(instance);
        });
        onUnmounted(() => {
            select.removeItemInstance(instance);
        });

        const isSelected = computed(() => select.selectedItems.value.indexOf(instance) !== -1);
        const isFocused = computed(() => select.focusedItem.value === instance);

        const onClick = () => {
            if (!props.disabled) {
                select.onItemClick(instance);
            }
        };

        const slotProps = reactive<CoreSelectItemSlotProps>({
            selected: isSelected,
            focused: isFocused,
            disabled: computed(() => props.disabled),
            value: computed(() => props.value),
            onClick,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            instance,
            setElement,
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
