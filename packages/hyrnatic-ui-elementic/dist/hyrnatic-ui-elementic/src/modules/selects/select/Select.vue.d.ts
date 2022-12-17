import { CoreFloatingClickOutsideEvent, CoreSelectItemInstance } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    compare: {
        type: import("vue").PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: any;
    };
    modelValue: {
        type: any;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowClear: {
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
    core: any;
    select: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLButtonElement>;
    menuMaxHeight: import("vue").Ref<string>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/dom").Middleware[]>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onFocusedItemChanged: (item: CoreSelectItemInstance) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder: string;
    modelValue: any;
    disabled: boolean;
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
    multiple: boolean;
    hideOnSelect: boolean;
    allowClear: boolean;
} & {}>, {
    placeholder: string;
    modelValue: any;
    disabled: boolean;
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
    multiple: boolean;
    hideOnSelect: boolean;
    allowClear: boolean;
}>;
export default _default;
