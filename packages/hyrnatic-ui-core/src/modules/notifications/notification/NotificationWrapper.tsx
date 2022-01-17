import {
    h,
    defineComponent,
    SetupContext,
    ref,
    DefineComponent,
    computed,
    Teleport,
    ComputedRef, reactive, Ref, provide, getCurrentInstance, render,
} from 'vue';
import Str from '../../../utils/string';
import { coreComponentAsProp, coreComponentAsPropsProp, setupBuilder } from '../../../utils/component';
import { NotificationOptions } from './NotificationManager';

export interface NotificationObject {
    component: DefineComponent;
    listeners: object;
    props: object;
    options: NotificationOptions;
    promise: { resolve: (payload: any) => void; reject: (payload: any) => void };
}
export interface InternalNotificationObject extends NotificationObject {
    id: string;
    visible: boolean;
    compiledListeners: ComputedRef;
    resolve: (payload?: any) => void;
    reject: (payload?: any) => void;
    transitionEnd: () => void;
    durationTimeout: any;
}
export type Wrapper = {
    addNotification(notification: NotificationObject): InternalNotificationObject;
    getNotification(id: string): InternalNotificationObject;
    destroyNotification(id: string): void;
    pauseDuration(id: string);
    resumeDuration(id: string);
}

export const wrappers: { [key: string]: Wrapper } = {};

export const coreNotificationWrapperNameProp = {
    name: {
        type: String,
        default: 'default',
    },
};
export type CoreNotificationWrapperSlotProps = {
    name: ComputedRef<string>;
    notifications: ComputedRef<{ [key: string]: InternalNotificationObject }>;
}
export function coreNotificationWrapperSetup() {
    return setupBuilder<CoreNotificationWrapperSlotProps>(getCurrentInstance());
}

export default defineComponent({
    name: 'hr-notification-wrapper',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreNotificationWrapperNameProp,
    },
    setup: function (props, ctx: SetupContext) {
        provide('wrapper-name', props.name);

        /**
         * Collection of all notifications in the wrapper
         */
        const notifications = reactive<{ [key: string]: InternalNotificationObject }>({});

        /**
         * Uppercase first character of a string
         * @param string
         */
        const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

        /**
         * Pascalize a kebab-case string
         * @param string
         */
        const pascalize = (string: string): string => {
            // splitting words by dash
            const words = string.split('-');
            // use capitalize function to capitalize every word
            const capitalized = words.map((word) => capitalize(word));
            // glue up words with .join()
            return capitalized.join('');
        };

        /**
         * Convert listeners to JSX type listener eg. click => onClick
         * @param listeners
         */
        const convertListeners = (listeners) => {
            const l = {};
            Object.keys(listeners).forEach((key) => {
                l[`on${pascalize(key)}`] = listeners[key];
            });
            return l;
        };

        /**
         * Trigger hide transition
         * @param id
         */
        const hideNotification = (id) => {
            const notification = notifications[id];
            notification.visible = false;
        };

        /**
         * Remove the notification from the DOM
         * @param id
         */
        const removeNotification = (id) => {
            delete notifications[id];
        };

        /**
         * Hide and remove notification without trigger reject and resolve
         * @param id
         */
        const destroyNotification = (id) => {
            hideNotification(id);
        };

        const pauseDuration = (id) => {
            const notification = notifications[id];
            if(notification.durationTimeout !== null && notification.options.resetDurationOnInteractivity) {
                clearTimeout(notification.durationTimeout);
                notification.durationTimeout = null;
            }
        }
        const resumeDuration = (id) => {
            pauseDuration(id);
            const notification = notifications[id];
            if(notification.options.duration !== null && notification.durationTimeout === null) {
                notification.durationTimeout = setTimeout(() => {
                    notification.reject();
                }, notification.options.duration);
            }
        }

        /**
         * Add a notification to the wrapper
         * @param notification
         */
        const addNotification = (notification: NotificationObject) => {
            const internalNotification: InternalNotificationObject = notification as InternalNotificationObject;
            internalNotification.resolve = (payload: any = null) => {
                internalNotification.promise.resolve(payload);
                hideNotification(internalNotification.id);
            };
            internalNotification.reject = (payload: any = null) => {
                internalNotification.promise.reject(payload);
                hideNotification(internalNotification.id);
            };
            internalNotification.transitionEnd = () => {
                removeNotification(internalNotification.id);
            };
            internalNotification.visible = true;
            internalNotification.id = Str.random();
            internalNotification.compiledListeners = computed(() => internalNotification.listeners ? convertListeners(internalNotification.listeners) : {});
            internalNotification.durationTimeout = null;
            notifications[internalNotification.id] = internalNotification;

            resumeDuration(internalNotification.id);

            return internalNotification;
        };

        /**
         * Get the InternalNotificationObject for a notification id
         * @param id
         */
        const getNotification = (id): InternalNotificationObject => notifications[id];


        const wrapper: Wrapper = {
            addNotification,
            getNotification,
            destroyNotification,
            pauseDuration,
            resumeDuration,
        };
        wrappers[props.name] = wrapper;


        const slotProps = reactive<CoreNotificationWrapperSlotProps>({
            name: computed(() => props.name),
            notifications: computed(() => notifications),
        });
        return {
            ...wrapper,
            slotProps,
            INotifications: notifications,
        };
    },
    render() {
        const defaultRender = () => this.$slots.default(this.slotProps);
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, defaultRender());
        }
        return defaultRender();
    },
});
