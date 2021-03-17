import {
    defineComponent,
    ref,
    nextTick,
    SetupContext,
    PropType,
    computed,
    reactive,
    getCurrentInstance,
    Ref,
    inject,
    onMounted, onUnmounted, onUpdated, ComputedRef, h,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '@/utils/component';

export type DropdownItemInstance = {
    onClick(e: any): void;
    disabled: boolean;
};

export type DropdownProvide = {
    focusedItem: Ref<DropdownItemInstance>;
    onItemClick(e: any): void;
    addItemInstance(instance: DropdownItemInstance): void;
    removeItemInstance(instance: DropdownItemInstance): void;
};

export const coreDropdownItemDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};

export type SlotProps = {
    disabled: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    onClick: (e) => any;
}

export function setup() {
    return setupBuilder<SlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-dropdown-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreDropdownItemDisabledProp,
    },
    emits: ['click'],
    setup(props, ctx: SetupContext) {
        const dropdown = inject<DropdownProvide>('dropdown');

        const onClick = (e) => {
            if (!props.disabled) {
                ctx.emit('click', e);
                dropdown.onItemClick(e);
            }
        };

        const instance = reactive<DropdownItemInstance>({
            disabled: props.disabled,
            onClick,
        });

        onMounted(() => {
            dropdown.addItemInstance(instance);
        });
        onUnmounted(() => {
            dropdown.removeItemInstance(instance);
        });

        const isFocused = computed(() => dropdown.focusedItem.value === instance);

        const slotProps = reactive<SlotProps>({
            disabled: computed(() => props.disabled),
            focused: isFocused,
            onClick,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
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
