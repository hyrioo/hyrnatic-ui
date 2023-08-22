import { PropType } from 'vue';
import { CoreDropdownItemInstance, CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
import { ComputePositionReturn } from '@floating-ui/dom';
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: PropType<"start" | "end">;
        default: string;
    };
    autoSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    splitButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
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
    dropdown: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLElement | undefined>;
    icon: import("vue").Ref<HTMLElement | undefined>;
    transition: import("vue").Ref<string>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/dom").Middleware[]>;
    floatingStyle: import("vue").Ref<{}>;
    menuMaxHeight: import("vue").Ref<string>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onComputedPosition: (data: ComputePositionReturn) => void;
    onFocusedItemChanged: (item: CoreDropdownItemInstance) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: PropType<"start" | "end">;
        default: string;
    };
    autoSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    splitButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    label: string;
    visible: boolean;
    disabled: boolean;
    align: "start" | "end";
    autoSize: boolean;
    hideOnClick: boolean;
    splitButton: boolean;
}>;
export default _sfc_main;
