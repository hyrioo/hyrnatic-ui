import { ComputedRef, Ref } from 'vue';
import { TabItemInstance } from '@/modules/tabs/tab/TabItem';
export declare const coreTabsNavigatorModelValueProp: {
    modelValue: {
        type: StringConstructor;
        default: any;
    };
};
export declare type SlotProps = {
    tabs: Ref<TabItemInstance[]>;
    activeTab: ComputedRef<TabItemInstance>;
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
    modelValue: {
        type: StringConstructor;
        default: any;
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
    activeTab: ComputedRef<TabItemInstance>;
    slotProps: {
        tabs: {
            id: string;
            ref?: HTMLElement;
        }[];
        activeTab: {
            id: string;
            ref?: HTMLElement;
        };
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: string;
} & {}>, {
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: string;
}>;
export default _default;
