import DropdownItem from '@/modules/dropdowns/dropdown/DropdownItem';
import Dropdown from '@/modules/dropdowns/dropdown/Dropdown';
import { installComponents } from '@/utils/package';

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
