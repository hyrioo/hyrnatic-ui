<template>
    <hr-tabs-navigator v-slot="props" ref="tabsNavigator" :class="[css_root, {'-vertical': vertical}]" v-bind="core.props" v-on="core.listeners">
        <slot />
        <div :class="[css_ec('indicator'), {'-hidden': props.activeTab === null}]" :style="indicatorStyle" />
    </hr-tabs-navigator>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, SetupContext, onMounted, provide, watch, nextTick,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import HrTabsNavigator, { coreTabsNavigatorModelValueProp, setup } from '@core/modules/tabs/tab/TabsNavigator';
import { TabItemInstance, TabsNavigatorProvide, TabsNavigatorReturn } from '@core/modules/tabs/tab/TabItem';
import Arr from '@core/utils/array';

export default defineComponent({
    name: 'h-tabs-navigator',
    components: { HrTabsNavigator },
    props: {
        ...coreTabsNavigatorModelValueProp,
        vertical: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx: SetupContext) {
        const tabsNavigator = ref<TabsNavigatorReturn>();
        const tabs = ref<TabItemInstance[]>([]);
        const addTabInstance = (instance: TabItemInstance) => {
            tabs.value.push(instance);
        };
        const removeTabInstance = (instance: TabItemInstance) => {
            tabs.value = Arr.remove(tabs.value, instance);
        };
        const indicatorSize = ref(0);
        const indicatorOffset = ref(0);
        const indicatorStyle = computed(() => (
            props.vertical ? {
                transform: `translate(0, ${indicatorOffset.value}px)`,
                height: `${indicatorSize.value}px`,
            } : {
                transform: `translate(${indicatorOffset.value}px, 0)`,
                width: `${indicatorSize.value}px`,
            }
        ));

        const updateIndicator = () => {
            if (tabsNavigator.value && tabsNavigator.value.activeTab) {
                const activeTab = tabs.value.find((t) => t.id === tabsNavigator.value.activeTab.id);
                if (activeTab) {
                    indicatorOffset.value = props.vertical ? activeTab.ref.offsetTop : activeTab.ref.offsetLeft;
                    indicatorSize.value = props.vertical ? activeTab.ref.offsetHeight : activeTab.ref.offsetWidth;
                }
            }
        };
        onMounted(() => updateIndicator());
        nextTick(() => watch(() => tabsNavigator.value.activeTab, updateIndicator));
        provide('updateIndicator', updateIndicator);

        provide('tabsNavigator', {
            addTabInstance,
            removeTabInstance,
        });

        const core = setup().as('div').props(['modelValue']).events(['update:modelValue'])
            .build();

        return {
            tabsNavigator,
            core,
            indicatorStyle,
            updateIndicator,

            ...componentCss(),
        };
    },
});
</script>
