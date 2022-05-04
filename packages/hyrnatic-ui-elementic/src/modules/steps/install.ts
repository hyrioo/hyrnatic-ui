import StepItem from './step-item/StepItem.vue';
import StepsNavigator from './steps-navigator/StepsNavigator.vue';
import { CoreStepsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-steps';
const components = {
    StepItem,
    StepsNavigator,
};
const dependencies = {
    CoreStepsInstall,
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
