import Select from './select/Select';
import SelectItem from './select/SelectItem';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-selects';
const components = {
    Select,
    SelectItem,
};

export default {
    install: (app, options) => {
        if (isModuleInstalled(app, moduleId)) {
            return;
        }
        installComponents(app, components);
        markModuleAsInstalled(app, moduleId);
    },
};
