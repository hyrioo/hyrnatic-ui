import Dialog from './dialog/Dialog.vue';
import { CoreDialogsInstall, coreDialogWrapper, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-dialgos';
const components = {
    Dialog,
};
const dependencies = {
    CoreDialogsInstall,
};

export default {
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponentAlias(app, 'h-dialog-wrapper', coreDialogWrapper);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
