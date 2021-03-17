import { ComputedRef } from 'vue';
export declare const coreRadioButtonDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreRadioButtonModelValueProp: {
    modelValue: {
        type: any;
        required: boolean;
    };
};
export declare const coreRadioButtonValueProp: {
    value: {
        type: any;
        default: boolean;
    };
};
export declare type SlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    onChange: (e: any) => any;
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
    value: {
        type: any;
        default: boolean;
    };
    modelValue: {
        type: any;
        required: boolean;
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
    slotProps: {
        state: boolean;
        disabled: boolean;
        onChange: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: any;
} & {}>, {
    value: any;
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    modelValue: any;
}>;
export default _default;
