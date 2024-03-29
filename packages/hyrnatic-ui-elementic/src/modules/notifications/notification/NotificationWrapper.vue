<template>
    <hr-notification-wrapper v-slot="props" v-bind="core.props" v-on="core.listeners" :style="{width: width}">
        <transition-group tag="div" :class="css_ec('transition-group')" :name="transitionName"
                          @after-leave="transitionEnded">
            <template v-for="notification in props.notifications" :key="notification.id">
                <component :class="css_ec('notification')" :data-id="notification.id" :is="notification.component"
                           :visible="notification.visible" v-bind="notification.props"
                           v-on="notification.compiledListeners"/>
            </template>
        </transition-group>
    </hr-notification-wrapper>
</template>

<script lang="tsx">
import {
    h,
    defineComponent, SetupContext, resolveComponent, computed,
} from 'vue';
import componentCss from '../../../utils/component-css';
import {
    CoreNotificationWrapperSlotProps,
    coreNotificationWrapperSetup,
    coreNotificationWrapperNameProp,
    NotificationManager,
} from '@hyrioo/hyrnatic-ui-core';
import {createLogger} from "vite";

export default defineComponent({
    name: 'h-notification-wrapper',
    components: {},
    props: {
        ...coreNotificationWrapperNameProp,
        placement: {
            type: String,
            default: 'top-right',
        },
        width: {
            type: String,
            default: '400px',
        },
    },
    setup(props, ctx) {
        const componentCssHelpers = componentCss();
        const asProps = (slotProps: CoreNotificationWrapperSlotProps) => ({
            'class': [componentCssHelpers.css_root.value],
            'data-placement': props.placement,
        });
        const core = coreNotificationWrapperSetup().as('div', asProps).props(['name']).build();

        const transitionName = computed(() => {
            if(props.placement.indexOf('top')) {
                return 'notification-slide-down';
            }
            if(props.placement.indexOf('bottom')) {
                return 'notification-slide-up';
            }
            return null;
        });

        const transitionEnded = (el: HTMLElement) => {
            const notificationId = el.dataset.id;
            const wrapper = NotificationManager.getWrapper(props.name);
            const notification = wrapper.getNotification(notificationId);
            if (notification) {
                notification.transitionEnd();
            }
        };

        return {
            core,
            ...componentCssHelpers,
            transitionEnded,
            transitionName,
        };
    },
    /*render() {
        const hrWrapper = resolveComponent('hr-notification-wrapper');
        return h(hrWrapper, { ...this.core.props }, {
            default: (props) => {
                console.log(props.notifications);
                if(props.notifications && props.notifications.length) {
                    console.log(props.notifications);
                    return Object.values(props.notifications).map((d: any) => (
                        h(d.component, {
                            key: d.id, visible: d.visible, ...d.props, ...d.compiledListeners,
                        })
                    ));
                }

                return null;
            }},
        );
    }*/
});
</script>