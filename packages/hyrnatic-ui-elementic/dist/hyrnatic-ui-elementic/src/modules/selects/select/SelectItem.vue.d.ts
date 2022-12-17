import { CoreSelectItemReturn } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    value: {
        type: any;
        required: boolean;
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
    setElement: (component: CoreSelectItemReturn) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
    icon: string;
    label: string;
    disabled: boolean;
} & {}>, {
    value: any;
    icon: string;
    label: string;
    disabled: boolean;
}>;
export default _default;
