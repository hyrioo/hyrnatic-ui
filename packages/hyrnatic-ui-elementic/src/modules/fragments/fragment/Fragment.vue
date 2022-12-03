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
    computed, defineComponent, getCurrentInstance, inject, nextTick, ref, SetupContext, watch,
} from 'vue';
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
            setTimeout(() => {
                fragmentContainer.setNewHeight(instance.vnode.el.getBoundingClientRect().height);
            }, 5);
        };
        const onBeforeLeave = () => {
            fragmentContainer.setOldHeight(instance.vnode.el.getBoundingClientRect().height);
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
