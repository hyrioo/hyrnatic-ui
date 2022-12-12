<template>
    <hr-floating ref="floating" :middleware="middleware"
                 :data-floating-placement="floatingPlacement"
                 v-bind="{...core.props, ...$attrs}" v-on="core.listeners"
                 @computed-position="onComputedPosition">
        <span v-if="showArrow" ref="floatingArrow" :style="{position: 'absolute', ...arrowStyle}"
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
    },
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const floating = ref();
        const floatingArrow = ref<HTMLElement>(null);
        const arrowStyle = ref({});
        const arrowPlacement = ref(arrowSide[props.placement]);
        const floatingPlacement = ref(props.placement);
        const middleware = computed(() => {
            const m = [...props.middleware];
            if (props.showArrow) {
                m.push(arrow({
                    element: floatingArrow.value,
                }));
            }
            return m;
        });

        const onComputedPosition = (data: ComputePositionReturn) => {
            floatingPlacement.value = data.placement;
            const side = data.placement.split('-')[0];
            if (data.middlewareData.arrow) {
                arrowStyle.value = {
                    left: data.middlewareData.arrow.x != null ? `${data.middlewareData.arrow.x}px` : '',
                    top: data.middlewareData.arrow.y != null ? `${data.middlewareData.arrow.y}px` : '',
                    [arrowSide[side]]: `${-floatingArrow.value[arrowSize[side]]}px`,
                };
                arrowPlacement.value = arrowSide[side];
            }
            ctx.emit('computedPosition', data);
        };
        const onRequestSize = (data) => {

        }

        const core = coreFloatingSetup().props(['as', 'reference', 'visible', 'placement', 'transition'])
            .events(['clickOutside'])
            .build();

        return {
            ...componentCssHelpers,
            middleware,
            floating,
            floatingPlacement,
            floatingArrow,
            arrowStyle,
            arrowPlacement,
            core,
            onComputedPosition,
        };
    },
});
</script>
