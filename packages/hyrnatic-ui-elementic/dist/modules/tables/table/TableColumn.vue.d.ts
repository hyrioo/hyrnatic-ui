declare const _default: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    sortable: boolean;
    order: number;
    formatter: Function;
}, {}>;
export default _default;
