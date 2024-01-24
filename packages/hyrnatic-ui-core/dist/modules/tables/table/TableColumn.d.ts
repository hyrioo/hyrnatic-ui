export declare const coreTableColumnPropertyProp: {
    property: {
        type: StringConstructor;
    };
};
export declare const coreTableColumnFormatterProp: {
    formatter: {
        type: FunctionConstructor;
        default: null;
    };
};
export declare const coreTableColumnSortableProp: {
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreTableColumnDataProp: {
    data: {
        type: ObjectConstructor;
        default: null;
    };
};
export declare const coreTableColumnOrderProp: {
    order: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreTableColumnComponentProp: {
    component: {
        type: null;
        required: boolean;
    };
};
export declare function coreTableColumnSetup(data: object, props?: string[], events?: string[]): any;
declare const _default: import("vue").DefineComponent<{
    order: {
        type: NumberConstructor;
        default: number;
    };
    component: {
        type: null;
        required: boolean;
    };
    data: {
        type: ObjectConstructor;
        default: null;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    order: {
        type: NumberConstructor;
        default: number;
    };
    component: {
        type: null;
        required: boolean;
    };
    data: {
        type: ObjectConstructor;
        default: null;
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
    data: Record<string, any>;
    order: number;
    sortable: boolean;
    formatter: Function;
}, {}>;
export default _default;
