import { CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
declare const _default: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    items: {
        type: ArrayConstructor;
        required: boolean;
    };
    compare: {
        type: import("vue").PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: null;
    };
    modelValue: {
        type: null;
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
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
    select: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLButtonElement | undefined>;
    menuMaxHeight: import("vue").Ref<string>;
    floatingMiddleware: import("vue").ComputedRef<{
        name: string;
        options?: any;
        fn: (state: {
            placement: import("@floating-ui/utils").Placement;
            x: number;
            y: number;
            initialPlacement: import("@floating-ui/utils").Placement;
            strategy: import("@floating-ui/utils").Strategy;
            middlewareData: import("@floating-ui/core").MiddlewareData;
            rects: import("@floating-ui/utils").ElementRects;
            platform: import("@floating-ui/core").Platform;
            elements: import("@floating-ui/dom").Elements;
        }) => import("@floating-ui/core").MiddlewareReturn | Promise<import("@floating-ui/core").MiddlewareReturn>;
    }[]>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onFocusedItemChanged: (item: CoreSimpleSelectItemInstance) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "focusedItemChanged")[], "update:modelValue" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    items: {
        type: ArrayConstructor;
        required: boolean;
    };
    compare: {
        type: import("vue").PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: null;
    };
    modelValue: {
        type: null;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocusedItemChanged?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    placeholder: string;
    multiple: boolean;
    hideOnSelect: boolean;
    allowClear: boolean;
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
}, {}>;
export default _default;
