import Table from '@/modules/tables/table/Table';
import TableColumn from '@/modules/tables/table/TableColumn';
import TableRow from '@/modules/tables/table/TableRow';
import { installComponents } from '@/utils/package';

let installed = false;
const components = {
    Table,
    TableColumn,
    TableRow,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        installComponents(app, components);
        installed = true;
    },
};
