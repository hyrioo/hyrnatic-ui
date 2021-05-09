import DropdownItem from './dropdown/DropdownItem';
import Dropdown from './dropdown/Dropdown';
import { installComponents } from '../../utils/package';

let installed = false;
const components = {
    Dropdown,
    DropdownItem,
};

export default {
    installed,
    install: (app, options) => {
        if (installed) {
            return;
        }
        installComponents(app, components);
        installed = true;
    },
};
