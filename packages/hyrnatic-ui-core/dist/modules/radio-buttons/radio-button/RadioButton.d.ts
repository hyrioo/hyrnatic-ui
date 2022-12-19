import { ComputedRef } from 'vue';
export declare const coreRadioButtonDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreRadioButtonModelValueProp: {
    modelValue: {
        type: null;
        required: boolean;
    };
};
export declare const coreRadioButtonValueProp: {
    value: {
        type: null;
        default: boolean;
    };
};
export declare type CoreRadioButtonSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    onChange: () => any;
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
        type: null;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
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
    slotProps: {
        state: boolean;
        disabled: boolean;
        onChange: () => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: null;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
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
}>>, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    value: any;
}>;
export default _default;
