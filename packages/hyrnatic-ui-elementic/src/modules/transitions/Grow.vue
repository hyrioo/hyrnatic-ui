<template>
    <transition name="grow" @before-enter="beforeEnter" @after-enter="afterEnter" @before-leave="beforeLeave" @after-leave="afterLeave">
        <slot />
    </transition>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
    name: 'h-grow-transition',
    setup(props, ctx: SetupContext) {
        const beforeEnter = (el: HTMLElement) => {
            const originalSize = el.getBoundingClientRect();
            el.style.removeProperty('display');
            el.style.removeProperty('height');
            const size = el.getBoundingClientRect();
            el.style.height = `${originalSize.height}px`;
            setTimeout(() => { el.style.height = `${size.height}px`; }, 10);
        };
        const afterEnter = (el: HTMLElement) => {
            el.style.removeProperty('height');
        };

        const beforeLeave = (el: HTMLElement) => {
            const size = el.getBoundingClientRect();
            el.style.height = `${size.height}px`;
            setTimeout(() => { el.style.height = '0px'; }, 10);
        };
        const afterLeave = (el: HTMLElement) => {
            el.style.removeProperty('height');
        };

        return {
            beforeEnter,
            afterEnter,
            beforeLeave,
            afterLeave,
        };
    },
});
</script>

<style lang="scss" scoped>
.grow-enter-active, .grow-leave-active {
  transition: height 512ms cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: hidden;
}
</style>
