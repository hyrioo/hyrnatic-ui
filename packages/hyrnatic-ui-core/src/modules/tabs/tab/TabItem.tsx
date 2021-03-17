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
} from '@/utils/component';

export type TabItemInstance = {
    id: string;
    ref?: HTMLElement;
};

export type TabsNavigatorProvide = {
    activeTab: ComputedRef<TabItemInstance>;
    onTabClick(instance: TabItemInstance): void;
    addTabInstance(instance: TabItemInstance): void;
    removeTabInstance(instance: TabItemInstance): void;
};

export type TabsNavigatorReturn = {
    activeTab: TabItemInstance;
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

export type SlotProps = {
    disabled: ComputedRef<boolean>;
    active: ComputedRef<boolean>;
    onClick: () => any;
}

export function setup() {
    return setupBuilder<SlotProps>(getCurrentInstance());
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
        const tabsNavigator = inject<TabsNavigatorProvide>('coreTabsNavigator');
        const instance = reactive<TabItemInstance>({
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

        const slotProps = reactive<SlotProps>({
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
            return h(this.$props.as, { ...this.$props.asProps(this.slotProps) }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
