import StepItem from './step/StepItem.vue';
import StepsNavigator from './step/StepsNavigator.vue';
import { CoreStepsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    StepItem,
    StepsNavigator,
};
const dependencies = {
    CoreStepsInstall,
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
