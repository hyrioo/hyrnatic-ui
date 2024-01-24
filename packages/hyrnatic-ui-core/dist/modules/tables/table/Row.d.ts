import { ComputedRef } from 'vue';
export default class Row {
    id: string;
    data: {
        [key: string]: any;
    };
    selected: boolean;
    selectable: ComputedRef<boolean> | undefined;
    constructor(id: string, data: {
        [key: string]: any;
    }, tableProps: {
        selectable: boolean | Function;
    }, setRowSelectionState: (id: string, state: boolean) => void);
    getValue(prop: string, formatter: Function): string;
}
