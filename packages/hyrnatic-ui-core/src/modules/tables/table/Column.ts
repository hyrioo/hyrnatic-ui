import { ComponentInternalInstance } from 'vue';
import { Slot } from '@vue/runtime-core';

export default class Column {
    public id: string;
    public property: string;
    public order: number;
    public component: ComponentInternalInstance;
    public template: Slot | undefined;
    public headerTemplate: Slot | undefined;
    public formatter: Function;
    public sortable: boolean;
    public data: { [key: string]: any };

    constructor(id: string, component: ComponentInternalInstance, data: { [key: string]: any }) {
        this.id = id;
        this.property = component.props.property as string;
        this.order = component.props.order as number;
        this.component = component;
        this.template = component.slots.default;
        this.headerTemplate = component.slots.header;
        this.formatter = component.props.formatter as Function;
        this.sortable = component.props.sortable as boolean;
        this.data = data;
    }
}
