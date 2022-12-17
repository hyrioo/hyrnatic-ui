import { Wrapper } from './NotificationWrapper';
export declare type NotificationOptions = {
    wrapper?: string;
    duration?: number | null;
    resetDurationOnInteractivity?: boolean;
};
export declare const DefaultNotificationOptions: NotificationOptions;
export declare function show<P extends {} = {}, L extends {} = {}>(component: any, props?: P, listeners?: L, options?: NotificationOptions): {
    destroy: () => void;
    promise: Promise<any>;
};
export declare function showPromise<P extends {} = {}, L extends {} = {}>(component: any, props?: P, listeners?: L, options?: NotificationOptions): Promise<any>;
export declare function getWrapper(key?: string): Wrapper;
export declare function setupNotification(): {
    resolve: (payload?: any) => void;
    reject: (payload?: any) => void;
};
