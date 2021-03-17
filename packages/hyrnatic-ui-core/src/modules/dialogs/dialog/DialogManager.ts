import { InternalDialogObject, Wrapper, wrappers } from '@/modules/dialogs/dialog/DialogWrapper';
import {
    getCurrentInstance, provide, reactive, shallowRef,
} from 'vue';

export function create<P extends {} = {}, L extends {} = {}>(component, props: P = null, listeners: L = null, options?: { wrapper?: string; stack?: string }): { destroy: () => void; promise: Promise<any> } {
    const wrapper = options && options.wrapper ? options.wrapper : 'default';
    const stack = options && options.stack ? options.stack : 'default';

    let dialog: InternalDialogObject = null;
    const promise = new Promise((resolve, reject) => {
        dialog = wrappers[wrapper].addDialog({
            component: shallowRef(component), listeners, props: reactive(props), stack,
        }, { resolve, reject });
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

export function setupDialog() {
    const ctx = getCurrentInstance();
    provide('dialog-id', ctx.vnode.key);

    return {
        reject(payload: any = null) {
            ctx.emit('reject', payload);
        },
        resolve(payload: any = null) {
            ctx.emit('resolve', payload);
        },
    };
}
