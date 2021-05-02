<template>
    <transition name="grow" @before-enter="beforeEnter" @after-enter="afterEnter" @before-leave="beforeLeave" @after-leave="afterLeave">
        <slot />
    </transition>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import getSize from 'get-size';

export default defineComponent({
    name: 'hr-grow-transition',
    setup(props, ctx: SetupContext) {
        const beforeEnter = (el) => {
            const originalSize = getSize(el);
            el.style.removeProperty('display');
            el.style.removeProperty('height');
            const size = getSize(el);
            el.style.height = `${originalSize.innerHeight}px`;
            setTimeout(() => { el.style.height = `${size.innerHeight}px`; }, 10);
        };
        const afterEnter = (el) => {
            el.style.removeProperty('height');
        };

        const beforeLeave = (el) => {
            const size = getSize(el);
            el.style.height = `${size.innerHeight}px`;
            setTimeout(() => { el.style.height = '0px'; }, 10);
        };
        const afterLeave = (el) => {
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

<style lang="scss">
.grow-enter-active, .grow-leave-active {
  transition: height 512ms cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: hidden;
}
</style>
