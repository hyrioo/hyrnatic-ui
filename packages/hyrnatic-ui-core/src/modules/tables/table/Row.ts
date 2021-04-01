import {
    computed, watch, ComputedRef,
} from 'vue';
import Obj from '@/utils/object';

export default class Row {
    public id: string;
    public data: object;
    public selected: boolean;
    public selectable: ComputedRef<boolean>;

    constructor(id: string, data, tableProps, setRowSelectionState) {
        this.id = id;
        this.data = data;
        this.selected = false;
        watch(() => tableProps, () => {
            if (typeof tableProps.selectable === 'boolean') {
                this.selectable = computed(() => tableProps.selectable);
            } else {
                this.selectable = tableProps.selectable(this.data);
                watch(() => this.selectable.value, () => {
                    if (!this.selectable.value) {
                        setRowSelectionState(this.id, false);
                    }
                });
            }
        }, {
            immediate: true,
        });
    }

    getValue(prop, formatter) {
        let { data } = this;

        if (prop !== undefined) {
            data = Obj.getProperty(data, prop);
        }

        if (typeof formatter === 'function') {
            data = formatter(data);
        } else if (formatter !== null) {
            console.warn('[hr-table-column] Unsupported value for formatter');
        }

        return data;
    }
}
