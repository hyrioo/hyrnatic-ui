import { ComponentInternalInstance } from 'vue';

export default class Column {
    public id: string;
    public property: string;
    public order: number;
    public component: ComponentInternalInstance;
    public template: Function;
    public headerTemplate: Function;
    public formatter: Function;
    public sortable: boolean;
    public data: { [key: string]: any };

    constructor(id: string, component: ComponentInternalInstance, data) {
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
