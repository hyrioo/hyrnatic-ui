import {
    computed, ComputedRef,
    defineComponent, getCurrentInstance, h,
    inject,
    onMounted,
    onUnmounted,
    reactive, Ref,
    SetupContext, ComponentInternalInstance,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export type CoreSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    component?: ComponentInternalInstance;
};

export type CoreSelectProvide = {
    selectedItems: ComputedRef<CoreSelectItemInstance[]>;
    focusedItem: Ref<CoreSelectItemInstance | null>;
    onItemClick(instance: CoreSelectItemInstance): void;
    addItemInstance(instance: CoreSelectItemInstance): void;
    removeItemInstance(instance: CoreSelectItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
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
export const coreSelectItemLabelProp = {
    label: {
        type: String,
        default: null,
    },
};

export type CoreSelectItemSlotProps = {
    selected: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    value: ComputedRef;
    onClick: () => any;
}

export function coreSelectItemSetup() {
    return setupBuilder<CoreSelectItemSlotProps>(getCurrentInstance()!);
}

const SelectItem = defineComponent({
    name: 'hr-select-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreSelectItemDisabledProp,
        ...coreSelectItemValueProp,
        ...coreSelectItemLabelProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const select = inject<CoreSelectProvide>('select');
        const instance = reactive<CoreSelectItemInstance>({
            value: props.value,
            label: props.label,
            disabled: props.disabled,
            component: getCurrentInstance()!,
        });

        onMounted(() => {
            select!.addItemInstance(instance);
        });
        onUnmounted(() => {
            select!.removeItemInstance(instance);
        });

        const isSelected = computed(() => select!.selectedItems.value.indexOf(instance) !== -1);
        const isFocused = computed(() => select!.focusedItem.value === instance);

        const onClick = () => {
            if (!props.disabled) {
                select!.onItemClick(instance);
            }
        };

        const slotProps = reactive<CoreSelectItemSlotProps>({
            selected: isSelected,
            focused: isFocused,
            disabled: computed(() => props.disabled),
            value: computed(() => props.value),
            onClick,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            select,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if(this.select!.itemsVisible.value) {
            if (this.$props.as) {
                const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
                return h(this.$props.as, { ...p }, this.defaultRender());
            }
            return this.defaultRender();
        }
    },
});
export default SelectItem;
