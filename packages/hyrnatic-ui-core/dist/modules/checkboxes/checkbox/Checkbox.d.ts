import { ComputedRef } from 'vue';
export declare const coreCheckboxModelValueProp: {
    modelValue: {
        type: (BooleanConstructor | ArrayConstructor)[];
        required: boolean;
    };
};
export declare const coreCheckboxValueProp: {
    value: {
        type: any;
        default: boolean;
    };
};
export declare const coreCheckboxDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreCheckboxVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreCheckboxIndeterminateProp: {
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type CoreCheckboxSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    indeterminate: ComputedRef<boolean>;
    check: (e: any) => any;
    uncheck: (e: any) => any;
    onChange: (e: any) => any;
};
export declare function coreCheckboxSetup(): {
    as(tag: string, func?: (slotProps: CoreCheckboxSlotProps) => any): any;
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
        type: (BooleanConstructor | ArrayConstructor)[];
        required: boolean;
    };
    indeterminate: {
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
        indeterminate: boolean;
        check: (e: any) => any;
        uncheck: (e: any) => any;
        onChange: (e: any) => any;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: any;
    disabled: boolean;
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    indeterminate: boolean;
} & {
    modelValue?: boolean | unknown[];
}>, {
    value: any;
    disabled: boolean;
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    indeterminate: boolean;
}>;
export default _default;
