import { PropType } from 'vue';
import { CoreDropdownItemInstance, CoreFloatingClickOutsideEvent } from '@hyrioo/hyrnatic-ui-core';
import { ComputePositionReturn } from '@floating-ui/dom';
declare const _default: import("vue").DefineComponent<{
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
    dropdown: import("vue").Ref<any>;
    button: import("vue").Ref<HTMLElement>;
    icon: import("vue").Ref<HTMLElement>;
    transition: import("vue").Ref<string>;
    floatingMiddleware: import("vue").ComputedRef<import("@floating-ui/core").Middleware[]>;
    floatingStyle: import("vue").Ref<{}>;
    menuMaxHeight: import("vue").Ref<string>;
    onClickOutside: (value: CoreFloatingClickOutsideEvent) => void;
    onComputedPosition: (data: ComputePositionReturn) => void;
    onFocusedItemChanged: (item: CoreDropdownItemInstance) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string;
    visible: boolean;
    disabled: boolean;
    align: "start" | "end";
    autoSize: boolean;
    hideOnClick: boolean;
    splitButton: boolean;
} & {}>, {
    label: string;
    visible: boolean;
    disabled: boolean;
    align: "start" | "end";
    autoSize: boolean;
    hideOnClick: boolean;
    splitButton: boolean;
}>;
export default _default;
