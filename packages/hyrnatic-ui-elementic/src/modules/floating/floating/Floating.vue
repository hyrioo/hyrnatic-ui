<template>
    <hr-floating ref="floating" :middlware="middleware" v-bind="core.props" v-on="core.listeners">
        <span v-if="showArrow" ref="floatingArrow" :class="css_ec('arrow')">
            <slot name="arrow" />
        </span>
        <slot />
    </hr-floating>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    coreFloatingReferenceProp,
    coreFloatingVisibleProp,
    coreFloatingMiddlewareProp,
    coreFloatingTransitionProp,
    coreFloatingSetup,
} from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-floating',
    props: {
        ...coreFloatingReferenceProp,
        ...coreFloatingVisibleProp,
        ...coreFloatingMiddlewareProp,
        ...coreFloatingTransitionProp,
        arrowReference: {
            type: null,
        },
        showArrow: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['show', 'hide', 'created', 'clickOutside', 'floatingSizeChanged', 'update:visible'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const floating = ref();
        const floatingArrow = ref<HTMLElement>(null);
        const middleware = computed(() => [
            ...props.middleware,
        ]);
        const core = coreFloatingSetup().props(['reference', 'visible', 'placement', 'transition'])
            .events(['show', 'hide', 'created', 'clickOutside', 'update:visible', 'floatingSizeChanged'])
            .build();

        return {
            ...componentCssHelpers,
            middleware,
            floating,
            floatingArrow,
            core,
        };
    },
});
</script>
