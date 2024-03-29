<template>
    <hr-tabs-navigator v-slot="props" :ref="el => setNavigator(el)" :class="[css_root, {'-vertical': vertical}]" v-bind="core.props" v-on="core.listeners">
        <slot />
        <div :class="[css_ec('indicator'), {'-hidden': props.activeTab === null}]" :style="indicatorStyle" />
    </hr-tabs-navigator>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, onMounted, provide, watch
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CoreTabItemInstance,
    CoreTabsNavigatorReturn,
    coreTabsNavigatorModelValueProp,
    coreTabsNavigatorSetup,
    ArrayHelper,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-tabs-navigator',
    props: {
        ...coreTabsNavigatorModelValueProp,
        vertical: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props) {
        const tabsNavigator = ref<CoreTabsNavigatorReturn>();
        const tabs = ref<CoreTabItemInstance[]>([]);
        const addTabInstance = (instance: CoreTabItemInstance) => {
            tabs.value.push(instance);
        };
        const removeTabInstance = (instance: CoreTabItemInstance) => {
            tabs.value = ArrayHelper.remove(tabs.value, instance);
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
                const tabId = tabsNavigator.value.activeTab.id;
                const activeTab = tabs.value.find((t) => t.id === tabId);
                if (activeTab && activeTab.ref) {
                    indicatorOffset.value = props.vertical ? activeTab.ref.offsetTop : activeTab.ref.offsetLeft;
                    indicatorSize.value = props.vertical ? activeTab.ref.offsetHeight : activeTab.ref.offsetWidth;
                }
            }
        };
        const setNavigator = (el: CoreTabsNavigatorReturn) => {
            tabsNavigator.value = el;
            watch(() => tabsNavigator.value ? tabsNavigator.value.activeTab : null, updateIndicator);
        }
        onMounted(() => updateIndicator());
        provide('updateIndicator', updateIndicator);

        provide('tabsNavigator', {
            addTabInstance,
            removeTabInstance,
        });

        const core = coreTabsNavigatorSetup().as('div').props(['modelValue']).events(['update:modelValue'])
            .build();

        return {
            setNavigator,
            core,
            indicatorStyle,
            updateIndicator,

            ...componentCss(),
        };
    },
});
</script>
