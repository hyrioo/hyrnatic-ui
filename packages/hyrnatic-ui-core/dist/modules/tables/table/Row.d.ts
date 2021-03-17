import { ComputedRef } from 'vue';
export default class Row {
    id: string;
    data: object;
    selected: boolean;
    selectable: ComputedRef<boolean>;
    constructor(id: string, data: any, tableProps: any, setRowSelectionState: any);
    getValue(prop: any, formatter: any): object;
}
