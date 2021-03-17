import PaginatorCoreInstall from '@core/modules/paginators/install';
import Paginator from '@elementic/modules/paginators/paginator/Paginator.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Paginator,
};
const dependencies = {
    PaginatorCoreInstall,
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
