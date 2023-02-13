import Notification from './notification/Notification.vue';
import NotificationWrapper from './notification/NotificationWrapper.vue';
import { CoreNotificationsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-notifications';
const components = {
    Notification,
    NotificationWrapper,
};
const dependencies = {
    CoreNotificationsInstall,
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
