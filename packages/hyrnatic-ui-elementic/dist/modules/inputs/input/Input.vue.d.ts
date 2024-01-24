declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    autocomplete: {
        type: StringConstructor;
        default: null;
    };
    minLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "focus" | "blur")[], "update:modelValue" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    autocomplete: {
        type: StringConstructor;
        default: null;
    };
    minLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    disabled: boolean;
    placeholder: string;
    autocomplete: string;
    minLength: string | number;
    maxLength: string | number;
    prefix: string;
    suffix: string;
    prefixIcon: string;
    suffixIcon: string;
    modelModifiers: Record<string, any>;
    readonly: boolean;
    min: string | number;
    max: string | number;
    prefixWidth: string;
    suffixWidth: string;
}, {}>;
export default _default;
