import { ComponentInternalInstance } from 'vue';

export type SortDefinition = {
    key: string | null;
    direction: 'asc' | 'desc';
}

export type TableProvide = {
    setSorting(key: string): void;
    setRowSelectionState(rowId: string, state: boolean);
    addColumn(id: string, component: ComponentInternalInstance, data: any): void;
    removeColumn(id: string);
}

export type TableColumnProps = {
    prop: string;
    formatter(value: any): string;
    sortable: boolean;
    [key: string]: any;
};
