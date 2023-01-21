import Table from './table/Table.vue';
import TableColumn from './table/TableColumn.vue';
import CheckboxInstall from '../checkboxes/install';
import { CoreTablesInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-tables';
export const components = {
    Table,
    TableColumn,
};
const dependencies = {
    CoreTablesInstall,
    CheckboxInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
