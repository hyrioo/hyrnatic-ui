import {
    defineComponent,
    getCurrentInstance, inject, onMounted, onUnmounted,
    reactive,
    SetupContext,

} from 'vue';
import { proxyEvents, proxyProps } from '@/utils/component';
import { TableProvide } from '@/modules/tables/table/TableTypes';
import Str from '@/utils/string';

export const coreTableColumnPropertyProp = {
    property: {
        type: String,
    },
};
export const coreTableColumnFormatterProp = {
    formatter: {
        type: Function,
        default: null,
    },
};
export const coreTableColumnSortableProp = {
    sortable: {
        type: Boolean,
        default: false,
    },
};
export const coreTableColumnDataProp = {
    data: {
        type: Object,
        default: null,
    },
};
export const coreTableColumnOrderProp = {
    order: {
        type: Number,
        default: 0,
    },
};

export const coreTableColumnComponentProp = {
    component: {
        type: null,
        required: true,
    },
};

export function coreTableColumnSetup(data: object, props: string[] = [], events: string[] = []) {
    const instance = getCurrentInstance();
    return {
        props: reactive({
            data,
            component: instance,
            ...proxyProps(instance.props, props),
        }),
        listeners: proxyEvents(instance, events),
    };
}

export default defineComponent({
    name: 'hr-table-column',
    props: {
        ...coreTableColumnPropertyProp,
        ...coreTableColumnFormatterProp,
        ...coreTableColumnSortableProp,
        ...coreTableColumnDataProp,
        ...coreTableColumnComponentProp,
        ...coreTableColumnOrderProp,
    },
    setup(props, ctx: SetupContext) {
        const table = inject<TableProvide>('table');
        const id = Str.random();

        onMounted(() => {
            table.addColumn(id, props.component, props.data);
        });
        onUnmounted(() => {
            table.removeColumn(id);
        });

        return {};
    },
    render() {
        return null;
    },
});
