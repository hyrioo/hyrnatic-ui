import Dialog from './dialog/Dialog';
import DialogWrapper from './dialog/DialogWrapper';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-dialogs';
const components = {
    Dialog,
    DialogWrapper,
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
