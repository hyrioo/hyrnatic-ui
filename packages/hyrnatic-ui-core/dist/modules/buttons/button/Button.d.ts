import { ComputedRef } from 'vue';
export declare const coreButtonDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreButtonVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreButtonLoadingProp: {
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreButtonSlotProps = {
    disabled: ComputedRef<boolean>;
    loading: ComputedRef<boolean>;
    onClick: (e: any) => any;
};
export declare function coreButtonSetup(): {
    as(tag: string, func?: (slotProps: CoreButtonSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    visible: boolean;
    loading: boolean;
} & {}>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    visible: boolean;
    loading: boolean;
}>;
export default _default;
