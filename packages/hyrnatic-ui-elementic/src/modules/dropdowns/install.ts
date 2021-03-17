import DropdownCoreInstall from '@core/modules/dropdowns/install';
import Dropdown from '@elementic/modules/dropdowns/dropdown/Dropdown.vue';
import DropdownItem from '@elementic/modules/dropdowns/dropdown/DropdownItem.vue';
import DropdownItemDivider from '@elementic/modules/dropdowns/dropdown/DropdownItemDivider.vue';
import DropdownItemHeader from '@elementic/modules/dropdowns/dropdown/DropdownItemHeader.vue';
import { ModuleHelper } from '@hyrioo/hyrnatic-ui-core';

let installed = false;
const components = {
    Dropdown,
    DropdownItem,
    DropdownItemDivider,
    DropdownItemHeader,
};
const dependencies = {
    DropdownCoreInstall,
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
