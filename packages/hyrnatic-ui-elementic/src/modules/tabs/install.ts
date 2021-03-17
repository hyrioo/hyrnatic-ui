import TabCoreInstall from '@core/modules/tabs/install';
import TabItem from '@elementic/modules/tabs/tab/TabItem.vue';
import TabsNavigator from '@elementic/modules/tabs/tab/TabsNavigator.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    TabItem,
    TabsNavigator,
};
const dependencies = {
    TabCoreInstall,
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
