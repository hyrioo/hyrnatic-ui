import Dropdown from './dropdown/Dropdown.vue';
import DropdownItem from './dropdown-item/DropdownItem.vue';
import DropdownItemDivider from './dropdown-item-divider/DropdownItemDivider.vue';
import DropdownItemHeader from './dropdown-item-header/DropdownItemHeader.vue';
import { CoreDropdownsInstall, ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Dropdown,
    DropdownItem,
    DropdownItemDivider,
    DropdownItemHeader,
};
const dependencies = {
    CoreDropdownsInstall,
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
