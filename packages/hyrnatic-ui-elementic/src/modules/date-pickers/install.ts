import DatePicker from './date-picker/DatePicker.vue';
import IconsInstall from '../icons/install';
import InputsInstall from '../inputs/install';
import { ModuleHelper, CoreDatePickersInstall } from '@hyrioo/hyrnatic-ui-core';

const moduleId = 'elementic-date-pickers';
const components = {
    DatePicker,
};
const dependencies = {
    CoreDatePickersInstall,
    IconsInstall,
    InputsInstall,
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
