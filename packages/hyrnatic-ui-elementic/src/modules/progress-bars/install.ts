import ProgressBar from './progress-bar/ProgressBar.vue';
import { CoreProgressBarsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    ProgressBar,
};
const dependencies = {
    CoreProgressBarsInstall,
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
