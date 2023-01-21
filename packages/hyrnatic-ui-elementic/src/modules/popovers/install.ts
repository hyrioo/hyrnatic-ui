import Popover from './popover/Popover.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';

const moduleId = 'elementic-popovers';
export const components = {
    Popover,
};
const dependencies = {
    FloatingInstall,
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
