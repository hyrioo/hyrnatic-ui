import { PropType, Ref, ComputedRef, WritableComputedRef, UnwrapRef } from 'vue';
export declare const coreAutocompleteModelValueProp: {
    modelValue: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare const coreAutocompleteModelModifiersProp: {
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
};
export declare const coreAutocompleteDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreAutocompleteItemsProp: {
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
};
export declare type CoreAutocompleteSlotProps = {
    modelValue: WritableComputedRef<string>;
    disabled: ComputedRef<boolean>;
    listVisible: ComputedRef<boolean>;
    items: ComputedRef;
    focusedItem: ComputedRef;
    onItemClick: (item: string) => void;
    onKeyEvents: (e: KeyboardEvent) => void;
    clearFocusedItem: () => void;
};
export declare type CoreAutocompleteReturn = {
    slotProps: UnwrapRef<CoreAutocompleteSlotProps>;
    focusInput: () => void;
    hideList: () => void;
    showList: () => void;
};
export declare function coreAutocompleteSetup(input: Ref<HTMLInputElement>): {
    as(tag: string, func?: (slotProps: CoreAutocompleteSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    input: {
        type: PropType<HTMLInputElement>;
        required: true;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    modelValue: {
        type: StringConstructor;
        required: boolean;
    };
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
    slotProps: {
        modelValue: string;
        disabled: boolean;
        listVisible: boolean;
        items: any;
        focusedItem: any;
        onItemClick: (item: string) => void;
        onKeyEvents: (e: KeyboardEvent) => void;
        clearFocusedItem: () => void;
    };
    focusInput: () => void;
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    hideList: () => void;
    showList: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focusedItemChanged" | "itemSelected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    input: {
        type: PropType<HTMLInputElement>;
        required: true;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    modelValue: {
        type: StringConstructor;
        required: boolean;
    };
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
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
    modelModifiers: Record<string, any>;
    items: unknown[];
}>;
export default _default;
