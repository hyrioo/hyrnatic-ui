import Notification from './notification/Notification';
import NotificationWrapper from './notification/NotificationWrapper';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Notification,
    NotificationWrapper,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        installComponents(app, components);
        installed = true;
    },
};
