import { ComputedRef, Ref } from 'vue';
export declare const coreCollapseAccordionProp: {
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreCollapseModelValueProp: {
    modelValue: {
        type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
        required: boolean;
    };
};
export declare type CoreCollapseSlotProps = {
    accordion: ComputedRef<boolean>;
    expandedItems: ComputedRef<any[]>;
};
export declare type CollapseProvide = {
    onItemClick(id: string): any;
    expandedItems: Ref<any[]>;
};
export declare function coreCollapseSetup(): {
    as(tag: string, func?: (slotProps: CoreCollapseSlotProps) => any): any;
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
        type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
        required: boolean;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    slotProps: {
        accordion: boolean;
        expandedItems: any[];
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
        required: boolean;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    asProps: (slotProps: any) => any;
    as: string;
    accordion: boolean;
}>;
export default _default;
