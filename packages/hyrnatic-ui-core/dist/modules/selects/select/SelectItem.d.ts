import { ComputedRef, Ref, ComponentInternalInstance } from 'vue';
export type CoreSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    component?: ComponentInternalInstance;
};
export type CoreSelectProvide = {
    selectedItems: ComputedRef<CoreSelectItemInstance[]>;
    focusedItem: Ref<CoreSelectItemInstance | null>;
    onItemClick(instance: CoreSelectItemInstance): void;
    addItemInstance(instance: CoreSelectItemInstance): void;
    removeItemInstance(instance: CoreSelectItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
};
export declare const coreSelectItemValueProp: {
    value: {
        type: null;
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
        default: null;
    };
};
export type CoreSelectItemSlotProps = {
    selected: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    value: ComputedRef;
    onClick: () => any;
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
        default: null;
    };
    value: {
        type: null;
        required: boolean;
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
    select: CoreSelectProvide | undefined;
    slotProps: {
        selected: boolean;
        focused: boolean;
        disabled: boolean;
        value: any;
        onClick: () => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    value: {
        type: null;
        required: boolean;
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
export default SelectItem;
