import Table from './table/Table';
import TableColumn from './table/TableColumn';
import TableRow from './table/TableRow';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-tables';
const components = {
    Table,
    TableColumn,
    TableRow,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
