import { Wrapper } from '@/modules/dialogs/dialog/DialogWrapper';
export declare function create<P extends {} = {}, L extends {} = {}>(component: any, props?: P, listeners?: L, options?: {
    wrapper?: string;
    stack?: string;
}): {
    destroy: () => void;
    promise: Promise<any>;
};
export declare function createPromise<P extends {} = {}, L extends {} = {}>(component: any, props?: P, listeners?: L, options?: {
    wrapper?: string;
    stack?: string;
}): Promise<any>;
export declare function getWrapper(key?: string): Wrapper;
export declare function setupDialog(): {
    reject(payload?: any): void;
    resolve(payload?: any): void;
};
