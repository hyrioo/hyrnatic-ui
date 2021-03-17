import { ComputedRef } from 'vue';
import { SelectItemInstance } from '@/modules/selects/select/SelectItem';
export declare const coreSelectModelValueProp: {
    modelValue: {
        type: any;
    };
};
export declare const coreSelectDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectMultipleProp: {
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectAllowClearProp: {
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectHideOnSelectProp: {
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreSelectSlotProps = {
    modelValue: ComputedRef;
    disabled: ComputedRef<boolean>;
    allowClear: ComputedRef<boolean>;
    menuVisible: ComputedRef<boolean>;
    focusedItem: ComputedRef<SelectItemInstance>;
    clearFocusedItem: (e: any) => any;
    anythingSelected: ComputedRef<boolean>;
    selectedItems: ComputedRef<SelectItemInstance[]>;
    selectedText: ComputedRef<string>;
    clearValue: (e: any) => any;
    close: (e: any) => any;
    onButtonClick: (e: any) => any;
    onItemClick: (e: any) => any;
    onKeyEvents: (e: any) => any;
};
export declare function coreSelectSetup(): {
    as(tag: string, func?: (slotProps: CoreSelectSlotProps) => any): any;
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
        type: any;
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
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    close: () => void;
    slotProps: {
        modelValue: any;
        disabled: boolean;
        allowClear: boolean;
        menuVisible: boolean;
        focusedItem: {
            value: any;
            label: string;
            disabled: boolean;
        };
        clearFocusedItem: (e: any) => any;
        anythingSelected: boolean;
        selectedItems: {
            value: any;
            label: string;
            disabled: boolean;
        }[];
        selectedText: string;
        clearValue: (e: any) => any;
        close: (e: any) => any;
        onButtonClick: (e: any) => any;
        onItemClick: (e: any) => any;
        onKeyEvents: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: any;
    hideOnSelect: boolean;
    allowClear: boolean;
    multiple: boolean;
} & {}>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: any;
    hideOnSelect: boolean;
    allowClear: boolean;
    multiple: boolean;
}>;
export default _default;
