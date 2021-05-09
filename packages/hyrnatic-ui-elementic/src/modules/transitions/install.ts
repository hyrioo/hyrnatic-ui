import Grow from './Grow';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Grow,
};
const dependencies = {
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        // ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
