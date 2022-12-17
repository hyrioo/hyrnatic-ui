import { ComputedRef } from 'vue';
export declare const coreCollapseItemIdProp: {
    id: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare type CoreCollapseItemSlotProps = {
    expanded: ComputedRef<boolean>;
    onClick: (e: any) => void;
};
export declare function coreCollapseItemSetup(): {
    as(tag: string, func?: (slotProps: CoreCollapseItemSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    id: {
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
        expanded: boolean;
        onClick: (e: any) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
} & {
    id?: string;
}>, {
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;