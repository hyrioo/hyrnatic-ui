import { ComponentInternalInstance } from 'vue';
export declare type SortDefinition = {
    key: string | null;
    direction: 'asc' | 'desc';
};
export declare type TableProvide = {
    setSorting(key: string): void;
    setRowSelectionState(rowId: string, state: boolean): any;
    addColumn(id: string, component: ComponentInternalInstance, data: any): void;
    removeColumn(id: string): any;
};
export declare type TableColumnProps = {
    prop: string;
    formatter(value: any): string;
    sortable: boolean;
    [key: string]: any;
};
