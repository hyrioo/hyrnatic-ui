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
import componentCss from '../../../utils/component-css';
import {
    CoreTabItemInstance,
    coreTabItemIdProp,
    coreTabItemIdDisabledProp,
    coreTabItemSetup,
    CoreTabItemSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-tab-item',
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
        const instance = reactive<CoreTabItemInstance>({
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

        const asProps = (slotProps: CoreTabItemSlotProps) => ({
            class: { '-active': slotProps.active, '-disabled': slotProps.disabled },
            onClick: slotProps.onClick,
            onKeydown: (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    slotProps.onClick();
                }
            },
        });
        const core = coreTabItemSetup().as('div', asProps).props(['id', 'disabled']).build();

        return {
            core,
            tab,
            ...componentCss(),
        };
    },
});
</script>
