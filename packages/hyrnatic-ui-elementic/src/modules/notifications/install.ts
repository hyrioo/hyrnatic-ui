import Notification from './notification/Notification.vue';
import NotificationWrapper from './notification/NotificationWrapper.vue';
import { CoreNotificationsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Notification,
    NotificationWrapper,
};
const dependencies = {
    CoreNotificationsInstall,
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
