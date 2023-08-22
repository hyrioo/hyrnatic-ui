import { CoreFloatingClickOutsideEvent, CoreSelectItemInstance } from '@hyrioo/hyrnatic-ui-core';
declare const _sfc_main: import("vue").DefineComponent<any, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    Icons: {
        [key: string]: any;
    };
    core: any;
    select: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLButtonElement | undefined>;
    menuMaxHeight: import("vue").Ref<string>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/dom").Middleware[]>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onFocusedItemChanged: (item: CoreSelectItemInstance) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any>, {} | {
    [x: string]: any;
}>;
export default _sfc_main;
