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
} from '../../../utils/component';
import Arr from '../../../utils/array';
import { CoreTabItemInstance, CoreTabsNavigatorProvide } from './TabItem';

export const coreTabsNavigatorModelValueProp = {
    modelValue: {
        type: String,
        default: null,
    },
};

export type CoreTabsNavigatorSlotProps = {
    tabs: Ref<CoreTabItemInstance[]>;
    activeTab: ComputedRef<CoreTabItemInstance>;
}

export function coreTabsNavigatorSetup() {
    return setupBuilder<CoreTabsNavigatorSlotProps>(getCurrentInstance());
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
        const tabs = ref<CoreTabItemInstance[]>([]);
        const activeTab = computed<CoreTabItemInstance>(() => tabs.value.find((t) => t.id === props.modelValue));
        const addTabInstance = (instance: CoreTabItemInstance) => {
            tabs.value.push(instance);
        };
        const removeTabInstance = (instance: CoreTabItemInstance) => {
            tabs.value = Arr.remove(tabs.value, instance);
        };

        const onTabClick = (instance: CoreTabItemInstance) => {
            ctx.emit('update:modelValue', instance.id);
        };

        provide<CoreTabsNavigatorProvide>('coreTabsNavigator', {
            activeTab,
            addTabInstance,
            removeTabInstance,
            onTabClick,
        });

        const slotProps = reactive<CoreTabsNavigatorSlotProps>({
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
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
