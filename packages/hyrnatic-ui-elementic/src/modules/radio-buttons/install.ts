import RadioButton from './radio-button/RadioButton.vue';
import { CoreRadioButtonsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-radio-buttons';
export const components = {
    RadioButton,
};
const dependencies = {
    CoreRadioButtonsInstall,
};

export default {
    install: (app, options) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
