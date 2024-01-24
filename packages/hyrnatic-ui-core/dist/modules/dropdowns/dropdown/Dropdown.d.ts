import { ComputedRef } from 'vue';
import { CoreDropdownItemInstance } from './DropdownItem';
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
export type CoreDropdownSlotProps = {
    menuVisible: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    splitButton: ComputedRef<boolean>;
    focusedItem: ComputedRef<CoreDropdownItemInstance | null>;
    clearFocusedItem: () => any;
    onKeyEvents: (e: KeyboardEvent, target: 'main' | 'split') => any;
    onButtonClick: () => any;
    onIconClick: () => any;
    onItemClick: () => any;
    onMenuTransitioning: (state: boolean) => void;
};
export declare function coreDropdownSetup(): {
    as(tag: string, func?: (slotProps: CoreDropdownSlotProps) => any): any;
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
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    close: () => void;
    slotProps: {
        menuVisible: boolean;
        disabled: boolean;
        splitButton: boolean;
        focusedItem: CoreDropdownItemInstance | null;
        clearFocusedItem: () => any;
        onKeyEvents: (e: KeyboardEvent, target: "main" | "split") => any;
        onButtonClick: () => any;
        onIconClick: () => any;
        onItemClick: () => any;
        onMenuTransitioning: (state: boolean) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "focusedItemChanged")[], "click" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onFocusedItemChanged?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    splitButton: boolean;
    hideOnClick: boolean;
}, {}>;
export default _default;
