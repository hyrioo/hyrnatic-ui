import ScrollContainer from './scroll-container/ScrollContainer.vue';
import { CoreScrollContainersInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-scroll-containers';
const components = {
    ScrollContainer,
};
const dependencies = {
    CoreScrollContainersInstall,
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
