import Dialog from './dialog/Dialog.vue';
import { CoreDialogsInstall, coreDialogWrapper, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Dialog,
};
const dependencies = {
    CoreDialogsInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponentAlias(app, 'h-dialog-wrapper', coreDialogWrapper);
        ModuleHelper.installComponents(app, components);
        installed = true;
    },
};
