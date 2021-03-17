import StepCoreInstall from '@core/modules/steps/install';
import StepItem from '@elementic/modules/steps/step/StepItem.vue';
import StepsNavigator from '@elementic/modules/steps/step/StepsNavigator.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    StepItem,
    StepsNavigator,
};
const dependencies = {
    StepCoreInstall,
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
