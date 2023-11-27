import {
    defineComponent,
    SetupContext,
    computed,
    reactive,
    getCurrentInstance,
    Ref,
    inject,
    onMounted, onUnmounted, ComputedRef, h, ComponentInternalInstance,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';

export type CoreDropdownItemInstance = {
    onClick(e: any): void;
    label?: string;
    disabled: boolean;
    component?: ComponentInternalInstance;
};

export type CoreDropdownProvide = {
    focusedItem: Ref<CoreDropdownItemInstance | null>;
    onItemClick(e: any): void;
    addItemInstance(instance: CoreDropdownItemInstance): void;
    removeItemInstance(instance: CoreDropdownItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
};

export const coreDropdownItemDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};
export const coreDropdownItemLabelProp = {
    label: {
        type: String,
        default: null,
    },
};

export type CoreDropdownItemSlotProps = {
    disabled: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    onClick: (e: MouseEvent) => any;
}

export function coreDropdownItemSetup() {
    return setupBuilder<CoreDropdownItemSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-dropdown-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreDropdownItemDisabledProp,
        ...coreDropdownItemLabelProp,
    },
    emits: ['click'],
    setup(props, ctx) {
        const dropdown = inject<CoreDropdownProvide>('dropdown') as CoreDropdownProvide;

        const onClick = (e: MouseEvent) => {
            if (!props.disabled) {
                ctx.emit('click', e);
                dropdown.onItemClick(e);
            }
        };

        const instance = reactive<CoreDropdownItemInstance>({
            disabled: props.disabled,
            label: props.label,
            onClick,
            component: getCurrentInstance()!,
        });

        onMounted(() => {
            dropdown.addItemInstance(instance);
        });
        onUnmounted(() => {
            dropdown.removeItemInstance(instance);
        });

        const isFocused = computed(() => dropdown.focusedItem.value === instance);

        const slotProps = reactive<CoreDropdownItemSlotProps>({
            disabled: computed(() => props.disabled),
            focused: isFocused,
            onClick,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            dropdown,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if(this.dropdown.itemsVisible.value) {
            if (this.$props.as) {
                const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
                return h(this.$props.as, { ...p }, this.defaultRender());
            }
            return this.defaultRender();
        }
    },
});
