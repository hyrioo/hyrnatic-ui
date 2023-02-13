import StepItem from './step-item/StepItem.vue';
import StepsNavigator from './steps-navigator/StepsNavigator.vue';
import { CoreStepsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-steps';
const components = {
    StepItem,
    StepsNavigator,
};
const dependencies = {
    CoreStepsInstall,
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
