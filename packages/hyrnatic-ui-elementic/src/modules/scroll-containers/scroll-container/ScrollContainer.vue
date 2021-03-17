<template>
    <hr-scroll-container ref="scrollContainer" :class="css_root" v-bind="core.props" v-on="core.listeners">
        <slot />
        <template #verticalBar="props">
            <div v-show="props.visible" ref="verticalTrack" :class="[css_ec('track'), '-vertical', { '-hover': props.trackHover, '-dragging': props.dragging }]">
                <div ref="verticalThumb" :class="[css_ec('thumb'), { '-hover': props.thumbHover, '-dragging': props.dragging }]" :style="{height: `${props.size}px`, transform: `translate(0, ${props.offset}px)` }" />
            </div>
        </template>
        <template #horizontal="props">
            <div v-show="props.visible" ref="horizontalTrack" :class="[css_ec('track'), '-horizontal', { '-hover': props.trackHover, '-dragging': props.dragging }]">
                <div ref="horizontalThumb" :class="[css_ec('thumb'), { '-hover': props.thumbHover, '-dragging': props.dragging }]" :style="{height: `${props.size}px`, transform: `translate(0, ${props.offset}px)` }" />
            </div>
        </template>
    </hr-scroll-container>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    SetupContext, watch,
} from 'vue';
import componentCss from '@/utils/component-css';
import {
    coreScrollContainerAutoHideDelayProp,
    coreScrollContainerAutoHideProp,
    coreScrollContainerClassesProp,
    coreScrollContainerHorizontalProp,
    coreScrollContainerMinimumSizeProp,
    coreScrollContainerVerticalProp,
    coreScrollContainerSetup,
    CoreScrollContainerSlotProps,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-scroll-container',
    props: {
        ...coreScrollContainerHorizontalProp,
        ...coreScrollContainerVerticalProp,
        ...coreScrollContainerAutoHideProp,
        ...coreScrollContainerAutoHideDelayProp,
        ...coreScrollContainerMinimumSizeProp,
        ...coreScrollContainerClassesProp,
    },
    setup(props, ctx: SetupContext) {
        const scrollContainer = ref();
        const verticalTrack = ref();
        const verticalThumb = ref();
        const horizontalTrack = ref();
        const horizontalThumb = ref();

        watch([verticalTrack, verticalThumb], () => {
            scrollContainer.value.registerBar('vertical', verticalTrack.value, verticalThumb.value);
        });
        watch([horizontalTrack, horizontalThumb], () => {
            scrollContainer.value.registerBar('horizontal', horizontalTrack.value, horizontalThumb.value);
        });

        const asProps = (slotProps: CoreScrollContainerSlotProps) => ({
            class: { '-hover': slotProps.anyHover, '-dragging': slotProps.anyDragging, '-is-hidden': slotProps.hidden },
        });
        const core = coreScrollContainerSetup().as('div', asProps).props(['horizontal', 'vertical', 'autoHide', 'autoHideDelay', 'minimumSize', 'classes']).build();

        return {
            core,
            scrollContainer,
            verticalTrack,
            verticalThumb,
            horizontalTrack,
            horizontalThumb,
            ...componentCss(),
        };
    },
});
</script>
