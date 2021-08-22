import Input from './input/Input.vue';
import Autocomplete from './autocomplete/Autocomplete.vue';
import FileInput from './file-input/FileInput.vue';
import { CoreInputsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Input,
    Autocomplete,
    FileInput,
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
