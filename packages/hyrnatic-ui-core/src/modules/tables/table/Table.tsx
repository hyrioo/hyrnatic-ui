import {
    ComponentInternalInstance,
    computed, ComputedRef,
    defineComponent,
    getCurrentInstance, h, nextTick,
    PropType,
    provide,
    reactive,
    Ref,
    ref,
    SetupContext,
    watch,
} from 'vue';
import {
    coreComponentAsProp,
    coreComponentAsPropsProp,
    setupBuilder,
} from '../../../utils/component';
import { SortDefinition, TableProvide } from './TableTypes';
import Column from './Column';
import Row from './Row';

export const coreTableDataProp = {
    data: {
        type: Array as PropType<{ [key: string]: object }[]>,
        default: true,
    },
};
export const coreTableRowKeyProp = {
    rowKey: {
        type: String,
        required: true,
    },
};
export const coreTableSelectableProp = {
    selectable: {
        type: [Boolean, Function],
        default: false,
    },
};
export const coreTableSelectedRowsProp = {
    selectedRows: {
        type: Array as PropType<{ [key: string]: object }[]>,
        default: () => [],
    },
};
export const coreTableSortProp = {
    sort: {
        type: Object as PropType<SortDefinition>,
        default: null,
    },
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
}

export function coreTableSetup() {
    return setupBuilder<CoreTableSlotProps>(getCurrentInstance()!);
}

export default defineComponent({
    name: 'hr-table',
    props: {
        ...coreComponentAsProp,
        ...coreComponentAsPropsProp,
        ...coreTableDataProp,
        ...coreTableRowKeyProp,
        ...coreTableSelectableProp,
        ...coreTableSelectedRowsProp,
        ...coreTableSortProp,
    },
    emits: ['update:sort', 'update:selectedRows'],
    setup(props, ctx) {
        const rows: Ref<Row[]> = ref([]);

        // Selection
        const allRowsSelected = computed(() => {
            const selected = rows.value.filter((r) => r.selected).length;
            const selectable = rows.value.filter((r) => r.selectable).length;
            return selected === selectable && selectable > 0;
        });
        const anyRowsSelected = computed(() => rows.value.filter((r) => r.selected).length > 0);
        const anySelectable = computed(() => rows.value.filter((r) => r.selectable).length > 0);
        const setRowSelectionState = (rowId: string, state: boolean) => {
            const row = rows.value.find((r) => r.id === rowId);
            if(row)
            {
                const index = props.selectedRows.findIndex((r) => r === row.data);
                row.selected = state;
                if (index === -1 && state) { // Not found
                    ctx.emit('update:selectedRows', [...props.selectedRows, row.data]);
                } else if (index !== -1 && !state) {
                    ctx.emit('update:selectedRows', props.selectedRows.filter((r) => r !== row.data));
                }
            }
        };
        const toggleAllSelection = () => {
            const state = !allRowsSelected.value;
            const newArray: object[] = [];
            rows.value.forEach((r) => {
                if (state) {
                    if (r.selectable) {
                        newArray.push(r.data);
                        r.selected = true;
                    }
                } else {
                    r.selected = false;
                }
            });
            ctx.emit('update:selectedRows', newArray);
        };
        watch([() => props.selectedRows, () => [...props.selectedRows]], () => {
            rows.value.forEach((row) => {
                row.selected = props.selectedRows.findIndex((sr) => sr === row.data) !== -1;
            });
        }, {
            immediate: true,
        });

        // Rows
        const mapDataToRows = () => {
            const oldRows = rows.value;
            rows.value = props.data.map((rowData) => {
                let row = oldRows.find((r) => r.data[props.rowKey!] === rowData[props.rowKey!]);
                if (row === undefined) {
                    row = new Row(rowData[props.rowKey!] as unknown as string, rowData, props, setRowSelectionState);
                    row.selected = props.selectedRows.findIndex((sr) => sr === row!.data) !== -1;
                } else if(row.data !== rowData) {
                    row.data = rowData;
                }
                return row;
            });
        };
        watch([() => props.data, () => [...props.data]], () => {
            mapDataToRows();
        }, {
            immediate: true,
        });

        // Sorting
        const setSorting = (key: string) => {
            let direction: 'desc' | 'asc';
            if (props.sort.key === key) {
                direction = props.sort.direction === 'desc' ? 'asc' : 'desc';
            } else {
                direction = 'desc';
            }
            const newSort: SortDefinition = {
                key,
                direction,
            };
            ctx.emit('update:sort', newSort);
        };
        const clearSorting = () => {
            ctx.emit('update:sort', {
                key: null,
                direction: 'desc',
            });
        };

        // Columns
        const columns: Ref<Column[]> = ref([]);
        let tempColumns: Column[] | null = null;
        const updateColumns = () => {
            if (tempColumns === null) {
                return;
            }
            columns.value = tempColumns;
            tempColumns = null;
        };
        const addColumn = (id: string, component: ComponentInternalInstance, data: any) => {
            if (tempColumns === null) {
                tempColumns = ([] as Column[]).concat(columns.value);
            }
            tempColumns.push(new Column(id, component, data));
            nextTick(updateColumns);
        };
        const removeColumn = (id: string) => {
            if (tempColumns === null) {
                tempColumns = columns.value;
            }
            tempColumns = tempColumns.filter((c) => c.id !== id);
            nextTick(updateColumns);
        };
        const orderedColumns = computed(() => columns.value.sort((a, b) => a.order - b.order));

        provide<TableProvide>('table', {
            setSorting,
            setRowSelectionState,
            addColumn,
            removeColumn,
        });

        const slotProps = reactive<CoreTableSlotProps>({
            orderedColumns,
            rows,
            allRowsSelected,
            anyRowsSelected,
            anySelectable,
            toggleAllSelection,
            setRowSelectionState,
            setSorting,
            clearSorting,
        });
        const defaultRender = () => ctx.slots.default!(slotProps);

        return {
            toggleAllSelection,
            setSorting,
            clearSorting,
            slotProps,
            defaultRender,
        };
    },
    render() {
        if (this.$props.as) {
            const p = this.$props.asProps ? this.$props.asProps(this.slotProps) : {};
            return h(this.$props.as, { ...p }, this.defaultRender());
        }
        return this.defaultRender();
    },
});
