import StepsNavigator from './step/StepsNavigator';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-steps';
const components = {
    StepsNavigator,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
