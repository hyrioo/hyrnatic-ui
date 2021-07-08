import DatePicker from './date-picker/DatePicker.vue';
import IconsInstall from '../icons/install';
import InputsInstall from '../inputs/install';
import { ModuleHelper, CoreDatePickersInstall } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    DatePicker,
};
const dependencies = {
    CoreDatePickersInstall,
    IconsInstall,
    InputsInstall,
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
