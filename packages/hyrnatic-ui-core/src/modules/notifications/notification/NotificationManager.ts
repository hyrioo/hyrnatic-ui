import { InternalNotificationObject, NotificationObject, Wrapper, wrappers } from './NotificationWrapper';
import {
    getCurrentInstance, inject, provide, reactive, shallowRef,
} from 'vue';

export type NotificationOptions = {
    wrapper?: string;
    duration?: number | null;
    resetDurationOnInteractivity?: boolean;
};

export const DefaultNotificationOptions: NotificationOptions = {
    wrapper: 'default',
    duration: 1500,
    resetDurationOnInteractivity: true,
}

export function show<P extends {} = {}, L extends {} = {}>(component, props: P = null, listeners: L = null, options?: NotificationOptions): { destroy: () => void; promise: Promise<any> } {
    const mergedOptions = {...DefaultNotificationOptions, ...options};
    console.log(mergedOptions);
    const wrapper = mergedOptions.wrapper;

    let notification: InternalNotificationObject = null;
    const promise = new Promise((resolve, reject) => {
        notification = wrappers[wrapper].addNotification({
            component: shallowRef(component),
            listeners: listeners !== null ? reactive(listeners) : null,
            props: props !== null ? reactive(props) : null,
            options: mergedOptions,
            promise: { resolve, reject },
        });
    });

    return {
        promise,
        destroy: () => wrappers[wrapper].destroyNotification(notification.id),
    };
}
export function showPromise<P extends {} = {}, L extends {} = {}>(component, props: P = null, listeners: L = null, options?: NotificationOptions): Promise<any> {
    return show<P, L>(component, props, listeners, options).promise;
}
export function getWrapper(key: string = 'default'): Wrapper {
    return wrappers[key];
}
function getNotification(key: string): InternalNotificationObject {
    const wrapper = inject<string>('wrapper-name');
    return wrappers[wrapper].getNotification(key);
}

export function setupNotification() {
    const ctx = getCurrentInstance();
    const internalNotificationObject = getNotification(ctx.vnode.key as string);
    console.log(internalNotificationObject);
    provide('notification-id', ctx.vnode.key);
    provide('notification-resolve', internalNotificationObject.resolve);
    provide('notification-reject', internalNotificationObject.reject);
    provide('notification-transition-end', internalNotificationObject.transitionEnd);

    return {
        resolve: internalNotificationObject.resolve,
        reject: internalNotificationObject.reject,
    }
}
