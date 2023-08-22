import { CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
declare const _sfc_main: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    type: {
        type: StringConstructor;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    autocomplete: {
        type: StringConstructor;
        default: null;
    };
    minLength: {
        type: NumberConstructor;
        default: null;
    };
    maxLength: {
        type: NumberConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    prefixIcon: {
        type: StringConstructor;
        default: null;
    };
    suffixIcon: {
        type: StringConstructor;
        default: null;
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
}, {
    focus: () => void;
    hideList: () => void;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    setCoreInput: (com: any) => void;
    coreAutocompleteEl: import("vue").Ref<HTMLElement | undefined>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/dom").Middleware[]>;
    listMaxHeight: import("vue").Ref<string>;
    input: import("vue").Ref<HTMLInputElement | undefined>;
    items: import("vue").Ref<HTMLElement[] | undefined>;
    scrollContainer: import("vue").Ref<HTMLElement | undefined>;
    hasFocus: import("vue").Ref<boolean>;
    onFocus: () => void;
    onBlur: () => void;
    core: any;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onFocusedItemChanged: (item: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur" | "focusedItemChanged" | "itemSelected", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    type: {
        type: StringConstructor;
    };
    size: {
        type: StringConstructor;
        default: null;
    };
    autocomplete: {
        type: StringConstructor;
        default: null;
    };
    minLength: {
        type: NumberConstructor;
        default: null;
    };
    maxLength: {
        type: NumberConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    prefixIcon: {
        type: StringConstructor;
        default: null;
    };
    suffixIcon: {
        type: StringConstructor;
        default: null;
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
}>>, {
    size: string;
    disabled: boolean;
    placeholder: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    items: unknown[];
}>;
export default _sfc_main;
