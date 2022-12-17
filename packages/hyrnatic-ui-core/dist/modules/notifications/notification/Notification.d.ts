import { ComputedRef } from 'vue';
export declare const coreNotificationVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreNotificationSlotProps = {
    visible: ComputedRef<boolean>;
    pauseDuration: () => void;
    resumeDuration: () => void;
    close: () => void;
};
export declare function coreNotificationSetup(): {
    as(tag: string, func?: (slotProps: CoreNotificationSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
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
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
} & {}>, {
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;
