import { ComputedRef } from 'vue';
export declare type CoreTabItemInstance = {
    id: string;
    ref?: HTMLElement;
};
export declare type CoreTabsNavigatorProvide = {
    activeTab: ComputedRef<CoreTabItemInstance>;
    onTabClick(instance: CoreTabItemInstance): void;
    addTabInstance(instance: CoreTabItemInstance): void;
    removeTabInstance(instance: CoreTabItemInstance): void;
};
export declare type CoreTabsNavigatorReturn = {
    activeTab: CoreTabItemInstance;
};
export declare const coreTabItemIdProp: {
    id: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare const coreTabItemIdDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreTabItemSlotProps = {
    disabled: ComputedRef<boolean>;
    active: ComputedRef<boolean>;
    onClick: () => any;
};
export declare function coreTabItemSetup(): {
    as(tag: string, func?: (slotProps: CoreTabItemSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
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
        disabled: boolean;
        active: boolean;
        onClick: () => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
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
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;
