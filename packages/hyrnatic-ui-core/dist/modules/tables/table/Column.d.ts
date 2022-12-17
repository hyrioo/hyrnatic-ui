import { ComponentInternalInstance } from 'vue';
export default class Column {
    id: string;
    property: string;
    order: number;
    component: ComponentInternalInstance;
    template: Function;
    headerTemplate: Function;
    formatter: Function;
    sortable: boolean;
    data: {
        [key: string]: any;
    };
    constructor(id: string, component: ComponentInternalInstance, data: any);
}
