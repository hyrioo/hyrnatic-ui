import TabItem from './tab-item/TabItem.vue';
import TabsNavigator from './tabs-navigator/TabsNavigator.vue';
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
