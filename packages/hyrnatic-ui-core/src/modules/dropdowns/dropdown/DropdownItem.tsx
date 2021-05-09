import {
    defineComponent,
    SetupContext,
    computed,
    reactive,
    getCurrentInstance,
    Ref,
    inject,
    onMounted, onUnmounted, ComputedRef, h,
} from 'vue';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';

export type CoreDropdownItemInstance = {
    onClick(e: any): void;
    disabled: boolean;
};

export type CoreDropdownProvide = {
    focusedItem: Ref<CoreDropdownItemInstance>;
    onItemClick(e: any): void;
    addItemInstance(instance: CoreDropdownItemInstance): void;
    removeItemInstance(instance: CoreDropdownItemInstance): void;
};

export const coreDropdownItemDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};

export type CoreDropdownItemSlotProps = {
    disabled: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    onClick: (e) => any;
}

export function coreDropdownItemSetup() {
    return setupBuilder<CoreDropdownItemSlotProps>(getCurrentInstance());
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
        const dropdown = inject<CoreDropdownProvide>('dropdown');

        const onClick = (e) => {
            if (!props.disabled) {
                ctx.emit('click', e);
                dropdown.onItemClick(e);
            }
        };

        const instance = reactive<CoreDropdownItemInstance>({
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

        const slotProps = reactive<CoreDropdownItemSlotProps>({
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
