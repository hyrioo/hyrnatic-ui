import { ComputedRef } from 'vue';
export declare const coreDatePickerModelValueProp: {
    modelValue: {
        type: null;
        required: boolean;
    };
};
export declare const coreDatePickerValueFormatProp: {
    valueFormat: {
        type: StringConstructor;
        default: null;
    };
};
export declare const coreDatePickerDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDatePickerVisibleProp: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDatePickerMultipleProp: {
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDatePickerClearableProp: {
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreDatePickerDisabledDateProp: {
    disabledDate: {
        type: FunctionConstructor;
        default: null;
    };
};
export declare const coreDatePickerFirstDayOfWeekProp: {
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type CoreDatePickerSlotProps = {
    disabled: ComputedRef<boolean>;
};
export declare function coreDatePickerSetup(): {
    as(tag: string, func?: (slotProps: CoreDatePickerSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    disabledDate: {
        type: FunctionConstructor;
        default: null;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
    };
    asProps: {
        type: import("vue").PropType<(slotProps: any) => any>;
        default: null;
    };
    as: {
        type: StringConstructor;
        default: null;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    disabledDate: {
        type: FunctionConstructor;
        default: null;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: null;
        required: boolean;
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
    firstDayOfWeek: number;
    disabledDate: Function;
    clearable: boolean;
    multiple: boolean;
}>;
export default _default;
