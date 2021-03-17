import { ComputedRef } from 'vue';
export declare type TabItemInstance = {
    id: string;
    ref?: HTMLElement;
};
export declare type TabsNavigatorProvide = {
    activeTab: ComputedRef<TabItemInstance>;
    onTabClick(instance: TabItemInstance): void;
    addTabInstance(instance: TabItemInstance): void;
    removeTabInstance(instance: TabItemInstance): void;
};
export declare type TabsNavigatorReturn = {
    activeTab: TabItemInstance;
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
export declare type SlotProps = {
    disabled: ComputedRef<boolean>;
    active: ComputedRef<boolean>;
    onClick: () => any;
};
export declare function setup(): {
    as(tag: string, func?: (slotProps: SlotProps) => any): any;
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
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
} & {
    id?: string;
}>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;
