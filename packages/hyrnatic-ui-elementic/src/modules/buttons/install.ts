import Button from './button/Button';
import IconButton from './icon-button/IconButton';
import LinkButton from './link-button/LinkButton';
import IconInstall from '../icons/install';
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
