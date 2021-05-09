import Dialog from './dialog/Dialog';
import DialogWrapper from './dialog/DialogWrapper';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Dialog,
    DialogWrapper,
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
