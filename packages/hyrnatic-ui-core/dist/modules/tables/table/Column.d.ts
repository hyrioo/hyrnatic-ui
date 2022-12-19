import { ComponentInternalInstance } from 'vue';
import { Slot } from '@vue/runtime-core';
export default class Column {
    id: string;
    property: string;
    order: number;
    component: ComponentInternalInstance;
    template: Slot | undefined;
    headerTemplate: Slot | undefined;
    formatter: Function;
    sortable: boolean;
    data: {
        [key: string]: any;
    };
    constructor(id: string, component: ComponentInternalInstance, data: {
        [key: string]: any;
    });
}
