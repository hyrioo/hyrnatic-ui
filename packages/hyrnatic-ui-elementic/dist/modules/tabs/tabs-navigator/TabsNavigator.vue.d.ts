import { CoreTabsNavigatorReturn } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    setNavigator: (el: CoreTabsNavigatorReturn) => void;
    core: any;
    indicatorStyle: import("vue").ComputedRef<{
        transform: string;
        height: string;
        width?: undefined;
    } | {
        transform: string;
        width: string;
        height?: undefined;
    }>;
    updateIndicator: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    vertical: boolean;
}, {}>;
export default _default;
