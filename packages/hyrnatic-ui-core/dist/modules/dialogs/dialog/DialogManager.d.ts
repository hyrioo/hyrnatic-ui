import { InternalDialogObject, Wrapper } from './DialogWrapper';
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
export declare function getDialog(key: string): InternalDialogObject;
export declare function setupDialog(): {
    resolve: (payload: any) => void;
    reject: (payload: any) => void;
};
