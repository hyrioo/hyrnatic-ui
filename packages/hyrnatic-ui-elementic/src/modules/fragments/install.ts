import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import FragmentsCoreInstall from '@core/modules/fragments/install';
import Fragment from './fragment/Fragment.vue';
import FragmentContainer from './fragment/FragmentContainer.vue';

let installed = false;
const components = {
    Fragment,
    FragmentContainer,
};
const dependencies = {
    FragmentsCoreInstall,
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
