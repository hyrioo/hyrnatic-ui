import Button from '@/modules/buttons/button/Button.vue';
import IconButton from '@/modules/buttons/icon-button/IconButton.vue';
import IconInstall from '@/modules/icons/install';
import { ModuleHelper, CoreButtonsInstall } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Button,
    IconButton,
};
const dependencies = {
    CoreButtonsInstall,
    IconInstall,
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
