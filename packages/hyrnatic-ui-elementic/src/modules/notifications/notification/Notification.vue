<template>
    <hr-notification v-show="visible" v-slot="props" v-bind="core.props" v-on="core.listeners">
        <div :class="[css_ec('box')]" @mouseenter="props.pauseDuration" @mouseleave="props.resumeDuration">
            <div v-if="showCloseButton" :class="[css_ec('close-icon')]">
                <h-icon-button :icon="Icons.close" styling="subtle" :color="color" size="small" @click="props.close" />
            </div>
            <div v-if="$slots.title || title" :class="[css_ec('title')]">
                <slot name="title">
                    <span v-html="title" />
                </slot>
            </div>

            <div :class="[css_ec('content')]">
                <slot />
            </div>
        </div>
    </hr-notification>
</template>

<script lang="ts">
import {
    defineComponent, inject, PropType, reactive, ref, SetupContext, watch,
} from 'vue';
import componentCss from '../../../utils/component-css';
import { NotificationManager, coreNotificationVisibleProp, coreNotificationSetup, CoreNotificationSlotProps } from '@hyrioo/hyrnatic-ui-core';
import Icons from '../../../icons';

export default defineComponent({
    name: 'h-notification',
    props: {
        ...coreNotificationVisibleProp,
        title: {
            type: String,
            default: null,
        },
        color: {
            type: String as PropType<'primary' | 'danger'>,
            default: 'primary',
        },
        showCloseButton: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, ctx: SetupContext) {
        const componentCssHelpers = componentCss();
        const transitionEnd = inject<() => void>('notification-transition-end');
        const activeTransitions = reactive({});

        watch(activeTransitions, () => {
            if (Object.keys(activeTransitions).length === 0) {
                transitionEnd();
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

        const asProps = (slotProps: CoreNotificationSlotProps) => ({
            class: [componentCssHelpers.css_root.value, `-color-${props.color}`,],
        });
        const core = coreNotificationSetup().as('div', asProps).props(['visible']).build();

        return {
            Icons,
            core,
            ...componentCss(),
            transitionEnded,
            transitionStarted,
        };
    },
});
</script>
