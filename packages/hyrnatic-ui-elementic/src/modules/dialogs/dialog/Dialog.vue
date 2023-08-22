<template>
    <hr-dialog v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_root, `-color-${color}`, `-index-${props.stackIndex}`, `-count-${props.stackCount}`, `-visible-count-${props.visibleStackCount}`]" :style="{zIndex: zIndex}">
            <transition name="fade-medium" appear
                        @before-leave="transitionStarted('backdrop')" @after-leave="transitionEnded('backdrop')"
            >
                <div v-show="props.visible" :class="[css_ec('backdrop')]" :style="{opacity: getOpacity(props.stackIndex, props.visibleStackCount)}" />
            </transition>
            <div ref="scrollContainer" :class="[css_ec('scroll-container'), {'-transitioning': lockScroll && activeTransitions['box'], '-body-has-scrollbar': lockScroll && bodyScrollbarWidth > 0}]">
                <transition name="small-slide-up-medium" appear
                            @before-leave="transitionStarted('box')" @after-leave="transitionEnded('box')"
                >
                    <div v-show="props.visible" :class="[css_ec('box-container'), boxClasses]" :style="{transform: getScale(props.stackIndex, props.visibleStackCount)}">
                        <div :class="[css_ec('box')]">
                            <div v-if="showCloseButton" :class="[css_ec('close-icon')]">
                                <h-icon-button :icon="Icons.close" styling="subtle" size="small" @click="props.close" />
                            </div>
                            <div v-if="$slots.title || title" :class="[css_ec('title')]">
                                <slot name="title">
                                    <span v-html="title" />
                                </slot>
                            </div>

                            <div :class="[css_ec('content')]">
                                <slot />
                            </div>

                            <div v-if="$slots.footer" :class="[css_ec('footer')]">
                                <slot name="footer" />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </hr-dialog>
</template>

<script lang="ts">
import {
    defineComponent, inject, PropType, reactive, ref, SetupContext, watch,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreDialogVisibleProp, coreDialogSetup } from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';
import { useCssVar, useResizeObserver } from '@vueuse/core';

export default defineComponent({
    name: 'h-dialog',
    props: {
        ...coreDialogVisibleProp,
        zIndex: {
            type: Number
        },
        title: {
            type: String,
            default: null,
        },
        color: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary',
        },
        boxClasses: {
            type: String,
            default: null,
        },
        showCloseButton: {
            type: Boolean,
            default: true,
        },
        lockScroll: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const transitionEnd = inject<() => void>('dialog-transition-end');
        const activeTransitions = reactive<{[key: string]: boolean}>({});
        const scrollContainer = ref();

        const bodyScrollbarWidth = inject<number>('global-scrollbar-width');
        const containerScrollbarWidth = useCssVar('--h-scrollbar-width', scrollContainer);
        useResizeObserver(scrollContainer, (entries) => {
            if(props.visible) {
                containerScrollbarWidth.value = `${scrollContainer.value.offsetWidth - scrollContainer.value.clientWidth}px`;
                console.log(containerScrollbarWidth.value);
            }
        });

        watch(activeTransitions, () => {
            if (Object.keys(activeTransitions).length === 0 && transitionEnd) {
                transitionEnd();
            }
        });

        const transitionEnded = (key: string) => {
            if (props.visible === false) {
                delete activeTransitions[key];
            }
        };
        const transitionStarted = (key: string) => {
            if (props.visible === false) {
                activeTransitions[key] = true;
            }
        };

        const getScale = (index: number, count: number) => {
            if (index < count - 1) {
                return `scale(${1 - (0.1 * (count - index - 1))})`;
            } else {
                return null;
            }
        };
        const getOpacity = (index: number, count: number) => {
            if (index < count - 1) {
                return 1 - (0.25 * (count - index));
            } else {
                return null;
            }
        };

        const core = coreDialogSetup(['visible']);

        return {
            Icons,
            core,
            ...componentCss(),
            transitionEnded,
            transitionStarted,
            activeTransitions,
            getScale,
            getOpacity,
            scrollContainer,
            bodyScrollbarWidth,
        };
    },
});
</script>
