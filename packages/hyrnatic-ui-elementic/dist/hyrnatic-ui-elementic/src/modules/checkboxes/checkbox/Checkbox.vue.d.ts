import { CoreCheckboxSlotProps } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: any;
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
            values: any;
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
            values: any;
            default: boolean;
        };
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    Icons: {
        arrowLeft: string;
        arrowRight: string;
        calendarMonth: string;
        check: string;
        chevronDoubleLeft: string;
        chevronDoubleRight: string;
        chevronDown: string;
        chevronLeft: string;
        chevronRight: string;
        chevronUp: string;
        close: string;
        dotsHorizontal: string;
        loading: string;
        minus: string;
        plus: string;
    };
    CheckboxIcons: {
        checkStroke: {
            width: number;
            height: number;
            viewBox: string;
            data: string;
        };
    };
    asProps: (slotProps: CoreCheckboxSlotProps) => {
        class: (string | {
            '-focus': boolean;
            '-bordered': boolean;
            '-checked': import("vue").ComputedRef<boolean>;
            '-indeterminate': import("vue").ComputedRef<boolean>;
            '-disabled': import("vue").ComputedRef<boolean>;
        })[];
    };
    core: any;
    hasFocus: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string;
    visible: boolean;
    disabled: boolean;
    bordered: boolean;
    value: any;
    indeterminate: boolean;
} & {
    modelValue?: string | boolean | unknown[];
}>, {
    label: string;
    visible: boolean;
    disabled: boolean;
    bordered: boolean;
    value: any;
    indeterminate: boolean;
}>;
export default _default;
