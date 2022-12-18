import Input from './input/Input';
import Autocomplete from './autocomplete/Autocomplete';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-inputs';
const components = {
    Input,
    Autocomplete,
};

export default {
    install: (app: App, options?: object) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
