import Fragment from './fragment/Fragment.vue';
import FragmentContainer from './fragment/FragmentContainer.vue';
import { CoreFragmentsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Fragment,
    FragmentContainer,
};
const dependencies = {
    CoreFragmentsInstall,
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
