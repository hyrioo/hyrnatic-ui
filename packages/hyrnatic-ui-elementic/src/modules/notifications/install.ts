import Notification from './notification/Notification.vue';
import NotificationWrapper from './notification/NotificationWrapper.vue';
import { CoreNotificationsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-notifications';
const components = {
    Notification,
    NotificationWrapper,
};
const dependencies = {
    CoreNotificationsInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};