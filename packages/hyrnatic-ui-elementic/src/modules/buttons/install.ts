import Button from './button/Button.vue';
import IconButton from './icon-button/IconButton.vue';
import LinkButton from './link-button/LinkButton.vue';
import IconInstall from '../icons/install';
import { ModuleHelper, CoreButtonsInstall } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

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
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
