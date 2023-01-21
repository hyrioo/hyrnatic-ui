import ProgressBar from './progress-bar/ProgressBar.vue';
import { CoreProgressBarsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-progress-bars';
export const components = {
    ProgressBar,
};
const dependencies = {
    CoreProgressBarsInstall,
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
