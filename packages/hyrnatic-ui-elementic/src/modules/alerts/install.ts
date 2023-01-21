import Alert from './alert/Alert.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-alerts';
export const components = {
    Alert,
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
