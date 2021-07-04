import Checkbox from './checkbox/Checkbox.vue';
import { CoreCheckboxInstall, ModuleHelper, StringHelper } from '@hyrioo/hyrnatic-ui-core';
import checkStroke from './custom-icons/check-stroke';
import IconRegistry from '../../utils/icon-registry';

let installed = false;
const components = {
    Checkbox,
};
const dependencies = {
    CoreCheckboxInstall,
};

export const CheckboxIcons = {
    checkStroke: checkStroke,
}

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        Object.keys(CheckboxIcons).forEach((key) => {
            const newKey = StringHelper.kebabize(key);
            IconRegistry.register(newKey, CheckboxIcons[key]);
            CheckboxIcons[key] = newKey;
        });
        installed = true;
    },
};