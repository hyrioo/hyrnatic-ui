import {
    computed, watch, ComputedRef,
} from 'vue';
import Obj from '../../../utils/object';

export default class Row {
    public id: string;
    public data: { [key: string]: any };
    public selected: boolean;
    public selectable: ComputedRef<boolean> | undefined = undefined;

    constructor(id: string, data: { [key: string]: any }, tableProps: {selectable: boolean | Function}, setRowSelectionState: (id: string, state: boolean) => void) {
        this.id = id;
        this.data = data;
        this.selected = false;
        watch(() => tableProps, () => {
            if (typeof tableProps.selectable === 'boolean') {
                this.selectable = computed(() => tableProps.selectable) as ComputedRef<boolean>;
            } else {
                this.selectable = tableProps.selectable(this.data);
                watch(() => this.selectable!.value, () => {
                    if (!this.selectable!.value) {
                        setRowSelectionState(this.id, false);
                    }
                });
            }
        }, {
            immediate: true,
        });
    }

    getValue(prop: string, formatter: Function): string {
        let { data } = this;

        if (prop !== undefined) {
            data = Obj.getProperty(data, prop);
        }

        if (typeof formatter === 'function') {
            data = formatter(data);
        } else if (formatter !== null) {
            console.warn('[hr-table-column] Unsupported value for formatter');
        }

        return data as unknown as string;
    }
}
