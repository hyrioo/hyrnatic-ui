declare const _sfc_main: import("vue").DefineComponent<{
    showOverflowIndicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    styling: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    showPercentage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        required: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
    coreProgressBar: import("vue").Ref<any>;
    overflowOffset: import("vue").ComputedRef<number>;
    label: import("vue").ComputedRef<string | number | undefined>;
    width: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showOverflowIndicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    styling: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    showPercentage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximum: {
        type: NumberConstructor;
        default: number;
    };
    minimum: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        required: boolean;
    };
}>>, {
    styling: string;
    size: string;
    showOverflowIndicator: boolean;
    striped: boolean;
    animated: boolean;
    showPercentage: boolean;
    showValue: boolean;
    maximum: number;
    minimum: number;
}>;
export default _sfc_main;
