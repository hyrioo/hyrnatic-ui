import { CoreDropdownItemReturn } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    setElement: (component: CoreDropdownItemReturn) => void;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon: string;
    label: string;
    disabled: boolean;
} & {}>, {
    icon: string;
    label: string;
    disabled: boolean;
}>;
export default _default;
