import { ComputedRef, PropType, Ref } from 'vue';
export declare const coreSimpleSelectModelValueProp: {
    modelValue: {
        type: null;
    };
};
export declare const coreSimpleSelectItemsProp: {
    items: {
        type: ArrayConstructor;
        required: boolean;
    };
};
export declare const coreSimpleSelectDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSimpleSelectMultipleProp: {
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSimpleSelectAllowClearProp: {
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSimpleSelectHideOnSelectProp: {
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSimpleSelectLabelProp: {
    label: {
        type: PropType<string | ((itemValue: any) => string)>;
        default: string;
    };
};
export declare const coreSimpleSelectCompareProp: {
    compare: {
        type: PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: null;
    };
};
export type CoreSimpleSelectItemInstance = {
    value: any;
    label: string;
    disabled: boolean;
    selected: boolean;
};
export type CoreSimpleSelectProvide = {
    selectedItems: ComputedRef<CoreSimpleSelectItemInstance[]>;
    focusedItem: Ref<CoreSimpleSelectItemInstance | null>;
    onItemClick(instance: CoreSimpleSelectItemInstance): void;
    menuVisible: ComputedRef<boolean>;
    itemsVisible: ComputedRef<boolean>;
};
export type CoreSimpleSelectSlotProps = {
    modelValue: ComputedRef;
    disabled: ComputedRef<boolean>;
    allowClear: ComputedRef<boolean>;
    menuVisible: ComputedRef<boolean>;
    items: ComputedRef<any[]>;
    focusedItem: ComputedRef<CoreSimpleSelectItemInstance | null>;
    clearFocusedItem: () => any;
    anythingSelected: ComputedRef<boolean>;
    selectedItems: ComputedRef<CoreSimpleSelectItemInstance[]>;
    selectedText: ComputedRef<string>;
    clearValue: () => any;
    close: () => any;
    onButtonClick: () => any;
    onItemClick: (item: CoreSimpleSelectItemInstance) => any;
    onKeyEvents: (e: KeyboardEvent) => any;
    onMenuTransitioning: (state: boolean) => void;
};
export declare function coreSimpleSelectSetup(): any;
declare const _default: import("vue").DefineComponent<{
    compare: {
        type: PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: null;
    };
    label: {
        type: PropType<string | ((itemValue: any) => string)>;
        default: string;
    };
    modelValue: {
        type: null;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: ArrayConstructor;
        required: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    close: () => void;
    slotProps: {
        modelValue: any;
        disabled: boolean;
        allowClear: boolean;
        menuVisible: boolean;
        items: any[];
        focusedItem: CoreSimpleSelectItemInstance | null;
        clearFocusedItem: () => any;
        anythingSelected: boolean;
        selectedItems: CoreSimpleSelectItemInstance[];
        selectedText: string;
        clearValue: () => any;
        close: () => any;
        onButtonClick: () => any;
        onItemClick: (item: CoreSimpleSelectItemInstance) => any;
        onKeyEvents: (e: KeyboardEvent) => any;
        onMenuTransitioning: (state: boolean) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    items: ComputedRef<CoreSimpleSelectItemInstance[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "focusedItemChanged")[], "update:modelValue" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    compare: {
        type: PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: null;
    };
    label: {
        type: PropType<string | ((itemValue: any) => string)>;
        default: string;
    };
    modelValue: {
        type: null;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: ArrayConstructor;
        required: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocusedItemChanged?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    multiple: boolean;
    label: string | ((itemValue: any) => string);
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
    hideOnSelect: boolean;
    allowClear: boolean;
}, {}>;
export default _default;
