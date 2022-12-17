import { CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    type: {
        type: StringConstructor;
    };
    size: {
        type: StringConstructor;
        default: any;
    };
    autocomplete: {
        type: StringConstructor;
        default: any;
    };
    minLength: {
        type: NumberConstructor;
        default: any;
    };
    maxLength: {
        type: NumberConstructor;
        default: any;
    };
    prefix: {
        type: StringConstructor;
        default: any;
    };
    suffix: {
        type: StringConstructor;
        default: any;
    };
    prefixIcon: {
        type: StringConstructor;
        default: any;
    };
    suffixIcon: {
        type: StringConstructor;
        default: any;
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
        default: () => any[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    focus: () => void;
    hideList: () => void;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    setCoreInput: (com: any) => void;
    coreAutocompleteEl: import("vue").Ref<HTMLElement>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/dom").Middleware[]>;
    listMaxHeight: import("vue").Ref<string>;
    input: import("vue").Ref<HTMLInputElement>;
    items: import("vue").Ref<HTMLElement[]>;
    scrollContainer: import("vue").Ref<HTMLElement>;
    hasFocus: import("vue").Ref<boolean>;
    onFocus: () => void;
    onBlur: () => void;
    core: any;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onFocusedItemChanged: (item: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur" | "itemSelected" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder: string;
    size: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    items: unknown[];
    disabled: boolean;
} & {
    type?: string;
    modelValue?: string;
}>, {
    placeholder: string;
    size: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    items: unknown[];
    disabled: boolean;
}>;
export default _default;
