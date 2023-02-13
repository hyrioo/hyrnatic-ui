import Popover from './popover/Popover.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FloatingInstall from '../floating/install';
import { App } from 'vue';

const moduleId = 'elementic-popovers';
const components = {
    Popover,
};
const dependencies = {
    FloatingInstall,
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
