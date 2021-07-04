<template>
    <hr-dialog v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_root, `-styling-${styling}`, `-index-${props.stackIndex}`, `-count-${props.stackCount}`, `-active-count-${props.activeStackCount}`]">
            <transition name="fade-medium" appear
                        @before-leave="transitionStarted('backdrop')" @after-leave="transitionEnded('backdrop')"
            >
                <div v-show="props.visible" :class="[css_ec('backdrop')]" :style="{opacity: getOpacity(props.stackIndex, props.activeStackCount)}" />
            </transition>
            <transition name="small-slide-up-medium" appear
                        @before-leave="transitionStarted('box')" @after-leave="transitionEnded('box')"
            >
                <div v-show="props.visible" :class="[css_ec('box-container')]" :style="{transform: getScale(props.stackIndex, props.activeStackCount)}">
                    <div :class="[css_ec('box')]">
                        <div v-if="showCloseIcon" :class="[css_ec('close-icon')]">
                            <h-button :icon="Icons.close" styling="none" size="small" @click="props.close" />
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
    </hr-dialog>
</template>

<script lang="ts">
import {
    defineComponent, reactive, ref, SetupContext, watch,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { coreDialogVisibleProp, coreDialogSetup } from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-dialog',
    props: {
        ...coreDialogVisibleProp,
        title: {
            type: String,
            default: 'test',
        },
        styling: {
            type: String,
            default: 'primary',
        },
        showCloseIcon: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['reject', 'resolve', 'transitionEnd'],
    setup(props, ctx: SetupContext) {
        const activeTransitions = reactive({});

        watch(activeTransitions, () => {
            if (Object.keys(activeTransitions).length === 0) {
                ctx.emit('transitionEnd');
            }
        });

        const transitionEnded = (key) => {
            if (props.visible === false) {
                delete activeTransitions[key];
            }
        };
        const transitionStarted = (key) => {
            if (props.visible === false) {
                activeTransitions[key] = true;
            }
        };

        const getScale = (index, count) => {
            if (index < count - 1) {
                return `scale(${1 - (0.1 * (count - index - 1))})`;
            } else {
                return null;
            }
        };
        const getOpacity = (index, count) => {
            if (index < count - 1) {
                return 1 - (0.25 * (count - index));
            } else {
                return null;
            }
        };

        const core = coreDialogSetup(['visible'], ['reject']);

        return {
            Icons,
            core,
            ...componentCss(),
            transitionEnded,
            transitionStarted,
            getScale,
            getOpacity,
        };
    },
});
</script>
