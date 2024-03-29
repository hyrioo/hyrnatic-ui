import { ComputedRef } from 'vue';
export declare const coreDialogVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type CoreDialogSlotProps = {
    visible: ComputedRef<boolean>;
    stackIndex: ComputedRef<number>;
    stackCount: ComputedRef<number>;
    visibleStackCount: ComputedRef<number>;
    close: () => void;
};
export declare function coreDialogSetup(props?: string[], events?: string[]): {
    props: {
        [x: string]: any;
    };
    listeners: {
        [key: string]: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    visible: boolean;
}, {}>;
export default _default;
