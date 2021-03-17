import ProgressBarCoreInstall from '@core/modules/progress-bars/install';
import ProgressBar from '@elementic/modules/progress-bars/progress-bar/ProgressBar.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    ProgressBar,
};
const dependencies = {
    ProgressBarCoreInstall,
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
