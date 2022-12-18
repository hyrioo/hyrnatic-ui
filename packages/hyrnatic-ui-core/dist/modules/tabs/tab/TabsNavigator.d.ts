import { ComputedRef, Ref } from 'vue';
import { CoreTabItemInstance } from './TabItem';
export declare const coreTabsNavigatorModelValueProp: {
    modelValue: {
        type: StringConstructor;
        default: null;
    };
};
export declare type CoreTabsNavigatorSlotProps = {
    tabs: Ref<CoreTabItemInstance[]>;
    activeTab: ComputedRef<CoreTabItemInstance>;
};
export declare function coreTabsNavigatorSetup(): {
    as(tag: string, func?: (slotProps: CoreTabsNavigatorSlotProps) => any): any;
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
        default: null;
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
    activeTab: ComputedRef<CoreTabItemInstance>;
    slotProps: {
        tabs: CoreTabItemInstance[];
        activeTab: CoreTabItemInstance;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: null;
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
    modelValue: string;
}>;
export default _default;
