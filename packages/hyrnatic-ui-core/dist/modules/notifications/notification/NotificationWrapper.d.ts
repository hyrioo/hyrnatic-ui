import { DefineComponent, ComputedRef } from 'vue';
import { NotificationOptions } from './NotificationManager';
export interface NotificationObject {
    component: DefineComponent;
    listeners: object | null;
    props: object | null;
    options: NotificationOptions;
    promise: {
        resolve: (payload: any) => void;
        reject: (payload: any) => void;
    };
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
export declare type Wrapper = {
    addNotification(notification: NotificationObject): InternalNotificationObject;
    getNotification(id: string): InternalNotificationObject;
    destroyNotification(id: string): void;
    pauseDuration(id: string): void;
    resumeDuration(id: string): void;
};
export declare const wrappers: {
    [key: string]: Wrapper;
};
export declare const coreNotificationWrapperNameProp: {
    name: {
        type: StringConstructor;
        default: string;
    };
};
export declare type CoreNotificationWrapperSlotProps = {
    name: ComputedRef<string>;
    notifications: ComputedRef<{
        [key: string]: InternalNotificationObject;
    }>;
};
export declare function coreNotificationWrapperSetup(): {
    as(tag: string, func?: (slotProps: CoreNotificationWrapperSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    slotProps: {
        name: string;
        notifications: {
            [key: string]: InternalNotificationObject;
        };
    };
    INotifications: {
        [key: string]: InternalNotificationObject;
    };
    addNotification(notification: NotificationObject): InternalNotificationObject;
    getNotification(id: string): InternalNotificationObject;
    destroyNotification(id: string): void;
    pauseDuration(id: string): void;
    resumeDuration(id: string): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    name: string;
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;
