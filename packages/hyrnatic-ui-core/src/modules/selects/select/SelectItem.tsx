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

export type CoreSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    element?: HTMLElement;
};

export type CoreSelectProvide = {
    selectedItems: ComputedRef<CoreSelectItemInstance[]>;
    focusedItem: Ref<CoreSelectItemInstance>;
    onItemClick(instance: CoreSelectItemInstance): void;
    addItemInstance(instance: CoreSelectItemInstance): void;
    removeItemInstance(instance: CoreSelectItemInstance): void;
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

export type CoreSelectItemSlotProps = {
    selected: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    value: ComputedRef;
    onClick: (e) => any;
}

export type CoreSelectItemReturn = {
    setElement: (element: HTMLElement) => void;
    $el: HTMLElement;
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
        const instance = reactive<CoreSelectItemInstance>({
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
            setElement,
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
