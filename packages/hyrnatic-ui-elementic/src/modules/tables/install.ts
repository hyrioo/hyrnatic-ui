import Table from '@/modules/tables/table/Table.vue';
import TableColumn from '@/modules/tables/table/TableColumn.vue';
import CheckboxInstall from '@/modules/checkboxes/install';
import { CoreTablesInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Table,
    TableColumn,
};
const dependencies = {
    CoreTablesInstall,
    CheckboxInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
