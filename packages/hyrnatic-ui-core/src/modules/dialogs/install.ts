import Dialog from './dialog/Dialog';
import DialogWrapper from './dialog/DialogWrapper';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-dialogs';
const components = {
    Dialog,
    DialogWrapper,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
