import { CoreInputsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import Input from '@/modules/inputs/input/Input.vue';

let installed = false;
const components = {
    Input,
};
const dependencies = {
    CoreInputsInstall,
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
