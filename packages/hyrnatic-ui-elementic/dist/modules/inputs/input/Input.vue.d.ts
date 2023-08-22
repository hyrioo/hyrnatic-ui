declare const _sfc_main: import("vue").DefineComponent<{
    placeholder: {
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
    min: {
        type: NumberConstructor;
        default: null;
    };
    max: {
        type: NumberConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
    prefixWidth: {
        type: StringConstructor;
        default: null;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    suffixWidth: {
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
        type: null;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    coreInput: import("vue").Ref<any>;
    input: import("vue").Ref<HTMLInputElement | undefined>;
    hasFocus: import("vue").Ref<boolean>;
    onFocus: () => void;
    onBlur: () => void;
    focus: () => void;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
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
    min: {
        type: NumberConstructor;
        default: null;
    };
    max: {
        type: NumberConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
    prefixWidth: {
        type: StringConstructor;
        default: null;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    suffixWidth: {
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
        type: null;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    type: string;
    disabled: boolean;
    placeholder: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    min: number;
    max: number;
    prefix: string;
    prefixWidth: string;
    suffix: string;
    suffixWidth: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    readonly: boolean;
}>;
export default _sfc_main;
