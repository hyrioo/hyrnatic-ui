import { PropType, Ref, ComputedRef, WritableComputedRef } from 'vue';
export declare const coreInputModelValueProp: {
    modelValue: {
        type: null;
        required: boolean;
    };
};
export declare const coreInputModelModifiersProp: {
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
};
export declare const coreInputDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreInputReadonlyProp: {
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreInputTypeProp: {
    type: {
        type: StringConstructor;
        default: null;
    };
};
export type CoreInputSlotProps = {
    disabled: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    modelValue: WritableComputedRef<string>;
    onClick: (e: MouseEvent) => any;
};
export declare function coreInputSetup(input: Ref<HTMLInputElement>): {
    as(tag: string, func?: (slotProps: CoreInputSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    input: {
        type: PropType<HTMLInputElement>;
        required: true;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    modelValue: {
        type: null;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, {
    slotProps: {
        disabled: boolean;
        readonly: boolean;
        modelValue: string;
        onClick: (e: MouseEvent) => any;
    };
    focusInput: (e: MouseEvent) => void;
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    input: {
        type: PropType<HTMLInputElement>;
        required: true;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    modelValue: {
        type: null;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    type: string;
    modelModifiers: Record<string, any>;
    readonly: boolean;
}, {}>;
export default _default;
