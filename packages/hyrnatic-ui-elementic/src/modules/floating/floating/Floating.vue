<template>
    <hr-floating ref="floating" :middleware="middleware"
                 :data-floating-placement="floatingPlacement"
                 :data-floating-alignment="floatingAlignment"
                 v-bind="{...core.props, ...$attrs}" v-on="core.listeners"
                 @computed-position="onComputedPosition">
        <span v-if="showArrow" ref="floatingArrow" :style="{display: 'flex', position: 'absolute', ...arrowStyle}"
              :data-arrow-placement="arrowPlacement">
            <slot name="arrow" />
        </span>
        <slot />
    </hr-floating>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, reactive, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreComponentAsProp,
    coreFloatingReferenceProp,
    coreFloatingVisibleProp,
    coreFloatingMiddlewareProp,
    coreFloatingTransitionProp,
    coreFloatingPlacementProp,
    coreFloatingClassesProp,
    CoreFloatingClickOutsideEvent,
    coreFloatingSetup,
    splitPlacement,
    coreFloatingArrowReference,
} from '@hyrioo/hyrnatic-ui-core';
import { arrow, ComputePositionReturn } from '@floating-ui/dom';

const arrowSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const arrowSize = {
    top: 'offsetHeight',
    right: 'offsetWidth',
    bottom: 'offsetHeight',
    left: 'offsetWidth'
};

export default defineComponent({
    name: 'h-floating',
    props: {
        ...coreComponentAsProp,
        ...coreFloatingReferenceProp,
        ...coreFloatingVisibleProp,
        ...coreFloatingMiddlewareProp,
        ...coreFloatingTransitionProp,
        ...coreFloatingPlacementProp(),
        arrowReference: {
            type: null,
        },
        showArrow: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        clickOutside: (event: CoreFloatingClickOutsideEvent) => true,
        computedPosition: (data: ComputePositionReturn) => true,
        'update:visible': () => true,
        show: () => true,
        hide: () => true,
    },
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const floating = ref();
        const floatingArrow = ref<HTMLElement>(null);
        const arrowStyle = ref({});

        const arrowPlacement = ref(arrowSide[splitPlacement(props.placement).placement]);
        const floatingPlacement = ref(splitPlacement(props.placement).placement);
        const floatingAlignment = ref(splitPlacement(props.placement).alignment);
        const middleware = computed(() => {
            const m = [...props.middleware];
            if (props.showArrow) {
                m.push(coreFloatingArrowReference({
                    reference: props.arrowReference,
                    element: floatingArrow.value,
                }));
            }
            return m;
        });


        const onComputedPosition = (data: ComputePositionReturn) => {
            const placement = splitPlacement(data.placement);
            floatingPlacement.value = placement.placement;
            floatingAlignment.value = placement.alignment;
            const side = floatingPlacement.value;
            if (data.middlewareData.arrowReference) {
                arrowStyle.value = {
                    left: data.middlewareData.arrowReference.x != null ? `${data.middlewareData.arrowReference.x}px` : '',
                    top: data.middlewareData.arrowReference.y != null ? `${data.middlewareData.arrowReference.y}px` : '',
                    [arrowSide[side]]: `${-floatingArrow.value[arrowSize[side]]}px`,
                };
                arrowPlacement.value = arrowSide[side];
            }
            ctx.emit('computedPosition', data);
        };

        const core = coreFloatingSetup().props(['as', 'reference', 'visible', 'placement', 'transition'])
            .events(['clickOutside', 'show', 'hide'])
            .build();

        return {
            ...componentCssHelpers,
            middleware,
            floating,
            floatingPlacement,
            floatingAlignment,
            floatingArrow,
            arrowStyle,
            arrowPlacement,
            core,
            onComputedPosition,
        };
    },
});
</script>
