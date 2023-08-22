import { CoreCheckboxSlotProps } from '@hyrioo/hyrnatic-ui-core';
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: null;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        required: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    CheckboxIcons: {
        [key: string]: any;
    };
    asProps: (slotProps: CoreCheckboxSlotProps) => {
        class: (string | {
            '-focus': boolean;
            '-bordered': boolean;
            '-checked': import("vue").ComputedRef<boolean>;
            '-indeterminate': import("vue").ComputedRef<boolean>;
            '-disabled': import("vue").ComputedRef<boolean>;
        } | null | undefined)[];
    };
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: null;
        default: boolean;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        required: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
}>>, {
    label: string;
    visible: boolean;
    disabled: boolean;
    bordered: boolean;
    value: any;
    indeterminate: boolean;
}>;
export default _sfc_main;
