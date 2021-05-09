<template>
    <hr-popper ref="popper" v-bind="core.props" :modifiers="modifiers" :options="options" :classes="classes" v-on="core.listeners">
        <span v-if="showArrow" ref="popperArrow" :class="css_ec('arrow')">
            <slot name="arrow" />
        </span>
        <slot />
    </hr-popper>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, ref, SetupContext,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    corePopperClassesProp,
    corePopperFixedWidthProp,
    corePopperKeepProp,
    corePopperMinimumWidthProp,
    corePopperModifiersProp,
    corePopperOptionsProp,
    corePopperReferenceProp,
    corePopperRootClassesProp,
    corePopperTransitionProp,
    corePopperVisibleProp,
    corePopperSetup,
    corePopperArrowPositionModifier,
} from '@hyrioo/hyrnatic-ui-core';
import { OptionsGeneric } from '@popperjs/core';

export default defineComponent({
    name: 'h-popper',
    props: {
        ...corePopperReferenceProp,
        ...corePopperVisibleProp,
        ...corePopperMinimumWidthProp,
        ...corePopperFixedWidthProp,
        ...corePopperKeepProp,
        ...corePopperOptionsProp,
        ...corePopperModifiersProp,
        ...corePopperClassesProp,
        ...corePopperRootClassesProp,
        ...corePopperTransitionProp,
        arrowReference: {
            type: null,
        },
        showArrow: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['show', 'hide', 'created', 'clickOutside', 'popperSizeChanged', 'update:visible'],
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const popper = ref();
        const popperArrow = ref<HTMLElement>(null);
        const modifiers = computed(() => [
            ...corePopperArrowPositionModifier,
            {
                name: 'maxSize',
                options: {
                    padding: 8,
                },
            },
            {
                name: 'arrowOffset',
                options: {
                    element: popperArrow.value,
                    reference: props.arrowReference,
                },
            },
            ...props.modifiers,
        ]);
        const options = computed<OptionsGeneric<any>>(() => ({
            ...props.options,
        }));
        const classes = computed(() => [
            componentCssHelpers.css_root.value,
            props.classes,
        ]);
        const core = corePopperSetup().props(['reference', 'visible', 'minimumWidth', 'fixedWidth', 'keep', 'rootClasses', 'transition'])
            .events(['show', 'hide', 'created', 'clickOutside', 'update:visible', 'popperSizeChanged'])
            .build();

        const updatePopper = () => {
            popper.value.updatePopper();
        };

        return {
            ...componentCssHelpers,
            classes,
            modifiers,
            options,
            popper,
            popperArrow,
            core,

            updatePopper,
        };
    },
});
</script>
