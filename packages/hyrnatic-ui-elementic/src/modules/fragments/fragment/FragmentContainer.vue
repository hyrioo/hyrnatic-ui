<template>
    <hr-fragment-container v-bind="core.props" :class="[css_root, `${transition}-container`]" :style="{height: actualHeight}">
        <slot />
    </hr-fragment-container>
</template>

<script lang="ts">
import {
    computed, defineComponent, nextTick, provide, reactive, ref, SetupContext,
} from 'vue';
import componentCss from '@elementic/utils/component-css';
import { coreFragmentContainerActiveProp, setup } from '@core/modules/fragments/fragment/FragmentContainer';

export default defineComponent({
    name: 'h-fragment-container',
    props: {
        ...coreFragmentContainerActiveProp,
        transition: {
            type: String,
            default: 'fragment-slide-down',
        },
    },
    setup(props, ctx: SetupContext) {
        const heights = reactive({
            old: null,
            new: null,
            target: null,
        });
        const actualHeight = computed(() => (heights.target === null ? null : `${heights.target}px`));

        const startHeightTransition = () => {
            heights.target = heights.old;
            nextTick(() => {
                nextTick(() => {
                    heights.target = heights.new;
                });
            });
        };
        const setNewHeight = (height) => {
            heights.new = height;
            if (heights.old !== null) {
                nextTick(startHeightTransition);
            }
        };
        const setOldHeight = (height) => {
            heights.old = height;
            if (heights.new !== null) {
                nextTick(startHeightTransition);
            }
        };
        const clearHeights = () => {
            heights.old = null;
            heights.new = null;
            heights.target = null;
        };

        const core = setup().as('div').props(['active']).build();

        provide('fragmentContainer', {
            active: computed(() => props.active),
            transition: props.transition,
            setNewHeight,
            setOldHeight,
            clearHeights,
        });

        return {
            core,
            actualHeight,
            ...componentCss(),
        };
    },
});
</script>
