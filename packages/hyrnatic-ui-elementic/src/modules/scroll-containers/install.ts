import ScrollContainer from '@/modules/scroll-containers/scroll-container/ScrollContainer.vue';
import { CoreScrollContainersInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    ScrollContainer,
};
const dependencies = {
    CoreScrollContainersInstall,
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
