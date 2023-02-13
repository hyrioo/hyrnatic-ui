import TabItem from './tab-item/TabItem.vue';
import TabsNavigator from './tabs-navigator/TabsNavigator.vue';
import { CoreTabsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-tabs';
const components = {
    TabItem,
    TabsNavigator,
};
const dependencies = {
    CoreTabsInstall,
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
