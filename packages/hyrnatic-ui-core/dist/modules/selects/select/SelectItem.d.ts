import { ComputedRef, Ref } from 'vue';
export declare type SelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
};
export declare type SelectProvide = {
    selectedItems: ComputedRef<SelectItemInstance[]>;
    focusedItem: Ref<SelectItemInstance>;
    onItemClick(instance: SelectItemInstance): void;
    addItemInstance(instance: SelectItemInstance): void;
    removeItemInstance(instance: SelectItemInstance): void;
};
export declare const coreSelectItemValueProp: {
    value: {
        type: any;
        required: boolean;
    };
};
export declare const coreSelectItemDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreSelectItemSlotProps = {
    selected: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    value: ComputedRef;
    onClick: (e: any) => any;
};
export declare function coreSelectItemSetup(): {
    as(tag: string, func?: (slotProps: CoreSelectItemSlotProps) => any): any;
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
        default: string;
    };
    value: {
        type: any;
        required: boolean;
    };
    disabled: {
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
        selected: boolean;
        focused: boolean;
        disabled: boolean;
        value: any;
        onClick: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    value: any;
    label: string;
} & {}>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    value: any;
    label: string;
}>;
export default _default;
