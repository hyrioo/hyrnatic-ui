import Table from './table/Table.vue';
import TableColumn from './table/TableColumn.vue';
import CheckboxInstall from '../checkboxes/install';
import { CoreTablesInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-tables';
const components = {
    Table,
    TableColumn,
};
const dependencies = {
    CoreTablesInstall,
    CheckboxInstall,
};

export default {
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
