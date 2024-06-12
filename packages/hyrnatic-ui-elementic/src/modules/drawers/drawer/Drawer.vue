<template>
    <hr-dialog v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_root, `-color-${color}`, `-index-${props.stackIndex}`, `-count-${props.stackCount}`, `-active-count-${props.visibleStackCount}`]" :style="{zIndex: zIndex}">
            <transition name="fade-medium" appear
                        @before-leave="transitionStarted('backdrop')" @after-leave="transitionEnded('backdrop')"
            >
                <div v-show="props.visible" :class="[css_ec('backdrop'), `-color-${backdropColor}`]" :style="{opacity: getOpacity(props.stackIndex, props.visibleStackCount)}" />
            </transition>
            <transition :name="slideTransition" appear
                        @before-leave="transitionStarted('box')" @after-leave="transitionEnded('box')"
            >
                <div v-show="props.visible" :class="[css_ec('box'), boxClasses, `-placement-${placement}`, {'-has-footer': $slots.footer}]" :style="{transform: getOffset(props.stackIndex, props.visibleStackCount)}">
                    <div v-if="$slots.title || title" :class="[css_ec('title')]">
                        <slot name="title">
                            <span v-html="title" />
                        </slot>
                    </div>

                    <div :class="[css_ec('content')]">
                        <h-scroll-container>
                            <div :class="[css_ec('inner-content')]">
                                <slot />
                            </div>
                        </h-scroll-container>
                    </div>

                    <div v-if="$slots.footer" :class="[css_ec('footer')]">
                        <slot name="footer" />
                    </div>
                </div>
            </transition>
        </div>
    </hr-dialog>
</template>

<script lang="ts">
import {
    computed,
    defineComponent, inject, PropType, reactive, ref, SetupContext, watch,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreDialogVisibleProp, coreDialogSetup } from '@hyrioo/hyrnatic-ui-core';

export default defineComponent({
    name: 'h-drawer',
    props: {
        ...coreDialogVisibleProp,
        zIndex: {
            type: Number
        },
        title: {
            type: String,
            default: 'test',
        },
        color: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary',
        },
        backdropColor: {
            type: String as PropType<'light' | 'dark'>,
            default: 'light',
        },
        placement: {
            type: String as PropType<'right' | 'left'>,
            default: 'right',
        },
        boxClasses: {
            type: String,
            default: null,
        },
    },
    setup(props, ctx) {
        const transitionEnd = inject<() => void>('dialog-transition-end');
        const activeTransitions = reactive<{[key: string]: boolean}>({});
        const slideTransition = computed(() => (props.placement === 'right' ? 'large2x-slide-to-left-medium' : 'large2x-slide-to-right-medium'));

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

        const getOffset = (index: number, count: number) => {
            if (index < count - 1) {
                return `translateX(${props.placement === 'right' ? '-' : ''}${(count - index - 1) * 64}px)`;
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
            core,
            ...componentCss(),
            slideTransition,
            transitionEnded,
            transitionStarted,
            getOffset,
            getOpacity,
        };
    },
});
</script>
