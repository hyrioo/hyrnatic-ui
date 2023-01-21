import Drawer from './drawer/Drawer.vue';
import { CoreDialogsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-drawers';
export const components = {
    Drawer,
};
const dependencies = {
    CoreDialogsInstall,
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
