import { DefineComponent, ComputedRef } from 'vue';
export interface DialogObject {
    component: DefineComponent;
    listeners: object | null;
    props: object | null;
    stack: string;
    promise: {
        resolve: (payload: any) => void;
        reject: (payload: any) => void;
    };
}
export interface InternalDialogObject extends DialogObject {
    id: string;
    visible: boolean;
    compiledListeners: ComputedRef;
    resolve: (payload: any) => void;
    reject: (payload: any) => void;
    transitionEnd: () => void;
}
export declare type Wrapper = {
    addDialog(dialog: DialogObject): InternalDialogObject;
    getDialog(id: string): InternalDialogObject;
    destroyDialog(id: string): void;
    getStackCount(stack: string): ComputedRef<number>;
    getStackVisibleCount(stack: string): ComputedRef<number>;
    getStackIndex(stack: string, id: string): ComputedRef<number>;
};
export declare const wrappers: {
    [key: string]: Wrapper;
};
declare const _default: DefineComponent<{
    teleport: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    IDialogs: {
        [key: string]: InternalDialogObject;
    };
    addDialog(dialog: DialogObject): InternalDialogObject;
    getDialog(id: string): InternalDialogObject;
    destroyDialog(id: string): void;
    getStackCount(stack: string): ComputedRef<number>;
    getStackVisibleCount(stack: string): ComputedRef<number>;
    getStackIndex(stack: string, id: string): ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    teleport: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    name: string;
    teleport: string;
}>;
export default _default;
