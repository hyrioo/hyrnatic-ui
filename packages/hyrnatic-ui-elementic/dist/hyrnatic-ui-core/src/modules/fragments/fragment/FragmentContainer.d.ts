import { ComputedRef } from 'vue';
export declare const coreFragmentContainerActiveProp: {
    active: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare type CoreFragmentContainerSlotProps = {
    active: ComputedRef<string>;
};
export declare function coreFragmentContainerSetup(): {
    as(tag: string, func?: (slotProps: CoreFragmentContainerSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    active: {
        type: StringConstructor;
        required: boolean;
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
        active: string;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    as: string;
    asProps: (slotProps: any) => any;
} & {
    active?: string;
}>, {
    as: string;
    asProps: (slotProps: any) => any;
}>;
export default _default;
