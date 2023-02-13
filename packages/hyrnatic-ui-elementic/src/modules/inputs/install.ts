import Input from './input/Input.vue';
import Autocomplete from './autocomplete/Autocomplete.vue';
import FileInput from './file-input/FileInput.vue';
import { CoreInputsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';
import { App } from 'vue';

const moduleId = 'elementic-inputs';
const components = {
    Input,
    Autocomplete,
    FileInput,
};
const dependencies = {
    CoreInputsInstall,
};

export default {
    install: (app: App, options?: object) => {
        if (ModuleHelper.isModuleInstalled(app, moduleId)) {
            return;
        }
        ModuleHelper.installDependencies(app, dependencies, options);
        ModuleHelper.installComponents(app, components);
        ModuleHelper.markModuleAsInstalled(app, moduleId);
    },
};
