import { DefineComponent, ComputedRef } from 'vue';
import { NotificationOptions } from './NotificationManager';
export interface NotificationObject {
    component: DefineComponent;
    listeners: object;
    props: object;
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
    pauseDuration(id: string): any;
    resumeDuration(id: string): any;
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
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    slotProps: {
        name: string;
        notifications: {
            [x: string]: {
                id: string;
                visible: boolean;
                compiledListeners: any;
                resolve: (payload?: any) => void;
                reject: (payload?: any) => void;
                transitionEnd: () => void;
                durationTimeout: any;
                component: DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
                listeners: object & {};
                props: object & {};
                options: {
                    wrapper?: string;
                    duration?: number;
                    resetDurationOnInteractivity?: boolean;
                };
                promise: {
                    resolve: (payload: any) => void;
                    reject: (payload: any) => void;
                };
            };
        };
    };
    INotifications: {
        [x: string]: {
            id: string;
            visible: boolean;
            compiledListeners: any;
            resolve: (payload?: any) => void;
            reject: (payload?: any) => void;
            transitionEnd: () => void;
            durationTimeout: any;
            component: DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
            listeners: object & {};
            props: object & {};
            options: {
                wrapper?: string;
                duration?: number;
                resetDurationOnInteractivity?: boolean;
            };
            promise: {
                resolve: (payload: any) => void;
                reject: (payload: any) => void;
            };
        };
    };
    addNotification(notification: NotificationObject): InternalNotificationObject;
    getNotification(id: string): InternalNotificationObject;
    destroyNotification(id: string): void;
    pauseDuration(id: string): any;
    resumeDuration(id: string): any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: string;
    as: string;
    asProps: (slotProps: any) => any;
} & {}>, {
    name: string;
    as: string;
    asProps: (slotProps: any) => any;
}>;
export default _default;
