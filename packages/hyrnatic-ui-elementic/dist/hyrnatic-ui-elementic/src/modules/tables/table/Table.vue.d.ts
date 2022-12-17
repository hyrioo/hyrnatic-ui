declare const _default: import("vue").DefineComponent<{
    rowClasses: {
        type: (StringConstructor | FunctionConstructor)[];
        default: any;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    sort: {
        type: import("vue").PropType<import("@hyrioo/hyrnatic-ui-core").CoreTableSortDefinition>;
        default: any;
    };
    selectedRows: {
        type: import("vue").PropType<object[]>;
        default: () => any[];
    };
    selectable: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        required: boolean;
    };
    data: {
        type: import("vue").PropType<object[]>;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:sort" | "update:selectedRows", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    sort: import("@hyrioo/hyrnatic-ui-core").CoreTableSortDefinition;
    data: object[];
    rowClasses: string | Function;
    striped: boolean;
    hover: boolean;
    selectedRows: object[];
    selectable: boolean | Function;
} & {
    rowKey?: string;
}>, {
    sort: import("@hyrioo/hyrnatic-ui-core").CoreTableSortDefinition;
    data: object[];
    rowClasses: string | Function;
    striped: boolean;
    hover: boolean;
    selectedRows: object[];
    selectable: boolean | Function;
}>;
export default _default;
