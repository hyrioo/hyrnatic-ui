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
export declare type CoreRadioButtonSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    onChange: (e: any) => any;
};
export declare function coreRadioButtonSetup(): {
    as(tag: string, func?: (slotProps: CoreRadioButtonSlotProps) => any): any;
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
    modelValue: any;
    disabled: boolean;
    value: any;
    as: string;
    asProps: (slotProps: any) => any;
} & {}>, {
    modelValue: any;
    disabled: boolean;
    value: any;
    as: string;
    asProps: (slotProps: any) => any;
}>;
export default _default;
