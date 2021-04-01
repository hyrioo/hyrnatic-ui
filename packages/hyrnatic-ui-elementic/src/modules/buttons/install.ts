import Button from '@/modules/buttons/button/Button';
import IconButton from '@/modules/buttons/icon-button/IconButton';
import LinkButton from '@/modules/buttons/link-button/LinkButton';
import IconInstall from '@/modules/icons/install';
import { ModuleHelper, CoreButtonsInstall } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
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
