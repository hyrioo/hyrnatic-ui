import Fragment from './fragment/Fragment.vue';
import FragmentContainer from './fragment-container/FragmentContainer.vue';
import { CoreFragmentsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-fragments';
const components = {
    Fragment,
    FragmentContainer,
};
const dependencies = {
    CoreFragmentsInstall,
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
