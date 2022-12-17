declare const _default: import("vue").DefineComponent<{
    placeholder: {
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
    min: {
        type: NumberConstructor;
        default: any;
    };
    max: {
        type: NumberConstructor;
        default: any;
    };
    prefix: {
        type: StringConstructor;
        default: any;
    };
    prefixWidth: {
        type: StringConstructor;
        default: any;
    };
    suffix: {
        type: StringConstructor;
        default: any;
    };
    suffixWidth: {
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
        type: any;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        default: any;
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
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    coreInput: import("vue").Ref<any>;
    input: import("vue").Ref<HTMLInputElement>;
    hasFocus: import("vue").Ref<boolean>;
    onFocus: () => void;
    onBlur: () => void;
    focus: () => void;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder: string;
    type: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    modelValue: any;
    disabled: boolean;
    min: number;
    max: number;
    prefixWidth: string;
    suffixWidth: string;
    readonly: boolean;
} & {}>, {
    placeholder: string;
    type: string;
    autocomplete: string;
    minLength: number;
    maxLength: number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    modelValue: any;
    disabled: boolean;
    min: number;
    max: number;
    prefixWidth: string;
    suffixWidth: string;
    readonly: boolean;
}>;
export default _default;
