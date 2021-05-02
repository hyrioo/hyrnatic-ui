import Dropdown from '@/modules/dropdowns/dropdown/Dropdown.vue';
import DropdownItem from '@/modules/dropdowns/dropdown/DropdownItem.vue';
import DropdownItemDivider from '@/modules/dropdowns/dropdown/DropdownItemDivider.vue';
import DropdownItemHeader from '@/modules/dropdowns/dropdown/DropdownItemHeader.vue';
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
