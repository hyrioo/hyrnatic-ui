declare const _sfc_main: import("vue").DefineComponent<{
    rowClasses: {
        type: (StringConstructor | FunctionConstructor)[];
        default: null;
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
        default: null;
    };
    selectedRows: {
        type: import("vue").PropType<{
            [key: string]: object;
        }[]>;
        default: () => never[];
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
        type: import("vue").PropType<{
            [key: string]: object;
        }[]>;
        default: boolean;
    };
}, {
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
    core: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:sort" | "update:selectedRows", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rowClasses: {
        type: (StringConstructor | FunctionConstructor)[];
        default: null;
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
        default: null;
    };
    selectedRows: {
        type: import("vue").PropType<{
            [key: string]: object;
        }[]>;
        default: () => never[];
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
        type: import("vue").PropType<{
            [key: string]: object;
        }[]>;
        default: boolean;
    };
}>>, {
    sort: import("@hyrioo/hyrnatic-ui-core").CoreTableSortDefinition;
    striped: boolean;
    data: {
        [key: string]: object;
    }[];
    rowClasses: string | Function;
    hover: boolean;
    selectedRows: {
        [key: string]: object;
    }[];
    selectable: boolean | Function;
}>;
export default _sfc_main;
