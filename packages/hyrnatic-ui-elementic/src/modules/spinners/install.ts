import Spinner from './spinner/Spinner.vue';
import SpinnerOverlay from './spinner-overlay/SpinnerOverlay.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-spinners';
export const components = {
    Spinner,
    SpinnerOverlay,
};
const dependencies = {
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
