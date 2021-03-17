import RadioButtonCoreInstall from '@core/modules/radio-buttons/install';
import RadioButton from '@elementic/modules/radio-buttons/radio-button/RadioButton.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    RadioButton,
};
const dependencies = {
    RadioButtonCoreInstall,
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
