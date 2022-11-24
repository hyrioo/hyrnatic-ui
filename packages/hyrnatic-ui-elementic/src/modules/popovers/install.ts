import Popover from './popover/Popover.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import PoppersInstall from '../poppers/install';

const moduleId = 'elementic-popovers';
const components = {
    Popover,
};
const dependencies = {
    PoppersInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
