import Grow from './Grow.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-transitions';
const components = {
    Grow,
};
const dependencies = {
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        // ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
