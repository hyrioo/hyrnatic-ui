import Table from './table/Table';
import TableColumn from './table/TableColumn';
import TableRow from './table/TableRow';
import { installComponents } from '../../utils/package';

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
