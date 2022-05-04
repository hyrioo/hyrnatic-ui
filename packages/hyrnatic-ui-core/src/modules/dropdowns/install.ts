import DropdownItem from './dropdown/DropdownItem';
import Dropdown from './dropdown/Dropdown';
import { installComponents, isModuleInstalled, markModuleAsInstalled } from '../../utils/package';

const moduleId = 'core-dropdowns';
const components = {
    Dropdown,
    DropdownItem,
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
