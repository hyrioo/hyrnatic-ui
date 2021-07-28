<template>
    <transition :name="transitionName" @enter="onEnter" @afterEnter="onAfterEnter" @before-leave="onBeforeLeave"
                :enter-active-class="`${transitionName}-enter-active -transitioning`"
                :leave-active-class="`${transitionName}-leave-active -transitioning`">
        <div v-if="isActive" :class="[css_root]">
            <slot />
        </div>
    </transition>
</template>

<script lang="ts">
import {
    computed, defineComponent, getCurrentInstance, inject, ref, SetupContext,
} from 'vue';
import getSize from 'get-size';
import componentCss from '../../../utils/component-css';

export default defineComponent({
    name: 'h-fragment',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const instance = getCurrentInstance();
        const fragmentContainer = inject<any>('fragmentContainer');
        const isActive = computed(() => props.id === fragmentContainer.active.value);
        const transitionName = computed(() => fragmentContainer.transition);

        const onEnter = () => {
            fragmentContainer.setNewHeight(getSize(instance.vnode.el).height);
        };
        const onBeforeLeave = () => {
            fragmentContainer.setOldHeight(getSize(instance.vnode.el).height);
        };
        const onAfterEnter = () => {
            fragmentContainer.clearHeights();
        };

        return {
            isActive,
            transitionName,
            onEnter,
            onBeforeLeave,
            onAfterEnter,
            ...componentCss(),
        };
    },
});
</script>
