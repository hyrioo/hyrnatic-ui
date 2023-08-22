declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    width: {
        type: StringConstructor;
        default: string;
        validator: (e: string) => boolean;
    };
    order: {
        type: NumberConstructor;
        default: number;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        default: null;
    };
    property: {
        type: StringConstructor;
    };
}, {
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    width: {
        type: StringConstructor;
        default: string;
        validator: (e: string) => boolean;
    };
    order: {
        type: NumberConstructor;
        default: number;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        default: null;
    };
    property: {
        type: StringConstructor;
    };
}>>, {
    label: string;
    width: string;
    order: number;
    sortable: boolean;
    formatter: Function;
}>;
export default _sfc_main;
