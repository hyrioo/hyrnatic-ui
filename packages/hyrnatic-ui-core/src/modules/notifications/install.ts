import Notification from './notification/Notification';
import NotificationWrapper from './notification/NotificationWrapper';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-notifications';
const components = {
    Notification,
    NotificationWrapper,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
