import CheckboxCoreInstall from '@core/modules/checkboxes/install';
import Switch from '@elementic/modules/switches/switch/Switch.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Switch,
};
const dependencies = {
    CheckboxCoreInstall,
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
