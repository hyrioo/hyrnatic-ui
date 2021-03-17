import { PropType, Ref, ComputedRef } from 'vue';
export declare type DropdownItemInstance = {
    onClick(e: any): void;
    disabled: boolean;
};
export declare type DropdownProvide = {
    focusedItem: Ref<DropdownItemInstance>;
    onItemClick(e: any): void;
    addItemInstance(instance: DropdownItemInstance): void;
    removeItemInstance(instance: DropdownItemInstance): void;
};
export declare const coreDropdownItemDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type SlotProps = {
    disabled: ComputedRef<boolean>;
    focused: ComputedRef<boolean>;
    onClick: (e: any) => any;
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
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    slotProps: {
        disabled: boolean;
        focused: boolean;
        onClick: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
} & {}>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
}>;
export default _default;
