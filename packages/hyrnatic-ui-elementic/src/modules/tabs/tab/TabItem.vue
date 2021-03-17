<template>
    <hr-tab-item ref="tab" tabindex="0" :class="[css_root]" v-bind="core.props" v-on="core.listeners">
        {{ label }}
        <!--<hyrnatic-badge :class="['tw-ml-8']" :text="badge" v-if="badge" />-->
    </hr-tab-item>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    inject,
    SetupContext,
    onUpdated, onMounted, onUnmounted, reactive, computed,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import HrTabItem, {
    coreTabItemIdDisabledProp,
    coreTabItemIdProp,
    setup, SlotProps, TabItemInstance, TabsNavigatorProvide,
} from '@core/modules/tabs/tab/TabItem';

export default defineComponent({
    name: 'h-tab-item',
    components: { HrTabItem },
    props: {
        ...coreTabItemIdProp,
        ...coreTabItemIdDisabledProp,
        label: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const tab = ref();
        const updateIndicator = inject<Function>('updateIndicator');
        const tabsNavigator = inject<any>('tabsNavigator');
        const instance = reactive<TabItemInstance>({
            id: props.id,
        });

        onMounted(() => {
            instance.ref = tab.value.$el;
            tabsNavigator.addTabInstance(instance);
        });
        onUnmounted(() => {
            tabsNavigator.removeTabInstance(instance);
        });
        onUpdated(() => {
            updateIndicator();
        });

        const asProps = (slotProps: SlotProps) => ({
            class: { '-active': slotProps.active, '-disabled': slotProps.disabled },
            onClick: slotProps.onClick,
            onKeydown: (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    slotProps.onClick();
                }
            },
        });
        const core = setup().as('div', asProps).props(['id', 'disabled']).build();

        return {
            core,
            tab,
            ...componentCss(),
        };
    },
});
</script>
