import TabItem from './tab/TabItem.vue';
import TabsNavigator from './tab/TabsNavigator.vue';
import { CoreTabsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    TabItem,
    TabsNavigator,
};
const dependencies = {
    CoreTabsInstall,
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
