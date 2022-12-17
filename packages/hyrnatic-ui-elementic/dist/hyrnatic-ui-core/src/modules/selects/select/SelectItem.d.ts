import { ComputedRef, Ref, ComponentInternalInstance } from 'vue';
export declare type CoreSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    component?: ComponentInternalInstance;
};
export declare type CoreSelectProvide = {
    selectedItems: ComputedRef<CoreSelectItemInstance[]>;
    focusedItem: Ref<CoreSelectItemInstance>;
    onItemClick(instance: CoreSelectItemInstance): void;
    addItemInstance(instance: CoreSelectItemInstance): void;
    removeItemInstance(instance: CoreSelectItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
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
export declare const coreSelectItemLabelProp: {
    label: {
        type: StringConstructor;
        default: any;
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
declare const SelectItem: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: any;
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
    select: CoreSelectProvide;
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
    label: string;
    disabled: boolean;
    value: any;
    as: string;
    asProps: (slotProps: any) => any;
} & {}>, {
    label: string;
    disabled: boolean;
    value: any;
    as: string;
    asProps: (slotProps: any) => any;
}>;
export default SelectItem;
