import { InternalDialogObject, Wrapper, wrappers } from './DialogWrapper';
import {
    getCurrentInstance, inject, provide, reactive, shallowRef,
} from 'vue';

export function create<P extends {} = {}, L extends {} = {}>(component, props: P = null, listeners: L = null, options?: { wrapper?: string; stack?: string }): { destroy: () => void; promise: Promise<any> } {
    const wrapper = options && options.wrapper ? options.wrapper : 'default';
    const stack = options && options.stack ? options.stack : 'default';

    let dialog: InternalDialogObject = null;
    const promise = new Promise((resolve, reject) => {
        dialog = wrappers[wrapper].addDialog({
            component: shallowRef(component),
            listeners: listeners !== null ? reactive(listeners) : null,
            props: props !== null ? reactive(props) : null,
            stack,
            promise: { resolve, reject }
        });
    });

    return {
        promise,
        destroy: () => wrappers[wrapper].destroyDialog(dialog.id),
    };
}
export function createPromise<P extends {} = {}, L extends {} = {}>(component, props: P = null, listeners: L = null, options?: { wrapper?: string; stack?: string }): Promise<any> {
    return create<P, L>(component, props, listeners, options).promise;
}
export function getWrapper(key: string = 'default'): Wrapper {
    return wrappers[key];
}
export function getDialog(key: string): InternalDialogObject {
    const wrapper = inject<string>('wrapper-name');
    return wrappers[wrapper].getDialog(key);

    /*const keys = Object.keys(wrappers);
    let dialog = null;
    keys.forEach((wrapperKey) => {
        const d = wrappers[wrapperKey].getDialog(key);
        if(d) {
            dialog = d;
        }
    });
    return dialog;*/
}

export function setupDialog() {
    const ctx = getCurrentInstance();
    const internalDialogObject = getDialog(ctx.vnode.key as string);
    provide('dialog-id', ctx.vnode.key);
    provide('dialog-resolve', internalDialogObject.resolve);
    provide('dialog-reject', internalDialogObject.reject);
    provide('dialog-transition-end', internalDialogObject.transitionEnd);

    return {
        resolve: internalDialogObject.resolve,
        reject: internalDialogObject.reject,
    };
}
