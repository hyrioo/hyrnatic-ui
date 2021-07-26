import Button from './button/Button.vue';
import IconButton from './icon-button/IconButton.vue';
import LinkButton from './link-button/LinkButton.vue';
import IconInstall from '../icons/install';
import { ModuleHelper, CoreButtonsInstall } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-buttons';
const components = {
    Button,
    IconButton,
    LinkButton,
};
const dependencies = {
    CoreButtonsInstall,
    IconInstall,
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
