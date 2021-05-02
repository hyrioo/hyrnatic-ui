import RadioButton from './radio-button/RadioButton.vue';
import { CoreRadioButtonsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    RadioButton,
};
const dependencies = {
    CoreRadioButtonsInstall,
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
