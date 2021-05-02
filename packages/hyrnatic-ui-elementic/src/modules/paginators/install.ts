import Paginator from './paginator/Paginator.vue';
import { CorePaginatorsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Paginator,
};
const dependencies = {
    CorePaginatorsInstall,
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
