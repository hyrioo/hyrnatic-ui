import { ComputedRef } from 'vue';
export declare const coreInlineCollapseModelValueProp: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreCollapseInlineSlotProps = {
    expanded: ComputedRef<boolean>;
    onClick: (e: any) => void;
};
export declare function coreCollapseInlineSetup(): {
    as(tag: string, func?: (slotProps: CoreCollapseInlineSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
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
}, {
    slotProps: {
        expanded: boolean;
        onClick: (e: any) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: boolean;
    as: string;
    asProps: (slotProps: any) => any;
} & {}>, {
    modelValue: boolean;
    as: string;
    asProps: (slotProps: any) => any;
}>;
export default _default;
