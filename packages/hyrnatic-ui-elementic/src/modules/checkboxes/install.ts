import Checkbox from './checkbox/Checkbox.vue';
import { CoreCheckboxInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import iconRegistry from '../../utils/icon-registry';
import checkStroke from './custom-icons/check-stroke';

let installed = false;
const components = {
    Checkbox,
};
const dependencies = {
    CoreCheckboxInstall,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        ModuleHelper.installDependencies(app, options, dependencies);
        ModuleHelper.installComponents(app, components);
        iconRegistry.register('check-stroke', checkStroke);
        installed = true;
    },
};
