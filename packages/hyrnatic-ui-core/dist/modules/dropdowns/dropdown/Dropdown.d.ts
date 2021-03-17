import { ComputedRef } from 'vue';
import { DropdownItemInstance } from '@/modules/dropdowns/dropdown/DropdownItem';
export declare const coreDropdownDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDropdownHideOnClickProp: {
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDropdownSplitButtonProp: {
    splitButton: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDropdownVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type SlotProps = {
    menuVisible: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    splitButton: ComputedRef<boolean>;
    focusedItem: ComputedRef<DropdownItemInstance>;
    clearFocusedItem: (e: any) => any;
    onKeyEvents: (e: any, target: 'main' | 'split') => any;
    onButtonClick: (e: any) => any;
    onIconClick: (e: any) => any;
    onItemClick: (e: any) => any;
};
export declare function setup(): {
    as(tag: string, func?: (slotProps: SlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    splitButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    close: () => void;
    slotProps: {
        menuVisible: boolean;
        disabled: boolean;
        splitButton: boolean;
        focusedItem: {
            onClick: (e: any) => void;
            disabled: boolean;
        };
        clearFocusedItem: (e: any) => any;
        onKeyEvents: (e: any, target: "main" | "split") => any;
        onButtonClick: (e: any) => any;
        onIconClick: (e: any) => any;
        onItemClick: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    splitButton: boolean;
    hideOnClick: boolean;
} & {}>, {
    disabled: boolean;
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    splitButton: boolean;
    hideOnClick: boolean;
}>;
export default _default;
