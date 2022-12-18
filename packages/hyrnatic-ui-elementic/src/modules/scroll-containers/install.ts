import ScrollContainer from './scroll-container/ScrollContainer.vue';
import { CoreScrollContainersInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-scroll-containers';
const components = {
    ScrollContainer,
};
const dependencies = {
    CoreScrollContainersInstall,
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
