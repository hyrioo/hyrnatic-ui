import { Ref, ComputedRef, ComponentInternalInstance } from 'vue';
export declare type CoreDropdownItemInstance = {
    onClick(e: any): void;
    label?: string;
    disabled: boolean;
    component?: ComponentInternalInstance;
};
export declare type CoreDropdownProvide = {
    focusedItem: Ref<CoreDropdownItemInstance | null>;
    onItemClick(e: any): void;
    addItemInstance(instance: CoreDropdownItemInstance): void;
    removeItemInstance(instance: CoreDropdownItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
};
export declare const coreDropdownItemDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDropdownItemLabelProp: {
    label: {
        type: StringConstructor;
        default: null;
    };
};
export declare type CoreDropdownItemSlotProps = {
    disabled: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    onClick: (e: MouseEvent) => any;
};
export declare function coreDropdownItemSetup(): {
    as(tag: string, func?: (slotProps: CoreDropdownItemSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
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
    dropdown: CoreDropdownProvide;
    slotProps: {
        disabled: boolean;
        focused: boolean;
        onClick: (e: MouseEvent) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
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
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    label: string;
}>;
export default _default;
