import { ComputedRef, PropType, Ref } from 'vue';
import { SortDefinition } from './TableTypes';
import Column from './Column';
import Row from './Row';
export declare const coreTableDataProp: {
    data: {
        type: PropType<{
            [key: string]: object;
        }[]>;
        default: boolean;
    };
};
export declare const coreTableRowKeyProp: {
    rowKey: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare const coreTableSelectableProp: {
    selectable: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
export declare const coreTableSelectedRowsProp: {
    selectedRows: {
        type: PropType<{
            [key: string]: object;
        }[]>;
        default: () => never[];
    };
};
export declare const coreTableSortProp: {
    sort: {
        type: PropType<SortDefinition>;
        default: null;
    };
};
export type CoreTableSlotProps = {
    orderedColumns: ComputedRef<Column[]>;
    rows: Ref<Row[]>;
    allRowsSelected: ComputedRef<boolean>;
    anyRowsSelected: ComputedRef<boolean>;
    anySelectable: ComputedRef<boolean>;
    toggleAllSelection: () => void;
    setRowSelectionState: (rowId: string, state: boolean) => void;
    setSorting: (key: string) => void;
    clearSorting: () => void;
};
export declare function coreTableSetup(): {
    as(tag: string, func?: (slotProps: CoreTableSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    sort: {
        type: PropType<SortDefinition>;
        default: null;
    };
    selectedRows: {
        type: PropType<{
            [key: string]: object;
        }[]>;
        default: () => never[];
    };
    selectable: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        required: boolean;
    };
    data: {
        type: PropType<{
            [key: string]: object;
        }[]>;
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
    toggleAllSelection: () => void;
    setSorting: (key: string) => void;
    clearSorting: () => void;
    slotProps: {
        orderedColumns: Column[];
        rows: Row[];
        allRowsSelected: boolean;
        anyRowsSelected: boolean;
        anySelectable: boolean;
        toggleAllSelection: () => void;
        setRowSelectionState: (rowId: string, state: boolean) => void;
        setSorting: (key: string) => void;
        clearSorting: () => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:sort" | "update:selectedRows", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sort: {
        type: PropType<SortDefinition>;
        default: null;
    };
    selectedRows: {
        type: PropType<{
            [key: string]: object;
        }[]>;
        default: () => never[];
    };
    selectable: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        required: boolean;
    };
    data: {
        type: PropType<{
            [key: string]: object;
        }[]>;
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
}>>, {
    sort: SortDefinition;
    asProps: (slotProps: any) => any;
    as: string;
    data: {
        [key: string]: object;
    }[];
    selectedRows: {
        [key: string]: object;
    }[];
    selectable: boolean | Function;
}>;
export default _default;
