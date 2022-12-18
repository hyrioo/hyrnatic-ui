import Spinner from './spinner/Spinner.vue';
import SpinnerOverlay from './spinner-overlay/SpinnerOverlay.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-spinners';
const components = {
    Spinner,
    SpinnerOverlay,
};
const dependencies = {
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
