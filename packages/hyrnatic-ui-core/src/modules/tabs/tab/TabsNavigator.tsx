import {
    computed, ComputedRef, defineComponent,
    getCurrentInstance, h,
    provide,
    reactive, Ref,
    ref,
    SetupContext,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '@/utils/component';
import Arr from '@/utils/array';
import { TabItemInstance, TabsNavigatorProvide } from '@/modules/tabs/tab/TabItem';

export const coreTabsNavigatorModelValueProp = {
    modelValue: {
        type: String,
        default: null,
    },
};

export type SlotProps = {
    tabs: Ref<TabItemInstance[]>;
    activeTab: ComputedRef<TabItemInstance>;
}

export function setup() {
    return setupBuilder<SlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-tabs-navigator',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreTabsNavigatorModelValueProp,
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const tabs = ref<TabItemInstance[]>([]);
        const activeTab = computed<TabItemInstance>(() => tabs.value.find((t) => t.id === props.modelValue));
        const addTabInstance = (instance: TabItemInstance) => {
            tabs.value.push(instance);
        };
        const removeTabInstance = (instance: TabItemInstance) => {
            tabs.value = Arr.remove(tabs.value, instance);
        };

        const onTabClick = (instance: TabItemInstance) => {
            ctx.emit('update:modelValue', instance.id);
        };

        provide<TabsNavigatorProvide>('coreTabsNavigator', {
            activeTab,
            addTabInstance,
            removeTabInstance,
            onTabClick,
        });

        const slotProps = reactive<SlotProps>({
            tabs,
            activeTab,
        });
        const defaultRender = () => ctx.slots.default(slotProps);

        return {
            activeTab,
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
