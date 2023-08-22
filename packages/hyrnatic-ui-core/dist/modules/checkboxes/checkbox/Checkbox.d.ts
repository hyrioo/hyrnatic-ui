import { ComputedRef } from 'vue';
export declare const coreCheckboxModelValueProp: {
    modelValue: {
        type: (ArrayConstructor | StringConstructor | BooleanConstructor)[];
        required: boolean;
    };
};
export declare const coreCheckboxValueProp: {
    value: {
        type: null;
        default: boolean;
    };
};
export declare const coreCheckboxDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
};
export declare const coreCheckboxVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
};
export declare const coreCheckboxIndeterminateProp: {
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type CoreCheckboxSlotProps = {
    state: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    indeterminate: ComputedRef<boolean>;
    check: () => any;
    uncheck: () => any;
    onChange: () => any;
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
        type: null;
        default: boolean;
    };
    modelValue: {
        type: (ArrayConstructor | StringConstructor | BooleanConstructor)[];
        required: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
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
        indeterminate: boolean;
        check: () => any;
        uncheck: () => any;
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
        type: (ArrayConstructor | StringConstructor | BooleanConstructor)[];
        required: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        docs: {
            origin: string;
            description: string;
            type: string;
            values: null;
            default: boolean;
        };
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
    visible: boolean;
    asProps: (slotProps: any) => any;
    as: string;
    value: any;
    indeterminate: boolean;
}>;
export default _default;
