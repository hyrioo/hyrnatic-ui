import {
    computed,
    ComputedRef,
    defineComponent,
    getCurrentInstance, h,
    inject,
    onMounted,
    onUnmounted,
    reactive, Ref, UnwrapRef,
    SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';

export type CoreTabItemInstance = {
    id: string;
    ref?: HTMLElement;
};

export type CoreTabsNavigatorProvide = {
    activeTab: ComputedRef<CoreTabItemInstance>;
    onTabClick(instance: CoreTabItemInstance): void;
    addTabInstance(instance: CoreTabItemInstance): void;
    removeTabInstance(instance: CoreTabItemInstance): void;
};

export type CoreTabsNavigatorReturn = {
    activeTab: CoreTabItemInstance;
};

export const coreTabItemIdProp = {
    id: {
        type: String,
        required: true,
    },
};
export const coreTabItemIdDisabledProp = {
    disabled: {
        type: Boolean,
        default: false,
    },
};

export type CoreTabItemSlotProps = {
    disabled: ComputedRef<boolean>;
    active: ComputedRef<boolean>;
    onClick: () => any;
}

export function coreTabItemSetup() {
    return setupBuilder<CoreTabItemSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-tab-item',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreTabItemIdProp,
        ...coreTabItemIdDisabledProp,
    },
    setup(props, ctx: SetupContext) {
        const tabsNavigator = inject<CoreTabsNavigatorProvide>('coreTabsNavigator');
        const instance = reactive<CoreTabItemInstance>({
            id: props.id,
        });

        onMounted(() => {
            tabsNavigator.addTabInstance(instance);
        });
        onUnmounted(() => {
            tabsNavigator.removeTabInstance(instance);
        });

        const active = computed(() => instance === tabsNavigator.activeTab.value);

        const onClick = () => {
            if (!props.disabled) {
                tabsNavigator.onTabClick(instance);
            }
        };

        const slotProps = reactive<CoreTabItemSlotProps>({
            disabled: computed(() => props.disabled),
            active,
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
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
