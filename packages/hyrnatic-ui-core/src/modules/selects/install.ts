import Select from './select/Select';
import SelectItem from './select/SelectItem';
import SimpleSelect from './simple-select/SimpleSelect';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';
import { App } from 'vue';

const moduleId = 'core-selects';
const components = {
    Select,
    SelectItem,
    SimpleSelect,
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
